class Life{
constructor(x, y, w, h){
   this.rectangle1 = createSprite(x,y,w,h);
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h; 
} 
Display(){
 rect(this.x, this.y, this.w, this.h )   
}
}