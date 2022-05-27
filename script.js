let ChromeText = document.getElementById("Chrome")
let SafariText = document.getElementById("Safari")
let FirefoxText = document.getElementById("Firefox")
let EdgeText = document.getElementById("Edge")
let OperaText = document.getElementById("Opera")
let Bird = document.getElementById("bird")
let music = new Audio('/music.mp3')
let djcat = document.getElementById("djcat")
let adventuretime = document.getElementById("adventuretime")
let chromebutton = document.getElementById("chromebutton")
let firefoxbutton = document.getElementById("firefoxbutton")
let safaributton = document.getElementById("safaributton")
let edgebutton = document.getElementById("edgebutton")
let operabutton = document.getElementById("operabutton")

function ChromeClick() {
    if (ChromeText.style.display === "none"){
        ChromeText.style.display = "block";
        firefoxbutton.style.display = "none";
        safaributton.style.display = "none";
        edgebutton.style.display = "none";
        operabutton.style.display = "none";
        chromebutton.style.height = "100px";
        chromebutton.style.width = "150px";
        chromebutton.style.backgroundImage = "url(/test.gif)";
        chromebutton.style.color = "white";
        test();
    }
    else {
        ChromeText.style.display = "none";
        firefoxbutton.style.display = "inline";
        safaributton.style.display = "inline";
        edgebutton.style.display = "inline";
        operabutton.style.display = "inline";
        chromebutton.style.height = "";
        chromebutton.style.width = "";
        chromebutton.style.backgroundImage = "";
        chromebutton.style.color = "black";
        testkapa();
    }
}

function FirefoxClick() {
    if (FirefoxText.style.display === "none"){
        FirefoxText.style.display = "block";
        chromebutton.style.display = "none";
        safaributton.style.display = "none";
        edgebutton.style.display = "none";
        operabutton.style.display = "none";
        firefoxbutton.style.height = "100px";
        firefoxbutton.style.width = "150px";
        firefoxbutton.style.backgroundImage = "url(/test.gif)";
        firefoxbutton.style.color = "white";
        test();
    }
    else {
        FirefoxText.style.display = "none";
        chromebutton.style.display = "inline";
        safaributton.style.display = "inline";
        edgebutton.style.display = "inline";
        operabutton.style.display = "inline";
        firefoxbutton.style.height = "";
        firefoxbutton.style.width = "";
        firefoxbutton.style.backgroundImage = "";
        firefoxbutton.style.color = "black";
        testkapa();
    }
}

function SafariClick() {
    if (SafariText.style.display === "none"){
        SafariText.style.display = "block";
        chromebutton.style.display = "none";
        firefoxbutton.style.display = "none";
        edgebutton.style.display = "none";
        operabutton.style.display = "none";
        safaributton.style.height = "100px";
        safaributton.style.width = "150px";
        safaributton.style.backgroundImage = "url(/test.gif)";
        safaributton.style.color = "white";
        test();
    }
    else {
        SafariText.style.display = "none";
        chromebutton.style.display = "inline";
        firefoxbutton.style.display = "inline";
        edgebutton.style.display = "inline";
        operabutton.style.display = "inline";
        safaributton.style.height = "";
        safaributton.style.width = "";
        safaributton.style.backgroundImage = "";
        safaributton.style.color = "black";
        testkapa();
    }
}

function EdgeClick() {
    if (EdgeText.style.display === "none"){
        EdgeText.style.display = "block";
        chromebutton.style.display = "none";
        firefoxbutton.style.display = "none";
        safaributton.style.display = "none";
        operabutton.style.display = "none";
        edgebutton.style.height = "100px";
        edgebutton.style.width = "150px";
        edgebutton.style.backgroundImage = "url(/test.gif)";
        edgebutton.style.color = "white";
        test();
    }
    else {
        EdgeText.style.display = "none";
        chromebutton.style.display = "inline";
        firefoxbutton.style.display = "inline";
        safaributton.style.display = "inline";
        operabutton.style.display = "inline";
        edgebutton.style.height = "";
        edgebutton.style.width = "";
        edgebutton.style.backgroundImage = "";
        edgebutton.style.color = "black";
        testkapa();
    }
}

function OperaClick() {
    if (OperaText.style.display === "none"){
        OperaText.style.display = "block";
        chromebutton.style.display = "none";
        firefoxbutton.style.display = "none";
        safaributton.style.display = "none";
        edgebutton.style.display = "none";
        operabutton.style.height = "100px";
        operabutton.style.width = "150px";
        operabutton.style.backgroundImage = "url(/test.gif)";
        operabutton.style.color = "white";
        test();
    }
    else {
        OperaText.style.display = "none";
        chromebutton.style.display = "inline";
        firefoxbutton.style.display = "inline";
        safaributton.style.display = "inline";
        edgebutton.style.display = "inline";
        operabutton.style.height = "";
        operabutton.style.width = "";
        operabutton.style.backgroundImage = "";
        operabutton.style.color = "black";
        testkapa();
    }
}
function test() {
    music.play();
    Bird.style.display = "block";
    djcat.style.display = "block";
    adventuretime.style.display = "block";
    document.body.style.backgroundImage = "url(/disco.gif)";
    document.getElementById("nav").style.opacity = 0;
    document.getElementById("foot").style.opacity = 0;
}
function testkapa() {
    music.pause();
    music.currentTime = 0;
    Bird.style.display = "none";
    djcat.style.display = "none";
    adventuretime.style.display = "none";
    document.body.style.backgroundImage = "";
    document.getElementById("nav").style.opacity = 1;
    document.getElementById("foot").style.opacity = 1;
}