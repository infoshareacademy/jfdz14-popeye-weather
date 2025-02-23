const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');

const teamCard = document.querySelector('.team-card');

let leftPosition = -1500;
let position1 = -2150;
let position2 = -1850;
let position3 = -1680;
let position4 = -1900;
let position5 = -1500;
// let leftPosition = -200;
// let position1 = 100;
// let position2 = -200;
// let position3 = -200;
// let position4 = -200;
// let position5 = -200;
let topPosition = -100;
let wave = 0;

const observer = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio > 0) {
    const changePosition = () => {
      if (leftPosition !== 0) {
        if (window.outerWidth > 1400) {
          card1.style.position = 'absolute';
          card2.style.position = 'absolute';
          card3.style.position = 'absolute';
          card4.style.position = 'absolute';
          card5.style.position = 'absolute';
          leftPosition += 10;
          position1 += 10;
          card1.style.marginLeft = `${-650}px`;
          card1.style.marginTop = `${-55}px`;
          position2 += 12;
          card2.style.marginLeft = `${-50}px`;
          position3 += 15;
          card3.style.marginLeft = `${570}px`;
          card3.style.marginTop = `${-55}px`;
          position4 += 10;
          card4.style.marginLeft = `${-400}px`;
          card4.style.marginTop = `${topPosition}px`;
          topPosition -= -2.5;
          position5 += 12;
          card5.style.marginLeft = `${300}px`;
          card5.style.marginTop = `${topPosition}px`;
        }
      }

      if (leftPosition === 0) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(changePosition, 100);
  }
});

let upWave = 0;

const waveUpFunc = () => {
  if (leftPosition === 0) {
    wave++;
    if (wave % 2 === 0) {
      card1.style.marginTop = `${upWave - 55}px`;
      card1.style.transform = 'scale(1.001)';
      card2.style.marginTop = `${upWave}px`;
      card2.style.transform = 'scale(0.99)';
      card3.style.marginTop = `${upWave - 55}px`;
      card3.style.transform = 'scale(1.001)';
      card4.style.marginTop = `${upWave + 275}px`;
      card4.style.transform = 'scale(0.99)';
      card5.style.marginTop = `${upWave + 275}px`;
      card5.style.transform = 'scale(0.99)';
      upWave += 12;
    } else {
      card1.style.marginTop = `${upWave - 55}px`;
      card1.style.transform = 'scale(0.99)';
      card2.style.marginTop = `${upWave}px`;
      card2.style.transform = 'scale(1.001)';
      card3.style.marginTop = `${upWave - 55}px`;
      card3.style.transform = 'scale(0.99)';
      card4.style.marginTop = `${upWave + 275}px`;
      card4.style.transform = 'scale(1.001)';
      card5.style.marginTop = `${upWave + 275}px`;
      card5.style.transform = 'scale(1.001)';
      upWave -= 12;
    }
  }
};

setInterval(waveUpFunc, 750);
observer.observe(teamCard);

const bubbleWater = document.querySelectorAll('.team_bubble-water');

let bubbleOpacity1 = 1;
let bubbleTop1 = 0;
let bubbleOpacity2 = 1;
let bubbleTop2 = 0;
let bubbleOpacity3 = 1;
let bubbleTop3 = 0;
let bubbleOpacity4 = 1;
let bubbleTop4 = 0;
let bubbleOpacity5 = 1;
let bubbleTop5 = 0;

const bubbleWaterTime = () => {
  if (leftPosition === 0) {
    for (let i = 0; i < 1; i++) {
      bubbleTop1 -= 4;
      bubbleWater[0].style.display = 'inline';
      bubbleWater[0].style.marginTop = `${bubbleTop1}px`;
      bubbleWater[0].style.opacity = bubbleOpacity1;
      bubbleOpacity1 = bubbleOpacity1 - 0.085;
      bubbleTop2 -= 4;
      bubbleWater[1].style.display = 'inline';
      bubbleWater[1].style.marginTop = `${bubbleTop2}px`;
      bubbleWater[1].style.opacity = bubbleOpacity2;
      bubbleOpacity2 = bubbleOpacity2 - 0.085;
      bubbleTop3 -= 4;
      bubbleWater[2].style.display = 'inline';
      bubbleWater[2].style.marginTop = `${bubbleTop3}px`;
      bubbleWater[2].style.opacity = bubbleOpacity3;
      bubbleOpacity3 = bubbleOpacity3 - 0.085;
      bubbleTop4 -= 4;
      bubbleWater[3].style.display = 'inline';
      bubbleWater[3].style.marginTop = `${bubbleTop4}px`;
      bubbleWater[3].style.opacity = bubbleOpacity4;
      bubbleOpacity4 = bubbleOpacity4 - 0.085;
      bubbleTop5 -= 4;
      bubbleWater[4].style.display = 'inline';
      bubbleWater[4].style.marginTop = `${bubbleTop5}px`;
      bubbleWater[4].style.opacity = bubbleOpacity5;
      bubbleOpacity5 = bubbleOpacity5 - 0.085;
      if (bubbleOpacity1 <= 0) {
        bubbleOpacity1 = 1;
        bubbleTop1 = 0;
        bubbleOpacity2 = 1;
        bubbleTop2 = 0;
        bubbleOpacity3 = 1;
        bubbleTop3 = 0;
        bubbleOpacity4 = 1;
        bubbleTop4 = 0;
        bubbleOpacity5 = 1;
        bubbleTop5 = 0;
      }
    }
  }
};

setInterval(bubbleWaterTime, 150);

// ============= slider ======================== //

const buttonPrev = document.querySelector('.button__prev');
const buttonNext = document.querySelector('.button__next');
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dots');
const slidesLength = slides.length;

let currentState = 0;

slides[currentState].classList.add('active');
dots[currentState].classList.add('dots--active');

const slideLeft = () => {
  slides[currentState].classList.remove('active');
  dots[currentState].classList.remove('dots--active');

  currentState -= 1;
  if (currentState < 0) {
    currentState = slides.length - 1;
    slides[currentState].classList.add('active');
    dots[currentState].classList.add('dots--active');
  }
  slides[currentState].classList.add('active');
  dots[currentState].classList.add('dots--active');

  resetSliderTimer();
};

const slideRight = () => {
  slides[currentState].classList.remove('active');
  dots[currentState].classList.remove('dots--active');
  currentState = (currentState + 1) % slidesLength;
  slides[currentState].classList.add('active');
  dots[currentState].classList.add('dots--active');

  resetSliderTimer();
};

buttonPrev.addEventListener('click', slideLeft);
buttonNext.addEventListener('click', slideRight);

let intervalRight = setInterval(slideRight, 12000);

function resetSliderTimer() {
  clearInterval(intervalRight);
  intervalRight = setInterval(slideRight, 12000);
}
//active dots

dots[0].addEventListener('click', () => {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('dots--active'));
  currentState = 0;
  slides[0].classList.add('active');
  dots[0].classList.add('dots--active');
});

dots[1].addEventListener('click', () => {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('dots--active'));
  currentState = 1;
  slides[1].classList.add('active');
  dots[1].classList.add('dots--active');
});

dots[2].addEventListener('click', () => {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('dots--active'));
  currentState = 2;
  slides[2].classList.add('active');
  dots[2].classList.add('dots--active');
});

dots[3].addEventListener('click', () => {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('dots--active'));
  currentState = 3;
  slides[3].classList.add('active');
  dots[3].classList.add('dots--active');
});
// info o cookies

const cookie = document.querySelector('.cookie');
const cookieButton = document.querySelector('.cookie__button');

function addCookie(cookieInfo) {
  localStorage.setItem(cookieInfo, 'yes');
}

setTimeout(() => {
  const cookieAccepted = localStorage.hasOwnProperty('cookieAccepted');
  if (cookieAccepted === false) {
    cookie.classList.remove('hidden');
  }
}, 1500);
cookieButton.addEventListener('click', () => {
  addCookie('cookieAccepted');
  cookie.classList.add('hidden');
});

//kalkulator cen

const countInput = document.querySelector('.countInput');
const summary = document.querySelector('.summaryScore');
const submitCount = document.querySelector('.submitCount');

let basicPrice = 99;

submitCount.addEventListener('click', () => {
  clearInterval(intervalRight);
  if (countOutputId.value == 1) {
    summary.textContent = `${basicPrice}zł`;
  }
  if (countOutputId.value == 2) {
    summary.textContent = `${Math.round(basicPrice * 2 * 0.9)}zł. W tym 10% zniżki!`;
  }
  if (countOutputId.value == 3) {
    summary.textContent = `${Math.round(basicPrice * 3 * 0.88)}zł W tym 12% zniżki!`;
  }
  if (countOutputId.value == 4) {
    summary.textContent = `${Math.round(basicPrice * 4 * 0.87)}zł W tym 13% zniżki!`;
  }
  if (countOutputId.value == 5) {
    summary.textContent = `${Math.round(basicPrice * 5 * 0.85)}zł W tym 15% zniżki!`;
  }
});
const navigationContainer = document.querySelector('.navigation');
const navigationElementsLinks = document.querySelectorAll('.navigation__menu__list__link');
const navigationLogo = document.querySelector('.navigation__logo');

//zwężanie się menu podczas przewijania strony

function scrollFunction() {
  if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
    navigationContainer.classList.add('nav__short');
    navigationLogo.classList.add('logo__short');
  } else {
    document.getElementById('navlist');
    navigationContainer.classList.remove('nav__short');
    navigationLogo.classList.remove('logo__short');
  }
}

//przycisk to top
const toTopButton = document.querySelector('.toTop');

function showToTopButton() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
}

window.onscroll = function () {
  scrollFunction();
  showToTopButton();
};

//podświetlane nav
const sectionsToObserve = document.querySelectorAll('section');
console.log(sectionsToObserve);
console.log(navigationElementsLinks);

const toHighlight = function (entries) {
  console.log(entries);

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.attributes[1].value === 'home') {
        console.log(entry.target.attributes[1].value);
        navigationElementsLinks.forEach(el => el.classList.remove('active2'));
        navigationElementsLinks[0].classList.add('active2');
      }
      if (entry.target.attributes[1].value === 'features') {
        console.log(entry.target.attributes[1].value);
        navigationElementsLinks.forEach(el => el.classList.remove('active2'));
        navigationElementsLinks[1].classList.add('active2');
      }
      if (entry.target.attributes[1].value === 'functionality') {
        console.log(entry.target.attributes[1].value);
        navigationElementsLinks.forEach(el => el.classList.remove('active2'));
        navigationElementsLinks[2].classList.add('active2');
      }
      if (entry.target.attributes[1].value === 'form') {
        console.log(entry.target.attributes[1].value);
        navigationElementsLinks.forEach(el => el.classList.remove('active2'));
        navigationElementsLinks[3].classList.add('active2');
      }
      if (entry.target.attributes[1].value === 'team') {
        console.log(entry.target.attributes[1].value);
        navigationElementsLinks.forEach(el => el.classList.remove('active2'));
        navigationElementsLinks[4].classList.add('active2');
      }
    }
  });
};

const observer2 = new IntersectionObserver(toHighlight, {
  threshold: 0.6,
});

sectionsToObserve.forEach(section => {
  observer2.observe(section);
});

//running game

const gameSumbit = document.querySelector('#submit');

// const runGame =

gameSumbit.addEventListener('click', runGame);
