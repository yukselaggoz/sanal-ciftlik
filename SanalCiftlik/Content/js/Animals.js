var hayvanlarHayvan = {
    0: { HAYVAN_ADI: "TAVUK", FIYAT: 10, NO: 1 },
    1: { HAYVAN_ADI: "İNEK", FIYAT: 15000, NO: 2 },
    2: { HAYVAN_ADI: "ÖKÜZ", FIYAT: 10000, NO: 3 },
    3: { HAYVAN_ADI: "TAVŞAN", FIYAT: 10, NO: 4 },
    4: { HAYVAN_ADI: "HOROZ", FIYAT: 50, NO: 5 },
    5: { HAYVAN_ADI: "AT", FIYAT: 20000, NO: 6 },
    6: { HAYVAN_ADI: "ARI", FIYAT: 4000, NO: 7 },
    7: { HAYVAN_ADI: "KEÇİ", FIYAT: 1000, NO: 8 },
    8: { HAYVAN_ADI: "KOYUN", FIYAT: 1000, NO: 9 },
    9: { HAYVAN_ADI: "DEVE", FIYAT: 40000, NO: 10 },
};
$(document).ready(function () {
    if (valAnimals == 1) {
    Get_Kullanici("http://localhost:40612/home/get_kullanici");
    }
});

function Get_Kullanici(url) {
    CallAjax("GET", url, null, function (response) {
        $("#imageHeaderUser1").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#imageHeaderUser2").attr("src", "../Content/img/" + response[0].KULLANICI_AD + ".jpg");
        $("#aDepo").attr("href", "http://localhost:24584/Home/Store?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aYem").attr("href", "http://localhost:24584/Home/Feeds?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aDenemeSayfasi").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));
        $("#aLogo").attr("href", "http://localhost:24584/Home/MainPage?userName=" + response[0].KULLANICI_AD + "&password=" + Base64.encode(response[0].KULLANICI_SIFRE));

        var html = null;
        $.each(hayvanlarHayvan, function (i, item) {
            html += "<tr>"
            html += '<td class="text-center"><img src="../Content/icons/' + i + '.svg" style="width:50px;height:50px;" /></td>';
            html += '<td class="text-center" > ' + hayvanlarHayvan[i].HAYVAN_ADI + "</td>";
            html += '<td class="text-center">' + hayvanlarHayvan[i].FIYAT + " TL" + "</td>";
            html += '<td class="text-center">' + `<input type="button" onclick="purchaseAnimal(` + item.NO + `,` + item.FIYAT + `,'` + item.HAYVAN_ADI + `','` + response[0].KULLANICI_AD + `');" class="btn btn-info" value="Satın Al">` + "</td>";
            html += "</tr>";
        });
        $('#hayvanTablosu').html(html);
    }, function (response) { console.log(response) });
}
function purchaseAnimal(animalNo,animalPrice,animalName,userName) {
    var dialog = bootbox.dialog({
        title: 'Hayvan Satışı' ,
        message: "<p><b>" + animalName + "</b> hayvanını satın almak istiyor musunuz ?</p>" +
            '\nFiyat: ' + animalPrice + ' TL',
        buttons: {
            ok: {
                label: "EVET",
                className: 'btn-info',
                callback: function () {
                    hayvanSatınAl(animalNo, userName);
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
function hayvanSatınAl(animalNo, userName) {
    var data = { userName: userName, animalNo: animalNo };
    debugger;
    CallAjax("GET", "http://localhost:40612/home/Hayvan_Sat", data, function (response) { bootbox.alert(response); }, function (response) { console.log(response) });
}