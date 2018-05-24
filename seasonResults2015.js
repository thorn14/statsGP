var myChart = Highcharts.chart('seasonResults2015', {

  title: {
      text: '2015 MotoGP Championship'
  },
  xAxis: {
      categories: ["Losail", "COTA", "Termas de Rio", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Indianapolis", "Brno", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
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
      name: 'MARQUEZ Marc',
      data: [11, 36, 36, 56, 69, 69, 69, 89, 114, 139, 159, 159, 184, 184, 197, 222, 222, 242],
      legendIndex: 242
    },
    {
      name: 'ROSSI Valentino',
      data: [25, 41, 66, 82, 102, 118, 138, 163, 179, 195, 211, 236, 247, 263, 283, 296, 312, 325],
      legendIndex: 325
    },
    {
      name: 'LORENZO Jorge',
      data: [13, 26, 37, 62, 87, 112, 137, 153, 166, 186, 211, 224, 224, 249, 265, 285, 305, 330],
      legendIndex: 330
    },
    {
      name: 'PEDROSA Dani',
      data: [10, 10, 10, 10, 10, 23, 39, 47, 67, 80, 91, 102, 109, 129, 154, 165, 190, 206],
      legendIndex: 206
    },
    {
      name: 'DOVIZIOSO Andrea',
      data: [20, 40, 60, 67, 83, 83, 83, 87, 87, 94, 104, 120, 128, 139, 150, 153, 153, 162],
      legendIndex: 162
    },
    {
      name: 'ESPARGARO Pol',
      data: [7, 7, 15, 26, 35, 45, 45, 56, 64, 73, 81, 81, 81, 88, 88, 96, 103, 114],
      legendIndex: 114
    },
    {
      name: 'ESPARGARO Aleix',
      data: [5, 13, 22, 31, 31, 31, 31, 38, 44, 46, 53, 60, 66, 76, 81, 88, 97, 105],
      legendIndex: 105
    },
    {
      name: 'SMITH Bradley',
      data: [8, 18, 28, 36, 46, 57, 68, 77, 87, 97, 106, 115, 135, 143, 152, 158, 171, 181],
      legendIndex: 181
    },
    {
      name: 'BRADL Stefan',
      data: [0, 0, 1, 1, 1, 1, 9, 9, 9, 9, 11, 11, 11, 11, 11, 11, 17, 17],
      legendIndex: 17
    },
    {
      name: 'IANNONE Andrea',
      data: [16, 27, 40, 50, 61, 81, 94, 107, 118, 129, 142, 150, 159, 172, 172, 188, 188, 188],
      legendIndex: 188
    },
    {
      name: 'BAUTISTA Alvaro',
      data: [0, 1, 1, 2, 3, 5, 11, 11, 13, 13, 16, 22, 23, 26, 26, 28, 29, 31],
      legendIndex: 31
    },
    {
      name: 'REDDING Scott',
      data: [3, 3, 10, 13, 13, 18, 27, 30, 30, 33, 37, 47, 63, 67, 73, 78, 83, 84],
      legendIndex: 84
    },
    {
      name: 'CRUTCHLOW Cal',
      data: [9, 18, 34, 47, 47, 47, 47, 57, 66, 74, 74, 74, 79, 88, 98, 107, 118, 125], 
      legendIndex: 125
    },
    {
      name: 'AOYAMA Hiroshi',
      data: [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      legendIndex: 5
    },
    {
      name: 'HERNANDEZ Yonny', 
      data: [6, 6, 6, 12, 20, 26, 26, 28, 32, 36, 41, 41, 41, 47, 49, 49, 53, 56],
      legendIndex: 56
    },
    {
      name: 'HAYDEN Nicky', 
      data: [0, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 12, 12, 13, 16, 16, 16, 16],
      legendIndex: 16
    },
    {
      name: 'ELIAS Toni', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
      legendIndex: 2
    },
    {
      name: 'BARBERA Hector', 
      data: [1, 5, 8, 10, 13, 16, 16, 16, 19, 20, 20, 23, 23, 23, 30, 30, 33, 33],
      legendIndex: 33
    },
    {
      name: 'PIRRO Michele', 
      data: [0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 12],
      legendIndex: 12
    },
    {
      name: 'PETRUCCI Danilo', 
      data: [4, 10, 15, 19, 25, 32, 39, 44, 51, 57, 63, 83, 93, 93, 93, 97, 107, 113],
      legendIndex: 113
    },
    {
      name: 'DE ANGELIS Alex', 
      data: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
      legendIndex: 2
    },
    {
      name: 'TAKAHASHI Takumi', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
      legendIndex: 4
    },
    {
      name: 'MILLER Jack', 
      data: [0, 2, 6, 6, 6, 6, 11, 11, 12, 12, 12, 12, 16, 16, 16, 17, 17, 17],
      legendIndex: 17
    },
    {
      name: 'LAVERTY Eugene', 
      data: [0, 0, 0, 0, 2, 3, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9],
      legendIndex: 9
    },
    {
      name: 'DI MEGLIO Mike', 
      data: [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 7, 7, 8, 8, 8, 8],
      legendIndex: 8
    },
    {
      name: 'BAZ Loris', 
      data: [0, 0, 2, 2, 6, 10, 13, 14, 14, 14, 15, 15, 28, 28, 28, 28, 28, 28],
      legendIndex: 28
    },
    {
      name: 'NAKASUGA Katsuyuki', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8],
      legendIndex: 8
    },
    {
      name: 'VIÑALES Maverick', 
      data: [2, 9, 15, 20, 27, 36, 46, 52, 57, 62, 62, 67, 69, 74, 74, 84, 92, 97],
      legendIndex: 97
    }
  ]
});