var uri = 'api/realestate';

$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(uri)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {

                $('#realEstatesTable > tbody:last').append(
                    '<tr>' +
                        '<td>' + item.Id + '</td>' +
                        '<td>' + item.Company + '</td>' + 
                        '<td>' + item.City + '</td>' +
                        '<td>' + item.Location + '</td>' +
                        '<td>' + item.Type + '</td>' +
                        '<td>' + item.SquareMeters + '</td>' +
                        '<td>' + item.Price + '</td>' +
                        '<td> <a href="' + item.Link + '" target=_blank>' + item.Link + '</td>' +
                        '<td>' + item.Page + '</td>' +
                        '<td>' + item.Active + '</td>' +
                        '<td>' + item.UpdateTime + '</td>' +
                        '<td>' + item.UpdateDate + '</td>' +
                        '<td>' + item.InsertTime + '</td>' +
                        '<td>' + item.InsertDate + '</td>' +
                    '</tr>'
                );
            });
        });
});