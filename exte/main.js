var cnt = 0;
window.onload = function () {
  chrome.tabs.getSelected(null, function (tab) {
    document.getElementById('title').innerHTML = tab.title;
    document.getElementById('url').innerHTML = tab.url;
    cnt += 1;
    document.getElementById('cnt').innerHTML = cnt;
  });
};