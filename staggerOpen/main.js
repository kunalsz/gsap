
let tl = gsap.timeline()

tl.to('.up-el',{y:'-100%',stagger:-.2,ease:'power1.out'})
  .from('.list',{y:'-200%',stagger:.2},'+=.7')
  .from('.center-text',{x:'-500%',ease:'power1.in'},'<.3')
  .from('.center-def',{x:'500%',ease:'power1.in'},'<')
  .from('.chair-pic',{y:'-400%',ease:'elastic'},1)