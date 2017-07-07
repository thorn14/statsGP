var myChart = Highcharts.chart('seasonResults2017', {

  title: {
      text: '2017 MotoGP Championship'
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
      name: "MARQUEZ Marc",
      data: [13,13,38,58,58,68,88,104,129],
      legendIndex: 129
    },
    {
      name: "ROSSI Valentino",
      data: [16,36,56,62,62,75,83,108,119],
      legendIndex: 119
    },
    {
      name: "LORENZO Jorge",
      data: [5,5,12,28,38,46,59,60,65],
      legendIndex: 65
    },
    {
      name: "PEDROSA Dani",
      data: [11,11,27,52,68,68,84,87,103],
      legendIndex: 103
    },
    {
      name: "VIÑALES Maverick",
      data: [25,50,50,60,85,105,109,109,122],
      legendIndex: 122
    },
    {
      name: "CRUTCHLOW Cal",
      data: [0,16,29,29,40,40,45,58,64],
      legendIndex: 64
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [20,20,30,41,54,79,104,115,123],
      legendIndex: 123
    },
    {
      name: "IANNONE Andrea",
      data: [0,0,9,9,15,21,21,28,28],
      legendIndex: 28
    },
    {
      name: "ESPARGARO Pol",
      data: [0,2,2,2,6,6,6,11,14],
      legendIndex: 14
    },
    {
      name: "BARBERA Hector",
      data: [3,6,8,12,12,14,21,21,21],
      legendIndex: 21
    },
    {
      name: "ZARCO Johan",
      data: [0,11,22,35,55,64,75,77,84],
      legendIndex: 84
    },
    {
      name: "ESPARGARO Aleix",
      data: [10,10,10,17,17,17,17,23,32],
      legendIndex: 32
    },
    {
      name: "REDDING Scott",
      data: [0],
      legendIndex: 0
    },
    {
      name: "BAUTISTA Alvaro",
      data: [0],
      legendIndex: 0
    },
    {
      name: "PETRUCCI Danilo",
      data: [0,9,17,26,26,42,42,62,66],
      legendIndex: 66
    },
    {
      name: "MILLER Jack",
      data: [0],
      legendIndex: 0
    },
    {
      name: "SMITH Bradley",
      data: [0],
      legendIndex: 0
    },
    {
      name: "PIRRO Michele",
      data: [0],
      legendIndex: 0
    },
    {
      name: "RABAT Tito",
      data: [0],
      legendIndex: 0
    },
    {
      name: "BAZ Loris",
      data: [0],
      legendIndex: 0
    },
    {
      name: "HERNANDEZ Yonny",
      data: [0],
      legendIndex: 0
    },
    {
      name: "LOWES Alex",
      data: [0],
      legendIndex: 0
    },
    {
      name: "FOLGER Jonas",
      data: [6,16,21,29,38,41,51,51,71],
      legendIndex: 71
    }
  ]
});