$(function() {
  $.getJSON("/contacts", function(contacts){
    $(contacts).each(function(i, contact){
      $('#contact').append(
        `<tr>
          <td>${contact.first_name}</td>
          <td>${contact.last_name}</td>
          <td>${contact.email}</td>
        </tr>`
      );
    });
  });
  
  $('#create-contact').on('click', function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var data = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };
    $.post('/contact/new', data);
    $('#create-contact-form').trigger('reset');
  });

});
