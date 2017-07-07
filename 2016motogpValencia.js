var myChart = Highcharts.chart('2016motogpValencia', {

  chart: {
      type: 'bar'
  },

  title: {
      text: 'Valencia 2016 Finishing Time'
  },
  xAxis: {
      categories: ['Jorge LORENZO', 'Marc MARQUEZ', 'Andrea IANNONE', 'Valentino ROSSI', 'Maverick VIÑALES', 'Pol ESPARGARO', 'Andrea DOVIZIOSO', 'Aleix ESPARGARO', 'Bradley SMITH', 'Alvaro BAUTISTA', 'Hector BARBERA', 'Danilo PETRUCCI', 'Stefan BRADL', 'Scott REDDING', 'Jack MILLER', 'Eugene LAVERTY', 'Tito RABAT', 'Loris BAZ']
  },
  yAxis: {
      title: {
          text: 'Finishing Time after Race Winner (Seconds)'
      }
  },
  series: [{
      name: 'Seconds After Lorenzo',
      data: [0,1.185,6.603,7.668,10.610,18.378,18.417,18.678,25.993,35.065,36.425,42.415,49.823,52.035,55.625,58.254,58.555,66.164]
  }
  ]
});