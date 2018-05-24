var myChart = Highcharts.chart('seasonResults2014', {

  title: {
      text: '2014 MotoGP Championship'
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
      data: [25,50,75,100,125,150,175,200,213,238,239,242,262,262,287,312,337,362],
      legendIndex: 362
    },
    {
      name: 'ROSSI Valentino',
      data: [20,28,41,61,81,97,117,128,141,157,173,189,214,214,230,255,275,295],
      legendIndex: 295
    },
    {
      name: 'LORENZO Jorge',
      data: [0,6,22,35,45,65,78,81,97,117,137,157,177,202,227,247,263,263],
      legendIndex: 263
    },
    {
      name: 'PEDROSA Dani',
      data: [16,36,56,72,83,96,112,128,148,161,186,199,215,217,230,230,230,246],
      legendIndex: 246
    },
    {
      name: 'DOVIZIOSO Andrea',
      data: [11,27,34,45,53,63,71,91,99,108,118,129,142,142,153,166,174,187],
      legendIndex: 187
    },
    {
      name: 'ESPARGARO Pol',
      data: [0, 10, 18, 25, 38, 49, 58, 58, 67, 78, 78, 88, 98, 108, 116, 116, 126, 136],
      legendIndex: 136
    },
    {
      name: 'ESPARGARO Aleix',
      data: [13, 20, 21, 30, 37, 44, 54, 67, 77, 77, 85, 92, 92, 112, 117, 117, 117, 126],
      legendIndex: 126
    },
    {
      name: 'SMITH Bradley',
      data: [0, 11, 20, 28, 34, 34, 40, 48, 48, 58, 65, 65, 74, 85, 92, 108, 119, 121],
      legendIndex: 121
    },
    {
      name: 'BRADL Stefan',
      data: [0, 13, 24, 30, 39, 39, 50, 56, 56, 56, 65, 74, 74, 87, 96, 96, 109, 117],
      legendIndex: 117
    },
    {
      name: 'IANNONE Andrea',
      data: [6, 15, 25, 25, 25, 34, 41, 51, 62, 62, 73, 81, 92, 92, 102, 102, 102, 102],
      legendIndex: 102
    },
    {
      name: 'BAUTISTA Alvaro',
      data: [0, 0, 0, 10, 26, 34, 34, 43, 50, 50, 56, 56, 64, 73, 79, 89, 89, 89],
      legendIndex: 89
    },
    {
      name: 'REDDING Scott',
      data: [9, 9, 11, 14, 18, 21, 24, 28, 33, 40, 45, 51, 54, 60, 60, 69, 75, 81],
      legendIndex: 81
    },
    {
      name: 'CRUTCHLOW Cal',
      data: [10, 10, 10, 10, 15, 15, 15, 22, 28, 36, 36, 40, 47, 63, 63, 63, 63, 74], 
      legendIndex: 74
    },
    {
      name: 'AOYAMA Hiroshi',
      data: [5, 9, 15, 19, 21, 23, 24, 24, 28, 34, 37, 39, 43, 51, 54, 62, 67, 68],
      legendIndex: 68
    },
    {
      name: 'HERNANDEZ Yonny', 
      data: [4, 7, 11, 13, 16, 22, 27, 27, 27, 27, 27, 32, 38, 39, 39, 44, 53, 53],
      legendIndex: 53
    },
    {
      name: 'HAYDEN Nicky', 
      data: [8, 13, 18, 23, 23, 23, 27, 27, 29, 29, 29, 29, 29, 36, 38, 44, 44, 47],
      legendIndex: 47
    },
    {
      name: 'ABRAHAM Karel', 
      data: [3, 5, 8, 8, 9, 13, 13, 15, 18, 23, 25, 28, 33, 33, 33, 33, 33, 33],
      legendIndex: 33
    },
    {
      name: 'BARBERA Hector', 
      data: [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 14, 21, 26],
      legendIndex: 26
    },
    {
      name: 'PIRRO Michele', 
      data: [0, 0, 0, 0, 0, 5, 7, 7, 7, 7, 11, 11, 11, 11, 11, 11, 11, 18],
      legendIndex: 18
    },
    {
      name: 'PETRUCCI Danilo', 
      data: [2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 9, 9, 13, 13, 17],
      legendIndex: 17
    },
    {
      name: 'DE ANGELIS Alex', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 7, 7, 14, 14, 14],
      legendIndex: 14
    },
    {
      name: 'EDWARDS Colin', 
      data: [7, 7, 7, 7, 7, 8, 8, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 11],
      legendIndex: 11
    },
    {
      name: 'PARKES Broc', 
      data: [1, 1, 1, 1, 1, 1, 1, 6, 6, 7, 7, 7, 7, 7, 7, 7, 9, 9],
      legendIndex: 9
    },
    {
      name: 'LAVERTY Michael', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 5, 9, 9],
      legendIndex: 9
    },
    {
      name: 'DI MEGLIO Mike', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 6, 9, 9],
      legendIndex: 9
    },
    {
      name: 'NAKASUGA Katsuyuki', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4],
      legendIndex: 4
    },
    {
      name: 'CAMIER Leon', 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      legendIndex: 1
    }
  ]
});