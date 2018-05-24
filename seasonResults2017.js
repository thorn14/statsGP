var myChart = Highcharts.chart('seasonResults2017', {

  title: {
      text: '2017 MotoGP Championship'
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
      data: [13,13,38,58,58,68,88,104,129,154,174,174,199,224,244,269,282,298],
      legendIndex: 298
    },
    {
      name: "ROSSI Valentino",
      data: [16,36,56,62,62,75,83,108,119,132,141,157,157,168,168,188,197,208],
      legendIndex: 208
    },
    {
      name: "LORENZO Jorge",
      data: [5,5,12,28,38,46,59,60,65,66,79,90,90,106,116,117,137,137],
      legendIndex: 137
    },
    {
      name: "PEDROSA Dani",
      data: [11,11,27,52,68,68,84,87,103,123,139,148,150,170,170,174,185,210],
      legendIndex: 210
    },
    {
      name: "VIÑALES Maverick",
      data: [25,50,50,60,85,105,111,111,124,140,150,170,183,196,203,219,226,230],
      legendIndex: 230
    },
    {
      name: "CRUTCHLOW Cal",
      data: [0,16,29,29,40,40,45,58,64,75,76,89,92,92,92,103,104,112],
      legendIndex: 112
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [20,20,30,41,54,79,104,115,123,133,158,183,199,208,233,236,261,261],
      legendIndex: 261
    },
    {
      name: "IANNONE Andrea",
      data: [0,0,9,9,15,21,21,28,28,28,33,33,33,37, 50, 60, 60, 70],
      legendIndex: 70
    },
    {
      name: "ESPARGARO Pol",
      data: [0,2,2,2,6,6,6,11,14,21,21,26, 31, 37, 42, 49, 55, 55],
      legendIndex: 55
    },
    {
      name: "BARBERA Hector",
      data: [3, 6, 8, 12, 12, 14, 21, 21, 21, 21, 21, 23, 23, 23, 25, 25, 27, 28],
      legendIndex: 28
    },
    {
      name: "ZARCO Johan",
      data: [0, 11, 22, 35, 55, 64, 75, 77, 84, 88, 99, 109, 110, 117, 125, 138, 154, 174],
      legendIndex: 174
    },
    {
      name: "ESPARGARO Aleix",
      data: [10, 10, 10, 17, 17, 17, 17, 23, 32, 40, 43, 43, 43, 53, 62, 62, 62, 62],
      legendIndex: 62
    },
    {
      name: "REDDING Scott",
      data: [9, 17, 21, 26, 26, 30, 33, 33, 33, 33, 37, 45, 54, 56, 56, 61, 64, 64],
      legendIndex: 64
    },
    {
      name: "BAUTISTA Alvaro",
      data: [0, 13, 14, 14, 14, 25, 34, 34, 44, 44, 52, 58, 62, 70, 70, 70, 75, 75],
      legendIndex: 75
    },
    {
      name: "PETRUCCI Danilo",
      data: [0, 9, 17, 26, 26, 42, 42, 62, 66, 75, 75, 75, 95, 95, 111, 111, 121, 124],
      legendIndex: 124
    },
    {
      name: "MILLER Jack",
      data: [8, 15, 21, 21, 29, 30, 30, 40, 41, 43, 43, 43, 53, 56, 56, 65, 73, 82],
      legendIndex: 82
    },
    {
      name: "SMITH Bradley",
      data: [0, 1, 1, 3, 6, 6, 6, 6, 8, 8, 8, 8, 14, 14, 14, 20, 24, 29],
      legendIndex: 29
    },
    {
      name: "PIRRO Michele",
      data: [0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 18, 18, 18, 18, 18, 25],
      legendIndex: 25
    },
    {
      name: "RABAT Tito",
      data: [1, 5, 8, 8, 13, 18, 19, 23, 23, 23, 23, 27, 27, 28, 29, 29, 29, 35],
      legendIndex: 35
    },
    {
      name: "BAZ Loris",
      data: [4, 9, 9, 12, 19, 19, 23, 31, 31, 31, 38, 39, 39, 39, 45, 45, 45, 45],
      legendIndex: 45
    },
    {
      name: "GUINTOLI Sylvain",
      data: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      legendIndex: 1
    },
    {
      name: "NAKASUGA Katsuyuki",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
      legendIndex: 4
    },
    {
      name: "LOWES Sam",
      data: [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5],
      legendIndex: 5
    },
    {
      name: "VAN DER MARK Michael",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      legendIndex: 0
    },
    {
      name: "KALLIO Mika",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 11, 11, 11, 11, 11],
      legendIndex: 11
    },
    {
      name: "ABRAHAM Karel",
      data: [2, 8, 8, 9, 9, 9, 11, 20, 20, 23, 25, 28, 28, 28, 28, 30, 30, 32],
      legendIndex: 32
    },
    {
      name: "RINS Alex",
      data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 12, 19, 27, 27, 38, 46, 46, 59],
      legendIndex: 59
    },
    {
      name: "FOLGER Jonas",
      data: [6, 16, 21, 29, 38, 41, 51, 51, 71, 77, 77, 77, 84, 84, 84, 84, 84, 84],
      legendIndex: 84
    }
  ]
});