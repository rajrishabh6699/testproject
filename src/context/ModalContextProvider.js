import {useState } from "react";
import ModalContext from "./modalcontext";


export default function ModalContextProvider(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{showModal,setShowModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}