document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("h2").forEach(header => {
        let content = header.nextElementSibling;
        
        // Проверяем, должен ли текст быть скрытым по умолчанию
        if (header.getAttribute("data-toggle") === "hidden") {
            content.classList.remove("visible"); // Изначально скрыто
        } else {
            content.classList.add("visible"); // Изначально открыто
        }

        header.addEventListener("click", function() {
            content.classList.toggle("visible");
        });
    });
});