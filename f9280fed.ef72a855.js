(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),c=a(7),p=(a(0),a(120)),i={slug:"/ding-dong-bot/",title:"\u53ee\u549a\u673a\u5668\u4eba",sidebar_label:"\u53ee\u549a\u673a\u5668\u4eba"},r={unversionedId:"basic/ding-dong-bot",id:"basic/ding-dong-bot",isDocsHomePage:!1,title:"\u53ee\u549a\u673a\u5668\u4eba",description:"* Wechaty \u57fa\u7840\u6982\u5ff5",source:"@site/docs/basic/ding-dong-bot.md",slug:"/ding-dong-bot/",permalink:"/chatbot-1-to-2/docs/ding-dong-bot/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basic/ding-dong-bot.md",version:"current",sidebar_label:"\u53ee\u549a\u673a\u5668\u4eba",sidebar:"docs",previous:{title:"\u4e03\u884c\u4ee3\u7801\u673a\u5668\u4eba",permalink:"/chatbot-1-to-2/docs/seven-lines-code-chatbot/"},next:{title:"\u6df1\u5165\u7406\u89e3Wechaty",permalink:"/chatbot-1-to-2/docs/dive-into-wechaty/"}},o=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",children:[]},{value:"\u4ee3\u7801\u8bb2\u89e3",id:"\u4ee3\u7801\u8bb2\u89e3",children:[]}],l={toc:o};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(p.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(p.a)("div",{parentName:"div",className:"admonition-heading"},Object(p.a)("h5",{parentName:"div"},Object(p.a)("span",{parentName:"h5",className:"admonition-icon"},Object(p.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u672c\u7ae0\u77e5\u8bc6\u70b9")),Object(p.a)("div",{parentName:"div",className:"admonition-content"},Object(p.a)("ul",{parentName:"div"},Object(p.a)("li",{parentName:"ul"},"Wechaty \u57fa\u7840\u6982\u5ff5"),Object(p.a)("li",{parentName:"ul"},"\u76d1\u542c\u6d88\u606f\u4e8b\u4ef6"),Object(p.a)("li",{parentName:"ul"},"\u5411\u8054\u7cfb\u4eba\u548c\u7fa4\u804a\u53d1\u9001\u6587\u672c\u6d88\u606f")))),Object(p.a)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),Object(p.a)("p",null,"\u6b64\u7bc7\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\u5c06\u4f1a\u6307\u5bfc\u5927\u5bb6\u5982\u4f55\u5f00\u53d1\u4e00\u6b3e\u53ee\u549a\u673a\u5668\u4eba\uff0c\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u4f60\u7ed9\u5b83\u53d1\u9001\u4e00\u4e2a",Object(p.a)("inlineCode",{parentName:"p"},"ding"),"\uff0c\u673a\u5668\u4eba\u5c31\u4f1a\u7ed9\u56de\u590d\u4e00\u4e2a",Object(p.a)("inlineCode",{parentName:"p"},"dong"),"\u3002\u63a5\u4e0b\u6765\u6211\u5c06\u7ed9\u5927\u5bb6\u4ecb\u7ecdWechaty\u65f6\u5982\u4f55\u7528\u7b80\u77ed\u7684\u4ee3\u7801\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u8fd9\u4e2a\u80cc\u540eWechaty\u505a\u4e86\u54ea\u4e9b\u5de5\u4f5c\u3002"),Object(p.a)("p",null,"Talks is cheep, show you the code."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Message,\n  log,\n}                  from 'wechaty'\nimport {PuppetLark} from 'wechaty-puppet-lark'\n\nconst bot = new Wechaty({\n  puppet: new PuppetLark(),\n})\n\nasync function onMessage (msg: Message) {\n  log.info('StarterBot', msg.toString())\n\n  if (msg.text() === 'ding') {\n    await msg.say('dong')\n  }\n}\n\nbot.on('message', onMessage)\n\nbot.start()\n  .then(() => log.info('StarterBot', 'Starter Bot Started.'))\n  .catch(e => log.error('StarterBot', e))\n")),Object(p.a)("p",null,"\u4ee5\u4e0a\u51e0\u884c\u4ee3\u7801\u5373\u53ef\u5b8c\u6210\u4e00\u4e2a\u53ee\u549a\u673a\u5668\u4eba\u3002"),Object(p.a)("h2",{id:"\u4ee3\u7801\u8bb2\u89e3"},"\u4ee3\u7801\u8bb2\u89e3"),Object(p.a)("p",null,"\u7b2c\u4e00\u6b65\u662f\u9700\u8981\u5bfc\u5165\u76f8\u5173\u7684\u5e93\uff0c\u800cWechaty\u6240\u6709\u4f9d\u8d56\u7684\u5bf9\u8c61\u90fd\u662f\u53ef\u4ee5\u76f4\u63a5\u4ece",Object(p.a)("inlineCode",{parentName:"p"},"wechaty"),"\u8fd9\u4e2a\u5e93\u4e2d\u5bfc\u5165\uff0c\u5176\u4ed6\u591a\u8bed\u8a00\u7248\u672c\u7684Wechaty\u7406\u8bba\u4e0a\u4e5f\u662f\u5982\u6b64\u3002"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Message,\n  log,\n}                  from 'wechaty'\nimport {PuppetLark} from 'wechaty-puppet-lark'\n")),Object(p.a)("p",null,"\u5176\u4e2d\u6700\u91cd\u8981\u7684\u5c31\u662fWechaty\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u662f\u6574\u4e2a\u673a\u5668\u4eba\u7684\u6838\u5fc3\u63a7\u5236\u5bf9\u8c61\uff0c\u80fd\u591f\u5b8c\u6210\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u76d1\u542c\uff0c\u5b8c\u6210\u8054\u7cfb\u4eba\u3001\u7fa4\u804a\u623f\u95f4\u3001\u7cfb\u7edf\u6807\u7b7e\u7b49\u5e38\u89c4\u7684\u64cd\u4f5c\u4ee5\u53ca\u63d2\u4ef6\u7684\u6ce8\u518c\u3002\u8fd9\u4e9b\u529f\u80fd\u53ea\u9700\u8981\u7684\u901a\u8fc7Wechaty\u5b9e\u4f8b\u5373\u53ef\u5b8c\u6210\u3002"),Object(p.a)("p",null,"\u6b64\u5916\u81ea\u5e26\u7684log\u5bf9\u8c61\u80fd\u591f\u8ba9\u4f60\u5728\u5f00\u53d1\u65f6\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5185\u5bb9\uff0c\u65b9\u4fbf\u8c03\u8bd5\u5f00\u53d1\u3002"),Object(p.a)("p",null,"\u63a5\u7740\u5c31\u662f\u5bfc\u5165PuppetLark\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5c31\u662f\u5c5e\u4e8eWechaty\u5e95\u5c42\u9762\u5411\u98de\u4e66\u5e73\u53f0\u7684Puppet\u534f\u8bae\uff0c\u53ea\u9700\u8981\u5c06\u6b64Puppet\u7684\u793a\u4f8b\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9Wechaty\uff0c\u5373\u53ef\u5b9e\u73b0\u5bf9\u98de\u4e66\u5e73\u53f0\u7684\u63a5\u53e3\u5bf9\u63a5\uff0c\u975e\u5e38\u65b9\u4fbf\u3002"),Object(p.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(p.a)("div",{parentName:"div",className:"admonition-heading"},Object(p.a)("h5",{parentName:"div"},Object(p.a)("span",{parentName:"h5",className:"admonition-icon"},Object(p.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(p.a)("div",{parentName:"div",className:"admonition-content"},Object(p.a)("p",{parentName:"div"},"\u4e0d\u540c\u7684Puppet\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\uff0c\u6bd4\u5982\u98de\u4e66\u5e73\u53f0\u8fd9\u91cc\u9700\u8981\u4e09\u4e2a\u53c2\u6570\uff1a"),Object(p.a)("ul",{parentName:"div"},Object(p.a)("li",{parentName:"ul"},"WECHATY_PUPPET_LARK_APPID\uff1a \u98de\u4e66\u5e94\u7528\u7684App ID"),Object(p.a)("li",{parentName:"ul"},"WECHATY_PUPPET_LARK_APPSECRET\uff1a\u98de\u4e66\u5e94\u7528\u7684App Secret"),Object(p.a)("li",{parentName:"ul"},"WECHATY_PUPPET_LARK_TOKEN\uff1a\u98de\u4e66\u4e8b\u4ef6\u8ba2\u9605\u5e73\u53f0\u63d0\u4f9b\u7684Verification Token")),Object(p.a)("p",{parentName:"div"},"\u8fd9\u4e09\u4e2a\u53c2\u6570\u662f\u4e0e\u98de\u4e66\u5e73\u53f0\u5bf9\u63a5\u65f6\u7684\u5fc5\u9009\u4e09\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u63a8\u8350\u5c06\u8fd9\u4e9b\u53c2\u6570\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u8fd9\u6837\u5e95\u5c42\u98de\u4e66PuppetLark\u4fbf\u53ef\u4ee5\u81ea\u52a8\u8bfb\u53d6\u5bf9\u5e94\u73af\u5883\u53d8\u91cf\u4e0b\u7684\u53c2\u6570\uff0c\u4ece\u800c\u5b8c\u6210\u63a5\u53e3\u7684\u5bf9\u63a5\u529f\u80fd\u3002"),Object(p.a)("p",{parentName:"div"},"\u5f53\u7136\u4e5f\u662f\u53ef\u4ee5\u5c06\u5bf9\u5e94\u7684\u53c2\u6570\u663e\u793a\u7684\u6dfb\u52a0\u5230Wechaty\u5f53\u4e2d\uff0c\u5177\u4f53\u7684\u7528\u6cd5\u8bf7\u770b\u540e\u7eed\u98de\u4e66\u5e73\u53f0\u5bf9\u63a5\u8be6\u7ec6\u6587\u6863\u3002"))),Object(p.a)("p",null,"\u7b2c\u4e8c\u6b65\u5c31\u662f\u9700\u8981\u5b9e\u4f8b\u5316Wechaty\u5bf9\u8c61\u3002"),Object(p.a)("p",null,"Wechaty\u5bf9\u8c61\u662f\u6574\u4e2a\u673a\u5668\u4eba\u7684\u6838\u5fc3\uff0c\u80fd\u591f\u51b3\u5b9a\u5bf9\u63a5\u54ea\u4e2a\u5e73\u53f0\uff0c\u5bf9\u63a5\u7684\u53c2\u6570\u503c\uff0c\u4e8b\u4ef6\u7684\u76d1\u542c\u548c\u63d2\u4ef6\u7684\u6ce8\u518c\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u4e3a\u4e86\u5168\u9762\u4e86\u89e3Wechaty\u7684\u8bdd\uff0cWechaty\u5bf9\u8c61\u5c31\u662f\u4f60\u7b2c\u4e00\u4e2a\u9700\u8981\u638c\u63e1\u7684\u91cd\u8981\u77e5\u8bc6\u70b9\u3002"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-typescript"},"const bot = new Wechaty({\n  puppet: new PuppetLark(),\n})\n")),Object(p.a)("p",null,"\u5728\u521d\u59cb\u5316Wechaty\u5b9e\u4f8b\u65f6\uff0c\u8fd9\u91cc\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff1apuppet\u3002\u8fd9\u4e2a\u5c31\u662f\u544a\u8bc9Wechaty\u5177\u4f53\u8981\u5bf9\u63a5\u54ea\u4e2a\u5e73\u53f0\u3002"),Object(p.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(p.a)("div",{parentName:"div",className:"admonition-heading"},Object(p.a)("h5",{parentName:"div"},Object(p.a)("span",{parentName:"h5",className:"admonition-icon"},Object(p.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Puppet\u662f\u4ec0\u4e48\uff1f")),Object(p.a)("div",{parentName:"div",className:"admonition-content"},Object(p.a)("p",{parentName:"div"},"Puppet\u82f1\u6587\u540d\u4e3a\u6728\u5076\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u60f3\u8c61\u6210\u4e00\u4e2a\u63d0\u7ebf\u6728\u5076\uff0c\u80fd\u591f\u4f5c\u4e3a\u4e2d\u95f4\u5de5\u5177\u4eba\u5e2e\u6211\u4eec\u5b8c\u6210\u6240\u6709\u4e0e\u5177\u4f53IM\u5e73\u53f0\u5bf9\u63a5\u7684\u4e8b\u60c5\uff0c\u800c\u4e14\u5b9e\u73b0\u4e86\u67d0\u4e00\u4e2a\u5e73\u53f0\u7684Puppet\u4e4b\u540e\uff0c\u662f\u53ef\u4ee5\u5728\u591a\u79cd\u8bed\u8a00\u4e0b\u901a\u7528\u7684\uff0c\u5927\u5927\u51cf\u5c11\u4e86\u591a\u8bed\u8a00\u5f00\u53d1\u7684\u5de5\u4f5c\u91cf\u3002"),Object(p.a)("p",{parentName:"div"},"\u5927\u5bb6\u5728\u793e\u533a\u91cc\u9762\u53ef\u80fd\u4f1a\u9047\u5230\u5f88\u591a\u79cd\u4e0d\u540c\u7684Puppet\uff0c\u5176\u4e2d\u5305\u62ec",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet"),"\uff0c",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet-lark"),"\uff0c",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet-official-account"),"\u7b49\u7b49\u3002"),Object(p.a)("p",{parentName:"div"},"\u9996\u5148",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet"),"\u662f\u4e00\u4e2a\u62bd\u8c61\u5c42\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u89e3\u51b3Wechaty\u5728\u5b9a\u4e49\u9636\u6bb5\u4e2d\u5bf9\u4e8e\u5e95\u5c42\u5177\u4f53Puppet\u7684\u4f9d\u8d56\u6027\u95ee\u9898\uff0c\u4f7f\u7528\u63a5\u53e3\u5206\u79bb\u7684\u539f\u5219\u6765\u5b9e\u73b0\u5b9a\u4e49\u548c\u5b9e\u73b0\u7684\u5206\u79bb\u3002\u800c\u6240\u6709\u5177\u4f53\u5e73\u53f0\u7684Puppet\u4f1a\u5b9e\u73b0",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet"),"\u4e2d\u7684\u51fd\u6570\u5b9a\u4e49\u3002"),Object(p.a)("p",{parentName:"div"},"\u5269\u4e0b\u7684\u6240\u6709",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet-*"),"\u90fd\u662f\u9762\u5411\u67d0\u4e2a\u5e73\u53f0\u7684\u5e95\u5c42Puppet\u534f\u8bae\uff0c\u6bd4\u5982",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet-lark"),"\u5c31\u662f\u9762\u5411\u98de\u4e66\u5e73\u53f0\u7684Puppet\uff0c",Object(p.a)("inlineCode",{parentName:"p"},"wechaty-puppet-official-account"),"\u5c31\u662f\u9762\u5411\u5fae\u4fe1\u516c\u4f17\u53f7\u5e73\u53f0\u7684Puppet\u3002\u5982\u679c\u60f3\u8981\u67e5\u770b\u66f4\u591a\u7684Puppet\u7c7b\u578b\uff0c\u8bf7\u5230Wechaty\u5b98\u65b9\u4ed3\u5e93\u4e2d\u53bb\u5bfb\u627e\uff1a",Object(p.a)("a",{parentName:"p",href:"https://github.com/wechaty%E3%80%82"},"https://github.com/wechaty\u3002")))),Object(p.a)("p",null,"\u7b2c\u4e09\u6b65\u5c31\u662f\u9700\u8981\u7f16\u5199\u76d1\u542c\u51fd\u6570\u548c\u6ce8\u518c\u76d1\u542c\u4e8b\u4ef6\u3002"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-typescript"},"async function onMessage (msg: Message) {\n  log.info('StarterBot', msg.toString())\n\n  if (msg.text() === 'ding') {\n    await msg.say('dong')\n  }\n}\n\nbot.on('message', onMessage)\n")),Object(p.a)("p",null,"\u901a\u8fc7\u51fd\u6570\u540d\u5c31\u53ef\u4ee5\u77e5\u9053\uff0c\u6b64\u5904\u662f\u7f16\u5199\u4e86\u4e00\u4e2a\u5bf9\u4e8e\u6d88\u606f\u76d1\u542c\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u7136\u540e\u5c06\u6b64\u51fd\u6570\u6ce8\u518c\u5230Wechaty\u5b9e\u4f8b\u4e0a\u53bb\u3002"),Object(p.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(p.a)("div",{parentName:"div",className:"admonition-heading"},Object(p.a)("h5",{parentName:"div"},Object(p.a)("span",{parentName:"h5",className:"admonition-icon"},Object(p.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),Object(p.a)("div",{parentName:"div",className:"admonition-content"},Object(p.a)("ul",{parentName:"div"},Object(p.a)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u662f\u6709\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u6839\u636e\u6587\u6863\u4e2d\u67e5\u8be2\u5230\u3002"),Object(p.a)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u4e8b\u4ef6\u76d1\u542c\u7684\u540d\u79f0\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u4e00\u822c\u5728\u7f16\u8f91\u5668\u4e2d\u4f1a\u81ea\u52a8\u63d0\u793a\uff0c\u6216\u8005\u67e5\u9605\u5b98\u65b9\u6587\u6863\u53ef\u5f97\u77e5\u3002")))),Object(p.a)("p",null,"\u51fd\u6570\u7684\u76d1\u542c\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u53ea\u9700\u8981\u5728on\u51fd\u6570\u91cc\u9762\u52a0\u5165\u4e8b\u4ef6\u7684\u540d\u79f0\u548c\u4e8b\u4ef6\u7684\u51fd\u6570\u4f53\u5373\u53ef\u3002\u800c\u51fd\u6570\u4f53\u7c7b\u578b\u63a8\u8350\u4f7f\u7528\u5f02\u6b65\u51fd\u6570\u3002"),Object(p.a)("p",null,"\u5728\u6d88\u606f\u76d1\u542c\u7684\u51fd\u6570\u4f53\u4e2d\uff0cmsg\u662f\u6d88\u606f\u7684\u4e3b\u8981\u8f7d\u4f53\u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8be5\u5bf9\u8c61\u83b7\u53d6\u6240\u6709\u4e0e\u8be5\u6d88\u606f\u5bf9\u5e94\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u6d88\u606f\u7684\u7c7b\u578b\uff0c\u6d88\u606f\u7684\u53d1\u9001\u8005\uff0c\u6d88\u606f\u6240\u5b58\u5728\u7684\u7fa4\u804a\uff0c\u6d88\u606f\u7684\u6587\u672c\u5185\u5bb9\u4ee5\u53ca\u6d88\u606f\u7684\u9644\u4ef6\u4e0b\u8f7d\u7b49\u7b49\u3002"),Object(p.a)("p",null,"\u5728\u4ee5\u4e0a\u7684\u4ee3\u7801\u4e2d\u53ea\u7f16\u5199\u4e86\u83b7\u53d6\u6d88\u606f\u7684\u6587\u672c\u5185\u5bb9: ",Object(p.a)("inlineCode",{parentName:"p"},"msg.text()"),"\u3002\u5982\u679c\u53d1\u9001\u7684\u6587\u672c\u6d88\u606f\u5185\u5bb9\u4e3ading\uff0c\u7136\u540e\u7ed9\u7528\u6237\u56de\u590ddong\u6587\u672c\u3002"),Object(p.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(p.a)("div",{parentName:"div",className:"admonition-heading"},Object(p.a)("h5",{parentName:"div"},Object(p.a)("span",{parentName:"h5",className:"admonition-icon"},Object(p.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(p.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),Object(p.a)("div",{parentName:"div",className:"admonition-content"},Object(p.a)("p",{parentName:"div"},"\u6709\u7684\u5c0f\u4f19\u4f34\u5c31\u53ef\u80fd\u4f1a\u95ee\uff0c\u8fd9\u91cc\u5f88\u660e\u663e\u662f",Object(p.a)("inlineCode",{parentName:"p"},"msg.say()")," \u5e76\u6ca1\u6709\u6307\u5b9a\u6d88\u606f\u53d1\u9001\u7684\u5bf9\u8c61\u554a\u3002"),Object(p.a)("p",{parentName:"div"},"\u7136\u800cWechaty\u4f1a\u81ea\u52a8\u68c0\u6d4b\u6d88\u606f\u7684\u6765\u6e90\uff0c\u5982\u679c\u662f\u5728\u7fa4\u91cc\u9762\u7684\u6d88\u606f\uff0c\u4f1a\u81ea\u52a8\u5c06\u5185\u5bb9\u53d1\u9001\u7ed9\u5bf9\u5e94\u7684\u7fa4\u804a\u4e2d\uff1b\u5982\u679c\u662f\u8054\u7cfb\u4eba\u7684\u79c1\u804a\u4fe1\u606f\uff0c\u4fbf\u81ea\u52a8\u5c06\u6d88\u606f\u53d1\u9001\u7ed9\u5bf9\u5e94\u7684\u8054\u7cfb\u4eba\u3002\u5f53\u7136\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u83b7\u53d6\u6307\u5b9a\u7fa4\u804a\u5bf9\u8c61\u6216\u8005\u8054\u7cfb\u4eba\u5bf9\u8c61\u53d1\u9001\u6d88\u606f\u6587\u672c\u7c7b\u578b\u3002"))),Object(p.a)("p",null,"\u6700\u540e\u4e00\u6b65\u5c31\u662f\u542f\u52a8Wechaty\u670d\u52a1\uff0c\u76d1\u542c\u6240\u6709\u4e8b\u60c5\u3002\u8fd9\u4e2a\u6b65\u9aa4\u4f1a\u5728\u672c\u5730\u7684\u8fdb\u7a0b\u4e2d\u5f00\u542f\u5e38\u9a7b\u7a0b\u5e8f\uff0c\u5904\u7406\u5bf9\u5e94\u7684\u6d88\u606f\u76d1\u542c\u3002\u8fd9\u4e00\u6b65\u5f88\u7b80\u5355\uff0c\u5bf9\u4e8e\u4ee5\u540e\u7684\u5f00\u53d1\u800c\u8a00\u90fd\u4e0d\u4f1a\u53d8\u52a8\uff0c\u6240\u4ee5\u6b64\u5904\u4e0d\u505a\u8fc7\u591a\u89e3\u91ca\uff0c\u4ee5\u540e\u7167\u6b64\u7f16\u5199\u5373\u53ef\u3002"))}s.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),c=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||p;return a?c.a.createElement(u,r(r({ref:t},l),{},{components:a})):c.a.createElement(u,r({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var l=2;l<p;l++)i[l]=a[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);