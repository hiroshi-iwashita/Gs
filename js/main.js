'use strict';

/* --------------------------------
sakura
-------------------------------- */
(function(document, b, window){
	const cherryBlossom = document.createElement('div');
    cherryBlossom.id = "sakura";
    const snow = document.createElement('div');
    snow.id = "yuki";

    // 上の div に style を追加
    // sakura
	cherryBlossom.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
    '}'+
    '.type1{border-color:#fef4f4;}'+
	'.type2{border-color:#fdeff2;}'+
	'.type3{border-color:#eebbcb;}'+
    '.type4{border-color:#f0908d;}'+'.type4{opacity:0.6;}'+
    '.type5{border-color:#fef4f4;}'+'.type5{opacity:0.8;}'+
    '.type6{border-color:#eebbcb;}'+'.type6{opacity:0.7;}'+
	'.type1::after{border-color:#fef4f4;}'+
	'.type2::after{border-color:#fdeff2;}'+
	'.type3::after{border-color:#eebbcb;}'+
    '.type4::after{border-color:#f0908d;}'+'.type4::after{opacity:0.6;}'+
    '.type5::after{border-color:#fef4f4;}'+'.type4::after{opacity:0.8;}'+
    '.type6::after{border-color:#eebbcb;}'+'.type4::after{opacity:0.7;}'+
    '}'+
    '.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(1);}'+
		'50%{-webkit-transform: rotate(270deg) scale(1);}'+
		'to{-webkit-transform: rotate(1deg) scale(1);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.8);}'+
		'to{-webkit-transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.6);}'+
		'to{-webkit-transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
		'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+
    '</style>';

    // yuki
    snow.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
    'position:absolute;height:0;width:0;'+
    'border: 5px solid white;'+
    'border-radius: 50%;'+
    'opacity: .6;'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 7px solid white;'+
    'border-radius: 50%;'+
    'opacity: .6;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
    '}'+
    '.type1{border-color:#fef4f4;}'+
	'.type2{border-color:#fdeff2;}'+
	'.type3{border-color:#eebbcb;}'+
    '.type4{border-color:#f0908d;}'+'.type4{opacity:0.6;}'+
    '.type5{border-color:#fef4f4;}'+'.type5{opacity:0.8;}'+
    '.type6{border-color:#eebbcb;}'+'.type6{opacity:0.7;}'+
	'.type1::after{border-color:#fef4f4;}'+
	'.type2::after{border-color:#fdeff2;}'+
	'.type3::after{border-color:#eebbcb;}'+
    '.type4::after{border-color:#f0908d;}'+'.type4::after{opacity:0.6;}'+
    '.type5::after{border-color:#fef4f4;}'+'.type4::after{opacity:0.8;}'+
    '.type6::after{border-color:#eebbcb;}'+'.type4::after{opacity:0.7;}'+
    '}'+
    '.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(1);}'+
		'50%{-webkit-transform: rotate(270deg) scale(1);}'+
		'to{-webkit-transform: rotate(1deg) scale(1);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.8);}'+
		'to{-webkit-transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.6);}'+
		'to{-webkit-transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
		'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+
    '</style>';


	const height = window.innerHeight;
	let position = document.documentElement.scrollTop || b.scrollTop;
	let zIndex = 9999;
	let top = new Array();
	let left = new Array();
	let max = new Array();
	let speed = new Array();
	let flake = new Array();
    let count = new Array();
    let k = 0;
    const now = new Date();
    const month = now.getMonth();

    // 季節の取得
    if (month>2 && month<=3){
        b.appendChild(cherryBlossom);
    } else if (month>12 && month<=13){
        b.appendChild(cherryBlossom);
    }

    // スクロールした時に position の値を更新
    document.addEventListener('scroll',function(){position = document.documentElement.scrollTop || b.scrollTop;},false);

    // 花びら10枚用意する為のループ
    for(let i=0;i<10;i++){
		const each = document.createElement('div');
		each.id = 'hanabira'+i;
		top[i] = Math.random()*-100+position;
        left[i] = Math.random()*window.innerWidth;
        each.setAttribute('style','z-index:'+(zIndex+i)+';top:'+top[i]+'px;left:'+left[i]+'px;');
        each.setAttribute('class','hana');
        const clss = 'hana type'+(Math.floor(Math.random()*6)+1)+' y'+(Math.floor(Math.random()*6)+1);
        each.setAttribute('class',clss);
		cherryBlossom.appendChild(each);
		max[i] = Math.random()*40+5;
		speed[i] = Math.random()*5+2;
		flake[i] = document.getElementById('hanabira'+i);
		count[i] = 0;
    }

    // 花びらを繰り返し動かす
	setInterval(function(){
		for(let i=0;i<10;i++){
			if(top[i]<position+height-40){
				if(max[i]>=count[i]){
					left[i] = left[i]+0.5+Math.random()*0.5;
				}else{
					left[i] = left[i]-0.5-Math.random()*0.5;
				}
				if((max[i]*2)<=count[i]){
					count[i] = 0;
				}
			}else{
				top[i] = position-40;
				left[i] = Math.random()*window.innerWidth;
            }

            // 横風
            if(k>=100 && k<=105){left[i] = left[i]+3;}
			else if(k>=106 && k<=120){left[i] = left[i]+5;}
			else if(k>=121 && k<=290){left[i] = left[i]+8;}
			else if(k>=291 && k<=320){left[i] = left[i]+4;}
			else if(k>=321 && k<=330){left[i] = left[i]+2;}
			else if(k>=500 && k<=505){left[i] = left[i]-3;}
			else if(k>=506 && k<=520){left[i] = left[i]-5;}
			else if(k>=521 && k<=790){left[i] = left[i]-8;}
			else if(k>=791 && k<=820){left[i] = left[i]-4;}
			else if(k>=821 && k<=830){left[i] = left[i]-2;}
            else if(k>=900){k = 0;}

			top[i] = top[i]+speed[i];
			flake[i].style.top = top[i]+'px';
			flake[i].style.left = left[i]+'px';
			count[i]++;
        }
        k++;
    },45);
})(window.document,window.document.body,window);






// #japanのスライドショー
$('.slide-list-japan').slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:1000,
    prevArrow: '<img src="img/arrow.left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/arrow.right.png" class="slide-arrow next-arrow">',
    pauseOnDotsHover: true,
    pauseOnHover: true,
    asNavFor:'.thumbnail-list-japan',
});
$('.descrition-list-japan').slick({
    asNavFor:'.slide-list-japan',
    autoplay:true,
    fade:true,
    autoplaySpeed:6000,
    speed:1000,
    arrows: false,
});
$('.thumbnail-list-japan').slick({
    asNavFor:'.slide-list-japan',
    prevArrow: '<img src="img/sub.arrow.left.png" class="sub-slide-arrow sub-prev-arrow">',
    nextArrow: '<img src="img/sub.arrow.right.png" class="sub-slide-arrow sub-next-arrow">',
    focusOnSelect: true,
    slidesToShow:5,
    slidesToScroll:1
});

// #worldのスライドショー
$('.slide-list-world').slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:1000,
    prevArrow: '<img src="img/arrow.left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/arrow.right.png" class="slide-arrow next-arrow">',
    pauseOnDotsHover: true,
    pauseOnHover: true,
    asNavFor:'.thumbnail-list-world',
});
$('.descrition-list-world').slick({
    asNavFor:'.slide-list-world',
    autoplay:true,
    fade:true,
    autoplaySpeed:6000,
    speed:1000,
    arrows: false,
});
$('.thumbnail-list-world').slick({
    asNavFor:'.slide-list-world',
    prevArrow: '<img src="img/sub.arrow.left.png" class="sub-slide-arrow sub-prev-arrow">',
    nextArrow: '<img src="img/sub.arrow.right.png" class="sub-slide-arrow sub-next-arrow">',
    focusOnSelect: true,
    slidesToShow:5,
    slidesToScroll:1
});


// jsでスライドショーを実装しようと戦った跡→敗戦→slickに世話になる
// const images = [
//     'images/https://i.ytimg.com/vi/HUGmNi9QU5A/maxresdefault.jpg',
//     'images/https://www.jigsaw.jp/img/goods/L/epo7738923599.jpg',
//     'images/https://www.jigsaw.jp/img/goods/L/epo7738923599.jpg',
//     'images/https://fashionbox.tkj.jp/wp-content/uploads/2019/09/IMG_4114.Q-20190909165109.jpg',
//     'images/https://static.retrip.jp/article/2426/images/2426615232c9-a603-49b3-9c5d-57b767f22127_m.jpg',
// ];
// let current = 0;
// function changeImage() {
//     if(current+num>=0 && current+num<images.length) {
//         current+=num;
//         document.getElementById('main_img').src = images[current];
//     }
// };
// document.getElementById('prev').onclick = function() {
//     changeImage(-1);
// }
// document.getElementById('next').onclick = function() {
//     changeImage(1);
// }





// header menuのアニメーション
$(function(){
    $("header").css({opacity:'0'});
    setTimeout(function(){
        $("header").stop().animate({opacity:'1'},3500);
    },3800);
});

// menu-about-meのアニメーション
$(function(){
    $(".menu-about-me").css({opacity:'0'});
    setTimeout(function(){
        $(".menu-about-me").stop().animate({opacity:'1'},1800);
    },5500);
});





//h2のスクロール連動アニメーション
//japan-sliderのh2
$(function(){
    var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 200; // どのぐらい要素を動かすか(px)
    var effect_time = 2000; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('#japanScrollFadeIn').css({
        opacity: 0,
        transform: 'translateX(-'+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('#japanScrollFadeIn').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 0.7,
                    transform: 'translateX(0)'
                });
            }
        });
    });
});

//world-sliderのh2
$(function(){
    var effect_pos = 50;
    var effect_move = 200;
    var effect_time = 2000;

    $('#worldScrollFadeIn').css({
        opacity: 0,
        transform: 'translateX(-'+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        $('#worldScrollFadeIn').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 0.7,
                    transform: 'translateX(0)'
                });
            }
        });
    });
});






// const window_h = $(window).height();

// $(window).on("scroll", function(){
//     const scroll_top = $(window).scrollTop();
//     $(".box").each(function(){
//         const elem_pos = $(this).offseet().top;
//         if(scroll_top &gt;= elem_pos - window_h + 300) {
//             $(this).addClass("fadein");
//         } else {
//             $(this).removeClass("fadein");
//         }
//     })
// })





// copyrightの年取得
const now = new Date();
const year = now.getFullYear();
const output = `${year}`;
document.getElementById('year').textContent = output;





// 選択した画像を表示する
// const slidePics = document.querySelectorAll('.slidePic');
// slidePics.forEach(function(item, index){
//     item.onclick = function(){
//         document.getElementById('main_img').src = this.dataset.image;
//     }
// });





// ヘッダーをスクロールしても固定する
// $(function() {
//     var $win = $(window),
//         $main = $('main'),
//         $nav = $('nav'),
//         navHeight = $nav.outerHeight(),
//         navPos = $nav.offset().top,
//         fixedClass = 'is-fixed';

//     $win.on('load scroll', function() {
//     var value = $(this).scrollTop();
//     if ( value > navPos ) {
//         $nav.addClass(fixedClass);
//         $main.css('margin-top', navHeight);
//     } else {
//         $nav.removeClass(fixedClass);
//         $main.css('margin-top', '0');
//     }
//     });
// });

