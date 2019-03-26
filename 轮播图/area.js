;(function(){
    var obj = {
        init:function(option){

            this.parents = option.parents;
            this.items = option.items;
            this.rowitem = option.rowitem||2;
            this.nowitem = option.nowitem||option.items[0].name||'';
            this.nowitemimg = option.nowitemimg||'';
            this.creatdom();
            this.btn();
        },
        creatdom:function(){
            var wrap = $('<div class="areaContent"></div>');
            var nowArea = $('<div class="nowArea"></div>');
            var itemList = $('<div class="itemList"></div>');
            if(this.nowitemimg){
                var img = new Image;
                img.src = this.nowitemimg;
                img.onload = function(){
                    $(img).prependTo(nowArea);
                }
            }
            $('<span class="item-name"></span>').html(this.nowitem).appendTo(nowArea);
            this.items.forEach(function(ele,index){
               
                  var str = '<a href= "'+ele.href+'">'+ele.name+'</a>';
                  $('<div class="item"></div>').append(str).appendTo(itemList);
            });
            wrap.append(nowArea).append(itemList);
            this.parents.append(wrap);
            $('#location .itemList').css({
                'width':$('.item').innerWidth()*this.rowitem + 'px',
                'top':$(this.parents).height()-2+'px',
            })
        },
        btn:function(){
            $('.itemList').on('click','.item',function(){
               
                $('.nowActive').removeClass('nowActive');
                $(this).addClass('nowActive');
              
                $('.item-name').text($(this).text());
            })
        },
    }

    $.fn.extend({
        area:function(opt){
            opt.parents = this;
            obj.init(opt);
        }
    })
})()