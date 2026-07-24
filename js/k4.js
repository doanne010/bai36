const totalItems = 50;
const itemsPerPage = 10;
const allItems = Array.from({ length: totalItems }, (_, i) => `Mục dữ liệu số ${i + 1}`);

let currentPage = 1;

const itemList = document.getElementById("itemList");
const pagination = document.getElementById("pagination");

function renderItems() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = allItems.slice(start, end);
  itemList.innerHTML = pageItems.map(item => `<li>${item}</li>`).join("");
}

function renderPagination() {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === currentPage ? " active" : "");
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderItems();
      renderPagination();
    });
    pagination.appendChild(btn);
  }
}

renderItems();
renderPagination();
