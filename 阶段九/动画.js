/**animation 是以下属性的简写方式：
1）animation-name 动画名称
2）animation-duration 动画持续的时间
3）animation-timing-function = ease(默认) | ease-in | ease-out | ease-in-out | linear | cubic-bezier 定义了动画的播放速度曲线
4）animation-direction = normal | reverse| alternate| alternate-reverse 播放方向
5）animation-delay 延迟时间
6）animation-iteration-count = infinite | number 播放次数
7）animation-fill-mode = none | forwards | backwards | both 播放后保持动画第一帧或者最后一帧样式
8）animation-play-state = running | paused 控制动画运行或暂停
通常在 JS 端使用该属性object.style.animationPlayState=”paused”来暂停动画 */

// transition 是 CSS 提供的在更改 CSS 属性时，控制动画速度的方法，其可以让属性变化成为一个持续一段时间的过程，而不是立即生效。

/**transition 是以下属性的简写方式：
1）transition-property 监听的 CSS 属性，也可以是 all
2）transition-duration 规定完成过渡效果需要多少秒或毫秒
3）transition-timing-function = ease(默认) | ease-in | ease-out | ease-in-out | linear | cubic-bezier 定义了动画的播放速度曲线
4）transition-delay 延迟执行时间
 */

/**animation、transition、transform、translate 这几个属性要搞清楚:
animation:用于设置动画属性，他是一个简写的属性，包含6个属性 transition:用于设置元素的样式过度，和animation有着类似的效果，
但细节上有很大的不同 transform:用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系 
translate:translate只是transform的一个属性值，即移动，除此之外还有 scale 等 */