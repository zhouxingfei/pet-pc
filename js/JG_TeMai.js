(function(){

    let fixedMenu = document.querySelector('#fixedMenu');
    let navs = document.querySelectorAll('#fixedMenu nav a');
    
    let list = document.querySelectorAll('#teMaiWrap li');

    // 当滚动条卷去高度达到580px时给navWrap设置固定定位，top值29px，并设置背景色为白色。
    document.onscroll = function(){
        let scrollT = document.documentElement.scrollTop;
        // console.log(scrollT);
        
        if(scrollT > 580){
            fixedMenu.style.cssText = 'position:fixed;top:29px;z-index:999;background:#fff;';
        }else{
            fixedMenu.style.cssText ='';
        }

        // 监视滚动条，达到要求给navs的响应子元素加active的类名。
        for(let i = 0 ; i < list.length; i++){
            if(list[i].getBoundingClientRect().top <= 170){
                for (let i = 0; i < navs.length; i++) {
                    navs[i].classList.remove ('active') ;
                }
                navs[i].classList.add ('active') ;
            }
        }
    }

    // 点击某个菜单时去到某个页面
    
    for (let i = 0; i < navs.length; i++) {
        navs[i].onclick = function(){
            // var clientT = list[i].getBoundingClientRect().top;
            // console.log(clientT);
            
            for (let i = 0; i < navs.length; i++) {
                navs[i].classList.remove ('active') ;
            }
            navs[i].classList.add ('active') ;
            // list[i].getBoundingClientRect().top = '150';
            // console.log(i);
            // document.documentElement.scrollTop = 580;

            clearInterval(timer);
            var timer = setInterval(function(){
                if(list[i].getBoundingClientRect().top > 140){
                    document.documentElement.scrollTop += 34;
                    if(list[i].getBoundingClientRect().top <= 140){
                        clearInterval(timer);
                    }
                }
                else {
                    document.documentElement.scrollTop -= 34;
                    if(list[i].getBoundingClientRect().top > 140){
                        clearInterval(timer);
                    }
                }
                
            },10)
           
        }
        
    }
 



})()