---
title: Wechaty Puppet 平台种类
sidebar_label: Wechaty Puppet 平台种类
---

## 什么是Wechaty-Puppet

`Puppet`原意为被操纵的木偶，而在wechaty中是一个帮助我们对接IM平台，完成所有交互操作的对象。

The term Puppet in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!).

The plugins are named PuppetXXX, like PuppetPuppeteer is using the google puppeteer to control the WeChat Web API via a chrome browser, PuppetPadLocal is using the Pad Protocol to connect with WeChat Server.

