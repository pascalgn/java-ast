import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { parse } from './index';
import { ExpressionContext } from './parser/JavaParser';
import { JavaParserListener } from './parser/JavaParserListener';

describe('Java AST parser', () => {
  it('should parse the given Java code and return the AST', () => {
    const tree = parse(`
      class TestClass {
      }
    `);
    expect(tree.children[0].getChild(0).getChild(1).text).toEqual('TestClass');
  });

  it('should handle super invocation with arguments', () => {
    const tree = parse(`
      class B extends A {
        public B() {
          super(1);
        }
      }
    `);

    const expressions = [];
    ParseTreeWalker.DEFAULT.walk(
      {
        enterExpression(context: ExpressionContext) {
          expressions.push(context.text);
        },
      } as JavaParserListener,
      tree,
    );

    expect(expressions).toContain('super(1)');
  });
});
