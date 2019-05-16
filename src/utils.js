const scrollOnTop = () => {
  window.scrollTo(0, 0);
}

const closeNav = () => {
  document.querySelector('.page-menu').classList.remove('page-menu--open');
}

export {
  scrollOnTop,
  closeNav,
}