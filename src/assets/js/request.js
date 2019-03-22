(function(){
    $.Guid = function(){
        var guid = '';
        for(var i = 1;i <= 32; i++){
            var n = Math.floor(Math.random()*16.0).toString(16);
            guid += n;
            if((i==8) || (i==12) || (i==16) || (i==20)) guid += "-";
        }
        return guid;
    };

    $.LOADING=function(){
        var load_id = $.Guid()+'admin-loading-pic';
        var modal =  $('<div class="modal fade in search-modal" style="display:none;" id="'+load_id+'">'+
            '<div class="admin-loading">'+
            '<div class="admin-loading-pic"></div>'+
            '<div class="admin-loading-text">努力加载中<admin>...</admin></div>'+
            '</div>'+
            '</div>');
        return modal;
    };

    $.AJAX = function(opts){
        var modal = $.LOADING();
        modal.appendTo("body");
        return $.ajax({
            type: opts.type,
            url:opts.url,
            data:opts.data,
            beforeSend:function(){
                modal.show();
            },
            success:opts.success,
            error:function(){
                Modal.alert('>_<, 数据提交出现错误，请刷新后再试，如继续出现请提交技术部处理~','error','');
            },
            complete: function(){
                modal.hide();
            },
        });
    };

    $.GET=function(url,callback){
        return $.AJAX({
            url:url,
            success:callback,
            type:"GET"
        });
    };

    $.POST=function(url,data,callback){
        return $.AJAX({
            url:url,
            data:data,
            type:"POST",
            success:callback
        });
    };

})($);
