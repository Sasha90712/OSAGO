(function () {
    const form = document.getElementById('convert');
form.addEventListener('submit', function (event) {
        event.preventDefault();
        let bstavka = parseFloat(document.getElementById('bstavka').value);
		let KBM = parseFloat(document.getElementById('KBM').value);
		let KVC = parseFloat(document.getElementById('KVC').value);
        if (bstavka && KBM && KVC) {
            let converted = (bstavka * KBM*KVC).toFixed(2);
            let h2 = document.getElementsByTagName('h2')[0];
            h2.innerHTML =converted + ' рублей';
            h2.className = "";
        }
        else {
            answer.innerHTML = '<h2>Пожалуйста, введите данные!</h2>'
        }
    });
})();