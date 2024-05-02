function calc() {
    var sizePrice = 0;
    var toppingPrice = 0;
    var totalPrice = 0;

    if (document.getElementById("small").checked) {
        sizePrice = 8;
    } else if (document.getElementById("medium").checked) {
        sizePrice = 10;
    } else if (document.getElementById("large").checked) {
        sizePrice = 12;
    }

    if (document.getElementById("pepperoni").checked) {
        toppingPrice += 2;
    }

    if (document.getElementById("cheese").checked) {
        toppingPrice += 1;
    }

    totalPrice = sizePrice + toppingPrice;

    document.getElementById("out1").innerHTML = "Total price: $" + totalPrice;
}