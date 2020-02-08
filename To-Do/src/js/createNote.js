export const refs = {
  create: document.querySelector("#button-create"),
  overlay: document.querySelector(".overlay"),
  cancel: document.querySelector("#cancel"),
  save: document.querySelector("#save"),
  createForm: document.querySelector(".create-form"),
  list: document.querySelector("#task-list")
};

export const obj = {
  collection: [],

  renderTemplate(title, desc, prio) {
    const template = `<div class="note">
    <h2 class="note__title">${title}</h2>
    <p class="note__description">${desc}</p>
    <div class="note__priority">${prio}</div>
  </div>`;
    refs.list.insertAdjacentHTML("beforeend", template);
    this.collection.push(template);
  }
};
// console.log(input);
// if (input || description === "") {
//   alert("Fill title and description before Save");
//   return;
// }
//test = createTemplate(input, description, priority)

function createTemplate(title, desc, prio) {
  return `<div class="note">
  <h2 class="note__title">${title}</h2>
  <p class="note__description">${desc}</p>
  <div class="note__priority">${prio}</div>
</div>`;
}
