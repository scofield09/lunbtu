function init(){
    btnfn();
    automove();
}
init();
var nowindex = 0;
var item = 520;
var len = 4;
var flag =true;
var timer;
function btnfn(){
    $('.two li').add('.btnleft').add('.btnright').on('click',function(){
        if($(this).attr('class')=='btnleft'){
            move('left');
        }else if($(this).attr('class')=='btnright'){
            move('right');
        }else{
            var index = $(this).index();
            move(index);
        }
        changedot()
    })
    $('.wrapper').on('mouseenter',function(){
        $('.btn a').css('display','block');
        clearTimeout(timer);
    }).on('mouseleave',function(){
        $('.btn a').css('display','none');
        automove();
    })
}

function move(dir){
    if(flag){
        flag=false;
        if(dir=='left'||dir=='right'){
            if(dir=='left'){
                if(nowindex==0){
                 $('.img').css({
                     left:-(len*item)+'px'
                 })
                 nowindex = len-1;
                }else{
                   nowindex--;
                }             
            }else{
               if(nowindex == len-1){
                   $('.img').animate({
                       left:-(len*item)+'px'
                   },function(){
                      $(this).css({
                          left:0
                      })
                   })
               nowindex=0;  
                }else{
                   nowindex++;
                } 
            }
        }else{
            nowindex = dir;
        }
        movenow();
    }
    automove()
}


 
function automove(){
      clearTimeout(timer);
       timer=setTimeout(function(){
         move('right');
         changedot()
      },2000)
     
}
function movenow(){
    $('.img').animate({
         left:-(nowindex*item)+'px'
    },function(){
        flag =true;
    })
}
function changedot(){
    $('.active').removeClass('active')
    $('.dot li').eq(nowindex).addClass('active')
}