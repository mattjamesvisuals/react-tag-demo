
  var freestar = freestar || {};
  freestar.hitTime = Date.now();
  freestar.queue = freestar.queue || [];
  freestar.config = freestar.config || {};
  freestar.debug = window.location.search.indexOf('fsdebug') === -1 ? false : true;
  freestar.config.enabled_slots = [];
  freestar.config.channel = 'homes';
 
  freestar.queue.push(function() {
    googletag.pubads().setTargeting('pagetype', ['add value here', 'value 2', 'value 3']);
  });
 
  !function(a,b){var c=b.getElementsByTagName("script")[0],d=b.createElement("script"),e="https://a.pub.network/webdesignledger";e+=freestar.debug?"/qa/pubfig.min.js":"/pubfig.min.js",d.async=!0,d.src=e,c.parentNode.insertBefore(d,c)}(window,document);
  // const scriptSrcUrl = `https://a.pub.network/homes${useLiveAds ? '' : 'staging'}-com${
  //   debug ? '/qa/pubfig.min.js' : '/pubfig.min.js'
  // }`;
  freestar.initCallback = function () { 
	freestar.newAdSlots(freestar.config.enabled_slots);
  }