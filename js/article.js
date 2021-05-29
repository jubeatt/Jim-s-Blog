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
        { name: 'CSS可樂', link: 'http://csscoke.com/' }
      ],
      articles: [
        {
          date: '2021/05/27',
          title: 'Vue.js的學習筆記01-初次見面，請多指教',
          link: 'article1.html'
        },
        {
          date: '2021/05/27',
          title: '不務正業的C語言01 - Hello! C語言',
          link: 'article2.html'
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