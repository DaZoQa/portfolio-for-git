$(document).ready(function(){
    $('form').submit(function(){
        if(document.form.name.value == '' || document.form.email.value == '' || document.form.message.value == ''){
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
			url: "send.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find('input').val('');
            $(this).find('textarea').val('');
            $("#form").trigger('reset');
        });
        return false;
    });
});