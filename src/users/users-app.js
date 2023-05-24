import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  await usersStore.loadNextPage();
  element.innerHTML = " ";

  const title = document.createElement("h1");
  title.innerText = "Vanilla Crud Users App";
  element.appendChild(title);

  renderTable(element);
  renderButtons(element);
  renderAddButton(element);
  renderModal(element);
};
