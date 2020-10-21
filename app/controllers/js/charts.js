
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

    function Cronograma() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['Primera semana', 'Semana 1', 'spring',
         new Date(2020, 9, 14), new Date(2020, 9, 18), null, 100, null],
         ['Semana 2', 'Semana 2', 'spring',
         new Date(2020, 9, 21), new Date(2020, 9, 25), null, 100, null],
        
      ]);

      var options = {
        width: 1000,
        height: 400,
        gantt: {
          trackHeight: 30
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('cronograma'));
      chart.draw(data, options);
    }

function percentRealice() {
    var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['Restante',     48],
    ['Avance',     52]
    ]);

    var options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
        color: 'white',
    },
    legend: 'none',
    width: 500,
    height: 400,
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
    width: 470,
    height: 400
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}