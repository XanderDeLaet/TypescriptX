import antlr from 'antlr4'
import TypescriptXLexer from './generated/TypescriptXLexer'
import TypescriptXParser from './generated/TypescriptXParser'
import Visitor from './visitor'
import { FileNode } from './nodes/FileNode'
function parseSourceCode(input: string): FileNode {
    const chars = new antlr.CharStream(input)
    const lexer = new TypescriptXLexer(chars)
    const tokens = new antlr.CommonTokenStream(lexer)
    const parser = new TypescriptXParser(tokens)
    const context = parser.fileDeclaration()
    const visitor = new Visitor();
    return visitor.visitFileDeclaration(context)
}

export { parseSourceCode }
