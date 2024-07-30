// Basic Calculator Functions
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid calculation');
    }
}

// Currency Converter
function convertCurrency() {
    const amount = parseFloat(document.getElementById('currency-input').value);
    const from = document.getElementById('currency-from').value;
    const to = document.getElementById('currency-to').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    // Mock conversion rates
    const rates = {
        USD: { USD: 1, EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, EUR: 1, GBP: 0.88 },
        GBP: { USD: 1.33, EUR: 1.14, GBP: 1 },
    };

    const convertedAmount = amount * rates[from][to];
    document.getElementById('currency-result').innerText = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}

// Weight Converter
function convertWeight() {
    const weight = parseFloat(document.getElementById('weight-input').value);
    const from = document.getElementById('weight-from').value;
    const to = document.getElementById('weight-to').value;

    if (isNaN(weight)) {
        alert('Please enter a valid weight');
        return;
    }

    let convertedWeight;
    if (from === 'kg' && to === 'lb') {
        convertedWeight = weight * 2.20462;
    } else if (from === 'lb' && to === 'kg') {
        convertedWeight = weight / 2.20462;
    } else {
        convertedWeight = weight;
    }

    document.getElementById('weight-result').innerText = `${weight} ${from} = ${convertedWeight.toFixed(2)} ${to}`;
}

// Mass Converter
function convertMass() {
    const mass = parseFloat(document.getElementById('mass-input').value);
    const from = document.getElementById('mass-from').value;
    const to = document.getElementById('mass-to').value;

    if (isNaN(mass)) {
        alert('Please enter a valid mass');
        return;
    }

    let convertedMass;
    if (from === 'g' && to === 'oz') {
        convertedMass = mass * 0.035274;
    } else if (from === 'oz' && to === 'g') {
        convertedMass = mass / 0.035274;
    } else {
        convertedMass = mass;
    }

    document.getElementById('mass-result').innerText = `${mass} ${from} = ${convertedMass.toFixed(2)} ${to}`;
}
