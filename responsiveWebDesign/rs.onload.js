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
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            window.rs.LoadData.loadData(fromGlobal, numberOfRecordsGlobal, uri, id, searchQuery);
        }
    });
}