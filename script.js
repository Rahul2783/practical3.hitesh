
$(document).ready(function() {
    // Add language functionality
    $('#addLanguage').click(function(e) {
        e.preventDefault();
        var newLanguage = prompt('Enter new language:');
        if (newLanguage) {
            $('#languages').append('<option value="' + newLanguage.toLowerCase() + '">' + newLanguage + '</option>');
        }
    });
    
    // Form submission
    $('#userForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serializeArray();
        console.log(formData);
        // Here you can handle form submission, like sending data to server or processing it further
    });
});