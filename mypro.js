 let rect = document.querySelector('#center');
 rect.addEventListener("mousemove",function(event){
    //detailes is the variable name
    let rectangelocation = rect.getBoundingClientRect()
     let insiderectval =  event.clientX - rectangelocation.left;
   
     if(insiderectval<rectangelocation.width/2){
      let redcolor = gsap.utils.mapRange(0,rectangelocation.width/2,255,0,insiderectval);
      gsap.to(rect,{
         backgroundColor:`rgb(${redcolor},0,0)`,
      ease : Power3,
      });
     }
     else{
     let bluecolor = gsap.utils.mapRange(
      rectangelocation.width / 2,
      rectangelocation.width,0,255,insiderectval
     );
     gsap.to(rect,{
      backgroundColor:`rgb(0, 0, ${bluecolor})`,
      ease :Power4,
     });

     }
 })  
 rect.addEventListener('mouseleave',function(){
   gsap.to(rect,{
      backgroundColor :"white",
   })
 })