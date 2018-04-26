var myChart = Highcharts.chart('seasonResults2018', {

  title: {
      text: '2018 MotoGP Championship'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Brno", "Austria", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
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
      data: [20, 20, 45, ],
      legendIndex: 45
    },
    {
      name: "ROSSI Valentino",
      data: [16, 16, 29, ],
      legendIndex: 29
    },
    {
      name: "LORENZO Jorge",
      data: [0, 1, 6, ],
      legendIndex: 6
    },
    {
      name: "PEDROSA Dani",
      data: [9, 9, 18, ],
      legendIndex: 18
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 21, 41, ],
      legendIndex: 41
    },
    {
      name: "CRUTCHLOW Cal",
      data: [13, 38, 38, ],
      legendIndex: 38
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [25, 35, 46, ],
      legendIndex: 46
    },
    {
      name: "IANNONE Andrea",
      data: [7, 15, 31, ],
      legendIndex: 31
    },
    {
      name: "ESPARGARO Pol",
      data: [0, 5, 8, ],
      legendIndex: 8
    },
    {
      name: "ESPARGARO Aleix",
      data: [0, 0, 6, ],
      legendIndex: 6
    },
    {
      name: "REDDING Scott",
      data: [0, 4, 4, ],
      legendIndex: 4
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 3, 4, ],
      legendIndex: 4
    },
    {
      name: "PETRUCCI Danilo",
      data: [11, 17, 21, ],
      legendIndex: 21
    },
    {
      name: "RINS Alex",
      data: [0, 16, 16, ],
      legendIndex: 16
    },
    {
      name: "MILLER Jack",
      data: [6, 19, 27, ],
      legendIndex: 26
    },
    {
      name: "SMITH Bradley",
      data: [0, 0, 0, ],
      legendIndex: 0
    },
      {
      name: "MORBIDELLI Franco",
      data: [4, 6, 6, ],
      legendIndex: 6
    },
    {
      name: "SYAHRIN Hafizh",
      data: [2, 9, 9, ],
      legendIndex: 9
    },
    {
      name: "RABAT Tito",
      data: [5, 14, 22, ],
      legendIndex: 22
    },
    {
      name: "SIMEON Xavier",
      data: [0, 0, 0, ],
      legendIndex:0
    },
    {
      name: "LUTHI Thomas",
      data: [0, 0, 0, ],
      legendIndex:0
    },
    {
      name: "NAKAGAMI Takaaki",
      data: [0, 3, 5, ],
      legendIndex:5
    },
    {
      name: "ABRAHAM Karel",
      data: [1, 1, 1, ],
      legendIndex:1
    },
    {
      name: "ZARCO Johann",
      data: [8, 28, 38, ],
      legendIndex: 38
    }
  ]
});