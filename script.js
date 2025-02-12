document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll("h2");

    for (var i = 0; i < headers.length; i++) {
        (function (header) {
            var content = header.nextElementSibling;
            content.classList.add("visible");

            header.addEventListener("click", function () {
                if (content.classList.contains("visible")) {
                    content.classList.remove("visible");
                } else {
                    content.classList.add("visible");
                }
            });
        })(headers[i]);
    }
});