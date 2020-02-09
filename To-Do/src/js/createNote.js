import { refs } from "./index.js";

export const obj = {
  collection: [],

  pushtoCollection(obj) {
    this.collection.push(obj);
  },

  //create obj,push to arr and render
  createTemplate(title, desc, prio) {
    const noteList = {
      id: Date.now(),
      status: "open",
      title,
      desc,
      prio
    };

    this.pushtoCollection(noteList);
    const item = buildTemplate(noteList);
    this.renderTemplate(item);
  },

  renderTemplate(element) {
    refs.list.insertAdjacentHTML("beforeend", element);
  },

  //remove button
  remove(id) {
    this.collection = this.collection.filter(note => note.id !== id);
  },
  // add status to obj
  setStatus(el) {
    const obj = this.collection.find(note => note.id === el);
    obj.status = "done";
  },

  // filtered arr and render
  renderFiltered(arr) {
    const newItems = arr.reduce((acc, item) => acc + buildTemplate(item), "");
    refs.list.innerHTML = "";
    this.renderTemplate(newItems);
  },

  //filter by input
  filterInput(val) {
    const newCollection = this.collection.filter(note => {
      if (note.title.includes(val)) {
        return note;
      }
    });

    this.renderFiltered(newCollection);
  },

  //filter by status
  filterStatus(status) {
    const newCollection = this.collection.filter(note => {
      if (status === "all") {
        return note;
      }
      return note.status === status;
    });

    this.renderFiltered(newCollection);
  },

  //filter by prio
  filterPrio(prio) {
    const newCollection = this.collection.filter(note => {
      if (prio === "all") {
        return note;
      }
      return note.prio === prio;
    });

    this.renderFiltered(newCollection);
  }
};

//template
function buildTemplate(obj) {
  return `
  <div class="note" data-status="${obj.status}" data-id="${obj.id}">
    <h2 class="note__title">${obj.title}</h2>
    <div class="note__description">${obj.desc}</div>
    <div class="note__block">
      <span class="note__priority note__priority-${obj.prio}">${obj.prio}</span>
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
}
