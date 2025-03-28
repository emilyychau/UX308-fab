import { Order } from "./Order.js"

class Chat extends HTMLElement {
  constructor(){
    super();
    this.oOrder = new Order("002-028-2025");
  }
  sendMessage(evt) {
    evt.preventDefault();
    var msg = this.input.value;
    this.input.value = ''
    this.writeLine(msg)
  }
  addMessage(e) {
    var msg = e.data ? JSON.parse(e.data) : e;
    this.writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
  }
  writeLine(text) {
    this.messages.insertAdjacentHTML("beforeend", `<li class="message-item item-secondary">You say: ${text}</li>`);
    const aMessages = this.oOrder.handleInput(text);
    if(this.oOrder.isDone){
      this.oOrder = new Order("002-028-2025")
    }
    for(let message of aMessages){
      this.messages.insertAdjacentHTML("beforeend", `<li class="message-item item-primary"><b>Chatime Charlie says:</b> ${message}</li>`);
    }
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  connectedCallback() {
    const suffix = (Math.random()*100).toFixed().toString();
    this.innerHTML = `
        <style>

.chat${suffix} ul { list-style: none; } 

/* chatbox */
.chat${suffix} {
max-width: 500px;
min-heightL 400px;
background-color: #fff; 
padding-right: 15px;
padding-left: 15px; button
border-radius: 1rem;
z-index: 1001;
}

/* messages */
.chat${suffix} .messages {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
}

.chat${suffix} .message-list {
  overflow-y: auto;
  max-height: 500px;
}

.chat${suffix} .message-item {
  padding: 20px;
  border-radius: 0.75rem;
  margin: 20px 0;
}

.chat${suffix} .message-item:last-child {
  margin-bottom: 0;
}

.chat${suffix} .item-primary {
  background-color: #fff;
  color: #3c3c3e;
  margin-right: 2em;
}

.chat${suffix} .item-secondary {
  background-color: #521c6d;
  color: #fff;
  margin-left: 2em;
}

/* messages input */
.chat${suffix} .message-input {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}

.chat${suffix} .message-input input {
  width: 100%;
  padding: 10px;
  padding-bottom: 10px;
  border-radius: 2rem;
  border: 1px solid #a5a5a5;
}

.chat${suffix} .message-input button {
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}        
        </style>
          <div class="chat${suffix}">
    <div class="messages">
      <ul class="message-list">
      </ul>
      <form class="message-input">
        <input type="text" placeholder="Type your message..." />
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </div>
        `;
    this.input = this.querySelector("input");
    this.messages = this.querySelector(".message-list");
    this.querySelector("form").addEventListener('submit', this.sendMessage.bind(this));
  }
}

customElements.define("x-chat", Chat);