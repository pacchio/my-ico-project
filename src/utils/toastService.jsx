import {toast} from "react-toastify";

const showMessage = (message, type, options = {}) => {
  (type ? toast[type] : toast)(message, {
    position: "bottom-right",
    autoClose: options.autoClose ?? 5000,
    hideProgressBar: options.hideProgressBar ?? false,
    closeOnClick: options.closeOnClick ?? true,
    pauseOnHover: options.pauseOnHover ?? true,
    draggable: options.draggable ?? false,
    progress: options.progress ?? undefined,
  });
}

const clearMessages = () => toast.dismiss()

export {
  showMessage,
  clearMessages
}
