let tilex = [];
let tiley = [];
let tilew = [];
let tileh = [];
function poll(x,y,w,h){
  let i = tilex.length;
  tilex[i] = x;
  tiley[i] = y;
  tilew[i] = w;
  tileh[i] = h;
}
function collide(x,y,w,h,a,b,c,d){
  function within(aa,ba,ca,da){
    return ((aa>=ca)&&(aa<=da))||((ba>=ca)&&(ba<=da));
  }
  return within(x,x+w,a,a+c)&&within(y,y+h,b,b+d);
}
function checkLevelCollision(x,y,w,h){
  let out = false;
  for(var i = 0; i < tilex.length; i++){
    if(!out){
       out = collide(x,y,w,h,tilex[i]*32,tiley[i]*32,tilew[i]*32,tileh[i]*32);
    }
  }
  return out;
}
function preload(){
  poll(0,(height/32)-1,width/32,1);
}