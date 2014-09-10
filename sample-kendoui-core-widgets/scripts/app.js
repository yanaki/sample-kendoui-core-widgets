(function (global) {
    global.$.getScript("https://www.google.com/jsapi").then(function () {

        global.google.load('maps', '3.exp', {
            other_params: 'sensor=true',
            callback: function () {
                var app = global.app = global.app || {};

                app.makeUrlAbsolute = function (url) {
                    var anchorEl = document.createElement("a");
                    anchorEl.href = url;
                    return anchorEl.href;
                };

                document.addEventListener("deviceready", function () {
                    navigator.splashscreen.hide();

                    app.changeSkin = function (e) {
                        var mobileSkin = "";

                        if (e.sender.element.text() === "Flat") {
                            e.sender.element.text("Native");
                            mobileSkin = "flat";
                        } else {
                            e.sender.element.text("Flat");
                            mobileSkin = "";
                        }

                        app.application.skin(mobileSkin);
                    };

                    app.application = new kendo.mobile.Application(document.body, {
                        layout: "tabstrip-layout"
                    });
                }, false);
            }
        });
    });
})(window);