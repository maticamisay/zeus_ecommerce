import reactDom from "react-dom";
import '../Styles/Modal/Modal.css'

function Modal({ children }) {
  return reactDom.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export default Modal;
