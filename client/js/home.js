import Terminal from "./terminal";
const terminal = new Terminal();
const emailForm = document.getElementById("email-form");
const sendBtn = document.getElementById("send-btn");

terminal.typeWriter(document.getElementById("demo"), "> Patrik Nilsson");

emailForm.addEventListener("submit", e => {
  e.preventDefault();
  sendBtn.classList.add("is-loading");
  const data = new URLSearchParams();
  for (const pair of new FormData(emailForm)) {
    data.append(pair[0], pair[1]);
  }
  fetch("/test", {
    method: "POST",
    body: data
  }).then(response => {
    sendBtn.classList.remove("is-loading");
    console.log(response);
  });
});
