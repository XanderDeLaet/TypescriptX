import { StatementNode } from "./StatementNode";
import { Node } from "./Node";
export type FileNode = Node & {
    statements: Array<StatementNode>;
}