(function rsBootstrap(ns) {
    var init = function () {
        var loadData = new window.rs.LoadData();

        window.rs.LoadData = loadData;

        ns.swiper = ns.Swiper.reBind();
    }

    ns.Bootstrapper = { init: init }
}(window.rs));

window.onload = function () {
    window.rs.Bootstrapper.init();
    startTheApp();
}