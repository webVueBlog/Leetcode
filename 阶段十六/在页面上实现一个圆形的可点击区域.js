/**

DOM 元素配合 border-radius: 50% 即可实现圆形点击区域

利用 <map> 和 <area> 标签设置圆形点击区域

利用 SVG 作出圆形，然后添加点击事件。

如果在 canvas 上，就需要画出圆形，然后计算鼠标的坐标是否落在圆内。



<div class="circle-wrapper" id="wrapper">
    <div class="circle" id="circle"></div>
</div>

.circle-wrapper{
  width: 200px;
  height: 200px;
  margin-top: 50px;
  margin-left: 100px;
  border: 1px solid gray;
}

.circle{
  width: 200px;
  height: 200px;
  background: lightblue;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover{
    box-shadow: 1px 1px 5px gray;
  }
}



const circle = document.getElementById('circle');
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (e) => {
  const target = e.target;
  console.log('target is : ', target.id);
})

circle.addEventListener('click', (e) => {
  console.log('clicked')
})




*/