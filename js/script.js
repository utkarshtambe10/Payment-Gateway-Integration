/* STICKY NAVIGATION */
let navbar = $(".navbar");

$(window).scroll(function() {
    let oTop = $(".section-1").offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    }
    else{
        navbar.removeClass("sticky");
    }
});

/* RAZORPAY DONATION BUTTON*/
(function(){
    var d=document; var x=!d.getElementById('btn btn-light px-5 py-5')
    if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
    s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
    rzp && rzp.init && rzp.init()}})();
