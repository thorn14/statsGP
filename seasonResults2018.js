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
      data: [20, 20, 45, 70, 95, 95, 115, 140],
      legendIndex: 140
    },
    {
      name: "ROSSI Valentino",
      data: [16, 16, 29, 40, 56, 72, 88, 99],
      legendIndex: 99
    },
    {
      name: "LORENZO Jorge",
      data: [0, 1, 6, 6, 16, 41, 66, 75],
      legendIndex: 75
    },
    {
      name: "PEDROSA Dani",
      data: [9, 9, 18, 18, 29, 29, 40, 41],
      legendIndex: 41
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 21, 41, 50, 59, 67, 77, 93],
      legendIndex: 93
    },
    {
      name: "CRUTCHLOW Cal",
      data: [13, 38, 38, 38, 46, 56, 69, 79],
      legendIndex: 79
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [25, 35, 46, 46, 46, 66, 66, 79],
      legendIndex: 79
    },
    {
      name: "IANNONE Andrea",
      data: [7, 15, 31, 47, 47, 60, 66, 71],
      legendIndex: 71
    },
    {
      name: "ESPARGARO Pol",
      data: [0, 5, 8, 13, 18, 23, 28, 32],
      legendIndex: 18
    },
    {
      name: "ESPARGARO Aleix",
      data: [0, 0, 6, 6, 13, 13, 13, 16],
      legendIndex: 13
    },
    {
      name: "REDDING Scott",
      data: [0, 4, 4, 5, 5, 5, 9, 11],
      legendIndex: 11
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 3, 4, 12, 12, 19, 26, 33],
      legendIndex: 33
    },
    {
      name: "PETRUCCI Danilo",
      data: [11, 17, 21, 34, 54, 63, 71, 71],
      legendIndex: 71
    },
    {
      name: "KALLIO Mika",
      data: [0, 0, 0, 6, 6, 6, 6, 6 ],
      legendIndex: 6
    },
    {
      name: "RINS Alex",
      data: [0, 16, 16, 16, 22, 33, 33, 53],
      legendIndex: 53
    },
    {
      name: "MILLER Jack",
      data: [6, 19, 26, 36, 49, 49, 49, 55],
      legendIndex: 55
    },
    {
      name: "SMITH Bradley",
      data: [0, 0, 0, 3, 5, 7, 7, 7],
      legendIndex: 7
    },
      {
      name: "MORBIDELLI Franco",
      data: [4, 6, 6, 13, 16, 17, 19, 19],
      legendIndex: 19
    },
    {
      name: "SYAHRIN Hafizh",
      data: [2, 9, 9, 9, 13, 17, 17, 17],
      legendIndex: 17
    },
    {
      name: "RABAT Tito",
      data: [5, 14, 22, 24, 24, 27, 27, 27],
      legendIndex: 27
    },
    {
      name: "SIMEON Xavier",
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      legendIndex: 0
    },
    {
      name: "LUTHI Thomas",
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      legendIndex: 0
    },
    {
      name: "NAKAGAMI Takaaki",
      data: [0, 3, 5, 9, 10, 10, 10, 10],
      legendIndex: 10
    },
    {
      name: "ABRAHAM Karel",
      data: [1, 1, 1, 1, 1, 1, 4, 4],
      legendIndex: 4
    },
    {
      name: "ZARCO Johann",
      data: [8, 28, 38, 58, 58, 64, 73, 81],
      legendIndex: 81
    }
  ]
});