# Chatbot 1 to 2

> built with [Docusaurus 2](https://v2.docusaurus.io/).

## Dev

- Installation

```
$ yarn
```

- Local Server

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

- Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

- Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Chatpters

### 1. Part 1 Wechaty 原理及特性

   1. Wechaty 是什么
   2. 关于对话式 RPA
   3. 关于Chatbot
   4. Wechaty 整体架构
   5. 1. Wechaty Layer
      2. Wechaty Puppet Layer
      3. Wechaty Service Layer
   6. Wechaty 基本结构
   7. 1. Contact、Message 这些类
      2. Listening Event
   8. Wechaty Puppet 平台种类
   9. 1. 微信
      2. 企业微信
      3. 公众号
      4. 钉钉
      5. 飞书
      6. WhatsApp
      7. RCS
      8. Teams
   10. Wechaty 多语言
   
### 2. Part 2 实战：你的第一行 Chabot 代码

   1. *第一行代码 Wechaty：打造你专属的SCRM机器人（TS/PY 双语）*
   2. 1. 背景：我是一个热爱舞蹈的女程序员，我有自己的舞蹈社区：舞哩。我很痛苦，因为。。。
      2. 安装环境：成功 import { Wechaty }
      3. 自动通过好友请求
      4. 自动入群
      5. 自动回复文字
      6. 自动回复图片
      7. 自动回复文件
      8. 自动回复视频
      9. 自动踢人
      10. 投票踢人
      11. 入群欢迎语
      12. 活动通知管理
      13. Plugin - 定时任务
      14. Plugin - 图表
      15. Verpol - 定向踢人
      16. Done~

### 3. Part3 案例介绍：

   1. 社区应用案例
   2. 1. OssChat
      2. 1. 案例介绍
         2. 配置
         3. 关键代码
      3. FridayBot
      4. 1. 案例介绍
         2. 关键代码
      5. RuiBot
      6. 哄女友神器
      7. MoneyBot
   3. 企业级最佳实践 （The hard way of Wechaty）
   4. 1. 句子秒回介绍
      2. Hard way 的重头戏
   5. Wechaty ML
   6. 1. 案例：腾讯对话机器人
      2. 案例：基于Tensorflow的Bert-QA机器人
      3. 案例：微软QnaMaker聊天机器人
      4. 案例：Rasa聊天机器人
      5. DialogFlow
      6. LUIS
      7. 阿里小蜜
      8. 百度Unit 
      
### 4. Part 4 多语言安装部署与管理

   1. TS
   2. 1. 安装 Wechaty
      2. Listening Event
      3. Dealing With Message
      4. Dealing With Contacts
      5. Dealing With Rooms
      6. Dealing With Friends
      7. 文件处理
      8. 测试用例
   3. Python
   4. 1. 安装 Wechaty
      2. Listening Event
      3. Dealing With Message
      4. Dealing With Contacts
      5. Dealing With Rooms
      6. Dealing With Friends
      7. 文件处理
      8. 测试用例
   5. Go
   6. 1. 安装 Wechaty
      2. Ding-dong bot
      3. 1. 代码演示
         2. 代码讲解
         3. 代码扩展
      4. Listening Event
      5. Dealing With Message
      6. Dealing With Contacts
      7. Dealing With Rooms
      8. Dealing With Friends
      9. 文件处理
      10. 测试用例
   7. Java
   8. 1. 安装 Wechaty
      2. Ding-dong bot
      3. 1. 代码演示
         2. 代码讲解
         3. 代码扩展
      4. Listening Event
      5. Dealing With Message
      6. Dealing With Contacts
      7. Dealing With Rooms
      8. Dealing With Friends
      9. 文件处理
      10. 测试用例
   9. Scala
   10. 1. Ding-dong bot
       2. 1. 代码演示
          2. 代码讲解
          3. 代码扩展
   11. PHP
   12. 1. Ding-dong bot
       2. 1. 代码演示
          2. 代码讲解
          3. 代码扩展
   13. .Net
   14. 1. Ding-dong bot
       2. 1. 代码演示
          2. 代码讲解
          3. 代码扩展
   15. Rust
   16. 1. Ding-dong bot
       2. 1. 代码演示
          2. 代码讲解
          3. 代码扩展
          
### 5. Part 5 TroubleShooting 指南与工具

    1. [brolog](https://github.com/huan/brolog): Brolog is Logger for Angular in Browser like Npmlog.
    2. [memory-card](https://github.com/huan/memory-card)：Memory Card is an Easy to Use Key/Value Store, with Swagger API Backend & Serialization Support.
    3. [hot-import](https://github.com/huan/hot-import): Hot Module Replacement(HMR) for Node.js
    4. [flash-store](https://github.com/huan/flash-store): FlashStore is a Key-Value persistent storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.
    5. [rx-queue](https://github.com/huan/rx-queue): Easy to Use ReactiveX Queue that Supports Delay/DelayExector/Throttle/Debounce Features Powered by RxJS.
    6. [file-box](https://github.com/huan/file-box)：Pack a File into Box for easy move/transfer between servers no matter of where it is.(local, remote url, or cloud storage)
    7. [state-switch](https://github.com/huan/state-switch): State Switch is a Monitor/Guard for Managing Your Async Operations.
    8. [watchdog](https://github.com/huan/watchdog): An Timer used to Detect and Recover from Malfunctions
    9. [finis](https://github.com/huan/finis): Hook node exit with your callback, get exit code and signal name from parameters
    10. [leveldown](https://github.com/Level/leveldown): Pure C++ Node.js LevelDB binding serving as the back-end to LevelUP
    11. 使用TSLint 作为代码检查工具，为什么需要？[推荐阅读这个了解详情](https://ts.xcatliu.com/engineering/lint.html)。wechaty 的tslint 配置说明请参考[这篇博客](https://blog.chatie.io/migrating-wechaty-v0.14-to-v0.18-guide-from-puppeteer-to-padchat-zh/)。
    12. 使用 [VSCode](https://code.visualstudio.com/) 作为编译器。
    13. Devops、CI/CD
    14. 自动化测试

### 6. Part 6 最佳实践

    1. 适用场景介绍
    2. 常见性能压测
    3. 队列、风控
    4. Wechaty 社区标准
       1. 命名规则
       2. [发包规则](https://github.com/wechaty/wechaty/wiki/FAQ#3-how-to-understand-the-wechaty-semantic-versioning)
       3. [分号](https://github.com/wechaty/wechaty/wiki/FAQ#2-why-doesnt-the-entire-project-use-the-semicolon)

### 7. Part 7 Wechaty 高级应用
    
    1. 使用 Wechaty 插件
    2. 使用 Wechaty Vorpal
    3. 使用 Wechaty Redux
    4. Puppet Maker

### 8. Part 8 如何参与 Wechaty 社区及周边生态

    1. Wechaty 社区历史及其现状
       1. Wechaty 社区现状及其发展简史
       2. Wechaty 开源生态介绍
       3. Wechaty 开源社区治理
       4. Wechaty 开源社区重要合作开发
    3. Wechaty 开源生态
       1. Bot5 Club
       2. 开源软件供应链点亮计划
       3. Google Season of Docs
    3. Wechaty 开源激励计划

## Links

- Book SPRINT: From zero to book in five days <https://www.booksprints.net/>
  > A book written by the right people at the right time establishes authority on a topic. Book Sprints facilitates your experts to aggregate knowledge, turn it into clear information and publish it fast.

## See Also

- [Chatbot 0 to 1](https://github.com/wechaty/chatbot-0-to-1)

## Copyright & License

Docs © 2021-now wj-Mcat and Wechaty Community

Code released under the Apache-2.0 License

Docs released under Creative Commons
