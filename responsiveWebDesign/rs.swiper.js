(function (ns) {

    function reInit() {
        window.rs.swiper.reInit();
    }

    var createSwipper = $('.swiper-container').swiper({
        cssWidthAndHeight: false,
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        onTouchStart: function (swiper) {
            swiper.fixLoop();
            startX = swiper.getWrapperTranslate('x');
        },
        onSlideChangeEnd: function(swiper) {
            switch (swiper.activeIndex) {
            case 2:
                uri = 'api/realestate/GetRealEstatesWithCondition?from=';
                searchQuery = '.swiper-slide-active>#realEstatesTable2>tbody:last';
                id = "#realEstatesTable2";
                break;
            case 3:
                uri = 'api/realestate/GetAllRealEstates?from=';
                //searchQuery = '#realEstatesTable > tbody:last';
                searchQuery = '.swiper-slide-active>#realEstatesTable>tbody:last';
                id = "#realEstatesTable";
                break;
            }
            $(searchQuery).find("tr:gt(0)").remove();
            $(id).find("tr:gt(0)").remove();
            loadData(0, 10, uri, id, searchQuery);
        }
    });

    ns.Swiper = {reBind: createSwipper, reInit: reInit}

}(window.rs));