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

### Wechaty 是什么？

Conversational RPA SDK Wechaty 是一个开源聊天机器人框架SDK，于 2016 年发布于 GitHub，是一个基于 Apache-2.0 许可证的开源项目，具有高度封装、高可用的特性，支持 NodeJs, Python, Go 和 Java 等多语言版本。

经过4年多的发展，现在 Wechaty 开源社区已经拥有数十位 Committers，百余位 Contributors ，并被近万名 GitHub 开发者 Star 。使用 Wechaty 的开发者已覆盖数万人，并拥有基于微信群的数千人活跃开发者群。Wechaty 社区的 Contributors 遍布全球多个国家地区，和各大互联网公司，职业背景从程序员到设计师，从大学教授到创业者，非常多样化。GitHub 上有千余个开源项目基于 Wechaty 构建了聊天机器人，这些开发者用户也极大地促进了社区的活跃和发展。

Wechaty自身对代码质量的管理，使用了 GitHub Actions 的 DevOps 工具完成了 CI/CD 工作流，从自动化单元测试到自动打包集成测试，从自动发布 NPM 包到自动构建和发布对应版本的 Docker Image ，实现了全自动的社区代码发布，极大的提高了社区的协同效率。在开源社区管理上，Wechaty 遵循 The Apache Way ，拥有 PMC / Committer 管理制度，和完善的 Issue / PR / Release 等管理制度。

截止2020年，Wechaty 已经有超百万次 NPM 安装下载，并由社区自发推动了 Python, Go, Java, Scala, CSharp, PHP 等语言的适配和发布，是国内最活跃的 Conversational AI Chatbot 开发者社区。

Wechaty 支持的功能包括：接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等功能。只需要6行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。

更多功能包括：

* 消息处理：关键词回复
* 群管理：自动入群，拉人，踢人
* 自动处理好友请求
* 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务

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

其中Wechaty属于上层接口，主要是面向开发者，提供了非常人性化的接口以及多种语法糖，能够很快的上手各种定制化功能的开发，而且每个模块的相似功能的接口名称都很类似，大大减小了不同模块的难度，
