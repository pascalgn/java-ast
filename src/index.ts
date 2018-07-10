import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { JavaLexer } from './parser/JavaLexer';
import { JavaParser } from './parser/JavaParser';

/**
 * Parses the given source code and returns the AST
 * @param source Java source code to parse
 */
export function parse(source: string) {
  const chars = new ANTLRInputStream(source);
  const lexer = new JavaLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new JavaParser(tokens);
  return parser.compilationUnit();
}
