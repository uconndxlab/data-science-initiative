//background change on components
window.sections = [...document.querySelectorAll('.panel')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;
  
  const section = window.sections
    .map(section => {
      var el = section;
      var rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.8));
  
  // section is undefined when you reach the bottom of the page
  if(typeof section !== 'undefined') document.body.style.background = section.el.getAttribute('data-bg');
}

