const form = document.getElementById("content-form");
const headingInput = document.getElementById("headingInput");
const subheadingInput = document.getElementById("subheadingInput");
const logoInput = document.getElementById("logoInput");

const heading = document.getElementById("heading");
const logo = document.getElementById("logo");

form.addEventListener("submit", (e) => e.preventDefault());

headingInput.addEventListener(
  "change",
  (e) => (heading.innerText = e.target.value)
);

logoInput.addEventListener("change", () => {
  if (logoInput.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      logo.src = e.target.result;
    };
    reader.readAsDataURL(logoInput);
  } else {
    logo.src = "";
  }
});
