var tl = gsap.timeline()

tl.from(".load h1,.load h2, #para p",{
   y:120,
   duration:0.7,
   opacity:0,
   stagger:0.2,
});

tl.to(".load ,#para p",{
   opacity:0,
   delay:1.6,
   stagger:-0.2

})

tl.to("#loader",{
   top:"-100%",
   duration:1,
   ease:"Power4.out"
})

tl.from(".box h1",{
  y:100,
  opacity:0,
  stagger:{
   amount:0.5
  },
});

tl.from("#nav",{
   opacity:"0",
},"-=0.5");


var timer = document.querySelector("#timerh4")
 var time = 0;
 var loadertime = setInterval(function(){
    if(time<100){
        time++;
        timer.textContent = time
    }

    
    

 },25)

 setTimeout(function(){
    clearInterval(loadertime)
},4000)



 var videoC  = document.querySelector("#video-container");
 var videoVideo  = document.querySelector("#video-container video");
 var iconbtn = document.querySelector("#icon-btn")
 var iconbtnI = document.querySelector("#icon-btn i")
 var flag = 0

iconbtn.addEventListener("click", function(){
    if(flag == 0){
      gsap.to(videoVideo,{
        opacity:1 
      })

      gsap.to(iconbtn,{
         scale:0.8, 
       })

      iconbtn.innerHTML =`<i class="ri-pause-line"></i>`
      videoVideo.play();
      flag = 1
    }
    else{
      gsap.to(videoVideo,{
         opacity:0 
       })
 
       gsap.to(iconbtn,{
          scale: 1, 
        })
     
      iconbtn.innerHTML =`<i class="ri-play-fill"></i>`
      videoVideo.pause();

      flag = 0
      
    }
})

 videoC.addEventListener("mouseenter", function(){
    gsap.to(".mousefollower",{
      opacity:0,
    })
   
 })


 videoC.addEventListener("mouseleave", function(){
   gsap.to(".mousefollower",{
     opacity:1,
   })
   gsap.to(iconbtn,{
      left:"70%",
      top:"-10%",
     })
})

videoC.addEventListener("mousemove", function(dets){
  gsap.to(iconbtn,{
   left:dets.x -500,
   top:dets.y-200,
  })
})


gsap.to(".roll .roller",{
  x:"-100%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"body",
    start:"top 90%",
    end:"top -30%",
    scrub:1,
  }
})

gsap.from(".roll2 .roller",{
  x:"-100%",
  scrollTrigger:{
    trigger:"#page7",
    scroller:"body",
    start:"top 90%",
    end:"top -90%",
    scrub:1,
  }
})

Shery.mouseFollower();

Shery.makeMagnet("#nav h3");

Shery.imageEffect(".image",{
  style:6,
  // debug: true,
  gooey: true,
  config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7945235932590257},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.78,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.58,"range":[0,2]},"discard_threshold":{"value":0.68,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}}

})


// var lasth1 = document.querySelector("#lasth1")
// var arrow = document.querySelector("#arrow")

// var splitedh1 = lasth1.textContent.split("")
//  var clutter ="";

// splitedh1.forEach(function(elem){
//    clutter+=`<span>${elem}</span>`
// })

// console.log(clutter);

// lasth1.innerHTML = clutter;

// arrow.addEventListener("mouseenter",function(){
  

//    gsap.from("#lasth1 span",{
//     opacity:0,
//     duration:0.3,
//     stagger:0.1,
//     fontFamily:"silk serif",
   

//    });

//    gsap.to("#lasth1 span",{
//     duration:0.3,
//     stagger:0.1,
//     fontFamily:"silk serif",
    
//    });
  
   
// })

// arrow.addEventListener("mouseleave",function(){


//   gsap.to("#lasth1 span",{
//    opacity:0,
//    duration:0.3,
//    stagger:0.1,
//   });

//   gsap.to("#lasth1 span",{
//    opacity:1,
//    duration:0.3,
//    stagger:0.1,
//    fontFamily:"plain light"
//   });
 
  
// })

var lasttext = document.querySelectorAll(".lasth1")

lasttext.forEach(function(elem){
   var splitedtext =elem.textContent.split("")
    var clutter =""
   splitedtext.forEach(function(e){
       clutter += `<span>${e}</span>`
   })
   elem.innerHTML = clutter
})

var arrow = document.querySelector("#arrow")
arrow.addEventListener("mouseenter", function(){

  
  gsap.to("#arrow h1 span",{
    opacity:0,
    stagger:0.03,
    duration:.2,
  },)
  gsap.to("#arrow h2 span",{
    delay:0.2,
    opacity:1,
    stagger:0.03,
    duration:.2,
  },)

})

arrow.addEventListener("mouseleave", function(){
  
  gsap.to("#arrow h2 span",{
    opacity:0,
    stagger:0.03,
    duration:.2,
  },)
  gsap.to("#arrow h1 span",{
    delay:0.2,
    opacity:1,
    stagger:0.03,
    duration:.2,
  },)
  
})

var hover = document.querySelector("#hoverbox")
var pic = document.querySelector("#hoverbox img")

hover.addEventListener("mousemove", function(dets){
   gsap.to("#hoverbox img",{
    x:dets.x-450
   })
})

hover.addEventListener("mouseenter",function(){
   gsap.to("#hoverbox img",{
    opacity:1,
    duration:0.1,
   })

   
})


hover.addEventListener("mouseleave",function(){
  gsap.to("#hoverbox img",{
   opacity:0,
   duration:0.1,

  })
  
})

var web = document.querySelector("#web")

web.addEventListener("mouseenter", function(){
  gsap.to(" #web",{
    color:"transparent",
    duration:0.1,

   })
})

web.addEventListener("mouseleave", function(){
  gsap.to(" #web",{
    color:"#fff",
    duration:0.1,
  })
})


var graphic = document.querySelector("#graphic")

graphic.addEventListener("mouseenter", function(){
  gsap.to("#graphic",{
    color:"transparent",
    duration:0.1,

   })
})

graphic.addEventListener("mouseleave", function(){
  gsap.to("#graphic",{
    color:"#fff",
    duration:0.1,
  })
})

