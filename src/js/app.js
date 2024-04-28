import SortingDataMemory from "./sort/SortingDataMemory";
import { response } from "./sort/response";

for (const el of response) {
  const data = `
<tr data-id="${el.id}" data-title="${el.title}" data-year="${
    el.year
  }" data-imdb="${el.imdb.toFixed(2)}">
<td class="id">${el.id}</td>
<td class="title">${el.title}</td>
<td class="year">${el.year}</td>
<td class="imdb">${"imdb: " + el.imdb.toFixed(2)}</td>
</tr>`;

  document.querySelector(".tableBody").insertAdjacentHTML("beforeEnd", data);
}

const sortmemory = new SortingDataMemory();
sortmemory.startSorting();

