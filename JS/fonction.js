function validateform() {
    document.getElementById('status').innerHTML = "Envoi en cours...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        //'captcha'  : $('input[name=captcha]').val(),
        //'captchasession'  : $('input[name=captchasession]').val(),
        'message'  : $('textarea[name=message]').val()
    };


   $.ajax({
    url : "mail.php",
    type: "POST",
    async : false,
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        document.getElementById("nom").value="";
        document.getElementById("email").value="";
        document.getElementById("objet").value="";
        document.getElementById("message").value="";
        /*if (data.code) //If mail was sent successfully, reset the form.
        //$("#imgcaptcha").remove();
        //$("#imagecaptcha").html("<img src='captcha.php' style='float: margin-left:20%;margin-left: 32%;'' id='imgcaptcha'>")*/
        
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
        document.getElementById("name").reset();

    }
});
}