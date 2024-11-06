import { ArgumentNode } from "./nodes/ArgumentNode";
import { AsyncCallNode } from "./nodes/AsyncCallNode";
import { AttributeNode } from "./nodes/AttributeNode";
import { BlockNode } from "./nodes/BlockNode";
import { ClassNode } from "./nodes/ClassNode";
import { ConditionNode } from "./nodes/ConditionNode";
import { FileNode } from "./nodes/FileNode";
import { FunctionCallNode } from "./nodes/FunctionCallNode";
import { FunctionCallStatementNode } from "./nodes/FunctionCallStatement";
import { FunctionDeclarationNode } from "./nodes/FunctionDeclarationNode";
import { HtmlBlockChildNode } from "./nodes/HtmlBlockChild";
import { HtmlBlockNode } from "./nodes/HtmlBlockNode";
import { IfStatementNode } from "./nodes/IfStatementNode";
import { ImportStatementNode } from "./nodes/ImportStatementNode";
import { LoopStatementNode } from "./nodes/LoopStatementNode";
import { MathExpressionNode } from "./nodes/MathExpressionNode";
import { QuickMathNode } from "./nodes/QuickMathNode";
import { StatementNode } from "./nodes/StatementNode";
import { StringLiteralNode } from "./nodes/StringLiteralNode";
import { VarDeclarationNode } from "./nodes/VarDeclarationNode";

export default class GeneratorJS {
    generate(fileNode: FileNode): string {
        return fileNode.statements.map(statement => this.generateStatement(statement)).join("\n");
    }

    generateStatement(statement: StatementNode): string {
        if (statement.value) {
            if ((statement.value as VarDeclarationNode).value) {
                return this.generateVarDeclaration(statement.value as VarDeclarationNode);
            } else if ((statement.value as BlockNode).statements) {
                return this.generateBlock(statement.value as BlockNode);
            } else if ((statement.value as FunctionCallStatementNode).functionCalls) {
                return this.generateFunctionCallStatement(statement.value as FunctionCallStatementNode);
            } else if ((statement.value as ImportStatementNode).path) {
                return this.generateImportStatement(statement.value as ImportStatementNode);
            } else if ((statement.value as FunctionDeclarationNode).body) {
                return this.generateFunctionDeclaration(statement.value as FunctionDeclarationNode);
            } else if ((statement.value as IfStatementNode).resultBody) {
                return this.generateIfStatement(statement.value as IfStatementNode);
            } else if ((statement.value as FunctionCallNode).function) {
                return this.generateFunctionCall(statement.value as FunctionCallNode);
            } else if ((statement.value as LoopStatementNode).iterator) {
                return this.generateLoopStatement(statement.value as LoopStatementNode);
            } else if((statement.value as AsyncCallNode).asyncFunc){
                return this.generateAsyncCall(statement.value as AsyncCallNode);
            }
        }
        return "";
    }

    generateVarDeclaration(varDeclaration: VarDeclarationNode): string {
        if ((varDeclaration.value as HtmlBlockNode).html) varDeclaration.value = this.generateHtmlBlock((varDeclaration.value as HtmlBlockNode)) + ";";
        else if ((varDeclaration.value as FunctionCallStatementNode).functionCalls) varDeclaration.value = this.generateFunctionCallStatement((varDeclaration.value as FunctionCallStatementNode));
        else if ((varDeclaration.value as ClassNode).id) varDeclaration.value = this.generateClassInitialization((varDeclaration.value as ClassNode)) + ";";
        else if ((varDeclaration.value as MathExpressionNode).operator) varDeclaration.value = this.generateMathExpression((varDeclaration.value as MathExpressionNode)) + ";";
        else varDeclaration.value = `${varDeclaration.value};`;
        switch (varDeclaration.varType) {
            case "vast":
                return `const ${varDeclaration.name} = ${varDeclaration.value}`;
            case "elast":
                return `let ${varDeclaration.name} = ${varDeclaration.value}`;
            case "globaal":
                return `var ${varDeclaration.name} = ${varDeclaration.value}`;
            default:
                return `${varDeclaration.varType !== '' ? varDeclaration.varType + ' ' : ''}${varDeclaration.name} = ${varDeclaration.value}`;
        }
   }

    generateHtmlBlock(htmlBlock: HtmlBlockNode): string {
        const attributeString = htmlBlock.attributes?.map(attribute => this.generateAttribute(attribute)).join(", ");
        let childrenString = "";
        if (htmlBlock.children && htmlBlock.children.length > 0) {
            htmlBlock.children.map(child => {
                if (typeof child.value === "string") {
                    if ((child.value as string).startsWith('var')) {
                        childrenString += (child.value as string).split('var')[1].trim();
                        childrenString += ", ";
                    } else {
                        const myArray = htmlBlock.children.map(child => `"${child.value}", `)
                        childrenString = myArray.join('');
                    }
                } else childrenString = htmlBlock.children.map(child => this.generateHtmlBlock(child.value as HtmlBlockNode)).join(", ");
            });
        }
        return `xandom.createElement("${htmlBlock.html}", {${attributeString}}, ${childrenString})`;
    }

    generateAttribute(attribute: AttributeNode): string {
        if ((attribute.value as FunctionCallNode).function) return `${attribute.name}: ${(attribute.value as FunctionCallNode).function}`;
        return `${attribute.name}: "${attribute.value}"`;
    }

    generateBlock(block: BlockNode): string {
        const myBlock = block.statements.map(statement => this.generateStatement(statement)).join("\n");
        return "{\n" + myBlock + "\n}";
    }

    generateFunctionDeclaration(functionDeclaration: FunctionDeclarationNode): string {
        return `${functionDeclaration.async ? 'async ' : ''}function ${functionDeclaration.name}(${functionDeclaration.params?.length > 0 ? functionDeclaration.params.map(arg => arg.name).join(", ") : ""}) ${this.generateBlock(functionDeclaration.body)}`;
    }

    generateFunctionCallStatement(functionCallStatement: FunctionCallStatementNode): string {
        return `${functionCallStatement.id}.${functionCallStatement.functionCalls.map(functionCall => this.generateFunctionCall(functionCall)).join(",")};`;
    }

    generateFunctionCall(functionCall: FunctionCallNode): string {
        return `${functionCall.function}(${functionCall.args ? functionCall.args.map(arg => this.generateArg(arg)).join(", ") : ''})`;
    }

    generateArg(arg: ArgumentNode): string {
        if ((arg.value as FunctionCallNode).function) {
            return this.generateFunctionCall(arg.value as FunctionCallNode);
        } else if ((arg.value as StringLiteralNode).value) {
            return `${(arg.value as StringLiteralNode).value}`;
        }

        return `${arg.value}`;
    }
    generateImportStatement(importStatement: ImportStatementNode): string {
        return `import ${importStatement.id} from '${importStatement.path}';`;
    }

    generateClassInitialization(classNode: ClassNode): string {
        return `new ${classNode.id.function}()`;
    }

    generateMathExpression(mathExpression: MathExpressionNode): string {
        const value = (mathExpression.value as StringLiteralNode).value ? this.generateStringLiteral(mathExpression.value as StringLiteralNode) : mathExpression.value;
        return `${mathExpression.variable} ${mathExpression.operator} ${value}`;
    }
    generateIfStatement(ifStatement: IfStatementNode): string {
        const body = (ifStatement.resultBody as BlockNode).statements ? this.generateBlock(ifStatement.resultBody as BlockNode) : this.generateStatement(ifStatement.resultBody as StatementNode);
        return `if(${this.generateCondition(ifStatement.condition)}) ${body}`;
    }
    generateCondition(condition: ConditionNode): string {
        const firstValue = (condition.firstValue as FunctionCallStatementNode).functionCalls ? this.generateFunctionCallStatement(condition.firstValue as FunctionCallStatementNode) : condition.firstValue;
        return `${firstValue} ${condition.operator} ${condition.lastValue}`;
    }
    generateStringLiteral(stringLiteral: StringLiteralNode): string {
        return `"${stringLiteral.value}"`;
    }

    generateLoopStatement(loopStatement: LoopStatementNode): string {
        return `for(${this.generateVarDeclaration(loopStatement.varDeclaration)} ${this.generateCondition(loopStatement.condition)}; ${this.generateQuickMath(loopStatement.iterator)}) ${this.generateBlock(loopStatement.loopBody)}`;
    }

    generateQuickMath(quickMath: QuickMathNode): string {
        return `${quickMath.variable.split(';')[1]}${quickMath.operator}`;
    }

    generateAsyncCall(asyncCall: AsyncCallNode): string {
        if(asyncCall.asyncFunc.function === "sleep"){
            return `await new Promise(resolve => setTimeout(resolve, ${asyncCall.asyncFunc.args[0]?.value}));`;
        }
        return `await ${this.generateFunctionCall(asyncCall.asyncFunc)}`;
    }
}
