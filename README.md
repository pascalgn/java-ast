# java-ast

[![npm version](https://img.shields.io/npm/v/java-ast.svg?style=flat-square)](https://www.npmjs.com/package/java-ast)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Java Parser for JavaScript/TypeScript, based on [antlr4ts](https://www.npmjs.com/package/antlr4ts), grammar taken from [antlr4's java grammar](https://github.com/antlr/grammars-v4/tree/master/java/java) too (so please report bugs and open pull requests related to grammars upstream)

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

## History

This project was originally created by [Uri Shaked](https://github.com/urish).

## See also

- [java-model](https://github.com/pascalgn/java-model) - Provides high-level access to the Java type model.

## License

[MIT](LICENSE)
