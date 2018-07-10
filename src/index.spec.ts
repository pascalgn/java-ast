import { parse } from './index';

describe('Java AST parser', () => {
  it('should parse the given Java code and return the AST', () => {
    const tree = parse(`
      class TestClass {
      }
    `);
    expect(tree.children[0].getChild(0).getChild(1).text).toEqual('TestClass');
  });
});
