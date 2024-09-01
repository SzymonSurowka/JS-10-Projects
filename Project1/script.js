document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sampleText').style.fontSize = '40px';
  const rangeInput = document.querySelector('.rangeInput');
  const sampleText = document.querySelector('.sampleText');
  const fontSelector = document.querySelector('.fontSelector');

  rangeInput.addEventListener('input', function () {
    sampleText.style.fontSize = this.value + 'px';
  });

  fontSelector.addEventListener('change', () => {
    sampleText.style.fontFamily = fontSelector.value;
  });
});
