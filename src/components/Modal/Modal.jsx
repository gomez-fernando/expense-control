import CloseBtn from '../../img/close.svg';

const Modal = ({setModal}) => {
  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img
          src={CloseBtn} alt="cerrar modal"
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default Modal