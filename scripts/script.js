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

function menuUitklappen(){
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

sliderLinkjes.forEach(function(linkje) { // for e
    linkje.addEventListener("click", function() {
        let href = this.getAttribute("href"); // "let" kan je veranderen van naam/waarde, const
        href = href.substring(1); 
        href = href.replace(/-/g, ''); // om te voorkomen dat je hier de article class aanspreek die dezelfde naam hebt zorgt deze js ervoor dat hij de - weghaald voor niks.

        const input = document.querySelector(`#${href}`); // hier is de naam van de href veranderd en wil je het zoeken in js. (`#${href}`) is dus om niet te zoeken in html maar in css. 
        input.checked = true; // hier moet de input kijken of ie is aangeklikt als hij is aangeklikt mag hij veranderen van uiterelijk.
    });
});


