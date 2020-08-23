document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sendFormModalError .b-modal__exit").onclick = () => {
    document
      .querySelector("#sendFormModalError")
      .setAttribute("style", "visibility:hidden; opacity: 0;");
  };
});
