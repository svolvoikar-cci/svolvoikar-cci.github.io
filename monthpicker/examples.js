$(document).ready(function() {
    // Default functionality.
    $('.Default').MonthPicker();

    // Hide the icon and open the menu when you
    // click on the text field.
    $('#NoIconDemo').MonthPicker({ Button: false });

    
    $("h1").text( $("h1").text().replace('@VERSION', $.MonthPicker.VERSION) );
});
