(function(){
    let box=document.getElementById('box');
//获得可视区域的宽度使阴影向右排列
function reduce(){
    let newcurw=document.documentElement.clientWidth-box.offsetWidth;
    box.style.left=newcurw+'px';
    let newcurh=document.documentElement.clientHeight;
    if(curh<newcurh){
        box.style.height=newcurh+'px';
    }
}
// 加载执行的函数
let curw=document.documentElement.clientWidth-box.offsetWidth;
let curh=document.documentElement.clientHeight;
console.log(curw);
box.style.left=curw+'px';
box.style.height=curh+'px';
let bagT=$('#box #oneDiv ul').offset().top;
let bagL=$('#box').offset().left-$('#bagBox').width();
    //获取登录框的top
    //设置登录框的left
    $('#bagBox').offset({
        left:bagL-1,
        top:bagT
    })
    //获得购物车的left top
    let towbagT=$('#box #towDiv').offset().top;
    let towbagL=$('#box').offset().left-$('#towbagBox').width();
    $('#towbagBox').offset({
        left:towbagL-1,
        top:towbagT
    })
    //获得第一个小图标时进行的样式
    let textT=$('#box #fourDiv ul').eq(0).offset().top;
    let textL=$('#box').offset().left-$('#textBox').width();
    $('#textBox').offset({
        left:textL-1,
        top:textT
    })
    // 获得第二格小图标样式
    let minT=$('#box #fourDiv ul').eq(1).offset().top-$('#xBox').height()+$('#box #fourDiv ul').eq(1).height();
    let minL=$('#box').offset().left-$('#xBox').width();
    $('#xBox').offset({
        left:minL-1,
        top:minT
    })
    //获得第三张小图标样式
    let wxT=$('#box #fourDiv ul').eq(2).offset().top-$('#weixinBox').height()+$('#box #fourDiv ul').eq(2).height();
    let wxL=$('#box').offset().left-$('#weixinBox').width();
    $('#weixinBox').offset({
        left:wxL-1,
        top:wxT
    })
    // 获得第四张小图标样式
    let woT=$('#box #fourDiv ul').eq(2).offset().top-$('#weiboBox').height()+$('#box #fourDiv ul').eq(3).height()+$('#box #fourDiv ul').eq(3).height();
    let woL=$('#box').offset().left-$('#weiboBox').width();
    $('#weiboBox').offset({
        left:woL-1,
        top:woT
    })
    let topT=$('#box #fourDiv ul').eq(4).offset().top-$('#topBox').height()+$('#box #fourDiv ul').eq(3).height();
    let topL=$('#box').offset().left-$('#topBox').width();
    $('#topBox').offset({
        left:topL-0.5,
        top:topT
    })
//鼠标窗口发生变化时触发事件时触发事件
let timer=null;
window.onresize=function(){
    console.log(11);
    timer=setInterval(reduce,2)
    $('#box').offset();
    //获取登录框的left top
    console.log($('#box').offset());
    let bagT=$('#box #oneDiv ul').offset().top;
    let bagL=$('#box').offset().left-$('#bagBox').width();
    //获取登录框的top
    //设置登录框的left
    $('#bagBox').offset({
        left:bagL-1,
        top:bagT
    })
    //获得购物车的left top
    let towbagT=$('#box #towDiv').offset().top;
    let towbagL=$('#box').offset().left-$('#towbagBox').width();
    $('#towbagBox').offset({
        left:towbagL-1,
        top:towbagT
    })
    //获得第一个小图标时进行的样式
    let textT=$('#box #fourDiv ul').eq(0).offset().top;
    let textL=$('#box').offset().left-$('#textBox').width();
    $('#textBox').offset({
        left:textL-1,
        top:textT
    })
    // 获得第二格小图标样式
    let minT=$('#box #fourDiv ul').eq(1).offset().top-$('#xBox').height()+$('#box #fourDiv ul').eq(1).height();
    let minL=$('#box').offset().left-$('#xBox').width();
    $('#xBox').offset({
        left:minL-1,
        top:minT
    })
    //获得第三张小图标样式
    let wxT=$('#box #fourDiv ul').eq(2).offset().top-$('#weixinBox').height()+$('#box #fourDiv ul').eq(2).height();
    let wxL=$('#box').offset().left-$('#weixinBox').width();
    $('#weixinBox').offset({
        left:wxL-1,
        top:wxT
    })
    // 获得第四张小图标样式
    let woT=$('#box #fourDiv ul').eq(2).offset().top-$('#weiboBox').height()+$('#box #fourDiv ul').eq(3).height()+$('#box #fourDiv ul').eq(3).height();
    let woL=$('#box').offset().left-$('#weiboBox').width();
    $('#weiboBox').offset({
        left:woL-1,
        top:woT
    })
    //回到顶部小样式
    let topT=$('#box #fourDiv ul').eq(4).offset().top-$('#topBox').height()+$('#box #fourDiv ul').eq(3).height();
    let topL=$('#box').offset().left-$('#topBox').width();
    $('#topBox').offset({
        left:topL-0.5,
        top:topT
    })
};
//回到顶部
let jk=document.getElementById('six')

let imgs=document.createElement('img');
let winH = utils.win('clientHeight');
jk.onclick=function(){
    let winT=utils.win('scrollTop',0);//100
}
//   window.onscroll = function(){
//       let winT = utils.win('scrollTop');
//       box.style.top=winT+'px'
//       if(winT>=winH){
//           jk.style.opacity ="1";
//       }
//       else {
//           jk.style.opacity = 0;
//       }
//   }
  
// //移动到div上的img的时候，更换图片
let childs;
let oneDiv=document.getElementById('oneDiv');
$('#box div').hover(function(){

    childs=$(this).attr('id');
    if(childs=='oneDiv'){
        $('#bagBox')[0].style.opacity='1';
    }
    if(childs=='towDiv'){
        $('#towbagBox')[0].style.opacity='1';
    }
    $(this).children().addClass('context');
    $(this).addClass('Div');
    
    $(this).children().children().addClass('context')
    $(this).children().children().nextAll().addClass('context')
    // console.log($(this).child('ul'));
},function(){
    childs=$(this).attr('id');
    // childss=$(this).children().attr('id');
    // console.log(childss);
    
    // if(childs=='textBox'){
    //     $('#textBox')[0].style.opacity='0';
    // }
    // childs=$(this).attr('id');
    if(childs=='bagBox'){
        $('#bagBox')[0].style.opacity='0';
    }
    if(childs=='towbagBox'){
        $('#towbagBox')[0].style.opacity='0';
    }
    $(this).children().removeClass('context');
    $(this).removeClass('Div');
    $(this).children().removeClass('context');
    $(this).children().children().removeClass('context')
    $(this).children().children().nextAll().removeClass('context')
})
//调取forDiv
$('#box #fourDiv ul').hover(function(){
    $(this).addClass('anim')
},function(){
    $(this).removeClass('anim')
})
// 写第一个登录的标签框
let num;
$('#box #fourDiv ul').hover(function(){1
   num=$(this).index();
   switch (num) {
       case 0:
           $('#textBox')[0].style.opacity='1';
           break;
       case 1:
           $('#xBox')[0].style.opacity='1';
           break;
       case 2:
           $('#weixinBox')[0].style.opacity='1';
           break;
       case 3:
           $('#weiboBox')[0].style.opacity='1';
           break;
       case 4:
           $('#topBox')[0].style.opacity='1';
           break;
   }
   
},function(){
    $(this).removeClass('textbagBox')
    let index=$(this).index();
    switch (index) {
        case 0:
            $('#textBox')[0].style.opacity='0';
            break;
        case 1:
            $('#xBox')[0].style.opacity='0';
            break;
        case 2:
            $('#weixinBox')[0].style.opacity='0';
            break;
        case 3:
            $('#weiboBox')[0].style.opacity='0';
            break;
        case 4:
            $('#topBox')[0].style.opacity='0';
            break;
    }
})
})()
