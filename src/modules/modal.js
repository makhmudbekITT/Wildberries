import Busket from "./busket";

const Modal = () => {
    const modalWindow = document.querySelector("#modal-cart");
    const btnBusket = document.querySelector(".button.button-cart")

    btnBusket.addEventListener("click", () => {
        modalWindow.classList.add("show")
        Busket();
    })

    modalWindow.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("show") ||
            e.target.className == "modal-close"
        ) {
            modalWindow.classList.remove("show")
        }
    })
}

export default Modal;