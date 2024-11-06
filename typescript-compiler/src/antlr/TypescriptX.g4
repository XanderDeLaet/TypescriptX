grammar TypescriptX;

/* General */
ID: [a-zA-Z]+;
NUMERIC: [0-9]+;
IDNUMERIC: [a-zA-Z0-9]+;

WS  : [ \r\n\t]+ -> skip;

fileDeclaration: statement*;

input:
        ID
    |   NUMERIC
    |   IDNUMERIC;

stringLiteral: ('"' input '"') | ('\'' input '\'');

importStatement:
    'gebruikt' input 'uit' stringLiteral ';';

/* HTML */

htmlBlock:
    '<' input attribute* '>' (input | htmlBlock)* '</' input '>';

attribute:
        input '=' '"' (functionCall | input) '"';


/* Variables */

varDeclaration:
    varType? ID typeAnnotation? initialiser? ';';

varType:
        'globaal'
    |   'elast'
    |   'vast';

type:
        'getal'
    |   'tekst'
    |   'boolean'
    |   'void';

typeAnnotation: 
        ':' type;

initialiser:
        '=' (input | stringLiteral | htmlBlock | functionCallStatement | classInitialiser | mathExpression);

classInitialiser:
        'new' (functionCall | functionCallStatement);

arrayType:
    type '[]';

objectType:
    '{' (ID ':' type (',' ID ':' type)*)? '}';


/* Math */
mathExpression:
        input mathOperator (input | stringLiteral);

mathOperator:
        '+'
    |   '-'
    |   '*'
    |   '/'
    |   '%';

quickMath:
    input quickMathOperator;

quickMathOperator:
        '++'
    |   '--';

statement:
        varDeclaration
    |   block
    |   functionCallStatement
    |   importStatement
    |   ifStatement
    |   functionDeclaration
    |   functionCall
    |   loopStatement
    |   asyncCall;


block:
        '{' statement* '}';

/* Functions */
functionDeclaration:
    'async'? 'functie' ID '(' parameters? ')' typeAnnotation? block;

parameters:
    varDeclaration (',' varDeclaration)*;

accessModifier:
    'public' | 'private' | 'protected';

/* Function Call */
functionCallStatement:
    ID functionCall*;

functionCall:
    '.'? input '(' arguments? ')';

arguments:
    argument (',' argument)*;

argument:
    functionCall | functionCallStatement | input | stringLiteral;

/* Conditions */
ifStatement:
    'als(' condition ')' block;

condition:
    (input | functionCallStatement) (conditionalOperator input)?;    

conditionalOperator:
        '==='
    |   '=='
    |   '>='
    |   '<='
    |   '<'
    |   '>';

/* Loop */
loopStatement:
    'toerke(' varDeclaration condition quickMath ')' block;

/* async */
asyncCall:
    'await' functionCall;