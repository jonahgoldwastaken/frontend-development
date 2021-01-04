window.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  /**
   * Event Listeners
   */
  document
    .querySelector('[data-open-menu]')
    .addEventListener('click', toggleHeaderMenu)

  document.querySelector('#theme').addEventListener('change', changeThemeIcon)

  /**
   * Create intersection observer
   */
  const observer = new IntersectionObserver(intersectionHandler, {
    rootMargin: '-1px 0px 0px 0px',
    threshold: [0, 1],
  })

  /**
   * Add class to and observe all intersectable elements
   */
  const elements = document.querySelectorAll('[data-intersect]')
  for (const element of elements) {
    observer.observe(element)
  }
  addClassToIntersectableElements(elements)
}

/**
 * Adds class to all elements that are used by intersection observer.
 */
function addClassToIntersectableElements(elements) {
  for (const element of elements) {
    element.classList.add('intersectable')
  }
}

/**
 * Toggles classes for the navigation menu
 */
function toggleHeaderMenu() {
  document.querySelector('header').classList.toggle('nav-open')
  document.body.classList.toggle('overlay-open')
}

/**
 * Changes class of element based on if they're intersecting or not
 */
function intersectionHandler(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle(
      'intersecting',
      entry.intersectionRatio > 0 && entry.intersectionRatio < 1
    )
  })
}

/**
 * Changes icon in change theme.
 */
function changeThemeIcon() {
  const div = this.parentElement

  switch (this.value) {
    case 'system':
      div.style.setProperty('--image', 'url(/images/pc.svg)')
      break
    case 'light':
      div.style.setProperty('--image', 'url(/images/sun.svg)')
      break
    case 'dark':
      div.style.setProperty('--image', 'url(/images/moon.svg)')
      break
  }
}
