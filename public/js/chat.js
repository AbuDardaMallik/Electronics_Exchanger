const socket = io();
const roomId = window.roomId;
const currentUserId = window.currentUserId;
const receiverId = window.receiverId;

socket.on("connect", () => {
  socket.emit("joinRoom", roomId);
});

let lastTempId = null;

function scrollBottom() {
  const box = document.getElementById("messages");
  box.scrollTop = box.scrollHeight;
}

//  SEND MESSAGE FUNCTION
function sendMsg() {
  const input = document.getElementById("msg");
  const message = input.value.trim();

  if (!message) return;

  socket.emit("sendMessage", {
    roomId,
    message,
    sender: currentUserId,
    receiver: receiverId,
  });

  const div = document.getElementById("messages");

  const tempId = "temp-" + Date.now();
  lastTempId = tempId;

  div.innerHTML += `
    <div class="message me" id="${tempId}">
      <div class="bubble">
        ${message} <span class="status">✔</span>
      </div>
    </div>
  `;

  input.value = "";
  scrollBottom();
}

//  BUTTON EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("msg");

  // click
  sendBtn.addEventListener("click", sendMsg);

  // enter press
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMsg();
    }
  });

  scrollBottom();
});

window.onload = () => {
  scrollBottom();

  //  mark all messages seen on load
  document.querySelectorAll(".message.other").forEach((msg) => {
    const id = msg.id;
    if (id) {
      socket.emit("markSeen", id);
    }
  });
};
