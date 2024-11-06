gebruikt XanDOM uit "xandom";
vast xandom = new XanDOM();
vast root = document.getElementById('root');
elast myNumber: getal = 0;
elast total: getal = 0;
vast counter = <div id="counter" class="counter"><p>0</p></div>;
vast timer = <div id="timer" class="timer"><p>Timer:</p><p id="timerValue">30</p></div>;

async functie init(gameName: tekst){
    vast gameNameElement = <p id="gameName">vargameName</p>;
    vast button = <div><p>Klik hier om een kaart te trekken!</p><button id="button" class="button" onClick="clickButton()">Click me</button></div;
    xandom.render(gameNameElement, root);
    xandom.render(timer, root);
    xandom.render(counter, root);
    xandom.render(button, root);
    toerke(elast i = 120; i >= 0; i--;){
        console.log(i)  
        xandom.setInnerText('timerValue', i);
        await sleep(1000);
    }
}

functie clickButton(){
    als(total < 21){
    elast math = Math.random();
    elast random = math * 10;
    elast theRandom = random + 1;
    myNumber = Math.floor(theRandom);
    total = total + myNumber;
    vast card = <p>varmyNumber</p>;
    xandom.render(card, root);
    checkBroken();
}
}
 
functie checkBroken(){
    xandom.setInnerText('counter', total);
    als(total > 21){
        vast card = <p>
            <p>Helaas!</p>
            <b><p>Je hebt verloren met een totaal van</p> <p>vartotal</p></b>
        </p>;
        xandom.render(card, root);
    } 
    
    als(total === 21){
        vast card = <p>
            <p>Gefeliciteerd!</p>
            <b><p>Je hebt gewonnen met een totaal van</p> <p>vartotal</p></b>
        </p>;
        xandom.render(card, root);
    }
    
}
init("eenentwintigen");
