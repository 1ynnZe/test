
$(function () {

    //導覽列子項目 
    function scrollDropDown() {
        if ($(window).width() < 992) {
            $("#navbarNav .navbar-nav_dropdown>a.m_dropdownBtn").click(function () {
                $("#navbarNav .navbar-nav_dropdown>a.m_dropdownBtn").not(this).removeClass('.active')
                $("#navbarNav .navbar-nav_dropdown>a.m_dropdownBtn").not(this).next().slideUp();
                $(this).toggleClass('active')
                $(this).next().stop().slideToggle();
            })
        }
        else {

            $('.navbar-nav_dropdown').on('mouseover', function () {
                $(this).children('a').addClass('active')
            })
            $('.navbar-nav_dropdown').on('mouseleave', function () {
                $(this).children('a').removeClass('active')
            })

        }
    }
    scrollDropDown()

    //檢查aos動畫 不要讓元素消失 
    let checkTimer = setInterval(function () {
        let $el = $('.aos-init');

        if ($el.length && !$el.hasClass('aos-animate')) {
            $el.addClass('aos-init aos-animate');
            console.log('已自動加上 aos-animate');
            clearInterval(checkTimer); // 加完就停掉
        }
    }, 2000);


    //js-goTopBtn
    $('#js-goTopBtn').on('click', function () {
        var target = $(this).attr('href')
        var position = $(target).offset().top
        var navbarHeight = $('.navbar').outerHeight()
        var duration = 500
        $('html,body').stop().animate({
            scrollTop: position - navbarHeight
        }, duration)
    })




    function litemGoLink() {
        // if ($(window).width() > 992) {
        $('.navbar-nav_dropdown>.nav-link').on('click', function (e) {
            window.location.href = $(this).attr('data-href')
        });
        // }


    }

    litemGoLink()


    //輪播只有一張隱藏箭頭
    if ($('.carousel-item').length <= 1) {
        $('.carousel-control-prev, .carousel-control-next').hide();
    }



    //clamp.js
    var clamp1 = document.querySelectorAll('.js-clamp1');
    var clamp2 = document.querySelectorAll('.js-clamp2');
    var clamp3 = document.querySelectorAll('.js-clamp3');
    if ($(window).width() > 992) {
        //限制一行
        if (clamp1) {
            clamp1.forEach((module, index) => {
                $clamp(module, { clamp: 1 });
            });
        }
        //限制兩行
        if (clamp2) {
            clamp2.forEach((module, index) => {
                $clamp(module, { clamp: 2 });
            });
        }
        //限制三行
        if (clamp3) {
            clamp3.forEach((module, index) => {
                $clamp(module, { clamp: 3 });
            });
        }
    }



    //swiper
    $('.swiper').each(function () {
        const $this = $(this);
        const $block = $this.closest('.swiper-outter'); // 包一層外殼來找對應的箭頭
        new Swiper(this, {
            // direction: 'vertical',// 垂直輪播
            slidesPerView: 4, // 每次顯示 4 張
            slidesPerGroup: 4, // 每次滑動 4 張（= 每頁）
            spaceBetween: 10,// 每張間距 10px
            centeredSlides: false,   //  不要開啟，否則可能導致圖片偏移或半張
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: $block.find('.swiper-pagination')[0],
                clickable: true,
            },
            navigation: {
                nextEl: $block.find('.swiper-button-next')[0],
                prevEl: $block.find('.swiper-button-prev')[0],
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 4,
                },

            },
        });
    });

    // 出身年月日
    var Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// index => month [0-11]
    $(document).ready(function () {
        var option = '<option value="日"></option>';
        var selectedDay = "日";
        for (var i = 1; i <= Days[0]; i++) { //add option days
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $('#day').append(option);
        $('#day').val(selectedDay);

        var option = '<option value="月"></option>';
        var selectedMon = "月";
        for (var i = 1; i <= 12; i++) {
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $('#month').append(option);
        $('#month').val(selectedMon);

        var d = new Date();
        var option = '<option value="年">西元</option>';
        selectedYear = "年";
        for (var i = d.getFullYear() - 80; i <= d.getFullYear(); i++) {// years start i
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $('#year').append(option);
        $('#year').val(selectedYear);
    });
    function isLeapYear(year) {
        year = parseInt(year);
        if (year % 4 != 0) {
            return false;
        } else if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        } else {
            return true;
        }
    }

});
