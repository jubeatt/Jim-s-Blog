$(function() {
  let $anchorList = $("#anchors") // 取得錨點的父元件

  // 設定事件監聽
  $anchorList.on(
    'click',  // click事件綁定
    'a',  // 二次篩選，只將事件綁定到其子元件<a>
    function(event) {
      event.preventDefault()  // 取消元件預設行為
      let triggerElement = event.target.getAttribute("href")  // 取得點擊元件的href值
      let targetPosition = $(triggerElement).offset().top  // 擷取錨點目標的座標
      let $controller = $("html, body")  // 取得html, body元件
      $controller.animate({ scrollTop: targetPosition - 90}, 1000) // 動畫更改scrollTop屬性值
    })
})