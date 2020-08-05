# responsive
简单的响应式作品
预览地址：http://responsive.liuxianlu.com/

---

```javascript
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 意思
```

#### 相对单位
  em 相对父元素 
  rem 相对根元素html 统一 font-size: 62.5% (16px * 62.5)
  vw/vh 视口宽高 分成100份 100vh

#### 媒体查询 @media () {} 可以写条件
  @media (max-width: 1199px) and (min-width: 700px) {} 小于等于1199 大于等于700
  引入 <link rel="stylesheet" media="screen and (max-width: 1199px)" href="css/m.css" />


#### 案例思路
  1200px 像素 PC box1200 
  1199px box100% ca25%
  768px box100% ca50% nav消失 出现按钮

  414px iphone 字体盒子 hmtlfont-size动态设置

  iPad pro PC端


#### 另外的方法
  还可以写两个站点  根据设备不同判断跳转到对应站点就行了