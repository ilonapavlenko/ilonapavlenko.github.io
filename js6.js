function update(calc) {
    let s = document.getElementsByName("type");
    let select = s[0];
    let radioDiv = document.getElementById("card");
    radioDiv.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");
    let checkDiv = document.getElementById("certif");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");
    let price = 0;
    let prices = getPrices();
    let index = parseInt(select.value) - 1;
    if (index >= 0) {
      price = prices.prodTypes[index];
    }
    if (select.value === "2") {
      let radios = document.getElementsByName("radio");
      radios.forEach(function (radio) {
        if (radio.checked) {
          let optionPrice = prices.prodOptions[radio.value];
          if (optionPrice !== undefined) {
            price -= optionPrice;
          }
        }
      });
    }
    if (select.value === "3") {
      let checkboxes = document.getElementsByName("checkbox");
      checkboxes.forEach(function (checkboxes) {
        if (checkboxes.checked) {
          let checkboxPrice = prices.prodProperties[checkboxes.value];
          if (checkboxPrice !== undefined) {
            price -= checkboxPrice;
          }
        }
      });
    }
    let err = /^(?!(0))\d+$/;
    let prodPrice = document.getElementById("result");
    if (calc.match(err) === null) {
      prodPrice.innerHTML = "Неккоректный ввод";
    }
    else {
  
      prodPrice.innerHTML = calc * price + " рублей";
    }
    }
  function getPrices() {
    return {
      prodTypes: [1500, 1450, 1500],
      prodOptions: {
        op2: 100,
        op3: 150,
      },
      prodProperties: {
        ch1: 130,
        ch2: 180,
      }
  
    };
  }
  window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("card");
    radioDiv.style.display = "none";
    let checkboxDiv = document.getElementById("certif");
    checkboxDiv.style.display = "none";
    let calc = document.getElementById("count");
    calc.addEventListener("input", function (event) {
      update(calc.value);
    });
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function (event) {
      let target = event.target;
      update(calc.value);
    });
    let radios = document.getElementsByName("radio");
    radios.forEach(function (radio) {
      radio.addEventListener("change", function (event) {
        let r = event.target;
        update(calc.value);
      });
    });
    let checkboxes = document.getElementsByName("checkbox");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (event) {
        let c = event.target;
        update(calc.value);
      });
    });
  });
