function convertTemperature() {
    // Get input value and validate
    let temperatureInput = document.getElementById('temperatureInput').value.trim();
    if (temperatureInput === '' || isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }
    let temperature = parseFloat(temperatureInput);

    // Get selected unit
    let unitSelect = document.getElementById('unitSelect');
    let selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Perform conversion
    let convertedTemperature;
    let resultUnit;
    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * (5/9);
        resultUnit = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    }

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
