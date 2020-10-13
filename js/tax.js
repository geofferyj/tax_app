let result_display = document.querySelector(".result");
let cra_display = document.querySelector(".cra");
let ti_display = document.querySelector(".ti");
let at_display = document.querySelector(".at");
let formatter = new Intl.NumberFormat(undefined, {style:"decimal"});
let annual_income = document.getElementById("annual_income");

// annual_income.addEventListener("input", (e) => {
//   e.target.value = formatter.format(e.target.value.replace(/,/ig, ""));
// });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  result = calculateTax(annual_income.value.replace(/,/ig, ""));

  cra_display.textContent = formatter.format(_round(result.cra, 2));
  ti_display.textContent = formatter.format(_round(result.ci, 2));
  at_display.textContent = formatter.format(_round(result.icp, 2));
  result_display.classList.remove("d-none");
});

function _round(number, decimalPlaces = 0) {
  return (
    Math.round(number * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces)
  );
}

function calculateTax(annual_income) {
  let x = 304_347;
  let y = Number(annual_income);
  let cra, ci, icp;

  const z = 200_000;
  const tax1 = 300_000;
  const tax2 = 300_000;
  const tax3 = 500_000;
  const tax4 = 500_000;
  const tax5 = 1_600_000;
  const tax6 = 3_200_000;

  if (y <= x) {
    cra = z + 0.2 * y;
    ci = y - cra;
    icp = 0.01 * y;
    return { cra, ci, icp };
  }

  if ((y > x) & (y < 20_000_000)) {
    if (y - tax1 - tax2 <= 0) {
      cra = z + 0.2 * y;
      ci = y - cra;
      icp = ci * 0.07;
      return { cra, ci, icp };
    }

    if (y <= 1_000_000) {
      cra = z + 0.2 * y;
      ci = y - cra;
      icp = tax1 * 0.07 + (ci - tax2) * 0.11;
      return { cra, ci, icp };
    }

    if ((y > 1_000_000) & (y <= 1_625_000)) {
      cra = z + 0.2 * y;
      ci = y - cra;
      tax = tax1 + tax2;
      icp = tax1 * 0.07 + tax2 * 0.11 + (ci - tax) * 0.15;
      return { cra, ci, icp };
    }

    if ((y > 1_625_000) & (y <= 2_250_000)) {
      cra = z + 0.2 * y;
      ci = y - cra;
      tax11 = tax5 - tax4;
      icp = tax1 * 0.07 + tax2 * 0.11 + tax3 * 0.15 + (ci - tax11) * 0.19;
      return { cra, ci, icp };
    }

    if ((y > 2_250_000) & (y <= 4_265_624)) {
      cra = z + 0.2 * y;
      ci = y - cra;
      icp =
        tax1 * 0.07 +
        tax2 * 0.11 +
        tax3 * 0.15 +
        tax4 * 0.19 +
        (ci - tax5) * 0.21;
      return { cra, ci, icp };
    }

    if ((y > 4265624) & (y < 20000000)) {
      cra = z + 0.2 * y;
      ci = y - cra;
      icp =
        tax1 * 0.07 +
        tax2 * 0.11 +
        tax3 * 0.15 +
        tax4 * 0.19 +
        tax5 * 0.21 +
        (ci - tax6) * 0.24;
      return { cra, ci, icp };
    }
  } else {
    cra = 0.01 * y + 0.2 * y;
    ci = y - cra;
    icp =
      tax1 * 0.07 +
      tax2 * 0.11 +
      tax3 * 0.15 +
      tax4 * 0.19 +
      tax5 * 0.21 +
      (ci - tax6) * 0.24;
    return { cra, ci, icp };
  }
}
