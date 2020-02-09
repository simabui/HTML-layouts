"use strict";
import "./../sass/styles.scss";
import "./createNote.js";
import { obj } from "./createNote.js";

export const refs = {
  create: document.querySelector("#button-create"),
  overlay: document.querySelector(".overlay"),
  cancel: document.querySelector("#cancel"),
  save: document.querySelector("#save"),
  createForm: document.querySelector(".create-form"),
  list: document.querySelector("#task-list")
};

refs.create.addEventListener("click", handleOverlay);
refs.overlay.addEventListener("click", handleCancel);
refs.save.addEventListener("click", handleCreate);
refs.list.addEventListener("click", handleOptions);

function handleOverlay(e) {
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
  if (input.length === 0 || description.length === 0) {
    alert("Fill title and description before Save");
    return;
  }
  obj.renderTemplate(input, description, priority);
  refs.createForm.reset();
  closeOverlay();
}

function handleOptions(e) {
  if (e.target.dataset.type === "done") {
    console.log("yes");
  }
}
