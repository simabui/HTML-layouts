import { refs } from "./index.js";

export const obj = {
  collection: [],

  renderTemplate(title, desc, prio) {
    const template = `
    <div class="note">
      <h2 class="note__title">${title}</h2>
      <p class="note__description">${desc}</p>
      <div class="note__block">
        <span class="note__priority">${prio}</span>
        <div class="note__option">
        <span>...</span>
        <ul class="note__additional">
        <li class="note__list note__top">done</li>
        <li class="note__list">edit</li>
        <li class="note__list">delete</li>
      </ul>
        </div>
      </div>
    </div>`;

    refs.list.insertAdjacentHTML("beforeend", template);
    this.collection.push({
      title,
      desc,
      prio
    });
    console.log(this.collection);
  }
};

// console.log(input);
// if (input || description === "") {
//   alert("Fill title and description before Save");
//   return;
// }
