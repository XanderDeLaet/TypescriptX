// Generated from ./TypescriptX.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { FileDeclarationContext } from "./TypescriptXParser";
import { InputContext } from "./TypescriptXParser";
import { StringLiteralContext } from "./TypescriptXParser";
import { ImportStatementContext } from "./TypescriptXParser";
import { HtmlBlockContext } from "./TypescriptXParser";
import { AttributeContext } from "./TypescriptXParser";
import { VarDeclarationContext } from "./TypescriptXParser";
import { VarTypeContext } from "./TypescriptXParser";
import { TypeContext } from "./TypescriptXParser";
import { TypeAnnotationContext } from "./TypescriptXParser";
import { InitialiserContext } from "./TypescriptXParser";
import { ClassInitialiserContext } from "./TypescriptXParser";
import { ArrayTypeContext } from "./TypescriptXParser";
import { ObjectTypeContext } from "./TypescriptXParser";
import { MathExpressionContext } from "./TypescriptXParser";
import { MathOperatorContext } from "./TypescriptXParser";
import { QuickMathContext } from "./TypescriptXParser";
import { QuickMathOperatorContext } from "./TypescriptXParser";
import { StatementContext } from "./TypescriptXParser";
import { BlockContext } from "./TypescriptXParser";
import { FunctionDeclarationContext } from "./TypescriptXParser";
import { ParametersContext } from "./TypescriptXParser";
import { AccessModifierContext } from "./TypescriptXParser";
import { FunctionCallStatementContext } from "./TypescriptXParser";
import { FunctionCallContext } from "./TypescriptXParser";
import { ArgumentsContext } from "./TypescriptXParser";
import { ArgumentContext } from "./TypescriptXParser";
import { IfStatementContext } from "./TypescriptXParser";
import { ConditionContext } from "./TypescriptXParser";
import { ConditionalOperatorContext } from "./TypescriptXParser";
import { LoopStatementContext } from "./TypescriptXParser";
import { AsyncCallContext } from "./TypescriptXParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TypescriptXParser`.
 */
export default class TypescriptXListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TypescriptXParser.fileDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFileDeclaration?: (ctx: FileDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.fileDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFileDeclaration?: (ctx: FileDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.htmlBlock`.
	 * @param ctx the parse tree
	 */
	enterHtmlBlock?: (ctx: HtmlBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.htmlBlock`.
	 * @param ctx the parse tree
	 */
	exitHtmlBlock?: (ctx: HtmlBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.initialiser`.
	 * @param ctx the parse tree
	 */
	enterInitialiser?: (ctx: InitialiserContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.initialiser`.
	 * @param ctx the parse tree
	 */
	exitInitialiser?: (ctx: InitialiserContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.classInitialiser`.
	 * @param ctx the parse tree
	 */
	enterClassInitialiser?: (ctx: ClassInitialiserContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.classInitialiser`.
	 * @param ctx the parse tree
	 */
	exitClassInitialiser?: (ctx: ClassInitialiserContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.mathExpression`.
	 * @param ctx the parse tree
	 */
	enterMathExpression?: (ctx: MathExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.mathExpression`.
	 * @param ctx the parse tree
	 */
	exitMathExpression?: (ctx: MathExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	enterMathOperator?: (ctx: MathOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	exitMathOperator?: (ctx: MathOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.quickMath`.
	 * @param ctx the parse tree
	 */
	enterQuickMath?: (ctx: QuickMathContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.quickMath`.
	 * @param ctx the parse tree
	 */
	exitQuickMath?: (ctx: QuickMathContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.quickMathOperator`.
	 * @param ctx the parse tree
	 */
	enterQuickMathOperator?: (ctx: QuickMathOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.quickMathOperator`.
	 * @param ctx the parse tree
	 */
	exitQuickMathOperator?: (ctx: QuickMathOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	enterAccessModifier?: (ctx: AccessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	exitAccessModifier?: (ctx: AccessModifierContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.functionCallStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallStatement?: (ctx: FunctionCallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.functionCallStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallStatement?: (ctx: FunctionCallStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.conditionalOperator`.
	 * @param ctx the parse tree
	 */
	enterConditionalOperator?: (ctx: ConditionalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.conditionalOperator`.
	 * @param ctx the parse tree
	 */
	exitConditionalOperator?: (ctx: ConditionalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TypescriptXParser.asyncCall`.
	 * @param ctx the parse tree
	 */
	enterAsyncCall?: (ctx: AsyncCallContext) => void;
	/**
	 * Exit a parse tree produced by `TypescriptXParser.asyncCall`.
	 * @param ctx the parse tree
	 */
	exitAsyncCall?: (ctx: AsyncCallContext) => void;
}

