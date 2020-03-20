$("#main-footer").load('footer.html', function () {
    $.getScript('./js/footer.js')
})



let petonav = document.getElementById('petonav')
let onavcont = document.getElementsByClassName("onav-cont")
let uls = petonav.getElementsByTagName('ul')
let lis = petonav.getElementsByTagName('li')
let spans = petonav.getElementsByTagName('span')
// console.log(uls)
for (let i = 0; i < spans.length; i++) {
    spans[i].onmouseover = function () {
        //   console.log(11111)
        $(this).parent().addClass('active')

    }


}
for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        lis[i].style.background = 'grey'
    }
    lis[i].onmouseleave = function () {
        lis[i].style.background = ''
    }

}
for (let j = 0; j < onavcont.length; j++) {
    onavcont[j].onmouseleave = function () {
        // console.log(222)
        $(this).removeClass('active')
    }


}
      //狗狗选项




$(function() {
	$("#share").hover(function() {
		$(".share-div").show();
	}, function() {
		$(".share-div").hide();
	})
})
$img = $("#display-img");
var $sImg = $("#small-img");
var $sc = $("#smallcursor");
var $bImg = $("#big-img");
var $bc = $("#bigcursor");
$(".oborder").children().hover(function() {
	var path = "img/detail/big-" + $(this).index() + ".jpg";
	$img.prop("src", path);
	$bc.prop("src", path);
})

var _width = $bImg.width() / $bc.width() * $sImg.width();
$sImg.hover(function() {
	$sc.width(_width).height(_width).show();
	$bImg.show();
}, function() {
	$sc.hide();
	$bImg.hide();
});
$sImg.mousemove(function(e) {
		//计算鼠标相对于小图的坐标
		var mousex = e.pageX - $(this).offset().left;
		var mousey = e.pageY - $(this).offset().top;
		//计算小放大镜的位置
		$sc.css({
			left: Math.min(Math.max(0, mousex - _width / 2), $sImg.width() - $sc.width()),
			top: Math.min(Math.max(0, mousey - _width / 2), $sImg.height() - $sc.width())
		});
		//计算比例大小
		var scale = $bc.width() / $sImg.width();
		//计算大图偏移量

		$bc.css({
			left: -$sc.position().left * scale,
			top: -$sc.position().top * scale
		});
	})
	//增加减少购买数量

$(".lim-buynum").click(function() {
	var num = $("#cart_buynum").prop("value");
	if(num > 1) num--;
	$("#cart_buynum").prop("value", num);
})
$(".add-buynum").click(function() {
	var num = $("#cart_buynum").prop("value");
	num++;
	$("#cart_buynum").prop("value", num);
})

//下部分商品详情部分
$("#shouquan").hover(function() {
	$(this).css("background", "#9f83e7");
}, function() {
	$(this).css("background", "#fff");
})
var _top = $(".tabs").position().top;
$(".tabs").find("a").click(function() {
	$(".content").children().eq($(this).index()).show().siblings().hide();
	$(this).addClass("hov").siblings().removeClass("hov");
	$("body").animate({
		scrollTop: _top + 170
	}, 300);
})

$(window).scroll(function() {
	if($(this).scrollTop() > Math.max(_top, 0)) {
		$(".tabs").css("position", "fixed");
		$(".tabs").css("top", "0");
	} else {
		// $(".tabs").css("position", "none");
		$(".tabs").css("top", _top);
	}
})

//加入购物车
$("#addcart").click(function() {
	var oUrl = window.location.href;
	var arr = oUrl.split("=");
	var txtid = arr[arr.length - 1].toString();
	var txtnum = $("#cart_buynum").prop("value");

	var goods = {
		"id": parseInt(txtid),
		"num": parseInt(txtnum)
	}
	var goodsarr = eval($.cookie("shopcart"));
	var isexist = false;
	if(goodsarr) {
		goodsarr.map(function(item, index) {
			if(item.id == txtid) {
				item.num += Number(txtnum);
				isexist = true;
			}
			console.log(goodsarr);
		})
		if(!isexist) {
			goodsarr.push(goods);
		}
		$.cookie("shopcart", JSON.stringify(goodsarr), {
			expires: 7
		})
	} else {
		$.cookie("shopcart", "[{id:" + txtid + ",num:" + txtnum + "}]", {
			expires: 7
		})
	}
	var d = dialog({
		content: '恭喜，已成功添加到购物车！',
		button: [{
			value: '去购物车',
			callback: function() {
				window.location.href = "buycart.html";
			}
		}, {
			value: '立即结算',
			autofocus: true
		}]
	})
	d.show();
})

//评价
var currentpage = 1;
var comments = {
	getComment: function(currenindex) {
		$.ajax({
			type: "get",
			url: "http://comment.secoo.com/comment/comment.jsp?process=7&currPage="+currenindex+"&pageSize=8&isImg=0&productId=16749891&productBrandId=11&productCategoryId=33",
			async: true,
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				var arr = data.data.productCommentList;
				var pageinfo = data.data.page;
				//更新评论数量
				$(".commentsum").text("评论("+pageinfo.sum+")");
				arr.map(function(item, index) {
					var src = "img/detail/tou.jpg";
					var username = item.userName;
					var star = item.grade;
					var from = item.sourceText;
					var datetime = new Date(item.createDate).toLocaleString();
					var content = item.content;
					var linkgoods = item.productName;
					var num = item.praiseCount;
					
					var str = "<dl class='clearfix'>" +
						"<dt class='fl ftc'>" +
						"<img style='width: 50px;' src='" + src + "' />" +
						"<span>" + username + "</span>" +
						"</dt>" +
						"<dd class='fl'>" +
						"<div class='d-con'>" +
						"<div class='clearfix p-detail'>" +
						"<div class='fl star'>" +
						"<span><em></em></span>" + star + ".0" +
						"</div>" +
						"<div class='fr'>" +
						"来自" + from + "&nbsp;|&nbsp;同品牌评价&nbsp;|&nbsp;" + datetime + "" +
						"</div></div><div class='d_cont'>" +
						"" + content + "" +
						"</div><div class='p_photos'>" +
						"<a href='#' class='fl'>" + linkgoods + "</a>" +
						"<div class='fr'><i></i><span>(" + num + ")</span></div></div></div></dd></dl>"
					$(".con-comment").prepend(str);
				})
			}
		});
	}
}
//默认是第一页
comments.getComment(1);
//下一页
$("#nextpage").click(function(){
	currentpage++;
	$(".con-comment").empty();
	$(this).addClass("on").siblings().removeClass("on");
	comments.getComment(currentpage);
})

$(".comment_page").find("a").not("#nextpage").click(function(){
	currentpage = $(this).index()+1;
	$(".con-comment").empty();
	$(this).addClass("on").siblings().removeClass("on");
	comments.getComment(currentpage);
})