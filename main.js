window.$docsify = {
  name: 'Payment Protocol',
  logo: '/wud_logo_500.png',
  repo: 'hanjiangyanhuo/DPayment-Official-Website',
  coverpage: {
    '/': 'en/_coverpage.md',
    '/zh-CN': 'zh-CN/_coverpage.md',
    '/en': 'en/_coverpage.md',
  },
  onlyCover: true,
  loadSidebar: 'sidebar.md',
  fallbackLanguages: ['zh-CN','en'],
  maxLevel   : 2,
  subMaxLevel: 2,
  auto2top: true,
  // loadNavbar: true,
  mergeNavbar: true,
  themeable: {
    readyTransition: true,
    responsiveTables: true
  },
  // plugins: [
  //     function (hook) {
  //       var footer = [
  //         '<hr/>',
  //         '<footer>',
  //         'Copyright © 2022 DPayment',
  //         '</footer>'
  //       ].join('');

  //       hook.afterEach(function (html) {
  //         return html + footer
  //       })
  //     }
  //   ],
  search: {
      placeholder: {
        '/': '搜索 (Search)',
        '/zh-CN/': '搜索 (Search)',
        '/en/': 'Type to search'
      },
      noData: {
        '/': '找不到结果 (Not Found)',
        '/zh-CN/': '找不到结果 (Not Found)',
        '/en/': 'No Results'
      }
    },
}

window.onload=function() {
  changeNavText()
  if(window.location.hash === "#/"){
    document.getElementsByClassName('nav_homePage')[0].className = "nav_homePage active"
  }
  window.onhashchange = function(e) {
    if(e.newURL.indexOf('/#/zh-CN') > 0){
      navChange("nav_language_zh active", "nav_homePage", "nav_language_en")
    }else if(e.newURL.indexOf('/#/en') > 0){
      navChange("nav_language_zh", "nav_homePage", "nav_language_en active")
    }else{
      navChange("nav_language_zh", "nav_homePage", "nav_language_en")
    }
    if(e.newURL.slice(e.newURL.length -3 ,e.newURL.length) === '/#/' || e.newURL.slice(e.newURL.length -3 ,e.newURL.length) === '/en' || e.newURL.slice(e.newURL.length -6 ,e.newURL.length) === '/zh-CN'){
      navChange("nav_language_zh", "nav_homePage active", "nav_language_en")
    }
    changeNavText()
  }
}

var navChange = function(nav_language_zh, nav_homePage, nav_language_en){
  document.getElementsByClassName('nav_language_zh')[0].className = nav_language_zh
  document.getElementsByClassName('nav_homePage')[0].className = nav_homePage
  document.getElementsByClassName('nav_language_en')[0].className = nav_language_en
}

var changeLang = function(lang) {
  if(window.location.hash !== "#/"){
    if(window.location.href.indexOf('/#/en') > 0 && lang != 'en'){
      window.location.href = window.location.href.replace('/#/en', '/#/'+lang)
    }
    if(window.location.href.indexOf('/#/zh-CN') > 0 && lang != 'zh-CN'){
      window.location.href = window.location.href.replace('/#/zh-CN', '/#/'+lang)
    }
  }else{
    window.location.href = window.location.href.replace('/#/', '/#/'+lang)
  }
  changeNavText()
}

var goHomePage = function() {
  window.location.href = window.location.href.slice(0, window.location.href.lastIndexOf('/'))
} 

var changeNavText = function() {
  if((window.location.href.indexOf('/#/zh-CN') > 0)){
    document.getElementsByClassName('nav_homePage')[0].innerHTML = "主页"
    document.getElementsByClassName('nav_language')[0].innerHTML = "语言"
  }else{
    document.getElementsByClassName('nav_homePage')[0].innerHTML = "Home"
    document.getElementsByClassName('nav_language')[0].innerHTML = "Language"
  }
}