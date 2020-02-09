import { refs } from "./index.js";

export const obj = {
  collection: [],

  pushtoCollection(obj) {
    this.collection.push(obj);
  },

  //create obj,push to arr and render
  createTemplate(title, desc, prio) {
    const noteList = {
      id: this.collection.length,
      title,
      desc,
      prio
    };
    console.log(this.collection);
    this.pushtoCollection(noteList);
    const item = this.buildTemplate(noteList);
    this.renderTemplate(item);
  },

  renderTemplate(element) {
    refs.list.insertAdjacentHTML("beforeend", element);
  },
  //template
  buildTemplate(obj) {
    return `
    <div class="note" data-status="" data-id="${this.collection.length}">
      <h2 class="note__title">${obj.title}</h2>
      <p class="note__description">${obj.desc}</p>
      <div class="note__block">
        <span class="note__priority">${obj.prio}</span>
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
  },
  //remove button
  remove(id) {
    this.collection = this.collection.filter(note => note.id !== id);
  },
  //filter by input
  filter(val) {
    const filtered = this.collection.filter(note => {
      if (note.title.includes(val)) {
        return note;
      }
    });

    const newItems = filtered.reduce(
      (acc, item) => acc + this.buildTemplate(item),
      ""
    );
    refs.list.innerHTML = "";
    this.renderTemplate(newItems);
  }
};
