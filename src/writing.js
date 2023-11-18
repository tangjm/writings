import "./writing.css"
import WritingFactory from "./models/WritingFactory.js";
import { debounce } from "./helpers.js";
import { loadWriting, saveWriting } from "./localStorage.js"


const containerEl = document.querySelector(".writing-container")
const saveBtn = document.querySelector("button#save")
const closeBtn = document.querySelector("button#close")
const savedStatusEl = document.querySelector("#writing-session-save-status");
const writingIdEl = document.querySelector("#writing-id");
const titleEl = document.querySelector(".writing-title")
const textAreaEl = document.querySelector(".writing-text")


containerEl.addEventListener("input", debounce(e => {
  if (e.target.classList.contains("writing-title") || e.target.classList.contains("writing-text")) {
    savedStatusEl.textContent = "unsaved*";
  }
}, 300))

closeBtn.addEventListener("click", e => {
  if (savedStatusEl.textContent === "unsaved*") {
    let confirmed = confirm("You have unsaved changes. Are you sure you want to continue?")
    if (!confirmed) return; 
  }
  window.location.href = "index.html"
});

saveBtn.addEventListener("click", e => {
  const writingId = parseInt(writingIdEl.getAttribute("data-writing-id"))

  if (titleEl.value === "") {
    alert("Title cannot be empty"); 
    return;
  }

  const writing = WritingFactory.createWriting(); 
  writing
    .setId(writingId)
    .setTitle(titleEl.value)
    .setContent(textAreaEl.value)

  saveWriting(window.localStorage, writing);
  savedStatusEl.textContent = "saved";
})

window.addEventListener("load", e => {
  // load writing iff queryparams supplied
  const params = new URL(window.location).searchParams; 
  if (params.has("data-writing-id")) {
    const writingId = params.get("data-writing-id"); 
    const el = { writingIdEl, titleEl, textAreaEl };
    loadWriting(localStorage, el, writingId);
  } else {
    writingIdEl.setAttribute("data-writing-id", Date.now())
  }
})



