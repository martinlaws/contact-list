$(function() {
  $('#create-contact').on('click', function() {
    console.log('WORKS!')
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var data = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };
    $.post('/contact/new', data);
  });


  $('#contact-index').text(function() {
    
  });

});
