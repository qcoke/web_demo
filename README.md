## 前端 HTML5 CSS3 重构案例
### 主要使用视差滚动技术来实现界面效果<br/>
[moon.html]("./src/moon.html")

### 按钮效果
[button.html]("./src/button.html")
使用了 clip-path 属性，clip-path CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

语法：
```css
/* 原型 */
clip-path:circle(40%);
/* 扇形 */
clip-path:ellipse(130px 140px at 10% 20%);
/* 四边形 */
clip-path:polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
/* 描边 */
clip-path:path('M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z');
```
直接使用效果可以使用此工具 [bennettfeely.com]("https://bennettfeely.com/clippy/") 网站。<br/>
张鑫旭：[CSS3 clip-path polygon图形构建与动画变换二三事]("https://www.zhangxinxu.com/wordpress/2015/03/css3-clip-path-polygon-shape-transition-animation/")

### 界面动画
[image_animation.html]("./src/image_animation.html")
界面使用了 transform-style: preserve-3d; perspective: 500px; 两个样式表属性。
