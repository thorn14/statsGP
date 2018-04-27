var myChart = Highcharts.chart('seasonResults2016', {

  title: {
      text: '2016 MotoGP Championship'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Austria", "Brno", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
  },
  yAxis: {
      title: {
          text: 'Championship Points'
      }
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
      data: [16, 41, 66, 82, 85, 105, 125, 136, 161, 172, 198, 211, 224, 248, 273, 273, 278, 298],
      legendIndex: 298
    },
    {
      name: "ROSSI Valentino",
      data: [13, 33, 33, 58, 78, 78, 103, 119, 127, 140, 160, 176, 196, 212, 212, 232, 252, 265],
      legendIndex: 265
    },
    {
      name: "LORENZO Jorge",
      data: [25, 25, 45, 65, 90, 115, 115, 115, 122, 138, 138, 146, 162, 182, 182, 192, 208, 233],
      legendIndex: 233
    },
    {
      name: "PEDROSA Dani",
      data: [11, 27, 27, 40, 53, 66, 82, 92, 102, 111, 115, 126, 151, 161, 161, 161, 161, 161],
      legendIndex: 161
    },
    {
      name: "VIÑALES Maverick",
      data: [10, 10, 23, 33, 49, 59, 72, 79, 83, 93, 100, 125, 136, 149, 165, 181, 191, 202],
      legendIndex:202
    },
    {
      name: "CRUTCHLOW Cal",
      data: [0, 0, 0, 5, 5, 10, 20, 20, 40, 41, 66, 86, 94, 105, 116, 141, 141, 141],
      legendIndex:141
    },
    {
      name: "DOVIZIOSO Andrea",
      data: [20, 23, 23, 23, 23, 34, 43, 43, 59, 79, 79, 89, 99, 104, 124, 137, 162, 171],
      legendIndex:171
    },
    {
      name: "IANNONE Andrea",
      data: [0, 0, 16, 25, 25, 41, 41, 52, 63, 88, 96, 96, 96, 96, 96, 96, 96, 112],
      legendIndex:112
    },
    {
      name: "ESPARGARO Pol",
      data: [9, 19, 28, 36, 47, 48, 59, 72, 72, 78, 81, 81, 88, 96, 106, 117, 124, 134],
      legendIndex:134
    },
    {
      name: "BARBERA Hector",
      data: [7, 18, 25, 31, 39, 43, 48, 58, 65, 65, 76, 78, 81, 84, 84, 84, 97, 102],
      legendIndex:102
    },
    {
      name: "LAVERTY Eugene",
      data: [4, 17, 21, 28, 33, 36, 39, 48, 53, 53, 63, 67, 69, 71, 71, 73, 77, 77],
      legendIndex:77
    },
    {
      name: "ESPARGARO Aleix",
      data: [5, 10, 21, 32, 42, 49, 49, 49, 51, 51, 51, 60, 60, 69, 82, 82, 85, 93],
      legendIndex:93
    },
    {
      name: "REDDING Scott",
      data: [6, 6, 16, 16, 16, 16, 16, 32, 45, 53, 54, 54, 55, 55, 62, 71, 74, 76],
      legendIndex:76
    },
    {
      name: "BAUTISTA Alvaro",
      data: [3, 9, 14, 14, 21, 21, 29, 29, 35, 35, 35, 41, 47, 54, 63, 67, 76, 82],
      legendIndex:82
    },
    {
      name: "PETRUCCI Danilo",
      data: [0, 0, 0, 0, 9, 17, 23, 23, 23, 28, 37, 44, 49, 49, 57, 64, 70, 74],
      legendIndex:74
    },
    {
      name: "BRADL Stefan",
      data: [0, 9, 15, 17, 23, 25, 29, 37, 37, 37, 39, 39, 43, 49, 55, 60, 60, 63],
      legendIndex:63
    },
    {
      name: "MILLER Jack",
      data: [2, 2, 2, 2, 2, 2, 8, 33, 42, 42, 42, 42, 42, 42, 42, 48, 56, 57],
      legendIndex:57
    },
    {
      name: "SMITH Bradley",
      data: [8, 16, 16, 20, 20, 29, 29, 32, 35, 42, 42, 42, 42, 42, 45, 53, 55, 62],
      legendIndex:62
    },
    {
      name: "PIRRO Michele",
      data: [0, 4, 12, 12, 12, 18, 19, 19, 19, 23, 23, 23, 32, 36, 36, 36, 36, 36],
      legendIndex:36
    },
    {
      name: "RABAT Tito",
      data: [1, 8, 11, 11, 11, 11, 13, 18, 18, 20, 26, 27, 27, 27, 29, 29, 29, 29],
      legendIndex:29
    },
    {
      name: "BAZ Loris",
      data: [0, 0, 1, 4, 5, 5, 5, 5, 5, 8, 21, 21, 21, 21, 21, 21, 32, 32],
      legendIndex:32
    },
    {
      name: "HERNANDEZ Yonny",
      data: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 8, 13, 13, 13, 17, 20, 20, 20],
      legendIndex:20
    },
    {
      name: "LOWES Alex",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
      legendIndex:3
    },
    {
      name: "HAYDEN Nicky",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      legendIndex:1
    },
    {
      name: "JONES Mike",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    },
  ]
});