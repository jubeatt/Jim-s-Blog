const vm = Vue.createApp({
  data() {
    return {
      index: 0,
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
        { name: 'CSS可樂', link: 'http://csscoke.com/' },
        { name: 'Huli', link: 'https://blog.huli.tw/'},
        { name: 'Eddy 思考與學習', link: 'https://eddychang.me/'}
      ],
      articles: [
        {
          date: '2021/06/10',
          title: '關於陣列的各種方法',
          thumbnail: 'images/thumbnail03.jpg',
          summary: '寫這篇文章的用意很簡單，我們都知道Array是一個全域物件，所以可以使用的Method也非常的多，不過要一次記下全部似乎有點困難？所以就寫一篇文章來當作給自己練習，也當作是一種分享與紀錄！',
          link: 'articles/article3.html',
          readMore: '....繼續閱讀全文內容'
        },
        {
          date: '2021/06/02',
          title: 'Vue.js的學習筆記02-事件綁定與條件判斷',
          thumbnail: 'images/thumbnail01.png',
          summary: '施工中',
          link: 'articles/article2.html',
          readMore: '....繼續閱讀全文內容'
        },
        {
          date: '2021/05/27',
          title: 'Vue.js的學習筆記01-初次見面，請多指教',
          thumbnail: 'images/thumbnail01.png',
          summary: '作為一名前端開發者，除了摸索基礎的程式知識以外，如何提升開發效率也是件很重要的課題。希望透過分享自己的學習紀錄，讓各位讀者能夠一起與我一起探索Vue.js是什麼玩意兒呢？',
          link: 'articles/article1.html',
          readMore: '....繼續閱讀全文內容',
        },
      ],
    }
  },
  computed: {
    countTotalPost() {
      return this.articles.length
    }
  },
  methods: {
    changePage(direction){
      this.index = (this.index + direction + this.countTotalPost) % this.countTotalPost
      console.log(this.index)
      $(".articles").hide().fadeIn(500)
    }
  }
  
}).mount('#app')