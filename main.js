const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

const anime = document.querySelectorAll('.anime');
const home = document.querySelector ('#home .description');

setTimeout(() => {
  home.classList.add('animation')
}, 500)

function animationPage() {
  const windowHeight = window.scrollY + ((window.innerHeight * 3.3) / 4);

  for (const element of anime) {

    if (windowHeight > element.offsetTop) {
      element.classList.add('animation');
    }
  }
}

if (anime.length) {
  window.addEventListener('scroll', debounce(() => {
    animationPage()
  }, 50))
}