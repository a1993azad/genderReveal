/////////////////////////////////////////////////////////////////////////
/////////////////////////////// Functions ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
  
let content = document.querySelector('.content');
let needle = document.querySelector('.needle');
let audio = new Audio('http://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');

let slowMotionBoy = document.querySelector('.slow-motion-boy');
let slowMotionGirl = document.querySelector('.slow-motion-girl');

function boomb(mainSvg,secondSvg,thirdSvg,li,i){
  
  setTimeout(() => {
    audio.currentTime = 0; 
  audio.pause();
  audio.currentTime = 0; 
    audio.play();

    mainSvg.css('visibility',"hidden");
    secondSvg.css('visibility',"visible");
    li.css('font-size','2em')
    li.addClass('animated tada')
    setTimeout(() => {
      thirdSvg.css('visibility',"visible");
      thirdSvg.addClass('animated fadeOutUp')
      secondSvg.addClass('animated fadeOutUp')
    },500);
  }, 500+(i*500));

 

 

}
slowMotionBoy.addEventListener('click', function(){
  let mainSvg = $('.main-svg.boy');
let secondSvg = $('.second-svg.boy');
let thirdSvg = $('.third-svg.boy');
	slowMotionGirl.style.opacity = ".3";
  mainSvg.each(function(i){

    boomb(mainSvg.eq(i),secondSvg.eq(i),thirdSvg.eq(i), $(`#boyList li:nth-child(${i+1})`),i)
   
  })
		
})

slowMotionGirl.addEventListener('click', function(){
  let mainSvg = $('.main-svg.girl');
let secondSvg = $('.second-svg.girl');
let thirdSvg = $('.third-svg.girl');
	slowMotionBoy.style.opacity = ".3";
  mainSvg.each(function(i){

    boomb(mainSvg.eq(i),secondSvg.eq(i),thirdSvg.eq(i), $(`#girlList li:nth-child(${i+1})`),i)
  })
})
function generateRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
  function initBalloons(gender,name,i){
    const color1=gender==='دختر'?'#fbacba':'#6fd6f5';
    const color2=gender==='دختر'?'#f9b3c0':'#7edbf7';
    const color3=gender==='دختر'?'#fbbdc9':'#8ee0f9';
    const color4=gender==='دختر'?'#f1d4d6':'#d5f0fd';
    const x=gender==='دختر'?
    generateRandom(-210,-55):generateRandom(110,260);
    const rotate=generateRandom(-30,30)
    const y=generateRandom(-67,-65)+rotate-20;
    
    
   const balloon= `<svg viewbox="0 0 100 100" class=" main-svg ${gender==='دختر'?'girl':'boy'}" style="transform:translate(${x}px,${y}px) rotate(${rotate}deg)">
      <g class="animated infinite shake">
      <path d="M24 55,
      C0 45, 10 20, 25 20, 
      C40 20, 50 45, 26 55" fill="${color1}" stroke="${color1}"/>
<path d="M24 55,
      Q25 57, 22 59, 
      Q25 59, 25 58, 
      Q26 59, 28 59, 
      Q25 57, 26 55" fill="${color1}" stroke="${color1}"/>
<path d="M24.5 55.5,
      L25.5 55.5" stroke-width="1" />
<path d="M25.5 55.8, 
      C16 58, 27 60, 23 70"  stroke-width="1"/>
<path d="M23 70,
      C18 78, 27 80, 23 90" stroke-width="1"/>
<ellipse cx="31.5" cy="25.5" rx="10" ry="13" fill="${color2}" stroke="none" class="rotate"/>
<ellipse cx="30" cy="18" rx="4" ry="7" fill="${color3}" stroke="none" class="rotate-2"/>
<path d="M11 40,
      Q10 35, 12 30, 
      L13.5 32
      Q11.5 35, 12 39
      Z" fill="${color4}" stroke="none" />
<path d="M12.5 38.5
      Q12 35, 14 32.5, 
      L15.5 34, 
      Q14 35,13.8 37, Z"
   fill="${color4}" stroke="none" />
<path d="M12.5 29, 
      Q15 25, 19 23, 
      Q18 24, 18 27, 
      Q15.5 28, 14 31,
      Z" stroke="none" fill="${color4}" />
<path d="M14.5 31.5, 
      Q15.5 29, 18 28, 
      Q17.5 30, 18 31.5, 
      Q17 32, 16 33, 
      Z"
   stroke="none" fill="${color4}"/>
<path d="M30 52,
      Q40 46, 39.5 35, 
      L38, 34, 
      Q38 46, 30 52" 
   stroke="none" fill="${color4}"/>
<path d="M24.5 55.5,
        L25.5 55.5, 
        C15 59, 28 65, 25 72" stroke="black" stroke-width="1"/>
      </g>
     
  
      
      </svg> `
  const secondBalloon=` <svg viewbox="0 0 100 100" class="second-svg ${gender==='دختر'?'girl':'boy'}" style="transform:translate(${x}px,${y}px) rotate(${rotate}deg)">
  <path d="M20 50, 
           L21 45, 
           C15 45, 14 45, 17 42
           Q30 28, 35 32, 
           Q33 34, 35.5 36, 
           Q32 38, 34 44, 
           Q32 46, 28 48, 
           Q27 48, 27 46, 
           Q25 48, 20 50"
        stroke="#be252c" fill="#d83940"/>
   <path d="M19 43, 
            L23 39, 
            Q24 38, 28 38, 
            Q24 40, 22 43, 
            Z" fill="#de5d63" stroke="none"/>
   <path d="M25 37, 
            Q27 35, 32 34, 
            L29 37, 
            Q27 36, 25 37"
         fill="#de5d63" stroke="none"/>
   <path  d="M10 53, 
             Q10 46, 13 46, 
             Q12 48, 15 53, 
             C13 55, 11 50, 10 53" stroke="none" fill="#d83940"/>
   <path d="M32 46, 
            L31 28, 
            L33 28, 
            Z" fill="#ded5d1" stroke="none"/>
   <path d="M40 40, 
            L44 34, 
            L46 36, 
            Z" fill="#ded5d1" stroke="none"/>
   <path d="M35 50, 
            L60 37, 
            L61 40, 
            Z" fill="#ded5d1" stroke="none"/>
   <path d="M45 52, 
            L55 51, 
            L55 53,
            Z" fill="#ded5d1" stroke="none"/>
   <path d="M20 60, 
            Q19 59, 24 56, 
            C22 65, 21 58,20 60 "
         stroke="none" fill="#d83940"/>
   <path d="M25 75, 
            C29 68, 18 70, 19 60, 
            Q23 63, 28 60, 
            Q28 63, 31 61, 
            Q31 64, 36 59, 
            C36 64, 39 59, 46 62, 
            C43 61, 36 74, 27 72, 
            C25 76, 30 79, 25 79, 
            C25 76, 22 78, 22 76, 
            Q24 76, 25 75
            " stroke="none" fill="#d83940"/>
   <path d="M48 60, 
            Q46 58, 53 56, 
            C51 63, 50 57, 48 60" stroke="none" fill="#d83940"/>
    <rect x="50" y="45"width="10" height="5" rx="2"  fill="#d83940" stroke="none"/>
   <path d="M50 35, 
            L52 30, 
            Q54 32, 59 31, 
            Q56 36, 50 35" stroke="none" fill="#b82c32"/>
   <path d="M35 53, 
            L55 62, 
            L56 60, Z" fill="#ded5d1" stroke="none"/>
   <path d="M56 34, 
            L55 28, 
            C60 28, 60 32, 56 34" stroke="none" fill="#d83940"/>
   <path d="M26.5 72.2, 
            L26.1 72, 
            C5 66, 28 76, 15 87, 
            Q5 95, 15 97 " stroke="black" stroke-width="1"/>
   <path d="M32 56,
            L30 75, 
            L34 75, Z" fill="#ded5d1" stroke="none"/>
   <path d="M0 60,
            L20 56, 
            L2 62, Z" fill="#ded5d1" stroke="none"/>
 
 </svg> `
 const thirdBalloon=` <svg viewbox="0 0 100 100" class="third-svg ${gender==='دختر'?'girl':'boy'}" style="transform:translate(${x}px,${y}px) rotate(${rotate}deg)">
 <path d="M17 47, 
          L18 42, 
          C12 42, 11 42, 14 39
          Q27 25, 32 29, 
          Q30 31, 32.5 33, 
          Q29 35, 31 41, 
          Q29 43, 25 45, 
          Q24 45, 24 43, 
          Q22 45, 17 47"
       stroke="rgba(190,37,44, .2)" fill="rgba(216,57,64, 0.5)"/>
     <path  d="M7 50, 
            Q7 43, 10 43, 
            Q9 45, 12 50, 
            C10 52, 8 47, 7 50" stroke="none" fill="rgba(216,57,64, 0.5)"/>
  <path d="M43 37, 
           L47 31, 
           L49 33, 
           Z" fill="rgba(222,213,209, .5)" stroke="none"/>
  <path d="M37 48, 
           L62 35, 
           L63 38, 
           Z" fill="rgba(222,213,209, .5)" stroke="none"/>
  <path d="M48 52, 
           L59 51, 
           L59 53,
           Z" fill="rgba(222,213,209, .5)" stroke="none"/>
  <path d="M19 59, 
           Q18 58, 23 55, 
           C21 64, 20 57,19 59 "
        stroke="none" fill="rgba(216,57,64, 0.5)"/>
  <path d="M22 78, 
           C26 71, 15 73, 16 63, 
           Q20 66, 25 63, 
           Q25 66, 34 64, 
           Q28 67, 33 62, 
           C33 67, 36 62, 43 65, 
           C41 64, 33 77, 24 75, 
           C22 79, 27 81, 22 82, 
           C22 79, 19 81, 18 79, 
           Q21 79, 22 78
           " stroke="none" fill="rgba(216,57,64, 0.5)"/>					 
  <path d="M49 61, 
           Q49 59, 54 57, 
           C53 64, 51 58, 49 61" stroke="none" fill="rgba(216,57,64, 0.5)"/>
  <rect x="53" y="43"width="10" height="5" rx="2"  fill="rgba(216,57,64, 0.5)" stroke="none"/>
  <path d="M53 32, 
           L55 27, 
           Q57 28, 61.5 28, 
           Q59 33, 53 32" stroke="none" fill="rgba(216,57,64, 0.5)"/>
  <path d="M59 31, 
           L58 25, 
           C63 25, 63 28, 59 31" stroke="none" fill="#e99a7a"/>
    <path d="M38 53, 
           L58 62, 
           L59 60, Z" fill="rgba(222,213,209, .5)" stroke="none" class="p"/>
  <path d="M23.5 75.2, 
           L23.1 75, 
           C2 69, 25 79, 12 91, 
           Q2 98, 12 99 " stroke="rgba(0,0,0, .5)" stroke-width="1"/>
  <path d="M32 59,
           L30 79, 
           L34 79, Z" fill="rgba(222,213,209, .5)" stroke="none"/>
  <path d="M0 59,
           L20 55, 
           L2 61, Z" fill="rgba(222,213,209, .5)" stroke="none"/>

</svg>`
  $(balloon).appendTo($('#balloonWrapper'))
  $(secondBalloon).appendTo($('#balloonWrapper'))
  $(thirdBalloon).appendTo($('#balloonWrapper'))
  const li=`<li style="color:${color1}">
  ${name}
  </li>`
  if(gender==='دختر'){
    $(li).appendTo($('#girlList'))
  }else{
    $(li).appendTo($('#boyList'))
  }
  }
 

  $.ajax({
    type: "GET",
    url: 'http://nini.ezyro.com/data.json?i=1',
     dataType : "json",
    data: {},
    success: function(res){
      let boy=0;
      let girl=0;
       res.map((itm,i)=>{
        initBalloons(itm.gender,itm.name,i+1);
        if(itm.gender==='پسر'){
          boy++;
        }else{
          girl++;
        }
       })
       $('#girlCount').html(girl);
       $('#boyCount').html(boy);
    }
  });
})
