# 简介

## Project Overview

![vue bootstrap demo home page](https://i.ibb.co/SXhmH3q/software-Home.png?raw=true)

![vue bootstrap demo author list page](https://i.ibb.co/19ZvxV6/Author-List-1.png?raw=true)

![vue bootstrap demo author list page](https://i.ibb.co/nBB45CT/Author-List-2.png?raw=true)

![vue bootstrap demo adding new authors page](https://i.ibb.co/yRFrWWg/Adding-New-Authors.png?raw=true)

### Compiles 
```
npm install
npm run serve
npm run build
npm run test
npm run lint
```

## 视频连接
<video class="home__bg" width="100%" height="100%" autoplay="" loop="" muted="" src="https://cdn.51lm.tv/resource/web/site/background.mp4" style="height:100%; width: 100%;"></video> 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

//导航小圆点的位置，left或者right,默认为right
navigationPosition: 'left',
//是否可以使用键盘方向键导航（上下键翻页），默认为true
keyboardScrolling: true,
//是否显示两侧的箭头
controlArrows: false,
//每一页幻灯片的内容是否垂直居中，默认为true
verticalCentered: true,
//字体是否随着窗口缩放而缩放 默认为true
resize: true,
//页面滚动速度
scrollingSpeed: 700,
//定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
anchors: ["page1", "page2", "page3"],
//是否锁定锚链接
lockAnchors: true,
//定义section页面的滚动方式，需要引入jquery.easings插件
easing:'',
//是否使用css3 transform来实现滚动效果
css3: false,
//滚动到最顶部后是否连续滚动到底部
loopTop: true,
//滚动到最底部后是否连续滚动到顶部
loopBottom: true,
//横向slide幻灯片是否循环滚动
loopHorizontal: false,
//是否循环滚动，不会出现跳动，效果很平滑
continuousVertical: true,
//是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
autoScrolling: false,
//是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
scrollBar: true,
//设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
paddingTop: "100px",
//设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
paddingBottom: "100px",
//固定的元素，为jquery选择器；可用于顶部导航等
fixedElements: ".nav",
//在移动设置中页面敏感性，最大为100，越大越难滑动
touchSensitivity: 5,
//设为false，则通过锚链接定位到某个页面不再有动画效果
animateAnchor: false,
//是否记录历史，可以通过浏览器的前进后退来导航
recordHistory: true,
//绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
menu: '.nav',
// 鼠标移动到小圆点上时显示出的提示信息
navigationTooltips: ["第一页","第二页","第三页"],
// 是否显示当前页面小圆点导航的提示信息，不需要鼠标移上
showActiveTooltip: true,
// 是否显示横向幻灯片的导航
slidesNavigation: true,
// 横向幻灯片导航的位置，可以为top或者bottom
slidesNavPosition: 'bottom',
// 内容超过满屏时是否显示滚动条，需要jquery.slimscroll插件
scrollOverflow: true,
// section选择器
sectionSelector: ".section",
// slide选择器
slideSelector: ".slide"
