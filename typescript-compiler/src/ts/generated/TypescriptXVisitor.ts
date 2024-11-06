// Generated from ./TypescriptX.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypescriptXParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class TypescriptXVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TypescriptXParser.fileDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileDeclaration?: (ctx: FileDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.htmlBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlBlock?: (ctx: HtmlBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.typeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.initialiser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitialiser?: (ctx: InitialiserContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.classInitialiser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInitialiser?: (ctx: ClassInitialiserContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.mathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathExpression?: (ctx: MathExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.mathOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathOperator?: (ctx: MathOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.quickMath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuickMath?: (ctx: QuickMathContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.quickMathOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuickMathOperator?: (ctx: QuickMathOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.accessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessModifier?: (ctx: AccessModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.functionCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallStatement?: (ctx: FunctionCallStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.conditionalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOperator?: (ctx: ConditionalOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `TypescriptXParser.asyncCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsyncCall?: (ctx: AsyncCallContext) => Result;
}

