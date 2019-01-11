var depo = {
    0: { DEPO_KAPASITESI: 1, FIYAT: 10, ADET: 0 },
    1: { DEPO_KAPASITESI: 2, FIYAT: 15000, ADET: 0 },
    2: { DEPO_KAPASITESI: 5, FIYAT: 10000, ADET: 0 },
    3: { DEPO_KAPASITESI: 10, FIYAT: 10, ADET: 0 },
    4: { DEPO_KAPASITESI: 20, FIYAT: 50, ADET: 0 },
    5: { DEPO_KAPASITESI: 50, FIYAT: 20000, ADET: 0 },
    6: { DEPO_KAPASITESI: 100, FIYAT: 4000, ADET: 0 },
    7: { DEPO_KAPASITESI: 250, FIYAT: 1000, ADET: 0 },
    8: { DEPO_KAPASITESI: 500, FIYAT: 1000, ADET: 0 },
    9: { DEPO_KAPASITESI: 1000, FIYAT: 40000, ADET: 0 },
};
$(document).ready(function () {
    if (valStore) {
        Get_Depo("http://localhost:40612/home/get_kullanici");
    }
});

function Get_Depo(url) {
    CallAjax("GET", url, null, function (response) {
        $("#imageHeaderUser1").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser2").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#aHayvanlar").attr("href", "http://localhost:24584/Home/Animals?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aYem").attr("href", "http://localhost:24584/Home/Feeds?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aDenemeSayfasi").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        var html = null;
        depo[0].ADET = response[0].HAYVAN1;
        depo[1].ADET = response[0].HAYVAN2;
        depo[2].ADET = response[0].HAYVAN3;
        depo[3].ADET = response[0].HAYVAN4;
        depo[4].ADET = response[0].HAYVAN5;
        depo[5].ADET = response[0].HAYVAN6;
        depo[6].ADET = response[0].HAYVAN7;
        depo[7].ADET = response[0].HAYVAN8;
        depo[8].ADET = response[0].HAYVAN9;
        depo[9].ADET = response[0].HAYVAN10;

        var html = null;
        $.each(depo, function (i, item) {
            html += "<tr>"
            html += '<td class="text-center" > ' + depo[i].DEPO_KAPASITESI + " adetlik" + "</td>";
            html += '<td class="text-center">' + depo[i].FIYAT + " TL" + "</td>";
            html += '<td class="text-center">' + `<input type="button" onclick="purchaseStore(` + item.DEPO_KAPASITESI + `,` + item.FIYAT + `);" class="btn btn-info" value="Satın Al">` + "</td>";
            html += "<tr>"
        });
        $('#depoTablosu').html(html);
    }, function (response) { console.log(response) });
}
function purchaseStore(storeCapasity,storePrice) {
    var dialog = bootbox.dialog({
        title: 'Depo Satışı',
        message: "<p><b>" + storeCapasity + "</b> adetlik depo satın almak istiyor musunuz ?</p>" +
            '\nFiyat: ' + storePrice + ' TL',
        buttons: {
            ok: {
                label: "EVET",
                className: 'btn-info',
                callback: function () {
                    depoSatınAl(storeCapasity, storePrice);
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
function depoSatınAl(storeCapasity, storePrice) {
    bootbox.alert("Satıldı");
}