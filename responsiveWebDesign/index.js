var fromGlobal = 0,
    numberOfRecordsGlobal = 10,
    uri = 'api/realestate/GetAllRealEstates?from=',
    searchQuery = '#realEstatesTable > tbody:last',
    id = "#realEstatesTable";

$(document).ready(function () {

    loadData(0, 10, uri, id, searchQuery);

    $(window).resize(function() {
        if ($("#realEstatesTable").height() < $(window).height()) {
            loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);
        }
    });

    $(window).scroll(function() { 
        if ($(window).scrollTop() + $(window).height() == $(document).height()) 
        {
            loadData(fromGlobal, numberOfRecordsGlobal, uri);
        }
    });

    function loadData(from, numberOfRecordsGlobal, uri, id, searchQuery) {
        var localUri = uri + from + '&numberOfRecords=' + numberOfRecordsGlobal;
        
        $.getJSON(localUri)
            .done(function (data) {
                from = from + 10;

                fromGlobal = from;
                numberOfRecordsGlobal = numberOfRecordsGlobal;

                $.each(data, function (key, item) {

                    $(searchQuery).append(
                        '<tr>' +
                            '<td>' + item.Id + '</td>' +
                            '<td>' + item.Company + '</td>' +
                            '<td>' + item.City + '</td>' +
                            '<td>' + item.Location + '</td>' +
                            '<td>' + item.Type + '</td>' +
                            '<td>' + item.SquareMeters + '</td>' +
                            '<td>' + item.Price + '</td>' +
                            '<td>' +

                                '<a href="' + item.Link + '" target=_blank>' +
                                    item.Link +
                                '</a>' +

                            '</td>' +
                            '<td>' + item.Page + '</td>' +
                            '<td>' + item.Active + '</td>' +
                            '<td>' + item.UpdateTime + '</td>' +
                            '<td>' + item.UpdateDate + '</td>' +
                            '<td>' + item.InsertTime + '</td>' +
                            '<td>' + item.InsertDate + '</td>' +
                        '</tr>'
                    );
                });
                if ($(id).height() < $(window).height()) {
                    loadData(from, numberOfRecordsGlobal, uri, id, searchQuery);
                } else {
                    $('.swiper-container').css({ height: '' });
                    $('.swiper-container').css({ height: $('.swiper-container').find(id).height() });

                    window.rs.Swiper.reInit();
                }
        });

    };
});