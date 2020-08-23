document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sendFormModalOk .b-modal__exit").onclick = () => {
    document
      .querySelector("#sendFormModalOk")
      .setAttribute("style", "visibility:hidden; opacity: 0;");
  };
});
