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
      reversed: true,
      labelFormatter: function () {
        var p = this.name + ' - ' + this.options.legendIndex + ' points';
          return p;
      },
  },
  series: [
    {
      name: "MARQUEZ Marc",
      data: [20, 20, 45, 70, 95],
      legendIndex: 95
    },
    {
      name: "ROSSI Valentino",
      data: [16, 16, 29, 40, 56],
      legendIndex: 56
    },
    {
      name: "LORENZO Jorge",
      data: [0, 1, 6, 6, 16],
      legendIndex: 16
    },
    {
      name: "PEDROSA Dani",
      data: [9, 9, 18, 18, 29],
      legendIndex: 29
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 21, 41, 50, 59],
      legendIndex: 59
    },
    {
      name: "CRUTCHLOW Cal",
      data: [13, 38, 38, 38, 46],
      legendIndex: 46
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [25, 35, 46, 46, 46],
      legendIndex: 46
    },
    {
      name: "IANNONE Andrea",
      data: [7, 15, 31, 47, 47],
      legendIndex: 47
    },
    {
      name: "ESPARGARO Pol",
      data: [0, 5, 8, 13, 18],
      legendIndex: 18
    },
    {
      name: "ESPARGARO Aleix",
      data: [0, 0, 6, 6, 13],
      legendIndex: 13
    },
    {
      name: "REDDING Scott",
      data: [0, 4, 4, 5, 5],
      legendIndex: 5
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 3, 4, 12, 12],
      legendIndex: 12
    },
    {
      name: "PETRUCCI Danilo",
      data: [11, 17, 21, 34, 54],
      legendIndex: 54
    },
    {
      name: "KALLIO Mika",
      data: [0, 0, 0, 6, 6],
      legendIndex: 6
    },
    {
      name: "RINS Alex",
      data: [0, 16, 16, 16, 22],
      legendIndex: 22
    },
    {
      name: "MILLER Jack",
      data: [6, 19, 26, 36, 49],
      legendIndex: 49
    },
    {
      name: "SMITH Bradley",
      data: [0, 0, 0, 3, 5],
      legendIndex: 5
    },
      {
      name: "MORBIDELLI Franco",
      data: [4, 6, 6, 13, 16],
      legendIndex: 16
    },
    {
      name: "SYAHRIN Hafizh",
      data: [2, 9, 9, 9, 13],
      legendIndex: 13
    },
    {
      name: "RABAT Tito",
      data: [5, 14, 22, 24, 24],
      legendIndex: 24
    },
    {
      name: "SIMEON Xavier",
      data: [0, 0, 0, 0, 0],
      legendIndex:0
    },
    {
      name: "LUTHI Thomas",
      data: [0, 0, 0, 0, 0],
      legendIndex:0
    },
    {
      name: "NAKAGAMI Takaaki",
      data: [0, 3, 5, 9, 10],
      legendIndex: 10
    },
    {
      name: "ABRAHAM Karel",
      data: [1, 1, 1, 1, 1],
      legendIndex: 1
    },
    {
      name: "ZARCO Johann",
      data: [8, 28, 38, 58, 58],
      legendIndex: 58
    }
  ]
});