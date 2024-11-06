import { parseSourceCode } from '../src/ts/compiler'
import GeneratorJS from '../src/ts/GeneratorJS'
const generatorJS = new GeneratorJS();

test('HTML generating with onClick and class and id', (): void => {
    const code = `
    gebruikt XanDOM uit "xandom";
    vast xandom = new XanDOM();
    vast button = <button id="button" class="button" onClick="clickButton()">Click me</button>;
    xandom.render(button, document.getElementById('root'));
    `
    const object = parseSourceCode(code)
    const js = generatorJS.generate(object);
    expect(js).toBe(`import XanDOM from 'XanDOM';\nconst xandom = new XanDOM();\nconst button = xandom.createElement("button", {id: "button", class: "button", onClick: clickButton}, "Click", "me", );\nxandom.render(button, document.getElementById('root'));`);
})

test('Test VarDeclaration Object Code', () => {
    const code = `
    elast x: getal = 1;`
    const expectedOutput =
        { name: 'x', type: 'getal', value: '1', varType: 'elast' }
    const object = parseSourceCode(code);
    expect(object.statements[0].value).toEqual(expectedOutput);
})

test('Math Testing', (): void => {
    const code = `
    elast x: getal = 1;
    x = x + 5;
    console.log(x);`
    const object = parseSourceCode(code)
    const js = generatorJS.generate(object);
    expect(js).toBe('let x = 1;\nx = x + 5;\nconsole.log(x);');
})

test('Test if & function statement', (): void => {
    const code = `
    functie checkBroken(){
        als(total > 21){
            console.log("Helaas")
        }
    };`
    const object = parseSourceCode(code)
    const js = generatorJS.generate(object);
})

test('Test For Loop Object Code', () => {
    const code = `
    toerke(elast i = 30; i >= 0 i--){
        console.log(i)
    }`
    const expectedOutput = {
        varDeclaration: { name: 'i', type: '', value: '30', varType: 'elast' },
        condition: { operator: '>=', firstValue: 'i', lastValue: '0' },
        iterator: { variable: 'i', operator: '--' },
        loopBody: {
            statements: [
                {
                    value: {
                        id: 'console',
                        functionCalls: [
                            {
                                call: true,
                                function: 'log',
                                args: [
                                    {
                                        value: 'i',
                                    },
                                ],
                            },
                        ],

                    },
                },
            ],
        },
    };
    const myObject = parseSourceCode(code);
    expect(myObject.statements[0].value).toEqual(expectedOutput);
})

test('Test Fout in type van varDeclaratie', () => {
    try {
        const code = `
    let x: aap = 1;`
        parseSourceCode(code);
    } catch (e) {
        expect(e.message).toEqual("line 2:11 mismatched input 'aap' expecting {'getal', 'tekst', 'boolean', 'void'}");
    }

})

test('Test Fout math statement', () => {
    try {
        const code = `
    elast x: getal = 5;
    elast y: getal = 10;
    x = x ^ aap;`
        parseSourceCode(code);
    } catch (e) {
        expect(e.message).toEqual("The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.");
    }
})

test('Test Fout met text input', () => {
    try {
        const code = `
        elast ___: getal = 5;`
        parseSourceCode(code);
    } catch (e) {
        expect(e.message).toEqual("line 2:9 mismatched input '___' expecting ID");
    }
})
