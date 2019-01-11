

$(document).ready(function () {
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
function alertKullanici() {
    if ($("#kullaniciAdi").val() == "") {
        alert("Lütfen Tüm alanları doldurunuz");
    }
    else {
        alert("İşleminiz gerçekleşti");
        window.location = "LoginPage";
    }
}