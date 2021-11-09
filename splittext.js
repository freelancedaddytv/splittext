const quotes = document.querySelectorAll(".quote"); // call first class elemennt
const secondaryquotes = document.querySelectorAll(".squote");  // call secondary class elemennt

 // ************************************************//
 // First Split Text Animation
 // ************************************************//

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
    });
  }); 
  
  
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

 // ************************************************//
 // Secondary Split Text Animation
 // ************************************************//
function ssetupSplits() {


  
   secondaryquotes.forEach(squote => {
    // Reset if needed
    if(squote.anim) {
      squote.anim.progress(1).kill();
      squote.split.revert();
    }

    squote.split = new SplitText(squote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    squote.anim = gsap.from(squote.split.chars, {
      scrollTrigger: {
        trigger: squote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 3, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
    });
  });

}
ScrollTrigger.addEventListener("refresh", ssetupSplits);
ssetupSplits();
