var hayvanlarYem = {
    0: { HAYVAN_ADI: "TAVUK", FIYAT: 10, ADET: 0, YEM_MIKTARI: 10, YEM_FIYATI: 5 },
    1: { HAYVAN_ADI: "İNEK", FIYAT: 15000, ADET: 0, YEM_MIKTARI: 55, YEM_FIYATI: 20 },
    2: { HAYVAN_ADI: "ÖKÜZ", FIYAT: 10000, ADET: 0, YEM_MIKTARI: 72, YEM_FIYATI: 35 },
    3: { HAYVAN_ADI: "TAVŞAN", FIYAT: 10, ADET: 0, YEM_MIKTARI: 8, YEM_FIYATI: 5 },
    4: { HAYVAN_ADI: "HOROZ", FIYAT: 50, ADET: 0, YEM_MIKTARI: 6, YEM_FIYATI: 5 },
    5: { HAYVAN_ADI: "AT", FIYAT: 20000, ADET: 0, YEM_MIKTARI: 80, YEM_FIYATI: 50 },
    6: { HAYVAN_ADI: "ARI", FIYAT: 4000, ADET: 0, YEM_MIKTARI: 1, YEM_FIYATI: 1 },
    7: { HAYVAN_ADI: "KEÇİ", FIYAT: 1000, ADET: 0, YEM_MIKTARI: 40, YEM_FIYATI: 15 },
    8: { HAYVAN_ADI: "KOYUN", FIYAT: 1000, ADET: 0, YEM_MIKTARI: 40, YEM_FIYATI: 15 },
    9: { HAYVAN_ADI: "DEVE", FIYAT: 40000, ADET: 0, YEM_MIKTARI: 100, YEM_FIYATI: 50 },
};
$(document).ready(function () {
    if (valFeeds == 1) {
        Get_KullaniciYem("http://localhost:40612/home/get_kullanici");
    }
});
function Get_KullaniciYem(url) {
    CallAjax("GET", url, null, function (response) {
        $("#imageHeaderUser1").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser2").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#aHayvanlar").attr("href", "http://localhost:24584/Home/Animals?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aDepo").attr("href", "http://localhost:24584/Home/Store?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aDenemeSayfasi").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        var html = null;
        hayvanlarYem[0].ADET = response[0].HAYVAN1;
        hayvanlarYem[1].ADET = response[0].HAYVAN2;
        hayvanlarYem[2].ADET = response[0].HAYVAN3;
        hayvanlarYem[3].ADET = response[0].HAYVAN4;
        hayvanlarYem[4].ADET = response[0].HAYVAN5;
        hayvanlarYem[5].ADET = response[0].HAYVAN6;
        hayvanlarYem[6].ADET = response[0].HAYVAN7;
        hayvanlarYem[7].ADET = response[0].HAYVAN8;
        hayvanlarYem[8].ADET = response[0].HAYVAN9;
        hayvanlarYem[9].ADET = response[0].HAYVAN10;

        $.each(hayvanlarYem, function (i, item) {
            html += "<tr>"
            html += '<td class="text-center"><img src="../Content/icons/' + i + '.svg" style="width:50px;height:50px;" /></td>';
            html += '<td class="text-center" > ' + hayvanlarYem[i].HAYVAN_ADI + "</td>";
            html += '<td class="text-center">' + hayvanlarYem[i].YEM_MIKTARI + " kg" + "</td>";
            html += '<td class="text-center">' + hayvanlarYem[i].YEM_FIYATI + " TL" + "</td>";
            html += '<td class="text-center">' + `<input type="button" onclick="purchaseFeed('`+ item.HAYVAN_ADI + "',"+item.YEM_MIKTARI + `,` + item.YEM_FIYATI + `);" class="btn btn-info" value="Satın Al">` + "</td>";
            html += "<tr>"
        });
        $('#yemTablosu').html(html);
    }, function (response) { console.log(response) });
}

function purchaseFeed(animalName, feedAmount, feedPrice) {
    debugger;
    var dialog = bootbox.dialog({
        title: 'Yem Satışı',
        message: "<p><b>" + feedAmount + "</b> kiloluk " + animalName+" yemi satın almak istiyor musunuz ?</p>" +
            '\nFiyat: ' + feedPrice + ' TL',
        buttons: {
            ok: {
                label: "EVET",
                className: 'btn-info',
                callback: function () {
                    yemSatınAl(feedAmount, feedPrice);
                }
            },
            cancel: {
                label: "HAYIR!",
                className: 'btn-danger',
                callback: function () {
                    bootbox.alert("İptal Edildi");
                }
            }
        }
    });
}
function yemSatınAl(feedAmount, feedPrice) {
    bootbox.alert("Satıldı");
}