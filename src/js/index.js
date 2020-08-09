"use strict";
// Required for Webpack's MiniCssExtractPlugin module in order to bundle it to single css file:
// DO NOT REMOVE NEXT LINE
require("../less/index.less");

// Loading lists of clinics
import clinicsList from '../clinicsList.json5';

console.log(clinicsList.clinics[0].text);
