(function(ns) {
    function LoadData() {
        var self = this;

        self.loadData = function(from, numberOfRecordsGlobal, uri, id, searchQuery) {
            var localUri = uri + from + '&numberOfRecords=' + numberOfRecordsGlobal;

            $.getJSON(localUri)
                .done(function(data) {
                    from = from + 10;

                    fromGlobal = from;
                    numberOfRecordsGlobal = numberOfRecordsGlobal;

                    $.each(data, function (key, item) {
                        $(searchQuery).append(
                            self.appendTable(item)
                        );
                    });
                    if ($(id).height() < $(window).height()) {
                        window.rs.LoadData.loadData(from, numberOfRecordsGlobal, uri, id, searchQuery);
                    } else {
                        $('.swiper-container').css({ height: '' });
                        $('.swiper-container').css({ height: $(window).height() - 100 });

                        window.rs.swiper.reInit();
                    }
                });
        }

        self.appendTable = function (item) {
            var preparedHTML = "";
            for (var i in item) {
                if (i == "Link") {
                    preparedHTML = preparedHTML +
                        '<td><a href="' + item[i] + '">' + item[i] + '</a></td>';
                } else {
                    preparedHTML = preparedHTML +
                        '<td>' + item[i] + '</td>';
                }
            }

            return '<tr>' + preparedHTML + '</tr>';
        }
    }

    ns.LoadData = LoadData;
}(window.rs))