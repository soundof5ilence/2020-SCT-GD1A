// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let CircleObject = {};
let CircleArray = [];

function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(min) * max);
}

for (let i = 0;i<10;i++){
  let CircleObject = {x:getRandomInt(0,width),y:getRandomInt(0,height),radius:50,color:"rgb("+getRandomInt(100,500)+","+getRandomInt(240,255)+","+getRandomInt(0,0)+")",velocity_x:50,velocity_y:70}
  if (Math.random(0)*10 > 5){
    CircleObject.velocity_x = - CircleObject.velocity_x;
  }if (Math.random(0)*10 > 5){
    CircleObject.velocity_y = - CircleObject.velocity_y;
  }
  CircleObject.draw = function(){
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,2*Math.PI);
    context.closePath();
    context.strokeStyle = this.color;
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
  }

  CircleObject.update = function(){
    CircleObject.x += CircleObject.velocity_x;
    CircleObject.y += CircleObject.velocity_y;
    CircleObject.radius = getRandomInt(0,15);
    if (CircleObject.x > width - CircleObject.radius || CircleObject.x < CircleObject.radius){
      CircleObject.velocity_x = - CircleObject.velocity_x;
    }
    if (CircleObject.y > height - CircleObject.radius || CircleObject.y < CircleObject.radius){
      CircleObject.velocity_y = - CircleObject.velocity_y;
    }
  }
  CircleArray.push(CircleObject);
  console.log(CircleArray[i]);
}

function loop(){
  //context.clearRect(0,0,width,height);
  for (let i = 0;i<CircleArray.length;i++){
    CircleArray[i].update();
    CircleArray[i].draw();
  }
}

setInterval(loop, 10);