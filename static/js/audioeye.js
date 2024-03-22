!(function () {
  var b = function () {
    window.__AudioEyeSiteHash = 'de3f1f91eecfb05abe58bcc17499a51a';
    var a = document.createElement('script');
    a.src = 'https://wsmcdn.audioeye.com/aem.js';
    a.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(a);
  };
  'complete' !== document.readyState
    ? window.addEventListener
      ? window.addEventListener('load', b)
      : window.attachEvent && window.attachEvent('onload', b)
    : b();
})();
