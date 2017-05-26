

function md1d(){
	document.getElementById("cover").style.opacity = '0.75';
}
function md1l(){
	document.getElementById("cover").style.opacity = '1.00';
}


//DEEL1


var openPhotoSwipe1 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/event/d.jpg',
            w: 5468,
            h: 3636
        },
        {
            src: 'img/event/d-10.jpg',
            w: 5468,
            h: 3636
        },
        {
            src: 'img/event/d-3.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/d-4.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/d-5.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/d-6.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/d-7.jpg',
            w: 5468,
            h: 3636
        },		
		        {
            src: 'img/event/d-8.jpg',
            w: 5468,
            h: 3636
        },		
		        {
            src: 'img/event/d-9.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/d-2.jpg',
            w: 5468,
            h: 3636
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 2,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};


//DEEL2


var openPhotoSwipe2 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/event/a.jpg',
            w: 5468,
            h: 3636
        },
        {
            src: 'img/event/a-2.jpg',
            w: 5468,
            h: 3636
        },
        {
            src: 'img/event/a-3.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/a-4.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/a-5.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/a-6.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/a-7.jpg',
            w: 5468,
            h: 3636
        },		
		        {
            src: 'img/event/a-8.jpg',
            w: 5468,
            h: 3636
        },		
		        {
            src: 'img/event/a-9.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/a-10.jpg',
            w: 5468,
            h: 3636
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 2,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};


//DEEL3


var openPhotoSwipe3 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/event/b.jpg',
            w: 5468,
            h: 3636
        },
        
        {
            src: 'img/event/b-3.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/b-4.jpg',
            w: 5468,
            h: 3636
        },
		    
		        {
            src: 'img/event/b-6.jpg',
            w: 5468,
            h: 3636
        },
		        {
            src: 'img/event/b-7.jpg',
            w: 4000,
            h: 6016
        }	
		       
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 2,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};


//DEEL4


var openPhotoSwipe4 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/event/c.jpg',
            w: 905,
            h: 1204
        },
        {
            src: 'img/event/c-2.jpg',
            w: 5468,
            h: 3636
        },
        {
            src: 'img/event/c-3.png',
            w: 1790,
            h: 1790
        },
		        {
            src: 'img/event/c-4.png',
            w: 1790,
            h: 1790
        },
		        {
            src: 'img/event/c-5.png',
            w: 1790,
            h: 1790
        },
		        {
            src: 'img/event/c-6.png',
            w: 1790,
            h: 1790
        },		        {
            src: 'img/event/c-7.jpg',
            w: 3189,
            h: 4252
        },
		      
		        
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 2,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};




//other jQ
