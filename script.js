const milosevic = document.getElementById("milosevic");
const rihanna = document.getElementById("rihanna");
const riska = document.getElementById("riska");
const sundjerbob = document.getElementById("sundjerbob");
var body = document.getElementsByTagName("BODY")[0];
const pocetni = document.getElementById("pocetniekran");
const cartoon = document.getElementById("cartoon");
const cartoonwritings = document.getElementById("writingsincartoon");
const ime = document.getElementById("ovdeideime");

function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("ovdeideime").innerHTML = x;
  }



milosevic.addEventListener("click", () => {
    console.log("milosevic clicked");
    document.body.style.backgroundImage = "url('slobodan.jpg')";
    pocetni.classList.add("hidden");
    cartoon.classList.remove("hidden");
    cartoonwritings.classList.remove("hidden");
    myFunction();

})

riska.addEventListener("click", () => {
    console.log("riska clicked");
    document.body.style.backgroundImage = "url('riska.jpg')";
    pocetni.classList.add("hidden");
    cartoon.classList.remove("hidden");
    cartoonwritings.classList.remove("hidden");
    changeBackgroundImageForMobile('riskamobile.jpg');
    myFunction();
  
})

rihanna.addEventListener("click", () => {
    console.log("rihanna");
    document.body.style.backgroundImage = "url('rihanna.jpg')";
    pocetni.classList.add("hidden");
    cartoon.classList.remove("hidden");
    cartoonwritings.classList.remove("hidden");
    myFunction();
})

sundjerbob.addEventListener("click", () => {
    console.log("milosevic clicked");
    document.body.style.backgroundImage = "url('sundjerbob.jpg')";
    pocetni.classList.add("hidden");
    cartoon.classList.remove("hidden");
    cartoonwritings.classList.remove("hidden");
    myFunction();

})

function changeBackgroundImageForMobile(imageUrl) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.style.backgroundImage = `url('${imageUrl}')`;

    }
  }

