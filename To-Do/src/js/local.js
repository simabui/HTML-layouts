import { refs } from "./index";
import { obj, buildTemplate } from "./createNote.js";

export function saveToLocal() {
  try {
    localStorage.setItem("collection", JSON.stringify(obj.collection));
  } catch (err) {
    console.error("Set state error: ", err);
  }
}

function getFromLocal() {
  const collection = JSON.parse(localStorage.getItem("collection"));
  const grid = document.querySelector("#task-list");
  try {
    const tempCollection = collection.reduce(
      (acc, item) => acc + buildTemplate(item),
      ""
    );
    grid.insertAdjacentHTML("beforeend", tempCollection);
  } catch (err) {
    console.error("Set state error: ", err);
  }
}

getFromLocal();
