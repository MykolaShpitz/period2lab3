var ajax = new XMLHttpRequest();

function getJSON() {

        ajax.onreadystatechange = loadData;
        let date_from = document.getElementById("date_from").value;
        let date_to = document.getElementById("date_to").value;
        ajax.open("GET", "year_release.php?date_from=" + date_from +"&date_to=" +date_to );
        ajax.send();
}

function loadData(){
    if(ajax.readyState === 4)
    {
        if(ajax.status === 200)
            console.log(ajax);

            let res = JSON.parse(ajax.response);
            let table_JSON = "<table><tr><th>name</th><th>date</th><th>country</th><th>quality</th><th>resolution</th><th>codec</th><th>producer</th><th>director</th><th>carrier</th></tr>";

            for (var i = 0; i < res.length; i++) {
                table_JSON += "<tr>";
                table_JSON += "<td>" + res[i].name + "</td>";
                table_JSON += "<td>" + res[i].date + "</td>";
                table_JSON += "<td>" + res[i].country + "</td>";
                table_JSON += "<td>" + res[i].quality + "</td>";
                table_JSON += "<td>" + res[i].resolution + "</td>";
                table_JSON += "<td>" + res[i].codec + "</td>";
                table_JSON += "<td>" + res[i].producer + "</td>";
                table_JSON += "<td>" + res[i].director + "</td>";
                table_JSON += "<td>" + res[i].carrier + "</td>";
                table_JSON += "</tr>";
            }
            table_JSON +="</table>";
            document.getElementById("tbl").innerHTML = "<h3>TABLE OF FILMS FOR THE SELECTED PERIOD</h3>"
            document.getElementById("tbl").innerHTML += table_JSON;

    }  
}