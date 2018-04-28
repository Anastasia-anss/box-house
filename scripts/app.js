 document.addEventListener("DOMContentLoaded", ready);

 function ready() {
   //переменные
   var loginImgElement = document.getElementsByClassName("login-img")[0];
   var loginPopUpElement = document.getElementsByClassName("login-popup")[0];
   var registrationButtonElement = document.getElementsByClassName("registration")[0];
   var registrationPopUpElement = document.getElementsByClassName("registration-popup")[0];
   var overlayElement = document.getElementsByClassName("overlay")[0];


   //обработчик событий для входа
   loginImgElement.addEventListener("click", function (event) {
     loginPopUpElement.style.display = "block";

     event.stopPropagation();
     //document.addEventListener("click", loginOutsideClick);
   });


   //обработчик событий для регистрации
   registrationButtonElement.addEventListener("click", function (event) {
     registrationPopUpToggle(true);
     loginPopUpElement.style.display = "none";
     document.removeEventListener("click", loginOutsideClick);
     document.addEventListener("click", registrationOutsideClick);

     event.stopPropagation();
   });


   //обработчик событий для входа
   function loginOutsideClick(event) {
     if (event.target.className !== "login-popup" && event.target.parentNode.className !== "login-popup") {
       loginPopUpElement.style.display = "none";
       document.removeEventListener("click", loginOutsideClick);
     }
   }

   //обработчик событий для регистрации
   function registrationOutsideClick(event) {
     if (event.target.className !== "registration-popup" && event.target.parentNode.className !== "registration-popup") {
      registrationPopUpToggle(false);

       document.removeEventListener("click", registrationOutsideClick);
     }


   }
   document.getElementsByClassName("registration-submit")[0].addEventListener("click", function () {
    registrationPopUpToggle(false);
   });

   function registrationPopUpToggle(show) {
     registrationPopUpElement.style.display = show ? "block" : "none";
     overlayElement.style.display = show ? "block" : "none";
  }
 }
 
 // нажатие "коробки" без обновления страницы
var content = document.getElementById("content");
var box = document.getElementById("box");

//var content = document.getElementsByClassName("content")[0];
//var box = document.getElementsByClassName("box")[0];
/*var contentTwo = document.getElementsByClassName("contentTwo")[0];

   box.addEventListener("click", function (event){
       //content.style.display = "none";
       contentTwo.style.display = "block";
       contentToggle(false);
       document.removeEventListener("click", content);

   });

   function boxclick(event) {
    if (event.target.className == "box" ) {
      content.style.display = "none";
     
    }
  }*/
