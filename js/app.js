const vm = Vue.createApp({
  data() {
    return {
      user: {
        name: 'Jim',
        memo: '前端開發者',
        skill: 'HTML, CSS, JavaScript',
        avatar: 'images/avatar.jpg',
      },
      links: {
        homePage: 'app.html',
        aboutPage: 'about-me.html',
        github: 'https://github.com/jubeatt',
        facebook: 'https://www.facebook.com/profile.php?id=100003593580513',
        email: 'mailto: jimdevelopesite@gmail.com',
      },
      recommendBlogger: [
        { name: 'Summer。桑莫。夏天', link: 'https://cythilya.github.io/' },
        { name: 'OXXO.STUDIO', link: 'https://www.oxxostudio.tw/' },
        { name: '卡斯伯', link: 'https://wcc723.github.io/' },
        { name: 'CSS可樂', link: 'http://csscoke.com/' }
      ],
      articles: [
        {
          date: '2021/05/27',
          title: 'Vue.js的學習筆記01-初次見面，請多指教',
          thumbnail: 'images/thumbnail01.png',
          summary: '作為一名前端開發者，除了摸索基礎的程式知識以外，如何提升開發效率也是件很重要的課題。希望透過分享自己的學習紀錄，讓各位讀者能夠一起與我一起探索Vue.js是什麼玩意兒呢？',
          link: 'articles/article1.html',
          readMore: '....繼續閱讀全文內容'
        },
      ],
    }
  },
  computed: {
    countTotalPost() {
      return this.articles.length
    }
  }
}).mount('#app')