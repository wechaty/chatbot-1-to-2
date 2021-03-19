---
slug: /ding-dong-bot/
title: 叮咚机器人
sidebar_label: 叮咚机器人
---

:::tip 本章知识点

* Wechaty 基础概念
* 监听消息事件
* 向联系人和群聊发送文本消息

:::

## 功能介绍

此篇章的主要内容将会指导大家如何开发一款叮咚机器人，主要功能就是你给它发送一个`ding`，机器人就会给回复一个`dong`。接下来我将给大家介绍Wechaty时如何用简短的代码实现这个功能，在这个背后Wechaty做了哪些工作。

Talks is cheep, show you the code.

```typescript
import {
  Message,
  log,
}                  from 'wechaty'
import {PuppetLark} from 'wechaty-puppet-lark'

const bot = new Wechaty({
  puppet: new PuppetLark(),
})

async function onMessage (msg: Message) {
  log.info('StarterBot', msg.toString())

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }
}

bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

以上几行代码即可完成一个叮咚机器人。

## 代码讲解

第一步是需要导入相关的库，而Wechaty所有依赖的对象都是可以直接从`wechaty`这个库中导入，其他多语言版本的Wechaty理论上也是如此。

```typescript
import {
  Message,
  log,
}                  from 'wechaty'
import {PuppetLark} from 'wechaty-puppet-lark'
```

其中最重要的就是Wechaty对象，这个是整个机器人的核心控制对象，能够完成自定义事件的监听，完成联系人、群聊房间、系统标签等常规的操作以及插件的注册。这些功能只需要的通过Wechaty实例即可完成。

此外自带的log对象能够让你在开发时自定义日志内容，方便调试开发。

接着就是导入PuppetLark对象，这个就是属于Wechaty底层面向飞书平台的Puppet协议，只需要将此Puppet的示例作为参数传递给Wechaty，即可实现对飞书平台的接口对接，非常方便。

:::warning

不同的Puppet需要不同的配置，比如飞书平台这里需要三个参数：

* WECHATY_PUPPET_LARK_APPID： 飞书应用的App ID
* WECHATY_PUPPET_LARK_APPSECRET：飞书应用的App Secret
* WECHATY_PUPPET_LARK_TOKEN：飞书事件订阅平台提供的Verification Token

这三个参数是与飞书平台对接时的必选三个参数，所以在程序启动时推荐将这些参数添加到环境变量中，这样底层飞书PuppetLark便可以自动读取对应环境变量下的参数，从而完成接口的对接功能。

当然也是可以将对应的参数显示的添加到Wechaty当中，具体的用法请看后续飞书平台对接详细文档。

:::

第二步就是需要实例化Wechaty对象。

Wechaty对象是整个机器人的核心，能够决定对接哪个平台，对接的参数值，事件的监听和插件的注册等功能，所以为了全面了解Wechaty的话，Wechaty对象就是你第一个需要掌握的重要知识点。

```typescript
const bot = new Wechaty({
  puppet: new PuppetLark(),
})
```

在初始化Wechaty实例时，这里只有一个参数：puppet。这个就是告诉Wechaty具体要对接哪个平台。

:::tip Puppet是什么？

Puppet英文名为木偶，我们可以将其想象成一个提线木偶，能够作为中间工具人帮我们完成所有与具体IM平台对接的事情，而且实现了某一个平台的Puppet之后，是可以在多种语言下通用的，大大减少了多语言开发的工作量。

大家在社区里面可能会遇到很多种不同的Puppet，其中包括`wechaty-puppet`，`wechaty-puppet-lark`，`wechaty-puppet-official-account`等等。

首先`wechaty-puppet`是一个抽象层，主要是为了解决Wechaty在定义阶段中对于底层具体Puppet的依赖性问题，使用接口分离的原则来实现定义和实现的分离。而所有具体平台的Puppet会实现`wechaty-puppet`中的函数定义。

剩下的所有`wechaty-puppet-*`都是面向某个平台的底层Puppet协议，比如`wechaty-puppet-lark`就是面向飞书平台的Puppet，`wechaty-puppet-official-account`就是面向微信公众号平台的Puppet。如果想要查看更多的Puppet类型，请到Wechaty官方仓库中去寻找：https://github.com/wechaty。

:::

第三步就是需要编写监听函数和注册监听事件。

```typescript
async function onMessage (msg: Message) {
  log.info('StarterBot', msg.toString())

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }
}

bot.on('message', onMessage)
```

通过函数名就可以知道，此处是编写了一个对于消息监听的异步函数，然后将此函数注册到Wechaty实例上去。

:::warning 注意

* 不同的事件监听函数是有不同的参数，这个可以根据文档中查询到。
* 不同的事件监听的名称是不一样的，一般在编辑器中会自动提示，或者查阅官方文档可得知。

:::

函数的监听是非常简单的，只需要在on函数里面加入事件的名称和事件的函数体即可。而函数体类型推荐使用异步函数。

在消息监听的函数体中，msg是消息的主要载体对象，你可以通过该对象获取所有与该消息对应的内容，比如消息的类型，消息的发送者，消息所存在的群聊，消息的文本内容以及消息的附件下载等等。

在以上的代码中只编写了获取消息的文本内容: `msg.text()`。如果发送的文本消息内容为ding，然后给用户回复dong文本。

:::warning 注意

有的小伙伴就可能会问，这里很明显是`msg.say()` 并没有指定消息发送的对象啊。

然而Wechaty会自动检测消息的来源，如果是在群里面的消息，会自动将内容发送给对应的群聊中；如果是联系人的私聊信息，便自动将消息发送给对应的联系人。当然开发者也可以获取指定群聊对象或者联系人对象发送消息文本类型。

:::

最后一步就是启动Wechaty服务，监听所有事情。这个步骤会在本地的进程中开启常驻程序，处理对应的消息监听。这一步很简单，对于以后的开发而言都不会变动，所以此处不做过多解释，以后照此编写即可。
