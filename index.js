var count = 0;
var moves = 10;
var charly = new TimelineMax({paused:true});

TweenLite.set('#mundauf', {autoAlpha:0});
TweenMax.set("#charly", {autoAlpha:1})

charly.to("#mundzu",0.3, {morphSVG:"#mundauf"}, 0);
charly.to("#zaehne",0.3, {rotation:-10, transformOrigin:"center top", y:-10}, 0);
	
function morphLoop() {
  count++;
  if (count < moves) {	
    var open = randomNumber(0.2, 1);
    TweenMax.fromTo(charly, 0.12, {progress:0}, {progress:open, repeat:1, yoyo:true, ease:Sine.easeInOut, onComplete:morphLoop})
  }
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

morphLoop();
