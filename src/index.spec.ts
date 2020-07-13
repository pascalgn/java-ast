import { createVisitor, parse, walk } from './index';

describe('parser', () => {
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
    walk({ enterExpression: (c) => expressions.push(c.text) }, tree);

    expect(expressions).toContain('super(1)');
  });

  it('should allow super alone as expression', () => {
    const tree = parse(`
      class B extends A {
        public B() {
          super;
        }
      }
    `);

    const expressions = [];
    walk({ enterExpression: (c) => expressions.push(c.text) }, tree);

    expect(expressions).toContain('super');
  });
});

describe('usage example', () => {
  it('works', () => {
    const countMethods = (source: string) =>
      createVisitor({
        visitMethodDeclaration: () => 1,
        defaultResult: () => 0,
        aggregateResult: (a, b) => a + b,
      }).visit(parse(source));

    expect(
      countMethods(`
      class A {
        int a;
        void b() {}
        void c() {}
      }
      class B {
        void z() {}
      }
    `),
    ).toEqual(3);
  });
});
