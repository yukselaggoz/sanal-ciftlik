var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }
var variables = {
    KULLANICI_SIFRE: "",
    parameter: {
        KULLANICI_AD: null,
        KULLANICI_SIFRE: "",
    }
};


var hayvanlar = {
    0: { HAYVAN_ADI: "TAVUK", FIYAT: 10, ADET: 0 },
    1: { HAYVAN_ADI: "İNEK", FIYAT: 15000, ADET: 0 },
    2: { HAYVAN_ADI: "ÖKÜZ", FIYAT: 10000, ADET: 0 },
    3: { HAYVAN_ADI: "TAVŞAN", FIYAT: 10, ADET: 0 },
    4: { HAYVAN_ADI: "HOROZ", FIYAT: 50, ADET: 0 },
    5: { HAYVAN_ADI: "AT", FIYAT: 20000, ADET: 0 },
    6: { HAYVAN_ADI: "ARI", FIYAT: 4000, ADET: 0 },
    7: { HAYVAN_ADI: "KEÇİ", FIYAT: 1000, ADET: 0 },
    8: { HAYVAN_ADI: "KOYUN", FIYAT: 1000, ADET: 0 },
    9: { HAYVAN_ADI: "DEVE", FIYAT: 40000, ADET: 0 },
};
$(document).ready(function () {
    variables.parameter.KULLANICI_AD = getUrlParameter('userName');
    var password = getUrlParameter('password')
    var decodedpassword = Base64.decode(password);
    variables.parameter.KULLANICI_SIFRE = decodedpassword.substring(0, password.length-2);
    if (valCore == 1) {
        Get_KullaniciCore("http://localhost:40612/home/get_kullanici");
    }
});

function CallAjax(type, url, data, onsuccess, error) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: "json",
        success: onsuccess,
        error: error,
        async: false
    });
}
function Get_KullaniciCore(url) {
    var Kullanici = { kullanici_ad: variables.parameter.KULLANICI_AD, sifre: variables.parameter.KULLANICI_SIFRE }
    CallAjax("GET", url, Kullanici, function (response) {
        $("#imageHeaderUser1").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser2").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser1").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser2").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#aDenemeSayfasi").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aHayvanlar").attr("href", "http://localhost:24584/Home/Animals?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aLogo").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));


        $("#userInfoHeader").text(response[0].AD_SOYAD)
        $("#userInfoHeader1").text(response[0].AD_SOYAD)
        $("#spanstoreAmout").text(response[0].DEPO_MIKTARI);
        $("#spanFeedAmout").text(response[0].YEM_MIKTARI);
        var html = null;
        hayvanlar[0].ADET = response[0].HAYVAN1;
        hayvanlar[1].ADET = response[0].HAYVAN2;
        hayvanlar[2].ADET = response[0].HAYVAN3;
        hayvanlar[3].ADET = response[0].HAYVAN4;
        hayvanlar[4].ADET = response[0].HAYVAN5;
        hayvanlar[5].ADET = response[0].HAYVAN6;
        hayvanlar[6].ADET = response[0].HAYVAN7;
        hayvanlar[7].ADET = response[0].HAYVAN8;
        hayvanlar[8].ADET = response[0].HAYVAN9;
        hayvanlar[9].ADET = response[0].HAYVAN10;
        for (i = 0; i < 10; i++) {
            html += "<tr>"
            html += '<td class="text-center"><img src="../Content/icons/'+ i + '.svg" style="width:50px;height:50px;" /></td>';
            html += '<td class="text-center" > ' + hayvanlar[i].HAYVAN_ADI + "</td>";
            html += '<td class="text-center">' + hayvanlar[i].ADET + "</td>"; 
            html += '<td class="text-center">' + hayvanlar[i].FIYAT + " TL" + "</td>";
            html += "<tr>"
        }
        $('#anaTablo').html(html);
    });
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};