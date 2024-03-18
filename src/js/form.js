document.addEventListener('DOMContentLoaded', function () {
  const decLengthButton = document.querySelector(
    '.order__length-button.decrement'
  );
  const incLengthButton = document.querySelector(
    '.order__length-button.increment'
  );
  const lengthInput = document.querySelector('.order__length-input');

  function changeInputWidth() {
    const textWidth = getTextWidth(
      lengthInput.value,
      getComputedStyle(lengthInput).font
    );
    lengthInput.style.width = textWidth + 'px';

    if (lengthInput.value.length === 0) {
      lengthInput.style.width = 16 + 'px';
    }
  }

  function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  document.fonts.ready.then(function () {
    changeInputWidth();
  });

  lengthInput.addEventListener('input', changeInputWidth);

  decLengthButton.addEventListener('click', function () {
    decreaseValue();
    changeInputWidth();
  });

  incLengthButton.addEventListener('click', function () {
    increaseValue();
    changeInputWidth();
  });

  function decreaseValue() {
    let value = parseInt(lengthInput.value);
    if (value > parseInt(lengthInput.min)) {
      lengthInput.value = value - parseInt(lengthInput.step);
    }
  }

  function increaseValue() {
    let value = parseInt(lengthInput.value);
    if (value < parseInt(lengthInput.max)) {
      lengthInput.value = value + parseInt(lengthInput.step);
    }
  }

  // Quantity

  const decQuantityButton = document.querySelector(
    '.order__quantity-button.decrement'
  );
  const incQuantityButton = document.querySelector(
    '.order__quantity-button.increment'
  );
  const quantityInput = document.querySelector('.order__quantity-input');

  decQuantityButton.addEventListener('click', function () {
    decreaseQuantityValue();
    checkIfDisabled();
  });

  incQuantityButton.addEventListener('click', function () {
    increaseQuantityValue();
    checkIfDisabled();
  });

  function checkIfDisabled() {
    if (quantityInput.value === quantityInput.min) {
      decQuantityButton.disabled = true;
    } else {
      decQuantityButton.disabled = false;
    }

    if (quantityInput.value === quantityInput.max) {
      incQuantityButton.disabled = true;
    } else {
      incQuantityButton.disabled = false;
    }
  }

  checkIfDisabled();

  function decreaseQuantityValue() {
    let value = parseInt(quantityInput.value);
    if (value > parseInt(quantityInput.min)) {
      quantityInput.value = value - parseInt(quantityInput.step);
    }
  }

  function increaseQuantityValue() {
    let value = parseInt(quantityInput.value);
    if (value < parseInt(quantityInput.max)) {
      quantityInput.value = value + parseInt(quantityInput.step);
    }
  }
});

// JavaScript код для збереження вибраних параметрів
// let selectedParameters = {};

// function saveParameters() {
//   selectedParameters.conveyorBeltWidth = document.querySelector(
//     '#conveyor-belt-width'
//   ).value;
//   selectedParameters.bedSectionLength = document.querySelector(
//     '#bed-section-length'
//   ).value;
//   selectedParameters.chainDrivenFeeder = document.querySelector(
//     '#chain-driven-feeder'
//   ).checked;
//   selectedParameters.additionalSupportStructures = document.querySelector(
//     '#additional-support-structures'
//   ).checked;
// }

// JavaScript код для обробки події натискання кнопки "Request"
// document
//   .querySelector('#request-button')
//   .addEventListener('click', function () {
//     saveParameters();
//     // Відкриття другої форми або виконання інших дій
//   });
