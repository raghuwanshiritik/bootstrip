function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+ 20+"px"
  crsr.style.top = dets.y +20+"px"
})


var tl = gsap.timeline({
    ScrollTrigger:{
        trigger:"page1 h1",
        scroller:".main",
        markers:true,
        Start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")

tl.to("page1 video",{
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"page1 h1",
      scroller:".main",
      markers:true,
      start:"top -116%",
      end:"top -130%",
      scrub:3
  }

})
tl2.to(".main",{
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:"page1 h1",
      scroller:".main",
      markers:true,
      start:"top -280%",
      end:"top -310%",
      scrub:3
  }
  
})
tl2.to(".main",{
  backgroundColor:"#0F0D0D"
})
 var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.style.backgroundColor="red"
  var att =elem.getAttribute("data-image")
   crsr.style.width="250px"
   crsr.style.height="200px"
   crsr.style.backgroundRadius="0"
   crsr.style.backgroundImage =`url(${att})`
  })
   elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor="transparent"
    crsr.style.width="20px"
   crsr.style.height="20px"
   crsr.style.backgroundRadius="50%"
   crsr.style.backgroundImage =`none`
  })
})

var h4 = document.querySelectorAll("#nav h4")
document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.display = "block"
    purple.style.opacity = 1
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display = "none"
    purple.style.opacity = 0
  })
})









<footer id="footer">
<div class="footer">
  <div class="container box">
    <div class="row footerwidgets">
              <div class="col-lg-3 col-md-6 col-sm-6 .col-xs-12">
                  <!-- Text Widget start -->
                  <div class="widget">
                      <div class="text-widget">
                      <h2 class="heading">Address</h2>
                          <div class="textsec">
                              
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                              </p>
                              <ul class="contactdetail">
                                  <li><i class="fa fa-mobile"></i> +1800 1234 56789</li>
                                  <li><i class="fa fa-envelope"></i><a href="mailto:support@function.com"> support@function.com</a></li>
                              </ul>                            
                              <div class="clearfix"></div>
                          </div>
                      </div>
                  </div>
                  <div class="clearfix"></div>
                  <!-- Text Widget start -->
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 .col-xs-12">
                  <!-- Flickr Widget start -->
                  <div class="widget">
                      <h2 class="heading">Flickr Photos</h2>
                      <div class="flickrgallery">
                          <ul>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150g" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                              <li><a href="#"><img src="http://placehold.it/150x150" alt="" class="img-responsive hovereffect"></a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="clearfix"></div>
                  <!-- Flickr Widget End -->
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 .col-xs-12">
                  <div class="widget widget-contact">
                      <h2 class="heading">Contact us via message</h2>
                      <div class="contact-forms">
                          <form>
                              <div class="row">
                                  <div class="col-lg-4 col-md-4 col-sm-12 .col-xs-12">
                                      <input type="text" placeholder="Your Name" />
                                  </div>
                                  <div class="col-lg-4 col-md-4 col-sm-12 .col-xs-12">
                                      <input type="text" placeholder="Email Address" />
                                  </div>
                                  <!-- <div class="col-lg-4 col-md-4 col-sm-12 .col-xs-12">
                                      <input type="text" placeholder="Subject" />
                                  </div> -->
                                  <div class="col-lg-8 col-md-8 col-sm-12 .col-xs-12">
                                      <textarea placeholder="Message"></textarea>
                                  </div>
                                  <!-- <div class="col-lg-4 col-md-4 col-sm-12 .col-xs-12">
                                      <h5 class="order btn btn-primary"><a href="#">Send</a></h5>
                                  </div> -->
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div> 
  </div>
</div>
</footer>