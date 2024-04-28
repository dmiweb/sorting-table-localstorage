/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/sort/response.js
const response = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: 9.3,
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: 9.2,
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: 9.0,
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: 9.0,
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: 8.9,
  year: 1994
}];
;// CONCATENATED MODULE: ./src/js/sort/SortingDataMemory.js

class SortingDataMemory {
  constructor() {
    this.responseSave = this.saveObject('response', response);
    this.responseParse = this.restoreObject('response');
    this.sortKeys = ['id', 'title', 'year', 'imdb'].flatMap(i => [i, i]);
    this.methodSort = new Array(this.sortKeys.length / 2).fill(["asc", "desc"]).flat();
    this.index = 0;
  }
  saveObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  restoreObject(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }
  sortingSetFields(array, key, method) {
    if (!isNaN(array[0][key]) && method === 'asc') {
      document.querySelector(`.${key}`).classList.add("asc");
      return array.sort((a, b) => a[key] - b[key]);
    }
    if (!isNaN(response[0][key]) && method === 'desc') {
      document.querySelector(`.${key}`).classList.add("desc");
      return array.sort((a, b) => b[key] - a[key]);
    }
    if (isNaN(response[0][key]) && method === "asc") {
      document.querySelector(`.${key}`).classList.add("asc");
      return array.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()));
    }
    if (isNaN(response[0][key]) && method === "desc") {
      document.querySelector(`.${key}`).classList.add("desc");
      return array.sort((a, b) => b[key].toLowerCase().localeCompare(a[key].toLowerCase()));
    }
  }
  addDataTable(sortArray) {
    for (const el of sortArray) {
      const data = `
    <tr data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${el.imdb.toFixed(2)}">
    <td class="id">${el.id}</td>
    <td class="title">${el.title}</td>
    <td class="year">${el.year}</td>
    <td class="imdb">${"imdb: " + el.imdb.toFixed(2)}</td>
    </tr>`;
      document.querySelector(".tableBody").insertAdjacentHTML("beforeEnd", data);
    }
  }
  clearDataTable() {
    document.querySelector(".tableBody").innerHTML = "";
    for (const element of document.querySelectorAll("th")) {
      element.classList.remove("asc");
      element.classList.remove("desc");
    }
  }
  startSorting() {
    setInterval(() => {
      this.clearDataTable();
      this.addDataTable(this.sortingSetFields(this.responseParse, this.sortKeys[this.index], this.methodSort[this.index]));
      this.index++;
      if (this.index === this.sortKeys.length) {
        this.index = 0;
      }
    }, 2000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


for (const el of response) {
  const data = `
<tr data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${el.imdb.toFixed(2)}">
<td class="id">${el.id}</td>
<td class="title">${el.title}</td>
<td class="year">${el.year}</td>
<td class="imdb">${"imdb: " + el.imdb.toFixed(2)}</td>
</tr>`;
  document.querySelector(".tableBody").insertAdjacentHTML("beforeEnd", data);
}
const sortmemory = new SortingDataMemory();
sortmemory.startSorting();
;// CONCATENATED MODULE: ./src/index.js




// TODO: write your code in app.js
/******/ })()
;