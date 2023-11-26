export function loadAllWritings(
  localStorage,
  removeAllChildren,
  writingListEl,
) {
  removeAllChildren(writingListEl);

  const writings = fetchAllWritings(localStorage);

  writings.forEach((item) => {
    const writingItem = document.createElement("li");
    const writingLink = document.createElement("a");
    const { id, title } = item;
    console.log(id);
    writingLink.textContent = title;
    writingLink.setAttribute("data-writing-id", id);

    writingItem.appendChild(writingLink);
    writingListEl.appendChild(writingItem);
  });
}

export function loadWriting(localStorage, el, searchId) {
  const writings = fetchAllWritings(localStorage);
  const writing = writings.find((w) => w.id == searchId);

  const { writingIdEl, titleEl, textAreaEl } = el;
  writingIdEl.setAttribute("data-writing-id", searchId);
  titleEl.value = writing.title;
  textAreaEl.value = writing.content;
}

function writingExists(writings, id) {
  return writings.some((writing) => writing.id === id);
}

function fetchAllWritings(localStorage) {
  const writings = localStorage.getItem("writings");
  return writings === null ? [] : JSON.parse(localStorage.getItem("writings"));
}

export function saveWriting(localStorage, writing) {
  const writings = fetchAllWritings(localStorage);
  if (writingExists(writings, writing.id)) {
    const newWritings = [
      ...writings.filter((w) => w.id !== writing.id),
      writing,
    ];
    localStorage.setItem("writings", JSON.stringify(newWritings));
  } else {
    localStorage.setItem("writings", JSON.stringify([...writings, writing]));
  }
  return writing.id;
}
