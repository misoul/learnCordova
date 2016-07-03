// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());

    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
        $('body').html(new HomeView(service).render().$el)
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // StatusBar fixes the issue of WebView blocks phone's StatusBar
    // StatusBar.overlaysWebView( false );
    // StatusBar.backgroundColorByHexString('#ffffff');
    // StatusBar.styleDefault();

    document.addEventListener('deviceready', function () {  // Added by Misoul
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

    FastClick.attach(document.body); // Popup from Help button won't have a 300ms delay

    /* ---------------------------------- Local Functions ---------------------------------- */


}());