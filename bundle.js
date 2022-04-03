(()=>{"use strict";class t{constructor(t,s,i){this.sprite=new Image,this.pos=t,this.size=s,this.sprite.src=i}draw(t,s){t.drawImage(this.sprite,this.pos.x-this.size.x/2-s.x,this.pos.y-this.size.y/2-s.y)}get getPosition(){return this.pos}get bounds(){return{left:this.pos.x-this.size.x/2,right:this.pos.x+this.size.x/2,top:this.pos.y-this.size.y/2,bottom:this.pos.y+this.size.y/2}}checkCollision(t){return this.bounds.left<t.bounds.right&&this.bounds.right>t.bounds.left&&this.bounds.top<t.bounds.bottom&&this.bounds.bottom>t.bounds.top}}const s=32,i={"":16,u:15,d:13,l:12,r:10,ud:14,lr:11,ul:9,ur:7,dl:3,dr:1,udl:6,udr:4,ulr:8,dlr:2,udlr:5};class e extends t{constructor(t){super(t,{x:s,y:24},"assets/lava/0.png"),this.last=Date.now(),this.frame=0}tick(){Date.now()>this.last+500&&(this.frame=0===this.frame?1:0,this.sprite.src=`assets/lava/${this.frame}.png`,this.last=Date.now())}}class h extends t{constructor(t,i){super(t,{x:s,y:s},`assets/platforms/${i}.png`)}}class o extends t{constructor(){super({x:0,y:0},{x:16,y:s},"assets/neo/0.png"),this.vel={x:0,y:0},this.grounded=!1,this.flip=!1,this.last=Date.now(),this.counter=0,this.dead=!1}reset(){this.dead=!0,setTimeout((()=>{this.dead=!1,this.pos={x:0,y:0}}),1500)}move(t,s){t&&(this.vel.x-=.5),s&&(this.vel.x+=.5)}jump(){this.grounded&&(this.vel.y=10)}tick(t,s,i){this.pos.x+=this.vel.x;for(const s of t)this.checkCollision(s)&&(this.pos.x-=this.vel.x>0?this.bounds.right-s.bounds.left:this.bounds.left-s.bounds.right,this.vel.x=0);this.pos.y-=this.vel.y,this.grounded=!1;for(const s of t)this.checkCollision(s)&&(this.pos.y-=this.vel.y>0?this.bounds.top-s.bounds.bottom:this.bounds.bottom-s.bounds.top,this.vel.y=0,this.grounded=this.pos.y<s.getPosition.y);for(const t of s)if(this.checkCollision(t))return this.reset();return this.vel.x*=.9,this.vel.y-=.5,this.vel.y+.5>0?this.sprite.src="assets/neo/4.png":this.vel.y+.5<0?this.sprite.src="assets/neo/5.png":(this.counter>=(i?4:2)&&(this.counter=0),this.sprite.src=i?`assets/neo/${o.FRAMES.moving[this.counter]}.png`:`assets/neo/${o.FRAMES.idle[this.counter]}.png`,void(Date.now()>this.last+(i?100:200)&&(this.counter++,this.last=Date.now())))}draw(t,s){this.dead&&Date.now()%400<200||(this.flip&&t.scale(-1,1),t.drawImage(this.sprite,(this.pos.x+this.size.x*(this.flip?1:-1)-s.x)*(this.flip?-1:1),this.pos.y-this.size.y/2-s.y),this.flip&&t.scale(-1,1))}setFlip(t){this.flip=t}}o.FRAMES={idle:[0,1],moving:[2,1,3,1]};class a{constructor(t,s,i,e){this.pos=t,this.text=s,this.size=i,this.color=e}draw(t,s){t.fillStyle=this.color,t.font=`${this.size}px Cascadia Code`;const i=t.measureText(this.text);t.fillText(this.text,this.pos.x-i.width/2-s.x,this.pos.y-this.size/2-s.y)}}const n=JSON.parse("[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1],[0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1],[1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],[1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1],[1,2,2,1,1,1,1,2,2,2,1,0,0,0,0,0,0,1,2,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]"),r=new class{constructor(){this.run=!1,this.canvas=document.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.keys={left:!1,right:!1,jump:!1},this.cam={x:-window.innerWidth/2,y:-window.innerHeight/2},this.player=new o,this.platforms=[],this.lavas=[],this.texts=[new a({x:0,y:384},"MathleteDev",64,"#282c34")],this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,window.addEventListener("resize",(()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight})),document.addEventListener("keydown",(t=>this.handleKey(t,!0))),document.addEventListener("keyup",(t=>this.handleKey(t,!1))),document.addEventListener("touchstart",(t=>{if(t.touches[0].clientY<.45*this.canvas.height&&(this.keys.jump=!0),t.touches[0].clientX<.3*this.canvas.width)return this.keys.left=!0,this.player.setFlip(!0);t.touches[0].clientX>.7*this.canvas.width&&(this.keys.right=!0,this.player.setFlip(!1))})),document.addEventListener("touchend",(t=>this.keys={left:!1,right:!1,jump:!1}))}play(t){this.run=t,t&&requestAnimationFrame((()=>this.tick()))}tick(){this.run&&requestAnimationFrame((()=>this.tick())),this.ctx.fillStyle="#61afef",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);for(const t of this.lavas)t.tick(),t.draw(this.ctx,this.cam);for(const t of this.platforms)t.draw(this.ctx,this.cam);for(const t of this.texts)t.draw(this.ctx,this.cam);this.player.draw(this.ctx,this.cam),this.player.dead||(this.player.move(this.keys.left,this.keys.right),this.keys.jump&&this.player.jump(),this.player.tick(this.platforms,this.lavas,this.keys.left||this.keys.right),this.cam.x=Math.round(this.cam.x-.05*(this.cam.x+this.canvas.width/2-this.player.getPosition.x)),this.cam.y=Math.round(this.cam.y-.1*(this.cam.y+this.canvas.height/2-this.player.getPosition.y)),this.cam.y>-400&&(this.cam.y=-400))}loadMap(t){for(let o=0;o<t.length;o++)for(let a=0;a<t[o].length;a++)if(0!==t[o][a])switch(t[o][a]){case 0:continue;case 1:let n="";this.exists(t,o-1,a)&&(n+="u"),this.exists(t,o+1,a)&&(n+="d"),this.exists(t,o,a-1)&&(n+="l"),this.exists(t,o,a+1)&&(n+="r"),this.platforms.push(new h({x:(a-(t[o].length-1)/2)*s,y:(o-(t.length-1)/2)*s},i[n]-1));break;case 2:this.lavas.push(new e({x:(a-(t[o].length-1)/2)*s,y:(o-(t.length-1)/2)*s}))}}handleKey(t,s){switch(t.key){default:return;case"ArrowLeft":case"a":this.keys.left=s,s&&this.player.setFlip(!0);break;case"ArrowRight":case"d":this.keys.right=s,s&&this.player.setFlip(!1);break;case"ArrowUp":case"w":case" ":this.keys.jump=s;break;case"p":s&&this.play(!this.run);break;case"o":s&&this.player.reset()}t.preventDefault()}exists(t,s,i){return s>=0&&i>=0&&s<t.length&&i<t[s].length&&1===t[s][i]}};r.loadMap(n),r.play(!0)})();