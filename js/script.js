function course() {
    const element = document.getElementById("arrow").className;

    const element1 = document.getElementById('demo');

    element1.classList.toggle("active");

}

function corporate() {
    const element = document.getElementById("arrow").className;

    const element1 = document.getElementById('demo1');

    element1.classList.toggle("active");

}

function resource() {
    const element = document.getElementById("arrow").className;

    const element1 = document.getElementById('demo2');

    element1.classList.toggle("active");

}

function data() {
    let data1 = document.getElementById(this).innerHTML;
    console.log(data1);
    document.getElementById("inputvalue").placeholder = data1;
}