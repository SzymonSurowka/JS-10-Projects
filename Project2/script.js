const brightnessBar = document.getElementById('brightness-bar');
const contrastBar = document.getElementById('contrast-bar');
const saturationBar = document.getElementById('saturation-bar');
const hueBar = document.getElementById('hue-bar');
const blurBar = document.getElementById('blur-bar');
// const exampleImage = document.getElementById('example-image');
const root = document.documentElement;

const updatesFilters = () => {
  root.style.setProperty('--brightness', brightnessBar.value + '%');
  root.style.setProperty('--contrast', contrastBar.value + '%');
  root.style.setProperty('--saturation', saturationBar.value + '%');
  root.style.setProperty('--hue', hueBar.value + 'deg');
  root.style.setProperty('--blur', blurBar.value + 'px');
};

// const updatesFilters = () => {
//   exampleImage.style.filter = `
//     brightness(${brightnessBar.value}%)
//     contrast(${contrastBar.value}%)
//     saturate(${saturationBar.value}%)
//     hue-rotate(${hueBar.value}deg)
//     blur(${blurBar.value}px)`;
// };

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
  bar.addEventListener('input', updatesFilters);
});

document.querySelector('.btn-scroller').addEventListener('click', () => {
  document
    .querySelector('.example-section')
    .scrollIntoView({ behavior: 'smooth' });
});
