// Generated from src/parser/JavaParser.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { JavaParserListener } from './JavaParserListener';
import { JavaParserVisitor } from './JavaParserVisitor';

export class JavaParser extends Parser {
  static readonly ABSTRACT = 1;
  static readonly ASSERT = 2;
  static readonly BOOLEAN = 3;
  static readonly BREAK = 4;
  static readonly BYTE = 5;
  static readonly CASE = 6;
  static readonly CATCH = 7;
  static readonly CHAR = 8;
  static readonly CLASS = 9;
  static readonly CONST = 10;
  static readonly CONTINUE = 11;
  static readonly DEFAULT = 12;
  static readonly DO = 13;
  static readonly DOUBLE = 14;
  static readonly ELSE = 15;
  static readonly ENUM = 16;
  static readonly EXTENDS = 17;
  static readonly FINAL = 18;
  static readonly FINALLY = 19;
  static readonly FLOAT = 20;
  static readonly FOR = 21;
  static readonly IF = 22;
  static readonly GOTO = 23;
  static readonly IMPLEMENTS = 24;
  static readonly IMPORT = 25;
  static readonly INSTANCEOF = 26;
  static readonly INT = 27;
  static readonly INTERFACE = 28;
  static readonly LONG = 29;
  static readonly NATIVE = 30;
  static readonly NEW = 31;
  static readonly PACKAGE = 32;
  static readonly PRIVATE = 33;
  static readonly PROTECTED = 34;
  static readonly PUBLIC = 35;
  static readonly RETURN = 36;
  static readonly SHORT = 37;
  static readonly STATIC = 38;
  static readonly STRICTFP = 39;
  static readonly SUPER = 40;
  static readonly SWITCH = 41;
  static readonly SYNCHRONIZED = 42;
  static readonly THIS = 43;
  static readonly THROW = 44;
  static readonly THROWS = 45;
  static readonly TRANSIENT = 46;
  static readonly TRY = 47;
  static readonly VOID = 48;
  static readonly VOLATILE = 49;
  static readonly WHILE = 50;
  static readonly DECIMAL_LITERAL = 51;
  static readonly HEX_LITERAL = 52;
  static readonly OCT_LITERAL = 53;
  static readonly BINARY_LITERAL = 54;
  static readonly FLOAT_LITERAL = 55;
  static readonly HEX_FLOAT_LITERAL = 56;
  static readonly BOOL_LITERAL = 57;
  static readonly CHAR_LITERAL = 58;
  static readonly STRING_LITERAL = 59;
  static readonly NULL_LITERAL = 60;
  static readonly LPAREN = 61;
  static readonly RPAREN = 62;
  static readonly LBRACE = 63;
  static readonly RBRACE = 64;
  static readonly LBRACK = 65;
  static readonly RBRACK = 66;
  static readonly SEMI = 67;
  static readonly COMMA = 68;
  static readonly DOT = 69;
  static readonly ASSIGN = 70;
  static readonly GT = 71;
  static readonly LT = 72;
  static readonly BANG = 73;
  static readonly TILDE = 74;
  static readonly QUESTION = 75;
  static readonly COLON = 76;
  static readonly EQUAL = 77;
  static readonly LE = 78;
  static readonly GE = 79;
  static readonly NOTEQUAL = 80;
  static readonly AND = 81;
  static readonly OR = 82;
  static readonly INC = 83;
  static readonly DEC = 84;
  static readonly ADD = 85;
  static readonly SUB = 86;
  static readonly MUL = 87;
  static readonly DIV = 88;
  static readonly BITAND = 89;
  static readonly BITOR = 90;
  static readonly CARET = 91;
  static readonly MOD = 92;
  static readonly ADD_ASSIGN = 93;
  static readonly SUB_ASSIGN = 94;
  static readonly MUL_ASSIGN = 95;
  static readonly DIV_ASSIGN = 96;
  static readonly AND_ASSIGN = 97;
  static readonly OR_ASSIGN = 98;
  static readonly XOR_ASSIGN = 99;
  static readonly MOD_ASSIGN = 100;
  static readonly LSHIFT_ASSIGN = 101;
  static readonly RSHIFT_ASSIGN = 102;
  static readonly URSHIFT_ASSIGN = 103;
  static readonly ARROW = 104;
  static readonly COLONCOLON = 105;
  static readonly AT = 106;
  static readonly ELLIPSIS = 107;
  static readonly WS = 108;
  static readonly COMMENT = 109;
  static readonly LINE_COMMENT = 110;
  static readonly IDENTIFIER = 111;
  static readonly RULE_compilationUnit = 0;
  static readonly RULE_packageDeclaration = 1;
  static readonly RULE_importDeclaration = 2;
  static readonly RULE_typeDeclaration = 3;
  static readonly RULE_modifier = 4;
  static readonly RULE_classOrInterfaceModifier = 5;
  static readonly RULE_variableModifier = 6;
  static readonly RULE_classDeclaration = 7;
  static readonly RULE_typeParameters = 8;
  static readonly RULE_typeParameter = 9;
  static readonly RULE_typeBound = 10;
  static readonly RULE_enumDeclaration = 11;
  static readonly RULE_enumConstants = 12;
  static readonly RULE_enumConstant = 13;
  static readonly RULE_enumBodyDeclarations = 14;
  static readonly RULE_interfaceDeclaration = 15;
  static readonly RULE_classBody = 16;
  static readonly RULE_interfaceBody = 17;
  static readonly RULE_classBodyDeclaration = 18;
  static readonly RULE_memberDeclaration = 19;
  static readonly RULE_methodDeclaration = 20;
  static readonly RULE_methodBody = 21;
  static readonly RULE_typeTypeOrVoid = 22;
  static readonly RULE_genericMethodDeclaration = 23;
  static readonly RULE_genericConstructorDeclaration = 24;
  static readonly RULE_constructorDeclaration = 25;
  static readonly RULE_fieldDeclaration = 26;
  static readonly RULE_interfaceBodyDeclaration = 27;
  static readonly RULE_interfaceMemberDeclaration = 28;
  static readonly RULE_constDeclaration = 29;
  static readonly RULE_constantDeclarator = 30;
  static readonly RULE_interfaceMethodDeclaration = 31;
  static readonly RULE_interfaceMethodModifier = 32;
  static readonly RULE_genericInterfaceMethodDeclaration = 33;
  static readonly RULE_variableDeclarators = 34;
  static readonly RULE_variableDeclarator = 35;
  static readonly RULE_variableDeclaratorId = 36;
  static readonly RULE_variableInitializer = 37;
  static readonly RULE_arrayInitializer = 38;
  static readonly RULE_classOrInterfaceType = 39;
  static readonly RULE_typeArgument = 40;
  static readonly RULE_qualifiedNameList = 41;
  static readonly RULE_formalParameters = 42;
  static readonly RULE_formalParameterList = 43;
  static readonly RULE_formalParameter = 44;
  static readonly RULE_lastFormalParameter = 45;
  static readonly RULE_qualifiedName = 46;
  static readonly RULE_literal = 47;
  static readonly RULE_integerLiteral = 48;
  static readonly RULE_floatLiteral = 49;
  static readonly RULE_annotation = 50;
  static readonly RULE_elementValuePairs = 51;
  static readonly RULE_elementValuePair = 52;
  static readonly RULE_elementValue = 53;
  static readonly RULE_elementValueArrayInitializer = 54;
  static readonly RULE_annotationTypeDeclaration = 55;
  static readonly RULE_annotationTypeBody = 56;
  static readonly RULE_annotationTypeElementDeclaration = 57;
  static readonly RULE_annotationTypeElementRest = 58;
  static readonly RULE_annotationMethodOrConstantRest = 59;
  static readonly RULE_annotationMethodRest = 60;
  static readonly RULE_annotationConstantRest = 61;
  static readonly RULE_defaultValue = 62;
  static readonly RULE_block = 63;
  static readonly RULE_blockStatement = 64;
  static readonly RULE_localVariableDeclaration = 65;
  static readonly RULE_localTypeDeclaration = 66;
  static readonly RULE_statement = 67;
  static readonly RULE_catchClause = 68;
  static readonly RULE_catchType = 69;
  static readonly RULE_finallyBlock = 70;
  static readonly RULE_resourceSpecification = 71;
  static readonly RULE_resources = 72;
  static readonly RULE_resource = 73;
  static readonly RULE_switchBlockStatementGroup = 74;
  static readonly RULE_switchLabel = 75;
  static readonly RULE_forControl = 76;
  static readonly RULE_forInit = 77;
  static readonly RULE_enhancedForControl = 78;
  static readonly RULE_parExpression = 79;
  static readonly RULE_expressionList = 80;
  static readonly RULE_methodCall = 81;
  static readonly RULE_expression = 82;
  static readonly RULE_lambdaExpression = 83;
  static readonly RULE_lambdaParameters = 84;
  static readonly RULE_lambdaBody = 85;
  static readonly RULE_primary = 86;
  static readonly RULE_classType = 87;
  static readonly RULE_creator = 88;
  static readonly RULE_createdName = 89;
  static readonly RULE_innerCreator = 90;
  static readonly RULE_arrayCreatorRest = 91;
  static readonly RULE_classCreatorRest = 92;
  static readonly RULE_explicitGenericInvocation = 93;
  static readonly RULE_typeArgumentsOrDiamond = 94;
  static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 95;
  static readonly RULE_nonWildcardTypeArguments = 96;
  static readonly RULE_typeList = 97;
  static readonly RULE_typeType = 98;
  static readonly RULE_primitiveType = 99;
  static readonly RULE_typeArguments = 100;
  static readonly RULE_superSuffix = 101;
  static readonly RULE_explicitGenericInvocationSuffix = 102;
  static readonly RULE_arguments = 103;
  static readonly ruleNames: string[] = [
    'compilationUnit',
    'packageDeclaration',
    'importDeclaration',
    'typeDeclaration',
    'modifier',
    'classOrInterfaceModifier',
    'variableModifier',
    'classDeclaration',
    'typeParameters',
    'typeParameter',
    'typeBound',
    'enumDeclaration',
    'enumConstants',
    'enumConstant',
    'enumBodyDeclarations',
    'interfaceDeclaration',
    'classBody',
    'interfaceBody',
    'classBodyDeclaration',
    'memberDeclaration',
    'methodDeclaration',
    'methodBody',
    'typeTypeOrVoid',
    'genericMethodDeclaration',
    'genericConstructorDeclaration',
    'constructorDeclaration',
    'fieldDeclaration',
    'interfaceBodyDeclaration',
    'interfaceMemberDeclaration',
    'constDeclaration',
    'constantDeclarator',
    'interfaceMethodDeclaration',
    'interfaceMethodModifier',
    'genericInterfaceMethodDeclaration',
    'variableDeclarators',
    'variableDeclarator',
    'variableDeclaratorId',
    'variableInitializer',
    'arrayInitializer',
    'classOrInterfaceType',
    'typeArgument',
    'qualifiedNameList',
    'formalParameters',
    'formalParameterList',
    'formalParameter',
    'lastFormalParameter',
    'qualifiedName',
    'literal',
    'integerLiteral',
    'floatLiteral',
    'annotation',
    'elementValuePairs',
    'elementValuePair',
    'elementValue',
    'elementValueArrayInitializer',
    'annotationTypeDeclaration',
    'annotationTypeBody',
    'annotationTypeElementDeclaration',
    'annotationTypeElementRest',
    'annotationMethodOrConstantRest',
    'annotationMethodRest',
    'annotationConstantRest',
    'defaultValue',
    'block',
    'blockStatement',
    'localVariableDeclaration',
    'localTypeDeclaration',
    'statement',
    'catchClause',
    'catchType',
    'finallyBlock',
    'resourceSpecification',
    'resources',
    'resource',
    'switchBlockStatementGroup',
    'switchLabel',
    'forControl',
    'forInit',
    'enhancedForControl',
    'parExpression',
    'expressionList',
    'methodCall',
    'expression',
    'lambdaExpression',
    'lambdaParameters',
    'lambdaBody',
    'primary',
    'classType',
    'creator',
    'createdName',
    'innerCreator',
    'arrayCreatorRest',
    'classCreatorRest',
    'explicitGenericInvocation',
    'typeArgumentsOrDiamond',
    'nonWildcardTypeArgumentsOrDiamond',
    'nonWildcardTypeArguments',
    'typeList',
    'typeType',
    'primitiveType',
    'typeArguments',
    'superSuffix',
    'explicitGenericInvocationSuffix',
    'arguments',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'abstract'",
    "'assert'",
    "'boolean'",
    "'break'",
    "'byte'",
    "'case'",
    "'catch'",
    "'char'",
    "'class'",
    "'const'",
    "'continue'",
    "'default'",
    "'do'",
    "'double'",
    "'else'",
    "'enum'",
    "'extends'",
    "'final'",
    "'finally'",
    "'float'",
    "'for'",
    "'if'",
    "'goto'",
    "'implements'",
    "'import'",
    "'instanceof'",
    "'int'",
    "'interface'",
    "'long'",
    "'native'",
    "'new'",
    "'package'",
    "'private'",
    "'protected'",
    "'public'",
    "'return'",
    "'short'",
    "'static'",
    "'strictfp'",
    "'super'",
    "'switch'",
    "'synchronized'",
    "'this'",
    "'throw'",
    "'throws'",
    "'transient'",
    "'try'",
    "'void'",
    "'volatile'",
    "'while'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'null'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "';'",
    "','",
    "'.'",
    "'='",
    "'>'",
    "'<'",
    "'!'",
    "'~'",
    "'?'",
    "':'",
    "'=='",
    "'<='",
    "'>='",
    "'!='",
    "'&&'",
    "'||'",
    "'++'",
    "'--'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'&'",
    "'|'",
    "'^'",
    "'%'",
    "'+='",
    "'-='",
    "'*='",
    "'/='",
    "'&='",
    "'|='",
    "'^='",
    "'%='",
    "'<<='",
    "'>>='",
    "'>>>='",
    "'->'",
    "'::'",
    "'@'",
    "'...'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'ABSTRACT',
    'ASSERT',
    'BOOLEAN',
    'BREAK',
    'BYTE',
    'CASE',
    'CATCH',
    'CHAR',
    'CLASS',
    'CONST',
    'CONTINUE',
    'DEFAULT',
    'DO',
    'DOUBLE',
    'ELSE',
    'ENUM',
    'EXTENDS',
    'FINAL',
    'FINALLY',
    'FLOAT',
    'FOR',
    'IF',
    'GOTO',
    'IMPLEMENTS',
    'IMPORT',
    'INSTANCEOF',
    'INT',
    'INTERFACE',
    'LONG',
    'NATIVE',
    'NEW',
    'PACKAGE',
    'PRIVATE',
    'PROTECTED',
    'PUBLIC',
    'RETURN',
    'SHORT',
    'STATIC',
    'STRICTFP',
    'SUPER',
    'SWITCH',
    'SYNCHRONIZED',
    'THIS',
    'THROW',
    'THROWS',
    'TRANSIENT',
    'TRY',
    'VOID',
    'VOLATILE',
    'WHILE',
    'DECIMAL_LITERAL',
    'HEX_LITERAL',
    'OCT_LITERAL',
    'BINARY_LITERAL',
    'FLOAT_LITERAL',
    'HEX_FLOAT_LITERAL',
    'BOOL_LITERAL',
    'CHAR_LITERAL',
    'STRING_LITERAL',
    'NULL_LITERAL',
    'LPAREN',
    'RPAREN',
    'LBRACE',
    'RBRACE',
    'LBRACK',
    'RBRACK',
    'SEMI',
    'COMMA',
    'DOT',
    'ASSIGN',
    'GT',
    'LT',
    'BANG',
    'TILDE',
    'QUESTION',
    'COLON',
    'EQUAL',
    'LE',
    'GE',
    'NOTEQUAL',
    'AND',
    'OR',
    'INC',
    'DEC',
    'ADD',
    'SUB',
    'MUL',
    'DIV',
    'BITAND',
    'BITOR',
    'CARET',
    'MOD',
    'ADD_ASSIGN',
    'SUB_ASSIGN',
    'MUL_ASSIGN',
    'DIV_ASSIGN',
    'AND_ASSIGN',
    'OR_ASSIGN',
    'XOR_ASSIGN',
    'MOD_ASSIGN',
    'LSHIFT_ASSIGN',
    'RSHIFT_ASSIGN',
    'URSHIFT_ASSIGN',
    'ARROW',
    'COLONCOLON',
    'AT',
    'ELLIPSIS',
    'WS',
    'COMMENT',
    'LINE_COMMENT',
    'IDENTIFIER',
  ];
  static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    JavaParser._LITERAL_NAMES,
    JavaParser._SYMBOLIC_NAMES,
    [],
  );

  @Override
  @NotNull
  get vocabulary(): Vocabulary {
    return JavaParser.VOCABULARY;
  }

  @Override
  get grammarFileName(): string {
    return 'JavaParser.g4';
  }

  @Override
  get ruleNames(): string[] {
    return JavaParser.ruleNames;
  }

  @Override
  get serializedATN(): string {
    return JavaParser._serializedATN;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(JavaParser._ATN, this);
  }
  @RuleVersion(0)
  compilationUnit(): CompilationUnitContext {
    const _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 209;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              this.state = 208;
              this.packageDeclaration();
            }
            break;
        }
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.IMPORT) {
          {
            {
              this.state = 211;
              this.importDeclaration();
            }
          }
          this.state = 216;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.ENUM) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.INTERFACE))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)))) !==
              0) ||
          _la === JavaParser.SEMI ||
          _la === JavaParser.AT
        ) {
          {
            {
              this.state = 217;
              this.typeDeclaration();
            }
          }
          this.state = 222;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 223;
        this.match(JavaParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  packageDeclaration(): PackageDeclarationContext {
    const _localctx: PackageDeclarationContext = new PackageDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 228;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.AT) {
          {
            {
              this.state = 225;
              this.annotation();
            }
          }
          this.state = 230;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 231;
        this.match(JavaParser.PACKAGE);
        this.state = 232;
        this.qualifiedName();
        this.state = 233;
        this.match(JavaParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  importDeclaration(): ImportDeclarationContext {
    const _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 235;
        this.match(JavaParser.IMPORT);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.STATIC) {
          {
            this.state = 236;
            this.match(JavaParser.STATIC);
          }
        }

        this.state = 239;
        this.qualifiedName();
        this.state = 242;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.DOT) {
          {
            this.state = 240;
            this.match(JavaParser.DOT);
            this.state = 241;
            this.match(JavaParser.MUL);
          }
        }

        this.state = 244;
        this.match(JavaParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeDeclaration(): TypeDeclarationContext {
    const _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
    try {
      let _alt: number;
      this.state = 259;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.ABSTRACT:
        case JavaParser.CLASS:
        case JavaParser.ENUM:
        case JavaParser.FINAL:
        case JavaParser.INTERFACE:
        case JavaParser.PRIVATE:
        case JavaParser.PROTECTED:
        case JavaParser.PUBLIC:
        case JavaParser.STATIC:
        case JavaParser.STRICTFP:
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 249;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 246;
                    this.classOrInterfaceModifier();
                  }
                }
              }
              this.state = 251;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
            }
            this.state = 256;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JavaParser.CLASS:
                {
                  this.state = 252;
                  this.classDeclaration();
                }
                break;
              case JavaParser.ENUM:
                {
                  this.state = 253;
                  this.enumDeclaration();
                }
                break;
              case JavaParser.INTERFACE:
                {
                  this.state = 254;
                  this.interfaceDeclaration();
                }
                break;
              case JavaParser.AT:
                {
                  this.state = 255;
                  this.annotationTypeDeclaration();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case JavaParser.SEMI:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 258;
            this.match(JavaParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  modifier(): ModifierContext {
    const _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
    try {
      this.state = 266;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.ABSTRACT:
        case JavaParser.FINAL:
        case JavaParser.PRIVATE:
        case JavaParser.PROTECTED:
        case JavaParser.PUBLIC:
        case JavaParser.STATIC:
        case JavaParser.STRICTFP:
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 261;
            this.classOrInterfaceModifier();
          }
          break;
        case JavaParser.NATIVE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 262;
            this.match(JavaParser.NATIVE);
          }
          break;
        case JavaParser.SYNCHRONIZED:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 263;
            this.match(JavaParser.SYNCHRONIZED);
          }
          break;
        case JavaParser.TRANSIENT:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 264;
            this.match(JavaParser.TRANSIENT);
          }
          break;
        case JavaParser.VOLATILE:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 265;
            this.match(JavaParser.VOLATILE);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
    const _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
    try {
      this.state = 276;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 268;
            this.annotation();
          }
          break;
        case JavaParser.PUBLIC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 269;
            this.match(JavaParser.PUBLIC);
          }
          break;
        case JavaParser.PROTECTED:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 270;
            this.match(JavaParser.PROTECTED);
          }
          break;
        case JavaParser.PRIVATE:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 271;
            this.match(JavaParser.PRIVATE);
          }
          break;
        case JavaParser.STATIC:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 272;
            this.match(JavaParser.STATIC);
          }
          break;
        case JavaParser.ABSTRACT:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 273;
            this.match(JavaParser.ABSTRACT);
          }
          break;
        case JavaParser.FINAL:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 274;
            this.match(JavaParser.FINAL);
          }
          break;
        case JavaParser.STRICTFP:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 275;
            this.match(JavaParser.STRICTFP);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  variableModifier(): VariableModifierContext {
    const _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
    try {
      this.state = 280;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.FINAL:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 278;
            this.match(JavaParser.FINAL);
          }
          break;
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 279;
            this.annotation();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classDeclaration(): ClassDeclarationContext {
    const _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 282;
        this.match(JavaParser.CLASS);
        this.state = 283;
        this.match(JavaParser.IDENTIFIER);
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LT) {
          {
            this.state = 284;
            this.typeParameters();
          }
        }

        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.EXTENDS) {
          {
            this.state = 287;
            this.match(JavaParser.EXTENDS);
            this.state = 288;
            this.typeType();
          }
        }

        this.state = 293;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.IMPLEMENTS) {
          {
            this.state = 291;
            this.match(JavaParser.IMPLEMENTS);
            this.state = 292;
            this.typeList();
          }
        }

        this.state = 295;
        this.classBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeParameters(): TypeParametersContext {
    const _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, JavaParser.RULE_typeParameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 297;
        this.match(JavaParser.LT);
        this.state = 298;
        this.typeParameter();
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 299;
              this.match(JavaParser.COMMA);
              this.state = 300;
              this.typeParameter();
            }
          }
          this.state = 305;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 306;
        this.match(JavaParser.GT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeParameter(): TypeParameterContext {
    const _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, JavaParser.RULE_typeParameter);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 311;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.AT) {
          {
            {
              this.state = 308;
              this.annotation();
            }
          }
          this.state = 313;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 314;
        this.match(JavaParser.IDENTIFIER);
        this.state = 317;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.EXTENDS) {
          {
            this.state = 315;
            this.match(JavaParser.EXTENDS);
            this.state = 316;
            this.typeBound();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeBound(): TypeBoundContext {
    const _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, JavaParser.RULE_typeBound);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 319;
        this.typeType();
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.BITAND) {
          {
            {
              this.state = 320;
              this.match(JavaParser.BITAND);
              this.state = 321;
              this.typeType();
            }
          }
          this.state = 326;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  enumDeclaration(): EnumDeclarationContext {
    const _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, JavaParser.RULE_enumDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 327;
        this.match(JavaParser.ENUM);
        this.state = 328;
        this.match(JavaParser.IDENTIFIER);
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.IMPLEMENTS) {
          {
            this.state = 329;
            this.match(JavaParser.IMPLEMENTS);
            this.state = 330;
            this.typeList();
          }
        }

        this.state = 333;
        this.match(JavaParser.LBRACE);
        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
          {
            this.state = 334;
            this.enumConstants();
          }
        }

        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.COMMA) {
          {
            this.state = 337;
            this.match(JavaParser.COMMA);
          }
        }

        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.SEMI) {
          {
            this.state = 340;
            this.enumBodyDeclarations();
          }
        }

        this.state = 343;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  enumConstants(): EnumConstantsContext {
    const _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, JavaParser.RULE_enumConstants);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 345;
        this.enumConstant();
        this.state = 350;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 346;
                this.match(JavaParser.COMMA);
                this.state = 347;
                this.enumConstant();
              }
            }
          }
          this.state = 352;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  enumConstant(): EnumConstantContext {
    const _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, JavaParser.RULE_enumConstant);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 356;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.AT) {
          {
            {
              this.state = 353;
              this.annotation();
            }
          }
          this.state = 358;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 359;
        this.match(JavaParser.IDENTIFIER);
        this.state = 361;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LPAREN) {
          {
            this.state = 360;
            this.arguments();
          }
        }

        this.state = 364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LBRACE) {
          {
            this.state = 363;
            this.classBody();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  enumBodyDeclarations(): EnumBodyDeclarationsContext {
    const _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 28, JavaParser.RULE_enumBodyDeclarations);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 366;
        this.match(JavaParser.SEMI);
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.ENUM) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NATIVE))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.TRANSIENT - 33)) |
                (1 << (JavaParser.VOID - 33)) |
                (1 << (JavaParser.VOLATILE - 33)) |
                (1 << (JavaParser.LBRACE - 33)))) !==
              0) ||
          _la === JavaParser.SEMI ||
          _la === JavaParser.LT ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            {
              this.state = 367;
              this.classBodyDeclaration();
            }
          }
          this.state = 372;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceDeclaration(): InterfaceDeclarationContext {
    const _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 30, JavaParser.RULE_interfaceDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 373;
        this.match(JavaParser.INTERFACE);
        this.state = 374;
        this.match(JavaParser.IDENTIFIER);
        this.state = 376;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LT) {
          {
            this.state = 375;
            this.typeParameters();
          }
        }

        this.state = 380;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.EXTENDS) {
          {
            this.state = 378;
            this.match(JavaParser.EXTENDS);
            this.state = 379;
            this.typeList();
          }
        }

        this.state = 382;
        this.interfaceBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classBody(): ClassBodyContext {
    const _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, JavaParser.RULE_classBody);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 384;
        this.match(JavaParser.LBRACE);
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.ENUM) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NATIVE))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.TRANSIENT - 33)) |
                (1 << (JavaParser.VOID - 33)) |
                (1 << (JavaParser.VOLATILE - 33)) |
                (1 << (JavaParser.LBRACE - 33)))) !==
              0) ||
          _la === JavaParser.SEMI ||
          _la === JavaParser.LT ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            {
              this.state = 385;
              this.classBodyDeclaration();
            }
          }
          this.state = 390;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 391;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceBody(): InterfaceBodyContext {
    const _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, JavaParser.RULE_interfaceBody);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 393;
        this.match(JavaParser.LBRACE);
        this.state = 397;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.DEFAULT) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.ENUM) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NATIVE))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.TRANSIENT - 33)) |
                (1 << (JavaParser.VOID - 33)) |
                (1 << (JavaParser.VOLATILE - 33)))) !==
              0) ||
          _la === JavaParser.SEMI ||
          _la === JavaParser.LT ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            {
              this.state = 394;
              this.interfaceBodyDeclaration();
            }
          }
          this.state = 399;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 400;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classBodyDeclaration(): ClassBodyDeclarationContext {
    const _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 36, JavaParser.RULE_classBodyDeclaration);
    let _la: number;
    try {
      let _alt: number;
      this.state = 414;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 402;
            this.match(JavaParser.SEMI);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 404;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.STATIC) {
              {
                this.state = 403;
                this.match(JavaParser.STATIC);
              }
            }

            this.state = 406;
            this.block();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 410;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 407;
                    this.modifier();
                  }
                }
              }
              this.state = 412;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
            }
            this.state = 413;
            this.memberDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  memberDeclaration(): MemberDeclarationContext {
    const _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, JavaParser.RULE_memberDeclaration);
    try {
      this.state = 425;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 416;
            this.methodDeclaration();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 417;
            this.genericMethodDeclaration();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 418;
            this.fieldDeclaration();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 419;
            this.constructorDeclaration();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 420;
            this.genericConstructorDeclaration();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 421;
            this.interfaceDeclaration();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 422;
            this.annotationTypeDeclaration();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 423;
            this.classDeclaration();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 424;
            this.enumDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  methodDeclaration(): MethodDeclarationContext {
    const _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, JavaParser.RULE_methodDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 427;
        this.typeTypeOrVoid();
        this.state = 428;
        this.match(JavaParser.IDENTIFIER);
        this.state = 429;
        this.formalParameters();
        this.state = 434;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.LBRACK) {
          {
            {
              this.state = 430;
              this.match(JavaParser.LBRACK);
              this.state = 431;
              this.match(JavaParser.RBRACK);
            }
          }
          this.state = 436;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 439;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.THROWS) {
          {
            this.state = 437;
            this.match(JavaParser.THROWS);
            this.state = 438;
            this.qualifiedNameList();
          }
        }

        this.state = 441;
        this.methodBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  methodBody(): MethodBodyContext {
    const _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, JavaParser.RULE_methodBody);
    try {
      this.state = 445;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.LBRACE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 443;
            this.block();
          }
          break;
        case JavaParser.SEMI:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 444;
            this.match(JavaParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeTypeOrVoid(): TypeTypeOrVoidContext {
    const _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, JavaParser.RULE_typeTypeOrVoid);
    try {
      this.state = 449;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.SHORT:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 447;
            this.typeType();
          }
          break;
        case JavaParser.VOID:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 448;
            this.match(JavaParser.VOID);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  genericMethodDeclaration(): GenericMethodDeclarationContext {
    const _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 46, JavaParser.RULE_genericMethodDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 451;
        this.typeParameters();
        this.state = 452;
        this.methodDeclaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  genericConstructorDeclaration(): GenericConstructorDeclarationContext {
    const _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 454;
        this.typeParameters();
        this.state = 455;
        this.constructorDeclaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  constructorDeclaration(): ConstructorDeclarationContext {
    const _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 50, JavaParser.RULE_constructorDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 457;
        this.match(JavaParser.IDENTIFIER);
        this.state = 458;
        this.formalParameters();
        this.state = 461;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.THROWS) {
          {
            this.state = 459;
            this.match(JavaParser.THROWS);
            this.state = 460;
            this.qualifiedNameList();
          }
        }

        this.state = 463;
        _localctx._constructorBody = this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  fieldDeclaration(): FieldDeclarationContext {
    const _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, JavaParser.RULE_fieldDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 465;
        this.typeType();
        this.state = 466;
        this.variableDeclarators();
        this.state = 467;
        this.match(JavaParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
    const _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
    try {
      let _alt: number;
      this.state = 477;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.ABSTRACT:
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.CLASS:
        case JavaParser.DEFAULT:
        case JavaParser.DOUBLE:
        case JavaParser.ENUM:
        case JavaParser.FINAL:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.INTERFACE:
        case JavaParser.LONG:
        case JavaParser.NATIVE:
        case JavaParser.PRIVATE:
        case JavaParser.PROTECTED:
        case JavaParser.PUBLIC:
        case JavaParser.SHORT:
        case JavaParser.STATIC:
        case JavaParser.STRICTFP:
        case JavaParser.SYNCHRONIZED:
        case JavaParser.TRANSIENT:
        case JavaParser.VOID:
        case JavaParser.VOLATILE:
        case JavaParser.LT:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 472;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 469;
                    this.modifier();
                  }
                }
              }
              this.state = 474;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
            }
            this.state = 475;
            this.interfaceMemberDeclaration();
          }
          break;
        case JavaParser.SEMI:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 476;
            this.match(JavaParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
    const _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 56, JavaParser.RULE_interfaceMemberDeclaration);
    try {
      this.state = 486;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 479;
            this.constDeclaration();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 480;
            this.interfaceMethodDeclaration();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 481;
            this.genericInterfaceMethodDeclaration();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 482;
            this.interfaceDeclaration();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 483;
            this.annotationTypeDeclaration();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 484;
            this.classDeclaration();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 485;
            this.enumDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  constDeclaration(): ConstDeclarationContext {
    const _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, JavaParser.RULE_constDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 488;
        this.typeType();
        this.state = 489;
        this.constantDeclarator();
        this.state = 494;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 490;
              this.match(JavaParser.COMMA);
              this.state = 491;
              this.constantDeclarator();
            }
          }
          this.state = 496;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 497;
        this.match(JavaParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  constantDeclarator(): ConstantDeclaratorContext {
    const _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 60, JavaParser.RULE_constantDeclarator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 499;
        this.match(JavaParser.IDENTIFIER);
        this.state = 504;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.LBRACK) {
          {
            {
              this.state = 500;
              this.match(JavaParser.LBRACK);
              this.state = 501;
              this.match(JavaParser.RBRACK);
            }
          }
          this.state = 506;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 507;
        this.match(JavaParser.ASSIGN);
        this.state = 508;
        this.variableInitializer();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
    const _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 62, JavaParser.RULE_interfaceMethodDeclaration);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 513;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 510;
                this.interfaceMethodModifier();
              }
            }
          }
          this.state = 515;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
        }
        this.state = 526;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JavaParser.BOOLEAN:
          case JavaParser.BYTE:
          case JavaParser.CHAR:
          case JavaParser.DOUBLE:
          case JavaParser.FLOAT:
          case JavaParser.INT:
          case JavaParser.LONG:
          case JavaParser.SHORT:
          case JavaParser.VOID:
          case JavaParser.AT:
          case JavaParser.IDENTIFIER:
            {
              this.state = 516;
              this.typeTypeOrVoid();
            }
            break;
          case JavaParser.LT:
            {
              this.state = 517;
              this.typeParameters();
              this.state = 521;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 518;
                      this.annotation();
                    }
                  }
                }
                this.state = 523;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
              }
              this.state = 524;
              this.typeTypeOrVoid();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 528;
        this.match(JavaParser.IDENTIFIER);
        this.state = 529;
        this.formalParameters();
        this.state = 534;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.LBRACK) {
          {
            {
              this.state = 530;
              this.match(JavaParser.LBRACK);
              this.state = 531;
              this.match(JavaParser.RBRACK);
            }
          }
          this.state = 536;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 539;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.THROWS) {
          {
            this.state = 537;
            this.match(JavaParser.THROWS);
            this.state = 538;
            this.qualifiedNameList();
          }
        }

        this.state = 541;
        this.methodBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  interfaceMethodModifier(): InterfaceMethodModifierContext {
    const _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMethodModifier);
    try {
      this.state = 549;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 543;
            this.annotation();
          }
          break;
        case JavaParser.PUBLIC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 544;
            this.match(JavaParser.PUBLIC);
          }
          break;
        case JavaParser.ABSTRACT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 545;
            this.match(JavaParser.ABSTRACT);
          }
          break;
        case JavaParser.DEFAULT:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 546;
            this.match(JavaParser.DEFAULT);
          }
          break;
        case JavaParser.STATIC:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 547;
            this.match(JavaParser.STATIC);
          }
          break;
        case JavaParser.STRICTFP:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 548;
            this.match(JavaParser.STRICTFP);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
    const _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 66, JavaParser.RULE_genericInterfaceMethodDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 551;
        this.typeParameters();
        this.state = 552;
        this.interfaceMethodDeclaration();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  variableDeclarators(): VariableDeclaratorsContext {
    const _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 68, JavaParser.RULE_variableDeclarators);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 554;
        this.variableDeclarator();
        this.state = 559;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 555;
              this.match(JavaParser.COMMA);
              this.state = 556;
              this.variableDeclarator();
            }
          }
          this.state = 561;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  variableDeclarator(): VariableDeclaratorContext {
    const _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 70, JavaParser.RULE_variableDeclarator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 562;
        this.variableDeclaratorId();
        this.state = 565;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.ASSIGN) {
          {
            this.state = 563;
            this.match(JavaParser.ASSIGN);
            this.state = 564;
            this.variableInitializer();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  variableDeclaratorId(): VariableDeclaratorIdContext {
    const _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 72, JavaParser.RULE_variableDeclaratorId);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 567;
        this.match(JavaParser.IDENTIFIER);
        this.state = 572;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.LBRACK) {
          {
            {
              this.state = 568;
              this.match(JavaParser.LBRACK);
              this.state = 569;
              this.match(JavaParser.RBRACK);
            }
          }
          this.state = 574;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  variableInitializer(): VariableInitializerContext {
    const _localctx: VariableInitializerContext = new VariableInitializerContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 74, JavaParser.RULE_variableInitializer);
    try {
      this.state = 577;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.LBRACE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 575;
            this.arrayInitializer();
          }
          break;
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.NEW:
        case JavaParser.SHORT:
        case JavaParser.SUPER:
        case JavaParser.THIS:
        case JavaParser.VOID:
        case JavaParser.DECIMAL_LITERAL:
        case JavaParser.HEX_LITERAL:
        case JavaParser.OCT_LITERAL:
        case JavaParser.BINARY_LITERAL:
        case JavaParser.FLOAT_LITERAL:
        case JavaParser.HEX_FLOAT_LITERAL:
        case JavaParser.BOOL_LITERAL:
        case JavaParser.CHAR_LITERAL:
        case JavaParser.STRING_LITERAL:
        case JavaParser.NULL_LITERAL:
        case JavaParser.LPAREN:
        case JavaParser.LT:
        case JavaParser.BANG:
        case JavaParser.TILDE:
        case JavaParser.INC:
        case JavaParser.DEC:
        case JavaParser.ADD:
        case JavaParser.SUB:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 576;
            this.expression(0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  arrayInitializer(): ArrayInitializerContext {
    const _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, JavaParser.RULE_arrayInitializer);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 579;
        this.match(JavaParser.LBRACE);
        this.state = 591;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 37) & ~0x1f) === 0 &&
            ((1 << (_la - 37)) &
              ((1 << (JavaParser.SHORT - 37)) |
                (1 << (JavaParser.SUPER - 37)) |
                (1 << (JavaParser.THIS - 37)) |
                (1 << (JavaParser.VOID - 37)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                (1 << (JavaParser.HEX_LITERAL - 37)) |
                (1 << (JavaParser.OCT_LITERAL - 37)) |
                (1 << (JavaParser.BINARY_LITERAL - 37)) |
                (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.BOOL_LITERAL - 37)) |
                (1 << (JavaParser.CHAR_LITERAL - 37)) |
                (1 << (JavaParser.STRING_LITERAL - 37)) |
                (1 << (JavaParser.NULL_LITERAL - 37)) |
                (1 << (JavaParser.LPAREN - 37)) |
                (1 << (JavaParser.LBRACE - 37)))) !==
              0) ||
          (((_la - 72) & ~0x1f) === 0 &&
            ((1 << (_la - 72)) &
              ((1 << (JavaParser.LT - 72)) |
                (1 << (JavaParser.BANG - 72)) |
                (1 << (JavaParser.TILDE - 72)) |
                (1 << (JavaParser.INC - 72)) |
                (1 << (JavaParser.DEC - 72)) |
                (1 << (JavaParser.ADD - 72)) |
                (1 << (JavaParser.SUB - 72)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            this.state = 580;
            this.variableInitializer();
            this.state = 585;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 581;
                    this.match(JavaParser.COMMA);
                    this.state = 582;
                    this.variableInitializer();
                  }
                }
              }
              this.state = 587;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
            }
            this.state = 589;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.COMMA) {
              {
                this.state = 588;
                this.match(JavaParser.COMMA);
              }
            }
          }
        }

        this.state = 593;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classOrInterfaceType(): ClassOrInterfaceTypeContext {
    const _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 78, JavaParser.RULE_classOrInterfaceType);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 595;
        this.match(JavaParser.IDENTIFIER);
        this.state = 597;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
          case 1:
            {
              this.state = 596;
              this.typeArguments();
            }
            break;
        }
        this.state = 606;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 599;
                this.match(JavaParser.DOT);
                this.state = 600;
                this.match(JavaParser.IDENTIFIER);
                this.state = 602;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                  case 1:
                    {
                      this.state = 601;
                      this.typeArguments();
                    }
                    break;
                }
              }
            }
          }
          this.state = 608;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeArgument(): TypeArgumentContext {
    const _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, JavaParser.RULE_typeArgument);
    let _la: number;
    try {
      this.state = 615;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.SHORT:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 609;
            this.typeType();
          }
          break;
        case JavaParser.QUESTION:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 610;
            this.match(JavaParser.QUESTION);
            this.state = 613;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
              {
                this.state = 611;
                _la = this._input.LA(1);
                if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 612;
                this.typeType();
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  qualifiedNameList(): QualifiedNameListContext {
    const _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, JavaParser.RULE_qualifiedNameList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 617;
        this.qualifiedName();
        this.state = 622;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 618;
              this.match(JavaParser.COMMA);
              this.state = 619;
              this.qualifiedName();
            }
          }
          this.state = 624;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  formalParameters(): FormalParametersContext {
    const _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, JavaParser.RULE_formalParameters);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 625;
        this.match(JavaParser.LPAREN);
        this.state = 627;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.LONG))) !==
              0) ||
          _la === JavaParser.SHORT ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            this.state = 626;
            this.formalParameterList();
          }
        }

        this.state = 629;
        this.match(JavaParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  formalParameterList(): FormalParameterListContext {
    const _localctx: FormalParameterListContext = new FormalParameterListContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 86, JavaParser.RULE_formalParameterList);
    let _la: number;
    try {
      let _alt: number;
      this.state = 644;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 631;
            this.formalParameter();
            this.state = 636;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 632;
                    this.match(JavaParser.COMMA);
                    this.state = 633;
                    this.formalParameter();
                  }
                }
              }
              this.state = 638;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
            }
            this.state = 641;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.COMMA) {
              {
                this.state = 639;
                this.match(JavaParser.COMMA);
                this.state = 640;
                this.lastFormalParameter();
              }
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 643;
            this.lastFormalParameter();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  formalParameter(): FormalParameterContext {
    const _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, JavaParser.RULE_formalParameter);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 649;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 646;
                this.variableModifier();
              }
            }
          }
          this.state = 651;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
        }
        this.state = 652;
        this.typeType();
        this.state = 653;
        this.variableDeclaratorId();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  lastFormalParameter(): LastFormalParameterContext {
    const _localctx: LastFormalParameterContext = new LastFormalParameterContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 90, JavaParser.RULE_lastFormalParameter);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 658;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 655;
                this.variableModifier();
              }
            }
          }
          this.state = 660;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
        }
        this.state = 661;
        this.typeType();
        this.state = 662;
        this.match(JavaParser.ELLIPSIS);
        this.state = 663;
        this.variableDeclaratorId();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  qualifiedName(): QualifiedNameContext {
    const _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedName);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 665;
        this.match(JavaParser.IDENTIFIER);
        this.state = 670;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 666;
                this.match(JavaParser.DOT);
                this.state = 667;
                this.match(JavaParser.IDENTIFIER);
              }
            }
          }
          this.state = 672;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  literal(): LiteralContext {
    const _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, JavaParser.RULE_literal);
    try {
      this.state = 679;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.DECIMAL_LITERAL:
        case JavaParser.HEX_LITERAL:
        case JavaParser.OCT_LITERAL:
        case JavaParser.BINARY_LITERAL:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 673;
            this.integerLiteral();
          }
          break;
        case JavaParser.FLOAT_LITERAL:
        case JavaParser.HEX_FLOAT_LITERAL:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 674;
            this.floatLiteral();
          }
          break;
        case JavaParser.CHAR_LITERAL:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 675;
            this.match(JavaParser.CHAR_LITERAL);
          }
          break;
        case JavaParser.STRING_LITERAL:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 676;
            this.match(JavaParser.STRING_LITERAL);
          }
          break;
        case JavaParser.BOOL_LITERAL:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 677;
            this.match(JavaParser.BOOL_LITERAL);
          }
          break;
        case JavaParser.NULL_LITERAL:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 678;
            this.match(JavaParser.NULL_LITERAL);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  integerLiteral(): IntegerLiteralContext {
    const _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, JavaParser.RULE_integerLiteral);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 681;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 51) & ~0x1f) === 0 &&
            ((1 << (_la - 51)) &
              ((1 << (JavaParser.DECIMAL_LITERAL - 51)) |
                (1 << (JavaParser.HEX_LITERAL - 51)) |
                (1 << (JavaParser.OCT_LITERAL - 51)) |
                (1 << (JavaParser.BINARY_LITERAL - 51)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  floatLiteral(): FloatLiteralContext {
    const _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, JavaParser.RULE_floatLiteral);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 683;
        _la = this._input.LA(1);
        if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotation(): AnnotationContext {
    const _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, JavaParser.RULE_annotation);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 685;
        this.match(JavaParser.AT);
        this.state = 686;
        this.qualifiedName();
        this.state = 693;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LPAREN) {
          {
            this.state = 687;
            this.match(JavaParser.LPAREN);
            this.state = 690;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
              case 1:
                {
                  this.state = 688;
                  this.elementValuePairs();
                }
                break;

              case 2:
                {
                  this.state = 689;
                  this.elementValue();
                }
                break;
            }
            this.state = 692;
            this.match(JavaParser.RPAREN);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  elementValuePairs(): ElementValuePairsContext {
    const _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, JavaParser.RULE_elementValuePairs);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 695;
        this.elementValuePair();
        this.state = 700;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 696;
              this.match(JavaParser.COMMA);
              this.state = 697;
              this.elementValuePair();
            }
          }
          this.state = 702;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  elementValuePair(): ElementValuePairContext {
    const _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, JavaParser.RULE_elementValuePair);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 703;
        this.match(JavaParser.IDENTIFIER);
        this.state = 704;
        this.match(JavaParser.ASSIGN);
        this.state = 705;
        this.elementValue();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  elementValue(): ElementValueContext {
    const _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, JavaParser.RULE_elementValue);
    try {
      this.state = 710;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 707;
            this.expression(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 708;
            this.annotation();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 709;
            this.elementValueArrayInitializer();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  elementValueArrayInitializer(): ElementValueArrayInitializerContext {
    const _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 108, JavaParser.RULE_elementValueArrayInitializer);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 712;
        this.match(JavaParser.LBRACE);
        this.state = 721;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 37) & ~0x1f) === 0 &&
            ((1 << (_la - 37)) &
              ((1 << (JavaParser.SHORT - 37)) |
                (1 << (JavaParser.SUPER - 37)) |
                (1 << (JavaParser.THIS - 37)) |
                (1 << (JavaParser.VOID - 37)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                (1 << (JavaParser.HEX_LITERAL - 37)) |
                (1 << (JavaParser.OCT_LITERAL - 37)) |
                (1 << (JavaParser.BINARY_LITERAL - 37)) |
                (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.BOOL_LITERAL - 37)) |
                (1 << (JavaParser.CHAR_LITERAL - 37)) |
                (1 << (JavaParser.STRING_LITERAL - 37)) |
                (1 << (JavaParser.NULL_LITERAL - 37)) |
                (1 << (JavaParser.LPAREN - 37)) |
                (1 << (JavaParser.LBRACE - 37)))) !==
              0) ||
          (((_la - 72) & ~0x1f) === 0 &&
            ((1 << (_la - 72)) &
              ((1 << (JavaParser.LT - 72)) |
                (1 << (JavaParser.BANG - 72)) |
                (1 << (JavaParser.TILDE - 72)) |
                (1 << (JavaParser.INC - 72)) |
                (1 << (JavaParser.DEC - 72)) |
                (1 << (JavaParser.ADD - 72)) |
                (1 << (JavaParser.SUB - 72)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            this.state = 713;
            this.elementValue();
            this.state = 718;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 714;
                    this.match(JavaParser.COMMA);
                    this.state = 715;
                    this.elementValue();
                  }
                }
              }
              this.state = 720;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
            }
          }
        }

        this.state = 724;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.COMMA) {
          {
            this.state = 723;
            this.match(JavaParser.COMMA);
          }
        }

        this.state = 726;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
    const _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 110, JavaParser.RULE_annotationTypeDeclaration);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 728;
        this.match(JavaParser.AT);
        this.state = 729;
        this.match(JavaParser.INTERFACE);
        this.state = 730;
        this.match(JavaParser.IDENTIFIER);
        this.state = 731;
        this.annotationTypeBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationTypeBody(): AnnotationTypeBodyContext {
    const _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 112, JavaParser.RULE_annotationTypeBody);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 733;
        this.match(JavaParser.LBRACE);
        this.state = 737;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.ENUM) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NATIVE))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.TRANSIENT - 33)) |
                (1 << (JavaParser.VOLATILE - 33)))) !==
              0) ||
          _la === JavaParser.SEMI ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            {
              this.state = 734;
              this.annotationTypeElementDeclaration();
            }
          }
          this.state = 739;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 740;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
    const _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 114, JavaParser.RULE_annotationTypeElementDeclaration);
    try {
      let _alt: number;
      this.state = 750;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.ABSTRACT:
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.CLASS:
        case JavaParser.DOUBLE:
        case JavaParser.ENUM:
        case JavaParser.FINAL:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.INTERFACE:
        case JavaParser.LONG:
        case JavaParser.NATIVE:
        case JavaParser.PRIVATE:
        case JavaParser.PROTECTED:
        case JavaParser.PUBLIC:
        case JavaParser.SHORT:
        case JavaParser.STATIC:
        case JavaParser.STRICTFP:
        case JavaParser.SYNCHRONIZED:
        case JavaParser.TRANSIENT:
        case JavaParser.VOLATILE:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 745;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 742;
                    this.modifier();
                  }
                }
              }
              this.state = 747;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
            }
            this.state = 748;
            this.annotationTypeElementRest();
          }
          break;
        case JavaParser.SEMI:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 749;
            this.match(JavaParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationTypeElementRest(): AnnotationTypeElementRestContext {
    const _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 116, JavaParser.RULE_annotationTypeElementRest);
    try {
      this.state = 772;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 752;
            this.typeType();
            this.state = 753;
            this.annotationMethodOrConstantRest();
            this.state = 754;
            this.match(JavaParser.SEMI);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 756;
            this.classDeclaration();
            this.state = 758;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
              case 1:
                {
                  this.state = 757;
                  this.match(JavaParser.SEMI);
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 760;
            this.interfaceDeclaration();
            this.state = 762;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
              case 1:
                {
                  this.state = 761;
                  this.match(JavaParser.SEMI);
                }
                break;
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 764;
            this.enumDeclaration();
            this.state = 766;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
              case 1:
                {
                  this.state = 765;
                  this.match(JavaParser.SEMI);
                }
                break;
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 768;
            this.annotationTypeDeclaration();
            this.state = 770;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
              case 1:
                {
                  this.state = 769;
                  this.match(JavaParser.SEMI);
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
    const _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 118, JavaParser.RULE_annotationMethodOrConstantRest);
    try {
      this.state = 776;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 774;
            this.annotationMethodRest();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 775;
            this.annotationConstantRest();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationMethodRest(): AnnotationMethodRestContext {
    const _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 120, JavaParser.RULE_annotationMethodRest);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 778;
        this.match(JavaParser.IDENTIFIER);
        this.state = 779;
        this.match(JavaParser.LPAREN);
        this.state = 780;
        this.match(JavaParser.RPAREN);
        this.state = 782;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.DEFAULT) {
          {
            this.state = 781;
            this.defaultValue();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  annotationConstantRest(): AnnotationConstantRestContext {
    const _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 122, JavaParser.RULE_annotationConstantRest);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 784;
        this.variableDeclarators();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  defaultValue(): DefaultValueContext {
    const _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, JavaParser.RULE_defaultValue);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 786;
        this.match(JavaParser.DEFAULT);
        this.state = 787;
        this.elementValue();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  block(): BlockContext {
    const _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 126, JavaParser.RULE_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 789;
        this.match(JavaParser.LBRACE);
        this.state = 793;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.ASSERT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BREAK) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.CONTINUE) |
                (1 << JavaParser.DO) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.FOR) |
                (1 << JavaParser.IF) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.RETURN - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SUPER - 33)) |
                (1 << (JavaParser.SWITCH - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.THIS - 33)) |
                (1 << (JavaParser.THROW - 33)) |
                (1 << (JavaParser.TRY - 33)) |
                (1 << (JavaParser.VOID - 33)) |
                (1 << (JavaParser.WHILE - 33)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 33)) |
                (1 << (JavaParser.HEX_LITERAL - 33)) |
                (1 << (JavaParser.OCT_LITERAL - 33)) |
                (1 << (JavaParser.BINARY_LITERAL - 33)) |
                (1 << (JavaParser.FLOAT_LITERAL - 33)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) |
                (1 << (JavaParser.BOOL_LITERAL - 33)) |
                (1 << (JavaParser.CHAR_LITERAL - 33)) |
                (1 << (JavaParser.STRING_LITERAL - 33)) |
                (1 << (JavaParser.NULL_LITERAL - 33)) |
                (1 << (JavaParser.LPAREN - 33)) |
                (1 << (JavaParser.LBRACE - 33)))) !==
              0) ||
          (((_la - 67) & ~0x1f) === 0 &&
            ((1 << (_la - 67)) &
              ((1 << (JavaParser.SEMI - 67)) |
                (1 << (JavaParser.LT - 67)) |
                (1 << (JavaParser.BANG - 67)) |
                (1 << (JavaParser.TILDE - 67)) |
                (1 << (JavaParser.INC - 67)) |
                (1 << (JavaParser.DEC - 67)) |
                (1 << (JavaParser.ADD - 67)) |
                (1 << (JavaParser.SUB - 67)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            {
              this.state = 790;
              this.blockStatement();
            }
          }
          this.state = 795;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 796;
        this.match(JavaParser.RBRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  blockStatement(): BlockStatementContext {
    const _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 128, JavaParser.RULE_blockStatement);
    try {
      this.state = 803;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 798;
            this.localVariableDeclaration();
            this.state = 799;
            this.match(JavaParser.SEMI);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 801;
            this.statement();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 802;
            this.localTypeDeclaration();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  localVariableDeclaration(): LocalVariableDeclarationContext {
    const _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 130, JavaParser.RULE_localVariableDeclaration);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 808;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 805;
                this.variableModifier();
              }
            }
          }
          this.state = 810;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
        }
        this.state = 811;
        this.typeType();
        this.state = 812;
        this.variableDeclarators();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  localTypeDeclaration(): LocalTypeDeclarationContext {
    const _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 132, JavaParser.RULE_localTypeDeclaration);
    let _la: number;
    try {
      this.state = 825;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.ABSTRACT:
        case JavaParser.CLASS:
        case JavaParser.FINAL:
        case JavaParser.INTERFACE:
        case JavaParser.PRIVATE:
        case JavaParser.PROTECTED:
        case JavaParser.PUBLIC:
        case JavaParser.STATIC:
        case JavaParser.STRICTFP:
        case JavaParser.AT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 817;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (
              _la === JavaParser.ABSTRACT ||
              _la === JavaParser.FINAL ||
              (((_la - 33) & ~0x1f) === 0 &&
                ((1 << (_la - 33)) &
                  ((1 << (JavaParser.PRIVATE - 33)) |
                    (1 << (JavaParser.PROTECTED - 33)) |
                    (1 << (JavaParser.PUBLIC - 33)) |
                    (1 << (JavaParser.STATIC - 33)) |
                    (1 << (JavaParser.STRICTFP - 33)))) !==
                  0) ||
              _la === JavaParser.AT
            ) {
              {
                {
                  this.state = 814;
                  this.classOrInterfaceModifier();
                }
              }
              this.state = 819;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 822;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JavaParser.CLASS:
                {
                  this.state = 820;
                  this.classDeclaration();
                }
                break;
              case JavaParser.INTERFACE:
                {
                  this.state = 821;
                  this.interfaceDeclaration();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        case JavaParser.SEMI:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 824;
            this.match(JavaParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, JavaParser.RULE_statement);
    let _la: number;
    try {
      let _alt: number;
      this.state = 931;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 827;
            _localctx._blockLabel = this.block();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 828;
            this.match(JavaParser.ASSERT);
            this.state = 829;
            this.expression(0);
            this.state = 832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.COLON) {
              {
                this.state = 830;
                this.match(JavaParser.COLON);
                this.state = 831;
                this.expression(0);
              }
            }

            this.state = 834;
            this.match(JavaParser.SEMI);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 836;
            this.match(JavaParser.IF);
            this.state = 837;
            this.parExpression();
            this.state = 838;
            this.statement();
            this.state = 841;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
              case 1:
                {
                  this.state = 839;
                  this.match(JavaParser.ELSE);
                  this.state = 840;
                  this.statement();
                }
                break;
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 843;
            this.match(JavaParser.FOR);
            this.state = 844;
            this.match(JavaParser.LPAREN);
            this.state = 845;
            this.forControl();
            this.state = 846;
            this.match(JavaParser.RPAREN);
            this.state = 847;
            this.statement();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 849;
            this.match(JavaParser.WHILE);
            this.state = 850;
            this.parExpression();
            this.state = 851;
            this.statement();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 853;
            this.match(JavaParser.DO);
            this.state = 854;
            this.statement();
            this.state = 855;
            this.match(JavaParser.WHILE);
            this.state = 856;
            this.parExpression();
            this.state = 857;
            this.match(JavaParser.SEMI);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 859;
            this.match(JavaParser.TRY);
            this.state = 860;
            this.block();
            this.state = 870;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JavaParser.CATCH:
                {
                  this.state = 862;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  do {
                    {
                      {
                        this.state = 861;
                        this.catchClause();
                      }
                    }
                    this.state = 864;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  } while (_la === JavaParser.CATCH);
                  this.state = 867;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === JavaParser.FINALLY) {
                    {
                      this.state = 866;
                      this.finallyBlock();
                    }
                  }
                }
                break;
              case JavaParser.FINALLY:
                {
                  this.state = 869;
                  this.finallyBlock();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 872;
            this.match(JavaParser.TRY);
            this.state = 873;
            this.resourceSpecification();
            this.state = 874;
            this.block();
            this.state = 878;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === JavaParser.CATCH) {
              {
                {
                  this.state = 875;
                  this.catchClause();
                }
              }
              this.state = 880;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 882;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.FINALLY) {
              {
                this.state = 881;
                this.finallyBlock();
              }
            }
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 884;
            this.match(JavaParser.SWITCH);
            this.state = 885;
            this.parExpression();
            this.state = 886;
            this.match(JavaParser.LBRACE);
            this.state = 890;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 887;
                    this.switchBlockStatementGroup();
                  }
                }
              }
              this.state = 892;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
            }
            this.state = 896;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
              {
                {
                  this.state = 893;
                  this.switchLabel();
                }
              }
              this.state = 898;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 899;
            this.match(JavaParser.RBRACE);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 901;
            this.match(JavaParser.SYNCHRONIZED);
            this.state = 902;
            this.parExpression();
            this.state = 903;
            this.block();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 905;
            this.match(JavaParser.RETURN);
            this.state = 907;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << JavaParser.BOOLEAN) |
                    (1 << JavaParser.BYTE) |
                    (1 << JavaParser.CHAR) |
                    (1 << JavaParser.DOUBLE) |
                    (1 << JavaParser.FLOAT) |
                    (1 << JavaParser.INT) |
                    (1 << JavaParser.LONG) |
                    (1 << JavaParser.NEW))) !==
                  0) ||
              (((_la - 37) & ~0x1f) === 0 &&
                ((1 << (_la - 37)) &
                  ((1 << (JavaParser.SHORT - 37)) |
                    (1 << (JavaParser.SUPER - 37)) |
                    (1 << (JavaParser.THIS - 37)) |
                    (1 << (JavaParser.VOID - 37)) |
                    (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_LITERAL - 37)) |
                    (1 << (JavaParser.OCT_LITERAL - 37)) |
                    (1 << (JavaParser.BINARY_LITERAL - 37)) |
                    (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.BOOL_LITERAL - 37)) |
                    (1 << (JavaParser.CHAR_LITERAL - 37)) |
                    (1 << (JavaParser.STRING_LITERAL - 37)) |
                    (1 << (JavaParser.NULL_LITERAL - 37)) |
                    (1 << (JavaParser.LPAREN - 37)))) !==
                  0) ||
              (((_la - 72) & ~0x1f) === 0 &&
                ((1 << (_la - 72)) &
                  ((1 << (JavaParser.LT - 72)) |
                    (1 << (JavaParser.BANG - 72)) |
                    (1 << (JavaParser.TILDE - 72)) |
                    (1 << (JavaParser.INC - 72)) |
                    (1 << (JavaParser.DEC - 72)) |
                    (1 << (JavaParser.ADD - 72)) |
                    (1 << (JavaParser.SUB - 72)))) !==
                  0) ||
              _la === JavaParser.AT ||
              _la === JavaParser.IDENTIFIER
            ) {
              {
                this.state = 906;
                this.expression(0);
              }
            }

            this.state = 909;
            this.match(JavaParser.SEMI);
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 910;
            this.match(JavaParser.THROW);
            this.state = 911;
            this.expression(0);
            this.state = 912;
            this.match(JavaParser.SEMI);
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 914;
            this.match(JavaParser.BREAK);
            this.state = 916;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.IDENTIFIER) {
              {
                this.state = 915;
                this.match(JavaParser.IDENTIFIER);
              }
            }

            this.state = 918;
            this.match(JavaParser.SEMI);
          }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 919;
            this.match(JavaParser.CONTINUE);
            this.state = 921;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.IDENTIFIER) {
              {
                this.state = 920;
                this.match(JavaParser.IDENTIFIER);
              }
            }

            this.state = 923;
            this.match(JavaParser.SEMI);
          }
          break;

        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 924;
            this.match(JavaParser.SEMI);
          }
          break;

        case 16:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 925;
            _localctx._statementExpression = this.expression(0);
            this.state = 926;
            this.match(JavaParser.SEMI);
          }
          break;

        case 17:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 928;
            _localctx._identifierLabel = this.match(JavaParser.IDENTIFIER);
            this.state = 929;
            this.match(JavaParser.COLON);
            this.state = 930;
            this.statement();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  catchClause(): CatchClauseContext {
    const _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, JavaParser.RULE_catchClause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 933;
        this.match(JavaParser.CATCH);
        this.state = 934;
        this.match(JavaParser.LPAREN);
        this.state = 938;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
          {
            {
              this.state = 935;
              this.variableModifier();
            }
          }
          this.state = 940;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 941;
        this.catchType();
        this.state = 942;
        this.match(JavaParser.IDENTIFIER);
        this.state = 943;
        this.match(JavaParser.RPAREN);
        this.state = 944;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  catchType(): CatchTypeContext {
    const _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, JavaParser.RULE_catchType);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 946;
        this.qualifiedName();
        this.state = 951;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.BITOR) {
          {
            {
              this.state = 947;
              this.match(JavaParser.BITOR);
              this.state = 948;
              this.qualifiedName();
            }
          }
          this.state = 953;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  finallyBlock(): FinallyBlockContext {
    const _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, JavaParser.RULE_finallyBlock);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 954;
        this.match(JavaParser.FINALLY);
        this.state = 955;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  resourceSpecification(): ResourceSpecificationContext {
    const _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 142, JavaParser.RULE_resourceSpecification);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 957;
        this.match(JavaParser.LPAREN);
        this.state = 958;
        this.resources();
        this.state = 960;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.SEMI) {
          {
            this.state = 959;
            this.match(JavaParser.SEMI);
          }
        }

        this.state = 962;
        this.match(JavaParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  resources(): ResourcesContext {
    const _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, JavaParser.RULE_resources);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 964;
        this.resource();
        this.state = 969;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 965;
                this.match(JavaParser.SEMI);
                this.state = 966;
                this.resource();
              }
            }
          }
          this.state = 971;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  resource(): ResourceContext {
    const _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, JavaParser.RULE_resource);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 975;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
          {
            {
              this.state = 972;
              this.variableModifier();
            }
          }
          this.state = 977;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 978;
        this.classOrInterfaceType();
        this.state = 979;
        this.variableDeclaratorId();
        this.state = 980;
        this.match(JavaParser.ASSIGN);
        this.state = 981;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
    const _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 148, JavaParser.RULE_switchBlockStatementGroup);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 984;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 983;
              this.switchLabel();
            }
          }
          this.state = 986;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
        this.state = 989;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 988;
              this.blockStatement();
            }
          }
          this.state = 991;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.ABSTRACT) |
                (1 << JavaParser.ASSERT) |
                (1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BREAK) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.CLASS) |
                (1 << JavaParser.CONTINUE) |
                (1 << JavaParser.DO) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FINAL) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.FOR) |
                (1 << JavaParser.IF) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.INTERFACE) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (JavaParser.PRIVATE - 33)) |
                (1 << (JavaParser.PROTECTED - 33)) |
                (1 << (JavaParser.PUBLIC - 33)) |
                (1 << (JavaParser.RETURN - 33)) |
                (1 << (JavaParser.SHORT - 33)) |
                (1 << (JavaParser.STATIC - 33)) |
                (1 << (JavaParser.STRICTFP - 33)) |
                (1 << (JavaParser.SUPER - 33)) |
                (1 << (JavaParser.SWITCH - 33)) |
                (1 << (JavaParser.SYNCHRONIZED - 33)) |
                (1 << (JavaParser.THIS - 33)) |
                (1 << (JavaParser.THROW - 33)) |
                (1 << (JavaParser.TRY - 33)) |
                (1 << (JavaParser.VOID - 33)) |
                (1 << (JavaParser.WHILE - 33)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 33)) |
                (1 << (JavaParser.HEX_LITERAL - 33)) |
                (1 << (JavaParser.OCT_LITERAL - 33)) |
                (1 << (JavaParser.BINARY_LITERAL - 33)) |
                (1 << (JavaParser.FLOAT_LITERAL - 33)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 33)) |
                (1 << (JavaParser.BOOL_LITERAL - 33)) |
                (1 << (JavaParser.CHAR_LITERAL - 33)) |
                (1 << (JavaParser.STRING_LITERAL - 33)) |
                (1 << (JavaParser.NULL_LITERAL - 33)) |
                (1 << (JavaParser.LPAREN - 33)) |
                (1 << (JavaParser.LBRACE - 33)))) !==
              0) ||
          (((_la - 67) & ~0x1f) === 0 &&
            ((1 << (_la - 67)) &
              ((1 << (JavaParser.SEMI - 67)) |
                (1 << (JavaParser.LT - 67)) |
                (1 << (JavaParser.BANG - 67)) |
                (1 << (JavaParser.TILDE - 67)) |
                (1 << (JavaParser.INC - 67)) |
                (1 << (JavaParser.DEC - 67)) |
                (1 << (JavaParser.ADD - 67)) |
                (1 << (JavaParser.SUB - 67)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        );
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  switchLabel(): SwitchLabelContext {
    const _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, JavaParser.RULE_switchLabel);
    try {
      this.state = 1001;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.CASE:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 993;
            this.match(JavaParser.CASE);
            this.state = 996;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
              case 1:
                {
                  this.state = 994;
                  _localctx._constantExpression = this.expression(0);
                }
                break;

              case 2:
                {
                  this.state = 995;
                  _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                }
                break;
            }
            this.state = 998;
            this.match(JavaParser.COLON);
          }
          break;
        case JavaParser.DEFAULT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 999;
            this.match(JavaParser.DEFAULT);
            this.state = 1000;
            this.match(JavaParser.COLON);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  forControl(): ForControlContext {
    const _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, JavaParser.RULE_forControl);
    let _la: number;
    try {
      this.state = 1015;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1003;
            this.enhancedForControl();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1005;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << JavaParser.BOOLEAN) |
                    (1 << JavaParser.BYTE) |
                    (1 << JavaParser.CHAR) |
                    (1 << JavaParser.DOUBLE) |
                    (1 << JavaParser.FINAL) |
                    (1 << JavaParser.FLOAT) |
                    (1 << JavaParser.INT) |
                    (1 << JavaParser.LONG) |
                    (1 << JavaParser.NEW))) !==
                  0) ||
              (((_la - 37) & ~0x1f) === 0 &&
                ((1 << (_la - 37)) &
                  ((1 << (JavaParser.SHORT - 37)) |
                    (1 << (JavaParser.SUPER - 37)) |
                    (1 << (JavaParser.THIS - 37)) |
                    (1 << (JavaParser.VOID - 37)) |
                    (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_LITERAL - 37)) |
                    (1 << (JavaParser.OCT_LITERAL - 37)) |
                    (1 << (JavaParser.BINARY_LITERAL - 37)) |
                    (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.BOOL_LITERAL - 37)) |
                    (1 << (JavaParser.CHAR_LITERAL - 37)) |
                    (1 << (JavaParser.STRING_LITERAL - 37)) |
                    (1 << (JavaParser.NULL_LITERAL - 37)) |
                    (1 << (JavaParser.LPAREN - 37)))) !==
                  0) ||
              (((_la - 72) & ~0x1f) === 0 &&
                ((1 << (_la - 72)) &
                  ((1 << (JavaParser.LT - 72)) |
                    (1 << (JavaParser.BANG - 72)) |
                    (1 << (JavaParser.TILDE - 72)) |
                    (1 << (JavaParser.INC - 72)) |
                    (1 << (JavaParser.DEC - 72)) |
                    (1 << (JavaParser.ADD - 72)) |
                    (1 << (JavaParser.SUB - 72)))) !==
                  0) ||
              _la === JavaParser.AT ||
              _la === JavaParser.IDENTIFIER
            ) {
              {
                this.state = 1004;
                this.forInit();
              }
            }

            this.state = 1007;
            this.match(JavaParser.SEMI);
            this.state = 1009;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << JavaParser.BOOLEAN) |
                    (1 << JavaParser.BYTE) |
                    (1 << JavaParser.CHAR) |
                    (1 << JavaParser.DOUBLE) |
                    (1 << JavaParser.FLOAT) |
                    (1 << JavaParser.INT) |
                    (1 << JavaParser.LONG) |
                    (1 << JavaParser.NEW))) !==
                  0) ||
              (((_la - 37) & ~0x1f) === 0 &&
                ((1 << (_la - 37)) &
                  ((1 << (JavaParser.SHORT - 37)) |
                    (1 << (JavaParser.SUPER - 37)) |
                    (1 << (JavaParser.THIS - 37)) |
                    (1 << (JavaParser.VOID - 37)) |
                    (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_LITERAL - 37)) |
                    (1 << (JavaParser.OCT_LITERAL - 37)) |
                    (1 << (JavaParser.BINARY_LITERAL - 37)) |
                    (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.BOOL_LITERAL - 37)) |
                    (1 << (JavaParser.CHAR_LITERAL - 37)) |
                    (1 << (JavaParser.STRING_LITERAL - 37)) |
                    (1 << (JavaParser.NULL_LITERAL - 37)) |
                    (1 << (JavaParser.LPAREN - 37)))) !==
                  0) ||
              (((_la - 72) & ~0x1f) === 0 &&
                ((1 << (_la - 72)) &
                  ((1 << (JavaParser.LT - 72)) |
                    (1 << (JavaParser.BANG - 72)) |
                    (1 << (JavaParser.TILDE - 72)) |
                    (1 << (JavaParser.INC - 72)) |
                    (1 << (JavaParser.DEC - 72)) |
                    (1 << (JavaParser.ADD - 72)) |
                    (1 << (JavaParser.SUB - 72)))) !==
                  0) ||
              _la === JavaParser.AT ||
              _la === JavaParser.IDENTIFIER
            ) {
              {
                this.state = 1008;
                this.expression(0);
              }
            }

            this.state = 1011;
            this.match(JavaParser.SEMI);
            this.state = 1013;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << JavaParser.BOOLEAN) |
                    (1 << JavaParser.BYTE) |
                    (1 << JavaParser.CHAR) |
                    (1 << JavaParser.DOUBLE) |
                    (1 << JavaParser.FLOAT) |
                    (1 << JavaParser.INT) |
                    (1 << JavaParser.LONG) |
                    (1 << JavaParser.NEW))) !==
                  0) ||
              (((_la - 37) & ~0x1f) === 0 &&
                ((1 << (_la - 37)) &
                  ((1 << (JavaParser.SHORT - 37)) |
                    (1 << (JavaParser.SUPER - 37)) |
                    (1 << (JavaParser.THIS - 37)) |
                    (1 << (JavaParser.VOID - 37)) |
                    (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_LITERAL - 37)) |
                    (1 << (JavaParser.OCT_LITERAL - 37)) |
                    (1 << (JavaParser.BINARY_LITERAL - 37)) |
                    (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                    (1 << (JavaParser.BOOL_LITERAL - 37)) |
                    (1 << (JavaParser.CHAR_LITERAL - 37)) |
                    (1 << (JavaParser.STRING_LITERAL - 37)) |
                    (1 << (JavaParser.NULL_LITERAL - 37)) |
                    (1 << (JavaParser.LPAREN - 37)))) !==
                  0) ||
              (((_la - 72) & ~0x1f) === 0 &&
                ((1 << (_la - 72)) &
                  ((1 << (JavaParser.LT - 72)) |
                    (1 << (JavaParser.BANG - 72)) |
                    (1 << (JavaParser.TILDE - 72)) |
                    (1 << (JavaParser.INC - 72)) |
                    (1 << (JavaParser.DEC - 72)) |
                    (1 << (JavaParser.ADD - 72)) |
                    (1 << (JavaParser.SUB - 72)))) !==
                  0) ||
              _la === JavaParser.AT ||
              _la === JavaParser.IDENTIFIER
            ) {
              {
                this.state = 1012;
                _localctx._forUpdate = this.expressionList();
              }
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  forInit(): ForInitContext {
    const _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
    this.enterRule(_localctx, 154, JavaParser.RULE_forInit);
    try {
      this.state = 1019;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1017;
            this.localVariableDeclaration();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1018;
            this.expressionList();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  enhancedForControl(): EnhancedForControlContext {
    const _localctx: EnhancedForControlContext = new EnhancedForControlContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 156, JavaParser.RULE_enhancedForControl);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1024;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1021;
                this.variableModifier();
              }
            }
          }
          this.state = 1026;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
        }
        this.state = 1027;
        this.typeType();
        this.state = 1028;
        this.variableDeclaratorId();
        this.state = 1029;
        this.match(JavaParser.COLON);
        this.state = 1030;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  parExpression(): ParExpressionContext {
    const _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, JavaParser.RULE_parExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1032;
        this.match(JavaParser.LPAREN);
        this.state = 1033;
        this.expression(0);
        this.state = 1034;
        this.match(JavaParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  expressionList(): ExpressionListContext {
    const _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, JavaParser.RULE_expressionList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1036;
        this.expression(0);
        this.state = 1041;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 1037;
              this.match(JavaParser.COMMA);
              this.state = 1038;
              this.expression(0);
            }
          }
          this.state = 1043;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  methodCall(): MethodCallContext {
    const _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, JavaParser.RULE_methodCall);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1044;
        this.match(JavaParser.IDENTIFIER);
        this.state = 1045;
        this.match(JavaParser.LPAREN);
        this.state = 1047;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 37) & ~0x1f) === 0 &&
            ((1 << (_la - 37)) &
              ((1 << (JavaParser.SHORT - 37)) |
                (1 << (JavaParser.SUPER - 37)) |
                (1 << (JavaParser.THIS - 37)) |
                (1 << (JavaParser.VOID - 37)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                (1 << (JavaParser.HEX_LITERAL - 37)) |
                (1 << (JavaParser.OCT_LITERAL - 37)) |
                (1 << (JavaParser.BINARY_LITERAL - 37)) |
                (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.BOOL_LITERAL - 37)) |
                (1 << (JavaParser.CHAR_LITERAL - 37)) |
                (1 << (JavaParser.STRING_LITERAL - 37)) |
                (1 << (JavaParser.NULL_LITERAL - 37)) |
                (1 << (JavaParser.LPAREN - 37)))) !==
              0) ||
          (((_la - 72) & ~0x1f) === 0 &&
            ((1 << (_la - 72)) &
              ((1 << (JavaParser.LT - 72)) |
                (1 << (JavaParser.BANG - 72)) |
                (1 << (JavaParser.TILDE - 72)) |
                (1 << (JavaParser.INC - 72)) |
                (1 << (JavaParser.DEC - 72)) |
                (1 << (JavaParser.ADD - 72)) |
                (1 << (JavaParser.SUB - 72)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            this.state = 1046;
            this.expressionList();
          }
        }

        this.state = 1049;
        this.match(JavaParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  expression(): ExpressionContext;
  expression(_p: number): ExpressionContext;
  @RuleVersion(0)
  expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    const _parentctx: ParserRuleContext = this._ctx;
    const _parentState: number = this.state;
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
    let _prevctx: ExpressionContext = _localctx;
    const _startState: number = 164;
    this.enterRecursionRule(_localctx, 164, JavaParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1082;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
          case 1:
            {
              this.state = 1052;
              this.primary();
            }
            break;

          case 2:
            {
              this.state = 1053;
              this.methodCall();
            }
            break;

          case 3:
            {
              this.state = 1054;
              this.match(JavaParser.NEW);
              this.state = 1055;
              this.creator();
            }
            break;

          case 4:
            {
              this.state = 1056;
              this.match(JavaParser.LPAREN);
              this.state = 1057;
              this.typeType();
              this.state = 1058;
              this.match(JavaParser.RPAREN);
              this.state = 1059;
              this.expression(21);
            }
            break;

          case 5:
            {
              this.state = 1061;
              _localctx._prefix = this._input.LT(1);
              _la = this._input.LA(1);
              if (
                !(
                  ((_la - 83) & ~0x1f) === 0 &&
                  ((1 << (_la - 83)) &
                    ((1 << (JavaParser.INC - 83)) |
                      (1 << (JavaParser.DEC - 83)) |
                      (1 << (JavaParser.ADD - 83)) |
                      (1 << (JavaParser.SUB - 83)))) !==
                    0
                )
              ) {
                _localctx._prefix = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 1062;
              this.expression(19);
            }
            break;

          case 6:
            {
              this.state = 1063;
              _localctx._prefix = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === JavaParser.BANG || _la === JavaParser.TILDE)) {
                _localctx._prefix = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 1064;
              this.expression(18);
            }
            break;

          case 7:
            {
              this.state = 1065;
              this.lambdaExpression();
            }
            break;

          case 8:
            {
              this.state = 1066;
              this.typeType();
              this.state = 1067;
              this.match(JavaParser.COLONCOLON);
              this.state = 1073;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case JavaParser.LT:
                case JavaParser.IDENTIFIER:
                  {
                    this.state = 1069;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.LT) {
                      {
                        this.state = 1068;
                        this.typeArguments();
                      }
                    }

                    this.state = 1071;
                    this.match(JavaParser.IDENTIFIER);
                  }
                  break;
                case JavaParser.NEW:
                  {
                    this.state = 1072;
                    this.match(JavaParser.NEW);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
            break;

          case 9:
            {
              this.state = 1075;
              this.classType();
              this.state = 1076;
              this.match(JavaParser.COLONCOLON);
              this.state = 1078;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === JavaParser.LT) {
                {
                  this.state = 1077;
                  this.typeArguments();
                }
              }

              this.state = 1080;
              this.match(JavaParser.NEW);
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1164;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 1162;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1084;
                    if (!this.precpred(this._ctx, 17)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 17)');
                    }
                    this.state = 1085;
                    _localctx._bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 87) & ~0x1f) === 0 &&
                        ((1 << (_la - 87)) &
                          ((1 << (JavaParser.MUL - 87)) |
                            (1 << (JavaParser.DIV - 87)) |
                            (1 << (JavaParser.MOD - 87)))) !==
                          0
                      )
                    ) {
                      _localctx._bop = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 1086;
                    this.expression(18);
                  }
                  break;

                case 2:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1087;
                    if (!this.precpred(this._ctx, 16)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 16)');
                    }
                    this.state = 1088;
                    _localctx._bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
                      _localctx._bop = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 1089;
                    this.expression(17);
                  }
                  break;

                case 3:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1090;
                    if (!this.precpred(this._ctx, 15)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 15)');
                    }
                    this.state = 1098;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                      case 1:
                        {
                          this.state = 1091;
                          this.match(JavaParser.LT);
                          this.state = 1092;
                          this.match(JavaParser.LT);
                        }
                        break;

                      case 2:
                        {
                          this.state = 1093;
                          this.match(JavaParser.GT);
                          this.state = 1094;
                          this.match(JavaParser.GT);
                          this.state = 1095;
                          this.match(JavaParser.GT);
                        }
                        break;

                      case 3:
                        {
                          this.state = 1096;
                          this.match(JavaParser.GT);
                          this.state = 1097;
                          this.match(JavaParser.GT);
                        }
                        break;
                    }
                    this.state = 1100;
                    this.expression(16);
                  }
                  break;

                case 4:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1101;
                    if (!this.precpred(this._ctx, 14)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 14)');
                    }
                    this.state = 1102;
                    _localctx._bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 71) & ~0x1f) === 0 &&
                        ((1 << (_la - 71)) &
                          ((1 << (JavaParser.GT - 71)) |
                            (1 << (JavaParser.LT - 71)) |
                            (1 << (JavaParser.LE - 71)) |
                            (1 << (JavaParser.GE - 71)))) !==
                          0
                      )
                    ) {
                      _localctx._bop = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 1103;
                    this.expression(15);
                  }
                  break;

                case 5:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1104;
                    if (!this.precpred(this._ctx, 12)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 12)');
                    }
                    this.state = 1105;
                    _localctx._bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
                      _localctx._bop = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 1106;
                    this.expression(13);
                  }
                  break;

                case 6:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1107;
                    if (!this.precpred(this._ctx, 11)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 11)');
                    }
                    this.state = 1108;
                    _localctx._bop = this.match(JavaParser.BITAND);
                    this.state = 1109;
                    this.expression(12);
                  }
                  break;

                case 7:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1110;
                    if (!this.precpred(this._ctx, 10)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 10)');
                    }
                    this.state = 1111;
                    _localctx._bop = this.match(JavaParser.CARET);
                    this.state = 1112;
                    this.expression(11);
                  }
                  break;

                case 8:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1113;
                    if (!this.precpred(this._ctx, 9)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 9)');
                    }
                    this.state = 1114;
                    _localctx._bop = this.match(JavaParser.BITOR);
                    this.state = 1115;
                    this.expression(10);
                  }
                  break;

                case 9:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1116;
                    if (!this.precpred(this._ctx, 8)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 8)');
                    }
                    this.state = 1117;
                    _localctx._bop = this.match(JavaParser.AND);
                    this.state = 1118;
                    this.expression(9);
                  }
                  break;

                case 10:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1119;
                    if (!this.precpred(this._ctx, 7)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 7)');
                    }
                    this.state = 1120;
                    _localctx._bop = this.match(JavaParser.OR);
                    this.state = 1121;
                    this.expression(8);
                  }
                  break;

                case 11:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1122;
                    if (!this.precpred(this._ctx, 6)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 6)');
                    }
                    this.state = 1123;
                    _localctx._bop = this.match(JavaParser.QUESTION);
                    this.state = 1124;
                    this.expression(0);
                    this.state = 1125;
                    this.match(JavaParser.COLON);
                    this.state = 1126;
                    this.expression(7);
                  }
                  break;

                case 12:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1128;
                    if (!this.precpred(this._ctx, 5)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 5)');
                    }
                    this.state = 1129;
                    _localctx._bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        (((_la - 70) & ~0x1f) === 0 &&
                          ((1 << (_la - 70)) &
                            ((1 << (JavaParser.ASSIGN - 70)) |
                              (1 << (JavaParser.ADD_ASSIGN - 70)) |
                              (1 << (JavaParser.SUB_ASSIGN - 70)) |
                              (1 << (JavaParser.MUL_ASSIGN - 70)) |
                              (1 << (JavaParser.DIV_ASSIGN - 70)) |
                              (1 << (JavaParser.AND_ASSIGN - 70)) |
                              (1 << (JavaParser.OR_ASSIGN - 70)) |
                              (1 << (JavaParser.XOR_ASSIGN - 70)) |
                              (1 << (JavaParser.MOD_ASSIGN - 70)) |
                              (1 << (JavaParser.LSHIFT_ASSIGN - 70)))) !==
                            0) ||
                        _la === JavaParser.RSHIFT_ASSIGN ||
                        _la === JavaParser.URSHIFT_ASSIGN
                      )
                    ) {
                      _localctx._bop = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 1130;
                    this.expression(5);
                  }
                  break;

                case 13:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1131;
                    if (!this.precpred(this._ctx, 25)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 25)');
                    }
                    this.state = 1132;
                    _localctx._bop = this.match(JavaParser.DOT);
                    this.state = 1144;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                      case 1:
                        {
                          this.state = 1133;
                          this.match(JavaParser.IDENTIFIER);
                        }
                        break;

                      case 2:
                        {
                          this.state = 1134;
                          this.methodCall();
                        }
                        break;

                      case 3:
                        {
                          this.state = 1135;
                          this.match(JavaParser.THIS);
                        }
                        break;

                      case 4:
                        {
                          this.state = 1136;
                          this.match(JavaParser.NEW);
                          this.state = 1138;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === JavaParser.LT) {
                            {
                              this.state = 1137;
                              this.nonWildcardTypeArguments();
                            }
                          }

                          this.state = 1140;
                          this.innerCreator();
                        }
                        break;

                      case 5:
                        {
                          this.state = 1141;
                          this.match(JavaParser.SUPER);
                          this.state = 1142;
                          this.superSuffix();
                        }
                        break;

                      case 6:
                        {
                          this.state = 1143;
                          this.explicitGenericInvocation();
                        }
                        break;
                    }
                  }
                  break;

                case 14:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1146;
                    if (!this.precpred(this._ctx, 24)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 24)');
                    }
                    this.state = 1147;
                    this.match(JavaParser.LBRACK);
                    this.state = 1148;
                    this.expression(0);
                    this.state = 1149;
                    this.match(JavaParser.RBRACK);
                  }
                  break;

                case 15:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1151;
                    if (!this.precpred(this._ctx, 20)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 20)');
                    }
                    this.state = 1152;
                    _localctx._postfix = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
                      _localctx._postfix = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                  }
                  break;

                case 16:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1153;
                    if (!this.precpred(this._ctx, 13)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 13)');
                    }
                    this.state = 1154;
                    _localctx._bop = this.match(JavaParser.INSTANCEOF);
                    this.state = 1155;
                    this.typeType();
                  }
                  break;

                case 17:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      JavaParser.RULE_expression,
                    );
                    this.state = 1156;
                    if (!this.precpred(this._ctx, 3)) {
                      throw new FailedPredicateException(this, 'this.precpred(this._ctx, 3)');
                    }
                    this.state = 1157;
                    this.match(JavaParser.COLONCOLON);
                    this.state = 1159;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.LT) {
                      {
                        this.state = 1158;
                        this.typeArguments();
                      }
                    }

                    this.state = 1161;
                    this.match(JavaParser.IDENTIFIER);
                  }
                  break;
              }
            }
          }
          this.state = 1166;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  @RuleVersion(0)
  lambdaExpression(): LambdaExpressionContext {
    const _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 166, JavaParser.RULE_lambdaExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1167;
        this.lambdaParameters();
        this.state = 1168;
        this.match(JavaParser.ARROW);
        this.state = 1169;
        this.lambdaBody();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  lambdaParameters(): LambdaParametersContext {
    const _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
    this.enterRule(_localctx, 168, JavaParser.RULE_lambdaParameters);
    let _la: number;
    try {
      this.state = 1187;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1171;
            this.match(JavaParser.IDENTIFIER);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1172;
            this.match(JavaParser.LPAREN);
            this.state = 1174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << JavaParser.BOOLEAN) |
                    (1 << JavaParser.BYTE) |
                    (1 << JavaParser.CHAR) |
                    (1 << JavaParser.DOUBLE) |
                    (1 << JavaParser.FINAL) |
                    (1 << JavaParser.FLOAT) |
                    (1 << JavaParser.INT) |
                    (1 << JavaParser.LONG))) !==
                  0) ||
              _la === JavaParser.SHORT ||
              _la === JavaParser.AT ||
              _la === JavaParser.IDENTIFIER
            ) {
              {
                this.state = 1173;
                this.formalParameterList();
              }
            }

            this.state = 1176;
            this.match(JavaParser.RPAREN);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1177;
            this.match(JavaParser.LPAREN);
            this.state = 1178;
            this.match(JavaParser.IDENTIFIER);
            this.state = 1183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === JavaParser.COMMA) {
              {
                {
                  this.state = 1179;
                  this.match(JavaParser.COMMA);
                  this.state = 1180;
                  this.match(JavaParser.IDENTIFIER);
                }
              }
              this.state = 1185;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1186;
            this.match(JavaParser.RPAREN);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  lambdaBody(): LambdaBodyContext {
    const _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, JavaParser.RULE_lambdaBody);
    try {
      this.state = 1191;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.NEW:
        case JavaParser.SHORT:
        case JavaParser.SUPER:
        case JavaParser.THIS:
        case JavaParser.VOID:
        case JavaParser.DECIMAL_LITERAL:
        case JavaParser.HEX_LITERAL:
        case JavaParser.OCT_LITERAL:
        case JavaParser.BINARY_LITERAL:
        case JavaParser.FLOAT_LITERAL:
        case JavaParser.HEX_FLOAT_LITERAL:
        case JavaParser.BOOL_LITERAL:
        case JavaParser.CHAR_LITERAL:
        case JavaParser.STRING_LITERAL:
        case JavaParser.NULL_LITERAL:
        case JavaParser.LPAREN:
        case JavaParser.LT:
        case JavaParser.BANG:
        case JavaParser.TILDE:
        case JavaParser.INC:
        case JavaParser.DEC:
        case JavaParser.ADD:
        case JavaParser.SUB:
        case JavaParser.AT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1189;
            this.expression(0);
          }
          break;
        case JavaParser.LBRACE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1190;
            this.block();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  primary(): PrimaryContext {
    const _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, JavaParser.RULE_primary);
    try {
      this.state = 1211;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1193;
            this.match(JavaParser.LPAREN);
            this.state = 1194;
            this.expression(0);
            this.state = 1195;
            this.match(JavaParser.RPAREN);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1197;
            this.match(JavaParser.THIS);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1198;
            this.match(JavaParser.SUPER);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1199;
            this.literal();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1200;
            this.match(JavaParser.IDENTIFIER);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1201;
            this.typeTypeOrVoid();
            this.state = 1202;
            this.match(JavaParser.DOT);
            this.state = 1203;
            this.match(JavaParser.CLASS);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1205;
            this.nonWildcardTypeArguments();
            this.state = 1209;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JavaParser.SUPER:
              case JavaParser.IDENTIFIER:
                {
                  this.state = 1206;
                  this.explicitGenericInvocationSuffix();
                }
                break;
              case JavaParser.THIS:
                {
                  this.state = 1207;
                  this.match(JavaParser.THIS);
                  this.state = 1208;
                  this.arguments();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classType(): ClassTypeContext {
    const _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, JavaParser.RULE_classType);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1216;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
          case 1:
            {
              this.state = 1213;
              this.classOrInterfaceType();
              this.state = 1214;
              this.match(JavaParser.DOT);
            }
            break;
        }
        this.state = 1221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.AT) {
          {
            {
              this.state = 1218;
              this.annotation();
            }
          }
          this.state = 1223;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1224;
        this.match(JavaParser.IDENTIFIER);
        this.state = 1226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LT) {
          {
            this.state = 1225;
            this.typeArguments();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  creator(): CreatorContext {
    const _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, JavaParser.RULE_creator);
    try {
      this.state = 1237;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.LT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1228;
            this.nonWildcardTypeArguments();
            this.state = 1229;
            this.createdName();
            this.state = 1230;
            this.classCreatorRest();
          }
          break;
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.SHORT:
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1232;
            this.createdName();
            this.state = 1235;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case JavaParser.LBRACK:
                {
                  this.state = 1233;
                  this.arrayCreatorRest();
                }
                break;
              case JavaParser.LPAREN:
                {
                  this.state = 1234;
                  this.classCreatorRest();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  createdName(): CreatedNameContext {
    const _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 178, JavaParser.RULE_createdName);
    let _la: number;
    try {
      this.state = 1254;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1239;
            this.match(JavaParser.IDENTIFIER);
            this.state = 1241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === JavaParser.LT) {
              {
                this.state = 1240;
                this.typeArgumentsOrDiamond();
              }
            }

            this.state = 1250;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === JavaParser.DOT) {
              {
                {
                  this.state = 1243;
                  this.match(JavaParser.DOT);
                  this.state = 1244;
                  this.match(JavaParser.IDENTIFIER);
                  this.state = 1246;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === JavaParser.LT) {
                    {
                      this.state = 1245;
                      this.typeArgumentsOrDiamond();
                    }
                  }
                }
              }
              this.state = 1252;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        case JavaParser.BOOLEAN:
        case JavaParser.BYTE:
        case JavaParser.CHAR:
        case JavaParser.DOUBLE:
        case JavaParser.FLOAT:
        case JavaParser.INT:
        case JavaParser.LONG:
        case JavaParser.SHORT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1253;
            this.primitiveType();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  innerCreator(): InnerCreatorContext {
    const _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 180, JavaParser.RULE_innerCreator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1256;
        this.match(JavaParser.IDENTIFIER);
        this.state = 1258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.LT) {
          {
            this.state = 1257;
            this.nonWildcardTypeArgumentsOrDiamond();
          }
        }

        this.state = 1260;
        this.classCreatorRest();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  arrayCreatorRest(): ArrayCreatorRestContext {
    const _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
    this.enterRule(_localctx, 182, JavaParser.RULE_arrayCreatorRest);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1262;
        this.match(JavaParser.LBRACK);
        this.state = 1290;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JavaParser.RBRACK:
            {
              this.state = 1263;
              this.match(JavaParser.RBRACK);
              this.state = 1268;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === JavaParser.LBRACK) {
                {
                  {
                    this.state = 1264;
                    this.match(JavaParser.LBRACK);
                    this.state = 1265;
                    this.match(JavaParser.RBRACK);
                  }
                }
                this.state = 1270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 1271;
              this.arrayInitializer();
            }
            break;
          case JavaParser.BOOLEAN:
          case JavaParser.BYTE:
          case JavaParser.CHAR:
          case JavaParser.DOUBLE:
          case JavaParser.FLOAT:
          case JavaParser.INT:
          case JavaParser.LONG:
          case JavaParser.NEW:
          case JavaParser.SHORT:
          case JavaParser.SUPER:
          case JavaParser.THIS:
          case JavaParser.VOID:
          case JavaParser.DECIMAL_LITERAL:
          case JavaParser.HEX_LITERAL:
          case JavaParser.OCT_LITERAL:
          case JavaParser.BINARY_LITERAL:
          case JavaParser.FLOAT_LITERAL:
          case JavaParser.HEX_FLOAT_LITERAL:
          case JavaParser.BOOL_LITERAL:
          case JavaParser.CHAR_LITERAL:
          case JavaParser.STRING_LITERAL:
          case JavaParser.NULL_LITERAL:
          case JavaParser.LPAREN:
          case JavaParser.LT:
          case JavaParser.BANG:
          case JavaParser.TILDE:
          case JavaParser.INC:
          case JavaParser.DEC:
          case JavaParser.ADD:
          case JavaParser.SUB:
          case JavaParser.AT:
          case JavaParser.IDENTIFIER:
            {
              this.state = 1272;
              this.expression(0);
              this.state = 1273;
              this.match(JavaParser.RBRACK);
              this.state = 1280;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 1274;
                      this.match(JavaParser.LBRACK);
                      this.state = 1275;
                      this.expression(0);
                      this.state = 1276;
                      this.match(JavaParser.RBRACK);
                    }
                  }
                }
                this.state = 1282;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
              }
              this.state = 1287;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 1283;
                      this.match(JavaParser.LBRACK);
                      this.state = 1284;
                      this.match(JavaParser.RBRACK);
                    }
                  }
                }
                this.state = 1289;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  classCreatorRest(): ClassCreatorRestContext {
    const _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, JavaParser.RULE_classCreatorRest);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1292;
        this.arguments();
        this.state = 1294;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
          case 1:
            {
              this.state = 1293;
              this.classBody();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  explicitGenericInvocation(): ExplicitGenericInvocationContext {
    const _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 186, JavaParser.RULE_explicitGenericInvocation);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1296;
        this.nonWildcardTypeArguments();
        this.state = 1297;
        this.explicitGenericInvocationSuffix();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
    const _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 188, JavaParser.RULE_typeArgumentsOrDiamond);
    try {
      this.state = 1302;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1299;
            this.match(JavaParser.LT);
            this.state = 1300;
            this.match(JavaParser.GT);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1301;
            this.typeArguments();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
    const _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 190, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
    try {
      this.state = 1307;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1304;
            this.match(JavaParser.LT);
            this.state = 1305;
            this.match(JavaParser.GT);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1306;
            this.nonWildcardTypeArguments();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
    const _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 192, JavaParser.RULE_nonWildcardTypeArguments);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1309;
        this.match(JavaParser.LT);
        this.state = 1310;
        this.typeList();
        this.state = 1311;
        this.match(JavaParser.GT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeList(): TypeListContext {
    const _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
    this.enterRule(_localctx, 194, JavaParser.RULE_typeList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1313;
        this.typeType();
        this.state = 1318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 1314;
              this.match(JavaParser.COMMA);
              this.state = 1315;
              this.typeType();
            }
          }
          this.state = 1320;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeType(): TypeTypeContext {
    const _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 196, JavaParser.RULE_typeType);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1322;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === JavaParser.AT) {
          {
            this.state = 1321;
            this.annotation();
          }
        }

        this.state = 1326;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case JavaParser.IDENTIFIER:
            {
              this.state = 1324;
              this.classOrInterfaceType();
            }
            break;
          case JavaParser.BOOLEAN:
          case JavaParser.BYTE:
          case JavaParser.CHAR:
          case JavaParser.DOUBLE:
          case JavaParser.FLOAT:
          case JavaParser.INT:
          case JavaParser.LONG:
          case JavaParser.SHORT:
            {
              this.state = 1325;
              this.primitiveType();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1332;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1328;
                this.match(JavaParser.LBRACK);
                this.state = 1329;
                this.match(JavaParser.RBRACK);
              }
            }
          }
          this.state = 1334;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  primitiveType(): PrimitiveTypeContext {
    const _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 198, JavaParser.RULE_primitiveType);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1335;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << JavaParser.BOOLEAN) |
                  (1 << JavaParser.BYTE) |
                  (1 << JavaParser.CHAR) |
                  (1 << JavaParser.DOUBLE) |
                  (1 << JavaParser.FLOAT) |
                  (1 << JavaParser.INT) |
                  (1 << JavaParser.LONG))) !==
                0) ||
            _la === JavaParser.SHORT
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  typeArguments(): TypeArgumentsContext {
    const _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
    this.enterRule(_localctx, 200, JavaParser.RULE_typeArguments);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1337;
        this.match(JavaParser.LT);
        this.state = 1338;
        this.typeArgument();
        this.state = 1343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === JavaParser.COMMA) {
          {
            {
              this.state = 1339;
              this.match(JavaParser.COMMA);
              this.state = 1340;
              this.typeArgument();
            }
          }
          this.state = 1345;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1346;
        this.match(JavaParser.GT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  superSuffix(): SuperSuffixContext {
    const _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
    this.enterRule(_localctx, 202, JavaParser.RULE_superSuffix);
    try {
      this.state = 1354;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.LPAREN:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1348;
            this.arguments();
          }
          break;
        case JavaParser.DOT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1349;
            this.match(JavaParser.DOT);
            this.state = 1350;
            this.match(JavaParser.IDENTIFIER);
            this.state = 1352;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
              case 1:
                {
                  this.state = 1351;
                  this.arguments();
                }
                break;
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
    const _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 204, JavaParser.RULE_explicitGenericInvocationSuffix);
    try {
      this.state = 1360;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case JavaParser.SUPER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1356;
            this.match(JavaParser.SUPER);
            this.state = 1357;
            this.superSuffix();
          }
          break;
        case JavaParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1358;
            this.match(JavaParser.IDENTIFIER);
            this.state = 1359;
            this.arguments();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  @RuleVersion(0)
  arguments(): ArgumentsContext {
    const _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
    this.enterRule(_localctx, 206, JavaParser.RULE_arguments);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1362;
        this.match(JavaParser.LPAREN);
        this.state = 1364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << JavaParser.BOOLEAN) |
                (1 << JavaParser.BYTE) |
                (1 << JavaParser.CHAR) |
                (1 << JavaParser.DOUBLE) |
                (1 << JavaParser.FLOAT) |
                (1 << JavaParser.INT) |
                (1 << JavaParser.LONG) |
                (1 << JavaParser.NEW))) !==
              0) ||
          (((_la - 37) & ~0x1f) === 0 &&
            ((1 << (_la - 37)) &
              ((1 << (JavaParser.SHORT - 37)) |
                (1 << (JavaParser.SUPER - 37)) |
                (1 << (JavaParser.THIS - 37)) |
                (1 << (JavaParser.VOID - 37)) |
                (1 << (JavaParser.DECIMAL_LITERAL - 37)) |
                (1 << (JavaParser.HEX_LITERAL - 37)) |
                (1 << (JavaParser.OCT_LITERAL - 37)) |
                (1 << (JavaParser.BINARY_LITERAL - 37)) |
                (1 << (JavaParser.FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.HEX_FLOAT_LITERAL - 37)) |
                (1 << (JavaParser.BOOL_LITERAL - 37)) |
                (1 << (JavaParser.CHAR_LITERAL - 37)) |
                (1 << (JavaParser.STRING_LITERAL - 37)) |
                (1 << (JavaParser.NULL_LITERAL - 37)) |
                (1 << (JavaParser.LPAREN - 37)))) !==
              0) ||
          (((_la - 72) & ~0x1f) === 0 &&
            ((1 << (_la - 72)) &
              ((1 << (JavaParser.LT - 72)) |
                (1 << (JavaParser.BANG - 72)) |
                (1 << (JavaParser.TILDE - 72)) |
                (1 << (JavaParser.INC - 72)) |
                (1 << (JavaParser.DEC - 72)) |
                (1 << (JavaParser.ADD - 72)) |
                (1 << (JavaParser.SUB - 72)))) !==
              0) ||
          _la === JavaParser.AT ||
          _la === JavaParser.IDENTIFIER
        ) {
          {
            this.state = 1363;
            this.expressionList();
          }
        }

        this.state = 1366;
        this.match(JavaParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 82:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex);
    }
    return true;
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 17);

      case 1:
        return this.precpred(this._ctx, 16);

      case 2:
        return this.precpred(this._ctx, 15);

      case 3:
        return this.precpred(this._ctx, 14);

      case 4:
        return this.precpred(this._ctx, 12);

      case 5:
        return this.precpred(this._ctx, 11);

      case 6:
        return this.precpred(this._ctx, 10);

      case 7:
        return this.precpred(this._ctx, 9);

      case 8:
        return this.precpred(this._ctx, 8);

      case 9:
        return this.precpred(this._ctx, 7);

      case 10:
        return this.precpred(this._ctx, 6);

      case 11:
        return this.precpred(this._ctx, 5);

      case 12:
        return this.precpred(this._ctx, 25);

      case 13:
        return this.precpred(this._ctx, 24);

      case 14:
        return this.precpred(this._ctx, 20);

      case 15:
        return this.precpred(this._ctx, 13);

      case 16:
        return this.precpred(this._ctx, 3);
    }
    return true;
  }

  private static readonly _serializedATNSegments: number = 3;
  private static readonly _serializedATNSegment0: string =
    '\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03q\u055B\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
    'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t' +
    '`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04' +
    'i\ti\x03\x02\x05\x02\xD4\n\x02\x03\x02\x07\x02\xD7\n\x02\f\x02\x0E\x02' +
    '\xDA\v\x02\x03\x02\x07\x02\xDD\n\x02\f\x02\x0E\x02\xE0\v\x02\x03\x02\x03' +
    '\x02\x03\x03\x07\x03\xE5\n\x03\f\x03\x0E\x03\xE8\v\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xF0\n\x04\x03\x04\x03\x04\x03' +
    '\x04\x05\x04\xF5\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\xFA\n\x05\f\x05' +
    '\x0E\x05\xFD\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0103\n\x05' +
    '\x03\x05\x05\x05\u0106\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05' +
    '\x06\u010D\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x05\x07\u0117\n\x07\x03\b\x03\b\x05\b\u011B\n\b\x03\t\x03\t\x03' +
    '\t\x05\t\u0120\n\t\x03\t\x03\t\x05\t\u0124\n\t\x03\t\x03\t\x05\t\u0128' +
    '\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u0130\n\n\f\n\x0E\n\u0133' +
    '\v\n\x03\n\x03\n\x03\v\x07\v\u0138\n\v\f\v\x0E\v\u013B\v\v\x03\v\x03\v' +
    '\x03\v\x05\v\u0140\n\v\x03\f\x03\f\x03\f\x07\f\u0145\n\f\f\f\x0E\f\u0148' +
    '\v\f\x03\r\x03\r\x03\r\x03\r\x05\r\u014E\n\r\x03\r\x03\r\x05\r\u0152\n' +
    '\r\x03\r\x05\r\u0155\n\r\x03\r\x05\r\u0158\n\r\x03\r\x03\r\x03\x0E\x03' +
    '\x0E\x03\x0E\x07\x0E\u015F\n\x0E\f\x0E\x0E\x0E\u0162\v\x0E\x03\x0F\x07' +
    '\x0F\u0165\n\x0F\f\x0F\x0E\x0F\u0168\v\x0F\x03\x0F\x03\x0F\x05\x0F\u016C' +
    '\n\x0F\x03\x0F\x05\x0F\u016F\n\x0F\x03\x10\x03\x10\x07\x10\u0173\n\x10' +
    '\f\x10\x0E\x10\u0176\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u017B\n\x11' +
    '\x03\x11\x03\x11\x05\x11\u017F\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x07' +
    '\x12\u0185\n\x12\f\x12\x0E\x12\u0188\v\x12\x03\x12\x03\x12\x03\x13\x03' +
    '\x13\x07\x13\u018E\n\x13\f\x13\x0E\x13\u0191\v\x13\x03\x13\x03\x13\x03' +
    '\x14\x03\x14\x05\x14\u0197\n\x14\x03\x14\x03\x14\x07\x14\u019B\n\x14\f' +
    '\x14\x0E\x14\u019E\v\x14\x03\x14\x05\x14\u01A1\n\x14\x03\x15\x03\x15\x03' +
    '\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01AC\n\x15' +
    '\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01B3\n\x16\f\x16\x0E' +
    '\x16\u01B6\v\x16\x03\x16\x03\x16\x05\x16\u01BA\n\x16\x03\x16\x03\x16\x03' +
    '\x17\x03\x17\x05\x17\u01C0\n\x17\x03\x18\x03\x18\x05\x18\u01C4\n\x18\x03' +
    '\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03' +
    '\x1B\x05\x1B\u01D0\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C' +
    '\x03\x1D\x07\x1D\u01D9\n\x1D\f\x1D\x0E\x1D\u01DC\v\x1D\x03\x1D\x03\x1D' +
    '\x05\x1D\u01E0\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
    '\x1E\x05\x1E\u01E9\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01EF' +
    '\n\x1F\f\x1F\x0E\x1F\u01F2\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u01F9' +
    '\n \f \x0E \u01FC\v \x03 \x03 \x03 \x03!\x07!\u0202\n!\f!\x0E!\u0205\v' +
    '!\x03!\x03!\x03!\x07!\u020A\n!\f!\x0E!\u020D\v!\x03!\x03!\x05!\u0211\n' +
    '!\x03!\x03!\x03!\x03!\x07!\u0217\n!\f!\x0E!\u021A\v!\x03!\x03!\x05!\u021E' +
    '\n!\x03!\x03!\x03"\x03"\x03"\x03"\x03"\x03"\x05"\u0228\n"\x03' +
    '#\x03#\x03#\x03$\x03$\x03$\x07$\u0230\n$\f$\x0E$\u0233\v$\x03%\x03%\x03' +
    "%\x05%\u0238\n%\x03&\x03&\x03&\x07&\u023D\n&\f&\x0E&\u0240\v&\x03'\x03" +
    "'\x05'\u0244\n'\x03(\x03(\x03(\x03(\x07(\u024A\n(\f(\x0E(\u024D\v(" +
    '\x03(\x05(\u0250\n(\x05(\u0252\n(\x03(\x03(\x03)\x03)\x05)\u0258\n)\x03' +
    ')\x03)\x03)\x05)\u025D\n)\x07)\u025F\n)\f)\x0E)\u0262\v)\x03*\x03*\x03' +
    '*\x03*\x05*\u0268\n*\x05*\u026A\n*\x03+\x03+\x03+\x07+\u026F\n+\f+\x0E' +
    '+\u0272\v+\x03,\x03,\x05,\u0276\n,\x03,\x03,\x03-\x03-\x03-\x07-\u027D' +
    '\n-\f-\x0E-\u0280\v-\x03-\x03-\x05-\u0284\n-\x03-\x05-\u0287\n-\x03.\x07' +
    '.\u028A\n.\f.\x0E.\u028D\v.\x03.\x03.\x03.\x03/\x07/\u0293\n/\f/\x0E/' +
    '\u0296\v/\x03/\x03/\x03/\x03/\x030\x030\x030\x070\u029F\n0\f0\x0E0\u02A2' +
    '\v0\x031\x031\x031\x031\x031\x031\x051\u02AA\n1\x032\x032\x033\x033\x03' +
    '4\x034\x034\x034\x034\x054\u02B5\n4\x034\x054\u02B8\n4\x035\x035\x035' +
    '\x075\u02BD\n5\f5\x0E5\u02C0\v5\x036\x036\x036\x036\x037\x037\x037\x05' +
    '7\u02C9\n7\x038\x038\x038\x038\x078\u02CF\n8\f8\x0E8\u02D2\v8\x058\u02D4' +
    '\n8\x038\x058\u02D7\n8\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x07' +
    ':\u02E2\n:\f:\x0E:\u02E5\v:\x03:\x03:\x03;\x07;\u02EA\n;\f;\x0E;\u02ED' +
    '\v;\x03;\x03;\x05;\u02F1\n;\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02F9\n' +
    '<\x03<\x03<\x05<\u02FD\n<\x03<\x03<\x05<\u0301\n<\x03<\x03<\x05<\u0305' +
    '\n<\x05<\u0307\n<\x03=\x03=\x05=\u030B\n=\x03>\x03>\x03>\x03>\x05>\u0311' +
    '\n>\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x07A\u031A\nA\fA\x0EA\u031D\vA' +
    '\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u0326\nB\x03C\x07C\u0329\nC\f' +
    'C\x0EC\u032C\vC\x03C\x03C\x03C\x03D\x07D\u0332\nD\fD\x0ED\u0335\vD\x03' +
    'D\x03D\x05D\u0339\nD\x03D\x05D\u033C\nD\x03E\x03E\x03E\x03E\x03E\x05E' +
    '\u0343\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u034C\nE\x03E\x03E\x03' +
    'E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03' +
    'E\x03E\x03E\x06E\u0361\nE\rE\x0EE\u0362\x03E\x05E\u0366\nE\x03E\x05E\u0369' +
    '\nE\x03E\x03E\x03E\x03E\x07E\u036F\nE\fE\x0EE\u0372\vE\x03E\x05E\u0375' +
    '\nE\x03E\x03E\x03E\x03E\x07E\u037B\nE\fE\x0EE\u037E\vE\x03E\x07E\u0381' +
    '\nE\fE\x0EE\u0384\vE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u038E' +
    '\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0397\nE\x03E\x03E\x03E\x05' +
    'E\u039C\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03A6\nE\x03F' +
    '\x03F\x03F\x07F\u03AB\nF\fF\x0EF\u03AE\vF\x03F\x03F\x03F\x03F\x03F\x03' +
    'G\x03G\x03G\x07G\u03B8\nG\fG\x0EG\u03BB\vG\x03H\x03H\x03H\x03I\x03I\x03' +
    'I\x05I\u03C3\nI\x03I\x03I\x03J\x03J\x03J\x07J\u03CA\nJ\fJ\x0EJ\u03CD\v' +
    'J\x03K\x07K\u03D0\nK\fK\x0EK\u03D3\vK\x03K\x03K\x03K\x03K\x03K\x03L\x06' +
    'L\u03DB\nL\rL\x0EL\u03DC\x03L\x06L\u03E0\nL\rL\x0EL\u03E1\x03M\x03M\x03' +
    'M\x05M\u03E7\nM\x03M\x03M\x03M\x05M\u03EC\nM\x03N\x03N\x05N\u03F0\nN\x03' +
    'N\x03N\x05N\u03F4\nN\x03N\x03N\x05N\u03F8\nN\x05N\u03FA\nN\x03O\x03O\x05' +
    'O\u03FE\nO\x03P\x07P\u0401\nP\fP\x0EP\u0404\vP\x03P\x03P\x03P\x03P\x03' +
    'P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0412\nR\fR\x0ER\u0415\vR\x03' +
    'S\x03S\x03S\x05S\u041A\nS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03' +
    'T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0430\n' +
    'T\x03T\x03T\x05T\u0434\nT\x03T\x03T\x03T\x05T\u0439\nT\x03T\x03T\x05T' +
    '\u043D\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T' +
    '\x03T\x03T\x05T\u044D\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T' +
    '\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03' +
    'T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03' +
    'T\x03T\x05T\u0475\nT\x03T\x03T\x03T\x03T\x05T\u047B\nT\x03T\x03T\x03T' +
    '\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u048A\nT\x03T' +
    '\x07T\u048D\nT\fT\x0ET\u0490\vT\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x05' +
    'V\u0499\nV\x03V\x03V\x03V\x03V\x03V\x07V\u04A0\nV\fV\x0EV\u04A3\vV\x03' +
    'V\x05V\u04A6\nV\x03W\x03W\x05W\u04AA\nW\x03X\x03X\x03X\x03X\x03X\x03X' +
    '\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u04BC\nX\x05X' +
    '\u04BE\nX\x03Y\x03Y\x03Y\x05Y\u04C3\nY\x03Y\x07Y\u04C6\nY\fY\x0EY\u04C9' +
    '\vY\x03Y\x03Y\x05Y\u04CD\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04D6' +
    '\nZ\x05Z\u04D8\nZ\x03[\x03[\x05[\u04DC\n[\x03[\x03[\x03[\x05[\u04E1\n' +
    '[\x07[\u04E3\n[\f[\x0E[\u04E6\v[\x03[\x05[\u04E9\n[\x03\\\x03\\\x05\\' +
    '\u04ED\n\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x07]\u04F5\n]\f]\x0E]\u04F8' +
    '\v]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x07]\u0501\n]\f]\x0E]\u0504\v]' +
    '\x03]\x03]\x07]\u0508\n]\f]\x0E]\u050B\v]\x05]\u050D\n]\x03^\x03^\x05' +
    '^\u0511\n^\x03_\x03_\x03_\x03`\x03`\x03`\x05`\u0519\n`\x03a\x03a\x03a' +
    '\x05a\u051E\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u0527\nc\fc\x0E' +
    'c\u052A\vc\x03d\x05d\u052D\nd\x03d\x03d\x05d\u0531\nd\x03d\x03d\x07d\u0535' +
    '\nd\fd\x0Ed\u0538\vd\x03e\x03e\x03f\x03f\x03f\x03f\x07f\u0540\nf\ff\x0E' +
    'f\u0543\vf\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u054B\ng\x05g\u054D\ng\x03' +
    'h\x03h\x03h\x03h\x05h\u0553\nh\x03i\x03i\x05i\u0557\ni\x03i\x03i\x03i' +
    '\x02\x02\x03\xA6j\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10' +
    '\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02' +
    '$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02' +
    '@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02' +
    '\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02' +
    'x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C' +
    '\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E' +
    '\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0' +
    '\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2' +
    '\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\x02\x0E\x04' +
    '\x02\x13\x13**\x03\x0258\x03\x029:\x03\x02UX\x03\x02KL\x04\x02YZ^^\x03' +
    '\x02WX\x04\x02IJPQ\x04\x02OORR\x04\x02HH_i\x03\x02UV\n\x02\x05\x05\x07' +
    "\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F''\u05F0\x02\xD3\x03\x02\x02" +
    '\x02\x04\xE6\x03\x02\x02\x02\x06\xED\x03\x02\x02\x02\b\u0105\x03\x02\x02' +
    '\x02\n\u010C\x03\x02\x02\x02\f\u0116\x03\x02\x02\x02\x0E\u011A\x03\x02' +
    '\x02\x02\x10\u011C\x03\x02\x02\x02\x12\u012B\x03\x02\x02\x02\x14\u0139' +
    '\x03\x02\x02\x02\x16\u0141\x03\x02\x02\x02\x18\u0149\x03\x02\x02\x02\x1A' +
    '\u015B\x03\x02\x02\x02\x1C\u0166\x03\x02\x02\x02\x1E\u0170\x03\x02\x02' +
    '\x02 \u0177\x03\x02\x02\x02"\u0182\x03\x02\x02\x02$\u018B\x03\x02\x02' +
    '\x02&\u01A0\x03\x02\x02\x02(\u01AB\x03\x02\x02\x02*\u01AD\x03\x02\x02' +
    '\x02,\u01BF\x03\x02\x02\x02.\u01C3\x03\x02\x02\x020\u01C5\x03\x02\x02' +
    '\x022\u01C8\x03\x02\x02\x024\u01CB\x03\x02\x02\x026\u01D3\x03\x02\x02' +
    '\x028\u01DF\x03\x02\x02\x02:\u01E8\x03\x02\x02\x02<\u01EA\x03\x02\x02' +
    '\x02>\u01F5\x03\x02\x02\x02@\u0203\x03\x02\x02\x02B\u0227\x03\x02\x02' +
    '\x02D\u0229\x03\x02\x02\x02F\u022C\x03\x02\x02\x02H\u0234\x03\x02\x02' +
    '\x02J\u0239\x03\x02\x02\x02L\u0243\x03\x02\x02\x02N\u0245\x03\x02\x02' +
    '\x02P\u0255\x03\x02\x02\x02R\u0269\x03\x02\x02\x02T\u026B\x03\x02\x02' +
    '\x02V\u0273\x03\x02\x02\x02X\u0286\x03\x02\x02\x02Z\u028B\x03\x02\x02' +
    '\x02\\\u0294\x03\x02\x02\x02^\u029B\x03\x02\x02\x02`\u02A9\x03\x02\x02' +
    '\x02b\u02AB\x03\x02\x02\x02d\u02AD\x03\x02\x02\x02f\u02AF\x03\x02\x02' +
    '\x02h\u02B9\x03\x02\x02\x02j\u02C1\x03\x02\x02\x02l\u02C8\x03\x02\x02' +
    '\x02n\u02CA\x03\x02\x02\x02p\u02DA\x03\x02\x02\x02r\u02DF\x03\x02\x02' +
    '\x02t\u02F0\x03\x02\x02\x02v\u0306\x03\x02\x02\x02x\u030A\x03\x02\x02' +
    '\x02z\u030C\x03\x02\x02\x02|\u0312\x03\x02\x02\x02~\u0314\x03\x02\x02' +
    '\x02\x80\u0317\x03\x02\x02\x02\x82\u0325\x03\x02\x02\x02\x84\u032A\x03' +
    '\x02\x02\x02\x86\u033B\x03\x02\x02\x02\x88\u03A5\x03\x02\x02\x02\x8A\u03A7' +
    '\x03\x02\x02\x02\x8C\u03B4\x03\x02\x02\x02\x8E\u03BC\x03\x02\x02\x02\x90' +
    '\u03BF\x03\x02\x02\x02\x92\u03C6\x03\x02\x02\x02\x94\u03D1\x03\x02\x02' +
    '\x02\x96\u03DA\x03\x02\x02\x02\x98\u03EB\x03\x02\x02\x02\x9A\u03F9\x03' +
    '\x02\x02\x02\x9C\u03FD\x03\x02\x02\x02\x9E\u0402\x03\x02\x02\x02\xA0\u040A' +
    '\x03\x02\x02\x02\xA2\u040E\x03\x02\x02\x02\xA4\u0416\x03\x02\x02\x02\xA6' +
    '\u043C\x03\x02\x02\x02\xA8\u0491\x03\x02\x02\x02\xAA\u04A5\x03\x02\x02' +
    '\x02\xAC\u04A9\x03\x02\x02\x02\xAE\u04BD\x03\x02\x02\x02\xB0\u04C2\x03' +
    '\x02\x02\x02\xB2\u04D7\x03\x02\x02\x02\xB4\u04E8\x03\x02\x02\x02\xB6\u04EA' +
    '\x03\x02\x02\x02\xB8\u04F0\x03\x02\x02\x02\xBA\u050E\x03\x02\x02\x02\xBC' +
    '\u0512\x03\x02\x02\x02\xBE\u0518\x03\x02\x02\x02\xC0\u051D\x03\x02\x02' +
    '\x02\xC2\u051F\x03\x02\x02\x02\xC4\u0523\x03\x02\x02\x02\xC6\u052C\x03' +
    '\x02\x02\x02\xC8\u0539\x03\x02\x02\x02\xCA\u053B\x03\x02\x02\x02\xCC\u054C' +
    '\x03\x02\x02\x02\xCE\u0552\x03\x02\x02\x02\xD0\u0554\x03\x02\x02\x02\xD2' +
    '\xD4\x05\x04\x03\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4' +
    '\xD8\x03\x02\x02\x02\xD5\xD7\x05\x06\x04\x02\xD6\xD5\x03\x02\x02\x02\xD7' +
    '\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9' +
    '\xDE\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05\b\x05\x02\xDC' +
    '\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE' +
    '\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1' +
    '\xE2\x07\x02\x02\x03\xE2\x03\x03\x02\x02\x02\xE3\xE5\x05f4\x02\xE4\xE3' +
    '\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7' +
    '\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA' +
    '\x07"\x02\x02\xEA\xEB\x05^0\x02\xEB\xEC\x07E\x02\x02\xEC\x05\x03\x02' +
    '\x02\x02\xED\xEF\x07\x1B\x02\x02\xEE\xF0\x07(\x02\x02\xEF\xEE\x03\x02' +
    '\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x05^' +
    '0\x02\xF2\xF3\x07G\x02\x02\xF3\xF5\x07Y\x02\x02\xF4\xF2\x03\x02\x02\x02' +
    '\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x07E\x02\x02' +
    '\xF7\x07\x03\x02\x02\x02\xF8\xFA\x05\f\x07\x02\xF9\xF8\x03\x02\x02\x02' +
    '\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02' +
    '\xFC\u0102\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x05\x10\t' +
    '\x02\xFF\u0103\x05\x18\r\x02\u0100\u0103\x05 \x11\x02\u0101\u0103\x05' +
    'p9\x02\u0102\xFE\x03\x02\x02\x02\u0102\xFF\x03\x02\x02\x02\u0102\u0100' +
    '\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02' +
    '\u0104\u0106\x07E\x02\x02\u0105\xFB\x03\x02\x02\x02\u0105\u0104\x03\x02' +
    '\x02\x02\u0106\t\x03\x02\x02\x02\u0107\u010D\x05\f\x07\x02\u0108\u010D' +
    '\x07 \x02\x02\u0109\u010D\x07,\x02\x02\u010A\u010D\x070\x02\x02\u010B' +
    '\u010D\x073\x02\x02\u010C\u0107\x03\x02\x02\x02\u010C\u0108\x03\x02\x02' +
    '\x02\u010C\u0109\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B' +
    '\x03\x02\x02\x02\u010D\v\x03\x02\x02\x02\u010E\u0117\x05f4\x02\u010F\u0117' +
    '\x07%\x02\x02\u0110\u0117\x07$\x02\x02\u0111\u0117\x07#\x02\x02\u0112' +
    '\u0117\x07(\x02\x02\u0113\u0117\x07\x03\x02\x02\u0114\u0117\x07\x14\x02' +
    '\x02\u0115\u0117\x07)\x02\x02\u0116\u010E\x03\x02\x02\x02\u0116\u010F' +
    '\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0111\x03\x02\x02\x02' +
    '\u0116\u0112\x03\x02\x02\x02\u0116\u0113\x03\x02\x02\x02\u0116\u0114\x03' +
    '\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\r\x03\x02\x02\x02\u0118' +
    '\u011B\x07\x14\x02\x02\u0119\u011B\x05f4\x02\u011A\u0118\x03\x02\x02\x02' +
    '\u011A\u0119\x03\x02\x02\x02\u011B\x0F\x03\x02\x02\x02\u011C\u011D\x07' +
    '\v\x02\x02\u011D\u011F\x07q\x02\x02\u011E\u0120\x05\x12\n\x02\u011F\u011E' +
    '\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02' +
    '\u0121\u0122\x07\x13\x02\x02\u0122\u0124\x05\xC6d\x02\u0123\u0121\x03' +
    '\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125' +
    '\u0126\x07\x1A\x02\x02\u0126\u0128\x05\xC4c\x02\u0127\u0125\x03\x02\x02' +
    '\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A' +
    '\x05"\x12\x02\u012A\x11\x03\x02\x02\x02\u012B\u012C\x07J\x02\x02\u012C' +
    '\u0131\x05\x14\v\x02\u012D\u012E\x07F\x02\x02\u012E\u0130\x05\x14\v\x02' +
    '\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03' +
    '\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133' +
    '\u0131\x03\x02\x02\x02\u0134\u0135\x07I\x02\x02\u0135\x13\x03\x02\x02' +
    '\x02\u0136\u0138\x05f4\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03' +
    '\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A' +
    '\u013C\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x07q\x02' +
    '\x02\u013D\u013E\x07\x13\x02\x02\u013E\u0140\x05\x16\f\x02\u013F\u013D' +
    '\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\x15\x03\x02\x02\x02' +
    '\u0141\u0146\x05\xC6d\x02\u0142\u0143\x07[\x02\x02\u0143\u0145\x05\xC6' +
    'd\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144' +
    '\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\x17\x03\x02\x02\x02' +
    '\u0148\u0146\x03\x02\x02\x02\u0149\u014A\x07\x12\x02\x02\u014A\u014D\x07' +
    'q\x02\x02\u014B\u014C\x07\x1A\x02\x02\u014C\u014E\x05\xC4c\x02\u014D\u014B' +
    '\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02' +
    '\u014F\u0151\x07A\x02\x02\u0150\u0152\x05\x1A\x0E\x02\u0151\u0150\x03' +
    '\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153' +
    '\u0155\x07F\x02\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02' +
    '\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0158\x05\x1E\x10\x02\u0157\u0156' +
    '\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02' +
    '\u0159\u015A\x07B\x02\x02\u015A\x19\x03\x02\x02\x02\u015B\u0160\x05\x1C' +
    '\x0F\x02\u015C\u015D\x07F\x02\x02\u015D\u015F\x05\x1C\x0F\x02\u015E\u015C' +
    '\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02' +
    '\u0160\u0161\x03\x02\x02\x02\u0161\x1B\x03\x02\x02\x02\u0162\u0160\x03' +
    '\x02\x02\x02\u0163\u0165\x05f4\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168' +
    '\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02' +
    '\u0167\u0169\x03';
  private static readonly _serializedATNSegment1: string =
    '\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016B\x07q\x02\x02\u016A' +
    '\u016C\x05\xD0i\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02' +
    '\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016F\x05"\x12\x02\u016E\u016D' +
    '\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\x1D\x03\x02\x02\x02' +
    '\u0170\u0174\x07E\x02\x02\u0171\u0173\x05&\x14\x02\u0172\u0171\x03\x02' +
    '\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174' +
    '\u0175\x03\x02\x02\x02\u0175\x1F\x03\x02\x02\x02\u0176\u0174\x03\x02\x02' +
    '\x02\u0177\u0178\x07\x1E\x02\x02\u0178\u017A\x07q\x02\x02\u0179\u017B' +
    '\x05\x12\n\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02' +
    '\u017B\u017E\x03\x02\x02\x02\u017C\u017D\x07\x13\x02\x02\u017D\u017F\x05' +
    '\xC4c\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F' +
    '\u0180\x03\x02\x02\x02\u0180\u0181\x05$\x13\x02\u0181!\x03\x02\x02\x02' +
    '\u0182\u0186\x07A\x02\x02\u0183\u0185\x05&\x14\x02\u0184\u0183\x03\x02' +
    '\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186' +
    '\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02' +
    '\x02\x02\u0189\u018A\x07B\x02\x02\u018A#\x03\x02\x02\x02\u018B\u018F\x07' +
    'A\x02\x02\u018C\u018E\x058\x1D\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191' +
    '\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02' +
    '\u0190\u0192\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0193\x07' +
    'B\x02\x02\u0193%\x03\x02\x02\x02\u0194\u01A1\x07E\x02\x02\u0195\u0197' +
    '\x07(\x02\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02' +
    '\u0197\u0198\x03\x02\x02\x02\u0198\u01A1\x05\x80A\x02\u0199\u019B\x05' +
    '\n\x06\x02\u019A\u0199\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C' +
    '\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x03\x02' +
    '\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A1\x05(\x15\x02\u01A0\u0194' +
    '\x03\x02\x02\x02\u01A0\u0196\x03\x02\x02\x02\u01A0\u019C\x03\x02\x02\x02' +
    "\u01A1'\x03\x02\x02\x02\u01A2\u01AC\x05*\x16\x02\u01A3\u01AC\x050\x19" +
    '\x02\u01A4\u01AC\x056\x1C\x02\u01A5\u01AC\x054\x1B\x02\u01A6\u01AC\x05' +
    '2\x1A\x02\u01A7\u01AC\x05 \x11\x02\u01A8\u01AC\x05p9\x02\u01A9\u01AC\x05' +
    '\x10\t\x02\u01AA\u01AC\x05\x18\r\x02\u01AB\u01A2\x03\x02\x02\x02\u01AB' +
    '\u01A3\x03\x02\x02\x02\u01AB\u01A4\x03\x02\x02\x02\u01AB\u01A5\x03\x02' +
    '\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02\u01AB' +
    '\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02' +
    '\x02\x02\u01AC)\x03\x02\x02\x02\u01AD\u01AE\x05.\x18\x02\u01AE\u01AF\x07' +
    'q\x02\x02\u01AF\u01B4\x05V,\x02\u01B0\u01B1\x07C\x02\x02\u01B1\u01B3\x07' +
    'D\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4' +
    '\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B9\x03\x02' +
    '\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B8\x07/\x02\x02\u01B8\u01BA' +
    '\x05T+\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA' +
    '\u01BB\x03\x02\x02\x02\u01BB\u01BC\x05,\x17\x02\u01BC+\x03\x02\x02\x02' +
    '\u01BD\u01C0\x05\x80A\x02\u01BE\u01C0\x07E\x02\x02\u01BF\u01BD\x03\x02' +
    '\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0-\x03\x02\x02\x02\u01C1\u01C4' +
    '\x05\xC6d\x02\u01C2\u01C4\x072\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3' +
    '\u01C2\x03\x02\x02\x02\u01C4/\x03\x02\x02\x02\u01C5\u01C6\x05\x12\n\x02' +
    '\u01C6\u01C7\x05*\x16\x02\u01C71\x03\x02\x02\x02\u01C8\u01C9\x05\x12\n' +
    '\x02\u01C9\u01CA\x054\x1B\x02\u01CA3\x03\x02\x02\x02\u01CB\u01CC\x07q' +
    '\x02\x02\u01CC\u01CF\x05V,\x02\u01CD\u01CE\x07/\x02\x02\u01CE\u01D0\x05' +
    'T+\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1' +
    '\x03\x02\x02\x02\u01D1\u01D2\x05\x80A\x02\u01D25\x03\x02\x02\x02\u01D3' +
    '\u01D4\x05\xC6d\x02\u01D4\u01D5\x05F$\x02\u01D5\u01D6\x07E\x02\x02\u01D6' +
    '7\x03\x02\x02\x02\u01D7\u01D9\x05\n\x06\x02\u01D8\u01D7\x03\x02\x02\x02' +
    '\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03' +
    '\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD' +
    '\u01E0\x05:\x1E\x02\u01DE\u01E0\x07E\x02\x02\u01DF\u01DA\x03\x02\x02\x02' +
    '\u01DF\u01DE\x03\x02\x02\x02\u01E09\x03\x02\x02\x02\u01E1\u01E9\x05<\x1F' +
    '\x02\u01E2\u01E9\x05@!\x02\u01E3\u01E9\x05D#\x02\u01E4\u01E9\x05 \x11' +
    '\x02\u01E5\u01E9\x05p9\x02\u01E6\u01E9\x05\x10\t\x02\u01E7\u01E9\x05\x18' +
    '\r\x02\u01E8\u01E1\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3' +
    '\x03\x02\x02\x02\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02' +
    '\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9;\x03\x02' +
    '\x02\x02\u01EA\u01EB\x05\xC6d\x02\u01EB\u01F0\x05> \x02\u01EC\u01ED\x07' +
    'F\x02\x02\u01ED\u01EF\x05> \x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F2' +
    '\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02' +
    '\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07' +
    'E\x02\x02\u01F4=\x03\x02\x02\x02\u01F5\u01FA\x07q\x02\x02\u01F6\u01F7' +
    '\x07C\x02\x02\u01F7\u01F9\x07D\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9' +
    '\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02' +
    '\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD' +
    "\u01FE\x07H\x02\x02\u01FE\u01FF\x05L'\x02\u01FF?\x03\x02\x02\x02\u0200" +
    '\u0202\x05B"\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02' +
    '\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0210' +
    '\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0211\x05.\x18\x02' +
    '\u0207\u020B\x05\x12\n\x02\u0208\u020A\x05f4\x02\u0209\u0208\x03\x02\x02' +
    '\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C' +
    '\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02' +
    '\u020E\u020F\x05.\x18\x02\u020F\u0211\x03\x02\x02\x02\u0210\u0206\x03' +
    '\x02\x02\x02\u0210\u0207\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212' +
    '\u0213\x07q\x02\x02\u0213\u0218\x05V,\x02\u0214\u0215\x07C\x02\x02\u0215' +
    '\u0217\x07D\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x03\x02\x02' +
    '\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021D' +
    '\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021C\x07/\x02\x02' +
    '\u021C\u021E\x05T+\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02' +
    '\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x05,\x17\x02\u0220A\x03' +
    '\x02\x02\x02\u0221\u0228\x05f4\x02\u0222\u0228\x07%\x02\x02\u0223\u0228' +
    '\x07\x03\x02\x02\u0224\u0228\x07\x0E\x02\x02\u0225\u0228\x07(\x02\x02' +
    '\u0226\u0228\x07)\x02\x02\u0227\u0221\x03\x02\x02\x02\u0227\u0222\x03' +
    '\x02\x02\x02\u0227\u0223\x03\x02\x02\x02\u0227\u0224\x03\x02\x02\x02\u0227' +
    '\u0225\x03\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228C\x03\x02\x02' +
    '\x02\u0229\u022A\x05\x12\n\x02\u022A\u022B\x05@!\x02\u022BE\x03\x02\x02' +
    '\x02\u022C\u0231\x05H%\x02\u022D\u022E\x07F\x02\x02\u022E\u0230\x05H%' +
    '\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F' +
    '\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232G\x03\x02\x02\x02\u0233' +
    '\u0231\x03\x02\x02\x02\u0234\u0237\x05J&\x02\u0235\u0236\x07H\x02\x02' +
    "\u0236\u0238\x05L'\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02" +
    '\x02\x02\u0238I\x03\x02\x02\x02\u0239\u023E\x07q\x02\x02\u023A\u023B\x07' +
    'C\x02\x02\u023B\u023D\x07D\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0240' +
    '\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02' +
    '\u023FK\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x05N(' +
    '\x02\u0242\u0244\x05\xA6T\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0242' +
    '\x03\x02\x02\x02\u0244M\x03\x02\x02\x02\u0245\u0251\x07A\x02\x02\u0246' +
    "\u024B\x05L'\x02\u0247\u0248\x07F\x02\x02\u0248\u024A\x05L'\x02\u0249" +
    '\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02' +
    '\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D' +
    '\u024B\x03\x02\x02\x02\u024E\u0250\x07F\x02\x02\u024F\u024E\x03\x02\x02' +
    '\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0246' +
    '\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02' +
    '\u0253\u0254\x07B\x02\x02\u0254O\x03\x02\x02\x02\u0255\u0257\x07q\x02' +
    '\x02\u0256\u0258\x05\xCAf\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258' +
    '\x03\x02\x02\x02\u0258\u0260\x03\x02\x02\x02\u0259\u025A\x07G\x02\x02' +
    '\u025A\u025C\x07q\x02\x02\u025B\u025D\x05\xCAf\x02\u025C\u025B\x03\x02' +
    '\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E' +
    '\u0259\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02' +
    '\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261Q\x03\x02\x02\x02\u0262\u0260' +
    '\x03\x02\x02\x02\u0263\u026A\x05\xC6d\x02\u0264\u0267\x07M\x02\x02\u0265' +
    '\u0266\t\x02\x02\x02\u0266\u0268\x05\xC6d\x02\u0267\u0265\x03\x02\x02' +
    '\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0263' +
    '\x03\x02\x02\x02\u0269\u0264\x03\x02\x02\x02\u026AS\x03\x02\x02\x02\u026B' +
    '\u0270\x05^0\x02\u026C\u026D\x07F\x02\x02\u026D\u026F\x05^0\x02\u026E' +
    '\u026C\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02' +
    '\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271U\x03\x02\x02\x02\u0272\u0270' +
    '\x03\x02\x02\x02\u0273\u0275\x07?\x02\x02\u0274\u0276\x05X-\x02\u0275' +
    '\u0274\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02' +
    '\x02\x02\u0277\u0278\x07@\x02\x02\u0278W\x03\x02\x02\x02\u0279\u027E\x05' +
    'Z.\x02\u027A\u027B\x07F\x02\x02\u027B\u027D\x05Z.\x02\u027C\u027A\x03' +
    '\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E' +
    '\u027F\x03\x02\x02\x02\u027F\u0283\x03\x02\x02\x02\u0280\u027E\x03\x02' +
    '\x02\x02\u0281\u0282\x07F\x02\x02\u0282\u0284\x05\\/\x02\u0283\u0281\x03' +
    '\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285' +
    '\u0287\x05\\/\x02\u0286\u0279\x03\x02\x02\x02\u0286\u0285\x03\x02\x02' +
    '\x02\u0287Y\x03\x02\x02\x02\u0288\u028A\x05\x0E\b\x02\u0289\u0288\x03' +
    '\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B' +
    '\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u028B\x03\x02' +
    '\x02\x02\u028E\u028F\x05\xC6d\x02\u028F\u0290\x05J&\x02\u0290[\x03\x02' +
    '\x02\x02\u0291\u0293\x05\x0E\b\x02\u0292\u0291\x03\x02\x02\x02\u0293\u0296' +
    '\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02' +
    '\u0295\u0297\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u0298\x05' +
    '\xC6d\x02\u0298\u0299\x07m\x02\x02\u0299\u029A\x05J&\x02\u029A]\x03\x02' +
    '\x02\x02\u029B\u02A0\x07q\x02\x02\u029C\u029D\x07G\x02\x02\u029D\u029F' +
    '\x07q\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02' +
    '\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1_\x03\x02' +
    '\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02AA\x05b2\x02\u02A4\u02AA' +
    '\x05d3\x02\u02A5\u02AA\x07<\x02\x02\u02A6\u02AA\x07=\x02\x02\u02A7\u02AA' +
    '\x07;\x02\x02\u02A8\u02AA\x07>\x02\x02\u02A9\u02A3\x03\x02\x02\x02\u02A9' +
    '\u02A4\x03\x02\x02\x02\u02A9\u02A5\x03\x02\x02\x02\u02A9\u02A6\x03\x02' +
    '\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AA' +
    'a\x03\x02\x02\x02\u02AB\u02AC\t\x03\x02\x02\u02ACc\x03\x02\x02\x02\u02AD' +
    '\u02AE\t\x04\x02\x02\u02AEe\x03\x02\x02\x02\u02AF\u02B0\x07l\x02\x02\u02B0' +
    '\u02B7\x05^0\x02\u02B1\u02B4\x07?\x02\x02\u02B2\u02B5\x05h5\x02\u02B3' +
    '\u02B5\x05l7\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B3\x03\x02\x02\x02' +
    '\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07' +
    '@\x02\x02\u02B7\u02B1\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8' +
    'g\x03\x02\x02\x02\u02B9\u02BE\x05j6\x02\u02BA\u02BB\x07F\x02\x02\u02BB' +
    '\u02BD\x05j6\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02' +
    '\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BFi\x03\x02' +
    '\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C2\x07q\x02\x02\u02C2\u02C3' +
    '\x07H\x02\x02\u02C3\u02C4\x05l7\x02\u02C4k\x03\x02\x02\x02\u02C5\u02C9' +
    '\x05\xA6T\x02\u02C6\u02C9\x05f4\x02\u02C7\u02C9\x05n8\x02\u02C8\u02C5' +
    '\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02' +
    '\u02C9m\x03\x02\x02\x02\u02CA\u02D3\x07A\x02\x02\u02CB\u02D0\x05l7\x02' +
    '\u02CC\u02CD\x07F\x02\x02\u02CD\u02CF\x05l7\x02\u02CE\u02CC\x03\x02\x02' +
    '\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1' +
    '\x03\x02\x02\x02\u02D1\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02' +
    '\u02D3\u02CB\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03' +
    '\x02\x02\x02\u02D5\u02D7\x07F\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6' +
    '\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07B\x02' +
    '\x02\u02D9o\x03\x02\x02\x02\u02DA\u02DB\x07l\x02\x02\u02DB\u02DC\x07\x1E' +
    '\x02\x02\u02DC\u02DD\x07q\x02\x02\u02DD\u02DE\x05r:\x02\u02DEq\x03\x02' +
    '\x02\x02\u02DF\u02E3\x07A\x02\x02\u02E0\u02E2\x05t;\x02\u02E1\u02E0\x03' +
    '\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3' +
    '\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02' +
    '\x02\x02\u02E6\u02E7\x07B\x02\x02\u02E7s\x03\x02\x02\x02\u02E8\u02EA\x05' +
    '\n\x06\x02\u02E9\u02E8\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB' +
    '\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02' +
    '\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02F1\x05v<\x02\u02EF\u02F1' +
    '\x07E\x02\x02\u02F0\u02EB\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02' +
    '\u02F1u\x03\x02\x02\x02\u02F2\u02F3\x05\xC6d\x02\u02F3\u02F4\x05x=\x02' +
    '\u02F4\u02F5\x07E\x02\x02\u02F5\u0307\x03\x02\x02\x02\u02F6\u02F8\x05' +
    '\x10\t\x02\u02F7\u02F9\x07E\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8' +
    '\u02F9\x03\x02\x02\x02\u02F9\u0307\x03\x02\x02\x02\u02FA\u02FC\x05 \x11' +
    '\x02\u02FB\u02FD\x07E\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD' +
    '\x03\x02\x02\x02\u02FD\u0307\x03\x02\x02\x02\u02FE\u0300\x05\x18\r\x02' +
    '\u02FF\u0301\x07E\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03' +
    '\x02\x02\x02\u0301\u0307\x03\x02\x02\x02\u0302\u0304\x05p9\x02\u0303\u0305' +
    '\x07E\x02\x02\u0304\u0303\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02' +
    '\u0305\u0307\x03\x02\x02\x02\u0306\u02F2\x03\x02\x02\x02\u0306\u02F6\x03' +
    '\x02\x02\x02\u0306\u02FA\x03\x02\x02\x02\u0306\u02FE\x03\x02\x02\x02\u0306' +
    '\u0302\x03\x02\x02\x02\u0307w\x03\x02\x02\x02\u0308\u030B\x05z>\x02\u0309' +
    '\u030B\x05|?\x02\u030A\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02' +
    '\u030By\x03\x02\x02\x02\u030C\u030D\x07q\x02\x02\u030D\u030E\x07?\x02' +
    '\x02\u030E\u0310\x07@\x02\x02\u030F\u0311\x05~@\x02\u0310\u030F\x03\x02' +
    '\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311{\x03\x02\x02\x02\u0312\u0313' +
    '\x05F$\x02\u0313}\x03\x02\x02\x02\u0314\u0315\x07\x0E\x02\x02\u0315\u0316' +
    '\x05l7\x02\u0316\x7F\x03\x02\x02\x02\u0317\u031B\x07A\x02\x02\u0318\u031A' +
    '\x05\x82B\x02\u0319\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02' +
    '\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x03' +
    '\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E\u031F\x07B\x02\x02\u031F' +
    '\x81\x03\x02\x02\x02\u0320\u0321\x05\x84C\x02\u0321\u0322\x07E\x02\x02' +
    '\u0322\u0326\x03\x02\x02\x02\u0323\u0326\x05\x88E\x02\u0324\u0326\x05' +
    '\x86D\x02\u0325\u0320\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325' +
    '\u0324\x03\x02\x02\x02\u0326\x83\x03\x02\x02\x02\u0327\u0329\x05\x0E\b' +
    '\x02\u0328\u0327\x03\x02\x02\x02\u0329\u032C\x03\x02\x02\x02\u032A\u0328' +
    '\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032D\x03\x02\x02\x02' +
    '\u032C\u032A\x03\x02\x02\x02\u032D\u032E\x05\xC6d\x02\u032E\u032F\x05' +
    'F$\x02\u032F\x85\x03\x02\x02\x02\u0330\u0332\x05\f\x07\x02\u0331\u0330' +
    '\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02' +
    '\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02\x02\x02\u0335\u0333\x03' +
    '\x02\x02\x02\u0336\u0339\x05\x10\t\x02\u0337\u0339\x05 \x11\x02\u0338' +
    '\u0336\x03\x02\x02\x02\u0338\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02' +
    '\x02\x02\u033A\u033C\x07E\x02\x02\u033B\u0333\x03\x02\x02\x02\u033B\u033A' +
    '\x03\x02\x02\x02\u033C\x87\x03\x02\x02\x02\u033D\u03A6\x05\x80A\x02\u033E' +
    '\u033F\x07\x04\x02\x02\u033F\u0342\x05\xA6T\x02\u0340\u0341\x07N\x02\x02' +
    '\u0341\u0343\x05\xA6T\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03' +
    '\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x07E\x02\x02\u0345' +
    '\u03A6\x03\x02\x02\x02\u0346\u0347\x07\x18\x02\x02\u0347\u0348\x05\xA0' +
    'Q\x02\u0348\u034B\x05\x88E\x02\u0349\u034A\x07\x11\x02\x02\u034A\u034C' +
    '\x05\x88E\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02' +
    '\u034C\u03A6\x03\x02\x02\x02\u034D\u034E\x07\x17\x02\x02\u034E\u034F\x07' +
    '?\x02\x02\u034F\u0350\x05\x9AN\x02\u0350\u0351\x07@\x02\x02\u0351\u0352' +
    '\x05\x88E\x02\u0352\u03A6\x03\x02\x02\x02\u0353\u0354\x074\x02\x02\u0354' +
    '\u0355\x05\xA0Q\x02\u0355\u0356\x05\x88E\x02\u0356\u03A6\x03\x02\x02\x02' +
    '\u0357\u0358\x07\x0F\x02\x02\u0358\u0359\x05\x88E\x02\u0359\u035A\x07' +
    '4\x02\x02\u035A\u035B\x05\xA0Q\x02\u035B\u035C\x07E\x02\x02\u035C\u03A6' +
    '\x03\x02\x02\x02\u035D\u035E\x071\x02\x02\u035E\u0368\x05\x80A\x02\u035F' +
    '\u0361\x05\x8AF\x02\u0360\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02' +
    '\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365' +
    '\x03\x02\x02\x02\u0364\u0366\x05\x8EH\x02\u0365\u0364\x03\x02\x02\x02' +
    '\u0365\u0366\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0369\x05' +
    '\x8EH\x02\u0368\u0360\x03\x02\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369' +
    '\u03A6\x03\x02\x02\x02\u036A\u036B\x071\x02\x02\u036B\u036C\x05\x90I\x02' +
    '\u036C\u0370\x05\x80A\x02\u036D\u036F\x05\x8AF\x02\u036E\u036D\x03\x02' +
    '\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370' +
    '\u0371\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372\u0370\x03\x02' +
    '\x02\x02\u0373\u0375\x05\x8EH\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375' +
    '\x03\x02\x02\x02\u0375\u03A6\x03\x02\x02\x02\u0376\u0377\x07+\x02\x02' +
    '\u0377\u0378\x05\xA0Q\x02\u0378\u037C\x07A\x02\x02\u0379\u037B\x05\x96' +
    'L\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A' +
    '\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u0382\x03\x02\x02\x02' +
    '\u037E\u037C\x03\x02\x02\x02\u037F\u0381\x05\x98M\x02\u0380\u037F\x03' +
    '\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382' +
    '\u0383\x03\x02\x02\x02\u0383\u0385\x03\x02\x02\x02\u0384\u0382\x03\x02' +
    '\x02\x02\u0385\u0386\x07B\x02\x02\u0386\u03A6\x03\x02\x02\x02\u0387\u0388' +
    '\x07,\x02\x02\u0388\u0389\x05\xA0Q\x02\u0389\u038A\x05\x80A\x02\u038A' +
    '\u03A6\x03\x02\x02\x02\u038B\u038D\x07&\x02\x02\u038C\u038E\x05\xA6T\x02' +
    '\u038D\u038C\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u038F\x03' +
    '\x02\x02\x02\u038F\u03A6\x07E\x02\x02\u0390\u0391\x07.\x02\x02\u0391\u0392' +
    '\x05\xA6T\x02\u0392\u0393\x07E\x02\x02\u0393\u03A6\x03\x02\x02\x02\u0394' +
    '\u0396\x07\x06\x02\x02\u0395\u0397\x07q\x02\x02\u0396\u0395\x03\x02\x02' +
    '\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u03A6' +
    '\x07E\x02\x02\u0399\u039B\x07\r\x02\x02\u039A\u039C\x07q\x02\x02\u039B' +
    '\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02' +
    '\x02\x02\u039D\u03A6\x07E\x02\x02\u039E\u03A6\x07E\x02\x02\u039F\u03A0' +
    '\x05\xA6T\x02\u03A0\u03A1\x07E\x02\x02\u03A1\u03A6\x03\x02\x02\x02\u03A2' +
    '\u03A3\x07q\x02\x02\u03A3\u03A4\x07N\x02\x02\u03A4\u03A6\x05\x88E\x02' +
    '\u03A5\u033D\x03\x02\x02\x02\u03A5\u033E\x03\x02\x02\x02\u03A5\u0346\x03' +
    '\x02\x02\x02\u03A5\u034D\x03\x02\x02\x02\u03A5\u0353\x03\x02\x02\x02\u03A5' +
    '\u0357\x03\x02\x02\x02\u03A5\u035D\x03\x02\x02\x02\u03A5\u036A\x03\x02' +
    '\x02\x02\u03A5\u0376\x03\x02\x02\x02\u03A5\u0387\x03\x02\x02\x02\u03A5' +
    '\u038B\x03\x02\x02\x02\u03A5\u0390\x03\x02\x02\x02\u03A5\u0394\x03\x02' +
    '\x02\x02\u03A5\u0399\x03\x02\x02\x02\u03A5\u039E\x03\x02\x02\x02\u03A5' +
    '\u039F\x03\x02\x02\x02\u03A5\u03A2\x03\x02\x02\x02\u03A6\x89\x03\x02\x02' +
    '\x02\u03A7\u03A8\x07\t\x02\x02\u03A8\u03AC\x07?\x02\x02\u03A9\u03AB\x05' +
    '\x0E\b\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC' +
    '\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AF\x03\x02' +
    '\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B0\x05\x8CG\x02\u03B0\u03B1' +
    '\x07q\x02\x02\u03B1\u03B2\x07@\x02\x02\u03B2\u03B3\x05\x80A\x02\u03B3' +
    '\x8B\x03\x02\x02\x02\u03B4\u03B9\x05^0\x02\u03B5\u03B6\x07\\\x02\x02\u03B6' +
    '\u03B8\x05^0\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02' +
    '\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\x8D\x03' +
    '\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BD\x07\x15\x02\x02\u03BD' +
    '\u03BE\x05\x80A\x02\u03BE\x8F\x03\x02\x02\x02\u03BF\u03C0\x07?\x02\x02' +
    '\u03C0\u03C2\x05\x92J\x02\u03C1\u03C3\x07E\x02\x02\u03C2\u03C1\x03\x02' +
    '\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4' +
    '\u03C5\x07@\x02\x02\u03C5\x91\x03\x02\x02\x02\u03C6\u03CB\x05\x94K\x02' +
    '\u03C7\u03C8\x07E\x02\x02\u03C8\u03CA\x05\x94K\x02\u03C9\u03C7\x03\x02' +
    '\x02\x02\u03CA\u03CD\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB' +
    '\u03CC\x03\x02\x02\x02\u03CC\x93\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02' +
    '\x02\u03CE\u03D0\x05\x0E\b\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3' +
    '\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02' +
    '\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D5\x05' +
    'P)\x02\u03D5\u03D6\x05J&\x02\u03D6\u03D7\x07H\x02\x02\u03D7\u03D8\x05' +
    '\xA6T\x02\u03D8\x95\x03\x02\x02\x02\u03D9\u03DB\x05\x98M\x02\u03DA\u03D9' +
    '\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02' +
    '\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03E0\x05' +
    '\x82B\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1' +
    '\u03DF\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\x97\x03\x02\x02' +
    '\x02\u03E3\u03E6\x07\b\x02\x02\u03E4\u03E7\x05\xA6T\x02\u03E5\u03E7\x07' +
    'q\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7' +
    '\u03E8\x03\x02\x02\x02\u03E8\u03EC\x07N\x02\x02\u03E9\u03EA\x07\x0E\x02' +
    '\x02\u03EA\u03EC\x07N\x02\x02\u03EB\u03E3\x03\x02\x02\x02\u03EB\u03E9' +
    '\x03\x02\x02\x02\u03EC\x99\x03\x02\x02\x02\u03ED\u03FA\x05\x9EP\x02\u03EE' +
    '\u03F0\x05\x9CO\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02' +
    '\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x07E\x02\x02\u03F2\u03F4' +
    '\x05\xA6T\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02' +
    '\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7\x07E\x02\x02\u03F6\u03F8\x05' +
    '\xA2R\x02\u03F7\u03F6\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8' +
    '\u03FA\x03\x02\x02\x02\u03F9\u03ED\x03\x02\x02\x02\u03F9\u03EF\x03\x02' +
    '\x02\x02\u03FA\x9B\x03\x02\x02\x02\u03FB\u03FE\x05\x84C\x02\u03FC\u03FE' +
    '\x05\xA2R\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02' +
    '\u03FE\x9D\x03\x02\x02\x02\u03FF\u0401\x05\x0E\b\x02\u0400\u03FF\x03\x02' +
    '\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402' +
    '\u0403\x03\x02\x02\x02\u0403\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02' +
    '\x02\x02\u0405\u0406\x05\xC6d\x02\u0406\u0407\x05J&\x02\u0407\u0408\x07' +
    'N\x02\x02\u0408\u0409\x05\xA6T\x02\u0409\x9F\x03\x02\x02\x02\u040A\u040B' +
    '\x07?\x02\x02\u040B\u040C\x05\xA6T\x02\u040C\u040D\x07@\x02\x02\u040D' +
    '\xA1\x03\x02\x02\x02\u040E\u0413\x05\xA6T\x02\u040F\u0410\x07F\x02\x02' +
    '\u0410\u0412\x05\xA6T\x02\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03' +
    '\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414' +
    '\xA3\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0416\u0417\x07q\x02' +
    '\x02\u0417\u0419\x07?\x02\x02\u0418\u041A\x05\xA2R\x02\u0419\u0418\x03' +
    '\x02\x02\x02\u0419\u041A\x03\x02\x02';
  private static readonly _serializedATNSegment2: string =
    '\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041C\x07@\x02\x02\u041C\xA5\x03' +
    '\x02\x02\x02\u041D\u041E\bT\x01\x02\u041E\u043D\x05\xAEX\x02\u041F\u043D' +
    '\x05\xA4S\x02\u0420\u0421\x07!\x02\x02\u0421\u043D\x05\xB2Z\x02\u0422' +
    '\u0423\x07?\x02\x02\u0423\u0424\x05\xC6d\x02\u0424\u0425\x07@\x02\x02' +
    '\u0425\u0426\x05\xA6T\x17\u0426\u043D\x03\x02\x02\x02\u0427\u0428\t\x05' +
    '\x02\x02\u0428\u043D\x05\xA6T\x15\u0429\u042A\t\x06\x02\x02\u042A\u043D' +
    '\x05\xA6T\x14\u042B\u043D\x05\xA8U\x02\u042C\u042D\x05\xC6d\x02\u042D' +
    '\u0433\x07k\x02\x02\u042E\u0430\x05\xCAf\x02\u042F\u042E\x03\x02\x02\x02' +
    '\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0434\x07' +
    'q\x02\x02\u0432\u0434\x07!\x02\x02\u0433\u042F\x03\x02\x02\x02\u0433\u0432' +
    '\x03\x02\x02\x02\u0434\u043D\x03\x02\x02\x02\u0435\u0436\x05\xB0Y\x02' +
    '\u0436\u0438\x07k\x02\x02\u0437\u0439\x05\xCAf\x02\u0438\u0437\x03\x02' +
    '\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A' +
    '\u043B\x07!\x02\x02\u043B\u043D\x03\x02\x02\x02\u043C\u041D\x03\x02\x02' +
    '\x02\u043C\u041F\x03\x02\x02\x02\u043C\u0420\x03\x02\x02\x02\u043C\u0422' +
    '\x03\x02\x02\x02\u043C\u0427\x03\x02\x02\x02\u043C\u0429\x03\x02\x02\x02' +
    '\u043C\u042B\x03\x02\x02\x02\u043C\u042C\x03\x02\x02\x02\u043C\u0435\x03' +
    '\x02\x02\x02\u043D\u048E\x03\x02\x02\x02\u043E\u043F\f\x13\x02\x02\u043F' +
    '\u0440\t\x07\x02\x02\u0440\u048D\x05\xA6T\x14\u0441\u0442\f\x12\x02\x02' +
    '\u0442\u0443\t\b\x02\x02\u0443\u048D\x05\xA6T\x13\u0444\u044C\f\x11\x02' +
    '\x02\u0445\u0446\x07J\x02\x02\u0446\u044D\x07J\x02\x02\u0447\u0448\x07' +
    'I\x02\x02\u0448\u0449\x07I\x02\x02\u0449\u044D\x07I\x02\x02\u044A\u044B' +
    '\x07I\x02\x02\u044B\u044D\x07I\x02\x02\u044C\u0445\x03\x02\x02\x02\u044C' +
    '\u0447\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044D\u044E\x03\x02' +
    '\x02\x02\u044E\u048D\x05\xA6T\x12\u044F\u0450\f\x10\x02\x02\u0450\u0451' +
    '\t\t\x02\x02\u0451\u048D\x05\xA6T\x11\u0452\u0453\f\x0E\x02\x02\u0453' +
    '\u0454\t\n\x02\x02\u0454\u048D\x05\xA6T\x0F\u0455\u0456\f\r\x02\x02\u0456' +
    '\u0457\x07[\x02\x02\u0457\u048D\x05\xA6T\x0E\u0458\u0459\f\f\x02\x02\u0459' +
    '\u045A\x07]\x02\x02\u045A\u048D\x05\xA6T\r\u045B\u045C\f\v\x02\x02\u045C' +
    '\u045D\x07\\\x02\x02\u045D\u048D\x05\xA6T\f\u045E\u045F\f\n\x02\x02\u045F' +
    '\u0460\x07S\x02\x02\u0460\u048D\x05\xA6T\v\u0461\u0462\f\t\x02\x02\u0462' +
    '\u0463\x07T\x02\x02\u0463\u048D\x05\xA6T\n\u0464\u0465\f\b\x02\x02\u0465' +
    '\u0466\x07M\x02\x02\u0466\u0467\x05\xA6T\x02\u0467\u0468\x07N\x02\x02' +
    '\u0468\u0469\x05\xA6T\t\u0469\u048D\x03\x02\x02\x02\u046A\u046B\f\x07' +
    '\x02\x02\u046B\u046C\t\v\x02\x02\u046C\u048D\x05\xA6T\x07\u046D\u046E' +
    '\f\x1B\x02\x02\u046E\u047A\x07G\x02\x02\u046F\u047B\x07q\x02\x02\u0470' +
    '\u047B\x05\xA4S\x02\u0471\u047B\x07-\x02\x02\u0472\u0474\x07!\x02\x02' +
    '\u0473\u0475\x05\xC2b\x02\u0474\u0473\x03\x02\x02\x02\u0474\u0475\x03' +
    '\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u047B\x05\xB6\\\x02\u0477' +
    '\u0478\x07*\x02\x02\u0478\u047B\x05\xCCg\x02\u0479\u047B\x05\xBC_\x02' +
    '\u047A\u046F\x03\x02\x02\x02\u047A\u0470\x03\x02\x02\x02\u047A\u0471\x03' +
    '\x02\x02\x02\u047A\u0472\x03\x02\x02\x02\u047A\u0477\x03\x02\x02\x02\u047A' +
    '\u0479\x03\x02\x02\x02\u047B\u048D\x03\x02\x02\x02\u047C\u047D\f\x1A\x02' +
    '\x02\u047D\u047E\x07C\x02\x02\u047E\u047F\x05\xA6T\x02\u047F\u0480\x07' +
    'D\x02\x02\u0480\u048D\x03\x02\x02\x02\u0481\u0482\f\x16\x02\x02\u0482' +
    '\u048D\t\f\x02\x02\u0483\u0484\f\x0F\x02\x02\u0484\u0485\x07\x1C\x02\x02' +
    '\u0485\u048D\x05\xC6d\x02\u0486\u0487\f\x05\x02\x02\u0487\u0489\x07k\x02' +
    '\x02\u0488\u048A\x05\xCAf\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A' +
    '\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048D\x07q\x02\x02' +
    '\u048C\u043E\x03\x02\x02\x02\u048C\u0441\x03\x02\x02\x02\u048C\u0444\x03' +
    '\x02\x02\x02\u048C\u044F\x03\x02\x02\x02\u048C\u0452\x03\x02\x02\x02\u048C' +
    '\u0455\x03\x02\x02\x02\u048C\u0458\x03\x02\x02\x02\u048C\u045B\x03\x02' +
    '\x02\x02\u048C\u045E\x03\x02\x02\x02\u048C\u0461\x03\x02\x02\x02\u048C' +
    '\u0464\x03\x02\x02\x02\u048C\u046A\x03\x02\x02\x02\u048C\u046D\x03\x02' +
    '\x02\x02\u048C\u047C\x03\x02\x02\x02\u048C\u0481\x03\x02\x02\x02\u048C' +
    '\u0483\x03\x02\x02\x02\u048C\u0486\x03\x02\x02\x02\u048D\u0490\x03\x02' +
    '\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F' +
    '\xA7\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0491\u0492\x05\xAAV' +
    '\x02\u0492\u0493\x07j\x02\x02\u0493\u0494\x05\xACW\x02\u0494\xA9\x03\x02' +
    '\x02\x02\u0495\u04A6\x07q\x02\x02\u0496\u0498\x07?\x02\x02\u0497\u0499' +
    '\x05X-\x02\u0498\u0497\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499' +
    '\u049A\x03\x02\x02\x02\u049A\u04A6\x07@\x02\x02\u049B\u049C\x07?\x02\x02' +
    '\u049C\u04A1\x07q\x02\x02\u049D\u049E\x07F\x02\x02\u049E\u04A0\x07q\x02' +
    '\x02\u049F\u049D\x03\x02\x02\x02\u04A0\u04A3\x03\x02\x02\x02\u04A1\u049F' +
    '\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A4\x03\x02\x02\x02' +
    '\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04A6\x07@\x02\x02\u04A5\u0495\x03' +
    '\x02\x02\x02\u04A5\u0496\x03\x02\x02\x02\u04A5\u049B\x03\x02\x02\x02\u04A6' +
    '\xAB\x03\x02\x02\x02\u04A7\u04AA\x05\xA6T\x02\u04A8\u04AA\x05\x80A\x02' +
    '\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04A8\x03\x02\x02\x02\u04AA\xAD\x03' +
    '\x02\x02\x02\u04AB\u04AC\x07?\x02\x02\u04AC\u04AD\x05\xA6T\x02\u04AD\u04AE' +
    '\x07@\x02\x02\u04AE\u04BE\x03\x02\x02\x02\u04AF\u04BE\x07-\x02\x02\u04B0' +
    '\u04BE\x07*\x02\x02\u04B1\u04BE\x05`1\x02\u04B2\u04BE\x07q\x02\x02\u04B3' +
    '\u04B4\x05.\x18\x02\u04B4\u04B5\x07G\x02\x02\u04B5\u04B6\x07\v\x02\x02' +
    '\u04B6\u04BE\x03\x02\x02\x02\u04B7\u04BB\x05\xC2b\x02\u04B8\u04BC\x05' +
    '\xCEh\x02\u04B9\u04BA\x07-\x02\x02\u04BA\u04BC\x05\xD0i\x02\u04BB\u04B8' +
    '\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC\u04BE\x03\x02\x02\x02' +
    '\u04BD\u04AB\x03\x02\x02\x02\u04BD\u04AF\x03\x02\x02\x02\u04BD\u04B0\x03' +
    '\x02\x02\x02\u04BD\u04B1\x03\x02\x02\x02\u04BD\u04B2\x03\x02\x02\x02\u04BD' +
    '\u04B3\x03\x02\x02\x02\u04BD\u04B7\x03\x02\x02\x02\u04BE\xAF\x03\x02\x02' +
    '\x02\u04BF\u04C0\x05P)\x02\u04C0\u04C1\x07G\x02\x02\u04C1\u04C3\x03\x02' +
    '\x02\x02\u04C2\u04BF\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3' +
    '\u04C7\x03\x02\x02\x02\u04C4\u04C6\x05f4\x02\u04C5\u04C4\x03\x02\x02\x02' +
    '\u04C6\u04C9\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03' +
    '\x02\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04CA' +
    '\u04CC\x07q\x02\x02\u04CB\u04CD\x05\xCAf\x02\u04CC\u04CB\x03\x02\x02\x02' +
    '\u04CC\u04CD\x03\x02\x02\x02\u04CD\xB1\x03\x02\x02\x02\u04CE\u04CF\x05' +
    '\xC2b\x02\u04CF\u04D0\x05\xB4[\x02\u04D0\u04D1\x05\xBA^\x02\u04D1\u04D8' +
    '\x03\x02\x02\x02\u04D2\u04D5\x05\xB4[\x02\u04D3\u04D6\x05\xB8]\x02\u04D4' +
    '\u04D6\x05\xBA^\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D4\x03\x02\x02' +
    '\x02\u04D6\u04D8\x03\x02\x02\x02\u04D7\u04CE\x03\x02\x02\x02\u04D7\u04D2' +
    '\x03\x02\x02\x02\u04D8\xB3\x03\x02\x02\x02\u04D9\u04DB\x07q\x02\x02\u04DA' +
    '\u04DC\x05\xBE`\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02' +
    '\x02\u04DC\u04E4\x03\x02\x02\x02\u04DD\u04DE\x07G\x02\x02\u04DE\u04E0' +
    '\x07q\x02\x02\u04DF\u04E1\x05\xBE`\x02\u04E0\u04DF\x03\x02\x02\x02\u04E0' +
    '\u04E1\x03\x02\x02\x02\u04E1\u04E3\x03\x02\x02\x02\u04E2\u04DD\x03\x02' +
    '\x02\x02\u04E3\u04E6\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E4' +
    '\u04E5\x03\x02\x02\x02\u04E5\u04E9\x03\x02\x02\x02\u04E6\u04E4\x03\x02' +
    '\x02\x02\u04E7\u04E9\x05\xC8e\x02\u04E8\u04D9\x03\x02\x02\x02\u04E8\u04E7' +
    '\x03\x02\x02\x02\u04E9\xB5\x03\x02\x02\x02\u04EA\u04EC\x07q\x02\x02\u04EB' +
    '\u04ED\x05\xC0a\x02\u04EC\u04EB\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02' +
    '\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04EF\x05\xBA^\x02\u04EF\xB7\x03' +
    '\x02\x02\x02\u04F0\u050C\x07C\x02\x02\u04F1\u04F6\x07D\x02\x02\u04F2\u04F3' +
    '\x07C\x02\x02\u04F3\u04F5\x07D\x02\x02\u04F4\u04F2\x03\x02\x02\x02\u04F5' +
    '\u04F8\x03\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03\x02' +
    '\x02\x02\u04F7\u04F9\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9' +
    '\u050D\x05N(\x02\u04FA\u04FB\x05\xA6T\x02\u04FB\u0502\x07D\x02\x02\u04FC' +
    '\u04FD\x07C\x02\x02\u04FD\u04FE\x05\xA6T\x02\u04FE\u04FF\x07D\x02\x02' +
    '\u04FF\u0501\x03\x02\x02\x02\u0500\u04FC\x03\x02\x02\x02\u0501\u0504\x03' +
    '\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503' +
    '\u0509\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0506\x07C\x02' +
    '\x02\u0506\u0508\x07D\x02\x02\u0507\u0505\x03\x02\x02\x02\u0508\u050B' +
    '\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02' +
    '\u050A\u050D\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C\u04F1\x03' +
    '\x02\x02\x02\u050C\u04FA\x03\x02\x02\x02\u050D\xB9\x03\x02\x02\x02\u050E' +
    '\u0510\x05\xD0i\x02\u050F\u0511\x05"\x12\x02\u0510\u050F\x03\x02\x02' +
    '\x02\u0510\u0511\x03\x02\x02\x02\u0511\xBB\x03\x02\x02\x02\u0512\u0513' +
    '\x05\xC2b\x02\u0513\u0514\x05\xCEh\x02\u0514\xBD\x03\x02\x02\x02\u0515' +
    '\u0516\x07J\x02\x02\u0516\u0519\x07I\x02\x02\u0517\u0519\x05\xCAf\x02' +
    '\u0518\u0515\x03\x02\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\xBF\x03' +
    '\x02\x02\x02\u051A\u051B\x07J\x02\x02\u051B\u051E\x07I\x02\x02\u051C\u051E' +
    '\x05\xC2b\x02\u051D\u051A\x03\x02\x02\x02\u051D\u051C\x03\x02\x02\x02' +
    '\u051E\xC1\x03\x02\x02\x02\u051F\u0520\x07J\x02\x02\u0520\u0521\x05\xC4' +
    'c\x02\u0521\u0522\x07I\x02\x02\u0522\xC3\x03\x02\x02\x02\u0523\u0528\x05' +
    '\xC6d\x02\u0524\u0525\x07F\x02\x02\u0525\u0527\x05\xC6d\x02\u0526\u0524' +
    '\x03\x02\x02\x02\u0527\u052A\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02' +
    '\u0528\u0529\x03\x02\x02\x02\u0529\xC5\x03\x02\x02\x02\u052A\u0528\x03' +
    '\x02\x02\x02\u052B\u052D\x05f4\x02\u052C\u052B\x03\x02\x02\x02\u052C\u052D' +
    '\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u0531\x05P)\x02\u052F' +
    '\u0531\x05\xC8e\x02\u0530\u052E\x03\x02\x02\x02\u0530\u052F\x03\x02\x02' +
    '\x02\u0531\u0536\x03\x02\x02\x02\u0532\u0533\x07C\x02\x02\u0533\u0535' +
    '\x07D\x02\x02\u0534\u0532\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02' +
    '\u0536\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\xC7\x03' +
    '\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u053A\t\r\x02\x02\u053A' +
    '\xC9\x03\x02\x02\x02\u053B\u053C\x07J\x02\x02\u053C\u0541\x05R*\x02\u053D' +
    '\u053E\x07F\x02\x02\u053E\u0540\x05R*\x02\u053F\u053D\x03\x02\x02\x02' +
    '\u0540\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03' +
    '\x02\x02\x02\u0542\u0544\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544' +
    '\u0545\x07I\x02\x02\u0545\xCB\x03\x02\x02\x02\u0546\u054D\x05\xD0i\x02' +
    '\u0547\u0548\x07G\x02\x02\u0548\u054A\x07q\x02\x02\u0549\u054B\x05\xD0' +
    'i\x02\u054A\u0549\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u054D' +
    '\x03\x02\x02\x02\u054C\u0546\x03\x02\x02\x02\u054C\u0547\x03\x02\x02\x02' +
    '\u054D\xCD\x03\x02\x02\x02\u054E\u054F\x07*\x02\x02\u054F\u0553\x05\xCC' +
    'g\x02\u0550\u0551\x07q\x02\x02\u0551\u0553\x05\xD0i\x02\u0552\u054E\x03' +
    '\x02\x02\x02\u0552\u0550\x03\x02\x02\x02\u0553\xCF\x03\x02\x02\x02\u0554' +
    '\u0556\x07?\x02\x02\u0555\u0557\x05\xA2R\x02\u0556\u0555\x03\x02\x02\x02' +
    '\u0556\u0557\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u0559\x07' +
    '@\x02\x02\u0559\xD1\x03\x02\x02\x02\xAA\xD3\xD8\xDE\xE6\xEF\xF4\xFB\u0102' +
    '\u0105\u010C\u0116\u011A\u011F\u0123\u0127\u0131\u0139\u013F\u0146\u014D' +
    '\u0151\u0154\u0157\u0160\u0166\u016B\u016E\u0174\u017A\u017E\u0186\u018F' +
    '\u0196\u019C\u01A0\u01AB\u01B4\u01B9\u01BF\u01C3\u01CF\u01DA\u01DF\u01E8' +
    '\u01F0\u01FA\u0203\u020B\u0210\u0218\u021D\u0227\u0231\u0237\u023E\u0243' +
    '\u024B\u024F\u0251\u0257\u025C\u0260\u0267\u0269\u0270\u0275\u027E\u0283' +
    '\u0286\u028B\u0294\u02A0\u02A9\u02B4\u02B7\u02BE\u02C8\u02D0\u02D3\u02D6' +
    '\u02E3\u02EB\u02F0\u02F8\u02FC\u0300\u0304\u0306\u030A\u0310\u031B\u0325' +
    '\u032A\u0333\u0338\u033B\u0342\u034B\u0362\u0365\u0368\u0370\u0374\u037C' +
    '\u0382\u038D\u0396\u039B\u03A5\u03AC\u03B9\u03C2\u03CB\u03D1\u03DC\u03E1' +
    '\u03E6\u03EB\u03EF\u03F3\u03F7\u03F9\u03FD\u0402\u0413\u0419\u042F\u0433' +
    '\u0438\u043C\u044C\u0474\u047A\u0489\u048C\u048E\u0498\u04A1\u04A5\u04A9' +
    '\u04BB\u04BD\u04C2\u04C7\u04CC\u04D5\u04D7\u04DB\u04E0\u04E4\u04E8\u04EC' +
    '\u04F6\u0502\u0509\u050C\u0510\u0518\u051D\u0528\u052C\u0530\u0536\u0541' +
    '\u054A\u054C\u0552\u0556';
  static readonly _serializedATN: string = Utils.join(
    [
      JavaParser._serializedATNSegment0,
      JavaParser._serializedATNSegment1,
      JavaParser._serializedATNSegment2,
    ],
    '',
  );
  static __ATN: ATN;
  static get _ATN(): ATN {
    if (!JavaParser.__ATN) {
      JavaParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(JavaParser._serializedATN),
      );
    }

    return JavaParser.__ATN;
  }
}

export class CompilationUnitContext extends ParserRuleContext {
  EOF(): TerminalNode {
    return this.getToken(JavaParser.EOF, 0);
  }
  packageDeclaration(): PackageDeclarationContext | undefined {
    return this.tryGetRuleContext(0, PackageDeclarationContext);
  }
  importDeclaration(): ImportDeclarationContext[];
  importDeclaration(i: number): ImportDeclarationContext;
  importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ImportDeclarationContext);
    } else {
      return this.getRuleContext(i, ImportDeclarationContext);
    }
  }
  typeDeclaration(): TypeDeclarationContext[];
  typeDeclaration(i: number): TypeDeclarationContext;
  typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeDeclarationContext);
    } else {
      return this.getRuleContext(i, TypeDeclarationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_compilationUnit;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterCompilationUnit) {
      listener.enterCompilationUnit(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitCompilationUnit) {
      listener.exitCompilationUnit(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitCompilationUnit) {
      return visitor.visitCompilationUnit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PackageDeclarationContext extends ParserRuleContext {
  PACKAGE(): TerminalNode {
    return this.getToken(JavaParser.PACKAGE, 0);
  }
  qualifiedName(): QualifiedNameContext {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext;
  annotation(i?: number): AnnotationContext | AnnotationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext);
    } else {
      return this.getRuleContext(i, AnnotationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_packageDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterPackageDeclaration) {
      listener.enterPackageDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitPackageDeclaration) {
      listener.exitPackageDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitPackageDeclaration) {
      return visitor.visitPackageDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ImportDeclarationContext extends ParserRuleContext {
  IMPORT(): TerminalNode {
    return this.getToken(JavaParser.IMPORT, 0);
  }
  qualifiedName(): QualifiedNameContext {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  STATIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STATIC, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_importDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterImportDeclaration) {
      listener.enterImportDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitImportDeclaration) {
      listener.exitImportDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitImportDeclaration) {
      return visitor.visitImportDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeDeclarationContext extends ParserRuleContext {
  classDeclaration(): ClassDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ClassDeclarationContext);
  }
  enumDeclaration(): EnumDeclarationContext | undefined {
    return this.tryGetRuleContext(0, EnumDeclarationContext);
  }
  interfaceDeclaration(): InterfaceDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceDeclarationContext);
  }
  annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
  }
  classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
  classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
  classOrInterfaceModifier(
    i?: number,
  ): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ClassOrInterfaceModifierContext);
    } else {
      return this.getRuleContext(i, ClassOrInterfaceModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeDeclaration) {
      listener.enterTypeDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeDeclaration) {
      listener.exitTypeDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeDeclaration) {
      return visitor.visitTypeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ModifierContext extends ParserRuleContext {
  classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
    return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
  }
  NATIVE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.NATIVE, 0);
  }
  SYNCHRONIZED(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SYNCHRONIZED, 0);
  }
  TRANSIENT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.TRANSIENT, 0);
  }
  VOLATILE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.VOLATILE, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_modifier;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterModifier) {
      listener.enterModifier(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitModifier) {
      listener.exitModifier(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitModifier) {
      return visitor.visitModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassOrInterfaceModifierContext extends ParserRuleContext {
  annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  PUBLIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.PUBLIC, 0);
  }
  PROTECTED(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.PROTECTED, 0);
  }
  PRIVATE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.PRIVATE, 0);
  }
  STATIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STATIC, 0);
  }
  ABSTRACT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.ABSTRACT, 0);
  }
  FINAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.FINAL, 0);
  }
  STRICTFP(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STRICTFP, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classOrInterfaceModifier;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassOrInterfaceModifier) {
      listener.enterClassOrInterfaceModifier(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassOrInterfaceModifier) {
      listener.exitClassOrInterfaceModifier(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassOrInterfaceModifier) {
      return visitor.visitClassOrInterfaceModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableModifierContext extends ParserRuleContext {
  FINAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.FINAL, 0);
  }
  annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_variableModifier;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterVariableModifier) {
      listener.enterVariableModifier(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitVariableModifier) {
      listener.exitVariableModifier(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitVariableModifier) {
      return visitor.visitVariableModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassDeclarationContext extends ParserRuleContext {
  CLASS(): TerminalNode {
    return this.getToken(JavaParser.CLASS, 0);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  classBody(): ClassBodyContext {
    return this.getRuleContext(0, ClassBodyContext);
  }
  typeParameters(): TypeParametersContext | undefined {
    return this.tryGetRuleContext(0, TypeParametersContext);
  }
  EXTENDS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.EXTENDS, 0);
  }
  typeType(): TypeTypeContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeContext);
  }
  IMPLEMENTS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IMPLEMENTS, 0);
  }
  typeList(): TypeListContext | undefined {
    return this.tryGetRuleContext(0, TypeListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassDeclaration) {
      listener.enterClassDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassDeclaration) {
      listener.exitClassDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassDeclaration) {
      return visitor.visitClassDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeParametersContext extends ParserRuleContext {
  typeParameter(): TypeParameterContext[];
  typeParameter(i: number): TypeParameterContext;
  typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeParameterContext);
    } else {
      return this.getRuleContext(i, TypeParameterContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeParameters;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeParameters) {
      listener.enterTypeParameters(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeParameters) {
      listener.exitTypeParameters(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeParameters) {
      return visitor.visitTypeParameters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeParameterContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext;
  annotation(i?: number): AnnotationContext | AnnotationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext);
    } else {
      return this.getRuleContext(i, AnnotationContext);
    }
  }
  EXTENDS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.EXTENDS, 0);
  }
  typeBound(): TypeBoundContext | undefined {
    return this.tryGetRuleContext(0, TypeBoundContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeParameter;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeParameter) {
      listener.enterTypeParameter(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeParameter) {
      listener.exitTypeParameter(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeParameter) {
      return visitor.visitTypeParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeBoundContext extends ParserRuleContext {
  typeType(): TypeTypeContext[];
  typeType(i: number): TypeTypeContext;
  typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeTypeContext);
    } else {
      return this.getRuleContext(i, TypeTypeContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeBound;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeBound) {
      listener.enterTypeBound(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeBound) {
      listener.exitTypeBound(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeBound) {
      return visitor.visitTypeBound(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EnumDeclarationContext extends ParserRuleContext {
  ENUM(): TerminalNode {
    return this.getToken(JavaParser.ENUM, 0);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  IMPLEMENTS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IMPLEMENTS, 0);
  }
  typeList(): TypeListContext | undefined {
    return this.tryGetRuleContext(0, TypeListContext);
  }
  enumConstants(): EnumConstantsContext | undefined {
    return this.tryGetRuleContext(0, EnumConstantsContext);
  }
  enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
    return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_enumDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterEnumDeclaration) {
      listener.enterEnumDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitEnumDeclaration) {
      listener.exitEnumDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitEnumDeclaration) {
      return visitor.visitEnumDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EnumConstantsContext extends ParserRuleContext {
  enumConstant(): EnumConstantContext[];
  enumConstant(i: number): EnumConstantContext;
  enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EnumConstantContext);
    } else {
      return this.getRuleContext(i, EnumConstantContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_enumConstants;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterEnumConstants) {
      listener.enterEnumConstants(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitEnumConstants) {
      listener.exitEnumConstants(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitEnumConstants) {
      return visitor.visitEnumConstants(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EnumConstantContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext;
  annotation(i?: number): AnnotationContext | AnnotationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext);
    } else {
      return this.getRuleContext(i, AnnotationContext);
    }
  }
  arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  classBody(): ClassBodyContext | undefined {
    return this.tryGetRuleContext(0, ClassBodyContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_enumConstant;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterEnumConstant) {
      listener.enterEnumConstant(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitEnumConstant) {
      listener.exitEnumConstant(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitEnumConstant) {
      return visitor.visitEnumConstant(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EnumBodyDeclarationsContext extends ParserRuleContext {
  classBodyDeclaration(): ClassBodyDeclarationContext[];
  classBodyDeclaration(i: number): ClassBodyDeclarationContext;
  classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ClassBodyDeclarationContext);
    } else {
      return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_enumBodyDeclarations;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterEnumBodyDeclarations) {
      listener.enterEnumBodyDeclarations(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitEnumBodyDeclarations) {
      listener.exitEnumBodyDeclarations(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitEnumBodyDeclarations) {
      return visitor.visitEnumBodyDeclarations(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceDeclarationContext extends ParserRuleContext {
  INTERFACE(): TerminalNode {
    return this.getToken(JavaParser.INTERFACE, 0);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  interfaceBody(): InterfaceBodyContext {
    return this.getRuleContext(0, InterfaceBodyContext);
  }
  typeParameters(): TypeParametersContext | undefined {
    return this.tryGetRuleContext(0, TypeParametersContext);
  }
  EXTENDS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.EXTENDS, 0);
  }
  typeList(): TypeListContext | undefined {
    return this.tryGetRuleContext(0, TypeListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceDeclaration) {
      listener.enterInterfaceDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceDeclaration) {
      listener.exitInterfaceDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceDeclaration) {
      return visitor.visitInterfaceDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassBodyContext extends ParserRuleContext {
  classBodyDeclaration(): ClassBodyDeclarationContext[];
  classBodyDeclaration(i: number): ClassBodyDeclarationContext;
  classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ClassBodyDeclarationContext);
    } else {
      return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classBody;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassBody) {
      listener.enterClassBody(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassBody) {
      listener.exitClassBody(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassBody) {
      return visitor.visitClassBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceBodyContext extends ParserRuleContext {
  interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
  interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
  interfaceBodyDeclaration(
    i?: number,
  ): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InterfaceBodyDeclarationContext);
    } else {
      return this.getRuleContext(i, InterfaceBodyDeclarationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceBody;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceBody) {
      listener.enterInterfaceBody(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceBody) {
      listener.exitInterfaceBody(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceBody) {
      return visitor.visitInterfaceBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassBodyDeclarationContext extends ParserRuleContext {
  block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  STATIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STATIC, 0);
  }
  memberDeclaration(): MemberDeclarationContext | undefined {
    return this.tryGetRuleContext(0, MemberDeclarationContext);
  }
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext;
  modifier(i?: number): ModifierContext | ModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ModifierContext);
    } else {
      return this.getRuleContext(i, ModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classBodyDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassBodyDeclaration) {
      listener.enterClassBodyDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassBodyDeclaration) {
      listener.exitClassBodyDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassBodyDeclaration) {
      return visitor.visitClassBodyDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MemberDeclarationContext extends ParserRuleContext {
  methodDeclaration(): MethodDeclarationContext | undefined {
    return this.tryGetRuleContext(0, MethodDeclarationContext);
  }
  genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
    return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
  }
  fieldDeclaration(): FieldDeclarationContext | undefined {
    return this.tryGetRuleContext(0, FieldDeclarationContext);
  }
  constructorDeclaration(): ConstructorDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ConstructorDeclarationContext);
  }
  genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
    return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
  }
  interfaceDeclaration(): InterfaceDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceDeclarationContext);
  }
  annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
  }
  classDeclaration(): ClassDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ClassDeclarationContext);
  }
  enumDeclaration(): EnumDeclarationContext | undefined {
    return this.tryGetRuleContext(0, EnumDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_memberDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterMemberDeclaration) {
      listener.enterMemberDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitMemberDeclaration) {
      listener.exitMemberDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitMemberDeclaration) {
      return visitor.visitMemberDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MethodDeclarationContext extends ParserRuleContext {
  typeTypeOrVoid(): TypeTypeOrVoidContext {
    return this.getRuleContext(0, TypeTypeOrVoidContext);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  formalParameters(): FormalParametersContext {
    return this.getRuleContext(0, FormalParametersContext);
  }
  methodBody(): MethodBodyContext {
    return this.getRuleContext(0, MethodBodyContext);
  }
  THROWS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THROWS, 0);
  }
  qualifiedNameList(): QualifiedNameListContext | undefined {
    return this.tryGetRuleContext(0, QualifiedNameListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_methodDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterMethodDeclaration) {
      listener.enterMethodDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitMethodDeclaration) {
      listener.exitMethodDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitMethodDeclaration) {
      return visitor.visitMethodDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MethodBodyContext extends ParserRuleContext {
  block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_methodBody;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterMethodBody) {
      listener.enterMethodBody(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitMethodBody) {
      listener.exitMethodBody(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitMethodBody) {
      return visitor.visitMethodBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeTypeOrVoidContext extends ParserRuleContext {
  typeType(): TypeTypeContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeContext);
  }
  VOID(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.VOID, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeTypeOrVoid;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeTypeOrVoid) {
      listener.enterTypeTypeOrVoid(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeTypeOrVoid) {
      listener.exitTypeTypeOrVoid(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeTypeOrVoid) {
      return visitor.visitTypeTypeOrVoid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class GenericMethodDeclarationContext extends ParserRuleContext {
  typeParameters(): TypeParametersContext {
    return this.getRuleContext(0, TypeParametersContext);
  }
  methodDeclaration(): MethodDeclarationContext {
    return this.getRuleContext(0, MethodDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_genericMethodDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterGenericMethodDeclaration) {
      listener.enterGenericMethodDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitGenericMethodDeclaration) {
      listener.exitGenericMethodDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitGenericMethodDeclaration) {
      return visitor.visitGenericMethodDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class GenericConstructorDeclarationContext extends ParserRuleContext {
  typeParameters(): TypeParametersContext {
    return this.getRuleContext(0, TypeParametersContext);
  }
  constructorDeclaration(): ConstructorDeclarationContext {
    return this.getRuleContext(0, ConstructorDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_genericConstructorDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterGenericConstructorDeclaration) {
      listener.enterGenericConstructorDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitGenericConstructorDeclaration) {
      listener.exitGenericConstructorDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitGenericConstructorDeclaration) {
      return visitor.visitGenericConstructorDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ConstructorDeclarationContext extends ParserRuleContext {
  _constructorBody: BlockContext;
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  formalParameters(): FormalParametersContext {
    return this.getRuleContext(0, FormalParametersContext);
  }
  block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  THROWS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THROWS, 0);
  }
  qualifiedNameList(): QualifiedNameListContext | undefined {
    return this.tryGetRuleContext(0, QualifiedNameListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_constructorDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterConstructorDeclaration) {
      listener.enterConstructorDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitConstructorDeclaration) {
      listener.exitConstructorDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitConstructorDeclaration) {
      return visitor.visitConstructorDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FieldDeclarationContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  variableDeclarators(): VariableDeclaratorsContext {
    return this.getRuleContext(0, VariableDeclaratorsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_fieldDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFieldDeclaration) {
      listener.enterFieldDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFieldDeclaration) {
      listener.exitFieldDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFieldDeclaration) {
      return visitor.visitFieldDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceBodyDeclarationContext extends ParserRuleContext {
  interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
  }
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext;
  modifier(i?: number): ModifierContext | ModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ModifierContext);
    } else {
      return this.getRuleContext(i, ModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceBodyDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceBodyDeclaration) {
      listener.enterInterfaceBodyDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceBodyDeclaration) {
      listener.exitInterfaceBodyDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceBodyDeclaration) {
      return visitor.visitInterfaceBodyDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceMemberDeclarationContext extends ParserRuleContext {
  constDeclaration(): ConstDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ConstDeclarationContext);
  }
  interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
  }
  genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
    return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
  }
  interfaceDeclaration(): InterfaceDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceDeclarationContext);
  }
  annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
  }
  classDeclaration(): ClassDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ClassDeclarationContext);
  }
  enumDeclaration(): EnumDeclarationContext | undefined {
    return this.tryGetRuleContext(0, EnumDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceMemberDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceMemberDeclaration) {
      listener.enterInterfaceMemberDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceMemberDeclaration) {
      listener.exitInterfaceMemberDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceMemberDeclaration) {
      return visitor.visitInterfaceMemberDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ConstDeclarationContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  constantDeclarator(): ConstantDeclaratorContext[];
  constantDeclarator(i: number): ConstantDeclaratorContext;
  constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConstantDeclaratorContext);
    } else {
      return this.getRuleContext(i, ConstantDeclaratorContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_constDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterConstDeclaration) {
      listener.enterConstDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitConstDeclaration) {
      listener.exitConstDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitConstDeclaration) {
      return visitor.visitConstDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ConstantDeclaratorContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  variableInitializer(): VariableInitializerContext {
    return this.getRuleContext(0, VariableInitializerContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_constantDeclarator;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterConstantDeclarator) {
      listener.enterConstantDeclarator(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitConstantDeclarator) {
      listener.exitConstantDeclarator(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitConstantDeclarator) {
      return visitor.visitConstantDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceMethodDeclarationContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  formalParameters(): FormalParametersContext {
    return this.getRuleContext(0, FormalParametersContext);
  }
  methodBody(): MethodBodyContext {
    return this.getRuleContext(0, MethodBodyContext);
  }
  typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
  }
  typeParameters(): TypeParametersContext | undefined {
    return this.tryGetRuleContext(0, TypeParametersContext);
  }
  interfaceMethodModifier(): InterfaceMethodModifierContext[];
  interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
  interfaceMethodModifier(
    i?: number,
  ): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InterfaceMethodModifierContext);
    } else {
      return this.getRuleContext(i, InterfaceMethodModifierContext);
    }
  }
  THROWS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THROWS, 0);
  }
  qualifiedNameList(): QualifiedNameListContext | undefined {
    return this.tryGetRuleContext(0, QualifiedNameListContext);
  }
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext;
  annotation(i?: number): AnnotationContext | AnnotationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext);
    } else {
      return this.getRuleContext(i, AnnotationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceMethodDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceMethodDeclaration) {
      listener.enterInterfaceMethodDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceMethodDeclaration) {
      listener.exitInterfaceMethodDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceMethodDeclaration) {
      return visitor.visitInterfaceMethodDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InterfaceMethodModifierContext extends ParserRuleContext {
  annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  PUBLIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.PUBLIC, 0);
  }
  ABSTRACT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.ABSTRACT, 0);
  }
  DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.DEFAULT, 0);
  }
  STATIC(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STATIC, 0);
  }
  STRICTFP(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STRICTFP, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_interfaceMethodModifier;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInterfaceMethodModifier) {
      listener.enterInterfaceMethodModifier(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInterfaceMethodModifier) {
      listener.exitInterfaceMethodModifier(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInterfaceMethodModifier) {
      return visitor.visitInterfaceMethodModifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
  typeParameters(): TypeParametersContext {
    return this.getRuleContext(0, TypeParametersContext);
  }
  interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
    return this.getRuleContext(0, InterfaceMethodDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_genericInterfaceMethodDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterGenericInterfaceMethodDeclaration) {
      listener.enterGenericInterfaceMethodDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitGenericInterfaceMethodDeclaration) {
      listener.exitGenericInterfaceMethodDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitGenericInterfaceMethodDeclaration) {
      return visitor.visitGenericInterfaceMethodDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableDeclaratorsContext extends ParserRuleContext {
  variableDeclarator(): VariableDeclaratorContext[];
  variableDeclarator(i: number): VariableDeclaratorContext;
  variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableDeclaratorContext);
    } else {
      return this.getRuleContext(i, VariableDeclaratorContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_variableDeclarators;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterVariableDeclarators) {
      listener.enterVariableDeclarators(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitVariableDeclarators) {
      listener.exitVariableDeclarators(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitVariableDeclarators) {
      return visitor.visitVariableDeclarators(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableDeclaratorContext extends ParserRuleContext {
  variableDeclaratorId(): VariableDeclaratorIdContext {
    return this.getRuleContext(0, VariableDeclaratorIdContext);
  }
  variableInitializer(): VariableInitializerContext | undefined {
    return this.tryGetRuleContext(0, VariableInitializerContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_variableDeclarator;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterVariableDeclarator) {
      listener.enterVariableDeclarator(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitVariableDeclarator) {
      listener.exitVariableDeclarator(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitVariableDeclarator) {
      return visitor.visitVariableDeclarator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableDeclaratorIdContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_variableDeclaratorId;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterVariableDeclaratorId) {
      listener.enterVariableDeclaratorId(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitVariableDeclaratorId) {
      listener.exitVariableDeclaratorId(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitVariableDeclaratorId) {
      return visitor.visitVariableDeclaratorId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableInitializerContext extends ParserRuleContext {
  arrayInitializer(): ArrayInitializerContext | undefined {
    return this.tryGetRuleContext(0, ArrayInitializerContext);
  }
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_variableInitializer;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterVariableInitializer) {
      listener.enterVariableInitializer(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitVariableInitializer) {
      listener.exitVariableInitializer(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitVariableInitializer) {
      return visitor.visitVariableInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArrayInitializerContext extends ParserRuleContext {
  variableInitializer(): VariableInitializerContext[];
  variableInitializer(i: number): VariableInitializerContext;
  variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableInitializerContext);
    } else {
      return this.getRuleContext(i, VariableInitializerContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_arrayInitializer;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterArrayInitializer) {
      listener.enterArrayInitializer(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitArrayInitializer) {
      listener.exitArrayInitializer(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitArrayInitializer) {
      return visitor.visitArrayInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassOrInterfaceTypeContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode[];
  IDENTIFIER(i: number): TerminalNode;
  IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(JavaParser.IDENTIFIER);
    } else {
      return this.getToken(JavaParser.IDENTIFIER, i);
    }
  }
  typeArguments(): TypeArgumentsContext[];
  typeArguments(i: number): TypeArgumentsContext;
  typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentsContext);
    } else {
      return this.getRuleContext(i, TypeArgumentsContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classOrInterfaceType;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassOrInterfaceType) {
      listener.enterClassOrInterfaceType(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassOrInterfaceType) {
      listener.exitClassOrInterfaceType(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassOrInterfaceType) {
      return visitor.visitClassOrInterfaceType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeArgumentContext extends ParserRuleContext {
  typeType(): TypeTypeContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeContext);
  }
  EXTENDS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.EXTENDS, 0);
  }
  SUPER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SUPER, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeArgument;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeArgument) {
      listener.enterTypeArgument(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeArgument) {
      listener.exitTypeArgument(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeArgument) {
      return visitor.visitTypeArgument(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class QualifiedNameListContext extends ParserRuleContext {
  qualifiedName(): QualifiedNameContext[];
  qualifiedName(i: number): QualifiedNameContext;
  qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QualifiedNameContext);
    } else {
      return this.getRuleContext(i, QualifiedNameContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_qualifiedNameList;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterQualifiedNameList) {
      listener.enterQualifiedNameList(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitQualifiedNameList) {
      listener.exitQualifiedNameList(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitQualifiedNameList) {
      return visitor.visitQualifiedNameList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FormalParametersContext extends ParserRuleContext {
  formalParameterList(): FormalParameterListContext | undefined {
    return this.tryGetRuleContext(0, FormalParameterListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_formalParameters;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFormalParameters) {
      listener.enterFormalParameters(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFormalParameters) {
      listener.exitFormalParameters(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFormalParameters) {
      return visitor.visitFormalParameters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FormalParameterListContext extends ParserRuleContext {
  formalParameter(): FormalParameterContext[];
  formalParameter(i: number): FormalParameterContext;
  formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FormalParameterContext);
    } else {
      return this.getRuleContext(i, FormalParameterContext);
    }
  }
  lastFormalParameter(): LastFormalParameterContext | undefined {
    return this.tryGetRuleContext(0, LastFormalParameterContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_formalParameterList;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFormalParameterList) {
      listener.enterFormalParameterList(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFormalParameterList) {
      listener.exitFormalParameterList(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFormalParameterList) {
      return visitor.visitFormalParameterList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FormalParameterContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  variableDeclaratorId(): VariableDeclaratorIdContext {
    return this.getRuleContext(0, VariableDeclaratorIdContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_formalParameter;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFormalParameter) {
      listener.enterFormalParameter(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFormalParameter) {
      listener.exitFormalParameter(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFormalParameter) {
      return visitor.visitFormalParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LastFormalParameterContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  variableDeclaratorId(): VariableDeclaratorIdContext {
    return this.getRuleContext(0, VariableDeclaratorIdContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_lastFormalParameter;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLastFormalParameter) {
      listener.enterLastFormalParameter(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLastFormalParameter) {
      listener.exitLastFormalParameter(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLastFormalParameter) {
      return visitor.visitLastFormalParameter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class QualifiedNameContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode[];
  IDENTIFIER(i: number): TerminalNode;
  IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(JavaParser.IDENTIFIER);
    } else {
      return this.getToken(JavaParser.IDENTIFIER, i);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_qualifiedName;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterQualifiedName) {
      listener.enterQualifiedName(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitQualifiedName) {
      listener.exitQualifiedName(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitQualifiedName) {
      return visitor.visitQualifiedName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LiteralContext extends ParserRuleContext {
  integerLiteral(): IntegerLiteralContext | undefined {
    return this.tryGetRuleContext(0, IntegerLiteralContext);
  }
  floatLiteral(): FloatLiteralContext | undefined {
    return this.tryGetRuleContext(0, FloatLiteralContext);
  }
  CHAR_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.CHAR_LITERAL, 0);
  }
  STRING_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.STRING_LITERAL, 0);
  }
  BOOL_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.BOOL_LITERAL, 0);
  }
  NULL_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.NULL_LITERAL, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_literal;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLiteral) {
      return visitor.visitLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IntegerLiteralContext extends ParserRuleContext {
  DECIMAL_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0);
  }
  HEX_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.HEX_LITERAL, 0);
  }
  OCT_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.OCT_LITERAL, 0);
  }
  BINARY_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.BINARY_LITERAL, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_integerLiteral;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterIntegerLiteral) {
      listener.enterIntegerLiteral(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitIntegerLiteral) {
      listener.exitIntegerLiteral(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitIntegerLiteral) {
      return visitor.visitIntegerLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FloatLiteralContext extends ParserRuleContext {
  FLOAT_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0);
  }
  HEX_FLOAT_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_floatLiteral;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFloatLiteral) {
      listener.enterFloatLiteral(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFloatLiteral) {
      listener.exitFloatLiteral(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFloatLiteral) {
      return visitor.visitFloatLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationContext extends ParserRuleContext {
  qualifiedName(): QualifiedNameContext {
    return this.getRuleContext(0, QualifiedNameContext);
  }
  elementValuePairs(): ElementValuePairsContext | undefined {
    return this.tryGetRuleContext(0, ElementValuePairsContext);
  }
  elementValue(): ElementValueContext | undefined {
    return this.tryGetRuleContext(0, ElementValueContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotation;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotation) {
      listener.enterAnnotation(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotation) {
      listener.exitAnnotation(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotation) {
      return visitor.visitAnnotation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ElementValuePairsContext extends ParserRuleContext {
  elementValuePair(): ElementValuePairContext[];
  elementValuePair(i: number): ElementValuePairContext;
  elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ElementValuePairContext);
    } else {
      return this.getRuleContext(i, ElementValuePairContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_elementValuePairs;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterElementValuePairs) {
      listener.enterElementValuePairs(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitElementValuePairs) {
      listener.exitElementValuePairs(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitElementValuePairs) {
      return visitor.visitElementValuePairs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ElementValuePairContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  elementValue(): ElementValueContext {
    return this.getRuleContext(0, ElementValueContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_elementValuePair;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterElementValuePair) {
      listener.enterElementValuePair(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitElementValuePair) {
      listener.exitElementValuePair(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitElementValuePair) {
      return visitor.visitElementValuePair(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ElementValueContext extends ParserRuleContext {
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
    return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_elementValue;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterElementValue) {
      listener.enterElementValue(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitElementValue) {
      listener.exitElementValue(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitElementValue) {
      return visitor.visitElementValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ElementValueArrayInitializerContext extends ParserRuleContext {
  elementValue(): ElementValueContext[];
  elementValue(i: number): ElementValueContext;
  elementValue(i?: number): ElementValueContext | ElementValueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ElementValueContext);
    } else {
      return this.getRuleContext(i, ElementValueContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_elementValueArrayInitializer;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterElementValueArrayInitializer) {
      listener.enterElementValueArrayInitializer(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitElementValueArrayInitializer) {
      listener.exitElementValueArrayInitializer(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitElementValueArrayInitializer) {
      return visitor.visitElementValueArrayInitializer(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationTypeDeclarationContext extends ParserRuleContext {
  INTERFACE(): TerminalNode {
    return this.getToken(JavaParser.INTERFACE, 0);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  annotationTypeBody(): AnnotationTypeBodyContext {
    return this.getRuleContext(0, AnnotationTypeBodyContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationTypeDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationTypeDeclaration) {
      listener.enterAnnotationTypeDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationTypeDeclaration) {
      listener.exitAnnotationTypeDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationTypeDeclaration) {
      return visitor.visitAnnotationTypeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationTypeBodyContext extends ParserRuleContext {
  annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
  annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
  annotationTypeElementDeclaration(
    i?: number,
  ): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
    } else {
      return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationTypeBody;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationTypeBody) {
      listener.enterAnnotationTypeBody(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationTypeBody) {
      listener.exitAnnotationTypeBody(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationTypeBody) {
      return visitor.visitAnnotationTypeBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
  annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
    return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
  }
  modifier(): ModifierContext[];
  modifier(i: number): ModifierContext;
  modifier(i?: number): ModifierContext | ModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ModifierContext);
    } else {
      return this.getRuleContext(i, ModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationTypeElementDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationTypeElementDeclaration) {
      listener.enterAnnotationTypeElementDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationTypeElementDeclaration) {
      listener.exitAnnotationTypeElementDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationTypeElementDeclaration) {
      return visitor.visitAnnotationTypeElementDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationTypeElementRestContext extends ParserRuleContext {
  typeType(): TypeTypeContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeContext);
  }
  annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
    return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
  }
  classDeclaration(): ClassDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ClassDeclarationContext);
  }
  interfaceDeclaration(): InterfaceDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceDeclarationContext);
  }
  enumDeclaration(): EnumDeclarationContext | undefined {
    return this.tryGetRuleContext(0, EnumDeclarationContext);
  }
  annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationTypeElementRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationTypeElementRest) {
      listener.enterAnnotationTypeElementRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationTypeElementRest) {
      listener.exitAnnotationTypeElementRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationTypeElementRest) {
      return visitor.visitAnnotationTypeElementRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
  annotationMethodRest(): AnnotationMethodRestContext | undefined {
    return this.tryGetRuleContext(0, AnnotationMethodRestContext);
  }
  annotationConstantRest(): AnnotationConstantRestContext | undefined {
    return this.tryGetRuleContext(0, AnnotationConstantRestContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationMethodOrConstantRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationMethodOrConstantRest) {
      listener.enterAnnotationMethodOrConstantRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationMethodOrConstantRest) {
      listener.exitAnnotationMethodOrConstantRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationMethodOrConstantRest) {
      return visitor.visitAnnotationMethodOrConstantRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationMethodRestContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  defaultValue(): DefaultValueContext | undefined {
    return this.tryGetRuleContext(0, DefaultValueContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationMethodRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationMethodRest) {
      listener.enterAnnotationMethodRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationMethodRest) {
      listener.exitAnnotationMethodRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationMethodRest) {
      return visitor.visitAnnotationMethodRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AnnotationConstantRestContext extends ParserRuleContext {
  variableDeclarators(): VariableDeclaratorsContext {
    return this.getRuleContext(0, VariableDeclaratorsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_annotationConstantRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterAnnotationConstantRest) {
      listener.enterAnnotationConstantRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitAnnotationConstantRest) {
      listener.exitAnnotationConstantRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitAnnotationConstantRest) {
      return visitor.visitAnnotationConstantRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DefaultValueContext extends ParserRuleContext {
  DEFAULT(): TerminalNode {
    return this.getToken(JavaParser.DEFAULT, 0);
  }
  elementValue(): ElementValueContext {
    return this.getRuleContext(0, ElementValueContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_defaultValue;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterDefaultValue) {
      listener.enterDefaultValue(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitDefaultValue) {
      listener.exitDefaultValue(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitDefaultValue) {
      return visitor.visitDefaultValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockContext extends ParserRuleContext {
  blockStatement(): BlockStatementContext[];
  blockStatement(i: number): BlockStatementContext;
  blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockStatementContext);
    } else {
      return this.getRuleContext(i, BlockStatementContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_block;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockStatementContext extends ParserRuleContext {
  localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
  }
  statement(): StatementContext | undefined {
    return this.tryGetRuleContext(0, StatementContext);
  }
  localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_blockStatement;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterBlockStatement) {
      listener.enterBlockStatement(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitBlockStatement) {
      listener.exitBlockStatement(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitBlockStatement) {
      return visitor.visitBlockStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LocalVariableDeclarationContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  variableDeclarators(): VariableDeclaratorsContext {
    return this.getRuleContext(0, VariableDeclaratorsContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_localVariableDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLocalVariableDeclaration) {
      listener.enterLocalVariableDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLocalVariableDeclaration) {
      listener.exitLocalVariableDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLocalVariableDeclaration) {
      return visitor.visitLocalVariableDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LocalTypeDeclarationContext extends ParserRuleContext {
  classDeclaration(): ClassDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ClassDeclarationContext);
  }
  interfaceDeclaration(): InterfaceDeclarationContext | undefined {
    return this.tryGetRuleContext(0, InterfaceDeclarationContext);
  }
  classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
  classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
  classOrInterfaceModifier(
    i?: number,
  ): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ClassOrInterfaceModifierContext);
    } else {
      return this.getRuleContext(i, ClassOrInterfaceModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_localTypeDeclaration;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLocalTypeDeclaration) {
      listener.enterLocalTypeDeclaration(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLocalTypeDeclaration) {
      listener.exitLocalTypeDeclaration(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLocalTypeDeclaration) {
      return visitor.visitLocalTypeDeclaration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  _blockLabel: BlockContext;
  _statementExpression: ExpressionContext;
  _identifierLabel: Token;
  block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  ASSERT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.ASSERT, 0);
  }
  expression(): ExpressionContext[];
  expression(i: number): ExpressionContext;
  expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  IF(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IF, 0);
  }
  parExpression(): ParExpressionContext | undefined {
    return this.tryGetRuleContext(0, ParExpressionContext);
  }
  statement(): StatementContext[];
  statement(i: number): StatementContext;
  statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  ELSE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.ELSE, 0);
  }
  FOR(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.FOR, 0);
  }
  forControl(): ForControlContext | undefined {
    return this.tryGetRuleContext(0, ForControlContext);
  }
  WHILE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.WHILE, 0);
  }
  DO(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.DO, 0);
  }
  TRY(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.TRY, 0);
  }
  finallyBlock(): FinallyBlockContext | undefined {
    return this.tryGetRuleContext(0, FinallyBlockContext);
  }
  catchClause(): CatchClauseContext[];
  catchClause(i: number): CatchClauseContext;
  catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CatchClauseContext);
    } else {
      return this.getRuleContext(i, CatchClauseContext);
    }
  }
  resourceSpecification(): ResourceSpecificationContext | undefined {
    return this.tryGetRuleContext(0, ResourceSpecificationContext);
  }
  SWITCH(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SWITCH, 0);
  }
  switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
  switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
  switchBlockStatementGroup(
    i?: number,
  ): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SwitchBlockStatementGroupContext);
    } else {
      return this.getRuleContext(i, SwitchBlockStatementGroupContext);
    }
  }
  switchLabel(): SwitchLabelContext[];
  switchLabel(i: number): SwitchLabelContext;
  switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SwitchLabelContext);
    } else {
      return this.getRuleContext(i, SwitchLabelContext);
    }
  }
  SYNCHRONIZED(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SYNCHRONIZED, 0);
  }
  RETURN(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.RETURN, 0);
  }
  THROW(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THROW, 0);
  }
  BREAK(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.BREAK, 0);
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  CONTINUE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.CONTINUE, 0);
  }
  SEMI(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_statement;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CatchClauseContext extends ParserRuleContext {
  CATCH(): TerminalNode {
    return this.getToken(JavaParser.CATCH, 0);
  }
  catchType(): CatchTypeContext {
    return this.getRuleContext(0, CatchTypeContext);
  }
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_catchClause;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterCatchClause) {
      listener.enterCatchClause(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitCatchClause) {
      listener.exitCatchClause(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitCatchClause) {
      return visitor.visitCatchClause(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CatchTypeContext extends ParserRuleContext {
  qualifiedName(): QualifiedNameContext[];
  qualifiedName(i: number): QualifiedNameContext;
  qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QualifiedNameContext);
    } else {
      return this.getRuleContext(i, QualifiedNameContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_catchType;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterCatchType) {
      listener.enterCatchType(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitCatchType) {
      listener.exitCatchType(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitCatchType) {
      return visitor.visitCatchType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FinallyBlockContext extends ParserRuleContext {
  FINALLY(): TerminalNode {
    return this.getToken(JavaParser.FINALLY, 0);
  }
  block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_finallyBlock;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterFinallyBlock) {
      listener.enterFinallyBlock(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitFinallyBlock) {
      listener.exitFinallyBlock(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitFinallyBlock) {
      return visitor.visitFinallyBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ResourceSpecificationContext extends ParserRuleContext {
  resources(): ResourcesContext {
    return this.getRuleContext(0, ResourcesContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_resourceSpecification;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterResourceSpecification) {
      listener.enterResourceSpecification(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitResourceSpecification) {
      listener.exitResourceSpecification(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitResourceSpecification) {
      return visitor.visitResourceSpecification(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ResourcesContext extends ParserRuleContext {
  resource(): ResourceContext[];
  resource(i: number): ResourceContext;
  resource(i?: number): ResourceContext | ResourceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ResourceContext);
    } else {
      return this.getRuleContext(i, ResourceContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_resources;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterResources) {
      listener.enterResources(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitResources) {
      listener.exitResources(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitResources) {
      return visitor.visitResources(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ResourceContext extends ParserRuleContext {
  classOrInterfaceType(): ClassOrInterfaceTypeContext {
    return this.getRuleContext(0, ClassOrInterfaceTypeContext);
  }
  variableDeclaratorId(): VariableDeclaratorIdContext {
    return this.getRuleContext(0, VariableDeclaratorIdContext);
  }
  expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_resource;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterResource) {
      listener.enterResource(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitResource) {
      listener.exitResource(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitResource) {
      return visitor.visitResource(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SwitchBlockStatementGroupContext extends ParserRuleContext {
  switchLabel(): SwitchLabelContext[];
  switchLabel(i: number): SwitchLabelContext;
  switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SwitchLabelContext);
    } else {
      return this.getRuleContext(i, SwitchLabelContext);
    }
  }
  blockStatement(): BlockStatementContext[];
  blockStatement(i: number): BlockStatementContext;
  blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockStatementContext);
    } else {
      return this.getRuleContext(i, BlockStatementContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_switchBlockStatementGroup;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterSwitchBlockStatementGroup) {
      listener.enterSwitchBlockStatementGroup(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitSwitchBlockStatementGroup) {
      listener.exitSwitchBlockStatementGroup(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitSwitchBlockStatementGroup) {
      return visitor.visitSwitchBlockStatementGroup(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SwitchLabelContext extends ParserRuleContext {
  _constantExpression: ExpressionContext;
  _enumConstantName: Token;
  CASE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.CASE, 0);
  }
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.DEFAULT, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_switchLabel;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterSwitchLabel) {
      listener.enterSwitchLabel(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitSwitchLabel) {
      listener.exitSwitchLabel(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitSwitchLabel) {
      return visitor.visitSwitchLabel(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForControlContext extends ParserRuleContext {
  _forUpdate: ExpressionListContext;
  enhancedForControl(): EnhancedForControlContext | undefined {
    return this.tryGetRuleContext(0, EnhancedForControlContext);
  }
  forInit(): ForInitContext | undefined {
    return this.tryGetRuleContext(0, ForInitContext);
  }
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  expressionList(): ExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_forControl;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterForControl) {
      listener.enterForControl(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitForControl) {
      listener.exitForControl(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitForControl) {
      return visitor.visitForControl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForInitContext extends ParserRuleContext {
  localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
  }
  expressionList(): ExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_forInit;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterForInit) {
      listener.enterForInit(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitForInit) {
      listener.exitForInit(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitForInit) {
      return visitor.visitForInit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class EnhancedForControlContext extends ParserRuleContext {
  typeType(): TypeTypeContext {
    return this.getRuleContext(0, TypeTypeContext);
  }
  variableDeclaratorId(): VariableDeclaratorIdContext {
    return this.getRuleContext(0, VariableDeclaratorIdContext);
  }
  expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  variableModifier(): VariableModifierContext[];
  variableModifier(i: number): VariableModifierContext;
  variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VariableModifierContext);
    } else {
      return this.getRuleContext(i, VariableModifierContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_enhancedForControl;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterEnhancedForControl) {
      listener.enterEnhancedForControl(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitEnhancedForControl) {
      listener.exitEnhancedForControl(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitEnhancedForControl) {
      return visitor.visitEnhancedForControl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParExpressionContext extends ParserRuleContext {
  expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_parExpression;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterParExpression) {
      listener.enterParExpression(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitParExpression) {
      listener.exitParExpression(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitParExpression) {
      return visitor.visitParExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionListContext extends ParserRuleContext {
  expression(): ExpressionContext[];
  expression(i: number): ExpressionContext;
  expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_expressionList;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MethodCallContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  expressionList(): ExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_methodCall;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterMethodCall) {
      listener.enterMethodCall(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitMethodCall) {
      listener.exitMethodCall(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitMethodCall) {
      return visitor.visitMethodCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  _prefix: Token;
  _bop: Token;
  _postfix: Token;
  primary(): PrimaryContext | undefined {
    return this.tryGetRuleContext(0, PrimaryContext);
  }
  expression(): ExpressionContext[];
  expression(i: number): ExpressionContext;
  expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  methodCall(): MethodCallContext | undefined {
    return this.tryGetRuleContext(0, MethodCallContext);
  }
  THIS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THIS, 0);
  }
  NEW(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.NEW, 0);
  }
  innerCreator(): InnerCreatorContext | undefined {
    return this.tryGetRuleContext(0, InnerCreatorContext);
  }
  SUPER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SUPER, 0);
  }
  superSuffix(): SuperSuffixContext | undefined {
    return this.tryGetRuleContext(0, SuperSuffixContext);
  }
  explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
    return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
  }
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
  }
  creator(): CreatorContext | undefined {
    return this.tryGetRuleContext(0, CreatorContext);
  }
  typeType(): TypeTypeContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeContext);
  }
  INSTANCEOF(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.INSTANCEOF, 0);
  }
  lambdaExpression(): LambdaExpressionContext | undefined {
    return this.tryGetRuleContext(0, LambdaExpressionContext);
  }
  typeArguments(): TypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, TypeArgumentsContext);
  }
  classType(): ClassTypeContext | undefined {
    return this.tryGetRuleContext(0, ClassTypeContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_expression;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LambdaExpressionContext extends ParserRuleContext {
  lambdaParameters(): LambdaParametersContext {
    return this.getRuleContext(0, LambdaParametersContext);
  }
  lambdaBody(): LambdaBodyContext {
    return this.getRuleContext(0, LambdaBodyContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_lambdaExpression;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LambdaParametersContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode[];
  IDENTIFIER(i: number): TerminalNode;
  IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(JavaParser.IDENTIFIER);
    } else {
      return this.getToken(JavaParser.IDENTIFIER, i);
    }
  }
  formalParameterList(): FormalParameterListContext | undefined {
    return this.tryGetRuleContext(0, FormalParameterListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_lambdaParameters;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLambdaParameters) {
      listener.enterLambdaParameters(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLambdaParameters) {
      listener.exitLambdaParameters(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLambdaParameters) {
      return visitor.visitLambdaParameters(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LambdaBodyContext extends ParserRuleContext {
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_lambdaBody;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterLambdaBody) {
      listener.enterLambdaBody(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitLambdaBody) {
      listener.exitLambdaBody(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitLambdaBody) {
      return visitor.visitLambdaBody(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrimaryContext extends ParserRuleContext {
  expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  THIS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.THIS, 0);
  }
  SUPER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SUPER, 0);
  }
  literal(): LiteralContext | undefined {
    return this.tryGetRuleContext(0, LiteralContext);
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
    return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
  }
  CLASS(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.CLASS, 0);
  }
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
  }
  explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
    return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
  }
  arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_primary;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterPrimary) {
      listener.enterPrimary(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitPrimary) {
      listener.exitPrimary(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitPrimary) {
      return visitor.visitPrimary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassTypeContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
    return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
  }
  annotation(): AnnotationContext[];
  annotation(i: number): AnnotationContext;
  annotation(i?: number): AnnotationContext | AnnotationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnnotationContext);
    } else {
      return this.getRuleContext(i, AnnotationContext);
    }
  }
  typeArguments(): TypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, TypeArgumentsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classType;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassType) {
      listener.enterClassType(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassType) {
      listener.exitClassType(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassType) {
      return visitor.visitClassType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CreatorContext extends ParserRuleContext {
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
  }
  createdName(): CreatedNameContext {
    return this.getRuleContext(0, CreatedNameContext);
  }
  classCreatorRest(): ClassCreatorRestContext | undefined {
    return this.tryGetRuleContext(0, ClassCreatorRestContext);
  }
  arrayCreatorRest(): ArrayCreatorRestContext | undefined {
    return this.tryGetRuleContext(0, ArrayCreatorRestContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_creator;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterCreator) {
      listener.enterCreator(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitCreator) {
      listener.exitCreator(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitCreator) {
      return visitor.visitCreator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CreatedNameContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode[];
  IDENTIFIER(i: number): TerminalNode;
  IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(JavaParser.IDENTIFIER);
    } else {
      return this.getToken(JavaParser.IDENTIFIER, i);
    }
  }
  typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
  typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
  typeArgumentsOrDiamond(
    i?: number,
  ): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentsOrDiamondContext);
    } else {
      return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
    }
  }
  primitiveType(): PrimitiveTypeContext | undefined {
    return this.tryGetRuleContext(0, PrimitiveTypeContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_createdName;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterCreatedName) {
      listener.enterCreatedName(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitCreatedName) {
      listener.exitCreatedName(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitCreatedName) {
      return visitor.visitCreatedName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class InnerCreatorContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode {
    return this.getToken(JavaParser.IDENTIFIER, 0);
  }
  classCreatorRest(): ClassCreatorRestContext {
    return this.getRuleContext(0, ClassCreatorRestContext);
  }
  nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
    return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_innerCreator;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterInnerCreator) {
      listener.enterInnerCreator(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitInnerCreator) {
      listener.exitInnerCreator(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitInnerCreator) {
      return visitor.visitInnerCreator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArrayCreatorRestContext extends ParserRuleContext {
  arrayInitializer(): ArrayInitializerContext | undefined {
    return this.tryGetRuleContext(0, ArrayInitializerContext);
  }
  expression(): ExpressionContext[];
  expression(i: number): ExpressionContext;
  expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_arrayCreatorRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterArrayCreatorRest) {
      listener.enterArrayCreatorRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitArrayCreatorRest) {
      listener.exitArrayCreatorRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitArrayCreatorRest) {
      return visitor.visitArrayCreatorRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ClassCreatorRestContext extends ParserRuleContext {
  arguments(): ArgumentsContext {
    return this.getRuleContext(0, ArgumentsContext);
  }
  classBody(): ClassBodyContext | undefined {
    return this.tryGetRuleContext(0, ClassBodyContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_classCreatorRest;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterClassCreatorRest) {
      listener.enterClassCreatorRest(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitClassCreatorRest) {
      listener.exitClassCreatorRest(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitClassCreatorRest) {
      return visitor.visitClassCreatorRest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExplicitGenericInvocationContext extends ParserRuleContext {
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
    return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
  }
  explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
    return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_explicitGenericInvocation;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterExplicitGenericInvocation) {
      listener.enterExplicitGenericInvocation(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitExplicitGenericInvocation) {
      listener.exitExplicitGenericInvocation(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitExplicitGenericInvocation) {
      return visitor.visitExplicitGenericInvocation(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
  typeArguments(): TypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, TypeArgumentsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeArgumentsOrDiamond;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeArgumentsOrDiamond) {
      listener.enterTypeArgumentsOrDiamond(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeArgumentsOrDiamond) {
      listener.exitTypeArgumentsOrDiamond(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeArgumentsOrDiamond) {
      return visitor.visitTypeArgumentsOrDiamond(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
  nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
    return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
      listener.enterNonWildcardTypeArgumentsOrDiamond(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
      listener.exitNonWildcardTypeArgumentsOrDiamond(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
      return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
  typeList(): TypeListContext {
    return this.getRuleContext(0, TypeListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_nonWildcardTypeArguments;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterNonWildcardTypeArguments) {
      listener.enterNonWildcardTypeArguments(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitNonWildcardTypeArguments) {
      listener.exitNonWildcardTypeArguments(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitNonWildcardTypeArguments) {
      return visitor.visitNonWildcardTypeArguments(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeListContext extends ParserRuleContext {
  typeType(): TypeTypeContext[];
  typeType(i: number): TypeTypeContext;
  typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeTypeContext);
    } else {
      return this.getRuleContext(i, TypeTypeContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeList;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeList) {
      listener.enterTypeList(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeList) {
      listener.exitTypeList(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeList) {
      return visitor.visitTypeList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeTypeContext extends ParserRuleContext {
  classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
    return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
  }
  primitiveType(): PrimitiveTypeContext | undefined {
    return this.tryGetRuleContext(0, PrimitiveTypeContext);
  }
  annotation(): AnnotationContext | undefined {
    return this.tryGetRuleContext(0, AnnotationContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeType;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeType) {
      listener.enterTypeType(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeType) {
      listener.exitTypeType(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeType) {
      return visitor.visitTypeType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrimitiveTypeContext extends ParserRuleContext {
  BOOLEAN(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.BOOLEAN, 0);
  }
  CHAR(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.CHAR, 0);
  }
  BYTE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.BYTE, 0);
  }
  SHORT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SHORT, 0);
  }
  INT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.INT, 0);
  }
  LONG(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.LONG, 0);
  }
  FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.FLOAT, 0);
  }
  DOUBLE(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.DOUBLE, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_primitiveType;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterPrimitiveType) {
      listener.enterPrimitiveType(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitPrimitiveType) {
      listener.exitPrimitiveType(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitPrimitiveType) {
      return visitor.visitPrimitiveType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeArgumentsContext extends ParserRuleContext {
  typeArgument(): TypeArgumentContext[];
  typeArgument(i: number): TypeArgumentContext;
  typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeArgumentContext);
    } else {
      return this.getRuleContext(i, TypeArgumentContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_typeArguments;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterTypeArguments) {
      listener.enterTypeArguments(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitTypeArguments) {
      listener.exitTypeArguments(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitTypeArguments) {
      return visitor.visitTypeArguments(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SuperSuffixContext extends ParserRuleContext {
  arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_superSuffix;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterSuperSuffix) {
      listener.enterSuperSuffix(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitSuperSuffix) {
      listener.exitSuperSuffix(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitSuperSuffix) {
      return visitor.visitSuperSuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
  SUPER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.SUPER, 0);
  }
  superSuffix(): SuperSuffixContext | undefined {
    return this.tryGetRuleContext(0, SuperSuffixContext);
  }
  IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(JavaParser.IDENTIFIER, 0);
  }
  arguments(): ArgumentsContext | undefined {
    return this.tryGetRuleContext(0, ArgumentsContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_explicitGenericInvocationSuffix;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterExplicitGenericInvocationSuffix) {
      listener.enterExplicitGenericInvocationSuffix(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitExplicitGenericInvocationSuffix) {
      listener.exitExplicitGenericInvocationSuffix(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitExplicitGenericInvocationSuffix) {
      return visitor.visitExplicitGenericInvocationSuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgumentsContext extends ParserRuleContext {
  expressionList(): ExpressionListContext | undefined {
    return this.tryGetRuleContext(0, ExpressionListContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  get ruleIndex(): number {
    return JavaParser.RULE_arguments;
  }
  @Override
  enterRule(listener: JavaParserListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this);
    }
  }
  @Override
  exitRule(listener: JavaParserListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this);
    }
  }
  @Override
  accept<Result>(visitor: JavaParserVisitor<Result>): Result {
    if (visitor.visitArguments) {
      return visitor.visitArguments(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
