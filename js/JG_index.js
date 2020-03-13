// 蒋冠
(function(){
        
    // 界面选择
    let jgDogOrCat = document.getElementsByClassName('jgChooseTitle')[0];
    let jgCategoryOfGoods = document.getElementsByClassName('jgPetName')[0];
    let jgChoosePet = document.getElementsByClassName('jgChoosePet')[0];
    let jgOuterBox = document.getElementsByClassName('jgOuterBox')[0];

    jgDogOrCat.onmouseenter= function(){
        jgChoosePet.style.display = 'block';
        jgOuterBox.style.display = 'none';
        jgDogOrCat.style.background = 'transparent';
        jgCategoryOfGoods.style.background = '#fff';
    }
    jgCategoryOfGoods.onmouseenter= function(){
        jgOuterBox.style.display = 'block';
        jgChoosePet.style.display = 'none';
        jgCategoryOfGoods.style.background = 'transparent';
        jgDogOrCat.style.background = '#fff';
    }

    // 选狗还是选猫?
    let titleName = document.getElementById('titleName');
    let jgChooseDog = document.getElementsByClassName('jgChooseDog')[0];
    let jgChooseCat = document.getElementsByClassName('jgChooseCat')[0];
    let jgClickToDogMall = document.getElementsByClassName('jgClickToDogMall')[0];
    let jgClickToCatMall = document.getElementsByClassName('jgClickToCatMall')[0];


    jgChooseCat.onclick = function(){
        jgChooseDog.classList.remove ('selected');
        jgClickToDogMall.innerHTML = '切换到狗狗站'
        jgChooseCat.classList.add ('selected');
        jgClickToCatMall.innerHTML = '正在猫猫站溜达...';
        titleName.innerHTML = '猫猫';

    }
    jgChooseDog.onclick = function(){
        jgChooseCat.classList.remove ('selected');
        jgClickToCatMall.innerHTML = '切换到狗狗站'
        jgChooseDog.classList.add ('selected');
        jgClickToDogMall.innerHTML = '正在猫猫站溜达...';
        titleName.innerHTML = '狗狗';
    }


    // 轮播图更换同时更换背景
    let jgBGBox = document.getElementById('jgBGBox');
    let pagination = document.getElementsByClassName('my-bullet-active')[0];
    let jgColorAry = ['rgb(79,201,242)' , 'rgb(21, 21, 21)' , 'rgb(66, 98, 65)' , 'rgb(69,118,158)' , 'rgb(208,184,156)'];  // 从这个数组里拿取对应的颜色放入背景色属性中


    // jgBGBox.style.background = jgColorAry[0];

    // bug提示:鼠标悬浮无法对悬浮内容进行选取,背景色无法自动更改.





})()