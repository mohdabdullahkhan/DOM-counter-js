

let elm = document.getElementById("intro");
let new1 = document.createElement("h1");
new1.innerText = "Counter";
elm.appendChild(new1);

elm.style.cssText = "background-color:aqua; padding:40px; text-align:center; "

let count = document.createElement("h1");
count.innerHTML = 0;


let btn1 = document.createElement("button");

btn1.innerHTML = "Increment";
btn1.addEventListener('click', increment);
btn1.style.cssText = "padding:5px; margin:10px; width:200px;"


let btn2 = document.createElement("button");
btn2.innerHTML = "Decrement";
btn2.addEventListener('click', decrement);
btn2.style.cssText = "padding:5px; margin:10px; width:200px;"

let btn3 = document.createElement("button");
btn3.innerHTML = "Reset";
btn3.addEventListener('click', reset);
btn3.style.cssText = "padding:5px; margin:10px; width:200px;"

elm.appendChild(count);
elm.appendChild(btn1);
elm.appendChild(btn2);
elm.appendChild(btn3);


function increment() {
    let currentCount = count.innerText;
    console.log(currentCount);
    let updatedCount = parseInt(currentCount) + 1;
    console.log(updatedCount);
    count.innerHTML = updatedCount;
}


function decrement() {
    let currentCount = count.innerText;
    let updatedCount = parseInt(currentCount) - 1;
    count.innerHTML = updatedCount;
}


function reset() {
    count.innerHTML = 0;
}