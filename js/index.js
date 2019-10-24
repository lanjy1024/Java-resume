;
(function ($) {
    var appInit,consoleLog,eventListener;
    consoleLog = function () {
        console.log('%cforguo   f2e.forguo.com', 'color: #fff;background: #000;padding:6px 20px;border-radius: 15px;margin-left: 27px;')
        console.log("\n     ___________________________\n    |             |             |\n    |___          |          ___|\n    |_  |         |         |  _|\n   .| | |.       ,|.       .| | |.\n   || | | )     ( | )     ( | | ||\n   '|_| |'       `|'       `| |_|'\n    |___|         |         |___|\n    |             |             |\n    |_____________|_____________|\n\n")
    }

    eventListener = function () {
        //顶部文字切换
        $(".blog").mouseover(function() {
            $(".name-a").html("java工程师");
        }).mouseout(function() {
            $(".name-a").html("蓝景优");
        });

        //h1动画特效
        $("h1.fade").addClass("h1-fade");
        $(".fade1").addClass("hr-fade");

        function load() {
            $(".hello").fadeIn(3400);
            $(".age").fadeIn(3600);
        }

        function btn() {
            $(".btn").fadeIn(3600);
        }

        setTimeout(load, 1300);
        setTimeout(btn, 2000);


        /* 技能弹框 */
        $(".skill-img").click(function(){
            $(this).parent().parent().find("div").slideToggle(300);
        })
    }
    appInit = function () {
        $('#fullpage').fullpage({
            /*配置项*/
            css3: true,
            scrollingSpeed: 1000,
            /* 取消垂直居中*/
            verticalCentered: false,

            // 定义锚链接，
            anchors: ['welcome', 'about', 'skills', 'demo', 'contact'],
            /*锚点平滑滚动*/
            animateAnchor: true,  /*导航*/
            //固定的元素,
            fixedElements: '#header',
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['首页', '关于我', '职业技能', '作品展', '联系我'],
            /*导航菜单*/
            menu: '#menu',

            // 页内slide的导航
            // slidesNavigation: true,
            responsiveHeight: 330,
            // dragAndMove: true,

            // 是否开启页内导航的控制
            // controlArrows: false,
            /*锚点平滑滚动*/
            //左右滑动是否循环
            loopHorizontal: false,
            afterLoad: function(link, index) {
                switch(index) {
                    case 2:
                        $('.img-me,.intr-hr,.intro,.about-name,.F2E').css("opacity", "1");
                        $(".careers").css("transform","translateY(0)");
                        break;
                    case 3:
                }
            }
        });
        consoleLog()
        eventListener()
    }

    $(function () {
        appInit();

    })
})(jQuery)


