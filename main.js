const form = document.getElementById("content-form");

const heading = document.getElementById("heading");
const subHeading = document.getElementById("subHeading");
const actionBtn = document.getElementById("actionBtn");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");

const logo = document.getElementById("logo");
const templateImg = document.getElementById("templateImg");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  heading.textContent = formData.get("heading")
    ? formData.get("heading")
    : "The quick brown fox jumps over lazy dogs.";
  subHeading.textContent = formData.get("subheading")
    ? formData.get("subheading")
    : "The majestic mountains stood tall against the azure sky, a breathtaking sight. ";
  actionBtn.textContent = formData.get("actionBtn")
    ? formData.get("actionBtn")
    : "The cat meowed";

  email.textContent = formData.get("email")
    ? formData.get("email")
    : "info@gmail.com";
  phone.textContent = formData.get("phone")
    ? formData.get("phone")
    : "+432 4432242";
  company.textContent = formData.get("company")
    ? formData.get("company")
    : "The A Team";

  if (formData.get("logo")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      logo.src = e.target.result;
    };
    reader.readAsDataURL(formData.get("logo"));
  } else {
    logo.src = "https://cdn-icons-png.flaticon.com/512/5332/5332306.png";
  }
  if (formData.get("templateImg")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      templateImg.src = e.target.result;
    };
    reader.readAsDataURL(formData.get("templateImg"));
  } else {
    templateImg.src = "https://cdn-icons-png.flaticon.com/512/5332/5332306.png";
  }
});

form.addEventListener("submit", (e) => e.preventDefault());
