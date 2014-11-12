var uri = 'api/realestate';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                debugger;
                // Add a list item for the product.
                $('<li>', {
                    text: formatItem(item)
                }).appendTo($('#realEstates'));
            });
        });
});

function formatItem(item) {
    return item.City + ': ' + item.Link;
}

function find() {
    var id = $('#prodId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#product').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#product').text('Error: ' + err);
        });
}