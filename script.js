document.getElementById('submitCount').addEventListener('click', function() {
    const numCount = parseInt(document.getElementById('numCount').value);
    const numberInputs = document.getElementById('numberInputs');
    numberInputs.innerHTML = ''; 

    for (let i = 0; i < numCount; i++) {
        numberInputs.innerHTML += `<input type="number" class="numberInput" placeholder="Número ${i + 1}"><br>`;
    }

    document.getElementById('numberInputSection').style.display = 'block';
    document.getElementById('drawButton').style.display = 'block';
});

document.getElementById('drawButton').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.numberInput');
    const numbers = [];

    inputs.forEach(input => {
        const value = parseInt(input.value);
        if (!isNaN(value)) {
            numbers.push(value);
        }
    });

    if (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const result = numbers[randomIndex];
        document.getElementById('result').innerText = `Número sorteado: ${result}`;
        document.getElementById('result').style.display = 'block';
    }
});
