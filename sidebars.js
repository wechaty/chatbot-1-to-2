module.exports = {
  docs: [
    'README',
    {
      type: 'category',
      label: '基础篇',
      items: [
        {
          Typescript: [
            'basic/typescript/introduction',
            'basic/typescript/installation'
          ], 
        },
        'basic/basic-wechaty',
        'basic/seven-lines-code-chatbot',
        'basic/ding-dong-bot',
      ],
    },
    {
      type: 'category',
      label: '应用篇',
      items: [
        'applications/1.words-per-day',
        'applications/2.contact-and-room-management',
        'applications/3.group-chatbot',
        'applications/4.group-qa-chatbot',
      ],
    },
    {
      type: 'category',
      label: '进阶篇',
      items: [
        'advanced/1.multi-languages',
        'advanced/2.multi-platform',
        'advanced/3.multi-plugins',
        'advanced/4.deployment',
        'advanced/5.wechaty-with-ai',
        'advanced/6.story-of-open-source',
      ],
    },
  ],
}
