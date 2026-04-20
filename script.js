let screen = document.getElementById('screen');

function appendValue(value) {
    if (screen.value === "Error") screen.value = "";
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        // Use eval carefully; for a simple calculator it works fine.
        // Replace '×' and '÷' symbols with actual operators
        let expression = screen.value.replace(/×/g, '*').replace(/÷/g, '/');
        screen.value = eval(expression);
    } catch (err) {
        screen.value = "Error";
    }
}

// Support for Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") calculate();
    if (e.key === "Escape") clearScreen();
});
