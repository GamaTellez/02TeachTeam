function buttonClicked() {
    alert("Clicked!");
}

function divOneColorSelected() {
    var colorSelected = document.getElementById("divOneSelect").value;
    if (colorSelected === "pick a color") {
        document.getElementById("divOne").style.backgroundColor =  "white";
    } else {
        document.getElementById("divOne").style.backgroundColor =  colorSelected;
    }
}