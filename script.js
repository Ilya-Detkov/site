
$(function(){
	$('.all__news').click(function(){
		$('.popup-container').fadeIn(1500)
		$("body").addClass("fixed");
	});
	$('.popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut();
			$("body").removeClass("fixed");
		}
	});
    $.get('http://data.fixer.io/api/latest', 

        {'access_key': '20c313d2c514efdd42a938d481af5a35'},

            function(response){

                console.log(response);

                let usd_value = (response.rates['USD']);

                let eur_value = 1;

                let rub_value = (response.rates['RUB']);

                let usd_course = (1*rub_value/usd_value).toFixed(2);

                let eur_course = rub_value.toFixed(2);

                $('#usd').html(usd_course);

                $('#eur').html(eur_course);
    });

    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});