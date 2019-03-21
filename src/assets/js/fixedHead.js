(function ($) {
    $.fn.extend({
        FixedHead: function (options) {
            var op = $.extend({
                tableLayout: 'fixed',
                parentBox: '',          //父盒子，用于做选择器
                bottomBox: '',          //底部盒子，用户计算高度
                bgColor: 'transparent', //表头颜色
                adjustHeight: '21',     //调整高度
                minHeight: '200',       //表格最小高度
                autoHeight: false        //自动高度
            }, options);

            var isWebkit = (window.navigator.userAgent.indexOf('AppleWebKit') > -1) ? 10 : 17;
            //父盒子是否存在
            if ($(op.parentBox).length === 0) {
                op.parentBox = ''
            }
            ;
            var explorer = window.navigator.userAgent;
            if (explorer.indexOf("Edge")>=0){
                isWebkit = 12;
            }
            //console.log($(op.parentBox + '.parent_box').length);
            /*临时*/
            $(op.parentBox + '.parent_box').find('.w1800').css('width', '1793px');
            $('.grid-view').css('overflow', 'hidden');

            //计算高度
            function winHeight() {
                var $bottomBox = $(op.parentBox + op.bottomBox)
                    , $boxHeight = 0
                    , $parent_box = $(op.parentBox + '.parent_box')
                    , $bBoxLength = $bottomBox.length
                    , newHeight = 0
                ;

                if ($parent_box.length === 1) {
                    newHeight = parseInt($(window).height()) - parseInt($parent_box.offset().top) - op.adjustHeight
                    //获取底部盒子高度
                    if ($bBoxLength > 0) {
                        $boxHeight = $bottomBox.height() + parseInt($bottomBox.css('padding-right')) + parseInt($bottomBox.css('padding-left'));
                    }
                    ;
                    //console.info(newHeight, $boxHeight);
                    if (op.autoHeight) {
                        var $table_tr = $(op.parentBox + '.parent_box tr')
                            , trHeight = 0
                        ;
                        $table_tr.each(function () {
                            trHeight += $(this).height();
                        });

                        if (trHeight < op.minHeight) {
                            return trHeight - op.adjustHeight;
                        }
                        else {
                            return op.minHeight;
                        }
                        ;

                    }
                    else {
                        return (newHeight > op.minHeight ? newHeight : op.minHeight) - $boxHeight;
                    }
                    ;
                }
                ;

            };

            //计算表格高度
            function tableHeight() {
                //console.info("winHeight" + winHeight());
                var $parent_box = $(op.parentBox + '.parent_box')
                    , $headWrap = $(op.parentBox + '.headWrap')
                ;

                //判断top
                if ($headWrap.width() !== $parent_box.width()) {
                    $(op.parentBox + '.headWrap').css("width", parseInt($(op.parentBox + '.tableWrap').width()) - isWebkit);
                }
                ;

                //设置top
                if ($parent_box.position()) {
                    if (parseInt($headWrap.css('top')) !== $parent_box.position().top) {
                        $headWrap.css('top', $parent_box.position().top);
                    }
                    ;
                }
                ;

                //设置高度
                $parent_box.css({
                    'height': winHeight() + 'px',
                    //  'overflow': 'scroll'
                    'overflow': 'auto'
                });

            };

            return this.each(function () {
                if ($(this).parents('.tableWrap').length === 1) return;
                //console.info("内部");
                var $this = $(this).wrap('<div class="parent_box" style="position:relative;overflow:scroll"></div>') //指向当前的table
                    , $thisParentDiv = $(this).parent() //指向当前table的父级DIV，这个DIV要自己手动加上去
                ;

                $thisParentDiv.wrap('<div class="tableWrap" style="overflow:hidden"></div>');

                tableHeight();

                var x = $(op.parentBox + '.parent_box').position();
                //$thisParentDiv.css("background-color","#f00");
                if (x) {
                    var fixedDiv = $('<div class="headWrap" style="clear:both;overflow:hidden;z-index:99;position:absolute;"></div>')
                        .insertBefore($thisParentDiv)//在当前table的父级DIV的前面加一个DIV，此DIV用来包装tabelr的表头
                        .css({'width': $(op.parentBox + '.tableWrap').clientWidth, 'left': x.left, 'top': x.top});
                }
                else {
                    var fixedDiv = $('<div class="headWrap" style="clear:both;overflow:hidden;z-index:99;position:absolute;"></div>')
                        .insertBefore($thisParentDiv)//在当前table的父级DIV的前面加一个DIV，此DIV用来包装tabelr的表头
                        .css({'width': $(op.parentBox + '.tableWrap').clientWidth});
                }

                var $thisClone = $this.clone(true);
                $thisClone.removeAttr('id');
                $thisClone.html($thisClone.clone(true).find('tr:first').parent('thead'));
                $thisClone.appendTo(fixedDiv); //将表头添加到fixedDiv中
                // $this.find("thead").remove(); //删除原节点

                $this.css({'margin-top': 0, 'table-layout': op.tableLayout});
                //当前TABLE的父级DIV有水平滚动条，并水平滚动时，同时滚动包装thead的DIV
                $thisParentDiv.scroll(function () {
                    fixedDiv[0].scrollLeft = $(this)[0].scrollLeft;
                });

                //因为固定后的表头与原来的表格分离开了，难免会有一些宽度问题
                //下面的代码是将原来表格中每一个TD的宽度赋给新的固定表头
                var $fixHeadTrs = $thisClone.find('tr:first').children()
                    , $orginalHeadTrs = $this.find('tr:first')
                    , HeadTrs
                ;

                $fixHeadTrs.each(function (indexTr) {
                    HeadTrs = $orginalHeadTrs.children('th:eq(' + indexTr + ')')
                    $(this).css('width', HeadTrs.width() + HeadTrs.css('padding-right') + HeadTrs.css('padding-left'));
                });

                //设置背景颜色
                $(op.parentBox + '.headWrap').find('table').css('margin-bottom', '0px')
                    .find('tr').css('background-color', op.bgColor);

                $(op.parentBox + '.parent_box').css('overflow', 'scroll');
                //监控宽度变化
                var tableWidth = 0
                    , tableTop = 0
                ;
                var changeHeight = function () {
                    $.each($(".parent_box"), function () {
                        var obj = $(this);
                        var container = obj.closest(".tableWrap");
                        if (obj.find("table").find("tbody").children("tr").length == 0) {
                            return false;
                        }
                        if (obj.height() >= obj.children().first().height()) {
                            $(".headWrap", container).width(obj.width());
                        }

                        $(".headWrap", container).find("table").first().width(obj.find("table").first().width());
                        if ($.browser != "IE10") {
                            $fixHeadTrs.each(function (indexTr) {
                                HeadTrs = $orginalHeadTrs.children('th:eq(' + indexTr + ')')
                                $(this).width(HeadTrs.width());
                            });
                        }


                    });
                }
                changeHeight();
                $(window).resize(changeHeight);
                setInterval(function () {



                    //监控
                    if (!$(op.parentBox + '.tableWrap').length) {
                        //console.log('@@@@');
                        $(op.parentBox + '.table.table-fixed').FixedHead({
                            bgColor: op.bgColor,
                            parentBox: op.parentBox,
                            bottomBox: op.bottomBox,
                            adjustHeight: op.adjustHeight,
                            minHeight: op.minHeight
                        });
                        $(op.parentBox + '.headWrap').css('width', parseInt($(op.parentBox + '.tableWrap').width()) - isWebkit);
                    }
                    ;

                    //监视高度改变
                    if (tableTop !== winHeight()) {
                        //console.log('宽度修改了');
                        tableHeight();
                        tableTop = winHeight();
                    }
                    ;

                    //监视宽度改变
                    if (tableWidth !== $(op.parentBox + '.tableWrap').width() || $(op.parentBox + '.headWrap').width() === 0) {
                        //console.log($(op.parentBox + ".tableWrap").width());
                        $(op.parentBox + '.headWrap').css('width', parseInt($(op.parentBox + '.tableWrap').width()) - isWebkit);
                        tableWidth = $(op.parentBox + '.tableWrap').width();
                    }
                    ;
                    changeHeight();
                }, 1);

            });
        }
    });

    //处理侧边栏切换清理缓存
    $(".fa-circle-o").parent("a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if (location.href.indexOf(target) == -1) {
            var currentUrl = (location.href).split('?')[0];
            sessionStorage.removeItem(currentUrl);  //移除缓存
        }
        location.href = target;
    });
})(jQuery);
