# Tiny Programming Language


<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/8fbabf44-5695-4b1b-89ad-ddc086a137de" />






I'm building a small programming language and interpreter from scratch.

The idea is simple:

**Write my own programming language → parse it → understand it → execute it.**

This project is mainly an experiment to understand what actually happens behind the scenes when we write code.

## What am I building?

A tiny language with its own syntax, lexer, parser, AST, and interpreter.

For example, eventually I want to be able to write something like:

```text
let x = 10;
let y = 20;

fn add(a, b) {
    return a + b;
}

let result = add(x, y);
```

and have my interpreter understand and execute it.

The language will support things like:

* Variables
* Numbers
* Arithmetic
* Comparisons
* `if / else`
* Functions
* Function calls
* Scopes
* Closures

The syntax is intentionally simple. I'm **not trying to recreate JavaScript**.

## How does it work?

The code I write will go through a few stages:

```text
Source Code
     ↓
   Lexer
     ↓
   Tokens
     ↓
   Parser
     ↓
    AST
     ↓
 Interpreter
     ↓
   Result
```

### Lexer

Turns source code into tokens.

```text
let x = 5 + 3;
```

becomes something like:

```text
LET
IDENTIFIER
EQUALS
NUMBER
PLUS
NUMBER
SEMICOLON
```

### Parser

Takes those tokens and figures out what they mean by building an **Abstract Syntax Tree (AST)**.

For example:

```text
2 + 3 * 4
```

needs to understand that `3 * 4` happens before the addition.

### Interpreter

The interpreter walks the AST and executes the program.

Eventually:

```text
let x = 10;
let y = 20;

x + y;
```

should produce:

```text
30
```

## Why am I building this?

Because I don't just want to **use** programming languages.

I want to understand how they work.

Building a tiny interpreter forces me to understand concepts that are normally hidden behind a compiler or runtime:

* How source code is broken down
* How syntax is understood
* How expressions are represented
* How variables are stored
* How scopes work
* How functions work internally
* How closures remember their environment
* How code eventually gets executed

It's a small project, but there's a lot happening underneath it.

## The goal

The goal isn't to make a production-ready language.

It's not meant to replace JavaScript, Python, Rust, or C++.

The goal is to build something small enough that I can understand **every major piece of it**.

> I'm building a language to understand languages.

This repo is where I'll experiment, break things, fix them, and document what I learn along the way.
