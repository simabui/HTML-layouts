"use strict";
import "./../sass/styles.scss";
import "./createNote.js";
import { obj } from "./createNote.js";

export const refs = {
  inputSearch: document.querySelector("#task-search"),
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
refs.inputSearch.addEventListener("input", test);

function handleOverlay(e) {
  e.preventDefault();
  refs.overlay.classList.add("is-open");
}

//cancel button
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

//create button
function handleCreate(e) {
  e.preventDefault();
  const input = refs.createForm.elements.title.value;
  const description = refs.createForm.elements.description.value;
  const priority = refs.createForm.priority.value;

  if (input.length === 0 || description.length === 0) {
    alert("Fill title and description before Save");
    return;
  }
  //render
  obj.createTemplate(input, description, priority);
  //reset inputs
  refs.createForm.reset();
  closeOverlay();
}

function handleOptions(e) {
  const parent = e.target.closest(".note");

  if (e.target.dataset.type === "done") {
    changeStatus(parent);
  }

  if (e.target.dataset.type === "delete") {
    deleteItem(parent);
  }

  if (e.target.dataset.type === "edit") {
    handleOverlay(e);
    deleteItem(parent);
  }
}

function changeStatus(node) {
  node.classList.add("done");
  node.dataset.status = "done";
}

function deleteItem(node) {
  node.remove();
  const id = Number(node.dataset.id);
  obj.remove(id);
}

function test(e) {
  // e.preventDefault();
  const title = refs.inputSearch.value;
  obj.filter(title);
}
