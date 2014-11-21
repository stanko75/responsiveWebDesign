var fromGlobal = 0,
    toGlobal = 10,
    uri = 'api/realestate/?from=' + fromGlobal + '&to=' + toGlobal;

$(document).ready(function () {
    // Send an AJAX request
    loadData(0, 10);

    $(window).resize(function() {
        if ($("#realEstatesTable").height() < $(window).height()) {
            loadData(fromGlobal, toGlobal);
        }
    });

    $(window).scroll(function() { //detect page scroll
        if ($(window).scrollTop() + $(window).height() == $(document).height()) //user scrolled to bottom of the page?
        {
            loadData(fromGlobal, toGlobal);
        }
    });


        function loadData(from, to) {
        uri = 'api/realestate/?from=' + from + '&to=' + to;
        $.getJSON(uri)
            .done(function (data) {
                from = from + 10;

                fromGlobal = from;
                toGlobal = to;
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
                if ($("#realEstatesTable").height() < $(window).height()) {
                    loadData(from, to);
                }
        });

    };
});