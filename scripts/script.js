

// Open or close header menu
document.querySelector('[data-open-menu]').addEventListener('click', toggleHeaderMenu)

const stickyObserver = new IntersectionObserver(stickyHandler, {
  rootMargin: '-1px 0px 0px 0px', // -1px so when something is at the top of the screen, intersectionRatio is less than 1
  threshold: [1],
})

stickyObserver.observe(document.querySelector('header'))

function toggleHeaderMenu() {
  const scrollTop = document.body.scrollTop
  document.querySelector('header').classList.toggle('nav-open')
  document.body.classList.toggle('overlay-open')
  document.body.scrollTop = scrollTop
}

function stickyHandler(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('sticking', entry.intersectionRatio < 1) // Toggling class based on if the intersectionRatio is less than 1, see comment at line 7 for more details
  })
}