import Terminal from "./Terminal";
import { isElementVisible } from "./utils"
let terminal = new Terminal();
const emailForm = document.getElementById("email-form");
const sendBtn = document.getElementById("send-btn");
const myProjects = document.getElementById("my-projects");
const getInTouch = document.getElementById("get-in-touch");
const burger = document.querySelector('.burger');
const nav = document.querySelector('#'+burger.dataset.target);
const alert = document.getElementById("alert");
const visible = {
  myProjects: false,
  getInTouch: false
}


terminal.typeWriter(document.getElementById("demo"), "> Patrik Nilsson");

const subitEmail = (e) => {
  e.preventDefault();
  sendBtn.classList.add("is-loading");
  const data = new URLSearchParams();
 
  for (const pair of new FormData(emailForm)) {
    data.append(pair[0], pair[1]);
  }

  fetch("/contact", {
    method: "POST",
    body: data
  }).then(response => {

    sendBtn.classList.remove("is-loading");
    toggleAlert("Success email sent", "")
    if (!response.ok) {
      throw Error(response.statusText);
  }
    emailForm.reset();
  })
  .catch(err => {
    toggleAlert("Could not send email", "error")
  })
}

const toggleAlert = (message, type) => {
  alert.classList.remove("danger")
  if(type === "error") {
    alert.classList.add("danger")
  }
  
  alert.textContent = message ;
  alert.classList.remove("alert--hidden");
  setTimeout(() => alert.classList.add("alert--hidden"), 2500)
}

const handler = () => {
  if (!visible.myProjects && isElementVisible(myProjects)) {
    visible.myProjects = true;
    terminal = new Terminal();
    terminal.typeWriter(myProjects, "> My Projects ");
  }

  if (!visible.getInTouch && isElementVisible(getInTouch)) {
    visible.getInTouch = true;
    terminal = new Terminal();
    terminal.typeWriter(getInTouch, "> Get in touch");
  }

  if(visible.myProjects && visible.getInTouch) {
    window.removeEventListener('scroll', handler);
  }
}

burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

window.addEventListener('scroll', handler);
emailForm.addEventListener("submit", subitEmail);

