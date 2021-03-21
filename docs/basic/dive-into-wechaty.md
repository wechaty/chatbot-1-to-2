---
slug: /dive-into-wechaty/
title: 深入理解Wechaty
sidebar_label: 深入理解Wechaty
---

:::tip 本章知识点

* Wechaty 基础架构
    * 什么是Puppet？
    * Wechaty 是如何使用Puppet的？
* 多语言Wechaty
* 多平台Wechaty
* 多插件Wechaty
* 一个实现，多处可用

:::

使用Wechaty能够使用简单的几行代码即可开发出一个功能强大、扩展性高的聊天机器人，在这个简单的背后，Wechaty为大家做出了非常多的努力才能够让复杂的事情变得如此简单。在此篇章中我将带领大家深入了解Wechaty的各个方面。

## 一、Wechaty 基础架构

首先要给大家介绍的是Wechaty的整体结构，在此章节中大家可以了解到社区内多个项目之间的区别及联系，比如Wechaty、Wechaty-Puppet以及Wechaty-Puppet-* 到底有什么作用？下图便是其中最核心的结构图：

![](/img/basic/structure.png)

通过上图可知，Wechaty（开发者接口层）是属于最上层，也是开发者所接触到的模块，所有开发过程中需要使用到的模块都可以从这个库导入，无需有更多的库依赖。

### 1.1 什么是Puppet？

在Wechaty社区的库中可能会注意到`wechaty-puppet`，`wechaty-puppet-*`（`wechaty-puppet-lark`、`wechaty-puppet-dingtalk`等）以及`python-wechaty-puppet`，`python-wechaty-puppet`

## 二、多语言Wechaty

在最初的Wechaty版本中只有TypeScript语言，而所有的基础设施都是基于TypeScript建立的，比如底层的多平台协议Puppet

![](/img/basic/multi-language.png)

### 2.1 `wechaty` vs `python-wechaty`

Wechaty本身是基于TypeScript语言的开源项目，也是提供给开发者的接口库。在2020年之后就有了多语言版本的版本，比如python版本的wechaty、java版本的wechaty、go语言版本的wechaty以及其他多语言的wechaty，所以在命名的时候就是：`{language}-wechaty`（language就是编程语言的名称）。

所以wechaty和python-wechaty本质是一样的，都是一个Wechaty上层接口，只不过是针对于不同语言版本的wechaty，前者默认是typescript-wechaty和javascript-wechaty的集合。

### 2.2 `wechaty` vs `wechaty-puppet`

wechaty是面向开发者的上层接口，提供了良好交互性的各种模块，比如Message消息模块、Contact联系人模块、Friendship好友关系模块、Room群聊模块等，这些模块负责不同模块的功能管理，可是也拥有非常多的相似性，接口都设计的非常人性化，比如发送消息时，Message、Contact、Room模块都是say函数，接受好友申请时的函数名称就是accept。

> 此处描述的非常粗糙，后续是需要重新调整打磨。

所以在多语言wechaty中也是如此，

## 三、多平台Wechaty



![](/img/basic/multi-platform.png)

## 四、多插件Wechaty

![](/img/basic/multi-plugins.png)

## 五、一个实现，多处可用

如果只有一个平台的Puppet协议实现，那其实是有多种不同是。