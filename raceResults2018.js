var myChart = Highcharts.chart('raceResults2018', {

  title: {
      text: '2018 Season'
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
      data: [20, 0, 25, ],
      legendIndex: 45
    },
    {
      name: "ROSSI Valentino",
      data: [16, 0, 13, ],
      legendIndex: 29
    },
    {
      name: "LORENZO Jorge",
      data: [0, 1, 5, ],
      legendIndex: 6
    },
    {
      name: "PEDROSA Dani",
      data: [9, 0, 9, ],
      legendIndex: 18
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 11, 20, ],
      legendIndex: 41
    },
    {
      name: "CRUTCHLOW Cal",
      data: [13, 25, 0, ],
      legendIndex: 38
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [25, 10, 11, ],
      legendIndex: 46
    },
    {
      name: "IANNONE Andrea",
      data: [7, 8, 16, ],
      legendIndex: 31
    },
    {
      name: "ESPARGARO Pol",
      data: [0, 5, 3, ],
      legendIndex: 8
    },
    {
      name: "ESPARGARO Aleix",
      data: [0, 0, 6, ],
      legendIndex: 6
    },
    {
      name: "REDDING Scott",
      data: [0, 4, 0, ],
      legendIndex: 4
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 0, 1, ],
      legendIndex: 4
    },
    {
      name: "PETRUCCI Danilo",
      data: [11, 6, 4, ],
      legendIndex: 21
    },
    {
      name: "RINS Alex",
      data: [0, 16, 0, ],
      legendIndex: 16
    },
    {
      name: "MILLER Jack",
      data: [6, 13, 7, ],
      legendIndex: 26
    },
    {
      name: "SMITH Bradley",
      data: [0, 0, 0, ],
      legendIndex: 0
    },
      {
      name: "MORBIDELLI Franco",
      data: [4, 2, 0, ],
      legendIndex: 6
    },
    {
      name: "SYAHRIN Hafizh",
      data: [2, 7, 0, ],
      legendIndex: 9
    },
    {
      name: "RABAT Tito",
      data: [5, 9, 8, ],
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
      data: [0, 3, 2, ],
      legendIndex:5
    },
    {
      name: "ABRAHAM Karel",
      data: [1, 0, 0, ],
      legendIndex:1
    },
    {
      name: "ZARCO Johann",
      data: [8, 20, 10, ],
      legendIndex: 38
    }
  ]
});