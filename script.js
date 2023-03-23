const milosevic = document.getElementById("milosevic");
const rihanna = document.getElementById("rihanna");
const riska = document.getElementById("riska");
const sundjerbob = document.getElementById("sundjerbob");
var body = document.getElementsByTagName("BODY")[0];
const pocetni = document.getElementById("pocetniekran");
const cartoon = document.getElementById("cartoon");
const cartoonwritings = document.getElementById("writingsincartoon");
const refreshbutton = document.getElementById("refreshbutton");
console.log(refreshbutton);

function myFunction() {
    var x = document.getElementById("fname").value;
    document.getElementById("ovdeideime").innerHTML = x;
    pocetni.classList.add("hidden");
    cartoon.classList.remove("hidden");
    cartoonwritings.classList.remove("hidden");
    refreshbutton.classList.remove("hidden");
  }

function changeBackgroundImageForMobile(imageUrl) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      console.log("It's a mobile!");
      document.body.style.backgroundImage = `url('${imageUrl}')`;

    }
  }

function buttonListener(){
  refreshbutton.addEventListener("click", () => {
    window.location.reload();
  })
} 



milosevic.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('slobodan.jpg')";
    buttonListener();
    changeBackgroundImageForMobile('slobodanmobile.jpg');
    myFunction();

})

riska.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('riska.jpg')";
    buttonListener();
    changeBackgroundImageForMobile('riskamobile.jpg');
    myFunction();
  
})

rihanna.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('rihanna.jpg')";
    buttonListener();
    changeBackgroundImageForMobile('rihannamobile.jpg');
    myFunction();
})

sundjerbob.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('sundjerbob.jpg')";
    buttonListener();
    changeBackgroundImageForMobile('spongebobmobile.jpg');
    myFunction();

})



