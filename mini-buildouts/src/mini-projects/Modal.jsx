import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {

    const modalRef = useRef();

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) { 
            // i.e if target doesn't contain id of modalRef, 
            // in other words, I clicked on an element that's not modalRef
            if (onClose) 
                onClose();
            else
                alert('No onclose given')
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOverlayClick);
        return () => {
            document.removeEventListener("mousedown", handleOverlayClick);
        }
    }, [])

    useEffect(() => {
        console.log('inside isopen effect.');        
        if (isOpen)
            document.body.classList.add('active-modal');

        return () => {
            // on every re-render in the modal, remove active-modal 
            // that prevents scrolling on whole body
            document.body.classList.remove('active-modal');
        }
    })

    if (!isOpen)
        return <></>;

    return (
        <div className="modal-backdrop">
            <div className="modal" ref={modalRef}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;