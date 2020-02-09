import { refs } from "./index.js";

export const obj = {
  collection: [],

  renderTemplate(title, desc, prio) {
    this.collection.push({
      id: this.collection.length + 1,
      title,
      desc,
      prio
    });
    const template = `
    <div class="note" data-status="" data-id="${this.collection.length}">
      <h2 class="note__title">${title}</h2>
      <p class="note__description">${desc}</p>
      <div class="note__block">
        <span class="note__priority">${prio}</span>
        <div class="note__option">
        <span>...</span>
        <ul class="note__additional">
        <li class="note__list note__top" data-type="done">done</li>
        <li class="note__list" data-type="edit">edit</li>
        <li class="note__list" data-type="delete">delete</li>
      </ul>
        </div>
      </div>
    </div>`;

    refs.list.insertAdjacentHTML("beforeend", template);
  },

  remove(id) {
    this.collection = this.collection.filter(note => note.id !== id);
  }
};
