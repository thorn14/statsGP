var myChart = Highcharts.chart('2017motogpSachsenring', {

  chart: {
      type: 'bar'
  },

  title: {
      text: 'Sachsenring 2017 Finishing Time'
  },
  xAxis: {
      categories: ['Marc MARQUEZ','Jonas FOLGER','Dani PEDROSA','Maverick VIÑALES','Valentino ROSSI','Alvaro BAUTISTA','Aleix ESPARGARO','Andrea DOVIZIOSO','Johann ZARCO','Cal CRUTCHLOW','Jorge LORENZO','Danilo PETRUCCI','Pol ESPARGARO','Bradley SMITH','Jack MILLER','Mika KALLIO','Karel ABRAHAM','Tito RABAT','Loris BAZ','Scott REDDING','Alex RINS']
  },
  yAxis: {
      title: {
          text: 'Finishing Time after Race Winner (Seconds)'
      }
  },
  tooltip: {
      valueSuffix: ' seconds'
  },
  series: [{
      name: 'Time From Winner',
      showInLegend: false,
      data: [0,3.310,11.546,14.253,14.980,16.534,19.736,20.188,21.138,24.210,25.659,31.540,32.179,36.453,37.771,37.852,39.323,41.190,59.850,61.664,61.695]
  }
  ]
});