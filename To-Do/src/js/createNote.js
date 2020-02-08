const refs = {
  create: document.querySelector("#button-create"),
  overlay: document.querySelector(".overlay"),
  cancel: document.querySelector("#cancel"),
  save: document.querySelector("#save"),
  createForm: document.querySelector(".create-form"),
  list: document.querySelector("#task-list")
};

refs.create.addEventListener("click", handleDisplay);
refs.overlay.addEventListener("click", handleCancel);
refs.save.addEventListener("click", handleCreate);

function handleDisplay(e) {
  e.preventDefault();

  refs.overlay.classList.add("is-open");
}

function handleCancel(e) {
  e.preventDefault();
  if (e.target === e.currentTarget || e.target === refs.cancel) {
    closeOverlay();
  }

  return false;
}

function closeOverlay() {
  refs.overlay.classList.remove("is-open");
}

function handleCreate(e) {
  e.preventDefault();
  const input = refs.createForm.elements.title.value;
  const description = refs.createForm.elements.description.value;
  const priority = refs.createForm.priority.value;
  const test = createTemplate(input, description, priority);
  console.log(input);
  // if (input || description === "") {
  //   alert("Fill title and description before Save");
  //   return;
  // }
  refs.list.insertAdjacentHTML("beforeend", test);
  closeOverlay();
}

function createTemplate(title, description, priority) {
  return `<div class="note">
    <h2>${title}</h2>
    <p>${description}</p>
    <div>${priority}</div>
  </div>`;
}
