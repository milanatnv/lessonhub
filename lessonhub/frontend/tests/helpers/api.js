export default function stubAPIEndpoint(url, json) {
  $.mockjax({
    url: url,
    dataType: 'json',
    responseText: json
  });
}

$.mockjaxSettings.logging = false;
$.mockjaxSettings.responseTime = 0;
