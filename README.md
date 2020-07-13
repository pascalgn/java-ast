# java-ast

Java Parser for JavaScript/TypeScript, based on [antlr4ts](https://www.npmjs.com/package/antlr4ts), grammar taken from [antlr4's java grammar](https://github.com/antlr/grammars-v4/tree/master/java/java) too (so please report bugs and open pull requests related to grammars upstream)

[![npm version](https://img.shields.io/npm/v/java-ast.svg)](https://www.npmjs.com/package/java-ast)
[![Build Status](https://travis-ci.org/urish/java-ast.png?branch=master)](https://travis-ci.org/urish/java-ast)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Usage Example

```typescript
import { parse, createVisitor } from 'java-ast';

const countMethods = (source: string) => {
  let ast = parse(source);

  return createVisitor({
    visitMethodDeclaration: () => 1,
    defaultResult: () => 0,
    aggregateResult: (a, b) => a + b,
  }).visit(ast);
};

console.log(
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
); // logs 3
```
