$(window).scroll(function(){
	if($(this).scrollTop() > 100){
		$('nav').removeClass('bg-transparent')
		$('nav').addClass('scrolled')	
    }
    else if($(this).scrollTop()<= 100){
        $('nav').removeClass('scrolled')
		$('nav').addClass('bg-transparent')
    }
});

// $(window).scroll(function(){
// 	if($(this).scrollTop() > 60){
// 		$('nav').toggleClass('bg-transparent')
			
// 	}
// });

let form = $('.form-contact');

form.validate({
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true,
        },
        phone: 'required',
        text: 'required'
    },
    messages: {
        name: 'Please tell me who you are (:',
        email: {
            required: 'Please, type a valid email address',
            email: 'Invalid email address'
    },
        phone: 'Please, type our phone number',
        text: 'Please, type a message'
    }
})


