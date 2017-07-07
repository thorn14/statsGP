var myChart = Highcharts.chart('raceResults2016', {

  title: {
      text: '2016 Season'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Austria", "Brno", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
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
      data: [16, 25, 25, 16, 3, 20, 20, 20, 25, 11, 16, 13, 13, 25],
      legendIndex: 298
    },
    {
      name: "ROSSI Valentino",
      data: [13, 20, 0, 25, 20, 0, 25, 0, 8, 13, 20, 16, 20, 16],
      legendIndex: 249
    },
    {
      name: "LORENZO Jorge",
      data: [25, 0, 20, 20, 25, 25, 0, 6, 1, 16, 0, 8, 16, 20],
      legendIndex: 233
    },
    {
      name: "PEDROSA Dani",
      data: [11, 16, 0, 13, 13, 13, 16, 4, 10, 9, 4, 11, 25, 10],
      legendIndex: 155
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 0, 13, 10, 16, 10, 13, 7, 4, 10, 7, 25, 11, 13],
      legendIndex: 202
    },
    {
      name: "CRUTCHLOW Cal",
      data: [0, 0, 0, 5, 0, 5, 10, 0, 20, 1, 25, 20, 8, 11],
      legendIndex: 141
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [20, 3, 0, 0, 0, 11, 9, 0, 16, 20, 0, 10, 10, 5],
      legendIndex: 171
    },
    {
      name: "IANNONE Andrea",
      data: [0, 0, 16, 9, 0, 16, 0, 11, 11, 25, 8, 0, 0, 0],
      legendIndex: 112
    },
    {
      name: "ESPARGARO Pol",
      data: [9, 10, 9, 8, 11, 1, 11, 13, 0, 6, 3, 0, 7, 8],
      legendIndex: 134
    },
    {
      name: "BARBERA Hector",
      data: [7, 11, 7, 6, 8, 4, 5, 10, 7, 0, 11, 2, 3, 3],
      legendIndex: 102
    },
    {
      name: "LAVERTY Eugene",
      data: [4, 13, 4, 7, 5, 3, 3, 9, 5, 0, 10, 4, 2, 2],
      legendIndex: 77
    },
    {
      name: "ESPARGARO Aleix",
      data: [5, 5, 11, 11, 10, 7, 0, 0, 2, 0, 0, 9, 0, 9],
      legendIndex: 93
    },
    {
      name: "REDDING Scott",
      data: [6, 0, 10, 0, 0, 0, 0, 16, 13, 8, 1, 0, 1, 0],
      legendIndex: 74
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 6, 5, 0, 7, 0, 8, 0, 6, 0, 0, 6, 6, 7],
      legendIndex: 82
    },
    {
      name: "PETRUCCI Danilo",
      data: [0, 0, 0, 0, 9, 8, 7, 0, 0, 5, 9, 7, 5, 0],
      legendIndex: 75
    },
    {
      name: "BRADL Stefan",
      data: [0, 9, 6, 2, 6, 2, 4, 8, 0, 0, 2, 0, 4, 6],
      legendIndex: 63
    },
    {
      name: "MILLER Jack",
      data: [2, 0, 0, 0, 0, 0, 6, 25, 9, 0, 0, 0, 0, 0],
      legendIndex: 57
    },
    {
      name: "SMITH Bradley",
      data: [8, 8, 0, 4, 0, 9, 0, 3, 3, 7, 0, 0, 0, 0],
      legendIndex: 62
    },
    {
      name: "PIRRO Michele",
      data: [0, 4, 8, 0, 0, 6, 1, 0, 0, 4, 0, 0, 9, 4],
      legendIndex: 36
    },
    {
      name: "RABAT Tito",
      data: [1, 7, 3, 0, 0, 0, 2, 5, 0, 2, 6, 1, 0, 0],
      legendIndex: 29
    },
    {
      name: "BAZ Loris",
      data: [0, 0, 1, 3, 4, 0, 0, 0, 0, 3, 13, 0, 0, 0],
      legendIndex: 35
    },
    {
      name: "HERNANDEZ Yonny",
      data: [0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0],
      legendIndex: 20
    },
    {
      name: "LOWES Alex",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
      legendIndex: 3
    },
    {
      name: "HAYDEN Nicky",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      legendIndex: 1
    }
  ]
});