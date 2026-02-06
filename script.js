import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* DATA */

const projects = {

  1:{
    title:"Urban Housing",
    desc:"High-density housing focused on community.",
    imgs:["/img/p1.jpg","/img/p2.jpg"]
  },

  2:{
    title:"Cultural Center",
    desc:"Public building for art and performance.",
    imgs:["/img/p2.jpg","/img/p3.jpg"]
  },

  3:{
    title:"Office Tower",
    desc:"Flexible office tower.",
    imgs:["/img/p3.jpg","/img/p1.jpg"]
  }

};


/* HERO */

gsap.from(".hero-content",{
  opacity:0,
  y:60,
  duration:1.5
});


/* PROJECT SCROLL */

document.querySelectorAll(".project").forEach(p=>{

  gsap.from(p,{
    scrollTrigger:{
      trigger:p,
      start:"top 80%"
    },
    opacity:0,
    y:80,
    duration:1.2
  });

});


/* OPEN PROJECT */

const transition = document.getElementById("transition");
const page = document.getElementById("project-page");
const main = document.querySelector("main");

document.querySelectorAll(".project").forEach(p=>{

  p.addEventListener("click",()=>{

    const id = p.dataset.id;

    transition.classList.add("active");

    setTimeout(()=>{

      main.style.display="none";
      page.style.display="block";

      loadProject(id);

      transition.classList.remove("active");

    },700);

  });

});


/* LOAD PROJECT */

function loadProject(id){

  const data = projects[id];

  document.getElementById("ptitle").innerText = data.title;
  document.getElementById("pdesc").innerText = data.desc;

  const gal = document.getElementById("gallery");
  gal.innerHTML="";

  data.imgs.forEach(src=>{

    const img=document.createElement("img");
    img.src=src;
    gal.appendChild(img);

  });

  window.scrollTo(0,0);
}


/* CLOSE */

document.querySelector(".back").addEventListener("click",()=>{

  page.style.display="none";
  main.style.display="block";
  window.scrollTo(0,0);

});