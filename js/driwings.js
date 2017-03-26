$("#modalImg").on("show.bs.modal", (ev) => {
    var source = $(ev.relatedTarget);
    var title = source.find("img").attr("alt");
    var img = "img/" + source.find("img").data("img") + "_min.png";
    var img_full = "img/" + source.find("img").data("img") + ".png";
    var desc = source.find(".img-desc").html();

    var modal = $("#modalImg");
    modal.find(".modal-title").html(title);
    modal.find(".img").attr("src", img);
    modal.find(".img-desc").html(desc);
    modal.find(".img-download").attr("href", img_full);
});

var em = [68, 72, 73, 83, 70, 68, 83, 9, 67, 85, 78, 80, 78, 73, 64, 84, 103, 64, 74, 70, 78, 75, 9, 68, 72, 74];
var k = 39;

$("#modalContact").on("show.bs.modal", (ev) => {
    var modal = $("#modalContact");
    var btn = modal.find(".button-email");
    var btnl = modal.find(".button-email-literal");
    var dem = em.map(c => String.fromCharCode(c ^ k)).join("");
    btn.attr("href", "mailto:" + dem)
    btnl.html(dem);
});

$(() => {
    $("a[href^=http]").attr("target", "_blank");
    $(".contactus").attr("data-toggle", "modal");
    $(".contactus").attr("data-target", "#modalContact");
});
