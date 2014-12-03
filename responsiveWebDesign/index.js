var fromGlobal = 0,
    numberOfRecordsGlobal = 10;

$(document).ready(function () {

    var startX,
        mySwiper = new Swiper('.swiper-container', {
            cssWidthAndHeight: false,
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            onTouchStart: function (swiper) {
                swiper.fixLoop();
                startX = swiper.getWrapperTranslate('x');
            },
        });

    // Send an AJAX request
    loadData(0, 10);

    $(window).resize(function() {
        if ($("#realEstatesTable").height() < $(window).height()) {
            loadData(fromGlobal, numberOfRecordsGlobal);
        }
    });

    $(window).scroll(function() { //detect page scroll
        if ($(window).scrollTop() + $(window).height() == $(document).height()) //user scrolled to bottom of the page?
        {
            loadData(fromGlobal, numberOfRecordsGlobal);
        }
    });

    function loadData(from, numberOfRecordsGlobal) {
        var uri = 'api/realestate/?from=' + from + '&numberOfRecords=' + numberOfRecordsGlobal;
        $.getJSON(uri)
            .done(function (data) {
                from = from + 10;

                fromGlobal = from;
                numberOfRecordsGlobal = numberOfRecordsGlobal;

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
                if ($("#realEstatesTable").height() < $(window).height()) {
                    loadData(from, numberOfRecordsGlobal);
                } else {
                    $('.swiper-container').css({ height: '' });
                    //Calc Height
                    $('.swiper-container').css({ height: $('.swiper-container').find('table').height() });

                    //ReInit Swiper
                    swiper.reInit();
                }
        });

    };
});