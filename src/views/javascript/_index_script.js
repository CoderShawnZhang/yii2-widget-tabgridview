$(function(){
    searchSWitch({box:"#searchBox"});
});

$('#navTabs a').on('click',function (e) {
    e.preventDefault();
    $(this).tab('show');
});
$('#navTabs').on('show.bs.tab',function(e){
    var url = $(e.target).attr('href');
    if(url != '#') {
        getListHtml(url,$(e.target).attr('data-target'));
        $(e.target).attr('href','#');
    }
});
function getListHtml(url,selector) {
    $.GET(url,function(res){
        $(selector).html(res);
        $('.pagination a').unbind('click').on('click',function(i){
            i.preventDefault();
            var url = $(this).attr('href');
            getListHtml(url,$(this).parents('.tab-pane'));
        });
        $(".table.table-fixed").FixedHead({
            bgColor: "#fff",
            parentBox: ".tab-pane.active ",
            bottomBox: ".box-footer.clearfix",
            adjustHeight: "1",
            minHeight: "200"
        });
        // Modal.alert('加载完毕。。。','success','是的发送房价是否吧是否啊死我人',false);
    });
}
$('#navTabs a:eq(' + _opt.defaultTab + ')').triggerHandler('click');
