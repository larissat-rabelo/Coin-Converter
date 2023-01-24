const form = document.getElementById('form')
const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency')
const result = document.getElementById('result')
let valueConverted = 0

form.addEventListener('submit',submit)

function submit(e) {
    e.preventDefault(); /* Impede que a página seja recarregada */
    
    if(!inputValue.value || inputValue.value <= 0) {
        alert('Favor inserir um valor maior que 0')
        return;
    } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda')
        return;
    }
    convert();
}

function convert() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value * 5.60;
        result.innerHTML = valueFormatter('pt-br','EUR');

    } else if (selectedCurrency.value === 'usd') {
        valueConverted = inputValue.value * 5.14;
        result.innerHTML = valueFormatter('en-us','USD');
    }

    inputValue.value = ''
    selectedCurrency.value = ''
}

function valueFormatter(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`,{style: 'currency', currency: `${currency}`})
    return `${value}`;
}