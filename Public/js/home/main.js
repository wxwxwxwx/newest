$('.dropdown-toggle').click(function(){
    $('.dropdown-navlist').toggleClass('dropdown-navlist-select');


});
$('.span-of-pagination').click(function(){
    console.log('sss');
});
$('.teacher-left').hover(function(){
    $('#left-button').addClass('left-scroll');
    $('#right-button').addClass('right-scroll');
    var box = document.getElementsByClassName('teacher')
});



//当屏幕移动到位置 执行动画
$(window).scroll(function(){
    var height = Number($('.zly_ts_main').offset().top);//1648
    var windowHeight = window.screen.availHeight;
    var scrollHeight = Number( $(this).scrollTop() );

    var zuobianlianxi = document.getElementsByClassName('zuobianlianxi')[0];

    console.log(scrollHeight);
    //$('.zuobianlianxi').style.background = scrollHeight;
    zuobianlianxi.style.top = (scrollHeight + 300) + 'px';
    if(scrollHeight < windowHeight){
        $('.returentop').removeClass('chuxian');
    }else{
        $('.returentop').addClass('chuxian');
    }

    if(scrollHeight >= height - windowHeight + 100){

        $('.zly_ts_image_notchuxian').addClass('zly_ts_image_chuxian');

    }
});
$(window)

