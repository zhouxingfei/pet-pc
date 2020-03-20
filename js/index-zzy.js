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
}
// 加载执行的函数
let curw=document.documentElement.clientWidth-box.offsetWidth;
let curh=document.documentElement.clientHeight;

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
    timer=setInterval(reduce,0.2)
   
};
//回到顶部
let jk=document.getElementById('six')
let imgs=document.createElement('img');
let winH = utils.win('clientHeight');
jk.onclick=function(){
    let winT=utils.win('scrollTop',0);//100
}
let childs;
let getId;
let childss;
let oneDiv=document.getElementById('oneDiv');
$('#box #oneDiv ul').hover(function(){
        $('#towbagBox')[0].style.display='none';
        $('#bagBox')[0].style.display='block'; 
        $('#box #oneDiv #getId').addClass('context');
    
},function(){
})
$('#box div').hover(function(){
    childs=$(this).attr('id');
    childss=$(this).children().attr('id');
    if(childs=='oneDiv'){
        $('#textBox')[0].style.display='none';
        $('#towbagBox')[0].style.display='none';
    }
    if(childs=='towDiv'){
        $('#textBox')[0].style.display='none';
        $('#towbagBox')[0].style.display='block';
        $('#bagBox')[0].style.display='none';
    }
    if(childs=='threeDiv'){
        $('#textBox')[0].style.display='none';
        $('#towbagBox')[0].style.display='none';
    }
    
    $(this).addClass('Div');
    $(this).children().children().addClass('context')
    $(this).children().children().nextAll().addClass('context')

},function(){
    childs=$(this).attr('id');
    if(childs=='bagBox'){
        $('#bagBox')[0].style.display='none';
    }
    if(childs=='towbagBox'){
        $('#towbagBox')[0].style.display='none';
    }
    $(this).children().removeClass('context');
    $(this).removeClass('Div');
    $(this).children().removeClass('context');
    $(this).children().children().removeClass('context')
    $(this).children().children().nextAll().removeClass('context')
})
// 写第一个登录的标签框
let num;
$('#box #fourDiv ul').hover(function(){
    $(this).addClass('anim')
   num=$(this).index();
   switch (num) {
       case 0:
           $('#textBox')[0].style.display='block';
           $('#xBox')[0].style.display='none';
           break;
       case 1:
           $('#xBox')[0].style.display='block';
           $('#textBox')[0].style.display='none';
           $('#weixinBox')[0].style.display='none';
           break;
       case 2:
           $('#weixinBox')[0].style.display='block';
           $('#xBox')[0].style.display='none';
           $('#weiboBox')[0].style.display='none';
           break;
       case 3:
           $('#weiboBox')[0].style.display='block';
           $('#weixinBox')[0].style.display='none';
           break;
       case 4:
           $('#topBox')[0].style.display='block';
           $('#weiboBox')[0].style.display='none';
           break;
   }
},function(){
    $(this).removeClass('anim')
    $(this).removeClass('textbagBox')
    let index=$(this).index();
    switch (index) {
      
        case 4:
            $('#topBox')[0].style.display='none';
            break;
    }
})
$('#textBox').hover(function(){},function(){
    $('#textBox')[0].style.display='none';
})
$('#xBox').hover(function(){},function(){
    $('#xBox')[0].style.display='none';
})
$('#weixinBox').hover(function(){},function(){
    $('#weixinBox')[0].style.display='none';
})
$('#weiboBox').hover(function(){},function(){
    $('#weiboBox')[0].style.display='none';
})
})()
