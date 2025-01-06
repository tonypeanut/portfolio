import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Alerta from './Alerta';  // Asegúrate de importar correctamente tu componente Alerta
import useContexto from "../hook/useContexto";
import { useTranslation } from "react-i18next";
import RedesSociales from "./RedesSociales"

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState(null); // Cambiado de msg a alerta
  const [isValid, setIsValid] = useState(false); // Estado para controlar si el formulario es válido
  const { closeModal } = useContexto();
  const { t } = useTranslation(); 

  // Función para validar el formulario
  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(
      nombre.trim() !== '' &&
      emailRegex.test(email) &&
      asunto.trim() !== '' &&
      mensaje.trim() !== ''
    );
  };

  useEffect(() => {
    validateForm(); // Validar cada vez que los datos cambian
  }, [nombre, email, asunto, mensaje]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,
      to_name: 'TonyPeanut',  // Reemplaza con el nombre del destinatario
      message: mensaje,
      email: email,
      subject: asunto,
    };

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(response => {
        setAlerta({
          msg: 'Correo enviado con éxito',
          error: false
        });
        
        // Cerrar la alerta después de 5 segundos
        setTimeout(() => {
          closeModal();
        }, 5000);
      })
      .catch(error => {
        setAlerta({
          msg: 'Error al enviar el correo',
          error: true
        });
        
      });
  };

  return (
    <>
      <div className="p-5">
        <RedesSociales/>
        <h1 className="text-3xl font-bold text-center">{t('contact.title')}</h1>

        <form onSubmit={handleSubmit} className="mb-5">
          <div className="mt-3">
            <input
              type="text"
              id="nombre"
              placeholder={t('contact.input-1')}
              className="border rounded p-1 w-full"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <input
              type="email"
              id="correo"
              placeholder={t('contact.input-2')}
              className="border rounded p-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              id="asunto"
              placeholder={t('contact.input-3')}
              className="border rounded p-1 w-full"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>

          <div className="mt-3 flex flex-col">
            <textarea
              id="mensaje"
              placeholder={t('contact.input-4')}
              className="border rounded p-1"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`p-2 rounded-xl w-full mt-3 ${isValid ? 'bg-gray-400 hover:bg-gray-500' : 'bg-gray-200 cursor-not-allowed'}`}
            disabled={!isValid}  // Deshabilitar el botón si el formulario no es válido
          >
            {t('contact.submit')}
          </button>
        </form>

        {alerta && <Alerta alerta={alerta} />}
      </div>
    </>
  );
};

export default ContactForm;
