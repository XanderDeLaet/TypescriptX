import { ArgumentContext, ArgumentsContext, AsyncCallContext, AttributeContext, BlockContext, ClassInitialiserContext, ConditionContext, FileDeclarationContext, FunctionCallContext, FunctionCallStatementContext, FunctionDeclarationContext, HtmlBlockContext, IfStatementContext, ImportStatementContext, InitialiserContext, InputContext, LoopStatementContext, MathExpressionContext, ParametersContext, QuickMathContext, StatementContext, StringLiteralContext, TypeAnnotationContext, VarDeclarationContext, VarTypeContext } from './generated/TypescriptXParser'
import TypescriptXVisitor from './generated/TypescriptXVisitor'
import { ArgumentNode } from './nodes/ArgumentNode';
import { AsyncCallNode } from './nodes/AsyncCallNode';
import { AttributeNode } from './nodes/AttributeNode';
import { BlockNode } from './nodes/BlockNode';
import { ClassNode } from './nodes/ClassNode';
import { ConditionNode } from './nodes/ConditionNode';
import { FileNode } from './nodes/FileNode';
import { FunctionCallNode } from './nodes/FunctionCallNode';
import { FunctionCallStatementNode } from './nodes/FunctionCallStatement';
import { FunctionDeclarationNode } from './nodes/FunctionDeclarationNode';
import { HtmlBlockChildNode } from './nodes/HtmlBlockChild';
import { HtmlBlockNode } from './nodes/HtmlBlockNode';
import { IfStatementNode } from './nodes/IfStatementNode';
import { ImportStatementNode } from './nodes/ImportStatementNode';
import { LoopStatementNode } from './nodes/LoopStatementNode';
import { MathExpressionNode } from './nodes/MathExpressionNode';
import { Node } from './nodes/Node';
import { QuickMathNode } from './nodes/QuickMathNode';
import { StatementNode } from './nodes/StatementNode';
import { StringLiteralNode } from './nodes/StringLiteralNode';
import { VarDeclarationNode } from './nodes/VarDeclarationNode';
export default class Visitor extends TypescriptXVisitor<Node> {
    visitFileDeclaration = (ctx: FileDeclarationContext): FileNode => {
        const fileNode: FileNode = { statements: [] }; // Initialize FileNode
        const statements = ctx.statement_list();

        for (const statement of statements) {
            const visitedStatement: StatementNode = this.visitStatement(statement);
            if (visitedStatement) {
                fileNode.statements.push(visitedStatement);
            }
        }

        return fileNode;
    };
    visitStatement = (ctx: StatementContext): StatementNode => {
        const statementNode: StatementNode = { value: null };
        const varDeclaration = ctx.varDeclaration();
        const block = ctx.block();
        const functionCallStatement = ctx.functionCallStatement();
        const importStatement = ctx.importStatement();
        const ifStatement = ctx.ifStatement();
        const functionDeclaration = ctx.functionDeclaration();
        const functionCall = ctx.functionCall();
        const loopStatement = ctx.loopStatement();
        const asyncCall = ctx.asyncCall();
        if (varDeclaration) {
            const varDeclarationNode = this.visitVarDeclaration(varDeclaration);
            statementNode.value = varDeclarationNode;
        } else if (block) {
            const blockNode: BlockNode = this.visitBlock(block);
            statementNode.value = blockNode;
        } else if (functionCallStatement) {
            const functionCallNode = this.visitFunctionCallStatement(functionCallStatement);
            statementNode.value = functionCallNode;
        } else if (importStatement) {
            const importStatementNode = this.visitImportStatement(importStatement);
            statementNode.value = importStatementNode;
        } else if (functionDeclaration) {
            const functionDeclarationNode = this.visitFunctionDeclaration(functionDeclaration);
            statementNode.value = functionDeclarationNode;
        } else if (ifStatement) {
            const ifStatementNode = this.visitIfStatement(ifStatement);
            statementNode.value = ifStatementNode;
        } else if(functionCall){
            const functionCallNode = this.visitFunctionCall(functionCall);
            statementNode.value = functionCallNode;
        } else if(loopStatement){
            const loopStatementNode = this.visitLoopStatement(loopStatement);
            statementNode.value = loopStatementNode;
        } else if(asyncCall){
            const asyncCallNode = this.visitAsyncCall(asyncCall);
            statementNode.value = asyncCallNode;
        }
        return statementNode;
    }

    visitHtmlBlock = (ctx: HtmlBlockContext): HtmlBlockNode => {
        const html = ctx.input_list()[0]?.getText() || '';
        const attributes = ctx.attribute_list().map((attribute) => this.visitAttribute(attribute));
        let children: HtmlBlockChildNode[] = [];
        if (ctx.htmlBlock_list().length > 0) {
            ctx.htmlBlock_list().forEach((htmlBlock) => {
                children.push({ value: this.visitHtmlBlock(htmlBlock) })
            });
        }
        if (ctx.input_list().length > 0) {
            ctx.input_list().forEach((input, index, array) => {
                if (index > 0 && index < array.length - 1) {
                    children.push({ value: input.getText() });
                }
            });
        }
        const parsed: HtmlBlockNode = { html: html, attributes: attributes, children: children };
        return parsed;
    }

    visitAttribute = (ctx: AttributeContext): AttributeNode => {
        const name = ctx.input_list()[0] ? ctx.input_list()[0].getText() : '';
        const value = ctx.input_list()[1] ? ctx.input_list()[1].getText() : this.visitFunctionCall(ctx.functionCall());
        const parsed: AttributeNode = { name: name, value: value };
        return parsed;
    };


    visitBlock = (ctx: BlockContext): BlockNode => {
        const block = ctx.statement_list().map((statement) => this.visitStatement(statement));
        const parsed: BlockNode = { statements: block };
        return parsed;
    }

    visitVarDeclaration = (ctx: VarDeclarationContext): VarDeclarationNode => {
        const varType = this.visitVarType(ctx.varType());
        const varName = ctx.ID().getText();
        const typeAnnotation = this.visitTypeAnnotation(ctx.typeAnnotation());
        const initialiser = ctx.initialiser() ? this.visitInitialiser(ctx.initialiser()) : null;
        const parsed: VarDeclarationNode = { name: varName, type: typeAnnotation, value: initialiser, varType: varType };
        return parsed;
    }

    visitFunctionCallStatement = (ctx: FunctionCallStatementContext): FunctionCallStatementNode => {
        const id = ctx.ID().getText();
        const functionCalls = ctx.functionCall_list().map((functionCall) => this.visitFunctionCall(functionCall));
        const functionCallStatement: FunctionCallStatementNode = { id: id, functionCalls: functionCalls };
        return functionCallStatement;
    };

    visitVarType = (ctx: VarTypeContext): string => {
        const type = ctx?.getText() || '';
        return type;
    }

    visitTypeAnnotation = (ctx: TypeAnnotationContext): string => {
        const text = ctx?.getText() || '';
        const type = text.replace(':', '').trim();
        return type;
    }

    visitInitialiser = (ctx: InitialiserContext): string | HtmlBlockNode | FunctionCallStatementNode | ClassNode | MathExpressionNode => {
        const htmlBlock = ctx.htmlBlock();
        const functionCallStatement = ctx.functionCallStatement();
        const classInit = ctx.classInitialiser();
        const mathExpression = ctx.mathExpression();
        const stringLiteral = ctx.stringLiteral();
        if (htmlBlock) return this.visitHtmlBlock(htmlBlock);
        if (functionCallStatement) return this.visitFunctionCallStatement(functionCallStatement);
        if (classInit) return this.visitClassInitialiser(classInit);
        if (mathExpression) return this.visitMathExpression(mathExpression);
        if (stringLiteral) return `${stringLiteral.getText()}`
        const text = ctx.getText() || '';
        const value = text.replace('=', '').trim();
        return value;
    }

    visitClassInitialiser = (ctx: ClassInitialiserContext): ClassNode => {
        const classInitialiser: ClassNode = { id: this.visitFunctionCall(ctx.functionCall()) };
        return classInitialiser;
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): FunctionDeclarationNode => {
        const name = ctx.ID().getText();
        const params = ctx.parameters()?.varDeclaration_list()?.map((param) => this.visitVarDeclaration(param));
        const body = this.visitBlock(ctx.block());
        const async = ctx.getText().includes("await") ? true : false;
        const functionDeclaration: FunctionDeclarationNode = { name: name, params: params, body: body, async: async };
        return functionDeclaration;
    }

    visitFunctionCall = (ctx: FunctionCallContext): FunctionCallNode => {
        const id = ctx.input().getText();
        const args = ctx.arguments() ? this.visitArguments(ctx.arguments()) : null;
        const functionCall: FunctionCallNode = { function: id, args: args, call: true };
        return functionCall;
    }
    visitArguments = (ctx: ArgumentsContext): ArgumentNode[] => {
        const args = ctx.argument_list()!.map((argument) => this.visitArgument(argument));
        return args;
    }

    visitArgument = (ctx: ArgumentContext): ArgumentNode => {
        const arg: ArgumentNode = { value: null };
        const functionCall = ctx.functionCall();
        const stringLiteral = ctx.stringLiteral();
        if (functionCall) {
            arg.value = this.visitFunctionCall(functionCall)
        } else if (stringLiteral) {
            arg.value = { value: stringLiteral.getText() } as StringLiteralNode;

        } else {
            const text = ctx.getText() || '';
            const value = text.replace(',', '').trim();
            arg.value = value;
        };

        return arg;

    };

    visitInput = (ctx: InputContext): string => {
        const text = ctx.getText() || '';
        const value = text.replace(',', '').trim();
        return value;
    }

    visitImportStatement = (ctx: ImportStatementContext): ImportStatementNode => {
        const id = ctx.input().getText();
        const path = ctx.input().getText();
        const importStatement: ImportStatementNode = { id: id, path: path };
        return importStatement;
    }

    visitMathExpression = (ctx: MathExpressionContext): MathExpressionNode => {
        const variable = ctx.input_list()[0].getText();
        const operator = ctx.mathOperator().getText();
        const stringLiteral = ctx.stringLiteral()
        const value = stringLiteral ? this.visitStringLiteral(stringLiteral) : ctx.input_list()[1].getText();
        const mathExpression: MathExpressionNode = { variable: variable, operator: operator, value: value };
        return mathExpression;
    }
    visitIfStatement = (ctx: IfStatementContext): IfStatementNode => {
        const condition = this.visitCondition(ctx.condition());
        const block = ctx.block();
        let body = this.visitBlock(block);
        const ifStatement: IfStatementNode = { condition: condition, resultBody: body };
        return ifStatement;
    };

    visitCondition = (ctx: ConditionContext): ConditionNode => {
        const operator = ctx.conditionalOperator()?.getText();
        const firstValue = ctx.functionCallStatement()?.getText() || ctx.input_list()[0].getText();
        const lastValue = ctx.input_list()[1].getText();
        const condition: ConditionNode = { operator: operator, firstValue: firstValue, lastValue: lastValue };
        return condition;
    };

    visitStringLiteral = (ctx: StringLiteralContext): StringLiteralNode => {
        const value = ctx.getText();
        const stringLiteral: StringLiteralNode = { value: value };
        return stringLiteral;
    };

    visitLoopStatement = (ctx: LoopStatementContext): LoopStatementNode => {
        const varDeclaration = this.visitVarDeclaration(ctx.varDeclaration());
        const condition = this.visitCondition(ctx.condition());
        const iterator = this.visitQuickMath(ctx.quickMath());
        const body = this.visitBlock(ctx.block());
        return { varDeclaration: varDeclaration, condition: condition, iterator: iterator, loopBody: body };
    };

    visitQuickMath = (ctx: QuickMathContext): QuickMathNode => {

        const variable = ctx.input().getText();
        const operator = ctx.quickMathOperator().getText();
        const quickMath: QuickMathNode = { variable: variable, operator: operator };
        return quickMath;
    }

    visitAsyncCall = (ctx: AsyncCallContext): AsyncCallNode => {

        const asyncFunc = this.visitFunctionCall(ctx.functionCall());
        const asyncCall: AsyncCallNode = { asyncFunc: asyncFunc };
        return asyncCall;
    }
    
}