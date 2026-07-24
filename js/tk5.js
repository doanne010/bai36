const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = header.classList.contains("active");

    headers.forEach(h => {
      h.classList.remove("active");
      h.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
