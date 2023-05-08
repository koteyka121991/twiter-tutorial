import { create } from "zustand";

interface UseRegisterStore {
    isOpen: boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const UseRegisterModal = create<UseRegisterStore>((set)=> ({
    isOpen:false,
    onOpen:()=> set({isOpen:true}),
    onClose:()=> set({isOpen:false}),
}));

export default UseRegisterModal;