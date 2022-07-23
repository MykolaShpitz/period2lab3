var ajax1 = new XMLHttpRequest();

function getText() {

        ajax1.onreadystatechange = loadData1;
        let genre = document.getElementById("genre").value;
        ajax1.open("GET", "genre.php?genre=" + genre);
        ajax1.send();
}

function loadData1(){
    if(ajax1.readyState === 4)
    {
        if(ajax1.status === 200)
            console.log(ajax1.response);
            document.getElementById("tbl").innerHTML="<h3>FILM GENRE TABLE</h3>";
            document.getElementById("tbl").innerHTML += "<table><tr><th>name</th><th>date</th><th>country</th>"
            + "<th>quality</th><th>resolution</th><th>codec</th>"
            + "<th>producer</th><th>director</th><th>carrier</th></tr>"
            + ajax1.response
            + "</table>";
    }  
}