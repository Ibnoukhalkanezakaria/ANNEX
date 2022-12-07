const navLinks = document.querySelector(".navlinks");
openmenu = document.querySelector(".openmenu");
closemenu = document.querySelector(".closemenu");
crcl = document.querySelector(".crcl");
body = document.querySelector("body");

openmenu.onclick = function () {
  navLinks.classList.add("active");
};
closemenu.onclick = function () {
  navLinks.classList.remove("active");
};

// Send To Email

const btn = document.getElementById("submit");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Please wait...";
  const serviceID = "default_service";
  const templateID = "template_plc8plg";
  emailjs.sendForm(serviceID, templateID, this).then(() => {
    btn.value = "Submit";
  });
});

function succes() {
  form.classList.add("active");
}
