var myChart = Highcharts.chart('lorenzoComparison', {

  title: {
      text: 'LORENZO Championship Season History'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Austria", "Brno", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
  },
  yAxis: {
      title: {
          text: 'Championship Points'
      },

  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      reversed: true
  },
  series: [  
    {
      name: "LORENZO 2017",
      data: [5,5,12,28,38,46,59,60,65],
      legendIndex: 65
    },
  {
      name: "LORENZO 2016",
      data: [25, 25, 45, 65, 90, 115, 115, 115, 122, 138, 138, 146, 162, 182, 182, 192, 208, 233],
      legendIndex: 233
    },
    {
      name: "LORENZO 2015",
      data: [13,26,37,62,87,112,137,153,166,186,211,224,224,249,265,285,305,330],
      legendIndex: 330
    },
    {
      name: "LORENZO 2014",
      data: [0,6,22,35,45,65,78,81,97,117,137,157,177,203,228,248,263,263],
      legendIndex: 263
    },
  ]
});
