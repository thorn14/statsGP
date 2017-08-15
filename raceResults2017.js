var myChart = Highcharts.chart('raceResults2017', {

  title: {
      text: '2017 Season'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Brno", "Austria", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
  },
  yAxis: {
      title: {
          text: 'Points Per Race'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      reversed: true
  },
  series: [  
    {
      name: "MARQUEZ Marc",
      data: [13, '-', 25, 20, '-', 10, 20, 16, 25, 25, 20],
      legendIndex: 174
    },
    {
      name: "ROSSI Valentino",
      data: [16, 20, 20, 6, '-', 13, 8, 25, 11, 13, 9],
      legendIndex: 141
    },
    {
      name: "LORENZO Jorge",
      data: [5, '-', 7, 16, 10, 8, 13, 1, 5, 1, 13],
      legendIndex: 79
    },
    {
      name: "PEDROSA Dani",
      data: [11, '-', 16, 25, 16, '-', 16, 3, 16, 20, 16],
      legendIndex: 139
    },
    {
      name: "VIÑALES Maverick",
      data: [25, 25, '-', 10, 25, 20, 6, '-', 13, 16, 10],
      legendIndex: 150
    },
    {
      name: "CRUTCHLOW Cal",
      data: ['-', 16, 13, '-', 11, '-', 5, 13, 6, 11, 1],
      legendIndex: 76
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [20, '-', 10, 11, 13, 25, 25, 11, 8, 10, 25],
      legendIndex: 158
    },
    {
      name: "IANNONE Andrea",
      data: ['-', 0, 9, '-', 6, 6, 0, 7, '-', 0, 5],
      legendIndex: 33
    },
    {
      name: "ESPARGARO Pol",
      data: [0, 2, '-', '-', 4, '-', 0, 5, 3, 7, '-'],
      legendIndex: 21
    },
    {
      name: "BARBERA Hector",
      data: [3, 3, 2, 4, '-', 2, 7, 0, '-', 0, 0],
      legendIndex: 21
    },
    {
      name: "ESPARGARO Aleix",
      data: [10, '-', 0, 7, '-', '-', '-', 6, 9, 8, 3],
      legendIndex: 43
    },
    {
      name: "REDDING Scott",
      data: [9, 8, 4, 5, '-', 4, 3, '-', 0, 0, 4],
      legendIndex: 37
    },
    {
      name: "BAUTISTA Alvaro",
      data: ['-', 13, 1, '-', '-', 11, 9, '-', 10, '-', 8],
      legendIndex: 52
    },
    {
      name: "PETRUCCI Danilo",
      data: ['-', 9, 8, 9, '-', 16, '-', 20, 4, 9, '-'],
      legendIndex: 75
    },
    {
      name: "RINS Alex",
      data: [7, '-', '-', '-', '-', '-', '-', 0, 0, 5, 0],
      legendIndex: 12
    },
    {
      name: "MILLER Jack",
      data: [8, 7, 6, '-', 8, 1, '-', 10, 1, 2, '-'],
      legendIndex: 43
    },
    {
      name: "SMITH Bradley",
      data: [0, 1, 0, 2, 3, 0, '-', '-', 2, '-', 0],
      legendIndex: 8
    },
    {
      name: "PIRRO Michele",
      data: ['-', '-', '-', '-', '-', 7, '-', '-', '-','-', '-'],
      legendIndex: 7
    },
    {
      name: "RABAT Tito",
      data: [1, 4, 3, '-', 5, 5, 1, 4, 0, 0, 0],
      legendIndex: 23
    },
    {
      name: "BAZ Loris",
      data: [4, 5, '-', 3, 7, 0, 4, 8, 0, '-', 7],
      legendIndex: 38
    },
    {
      name: "FOLGER Jonas",
      data: [6, 10, 5, 8, 9, 3, 10, '-', 20, 6, '-'],
      legendIndex: 77
    },
    {
      name: "GUINTOLI Sylvain",
      data: ['-', '-', '-', '-', 1, 0, 0, '-', '-', '-', '-'],
      legendIndex: 1
    },
    {
      name: "KALLIO Mika",
      data: ['-', '-', '-', '-', '-', '-', '-', '-', 0, '-', 6],
      legendIndex: 6
    },
    {
      name: "TSUDA Takuya",
      data: ['-', '-', '-', 0, '-', '-', '-', '-', '-', '-', '-'],
      legendIndex: 0
    },
    {
      name: "LOWES Sam",
      data: [0, '-', '-', 0, 2, 0, 0, '-', '-', 0, 0],
      legendIndex: 2
    },
    {
      name: "ZARCO Johann",
      data: ['-', 11, 11, 13, 20, 9, 11, 2, 7, 4, 11],
      legendIndex: 99
    },
    {
      name: "ABRAHAM Karel",
      data: [2, 6, '-', 1, '-', 0, 2, 9, 0, 3, 2],
      legendIndex: 25
    }
  ]
});