//image parallax
window.addEventListener('scroll', function(e){
  const target = document.querySelectorAll('.scroll');



  var index = 0, length = target.length;
  for(index; index <length; index++){
      var pos = window.pageYOffset * target[index].dataset.rate;
      
      target[index].style.transform = 'translate3d(0px,'+pos+'px,0px)';
      
     
  }

})

/*
let mouseCursor = document.querySelector('.cursor');
let innerMouseCursor = document.querySelector('.inner-cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';

      innerMouseCursor.style.top = e.pageY + 'px';
      innerMouseCursor.style.left = e.pageX + 'px';

}

*/

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
  .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
document.body.style.background = section.el.getAttribute('data-bg');
}


