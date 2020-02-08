const refs = {
  create: document.querySelector("#button-create"),
  overlay: document.querySelector(".overlay"),
  cancel: document.querySelector("#cancel"),
  save: document.querySelector("#save"),
  createForm: document.querySelector(".create-form")
};

refs.create.addEventListener("click", handleDisplay);
refs.overlay.addEventListener("click", handleCancel);
refs.save.addEventListener("click", handleCreate);

function handleDisplay(e) {
  e.preventDefault();

  refs.overlay.style.display = "flex";
}

function handleCancel(e) {
  e.preventDefault();
  if (e.target === e.currentTarget || e.target === refs.cancel) {
    refs.overlay.style.display = "none";
  }
  return false;
}

function handleCreate(e) {
  e.preventDefault();
  const input = refs.createForm.elements.title.value;
  const description = refs.createForm.elements.description.value;
  const priority = refs.createForm.priority.value;
  console.log(input, description, priority);
}
