document.addEventListener("DOMContentLoaded", () => {
    // run whatever we need
});

function init() {    
}


const options = {
  
    plugins: [new SwupProgressPlugin(
    {
      className: 'swup-progress-bar',
      transition: 800,
      delay: 0
    }
  )]
  

};

const swup = new Swup(options); // only this line when included with script tag

// run once 
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);

function unload() {
    if (document.querySelector('.js-scroll')) {
    }
    // ...
}

swup.on('willReplaceContent', unload);
