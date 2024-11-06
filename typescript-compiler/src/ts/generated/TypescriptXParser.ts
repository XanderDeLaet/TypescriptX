// Generated from ./TypescriptX.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TypescriptXListener from "./TypescriptXListener.js";
import TypescriptXVisitor from "./TypescriptXVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TypescriptXParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly ID = 45;
	public static readonly NUMERIC = 46;
	public static readonly IDNUMERIC = 47;
	public static readonly WS = 48;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_fileDeclaration = 0;
	public static readonly RULE_input = 1;
	public static readonly RULE_stringLiteral = 2;
	public static readonly RULE_importStatement = 3;
	public static readonly RULE_htmlBlock = 4;
	public static readonly RULE_attribute = 5;
	public static readonly RULE_varDeclaration = 6;
	public static readonly RULE_varType = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_typeAnnotation = 9;
	public static readonly RULE_initialiser = 10;
	public static readonly RULE_classInitialiser = 11;
	public static readonly RULE_arrayType = 12;
	public static readonly RULE_objectType = 13;
	public static readonly RULE_mathExpression = 14;
	public static readonly RULE_mathOperator = 15;
	public static readonly RULE_quickMath = 16;
	public static readonly RULE_quickMathOperator = 17;
	public static readonly RULE_statement = 18;
	public static readonly RULE_block = 19;
	public static readonly RULE_functionDeclaration = 20;
	public static readonly RULE_parameters = 21;
	public static readonly RULE_accessModifier = 22;
	public static readonly RULE_functionCallStatement = 23;
	public static readonly RULE_functionCall = 24;
	public static readonly RULE_arguments = 25;
	public static readonly RULE_argument = 26;
	public static readonly RULE_ifStatement = 27;
	public static readonly RULE_condition = 28;
	public static readonly RULE_conditionalOperator = 29;
	public static readonly RULE_loopStatement = 30;
	public static readonly RULE_asyncCall = 31;
	public static readonly literalNames: (string | null)[] = [ null, "'\"'", 
                                                            "'''", "'gebruikt'", 
                                                            "'uit'", "';'", 
                                                            "'<'", "'>'", 
                                                            "'</'", "'='", 
                                                            "'globaal'", 
                                                            "'elast'", "'vast'", 
                                                            "'getal'", "'tekst'", 
                                                            "'boolean'", 
                                                            "'void'", "':'", 
                                                            "'new'", "'[]'", 
                                                            "'{'", "','", 
                                                            "'}'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'++'", "'--'", 
                                                            "'async'", "'functie'", 
                                                            "'('", "')'", 
                                                            "'public'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'.'", "'als('", 
                                                            "'==='", "'=='", 
                                                            "'>='", "'<='", 
                                                            "'toerke('", 
                                                            "'await'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "NUMERIC", 
                                                             "IDNUMERIC", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"fileDeclaration", "input", "stringLiteral", "importStatement", "htmlBlock", 
		"attribute", "varDeclaration", "varType", "type", "typeAnnotation", "initialiser", 
		"classInitialiser", "arrayType", "objectType", "mathExpression", "mathOperator", 
		"quickMath", "quickMathOperator", "statement", "block", "functionDeclaration", 
		"parameters", "accessModifier", "functionCallStatement", "functionCall", 
		"arguments", "argument", "ifStatement", "condition", "conditionalOperator", 
		"loopStatement", "asyncCall",
	];
	public get grammarFileName(): string { return "TypescriptX.g4"; }
	public get literalNames(): (string | null)[] { return TypescriptXParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TypescriptXParser.symbolicNames; }
	public get ruleNames(): string[] { return TypescriptXParser.ruleNames; }
	public get serializedATN(): number[] { return TypescriptXParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TypescriptXParser._ATN, TypescriptXParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public fileDeclaration(): FileDeclarationContext {
		let localctx: FileDeclarationContext = new FileDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TypescriptXParser.RULE_fileDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222281224) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1987) !== 0)) {
				{
				{
				this.state = 64;
				this.statement();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let localctx: InputContext = new InputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TypescriptXParser.RULE_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TypescriptXParser.RULE_stringLiteral);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 72;
				this.match(TypescriptXParser.T__0);
				this.state = 73;
				this.input();
				this.state = 74;
				this.match(TypescriptXParser.T__0);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 76;
				this.match(TypescriptXParser.T__1);
				this.state = 77;
				this.input();
				this.state = 78;
				this.match(TypescriptXParser.T__1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TypescriptXParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.match(TypescriptXParser.T__2);
			this.state = 83;
			this.input();
			this.state = 84;
			this.match(TypescriptXParser.T__3);
			this.state = 85;
			this.stringLiteral();
			this.state = 86;
			this.match(TypescriptXParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlBlock(): HtmlBlockContext {
		let localctx: HtmlBlockContext = new HtmlBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TypescriptXParser.RULE_htmlBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(TypescriptXParser.T__5);
			this.state = 89;
			this.input();
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0)) {
				{
				{
				this.state = 90;
				this.attribute();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
			this.match(TypescriptXParser.T__6);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0)) {
				{
				this.state = 99;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 45:
				case 46:
				case 47:
					{
					this.state = 97;
					this.input();
					}
					break;
				case 6:
					{
					this.state = 98;
					this.htmlBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(TypescriptXParser.T__7);
			this.state = 105;
			this.input();
			this.state = 106;
			this.match(TypescriptXParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TypescriptXParser.RULE_attribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.input();
			this.state = 109;
			this.match(TypescriptXParser.T__8);
			this.state = 110;
			this.match(TypescriptXParser.T__0);
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 112;
				this.input();
				}
				break;
			}
			this.state = 115;
			this.match(TypescriptXParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TypescriptXParser.RULE_varDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0)) {
				{
				this.state = 117;
				this.varType();
				}
			}

			this.state = 120;
			this.match(TypescriptXParser.ID);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 121;
				this.typeAnnotation();
				}
			}

			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 124;
				this.initialiser();
				}
			}

			this.state = 127;
			this.match(TypescriptXParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varType(): VarTypeContext {
		let localctx: VarTypeContext = new VarTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TypescriptXParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TypescriptXParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 122880) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let localctx: TypeAnnotationContext = new TypeAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TypescriptXParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(TypescriptXParser.T__16);
			this.state = 134;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initialiser(): InitialiserContext {
		let localctx: InitialiserContext = new InitialiserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TypescriptXParser.RULE_initialiser);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(TypescriptXParser.T__8);
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 137;
				this.input();
				}
				break;
			case 2:
				{
				this.state = 138;
				this.stringLiteral();
				}
				break;
			case 3:
				{
				this.state = 139;
				this.htmlBlock();
				}
				break;
			case 4:
				{
				this.state = 140;
				this.functionCallStatement();
				}
				break;
			case 5:
				{
				this.state = 141;
				this.classInitialiser();
				}
				break;
			case 6:
				{
				this.state = 142;
				this.mathExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classInitialiser(): ClassInitialiserContext {
		let localctx: ClassInitialiserContext = new ClassInitialiserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TypescriptXParser.RULE_classInitialiser);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.match(TypescriptXParser.T__17);
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 147;
				this.functionCallStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TypescriptXParser.RULE_arrayType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.type_();
			this.state = 151;
			this.match(TypescriptXParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let localctx: ObjectTypeContext = new ObjectTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, TypescriptXParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this.match(TypescriptXParser.T__19);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 154;
				this.match(TypescriptXParser.ID);
				this.state = 155;
				this.match(TypescriptXParser.T__16);
				this.state = 156;
				this.type_();
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===21) {
					{
					{
					this.state = 157;
					this.match(TypescriptXParser.T__20);
					this.state = 158;
					this.match(TypescriptXParser.ID);
					this.state = 159;
					this.match(TypescriptXParser.T__16);
					this.state = 160;
					this.type_();
					}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 168;
			this.match(TypescriptXParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mathExpression(): MathExpressionContext {
		let localctx: MathExpressionContext = new MathExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, TypescriptXParser.RULE_mathExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.input();
			this.state = 171;
			this.mathOperator();
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 45:
			case 46:
			case 47:
				{
				this.state = 172;
				this.input();
				}
				break;
			case 1:
			case 2:
				{
				this.state = 173;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mathOperator(): MathOperatorContext {
		let localctx: MathOperatorContext = new MathOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, TypescriptXParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 260046848) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quickMath(): QuickMathContext {
		let localctx: QuickMathContext = new QuickMathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, TypescriptXParser.RULE_quickMath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 178;
			this.input();
			this.state = 179;
			this.quickMathOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quickMathOperator(): QuickMathOperatorContext {
		let localctx: QuickMathOperatorContext = new QuickMathOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, TypescriptXParser.RULE_quickMathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 181;
			_la = this._input.LA(1);
			if(!(_la===28 || _la===29)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, TypescriptXParser.RULE_statement);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 183;
				this.varDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 184;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 185;
				this.functionCallStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 186;
				this.importStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 187;
				this.ifStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 188;
				this.functionDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 189;
				this.functionCall();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 190;
				this.loopStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 191;
				this.asyncCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, TypescriptXParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(TypescriptXParser.T__19);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222281224) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1987) !== 0)) {
				{
				{
				this.state = 195;
				this.statement();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.match(TypescriptXParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, TypescriptXParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 203;
				this.match(TypescriptXParser.T__29);
				}
			}

			this.state = 206;
			this.match(TypescriptXParser.T__30);
			this.state = 207;
			this.match(TypescriptXParser.ID);
			this.state = 208;
			this.match(TypescriptXParser.T__31);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0) || _la===45) {
				{
				this.state = 209;
				this.parameters();
				}
			}

			this.state = 212;
			this.match(TypescriptXParser.T__32);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 213;
				this.typeAnnotation();
				}
			}

			this.state = 216;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, TypescriptXParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.varDeclaration();
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 219;
				this.match(TypescriptXParser.T__20);
				this.state = 220;
				this.varDeclaration();
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public accessModifier(): AccessModifierContext {
		let localctx: AccessModifierContext = new AccessModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, TypescriptXParser.RULE_accessModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			_la = this._input.LA(1);
			if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCallStatement(): FunctionCallStatementContext {
		let localctx: FunctionCallStatementContext = new FunctionCallStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, TypescriptXParser.RULE_functionCallStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(TypescriptXParser.ID);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 229;
					this.functionCall();
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, TypescriptXParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 235;
				this.match(TypescriptXParser.T__36);
				}
			}

			this.state = 238;
			this.input();
			this.state = 239;
			this.match(TypescriptXParser.T__31);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===2 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1793) !== 0)) {
				{
				this.state = 240;
				this.arguments();
				}
			}

			this.state = 243;
			this.match(TypescriptXParser.T__32);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, TypescriptXParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			this.argument();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 246;
				this.match(TypescriptXParser.T__20);
				this.state = 247;
				this.argument();
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, TypescriptXParser.RULE_argument);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this.functionCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 254;
				this.functionCallStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 255;
				this.input();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 256;
				this.stringLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, TypescriptXParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.match(TypescriptXParser.T__37);
			this.state = 260;
			this.condition();
			this.state = 261;
			this.match(TypescriptXParser.T__32);
			this.state = 262;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, TypescriptXParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 264;
				this.input();
				}
				break;
			case 2:
				{
				this.state = 265;
				this.functionCallStatement();
				}
				break;
			}
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6 || _la===7 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 15) !== 0)) {
				{
				this.state = 268;
				this.conditionalOperator();
				this.state = 269;
				this.input();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalOperator(): ConditionalOperatorContext {
		let localctx: ConditionalOperatorContext = new ConditionalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, TypescriptXParser.RULE_conditionalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===7 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let localctx: LoopStatementContext = new LoopStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, TypescriptXParser.RULE_loopStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(TypescriptXParser.T__42);
			this.state = 276;
			this.varDeclaration();
			this.state = 277;
			this.condition();
			this.state = 278;
			this.quickMath();
			this.state = 279;
			this.match(TypescriptXParser.T__32);
			this.state = 280;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asyncCall(): AsyncCallContext {
		let localctx: AsyncCallContext = new AsyncCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, TypescriptXParser.RULE_asyncCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 282;
			this.match(TypescriptXParser.T__43);
			this.state = 283;
			this.functionCall();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,48,286,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	1,0,5,0,66,8,0,10,0,12,0,69,9,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	3,2,81,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,92,8,4,10,4,12,4,95,
	9,4,1,4,1,4,1,4,5,4,100,8,4,10,4,12,4,103,9,4,1,4,1,4,1,4,1,4,1,5,1,5,1,
	5,1,5,1,5,3,5,114,8,5,1,5,1,5,1,6,3,6,119,8,6,1,6,1,6,3,6,123,8,6,1,6,3,
	6,126,8,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,3,10,144,8,10,1,11,1,11,1,11,3,11,149,8,11,1,12,1,12,1,12,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,162,8,13,10,13,12,13,165,9,13,3,
	13,167,8,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,175,8,14,1,15,1,15,1,16,
	1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,193,
	8,18,1,19,1,19,5,19,197,8,19,10,19,12,19,200,9,19,1,19,1,19,1,20,3,20,205,
	8,20,1,20,1,20,1,20,1,20,3,20,211,8,20,1,20,1,20,3,20,215,8,20,1,20,1,20,
	1,21,1,21,1,21,5,21,222,8,21,10,21,12,21,225,9,21,1,22,1,22,1,23,1,23,5,
	23,231,8,23,10,23,12,23,234,9,23,1,24,3,24,237,8,24,1,24,1,24,1,24,3,24,
	242,8,24,1,24,1,24,1,25,1,25,1,25,5,25,249,8,25,10,25,12,25,252,9,25,1,
	26,1,26,1,26,1,26,3,26,258,8,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,3,28,
	267,8,28,1,28,1,28,1,28,3,28,272,8,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
	1,30,1,30,1,31,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,7,1,0,45,47,
	1,0,10,12,1,0,13,16,1,0,23,27,1,0,28,29,1,0,34,36,2,0,6,7,39,42,293,0,67,
	1,0,0,0,2,70,1,0,0,0,4,80,1,0,0,0,6,82,1,0,0,0,8,88,1,0,0,0,10,108,1,0,
	0,0,12,118,1,0,0,0,14,129,1,0,0,0,16,131,1,0,0,0,18,133,1,0,0,0,20,136,
	1,0,0,0,22,145,1,0,0,0,24,150,1,0,0,0,26,153,1,0,0,0,28,170,1,0,0,0,30,
	176,1,0,0,0,32,178,1,0,0,0,34,181,1,0,0,0,36,192,1,0,0,0,38,194,1,0,0,0,
	40,204,1,0,0,0,42,218,1,0,0,0,44,226,1,0,0,0,46,228,1,0,0,0,48,236,1,0,
	0,0,50,245,1,0,0,0,52,257,1,0,0,0,54,259,1,0,0,0,56,266,1,0,0,0,58,273,
	1,0,0,0,60,275,1,0,0,0,62,282,1,0,0,0,64,66,3,36,18,0,65,64,1,0,0,0,66,
	69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,1,1,0,0,0,69,67,1,0,0,0,70,71,
	7,0,0,0,71,3,1,0,0,0,72,73,5,1,0,0,73,74,3,2,1,0,74,75,5,1,0,0,75,81,1,
	0,0,0,76,77,5,2,0,0,77,78,3,2,1,0,78,79,5,2,0,0,79,81,1,0,0,0,80,72,1,0,
	0,0,80,76,1,0,0,0,81,5,1,0,0,0,82,83,5,3,0,0,83,84,3,2,1,0,84,85,5,4,0,
	0,85,86,3,4,2,0,86,87,5,5,0,0,87,7,1,0,0,0,88,89,5,6,0,0,89,93,3,2,1,0,
	90,92,3,10,5,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,
	94,96,1,0,0,0,95,93,1,0,0,0,96,101,5,7,0,0,97,100,3,2,1,0,98,100,3,8,4,
	0,99,97,1,0,0,0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,
	0,0,0,102,104,1,0,0,0,103,101,1,0,0,0,104,105,5,8,0,0,105,106,3,2,1,0,106,
	107,5,7,0,0,107,9,1,0,0,0,108,109,3,2,1,0,109,110,5,9,0,0,110,113,5,1,0,
	0,111,114,3,48,24,0,112,114,3,2,1,0,113,111,1,0,0,0,113,112,1,0,0,0,114,
	115,1,0,0,0,115,116,5,1,0,0,116,11,1,0,0,0,117,119,3,14,7,0,118,117,1,0,
	0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,122,5,45,0,0,121,123,3,18,9,0,122,
	121,1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,126,3,20,10,0,125,124,1,
	0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,5,0,0,128,13,1,0,0,0,129,
	130,7,1,0,0,130,15,1,0,0,0,131,132,7,2,0,0,132,17,1,0,0,0,133,134,5,17,
	0,0,134,135,3,16,8,0,135,19,1,0,0,0,136,143,5,9,0,0,137,144,3,2,1,0,138,
	144,3,4,2,0,139,144,3,8,4,0,140,144,3,46,23,0,141,144,3,22,11,0,142,144,
	3,28,14,0,143,137,1,0,0,0,143,138,1,0,0,0,143,139,1,0,0,0,143,140,1,0,0,
	0,143,141,1,0,0,0,143,142,1,0,0,0,144,21,1,0,0,0,145,148,5,18,0,0,146,149,
	3,48,24,0,147,149,3,46,23,0,148,146,1,0,0,0,148,147,1,0,0,0,149,23,1,0,
	0,0,150,151,3,16,8,0,151,152,5,19,0,0,152,25,1,0,0,0,153,166,5,20,0,0,154,
	155,5,45,0,0,155,156,5,17,0,0,156,163,3,16,8,0,157,158,5,21,0,0,158,159,
	5,45,0,0,159,160,5,17,0,0,160,162,3,16,8,0,161,157,1,0,0,0,162,165,1,0,
	0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,166,
	154,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,168,169,5,22,0,0,169,27,1,0,
	0,0,170,171,3,2,1,0,171,174,3,30,15,0,172,175,3,2,1,0,173,175,3,4,2,0,174,
	172,1,0,0,0,174,173,1,0,0,0,175,29,1,0,0,0,176,177,7,3,0,0,177,31,1,0,0,
	0,178,179,3,2,1,0,179,180,3,34,17,0,180,33,1,0,0,0,181,182,7,4,0,0,182,
	35,1,0,0,0,183,193,3,12,6,0,184,193,3,38,19,0,185,193,3,46,23,0,186,193,
	3,6,3,0,187,193,3,54,27,0,188,193,3,40,20,0,189,193,3,48,24,0,190,193,3,
	60,30,0,191,193,3,62,31,0,192,183,1,0,0,0,192,184,1,0,0,0,192,185,1,0,0,
	0,192,186,1,0,0,0,192,187,1,0,0,0,192,188,1,0,0,0,192,189,1,0,0,0,192,190,
	1,0,0,0,192,191,1,0,0,0,193,37,1,0,0,0,194,198,5,20,0,0,195,197,3,36,18,
	0,196,195,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,
	1,0,0,0,200,198,1,0,0,0,201,202,5,22,0,0,202,39,1,0,0,0,203,205,5,30,0,
	0,204,203,1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,207,5,31,0,0,207,
	208,5,45,0,0,208,210,5,32,0,0,209,211,3,42,21,0,210,209,1,0,0,0,210,211,
	1,0,0,0,211,212,1,0,0,0,212,214,5,33,0,0,213,215,3,18,9,0,214,213,1,0,0,
	0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,3,38,19,0,217,41,1,0,0,0,218,
	223,3,12,6,0,219,220,5,21,0,0,220,222,3,12,6,0,221,219,1,0,0,0,222,225,
	1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,43,1,0,0,0,225,223,1,0,0,0,
	226,227,7,5,0,0,227,45,1,0,0,0,228,232,5,45,0,0,229,231,3,48,24,0,230,229,
	1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,47,1,0,0,0,
	234,232,1,0,0,0,235,237,5,37,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,
	1,0,0,0,238,239,3,2,1,0,239,241,5,32,0,0,240,242,3,50,25,0,241,240,1,0,
	0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,244,5,33,0,0,244,49,1,0,0,0,245,
	250,3,52,26,0,246,247,5,21,0,0,247,249,3,52,26,0,248,246,1,0,0,0,249,252,
	1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,51,1,0,0,0,252,250,1,0,0,0,
	253,258,3,48,24,0,254,258,3,46,23,0,255,258,3,2,1,0,256,258,3,4,2,0,257,
	253,1,0,0,0,257,254,1,0,0,0,257,255,1,0,0,0,257,256,1,0,0,0,258,53,1,0,
	0,0,259,260,5,38,0,0,260,261,3,56,28,0,261,262,5,33,0,0,262,263,3,38,19,
	0,263,55,1,0,0,0,264,267,3,2,1,0,265,267,3,46,23,0,266,264,1,0,0,0,266,
	265,1,0,0,0,267,271,1,0,0,0,268,269,3,58,29,0,269,270,3,2,1,0,270,272,1,
	0,0,0,271,268,1,0,0,0,271,272,1,0,0,0,272,57,1,0,0,0,273,274,7,6,0,0,274,
	59,1,0,0,0,275,276,5,43,0,0,276,277,3,12,6,0,277,278,3,56,28,0,278,279,
	3,32,16,0,279,280,5,33,0,0,280,281,3,38,19,0,281,61,1,0,0,0,282,283,5,44,
	0,0,283,284,3,48,24,0,284,63,1,0,0,0,27,67,80,93,99,101,113,118,122,125,
	143,148,163,166,174,192,198,204,210,214,223,232,236,241,250,257,266,271];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TypescriptXParser.__ATN) {
			TypescriptXParser.__ATN = new ATNDeserializer().deserialize(TypescriptXParser._serializedATN);
		}

		return TypescriptXParser.__ATN;
	}


	static DecisionsToDFA = TypescriptXParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_fileDeclaration;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterFileDeclaration) {
	 		listener.enterFileDeclaration(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitFileDeclaration) {
	 		listener.exitFileDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitFileDeclaration) {
			return visitor.visitFileDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TypescriptXParser.ID, 0);
	}
	public NUMERIC(): TerminalNode {
		return this.getToken(TypescriptXParser.NUMERIC, 0);
	}
	public IDNUMERIC(): TerminalNode {
		return this.getToken(TypescriptXParser.IDNUMERIC, 0);
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_input;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterInput) {
	 		listener.enterInput(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitInput) {
	 		listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_stringLiteral;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_importStatement;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlBlockContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
	public htmlBlock_list(): HtmlBlockContext[] {
		return this.getTypedRuleContexts(HtmlBlockContext) as HtmlBlockContext[];
	}
	public htmlBlock(i: number): HtmlBlockContext {
		return this.getTypedRuleContext(HtmlBlockContext, i) as HtmlBlockContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_htmlBlock;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterHtmlBlock) {
	 		listener.enterHtmlBlock(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitHtmlBlock) {
	 		listener.exitHtmlBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitHtmlBlock) {
			return visitor.visitHtmlBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_attribute;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterAttribute) {
	 		listener.enterAttribute(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitAttribute) {
	 		listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TypescriptXParser.ID, 0);
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public initialiser(): InitialiserContext {
		return this.getTypedRuleContext(InitialiserContext, 0) as InitialiserContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_varDeclaration;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterVarDeclaration) {
	 		listener.enterVarDeclaration(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitVarDeclaration) {
	 		listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_varType;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterVarType) {
	 		listener.enterVarType(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitVarType) {
	 		listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_type;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_typeAnnotation;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterTypeAnnotation) {
	 		listener.enterTypeAnnotation(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitTypeAnnotation) {
	 		listener.exitTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) {
			return visitor.visitTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitialiserContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public htmlBlock(): HtmlBlockContext {
		return this.getTypedRuleContext(HtmlBlockContext, 0) as HtmlBlockContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
	public classInitialiser(): ClassInitialiserContext {
		return this.getTypedRuleContext(ClassInitialiserContext, 0) as ClassInitialiserContext;
	}
	public mathExpression(): MathExpressionContext {
		return this.getTypedRuleContext(MathExpressionContext, 0) as MathExpressionContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_initialiser;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterInitialiser) {
	 		listener.enterInitialiser(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitInitialiser) {
	 		listener.exitInitialiser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitInitialiser) {
			return visitor.visitInitialiser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInitialiserContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_classInitialiser;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterClassInitialiser) {
	 		listener.enterClassInitialiser(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitClassInitialiser) {
	 		listener.exitClassInitialiser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitClassInitialiser) {
			return visitor.visitClassInitialiser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_arrayType;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TypescriptXParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TypescriptXParser.ID, i);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_objectType;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterObjectType) {
	 		listener.enterObjectType(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitObjectType) {
	 		listener.exitObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitObjectType) {
			return visitor.visitObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathExpressionContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public mathOperator(): MathOperatorContext {
		return this.getTypedRuleContext(MathOperatorContext, 0) as MathOperatorContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_mathExpression;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterMathExpression) {
	 		listener.enterMathExpression(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitMathExpression) {
	 		listener.exitMathExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitMathExpression) {
			return visitor.visitMathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathOperatorContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_mathOperator;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterMathOperator) {
	 		listener.enterMathOperator(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitMathOperator) {
	 		listener.exitMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitMathOperator) {
			return visitor.visitMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuickMathContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public quickMathOperator(): QuickMathOperatorContext {
		return this.getTypedRuleContext(QuickMathOperatorContext, 0) as QuickMathOperatorContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_quickMath;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterQuickMath) {
	 		listener.enterQuickMath(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitQuickMath) {
	 		listener.exitQuickMath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitQuickMath) {
			return visitor.visitQuickMath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuickMathOperatorContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_quickMathOperator;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterQuickMathOperator) {
	 		listener.enterQuickMathOperator(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitQuickMathOperator) {
	 		listener.exitQuickMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitQuickMathOperator) {
			return visitor.visitQuickMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
	public importStatement(): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public loopStatement(): LoopStatementContext {
		return this.getTypedRuleContext(LoopStatementContext, 0) as LoopStatementContext;
	}
	public asyncCall(): AsyncCallContext {
		return this.getTypedRuleContext(AsyncCallContext, 0) as AsyncCallContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_statement;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_block;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TypescriptXParser.ID, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_functionDeclaration;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration_list(): VarDeclarationContext[] {
		return this.getTypedRuleContexts(VarDeclarationContext) as VarDeclarationContext[];
	}
	public varDeclaration(i: number): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, i) as VarDeclarationContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_parameters;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessModifierContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_accessModifier;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterAccessModifier) {
	 		listener.enterAccessModifier(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitAccessModifier) {
	 		listener.exitAccessModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitAccessModifier) {
			return visitor.visitAccessModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallStatementContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TypescriptXParser.ID, 0);
	}
	public functionCall_list(): FunctionCallContext[] {
		return this.getTypedRuleContexts(FunctionCallContext) as FunctionCallContext[];
	}
	public functionCall(i: number): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, i) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_functionCallStatement;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterFunctionCallStatement) {
	 		listener.enterFunctionCallStatement(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitFunctionCallStatement) {
	 		listener.exitFunctionCallStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitFunctionCallStatement) {
			return visitor.visitFunctionCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_functionCall;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_arguments;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_argument;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterArgument) {
	 		listener.enterArgument(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitArgument) {
	 		listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_ifStatement;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_list(): InputContext[] {
		return this.getTypedRuleContexts(InputContext) as InputContext[];
	}
	public input(i: number): InputContext {
		return this.getTypedRuleContext(InputContext, i) as InputContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
	public conditionalOperator(): ConditionalOperatorContext {
		return this.getTypedRuleContext(ConditionalOperatorContext, 0) as ConditionalOperatorContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_condition;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterCondition) {
	 		listener.enterCondition(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitCondition) {
	 		listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOperatorContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_conditionalOperator;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterConditionalOperator) {
	 		listener.enterConditionalOperator(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitConditionalOperator) {
	 		listener.exitConditionalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitConditionalOperator) {
			return visitor.visitConditionalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public quickMath(): QuickMathContext {
		return this.getTypedRuleContext(QuickMathContext, 0) as QuickMathContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_loopStatement;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterLoopStatement) {
	 		listener.enterLoopStatement(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitLoopStatement) {
	 		listener.exitLoopStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitLoopStatement) {
			return visitor.visitLoopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsyncCallContext extends ParserRuleContext {
	constructor(parser?: TypescriptXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return TypescriptXParser.RULE_asyncCall;
	}
	public enterRule(listener: TypescriptXListener): void {
	    if(listener.enterAsyncCall) {
	 		listener.enterAsyncCall(this);
		}
	}
	public exitRule(listener: TypescriptXListener): void {
	    if(listener.exitAsyncCall) {
	 		listener.exitAsyncCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TypescriptXVisitor<Result>): Result {
		if (visitor.visitAsyncCall) {
			return visitor.visitAsyncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
