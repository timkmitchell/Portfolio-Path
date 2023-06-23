var i = 0;
document.querySelectorAll('ul.nav > li > a').forEach((nav) => {
    console.log({
      navPathname: nav.pathname,
      windowLocationPathname: window.location.pathname,
      areEqual: nav.pathname === window.location.pathname,
    });
  if (nav.pathname === window.location.pathname) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})