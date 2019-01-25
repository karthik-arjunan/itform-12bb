(function() {
    var a = document.getElementById("employee-address-id"),
        limit = 3; //Define max lines limit

    function limitLines() {
        var l = a.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
        if (l.length > limit) {
            a.value = l.slice(0, limit).join("\n");
        }
    }

    function paste() { //onpaste needs timeout
        setTimeout(limitLines, 1);
    }

    limitLines(); //Like onload

    a.onkeyup = limitLines;
    a.onpaste = paste;
})();
(function() {
    var a = document.getElementById("landlord-address-id"),
        limit = 5; //Define max lines limit

    function limitLines() {
        var l = a.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
        if (l.length > limit) {
            a.value = l.slice(0, limit).join("\n");
        }
    }

    function paste() { //onpaste needs timeout
        setTimeout(limitLines, 1);
    }

    limitLines(); //Like onload

    a.onkeyup = limitLines;
    a.onpaste = paste;
})();
(function() {
    var a = document.getElementById("lender-address-id"),
        limit = 5; //Define max lines limit

    function limitLines() {
        var l = a.value.replace(/\r\n/g, "\n").replace(/\r/g, "").split(/\n/g); //split lines
        if (l.length > limit) {
            a.value = l.slice(0, limit).join("\n");
        }
    }

    function paste() { //onpaste needs timeout
        setTimeout(limitLines, 1);
    }

    limitLines(); //Like onload

    a.onkeyup = limitLines;
    a.onpaste = paste;
})();