$("#modalImg").on("show.bs.modal", (ev) => {
    var source = $(ev.relatedTarget);
    var title = source.find("img").attr("alt");
    var img = source.find("img").attr("src");
    var desc = source.find(".img-desc").html();

    var modal = $("#modalImg");
    modal.find(".modal-title").html(title);
    modal.find(".img").attr("src", img);
    modal.find(".img-desc").html(desc);
    modal.find(".img-download").attr("href", img);
});
