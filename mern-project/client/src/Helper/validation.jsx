import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Validation {
  isEmpty(value) {
    if (value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  successToast(msg) {
    toast.success(msg);
  }

  errorToast(msg) {
    toast.error(msg);
  }
}

export default new Validation();
