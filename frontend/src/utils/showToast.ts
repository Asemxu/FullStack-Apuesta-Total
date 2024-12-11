import { TOAST } from '@/helpers/constants';
import Toastify from 'toastify-js';

const showToast = (type: string, message: string)  =>{
  let backgroundStyle: string;

  switch (type) {
    case 'success':
      backgroundStyle = TOAST.STYLES.SUCCESS;
      break;
    case 'error':
      backgroundStyle = TOAST.STYLES.ERROR ;
      break;
    default:
      throw new Error("Tipo de notificación no soportado");
  }

  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "right",
    style: {
        background: backgroundStyle,
    },
  }).showToast();
}

export default showToast
