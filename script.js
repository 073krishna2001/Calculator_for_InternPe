const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }
    else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}
function calculate() {
    try {
        let expression = outputScreen.value;
        expression = expression.replace(/%/g, '/100');
        outputScreen.value = eval(expression);
    }
    catch (err) {
        alert("Invalid")
    }
}
function Clear() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}