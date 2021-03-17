---
title: wechaty 基础
sidebar_label: Wechaty 基础
---

:::tip 本章知识点

* Wechaty 基础概念
    * Wechaty 是什么
    * Wechaty 整体结构
* 多语言Wechaty
    * Wechaty
    * Python-Wechaty
    * Java-Wechaty

:::

## Wechaty 基础

Wechaty是一个跨语言跨平台的对话机器人开发工具包(Conversational AI SDK)，支持使用不同编程语言（TypeScript、Python、Java、Go等）使用一套代码开发不同平台（钉钉、飞书、WhatsApp、Teams等）的聊天机器人。那Wechaty给开发者提供了哪些功能接口？是如何支持多语言开发？以及让多种不同语言的Wechaty能够工作到一起的呢？

这一切都要从Wechaty是什么开始将起。

### Wechaty 是什么？

Wechaty是一个开源聊天机器人框架SDK，于2016年发布于 GitHub，是一个基于 Apache-2.0 许可证的开源项目，具有高度封装、高可用的特性，支持 NodeJs, Python, Go 和 Java 等多语言版本。

经过4年多的发展，现在 Wechaty 开源社区已经拥有数十位 Committers，百余位 Contributors ，并被近万名 GitHub 开发者 Star 。使用 Wechaty 的开发者已覆盖数万人，并拥有基于微信群的数千人活跃开发者群。Wechaty 社区的 Contributors 遍布全球多个国家地区，和各大互联网公司，职业背景从程序员到设计师，从大学教授到创业者，非常多样化。GitHub 上有千余个开源项目基于 Wechaty 构建了聊天机器人，这些开发者用户也极大地促进了社区的活跃和发展。

Wechaty自身对代码质量的管理，使用了 GitHub Actions 的 DevOps 工具完成了 CI/CD 工作流，从自动化单元测试到自动打包集成测试，从自动发布 NPM 包到自动构建和发布对应版本的 Docker Image ，实现了全自动的社区代码发布，极大的提高了社区的协同效率。在开源社区管理上，Wechaty 遵循 The Apache Way ，拥有 PMC / Committer 管理制度，和完善的 Issue / PR / Release 等管理制度。

截止2020年，Wechaty 已经有超百万次 NPM 安装下载，并由社区自发推动了 Python, Go, Java, Scala, CSharp, PHP 等语言的适配和发布，是国内最活跃的 Conversational AI Chatbot 开发者社区。

Wechaty 支持的功能包括：接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等功能。只需要6行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。

更多功能包括：

* 消息处理：关键词回复
* 群管理：自动入群，拉人，踢人
* 自动处理好友请求
* 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务

Wechaty理论上是可以支持所有IM平台，未来也将持续开发不同平台的底层Puppet。Wechaty的多功能，高扩展性想必已经让各位开发者想深入了解了，那接下来我将给大家从整体结构层面介绍Wechaty是如何工作的？

### Wechaty 整体结构

> 这个图应该需要重新画一下

```txt
  +--------------------------+ +--------------------------+
  |                          | |                          |
  |   Wechaty (TypeScript)   | |    Wechaty(Polyglot)     |
  |                          | |  Python, Go, Java, etc.  |
  +--------------------------+ +--------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Service                |
  |                                                       |
  |                (wechaty-puppet-service)               |
  +-------------------------------------------------------+

+---------------------  wechaty_grpc  ----------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                   (wechaty-puppet)                    |
  +-------------------------------------------------------+

  +--------------------------+ +--------------------------+
  |      Pad Protocol        | |      Web Protocol        |
  |                          | |                          |
  | wechaty-puppet-padlocal  | |  (wechaty-puppet-wechat) |
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |     Friday Protocol      | |       Mac Protocol       |
  |                          | |                          |
  |  (wechaty-puppet-frida)  | |   (wechaty-puppet-mac)   |
  +--------------------------+ +--------------------------+
```

通过上图可以得知，整个Wechaty结构是分为四个部分：Wechaty上层接口层、Wechaty Puppet Service 服务层、Wechaty Puppet Abstract 抽象层以及 各种Puppet协议层。

#### 多语言Wechaty接口层

其中Wechaty属于上层接口，主要是面向开发者，提供了非常人性化的接口以及多种语法糖，能够很快的上手各种定制化功能的开发，而且每个模块的相似功能的接口名称都很类似，大大减小了不同模块之间的学习难度。比如向联系人和群聊中发送文本消息的代码非常类似：

```typescript
let msg: string = 'hello world'

// 某个联系人对象
await contact.say(msg)
// 某个群聊对象
await room.say(msg)
```

以上代码以TypeScript语言为例，给大家演示了Wechaty提供给开发者的其中一个接口，还有很多类似的功能非常强大的接口等待着大家去发掘。

而除了TypeScript和JavaScript语言版本的Wechaty之外，还有多种不同语言的Wechaty上层接口，比如Python-Wechaty、Java-Wechaty、Go-Wechaty、PHP-Wechaty等，每种语言的接口封装都是类似的，基本上保持了一直，不过会根据不同语言有不同的函数命名习惯。

比如当使用Python-Wechaty来编写以上发消息的代码时，大家会发现与此非常类似：

```python
msg: str = 'hello world'
await contact.say(msg)
await room.say(msg)
```

当然如果你是其他语言的开发者，看到这里的代码时，相信大家已经能够举一反三，自行调用对应语言下的对应接口，实现自己的业务功能开发。

如大家所见，最上层的Wechaty仅仅是一个面向开发者的接口，而且还有多种编程语言的实现，那是如何使用上层接口来实现对应IM平台的对接的呢？

#### Wechaty Puppet Service 层

Puppet Service层能够给不同语言下的Wechaty提供统一的接口服务，这样就只需要一个后端服务便能够支持所有语言下的Wechaty的连接，在一定程度上大大减小了开发工作量与维护成本。

TODO: 图一  后续时需要再进行更改的。

根据图一即可看出，多语言下的Wechaty是依赖Wechaty Puppet Service的，因为此层才是最终和对应IM平台对接数据的层。比如要使用Wechaty编写基于钉钉平台的机器人，此时最上层使用哪种语言的Wechaty都无所谓，不过都会使用一个底层Pupppet Service：`wechaty-puppet-dingtalk`。

这个Service将会以gRPC的方式来暴露服务，给不同语言Wechaty来调用，此时就屏蔽了不同语言下的实现区别，减少了底层服务的开发和维护的工作量。否则不同语言下的Wechaty都会实现一套底层的协议Puppet，一方面工作量非常打，另一方面无法保证所有语言的实现都能够保持一致。