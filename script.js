document.getElementById("submit").addEventListener("click", function () {
    const textValue = document.getElementById("text").value
    if (textValue.length !== null) {
        document.getElementById("cards").style.visibility = "visible"
        document.getElementById("lists").innerHTML += "<li>" + textValue + "</li>"
            + "<input type=\"button\" value=\"Del\" id=\"del\"/>"
        document.getElementById("text").value = "";                     //do not write x="", coz x is a copy, not exact location
        document.getElementById("del").addEventListener("click", function () {
            lists.value = "";
        })
    }
})