module.exports = {
  title: 'ISIC 2019',
  description: 'Skin Lesion Analysis Towards Melanoma Detection',
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Background', link: '/background'},
      { text: 'Data', link: '/data'},
      // { text: 'Submit', link: '/submit'},
      // { text: 'Leaderboard', link: '/leaderboard'},
      { text: 'Workshop 2019', link: 'https://workshop2019.isic-archive.com'},
      { text: 'Contact', link: 'https://forum.isic-archive.com'},
    ],
    search: false
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  }
};
