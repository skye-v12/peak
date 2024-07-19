class Animal{
constructor(breed='red',talkingStyle='brrr'){
this.breed=breed;
this.talkingStyle=talkingStyle
}
  talk(){
console.log(this.talkingStyle);
  }
  showUp(whereX=100,whereY=100){
    stroke(this.breed);
    strokeWeight(10);
    point(whereX,whereY);
}
}
function setup() {
  createCanvas(400,400);
  background('rgb(49,171,49)');
  let babyElephant=new Animal('rgb(56,41,41)',"Hah-ha!");
 babyElephant.talk();
  babyElephant.showUp(100,200);
}

