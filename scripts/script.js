// JavaScript Document
// console.log("hi");

// var hamburger = document.querySelector("header nav ul nav section span");
// var navMenu = document.querySelector("header nav ul nav ul");

// hamburger.addEventListener("click", () =>  {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// documen.querySelectorAll("header nav ul nav ul li")

const hamburgerMenu = document.querySelector(".menu");
const hamburgerKnop = document.querySelector(".hamburgerKnop")

hamburgerKnop.onclick = menuUitklappen;

function menuUitklappen() {
    hamburgerMenu.classList.toggle("menuUitgeklapt");
}

// var buttonhamburger =document.querySelector(".hamburgerknop")
// var fotohamburger =document.querySelector(".imgbutton")

// fotohamburger.addEventListener("click", function () {
//     fotohamburger.src = "./images/zwartkruis.png"

// })

// var fotohamburger = document.querySelector(".imgbutton");
// var isHamburgerActive = false; // Een vlag om bij te houden of de hamburger actief is of niet

// fotohamburger.addEventListener("click", function () {
//     if (isHamburgerActive) {
//         // Als de hamburger actief is (zwarte kruis), schakel dan terug naar de oorspronkelijke bron (hamburger)
//         fotohamburger.src = "./images/Hamburger_icon.svg.png.png";
//         isHamburgerActive = false; // Markeer de hamburger als niet actief
//     } else {
//         // Als de hamburger niet actief is (hamburger), schakel dan naar de andere bron (zwarte kruis)
//         fotohamburger.src = "./images/zwartkruis.png";
//         isHamburgerActive = true; // Markeer de hamburger als actief
//     }
// });

var fotohamburger = document.querySelector(".imgbutton");
var isHamburgerActive = false; // Een vlag om bij te houden of de hamburger actief is of niet

fotohamburger.addEventListener("click", function () {
    if (isHamburgerActive) {
        // Als de hamburger actief is (zwarte kruis), schakel dan terug naar de oorspronkelijke bron (hamburger)
        fotohamburger.src = "./images/hamburger-menu-5.png";
    } else {
        // Als de hamburger niet actief is (hamburger), schakel dan naar de andere bron (zwarte kruis)
        fotohamburger.src = "./images/zwartkruis.png";
    }

    // Wijzig de status van de hamburger
    isHamburgerActive = !isHamburgerActive;
});


// {
//     var sliders = document.querySelectorAll(".slider");
//     // interval between switching images
//     // can't be less than your animation duration in css!
//     var interval = 2800;
//     // if you don't want to first animation last longer than other animations  
//     // set animDuration (in miliseconds) to your value of animation duration in css
//     var animDuration = 600;

//     for (let i = 0; i < sliders.length; ++i) {
//       const slider = sliders[i];
//       const dots = slider.querySelector(".dots");
//       const sliderImgs = slider.querySelectorAll(".img");

//       let currImg = 0;
//       let prevImg = sliderImgs.length - 1;
//       let intrvl;
//       let timeout;

//       // Creates dots and add listeners to them
//       for (let i = 0; i < sliderImgs.length; ++i) {
//         const dot = document.createElement("div");
//         dot.classList.add("dot");
//         dots.appendChild(dot);
//         dot.addEventListener("click", dotClick.bind(null, i), false);
//       }

//       const allDots = dots.querySelectorAll(".dot");
//       allDots[0].classList.add("active-dot");

//       sliderImgs[0].style.left = "0";
//       timeout = setTimeout(() => {
//         animateSlider();
//         sliderImgs[0].style.left = "";
//         intrvl = setInterval(animateSlider, interval);
//       }, interval - animDuration);   

//       /**
//        * Animates images
//        * @param {number} [nextImg] - index of next image to show
//        * @param {boolean} [right = false] - animate to right
//        */
//       function animateSlider(nextImg, right) {
//         if (!nextImg)
//           nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

//         --nextImg;
//         sliderImgs[prevImg].style.animationName = "";

//         if (!right) {
//           sliderImgs[nextImg].style.animationName = "leftNext";
//           sliderImgs[currImg].style.animationName = "leftCurr";
//         } 
//         else {
//           sliderImgs[nextImg].style.animationName = "rightNext";
//           sliderImgs[currImg].style.animationName = "rightCurr";
//         }

//         prevImg = currImg;
//         currImg = nextImg;

//         currDot = allDots[currImg];
//         currDot.classList.add("active-dot");
//         prevDot = allDots[prevImg];
//         prevDot.classList.remove("active-dot");
//       }

//       /**
//        * Decides if animate to left or right and highlights clicked dot
//        * @param {number} num - index of clicked dot
//        */
//       function dotClick(num) {
//         if (num == currImg)
//           return false;

//         clearTimeout(timeout);
//         clearInterval(intrvl); 

//         if (num > currImg)
//           animateSlider(num + 1);
//         else
//           animateSlider(num + 1, true);

//         intrvl = setInterval(animateSlider, interval);
//       }
//     }
//   }


const sliderLinkjes = document.querySelectorAll(".slider label a"); // met all selecteer je alle "a" in de html ipv alleen de eerste.

sliderLinkjes.forEach(function (linkje) { // for e
    linkje.addEventListener("click", function () {
        let href = this.getAttribute("href"); // "let" kan je veranderen van naam/waarde, const
        href = href.substring(1);
        href = href.replace(/-/g, ''); // om te voorkomen dat je hier de article class aanspreek die dezelfde naam hebt zorgt deze js ervoor dat hij de - weghaald voor niks.

        const input = document.querySelector(`#${href}`); // hier is de naam van de href veranderd en wil je het zoeken in js. (`#${href}`) is dus om niet te zoeken in html maar in css. 
        input.checked = true; // hier moet de input kijken of ie is aangeklikt als hij is aangeklikt mag hij veranderen van uiterelijk.
    });
});



fotosectie = document.querySelector(".fotosection") 



// var fotos = [

//     "./images/fotogrid1",

//     "./images/fotogrid2",

//     "./images/fotogrid3",

//     "./images/fotogrid4",

//     "./images/fotogrid5"

// ]



// fotosectie.addEventListener("click", function(){

//     var randomIndex = Math.floor(Math.random() * fotos.length);

//     var randomFoto = fotos[randomIndex];

//     randomFoto.classList.add("zichtbaar")

// } )


// Array met foto's
// const fotoArray = [
//     "/images/foto1sectiongridhomepage.jpeg",
//     "/images/foto2sectiongridhomepage.jpeg",
//     "/images/foto3sectiongridhomepage.jpeg",
//     "/images/foto4sectiongridhomepage.jpeg",
//     "/images/foto5sectiongridhomepage.jpeg",
//     "/images/foto6sectiongridhomepage.jpeg",
//     "/images/foto7sectiongridhomepage.jpeg",
//     "/images/foto8sectiongridhomepage.jpeg",
//     "/images/foto9sectiongridhomepage.jpeg",
//     "/images/foto10sectiongridhomepage.jpeg",
//     "/images/foto11sectiongridhomepage.jpeg",
//     "/images/foto12sectiongridhomepage.jpeg",
//     "/images/foto13sectiongridhomepage.jpeg",
//     "/images/foto14sectiongridhomepage.jpeg",
//     "/images/foto15sectiongridhomepage.jpeg",
//     "/images/foto16sectiongridhomepage.jpeg",
//     "/images/foto17sectiongridhomepage.jpeg",
//     "/images/foto18sectiongridhomepage.jpeg",
//     "/images/foto19sectiongridhomepage.jpeg",
//     "/images/foto20sectiongridhomepage.jpeg",
//     "/images/foto21sectiongridhomepage.jpeg",
//     "/images/foto22sectiongridhomepage.jpeg",
//     "/images/foto23sectiongridhomepage.jpeg",
//     "/images/foto24sectiongridhomepage.jpeg",
// ];

// var image = document.querySelectorAll()
// const fotoSectie = document.getElementById("shophomepage");
var imgElementen = document.querySelectorAll(".shophomepage img");

// var random = 


function fotoAnimatie () {
    // imgElementen[0].style.display = "none";
    // imgElementen[1].style.display = "none";
    // imgElementen[2].style.display = "none";
    // imgElementen[3].style.display = "none";
    // imgElementen[4].style.display = "none";
    // imgElementen[5].style.display = "none";
    // imgElementen[6].style.display = "none";
    // imgElementen[7].style.display = "none";
    // imgElementen[8].style.display = "none";
    // imgElementen[9].style.display = "none";
    // imgElementen[10].style.display = "none";
    // imgElementen[11].style.display = "none";

    imgElementen.forEach ( (element,index) => { 
element.style.display = "none";
    }) 

    // console.log(imgElementen [Math.floor(Math.random() * 25)])

    imgElementen [Math.floor(Math.random() * 24)].style.display = "block";
     setTimeout(function(){
        requestAnimationFrame (fotoAnimatie) 

     },1000
     )


} // omdat je de requiest animation frame binnen de functie oproept blijven hij lopen want er is geen einde 

fotoAnimatie () 





// // Een functie om willekeurige volgorde te genereren voor de foto's
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) { // i is het nummer 
//         const j = Math.floor(Math.random() * (i + 1)); // random volgorde uitrekenen
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Functie om foto's een voor een weer te geven
// function toonFoto(index) {
//     if (index < fotoArray.length) {
//         const img = imgElementen[index];
//         img.src = fotoArray[index];
//         img.style.display = "block"; // Toon de foto
//         setTimeout(function () {
//             img.style.display = "none"; // Verberg de foto na 1 seconde
//             toonFoto(index + 1); // Ga naar de volgende foto
//         }, 1000); // 1000 milliseconden = 1 seconde
//     }
// }

// // Roep de shuffleArray-functie aan om de foto's in willekeurige volgorde te plaatsen
// shuffleArray(fotoArray);

// // Start het tonen van de foto's
// toonFoto(0);
