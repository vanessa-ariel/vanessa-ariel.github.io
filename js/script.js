$(window).scroll(function(){
	if($(this).scrollTop() > 60){
		$('nav').removeClass('bg-transparent')
		$('nav').addClass('scrolled')	
	}
});

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


