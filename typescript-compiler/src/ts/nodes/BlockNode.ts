import { StatementNode } from "./StatementNode";
import { Node } from "./Node";

export type BlockNode = Node & {
    statements: Array<StatementNode>;
};