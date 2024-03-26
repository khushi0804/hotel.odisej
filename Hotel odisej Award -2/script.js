gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl=gsap.timeline();


tl.from(".lh2",{
  y:-100,
  opacity:0,
  duration:1,
  delay:0.5
})
tl.to("#loader img",{
  height:"100%",
  width:"100%",
  borderRadius:"none",
  duration:1,
  delay:0.8,
  marginTop:"-3px"
})


tl.to("#loader",{
  opacity:0
})

tl.to(".h2",{
    fontSize:"37px",
    duration:1.5,
    delay:0.5,
    x:70,
    scrollTrigger:{
        trigger:".h2",
        scroller:"#main",
        // markers:true,
        start:"top 8%",
        end:"top 3%",
        scrub:3,

    }
})

tl.to(".h3",{
  fontSize:"17px",
  duration:1.5,
  delay:0.5,
  y:55,
  scrollTrigger:{
      trigger:".h3",
      scroller:"#main",
      // markers:true,
      start:"top 19%",
      end:"top 15%",
      scrub:3,

  }
})

tl.to(".h2,.h3,#nav",{
    y:-75,
    duration:5,
    delay:1,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:".h2,#nav",
        scroller:"#main",
        // markers:true,
        start:"70% 5%",
        end:"top 10%",
    scrub:3,
    }
})

var lines= document.querySelectorAll("#page-2 h2");

lines.forEach(function(elem)
{
    var clutter="";
    var text=elem.textContent;
    var split=text.split("")
   split.forEach(function(e){
    clutter=clutter +`<span>${e}</span>`;
   })
   elem.innerHTML=clutter;
})


tl.to("#page-2 h2 span",{
    color:"#E3E3C4",
    stagger:0.1,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page-2 h2",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 0%",
        scrub:5
    }

})
tl.from(".icon-1,.wave-2",{
  transform:"translateX(-4%)",
  scrollTrigger:{
    scroller:"#main",
    trigger:".icon-1,.wave-2",
    // markers:true,
    start:"10% 60%",
    end:"top 0%",
    scrub:3
  }
})

var allh2=document.querySelectorAll("#page-3 h2");
allh2.forEach(function(dets){
  clutter="";
  var words= dets.textContent;
  var split=words.split("");
  split.forEach(function(e){
   clutter=clutter+`<span>${e}</span>`;
  })
  dets.innerHTML=clutter;
})
tl.to("#page-3 h2 span",{
  color:"#434B34",
  stagger:0.3,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-3 h2",
    // markers:true,
    start:"top 80%",
    end:"top 45%",
    scrub:4
  }
})

tl.from(".h4-1,.img-1,.h5-1",{
  y:500,
  opacity:0,
  duration:1.5,
  delay:0.5,
  scrollTrigger:{
    scroller:"#main",
    trigger:".h4-1,.img-1,.h5-1",
    // markers:true,
    start:"top 230%",
    end :"top 100%",
    scrub:2
}
})
tl.from(".img-2,.img-3",{
  y:70,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:".img-2",
    // markers:true,
    start:"top 90%",
    end:"top 75%",
    scrub:3
  }
})

var box=document.querySelector(".box-1");
var image=document.querySelector(".box-1 img");
var ins=document.querySelector(".ins-1");
var h2=document.querySelector(".ins-1 h2");
var h5=document.querySelector(".ins-1 h5");

var box1=document.querySelector(".box-2");
var ins1=document.querySelector(".ins-2");
var h21=document.querySelector(".ins-2 h2");
var h51=document.querySelector(".ins-2 h5");
var image1=document.querySelector(".box-2 img");

var box2=document.querySelector(".box-3");
var ins2=document.querySelector(".ins-3");
var h22=document.querySelector(".ins-3 h2");
var h52=document.querySelector(".ins-3 h5");
var image2=document.querySelector(".box-3 img");

var box3=document.querySelector(".box-4");
var ins3=document.querySelector(".ins-4");
var h23=document.querySelector(".ins-4 h2");
var h53=document.querySelector(".ins-4 h5");
var image3=document.querySelector(".box-4 img");

var box4=document.querySelector(".box-5");
var ins4=document.querySelector(".ins-5");
var h24=document.querySelector(".ins-5 h2");
var h54=document.querySelector(".ins-5 h5");
var image4=document.querySelector(".box-5 img");

box.addEventListener("mouseenter",function()
{
  image.style.opacity=1;
  ins.style.marginLeft="0%";
  image.style.left="0%"
  box.style.backgroundColor="#5B6647";
  box.style.border="none";
  h2.style.color="#F7F7EE";
  h5.style.color="#E3E3C4";
})
box.addEventListener("mouseleave",function()
{
  image.style.opacity=0;
  ins.style.marginLeft="-20%";
  image.style.left="-25%";
  box.style.backgroundColor="#F7F7EE";
  h2.style.color="#5B6647";
  h5.style.color="#5B6647";
  box.style.border="1px solid rgba(128, 128, 128, 0.457)";
})

box1.addEventListener("mouseenter",function()
{
  image1.style.opacity=1;
  ins1.style.marginLeft="0%";
  image1.style.left="0%"
  box1.style.backgroundColor="#5B6647";
  box1.style.border="none";
  h21.style.color="#F7F7EE";
  h51.style.color="#E3E3C4";
})
box1.addEventListener("mouseleave",function()
{
  image1.style.opacity=0;
  ins1.style.marginLeft="-20%";
  image1.style.left="-25%";
  box1.style.backgroundColor="#F7F7EE";
  h21.style.color="#5B6647";
  h51.style.color="#5B6647";
  box1.style.border="1px solid rgba(128, 128, 128, 0.457)";
})

box2.addEventListener("mouseenter",function()
{
  image2.style.opacity=1;
  ins2.style.marginLeft="0%";
  image2.style.left="0%"
  box2.style.backgroundColor="#5B6647";
  box2.style.border="none";
  h22.style.color="#F7F7EE";
  h52.style.color="#E3E3C4";
})
box2.addEventListener("mouseleave",function()
{
  image2.style.opacity=0;
  ins2.style.marginLeft="-20%";
  image2.style.left="-25%";
  box2.style.backgroundColor="#F7F7EE";
  h22.style.color="#5B6647";
  h52.style.color="#5B6647";
  box2.style.border="1px solid rgba(128, 128, 128, 0.457)";
})

box3.addEventListener("mouseenter",function()
{
  image3.style.opacity=1;
  ins3.style.marginLeft="0%";
  image3.style.left="0%"
  box3.style.backgroundColor="#5B6647";
  box3.style.border="none";
  h23.style.color="#F7F7EE";
  h53.style.color="#E3E3C4";
})
box3.addEventListener("mouseleave",function()
{
  image3.style.opacity=0;
  ins3.style.marginLeft="-20%";
  image3.style.left="-25%";
  box3.style.backgroundColor="#F7F7EE";
  h23.style.color="#5B6647";
  h53.style.color="#5B6647";
  box3.style.border="1px solid rgba(128, 128, 128, 0.457)";
})

box4.addEventListener("mouseenter",function()
{
  image4.style.opacity=1;
  ins4.style.marginLeft="0%";
  image4.style.left="0%"
  box4.style.backgroundColor="#5B6647";
  box4.style.border="none";
  h24.style.color="#F7F7EE";
  h54.style.color="#E3E3C4";
})
box4.addEventListener("mouseleave",function()
{
  image4.style.opacity=0;
  ins4.style.marginLeft="-20%";
  image4.style.left="-25%";
  box4.style.backgroundColor="#F7F7EE";
  h24.style.color="#5B6647";
  h54.style.color="#5B6647";
  box4.style.border="1px solid rgba(128, 128, 128, 0.457)";
})

tl.from(".box-1",{
  y:100,
  stagger:0.5,
  opacity:0,
  scrollTrigger:
  {
    trigger:".box-1",
    scroller:"#main",
    // markers:true,
    start:"top 100%",
    end:"top 95%",
    scrub:2
  }
})

tl.from(".box-2",{
    y:100,
    stagger:0.5,
    opacity:0,
    scrollTrigger:
    {
      trigger:".box-2",
      scroller:"#main",
      // markers:true,
      start:"top 100%",
      end:"top 95%",
      scrub:2
    }
  })
  tl.from(".box-3",{
    y:100,
    stagger:0.5,
    opacity:0,
    scrollTrigger:
    {
      trigger:".box-3",
      scroller:"#main",
      // markers:true,
      start:"top 100%",
      end:"top 95%",
      scrub:2
    }
  })
  tl.from(".box-4",{
    y:100,
    stagger:0.5,
    opacity:0,
    scrollTrigger:
    {
      trigger:".box-4",
      scroller:"#main",
      // markers:true,
      start:"top 100%",
      end:"top 95%",
      scrub:2
    }
  })

  tl.from(".box-5",{
    y:100,
    stagger:0.5,
    opacity:0,
    scrollTrigger:
    {
      trigger:".box-5",
      scroller:"#main",
      // markers:true,
      start:"top 100%",
      end:"top 95%",
      scrub:2
    }
  })

tl.to(".img-4",{
  x:"-30%",
  duration:1,
  delay:0.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:".img-4",
    // markers:true,
    start:"top 90%",
    end:"top 50%",
    scrub:2
  }
},"a")

tl.to(".img-5",{
  x:"30%",
  duration:1,
  delay:0.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:".img-4",
    // markers:true,
    start:"top 90%",
    end:"top 20%",
    scrub:2
  }
},"a")

tl.to(".center h2 ,.center h5",{
  opacity:1,
  duration:1,
  delay:0.8,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:".center h2,.center h5",
    // markers:true,
    start:"top 40%",
    end:"top 30%",
    scrub:3
  }
},)
tl.from(".center h3",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:".center h3",
    // markers:true,
    start:"top 100%",
    end:"top 90%",
    scrub:3
  }
},)

tl.from("#page-8 h2,#page-8 h5 ",{
  y:150,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-8 h2,#page-8 h5",
    // markers:true,
    start:"top 100%",
    end:"top 90%",
   scrub:3
  }
})
tl.from("#page-9 img",{
  y:150,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-9 img",
    // markers:true,
    start:"top 100%",
    end:"top 90%",
   scrub:4
  }
})

tl.from(".right h2,.right h5",{
  y:150,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:".right h2",
    // markers:true,
    start:"top 110%",
    end:"top 95%",
   scrub:3
  }
})

tl.from(".right h3",{
  y:150,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:".right h3",
    // markers:true,
    start:"top 110%",
    end:"top 100%",
   scrub:3
  }
})

tl.from(".right-1 img,.left-1 h2,.left-1 h5",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.8,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:".right-1 img,.left-1 h2,.left-1 h5",
    // markers:true,
    start:"top 90%",
    end:"top 85%",
   scrub:4
  }
})
tl.from(".box-6",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.8,
  stagger:0.3,
  scrollTrigger:{
    scroller:"#main",
    trigger:".box-6",
    // markers:true,
    start:"top 90%",
    end:"top 60%",
   scrub:4
  }
})
