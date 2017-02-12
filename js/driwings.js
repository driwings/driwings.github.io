$(() => {
    // Page data
    var driwings = [
        {
            name: "Chat wallpapers",
            desc: "You can use these in IM applications like WhatsApp. If you're designing your own chat application, <a href=\"#\">contact us</a>!",
            imgs: [{
                name: "1",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "2",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "3",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            }]
        },
        {
            name: "Cover images",
            desc: "You can use these as cover photos in Facebook or Google+. If you want a custom design for you or your company, <a href=\"#\">contact us</a>!",
            imgs: [{
                name: "1",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "2",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "3",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            }]
        },
        {
            name: "Patterns",
            desc: "Patterns can be used as wallpapers, or as background in webpages, or even in printed material. If you need a custom design for you or your company, <a href=\"#\">contact us</a>!",
            imgs: [{
                name: "1",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "2",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            },
            {
                name: "3",
                img: "img/example.png",
                desc: "Here you tell a little bit about the design. You may go a little more in detail on how or why it was created."
            }]
        },
    ];

    // Actual code
    var templateCategory = _.template($("#templateCategory").html());
    var container = $("#album-container");
    driwings.forEach(category => {
        let render = templateCategory({category});
        container.append(render);
    });
});
