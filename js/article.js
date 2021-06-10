const vm = Vue.createApp({
  data() {
    return {
      user: {
        name: 'Jim',
        memo: '前端開發者',
        skill: 'HTML, CSS, JavaScript',
        avatar: '../images/avatar.jpg',
      },
      links: {
        homePage: '../app.html',
        aboutPage: '../about-me.html',
        github: 'https://github.com/jubeatt',
        facebook: 'https://www.facebook.com/profile.php?id=100003593580513',
        email: 'mailto: jimdevelopesite@gmail.com',
      },
      recommendBlogger: [
        { name: 'Summer。桑莫。夏天', link: 'https://cythilya.github.io/' },
        { name: 'OXXO.STUDIO', link: 'https://www.oxxostudio.tw/' },
        { name: '卡斯伯', link: 'https://wcc723.github.io/' },
        { name: 'CSS可樂', link: 'http://csscoke.com/' },
        { name: 'Huli', link: 'https://blog.huli.tw/'},
        { name: 'Eddy 思考與學習', link: 'https://eddychang.me/'}
      ],
      articles: [
        {
          date: '2021/06/07',
          title: '關於陣列的各種方法',
          link: 'articles/article3.html',
        },
        {
          date: '2021/06/02',
          title: 'Vue.js的學習筆記02-事件綁定與條件判斷',
          link: 'article2.html',
        },
        {
          date: '2021/05/27',
          title: 'Vue.js的學習筆記01-初次見面，請多指教',
          link: 'article1.html',
          exampleLink: 'https://codepen.io/jubeatt/pen/xxqXmXj'
        }
      ],
    }
  },
  computed: {
    countTotalPost() {
      return this.articles.length
    }
  }
}).mount('#app')