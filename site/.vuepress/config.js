module.exports = {
  title: 'ISIC 2019',
  description: 'Skin Lesion Analysis Towards Melanoma Detection',
  ga: 'UA-68986534-4',
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Background', link: '/background'},
      { text: 'Data', link: '/data'},
      { text: 'Submission', link: '/submit'},
      { text: 'Evaluation', link: '/evaluation'},
      { text: 'Leaderboard', link: 'https://challenge.isic-archive.com/leaderboards/2019'},
      { text: 'Live Leaderboard', link: 'https://challenge.isic-archive.com/leaderboards/live'},
      // { text: 'Workshop 2019', link: 'https://workshop2019.isic-archive.com'},
      { text: 'Contact', link: 'https://forum.isic-archive.com'},
    ],
    search: false
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-68986534-4'
      }
    ]
  ]
};
