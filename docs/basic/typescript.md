---
id: typescript
title: Typescript 基础
sidebar_label: Typescript 基础
---

:::tip 本章知识点

* Typescript基础
  * 概念
  * 安装
* TypeScript基本用法
  * 基本变量类型定义
  * Import包
  * 面向对象编程
  * 类型定义
* 异步编程

:::

:::note 本章目标

使用并理解TypeScript语言来运行Wechaty。

:::


## 一、TypeScript 基础

### 1.1 TypeScript这门语言

TypeScript 是 JavaScript 的一个超集，由微软开发的一门具备静态类型检测的语言，原生支持面向对象编程。其中对于类、模块和接口的良好支持让开发者能够开发出非常健壮的应用程序。

通常在使用JavaScript编写代码时，由于没有类型检测，代码在运行时总是能够抛出一些让人出乎意外的错误，而这其中很大一部分原因来自于在编写代码时没有对类型作严格的定义和判断。

其设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上，也就是只要是JavaScript可以运行的地方，TypeScript都能够良好的正常运行。

### 1.2 JavaScript vs TypeScript

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 是一种给 JavaScript 添加特性的语言扩展。增加的功能包括：

* 类型批注和编译时类型检查
* 类型推断
* 接口
* 枚举
* Mixin
* 泛型编程
* 名字空间
* 元组
* Awai

## 二、安装

### 2.1 Visual Studio Code 安装

工欲善其事，必先利其器，VSCode和TypeScript都是微软自家出的产品，而前者原生具备TypeScript语法支持，是编写TypeScript代码的IDE首选。

安装VSCode的过程非常简单，只需要下载对应的安装包


### 2.2 TypeScript 编译器的安装

本文介绍 TypeScript 环境的安装，我们需要使用到 npm 工具安装，如果你还不了解 npm，可以参考我们的NPM 使用介绍。

Visual Studio Code包括TypeScript语言支持，但不包括TypeScript编译器`tsc`。你需要全局或在你的工作空间中安装TypeScript编译器来将TypeScript源代码编译为JavaScript (tsc HelloWorld.ts)。安装的命令行如下所示：

```shell
npm install -g typescript
```

为了验证是否安装成功，可以使用如下命令来测试：

```shell
tsc --version
```

于是就可以编写TypeScript代码了，而每一门第一行代码始终是`hello word`:

> 可借鉴这里的文档来进行调整：https://code.visualstudio.com/docs/languages/typescript

### 2.2 Hello Word

新建一个 app.ts 的文件，代码如下所示：

```shell
const message:string = "Hello World" 
console.log(message)
```

以上代码中，`.ts`是TypeScript文件类型的后缀名，让编辑器能够识别对应的文件类型，通常我们使用 .ts 作为 TypeScript 代码文件的扩展名，然后执行以下命令将 TypeScript 转换为 JavaScript 代码：

```shell
tsc app.ts
```

这时候再当前目录下（与 app.ts 同一目录）就会生成一个 app.js 文件，代码如下：

```shell
var message = "Hello World";
console.log(message);
```

使用 node 命令来执行 app.js 文件：

```shell
$ node app.js 
Hello World
```

于是，一个最简单的`Hello World`就完成了，是不是很简单啊。

