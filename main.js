const form = document.getElementById("content-form");

const heading = document.querySelectorAll(".heading");
const subHeading = document.querySelectorAll(".subHeading");
const actionBtn = document.querySelectorAll(".actionBtn");
const email = document.querySelectorAll(".email");
const phone = document.querySelectorAll(".phone");
const company = document.querySelectorAll(".company");

const logo = document.querySelectorAll(".logo");
const templateImg = document.querySelectorAll(".templateImg");

const priText = document.querySelectorAll(".priText");
const priBg = document.querySelectorAll(".priBg");
const secText = document.querySelectorAll(".secText");
const secBg = document.querySelectorAll(".secBg");

function changeContent() {
  const formData = new FormData(form);

  heading.forEach((item) => {
    item.textContent = formData.get("heading")
      ? formData.get("heading")
      : "The quick brown fox jumps over lazy dogs.";
  });
  subHeading.forEach((item) => {
    item.textContent = formData.get("subheading")
      ? formData.get("subheading")
      : "The majestic mountains stood tall against the azure sky, a breathtaking sight. ";
  });
  actionBtn.forEach((item) => {
    item.textContent = formData.get("actionBtn")
      ? formData.get("actionBtn")
      : "The cat meowed";
  });

  email.forEach((item) => {
    item.textContent = formData.get("email")
      ? formData.get("email")
      : "info@gmail.com";
  });
  phone.forEach((item) => {
    item.textContent = formData.get("phone")
      ? formData.get("phone")
      : "+432 4432242";
  });
  company.forEach((item) => {
    item.textContent = formData.get("company")
      ? formData.get("company")
      : "The A Team";
  });

  priBg.forEach((item) => {
    item.style.backgroundColor = formData.get("primaryColor")
      ? formData.get("primaryColor")
      : "#000000";
  });
  secText.forEach((item) => {
    item.style.color = formData.get("secondaryColor")
      ? formData.get("secondaryColor")
      : "red";
  });
  secBg.forEach((item) => {
    item.style.backgroundColor = formData.get("secondaryColor")
      ? formData.get("secondaryColor")
      : "red";
  });
  if (formData.get("logo").size !== 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      logo.forEach((item) => {
        item.src = e.target.result;
      });
    };
    reader.readAsDataURL(formData.get("logo"));
  }
  if (formData.get("templateImg").size !== 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      templateImg.forEach((item) => {
        item.src = e.target.result;
      });
    };
    reader.readAsDataURL(formData.get("templateImg"));
  }
}

form.addEventListener("submit", (e) => e.preventDefault());
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  changeContent();
});
form.addEventListener("change", (e) => {
  e.preventDefault();
  changeContent();
});
