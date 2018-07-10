# java-ast

Java Parser for JavaScript/TypeScript, based on [antlr4ts](https://www.npmjs.com/package/antlr4ts)

[![Build Status](https://travis-ci.org/urish/java-ast.png?branch=master)](https://travis-ci.org/urish/java-ast)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Usage Example

```typescript
import { parse } from './index';

const ast = parse(`package test;\n\nclass TestClass {}\n`);
// do something with ast, e.g. console.log(ast.toStringTree());
```
