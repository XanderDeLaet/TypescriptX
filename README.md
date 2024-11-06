# Info
### TypeScriptX XanDOM
Gemaakt door Xander De Laet

Het demo project is het spel eenentwintigen. Je kan kaarten trekken tot je kapot gaat of 21 hebt. Ook is er een timer ingebouwd.

# Features

Dit framework is gemaakt met een eigen taal, TypescriptX, een vlaamse programmeer taal.

Zo zul je syntax verschillen zien zoals:

| Functionaliteit | TypescriptX | Typescript |
|----------|----------|----------|
| functie deckaratie | functie | function |
| variabelen declaratie| var, const, let | globaal, vast, elast |
| types | boolean, getal, tekst, void | boolean, number, string, void |
| for loop| toerke(elast i = 120; i >= 0; i--;) | for(let i = 120; i >= 0; i--) |
| if statement | als(total === 21) | if(total === 21) |

Ook zijn er best veel extra features, zoals dynamische html weergave, set inner tekst functie, onclick events, sleep() promise, if statements, for loop, timer, ...
### EBNF
```
/* Lexical Elements */
<ID> ::= [a-zA-Z]+ ;
<NUMERIC> ::= [0-9]+ ;
<IDNUMERIC> ::= [a-zA-Z0-9]+ ;

<stringLiteral> ::= ('"' (<ID> | <NUMERIC> | <IDNUMERIC>) '"') | ('\'' (<ID> | <NUMERIC> | <IDNUMERIC>) '\'' );

/* Program Structure */
<fileDeclaration> ::= { <statement> } ;

<statement> ::= <varDeclaration>
          | <block>
          | <functionCallStatement>
          | <importStatement>
          | <ifStatement>
          | <functionDeclaration>
          | <functionCall>
          | <loopStatement>
          | <asyncCall> ;

<block> ::= '{' { <statement> } '}' ;

/* Import Statement */
<importStatement> ::= 'gebruikt' <input> 'uit' <stringLiteral> ';' ;

/* HTML Elements */
<htmlBlock> ::= '<' <input> { <attribute> } '>' (<input> | <htmlBlock>)* '</' <input> '>' ;

<attribute> ::= <input> '=' '"' (<functionCall> | <input>) '"' ;

/* Variables */
<varDeclaration> ::= [<varType>] <ID> [<typeAnnotation>] [<initialiser>] ';' ;

<varType> ::= 'globaal' | 'elast' | 'vast' ;

<type> ::= 'getal' | 'tekst' | 'boolean' | 'void' ;

<typeAnnotation> ::= ':' <type> ;

<initialiser> ::= '=' (<input> | <stringLiteral> | <htmlBlock> | <functionCallStatement> | <classInitialiser> | <mathExpression>) ;

<classInitialiser> ::= 'new' (<functionCall> | <functionCallStatement>) ;

<arrayType> ::= <type> '[]' ;

<objectType> ::= '{' { <ID> ':' <type> { ',' <ID> ':' <type> }* } '}' ;

/* Mathematical Expressions */
<mathExpression> ::= <input> <mathOperator> (<input> | <stringLiteral>) ;

<mathOperator> ::= '+' | '-' | '*' | '/' | '%' ;

<quickMath> ::= <input> <quickMathOperator> ;

<quickMathOperator> ::= '++' | '--' ;

/* Functions */
<functionDeclaration> ::= ['async'] 'functie' <ID> '(' [<parameters>] ')' [<typeAnnotation>] <block> ;

<parameters> ::= <varDeclaration> { ',' <varDeclaration> } ;

/* Function Calls */
<functionCallStatement> ::= <ID> { <functionCall> } ;

<functionCall> ::= ['.' <input>] '(' [<arguments>] ')' ;

<arguments> ::= <argument> { ',' <argument> } ;

<argument> ::= <functionCall> | <functionCallStatement> | <input> | <stringLiteral> ;

/* Conditions */
<ifStatement> ::= 'als' '(' <condition> ')' <block> ;

<condition> ::= (<input> | <functionCallStatement>) [<conditionalOperator> <input>] ;

<conditionalOperator> ::= '===' | '==' | '>=' | '<=' | '<' | '>' ;

/* Loops */
<loopStatement> ::= 'toerke' '(' <varDeclaration> <condition> <quickMath> ')' <block> ;

/* Async Calls */
<asyncCall> ::= 'await' <functionCall> ;
```

# Building
2 manieren:
### Bat file
Run ```./build.bat```, dit build het volledige project.
### Manueel

Build de projecten in onderstaande volgorde:

Typescript compiler
```
cd typescript-compiler
npm install
npm run antlr
npm run build
```

Typescript loader
```
cd ../typescript-loader
npm install
npm run build
```

XanDOM
```
cd ../XanDOM
npm install
npm run build
```

WebApp (21-en spel)
```
cd ../web-app
npm install
npm start
```

## Testing

```
cd ../typescript-compiler
npm run test
```

# Voorbeeld 
## Input
```
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
    toerke(elast i = 30; i >= 0; i--;){
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
```

## Output
```
import XanDOM from 'XanDOM';
const xandom = new XanDOM();
const root = document.getElementById('root');
let myNumber = 0;
let total = 0;
const counter = xandom.createElement("div", {id: "counter", class: "counter"}, xandom.createElement("p", {}, "0", ));
const timer = xandom.createElement("div", {id: "timer", class: "timer"}, xandom.createElement("p", {}, "Timer", ), xandom.createElement("p", {id: "timerValue"}, "30", ));
async function init(gameName) {
const gameNameElement = xandom.createElement("p", {id: "gameName"}, gameName, );
const button = xandom.createElement("div", {}, xandom.createElement("p", {}, "Klik", "hier", "om", "een", "kaart", "te", "trekken", ), xandom.createElement("button", {id: "button", class: "button", onClick: clickButton}, "Click", "me", ));
xandom.render(gameNameElement, root);
xandom.render(timer, root);
xandom.render(counter, root);
xandom.render(button, root);
for(let i = 30; i >= 0; i--) {
console.log(i);
xandom.setInnerText('timerValue', i);

            await new Promise(resolve => setTimeout(resolve, 1000));
}
}
function clickButton() {
if(total < 21) {
let math = Math.random();
let random = math * 10;
let theRandom = random + 1;
myNumber = Math.floor(theRandom);
total = total + myNumber;
const card = xandom.createElement("p", {}, myNumber, );
xandom.render(card, root);
checkBroken()
}
}
function checkBroken() {
xandom.setInnerText('counter', total);
if(total > 21) {
const card = xandom.createElement("p", {}, xandom.createElement("p", {}, "Helaas", ), xandom.createElement("b", {}, xandom.createElement("p", {}, "Je", "hebt", "verloren", "met", "een", "totaal", "van", ), xandom.createElement("p", {}, total, )));
xandom.render(card, root);
}
if(total === 21) {
const card = xandom.createElement("p", {}, xandom.createElement("p", {}, "Gefeliciteerd", ), xandom.createElement("b", {}, xandom.createElement("p", {}, "Je", "hebt", "gewonnen", "met", "een", "totaal", "van", ), xandom.createElement("p", {}, total, )));
xandom.render(card, root);
}
}
init("eenentwintigen")
```
