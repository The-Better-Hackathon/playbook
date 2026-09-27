// Sort data tables by clicking a column header.
function makeSortable(table) {
  if (table.dataset.sortable) return;
  table.dataset.sortable = "1";
  const headers = table.querySelectorAll("thead th");
  headers.forEach(function (th, col) {
    th.dataset.sort = "none";
    th.addEventListener("click", function () {
      const dir = th.dataset.sort === "asc" ? "desc" : "asc";
      headers.forEach(function (h) { h.dataset.sort = "none"; });
      th.dataset.sort = dir;
      const body = table.tBodies[0];
      const rows = Array.from(body.rows);
      rows.sort(function (a, b) {
        const x = a.cells[col].textContent.trim();
        const y = b.cells[col].textContent.trim();
        const r = x.localeCompare(y, undefined, { numeric: true, sensitivity: "base" });
        return dir === "asc" ? r : -r;
      });
      rows.forEach(function (row) { body.appendChild(row); });
    });
  });
}
document$.subscribe(function () {
  document.querySelectorAll(".pb-sortable + table, .pb-sortable table").forEach(makeSortable);
});
