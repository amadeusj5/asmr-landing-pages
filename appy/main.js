window.onload = () => {
  const navToogleButton = document.getElementById('navigationToggle')
  const mainNavigation = document.getElementById('mainNavigation')

  navToogleButton.addEventListener('click', () => {
    if (mainNavigation.hasAttribute('hidden')) {
      mainNavigation.removeAttribute('hidden')
      navToogleButton.setAttribute('aria-expanded', 'true')

      return;
    }

    mainNavigation.setAttribute('hidden', '')
    navToogleButton.setAttribute('aria-expanded', 'false')
  })

  const essentialFeatures = document.querySelectorAll('.essential-features li')

  Array.from(essentialFeatures).forEach((feature) => {
    feature.addEventListener('click', (event) => {
      const parent = event.currentTarget.parentElement
      Array.from(parent.children).forEach((child) => child.classList.remove('active'))

      event.currentTarget.classList.add('active')
    })
  })
}
