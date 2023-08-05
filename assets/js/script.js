$(document).ready(function(){
    
    function typeWriter(elm,txt,speed,i) {
              
        if (i < txt.length) {
           elm.html(elm.html() + txt.charAt(i));
            i++;
            setTimeout(function(){typeWriter(elm,txt,speed,i)}, speed);
        }
    }
    function typing(){
        var i = 0;
var txt = 'آدرس: خونه مامان و بابا'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

       var txt2='شنبه بعدازظهر تا هر ساعت که خسته بشیم'
        typeWriter($('#address'),txt,speed,i);
        typeWriter($('#saat'),txt2,speed,i);
    }
    $('#help').on('click touchstart',function(){
      $(this).removeClass('zoomIn')

      $(this).addClass('zoomOut')
      
    })
    $('#helpBtn').on('click touchstart',function(){
        $('#help').removeClass('zoomOut')

        $('#help').addClass('zoomIn')
        $(this).removeClass('infinite')
    })
    $('.genderButten').on('click touchstart',function(e){

        e.preventDefault();
       var gender=e.target.outerText;
        var name=window.prompt(
            'پس بنظرت من '+
            gender+'م'
            +'\n '+
            'لطفاً اسم خودت رو برای نظری که دادی وارد کن!')
        if(name){
           
            $.ajax({
                type: "POST",
                url: 'http://nini.ezyro.com/data.php',
                 dataType : "json",
                data: {
                    name:name,
                    gender:gender
                },
                success: function(){
                    window.alert('ممنونم! توی جشن منتظرتم'+
                    ' '+
                    name+
                    ' '+
                    ' عزیز!')
                }
              });
        }
    })
    var flipped=0;
    $(".flip-card").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
			if (direction == "left") {
                if(flipped==0){
                    flipped++;
                    if($(this).hasClass('flippedLeft180')){
                        $(this).removeClass('flippedLeft180')
                        flipped=0;
                    }else{

                        $(this).addClass('flippedRight180')
                    }
                }else if(flipped==1){
                    
                    $(this).removeClass('flippedRight180')
                    $(this).addClass('flippedRight360')
                }else if(flipped==-1){
                    flipped++;
                    if($(this).hasClass('flippedLeft180')){
                        $(this).removeClass('flippedLeft180')

                    }else{
                        $(this).addClass('flippedLeft180')
                        $(this).removeClass('flippedLeft360')
                    }

                }
					//console.log("left swipe");
			}
			if (direction == "right") {
                if(flipped==0){
                    flipped--;
                    if($(this).hasClass('flippedRight180')){
                        $(this).removeClass('flippedRight180')
                        flipped=0;
                    }else{

                        $(this).addClass('flippedLeft180')
                    }
                }else if(flipped==-1){
                    
                    $(this).removeClass('flippedLeft180')
                    $(this).addClass('flippedLeft360')
                }else  if(flipped==1){
                    flipped--;
                    if($(this).hasClass('flippedRight180')){
                        $(this).removeClass('flippedRight180')

                    }else{

                        $(this).addClass('flippedRight180')
                        $(this).removeClass('flippedRight360')
                    }
                    


                }
			}	
            if($(this).hasClass('flippedRight180') || $(this).hasClass('flippedLeft180')){
                if (direction == "down") {
                    if($('.door_opened').length > 0){
                        $('#door>div').animate({  borderRadius: 180 }, {
                            step: function(now,fx) {
                              $(this).css('transform','rotateX('+now+'deg)');  
                         

                            },
                            duration:200,complete:function(){
                            
                                $(this).css('border-radius',0)
                                $(this).css('transform','rotateX(0deg)');  
                                $(this).css('zIndex','3');  
    
                                $(".door_opened").remove();
                                
                                $('<img src="./assets/images/envelope_front_close_door.png" width="320"  style="top:-51px" class="door_closed position-absolute" alt="door"/>').appendTo($(this))
                            
                            }
                        })
                    }
                }
                if (direction == "up") {
                
                    if($('.door_closed').length > 0){
                    
                     
                        $('#door>div').animate({  borderRadius: 180 }, {
                            step: function(now,fx) {
                              $(this).css('transform','rotateX('+now+'deg)');  
                             
                            },
                            duration:200,complete:function(){
                             
                                $(this).css('border-radius',0);
                              $(this).css('transform','rotateX(0deg)');  
                              $(this).css('zIndex','0');  

                                $('.door_closed').remove();
                                    $('<img src="./assets/images/envelope_front_open_door.png" width="320" style="top:-4px"  class=" position-absolute door_opened" alt="door"/>').appendTo($(this))
                                }
                        })
                   
                    }else{
                  
                        var text=[];
                        $('.bubble span').each(function(i){
                            var a=$(this)
                      
                                text.push({selector:a,text:$(a).html()});
                                $(a).html('')
                            
                        })
                       
                        $('#bubbleTop').css('top',0)
                        $('#bubbleBottom').css('bottom',0)
                        $('.bubble').css('opacity',0)
                        $('#door').css('zIndex','0');  
                        $('#latter').animate({  top: 72 }, {
                          
                            duration:'slow',complete:function(){
                             $(this).css('zIndex',4)
                              $('#latter').animate({  top: 260 }, {
                            
                                duration:'slow',complete:function(){
                                    $('#bubbleTop').css('top','24%')
                                    $('#bubbleBottom').css('top','50%')
                                    $('.bubble').css('opacity',.9)
                                    for(var i in text){
                                        var span=text[i]
                                   
                                        typeWriter($(span.selector),span.text,50,0);

                                    
                                    }   
                                    setTimeout(function(){
                                        $('#bubbleTop').css('top','7%')
                                        $('#bubbleBottom').css('top','58%')
                                    $('.bubble').css('opacity',.3)

                                    },5000)
                                }
                                  
                            }) 
                            }
                              
                        }) 
                    }
                }     
            }		
			
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
	   threshold:0
	});
    
   typing();
})