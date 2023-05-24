import "./render-buttons.css";
import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";

/**
 *
 * @param {HTMLDivElement} element
 */

export const renderButtons = (element) => {
  const div = document.createElement("div");
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next >";
  const prevButton = document.createElement("button");
  prevButton.innerText = "< Prev";

  const currentPageLabel = document.createElement("span");
  currentPageLabel.id = "current-page";
  currentPageLabel.innerText = usersStore.getCurrentPage();

  div.append(prevButton, currentPageLabel, nextButton);
  element.append(div);

  nextButton.addEventListener("click", async () => {
    await usersStore.loadNextPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });
  prevButton.addEventListener("click", async () => {
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });
};
