import useContexto from '../hook/useContexto';
import ModalExperiencia from './ModalExperiencia';
import ModalFormulario from './ModalFormulario';
import ModalProyectos from './ModalProyectos';
import ModalSkills from './ModalSkills';

import closeIcon from '../assets/icons/close.svg';



const Modal = () => {
    const { closeModal, tipo, id } = useContexto();

    const handleClick = (e) => {
      if (e.target.id === "fuera"){
        closeModal();
      }
    }

    return (
      <>
            <div id="fuera" className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={handleClick} >
                <div id="modal" className=" card card-side shadow-xl bg-white flex flex-col justify-center items-center gap-5 relative">
                    { tipo === 'experiencia' && (<ModalExperiencia id={id}/>)}
                    { tipo === 'formulario' && (<ModalFormulario/>)}
                    { tipo === 'proyectos' && (<ModalProyectos id={id}/>)}
                    { tipo === 'skill' && (<ModalSkills tipo={tipo} id={id}/>)}
                    { tipo === 'softskill' && (<ModalSkills tipo={tipo} id={id}/>)}
                    <button className=" absolute top-2 right-2 border border-white hover:border-red-500 rounded-lg p-0.5 hover:bg-red-200" onClick={()=>closeModal()}>
                        <img src={closeIcon} alt="Cerrar" width="10px"/>
                    </button>
                </div>
            </div>
      </>
  
    )
  }
  
  export default Modal