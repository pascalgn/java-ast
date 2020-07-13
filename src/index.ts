// parse
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { JavaLexer } from './parser/JavaLexer';
import { CompilationUnitContext, JavaParser } from './parser/JavaParser';

// walk
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { JavaParserListener } from './parser/JavaParserListener';
import { JavaParserVisitor } from './parser/JavaParserVisitor';

// createVisitor
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

/**
 * Parses the given source code and returns the AST
 * @param source Java source code to parse
 */
export function parse(source: string): ParseTree {
  const chars = new ANTLRInputStream(source);
  const lexer = new JavaLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new JavaParser(tokens);
  return parser.compilationUnit();
}

// Just to create a more user-friendly name as all arguments that are name 'tree' take this
// (type alias doesn't create a new name)
// tslint:disable-next-line:no-empty-interface
export interface ParseTree extends CompilationUnitContext {}

/**
 * Walks a parse tree
 * @see https://github.com/antlr/antlr4/blob/master/doc/listeners.md
 */
export function walk(listener: JavaParserListener, tree: ParseTree) {
  ParseTreeWalker.DEFAULT.walk(listener, tree);
}
export { JavaParserListener } from './parser/JavaParserListener';

/**
 * Create a parse tree visitor
 */
export function createVisitor<T>(visitor: Visitor<T>): ConcreteVisitor<T>;
export function createVisitor(visitor: VoidVisitor): ConcreteVisitor<void>;
export function createVisitor<T>(visitor: Visitor<T>): ConcreteVisitor<T> {
  // we don't want users to write classes because it's not JavaScript-y
  // so we'll set implementation of abstract methods and other visit* methods in constructor
  // @ts-ignore
  return new class extends AbstractParseTreeVisitor<T> {
    constructor() {
      super();
      Object.assign(this, {
        defaultResult: () => undefined,
        aggregateResult: () => undefined,
        ...visitor,
      });
    }
  }();
}

export interface Visitor<T>
  extends AbstractVisitor<T>,
    OmitStrict<JavaParserVisitor<T>, NonOverridableMethods> {}

export interface VoidVisitor
  extends OmitStrict<Visitor<void>, 'defaultResult' | 'aggregateResult'> {}

type NonOverridableMethods = keyof ParseTreeVisitor<any>;
type OmitStrict<T, K extends keyof T> = Omit<T, K>;

// Just to create a better name
export interface ConcreteVisitor<T> extends AbstractParseTreeVisitor<T> {}

// from AbstractParseTreeVisitor
interface AbstractVisitor<T> {
  /**
   * Gets the default value returned by visitor methods. This value is
   * returned by the default implementations of
   * {@link #visitTerminal visitTerminal}, {@link #visitErrorNode visitErrorNode}.
   * The default implementation of {@link #visitChildren visitChildren}
   * initializes its aggregate result to this value.
   *
   * @return The default value returned by visitor methods.
   */
  defaultResult: () => T;

  /**
   * Aggregates the results of visiting multiple children of a node. After
   * either all children are visited or {@link #shouldVisitNextChild} returns
   * {@code false}, the aggregate value is returned as the result of
   * {@link #visitChildren}.
   *
   * <p>The default implementation returns {@code nextResult}, meaning
   * {@link #visitChildren} will return the result of the last child visited
   * (or return the initial value if the node has no children).</p>
   *
   * @param aggregate The previous aggregate value. In the default
   * implementation, the aggregate value is initialized to
   * {@link #defaultResult}, which is passed as the {@code aggregate} argument
   * to this method after the first child node is visited.
   * @param nextResult The result of the immediately preceeding call to visit
   * a child node.
   *
   * @return The updated aggregate result.
   */
  aggregateResult: (aggregate: T, nextResult: T) => T;

  /**
   * This method is called after visiting each child in
   * {@link #visitChildren}. This method is first called before the first
   * child is visited; at that point {@code currentResult} will be the initial
   * value (in the default implementation, the initial value is returned by a
   * call to {@link #defaultResult}. This method is not called after the last
   * child is visited.
   *
   * <p>The default implementation always returns {@code true}, indicating that
   * {@code visitChildren} should only return after all children are visited.
   * One reason to override this method is to provide a "short circuit"
   * evaluation option for situations where the result of visiting a single
   * child has the potential to determine the result of the visit operation as
   * a whole.</p>
   *
   * @param node The {@link RuleNode} whose children are currently being
   * visited.
   * @param currentResult The current aggregate result of the children visited
   * to the current point.
   *
   * @return {@code true} to continue visiting children. Otherwise return
   * {@code false} to stop visiting children and immediately return the
   * current aggregate result from {@link #visitChildren}.
   */
  shouldVisitNextChild?: (node: RuleNode, currentResult: T) => boolean;
}

export * from './parser/JavaContexts';
