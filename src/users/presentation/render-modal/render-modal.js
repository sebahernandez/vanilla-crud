import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
let modal;

// TODO: cargar usuario por id
export const showModal = () => {
  modal.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal.classList.add("hide-modal");
  // reset del formulario
};
/**
 *
 * @param {HTMLDivElement} modal
 */
export const renderModal = (element) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";

  element.appendChild(modal);
};
