---
id: introduction
title: Typescript 基础
sidebar_label: Typescript 基础
---

:::tip 本章重点

* Typescript基础概念、安装和基础语法
* TypeScript

:::


:::note 本章目标

运行起一个最简单的聊天机器人。

:::

TypeScript 是 JavaScript 的一个超集，由微软开发的一门具备静态类型检测的语言，原生支持面向对象编程。其中对于类、模块和接口的良好支持让开发者能够开发出非常健壮的应用程序。

通常在使用JavaScript编写代码时，由于没有类型检测，代码在运行时总是能够抛出一些让人出乎意外的错误，而这其中很大一部分原因来自于在编写代码时没有对类型作严格的定义和判断。

其设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

## TypeScript 基础

### JavaScript 与 TypeScript 的区别

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 是一种给 JavaScript 添加特性的语言扩展。增加的功能包括：

* 类型批注和编译时类型检查
* 类型推断
* 类型擦除
* 接口
* 枚举
* Mixin
* 泛型编程
* 名字空间
* 元组
* Await

以下功能是从 ECMA 2015 反向移植而来：

* 类
* 模块
* lambda 函数的箭头语法
* 可选参数以及默认参数

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

### Hello Word

```typescript
const hello : string = "Hello World!"
console.log(hello)
```
