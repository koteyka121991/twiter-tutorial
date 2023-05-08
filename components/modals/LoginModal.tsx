import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onOpen();
    loginModal.onClose();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(() => {
    try {
        setIsLoading(true);
        // todo add log in
        loginModal.onClose();
    } catch (error) {
      console.log(error);
    }
  }, [loginModal]);

  const bodyContent =(
    <div className="flex flex-col gap-4">
        <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
        />
             <Input 
        placeholder="Pasword"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}  
        />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>AFirst time using twiter?</p>
      <span
        onClick={onToggle}
        className="
        text-white 
        cursor-pointer 
        hover:underline
      "
      >
        Create an account
      </span>
    </div>
  );
  return (
<Modal 
disabled={isLoading}
isOpen={loginModal.isOpen} 
title="Login"
actionLabel="Sigh in"
onClose={loginModal.onClose}
onSubmit={onSubmit}
body={bodyContent}
footer= {footerContent}/>

  );
};

export default LoginModal;
