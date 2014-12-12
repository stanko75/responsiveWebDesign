window.onload = function () {
    var fromGlobal = 0,
        numberOfRecordsGlobal = 10,
        uri = 'api/realestate/GetAllRealEstates?from=',
        searchQuery = '#realEstatesTable > tbody:last',
        id = "#realEstatesTable";

    window.rs.Bootstrapper.init();

    window.rs.LoadData.loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);

    $(window).resize(function () {
        if ($("#realEstatesTable").height() < $(window).height()) {
            window.rs.LoadData.loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);
        }
        $('.swiper-container').css({ height: '' });
        $('.swiper-container').css({ height: $(window).height() - 100 });

        window.rs.swiper.reInit();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            window.rs.LoadData.loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);
        }
    });

    $(".swiper-slide").scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >=$(this)[0].scrollHeight) {
            window.rs.LoadData.loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);
        }
    });
}