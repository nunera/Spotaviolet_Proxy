
winloc = window.location;
searchparam = new URLSearchParams(winloc.search);
url = searchparam.get("RAW");
if(searchparam.has('RAW') && confirm('"' + url + '" is blocked for "'+ searchparam.get("CAT") + '"\nWould you like to unblock using ultraviolet?')){
  (function(){
    "http" != url.substring(0, 4) && (url = "https://" + url);
    winloc.href = "https://reallypurple-node-production.up.railway.app/uv/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();
}
