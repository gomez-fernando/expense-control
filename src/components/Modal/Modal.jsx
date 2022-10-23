import CloseBtn from '../../img/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const closeModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img
          src={CloseBtn} alt="cerrar modal"
          onClick={closeModal}
        />
      </div>
      <form className={`form ${!!animateModal ? 'animate' : 'close'}`}>
        <legend>Nuevo gasto</legend>
      </form>
    </div>
  )
}

export default Modal