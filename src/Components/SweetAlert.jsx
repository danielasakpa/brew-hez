// Reusable SweetAlert2 component for notifications
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

// Success alert
export const showSuccessAlert = (title, text) => {
  return MySwal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "Great!",
    confirmButtonColor: "#FF0000", 
    background: "#FFFFFF",
    color: "#333333",
  })
}

// Error alert
export const showErrorAlert = (title, text) => {
  return MySwal.fire({
    title,
    text,
    icon: "error",
    confirmButtonText: "Try Again",
    confirmButtonColor: "#FF0000", 
    background: "#FFFFFF",
    color: "#333333",
  })
}

// Confirmation alert
export const showConfirmAlert = (title, text) => {
  return MySwal.fire({
    title,
    text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, proceed!",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#FF0000", 
    cancelButtonColor: "#8B4513", 
    background: "#FFFFFF",
    color: "#333333",
  })
}

// Loading alert
export const showLoadingAlert = (title) => {
  return MySwal.fire({
    title,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    background: "#FFFFFF",
    color: "#333333",
    didOpen: () => {
      MySwal.showLoading()
    },
  })
}

// Close any open alert
export const closeAlert = () => {
  MySwal.close()
}
