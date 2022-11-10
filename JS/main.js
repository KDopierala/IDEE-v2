$( ".navbar__login-btn" ).on( "click", function() {
    $( ".navbar__login-btn" ).removeClass("active")
    $( this ).addClass("active")
});


$('.navbar__mobile-btn').on( "click", function() {
    $('.navbar__mobile-section').toggleClass('open')
    console.log("wtf")
})
