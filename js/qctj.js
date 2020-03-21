$("#main-footer").load('footer.html', function () {
    $.getScript('./js/footer.js')
})
$("#head").load('head.html')

~function(){
    //1、获取数据
    let DATA = null,
        xhr = new XMLHttpRequest;
    xhr.open('GET','json/product.json',false);
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4){
            DATA = xhr.responseText;
        }
    };
    xhr.send();
    DATA = JSON.parse(DATA);
    //console.log(DATA);
    //2、把获取的数据展示在页面中
    let htmlStr = ``;
    DATA.forEach(item => {
        let{
            id,
            zhe,
            img,
            wobu,
            text,
            newPrice,
            oldPrice
        } = item;
        htmlStr += `<div class="card" data-newPrice="${newPrice}" 
        data-zhe="${zhe}">
        <div class="card-top">
            <p class="card-top1">${zhe}</p>
            <p class="card-top2">折</p>
        </div>
        <div class="card-img-top">
            <img src="${img}" alt="">
        </div>
        <div class="card-lr">
            <div class="card-lr-left"><img src="${img}" alt=""></div>
            <div class="card-lr-right"><span>${wobu}</span></div>
        </div>
        <div class="card-text">
            <p>${text}</p>
        </div>
        <div class="card-price">
            <span>￥${newPrice}</span>
            <span>￥${oldPrice}</span>
            <img src="img/cart.png" alt="">
        </div>
    </div>`;
        /* htmlStr += `<div class="card" 
        data-price="${price}" 
        data-hot="${hot}" 
        data-time="${time}">
<img class="card-img-top" src="${img}" alt="">
<div class="card-body">
<h6 class="card-title">${title}</h6>
<p class="card-text">价格：￥${price}</p>
<p class="card-text">好评：${hot}</p>
<p class="card-text"><small class="text-muted">上架时间：${time}</small></p>
</div>
</div>`; */
    });
    //console.log(htmlStr);
    let cardDeck = document.querySelector(".card-deck");
    cardDeck.innerHTML = htmlStr;

/* 点击按钮升降序 */
let navList = document.querySelectorAll('.navbar-nav li'),
    cardList = cardDeck.querySelectorAll('.card'); //类数组
    for(let i = 0; i < navList.length;i++){
        let item = navList[i];
        item['data-type'] = -1;
        item.onclick = function(){
            [].forEach.call(navList,item => (item === this ? this['data-type'] *= -1 : item['data-type'] = -1));

            //将类数组转换为数组
            cardList = [].slice.call(cardList,0);
            //console.log(cardList);
            cardList.sort((next,cur) => {
                let pai = this.getAttribute('data-pai');
                //next,cur存储的是每个元素对象
                cur = cur.getAttribute(pai);
                next = next.getAttribute(pai);
                if(pai === "data-time"){
                    cur = cur.replace(/-/g,"");
                    next = next.replace(/-/g,"");
                }
                return (next - cur) * this['data-type'];
            });
            cardList.forEach(item => cardDeck.appendChild(item));
            };
        }
/* 狗狗显示和隐藏 */
 /* let navbar = document.querySelectorAll(".nav-left"),
    navLeftSider= document.querySelectorAll(".nav-left-sider");
    for(var i =0;i<navbar.length;i++){
        index = navbar[i];
        index.onmouseover = function(){
            navLeftSider.style.display = "block";
        }
        index.onmouseout = function(){
            navLeftSider.style.display = "none";
        }
    }
         */
    
 












}();