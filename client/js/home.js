import Terminal from "./Terminal";
const terminal = new Terminal();
const emailForm = document.getElementById("email-form");
const sendBtn = document.getElementById("send-btn");

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
    emailForm.reset();
  });
}

terminal.typeWriter(document.getElementById("demo"), "> Patrik Nilsson");

emailForm.addEventListener("submit", subitEmail);