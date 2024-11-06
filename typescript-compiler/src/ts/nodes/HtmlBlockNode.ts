import { AttributeNode } from "./AttributeNode";
import { HtmlBlockChildNode } from "./HtmlBlockChild";
import { Node } from "./Node";
import { StringLiteralNode } from "./StringLiteralNode";
export type HtmlBlockNode = Node & {
    html: string;
    attributes: AttributeNode[];
    children: HtmlBlockChildNode[];
}