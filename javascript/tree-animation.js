document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => {
    const ul = folder.nextElementSibling;
    if (!ul) return;

    folder.classList.toggle("open");

    if (ul.style.height && ul.style.height !== "0px") {
      // collapse
      ul.style.height = ul.scrollHeight + "px"; // set current height
      requestAnimationFrame(() => {
        ul.style.height = "0px";
      });
    } else {
      // expand
      ul.style.height = ul.scrollHeight + "px";
      ul.addEventListener('transitionend', function handler() {
        ul.style.height = "auto"; // reset to auto after animation
        ul.removeEventListener('transitionend', handler);
      });
    }
  });
});

//slop