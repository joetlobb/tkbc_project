const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

$(".alert-dismissible").fadeTo(2000, 700).slideUp(700, function(){
    $(".alert-dismissible").alert('close');
});