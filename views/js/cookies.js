function getcookies(){
    var todasLasCookies = document.cookie
    var arrayCookies = todasLasCookies.split(';');
    var cookies = {};
    for (var i = 0; i < arrayCookies.length; i++) {
        var cookie = arrayCookies[i].trim();
        var separatorIndex = cookie.indexOf('=');
    
        var nombre = cookie.substring(0, separatorIndex);
        var valor = cookie.substring(separatorIndex + 1);
    
        cookies[nombre] = valor;
    }
    return cookies;
}