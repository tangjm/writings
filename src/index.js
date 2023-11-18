import "./index.css"
import { loadAllWritings } from "./localStorage.js"
import { removeAllChildren } from "./dom.js";

const addBtn = document.querySelector("#add-writing");
const writingsListEl = document.querySelector("ul.writings-list");
const writingsCountEl = document.querySelector(".writings-count");

loadAllWritings(window.localStorage, removeAllChildren, writingsListEl); 
updateWritingsCount();

function updateWritingsCount() {
  writingsCountEl.textContent = writingsListEl.children.length;
}

addBtn.addEventListener("click", e => {
  window.location.href = "writing.html";
})

writingsListEl.addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    const writingId = e.target.getAttribute("data-writing-id");
    const data = { "data-writing-id": writingId };
    const queryString = new URLSearchParams(data).toString();
    window.location.href = "writing.html" + "?" + queryString;
  }
});



