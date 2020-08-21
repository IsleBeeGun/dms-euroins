function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.onload = function () {
      if ((xhr.status >= 200) & (xhr.status < 300)) {
        resolve(xhr.response);
      } else {
        reject(new Error("Проблема с сервером"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Проблема с интренет-соединением"));
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}
function sendOrder() {
  let programs = [];
  document.getElementById("orderForm_programs_1").checked
    ? programs.push(document.getElementById("orderForm_programs_1").value)
    : null;
  document.getElementById("orderForm_programs_2").checked
    ? programs.push(document.getElementById("orderForm_programs_2").value)
    : null;
  document.getElementById("orderForm_programs_3").checked
    ? programs.push(document.getElementById("orderForm_programs_3").value)
    : null;
  document.getElementById("orderForm_programs_4").checked
    ? programs.push(document.getElementById("orderForm_programs_4").value)
    : null;
  let insured = [];
  document.getElementById("orderForm_insured_1").checked
    ? insured.push(document.getElementById("orderForm_insured_1").value)
    : null;
  document.getElementById("orderForm_insured_2").checked
    ? insured.push(document.getElementById("orderForm_insured_2").value)
    : null;
  document.getElementById("orderForm_insured_3").checked
    ? insured.push(document.getElementById("orderForm_insured_3").value)
    : null;
  let levels = [];
  document.getElementById("orderForm_levels_1").checked
    ? levels.push(document.getElementById("orderForm_levels_1").value)
    : null;
  document.getElementById("orderForm_levels_2").checked
    ? levels.push(document.getElementById("orderForm_levels_2").value)
    : null;
  document.getElementById("orderForm_levels_3").checked
    ? levels.push(document.getElementById("orderForm_levels_3").value)
    : null;

  let orderData = {
    name: document.getElementById("orderForm_name").value,
    phone: document.getElementById("orderForm_phone").value,
    email: document.getElementById("orderForm_email").value,
    comment: document.getElementById("orderForm_comment").value,
    region: document.getElementById("region-selector").value,
    agreement: document.getElementById("orderForm_agreement").checked,
    programs,
    insured,
    levels,
  };

  sendHttpRequest(
    "POST",
    "http://testapi.euro-ins.ru/claim/submit/dms_insurance",
    orderData
  )
    .then((res) => {
      console.log(res);
      document
        .getElementById("sendFormModalOk")
        .setAttribute("style", "visibility:visible; opacity: 1;");
    })
    .catch((rej) => {
      console.log(rej);
      document
        .getElementById("sendFormModalError")
        .setAttribute("style", "visibility:visible; opacity: 1;");
    });
}

document.getElementById("orderForm").onsubmit = async (event) => {
  event.preventDefault();
  sendOrder();
};

function sendCall() {
  let callData = {
    source: "dms.euro-ins.ru",
    name: document.getElementById("callForm_name").value,
    phone: document.getElementById("callForm_phone").value,
    region: document.getElementById("region-selector-call").value,
    agreement: document.getElementById("callForm_agreement").checked,
    timeFrom: document.getElementById("callForm_timeFrom").value,
    timeTo: document.getElementById("callForm_timeTo").value,
  };

  sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    callData
  )
    .then((res) => {
      console.log(res);
      document
        .querySelector("#callFormModal")
        .setAttribute("style", "visibility:hidden; opacity: 0;");
      document
        .getElementById("sendFormModalOk")
        .setAttribute("style", "visibility:visible; opacity: 1;");
    })
    .catch((rej) => {
      console.log(rej);
      document
        .querySelector("#callFormModal")
        .setAttribute("style", "visibility:hidden; opacity: 0;");
      document
        .getElementById("sendFormModalError")
        .setAttribute("style", "visibility:visible; opacity: 1;");
    });
}

document.getElementById("callForm").onsubmit = async (event) => {
  event.preventDefault();
  sendCall();
};
