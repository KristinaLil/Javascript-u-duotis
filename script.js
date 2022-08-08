function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function changeIcon(x) {
    x.classList.toggle("change");
}

$(".burger").on("click", function () {
    $(".menuElements").animate({ width: 'toggle' }, 1050);
});

$(".ghost").click(function () {
    $(".fading").fadeToggle(1000)
})

function width(x) {
    document.getElementsByClassName('properties')[x].classList.toggle('wide');
}

function height(x) {
    document.getElementsByClassName('properties')[x].classList.toggle('high');
}

function colorDiv(x) {
    document.getElementsByClassName('properties')[x].classList.toggle('coloredDiv');
}

function center(x) {
    document.getElementsByClassName('properties')[x].classList.toggle('center');
}

function position(x) {
    document.getElementsByClassName('properties')[x].classList.toggle('position');
}

let boxes = document.querySelectorAll(".box");

function coloredBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        color = '#' + Math.random().toString(16).substr(-6);
        boxes[i].style.backgroundColor = color;
        boxes[i].textContent = color;
    }
}

document.getElementById("tableForm").addEventListener('submit', function (e) {
    e.preventDefault();
})

let num = 1;
function createTable() {
    document.getElementById("printedTable").style.display = "block";
    let table = document.getElementById("printedTable");
    let row = table.insertRow();
    let counter = row.insertCell(0);
    let name = row.insertCell(1);
    let lname = row.insertCell(2);
    let year = row.insertCell(3);
    counter.textContent = num;
    name.innerHTML = document.getElementById("name").value;
    lname.innerHTML = document.getElementById("lname").value;
    let date = new Date().getFullYear();
    year.innerHTML = date - document.getElementById("year").value;
    num++;
}

$("#empty").click(function () {
    $("#printedTable").empty()
    let inputs = document.querySelectorAll('#name, #lname, #year');
    inputs.forEach(input => {
        input.value = '';
    })
});