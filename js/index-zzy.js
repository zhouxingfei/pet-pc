(function(){
    //回到顶部
    window.onscroll=function(){
        let winT=utils.win('scrollTop');
        winT>100?$('#toTop')[0].style.display='block':$('#toTop')[0].style.display='none';
    }
    $('#toTop').click(function(){
        utils.win('scrollTop',0)
    })
})()