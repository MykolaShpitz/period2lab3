var ajax2 = new XMLHttpRequest();

function getXML() {

        ajax2.onreadystatechange = loadData2;
        let actor = document.getElementById("actor").value;
        ajax2.open("GET", "actor.php?actor=" + actor);
        ajax2.send();
}

function loadData2(){
    if(ajax2.readyState === 4)
    {
        if(ajax2.status === 200)
            console.log(ajax2);

            let rows = ajax2.responseXML.firstChild.children;
            let table = "<table><tr><th>name</th><th>date</th><th>country</th><th>quality</th><th>resolution</th><th>codec</th><th>producer</th><th>director</th><th>carrier</th></tr>";

            for (var i = 0; i < rows.length; i++) {
                table += "<tr>";
                table += "<td>" + rows[i].children[0].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[1].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[2].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[3].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[4].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[5].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[6].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[7].firstChild.nodeValue + "</td>";
                table += "<td>" + rows[i].children[8].firstChild.nodeValue + "</td>";
                table += "</tr>";
            }
            document.getElementById("tbl").innerHTML = "<h3>FILM ACTOR TABLE</h3>";
            document.getElementById("tbl").innerHTML += table;

    }  
}