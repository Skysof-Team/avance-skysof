
        // Load the Visualization API and the corechart package.
        // google.charts.load('current', {'packages':['corechart']});
        google.charts.load('current', {
            packages: ['corechart', 'gauge']
        });
        google.charts.setOnLoadCallback(function () {
            // begin drawing
              drawChart1();
              percentRealice();
        });
        google.charts.load('current', {'packages':['gantt']});

        // Set a callback to run when the Google Visualization API is loaded.
        // google.charts.setOnLoadCallback(drawChart);
        // google.charts.setOnLoadCallback(drawChart1);
        // google.charts.setOnLoadCallback(percentRealice);
        google.charts.setOnLoadCallback(Cronograma);

    

function percentRealice() {
    var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['Restante',     38],
    ['Avance',     62]
    ]);

    var options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
        color: 'white',
    },
    legend: 'none',
    width: 300,
    height: 300,
    slices: {
        1: { color: '#175f92' },
        0: { color: 'grey' }
    }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
    ['Secciones', 'percent'],
    ['Programación',     50],
    ['Base de datos',      15],
    ['Diseño de interfaz',  10],
    ['Pruebas de errores', 10],
    ['Manual de usuario',    5],
    ['Maquetación de interfaz',    10]
    ]);

    var options = {
    pieHole: 0.4,
    width: 300,
    height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}