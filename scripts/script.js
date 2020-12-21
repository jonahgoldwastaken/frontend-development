window.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  /**
   * Event Listeners
   */
  document
    .querySelector("[data-open-menu]")
    .addEventListener("click", toggleHeaderMenu);

  /**
   * Create intersection observer
   */
  const observer = new IntersectionObserver(intersectionHandler, {
    rootMargin: "-1px 0px 0px 0px",
    threshold: [0, 1],
  });
  
  /**
   * Add class to and observe all intersectable elements
   */
  const elements = document.querySelectorAll('[data-intersect]')
  for (element of elements) {
     observer.observe(element);
  }
  addClassToIntersectableElements(elements)
}

function addClassToIntersectableElements(elements) {
  for (element of elements) {
    element.classList.add('intersectable')
  }
}

function toggleHeaderMenu() {
  document.querySelector("header").classList.toggle("nav-open");
  document.body.classList.toggle("overlay-open");
}

function intersectionHandler(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    entry.target.classList.toggle(
      "intersecting",
      entry.intersectionRatio > 0 && entry.intersectionRatio < 1
    );
  });
}
