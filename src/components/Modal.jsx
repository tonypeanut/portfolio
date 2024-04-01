import useContexto from '../hook/useContexto';

const Modal = () => {
    const { closeModal, tipo, id } = useContexto();

    return (
      <>
            <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className=" bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
                    <p>tipo: {tipo}</p>
                    <p>id: {id}</p>
                    <button onClick={()=>closeModal()}>Close Modal</button>
                </div>
            </div>
      </>
  
    )
  }
  
  export default Modal