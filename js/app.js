function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    };
};
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
    document.getElementById("typed-numbers").value = "";
    // displayed notifications
    document.getElementById("notify-success").style.display = "none";
    document.getElementById("notify-fail").style.display = "none";
    document.getElementById("notify-empty").style.display = "none";
};
document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const caclInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == "C") {
            caclInput.value = "";
        }
        else if (number == "<") {
            caclInput.value = caclInput.value.slice(0, caclInput.value.length - 1);
        }
    }
    else {
        const previousNumber = caclInput.value;
        const newNumber = previousNumber + number;
        caclInput.value = newNumber;
    };
});

function verifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successNotification = document.getElementById("notify-success");
    const failNotification = document.getElementById("notify-fail");
    const emptyNatification = document.getElementById("notify-empty");
    if (pin == "") {
        emptyNatification.style.display = "block";
    }
    else if (pin == typedNumbers) {
        successNotification.style.display = "block";
    }
    else {
        failNotification.style.display = "block";
    };
};