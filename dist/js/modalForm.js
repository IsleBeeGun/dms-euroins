var modalWait = 240000;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document
      .getElementById("callFormModal")
      .setAttribute("style", "visibility:visible; opacity: 1;");
  }, modalWait);

  document.querySelector("#callFormModal .b-modal__exit").onclick = () => {
    document
      .querySelector("#callFormModal")
      .setAttribute("style", "visibility:hidden; opacity: 0;");
  };
});
