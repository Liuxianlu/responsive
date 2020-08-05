;(function (document) {
  
  var oMenuBtn = document.querySelector('.header .fa-bars');
  var oNav = document.querySelector('.header .header-nav');

  var init = function () {
    setFontSize();
    bindEvent();
  }

  function bindEvent() {
    window.addEventListener('resize', setFontSize, false); // 文档视图调整大小时会触发 resize 事件。
    oMenuBtn.addEventListener('click', showNav, false);
  }

  function setFontSize () {
    var cWidth = document.documentElement.clientWidth; // 获取窗口宽（不包括滚动条）
    
    if (cWidth <= 414) {
      document.documentElement.style.fontSize = cWidth / 37.5 + 'px'; // 设置根元素默认字体大小
    } else {
      var fontSize = document.documentElement.style.fontSize;
      if (fontSize !== '62.5%') { // (16px * 62.5) 1rem = 10px
        document.documentElement.style.fontSize = '62.5%';
      }
    }

    if (cWidth > 768) { // 窗口宽度大于 iPad设备 768px
      oNav.style.display = 'block'; // 显示三个导航栏列表
    } else {
      oNav.style.display = 'none'; // 否则隐藏
    }

  }

  function showNav() { // 点击右上角三个点
    var isShow = oNav.style.display; // 获取当前导航栏状态
    
    if (isShow === 'block') { // 显示
      oNav.style.display = 'none';
    } else {
      oNav.style.display = 'block'; // 关闭
    }

  }

  init();

})(document);