var screenAnimateElements={

    'screen-1' :[
        'screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ]
}



function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls);
    var animateElements = screenAnimateElements[screenCls];

    var isSetAnimateClass = false;
    var isAnimateDone = false;

    screen.onclick = function(){

        //初始化
        if(isSetAnimateClass===false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return ;
        }

        //init-done
        if(isAnimateDone===false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
            }
            isAnimateDone = true;
            return ;
        }

        //done-init
        if(isAnimateDone===true){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
            }
            isAnimateDone = false;
            return ;
        }
    }
}