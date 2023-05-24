let usdRub = document.getElementById('usd_rub');
let usd_rub = usdRub.innerHTML;

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);
let result;

function updateValue(e) {
    log.textContent = e.target.value;
    result = log.innerHTML;
    console.log(result);
}

let new_result = result * usd_rub;
console.log(new_result);
