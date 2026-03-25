const socket = io();
const roomId = window.roomId;
const currentUserId = window.currentUserId;
const receiverId = window.receiverId;

socket.on("connect", () => {
  socket.emit("joinRoom", {
    sender: currentUserId,
    receiver: receiverId,
  });
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

socket.on("receiveMessage", (data) => {
  const chatBox = document.getElementById("messages");

  const isMe = String(data.sender) === String(currentUserId);

  //  duplicate avoid (sender side)
  if (isMe && lastTempId) {
    const temp = document.getElementById(lastTempId);
    if (temp) {
      temp.id = data._id; // replace temp id with real id
    }
    return;
  }

  //  receiver side message show
  const div = document.createElement("div");
  div.className = "message " + (isMe ? "me" : "other");
  div.id = data._id;

  div.innerHTML = `
    <div class="bubble">
      ${data.message}
      ${isMe ? `<span class="status">✔</span>` : ""}
    </div>
  `;

  chatBox.appendChild(div);

  scrollBottom();

  //  receiver automatically mark seen
  if (!isMe) {
    socket.emit("markSeen", data._id);
  }
});

socket.on("messageSeen", (msgId) => {
  const msgEl = document.getElementById(msgId);
  if (msgEl) {
    const status = msgEl.querySelector(".status");
    if (status) status.innerText = "✔✔";
  }
});
