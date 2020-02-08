"use strict";
import "./../sass/styles.scss";
import "./createNote.js";
import { obj, refs } from "./createNote.js";

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
  obj.renderTemplate(input, description, priority);
  closeOverlay();
}
