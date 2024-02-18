import _ from 'lodash';
import './style.css';
console.log("xd");
const content = document.querySelector("#content");
const homeBTN = document.querySelector("#home");
const menuBTN = document.querySelector("#menu");
const aboutBTN = document.querySelector("#about");

function homeTap(){
    const texts = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    //Home
    texts.classList.add("texts");
    h1.textContent = "Food is good here";
    p.innerHTML = "Step into a world of flavor where every bite is a delight!<br>Our food is delicious, nam nam!";
    texts.appendChild(h1);
    texts.appendChild(p);
    content.appendChild(texts);
}

function menuTap(){
    const plates = document.createElement("div");
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    //Home
    plates.classList.add("plates");
    h1.textContent = "Main Plates";

    p1.textContent = "Burger: $5.99";
    p2.textContent = "Pizza: $8.99";
    p3.textContent = "Salad: $6.49";
    p4.textContent = "Pasta: $9.99";
    p5.textContent = "Sandwich: $4.99";
    

    plates.appendChild(h1);
    plates.appendChild(p1);
    plates.appendChild(p2);
    plates.appendChild(p3);
    plates.appendChild(p4);
    plates.appendChild(p5);
    content.appendChild(plates);
}
function aboutTap(){
    const about = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    //Home
    about.classList.add("about");
    h1.textContent = "Welcome to Restaurante!";
    p.textContent = "We pride ourselves on serving fresh, flavorful dishes in a warm and inviting atmosphere. Join us for a delicious meal and friendly service today!";
    about.appendChild(h1);
    about.appendChild(p);
    content.appendChild(about);
}

homeTap();
homeBTN.disabled = true;

homeBTN.addEventListener("click",()=>{
    clear();
    homeTap();
    homeBTN.disabled = true;
});

menuBTN.addEventListener("click",()=>{
    clear();
    menuTap();
    menuBTN.disabled = true;
});

aboutBTN.addEventListener("click",()=>{
    clear();
    aboutTap();
    aboutBTN.disabled = true;
});


function clear(){
    //home
    const texts = document.querySelector(".texts");
    if (texts !== null) {
        texts.innerHTML = "";
        texts.remove();
        homeBTN.disabled = false;
    }
    //menu
    const plates = document.querySelector(".plates");
    if (plates !== null) {
        plates.innerHTML = "";
        plates.remove();
        menuBTN.disabled = false;
    }
    //about
    const about = document.querySelector(".about");
    if (about !== null) {
        about.innerHTML = "";
        about.remove();
        aboutBTN.disabled = false;
    }
}

