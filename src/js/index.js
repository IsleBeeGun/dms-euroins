"use strict";
// Required for Webpack's MiniCssExtractPlugin module in order to bundle it to single css file:
// DO NOT REMOVE NEXT LINE
require("../less/index.less");

// Handler for selecting clinics
import SlimSelect from "slim-select";

// Loading lists of clinics
import clinicsList from "../clinicsList.json5";

// Applying clinics to clinics-selector
// clinicsList.clinics.forEach( clinic => {
//     const option = document.createElement("option");
//     option.innerText = clinic.name;
//     option.value = clinic.name;
//     document.getElementById("clinics-selector").appendChild(option);
// });

// Applying & configuring SlimSelect
var select = new SlimSelect({
  select: "#clinics-selector",
  placeholder: "Выберите медцентр",
  searchPlaceholder: "Поиск",
  searchText: 'Нет результатов',
  searchFocus: false,
  showContent: "down",
  data: clinicsList.clinics.map((clinic) => {
    return { text: clinic.name, value: clinic.name };
  }),
  onChange: (option) => {
    console.log(option);
    document.getElementById(
      "clinics-result"
    ).innerHTML = clinicsList.clinics.find(
      (clinic) => clinic.name == option.value
    ).text;
  },
});
