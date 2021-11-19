function remCard1() {
    var element = document.getElementById("card1");
    element.remove();
}

function remCard2() {
    var element = document.getElementById("card2");
    element.remove();
}

function nameChange() {
    var name = prompt("What name are you going by now?", "Jane Doe");
    if (name != null) {
        document.getElementById("namespace").innerText = name;
    }
}