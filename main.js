
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function ApplicationInfluxDB(args, metadata) {
    Application.apply(this, ['ApplicationInfluxDB', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

     var src = document.location.protocol + "//" + document.location.hostname + ":8083";

    this.options.src = src;
  }

  ApplicationInfluxDB.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationInfluxDB = OSjs.Applications.ApplicationInfluxDB || {};
  OSjs.Applications.ApplicationInfluxDB.Class = ApplicationInfluxDB;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
