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
      data: [25,50,75,100,125,150,175,200,213,238,239,242,262,262,287,312],
      legendIndex: 312
    },
    {
      name: 'ROSSI Valentino',
      data: [13,33,53,69,89,100,113,129,145,161,186,186,202,227,247,267],
      legendIndex: 267
    },
    {
      name: 'LORENZO Jorge',
      data: [16,29,39,59,72,75,91,111,131,151,171,196,221,241,257,257],
      legendIndex: 257
    },
    {
      name: 'PEDROSA Dani',
      data: [20,36,47,60,76,92,112,125,150,163,179,181,194,194,194,210],
      legendIndex: 210
    },
    {
      name: 'DOVIZIOSO Andrea',
      data: [7,18,26,36,44,64,72,81,91,102,115,115,126,139,147,160],
      legendIndex: 160
    },
    {
      name: 'ESPARGARO Pol',
      data: [8,15,28,39,48,48,57,68,68,78,88,98,106,106,116,126],
      legendIndex: 126
    },
    {
      name: 'ESPARGARO Aleix',
      data: [1,10,17,24,34,47,57,57,65,72,72,92,97,97,97,106],
      legendIndex: 106
    },
    {
      name: 'SMITH Bradley',
      data: [9,17,23,23,29,37,37,47,54,54,63,74,81,97,108,110],
      legendIndex: 110
    },
    {
      name: 'BRADL Stefan',
      data: [11,17,26,26,37,43,43,43,52,61,61,74,83,83,96,104],
      legendIndex: 104
    },
    {
      name: 'IANNONE Andrea',
      data: [10,10,10,19,26,36,47,47,58,66,77,77,87,87,87,87 ],
      legendIndex: 87
    },
    {
      name: 'BAUTISTA Alvaro',
      data: [0,10,26,34,34,43,50,50,56,56,64,73,79,89,89,89 ],
      legendIndex: 89
    },
    {
      name: 'REDDING Scott',
      data: [2,5,9,12,15,19,24,31,36,42,45,51,51,60,66,72 ],
      legendIndex: 72
    },
    {
      name: 'CRUTCHLOW Cal',
      data: [0,0,5,5,5,12,18,26,26,30,37,53,53,53,53,64], 
      legendIndex: 64
    },
    {
      name: 'AOYAMA Hiroshi',
      data: [6,10,12,14,15,15,19,25,28,30,34,42,45,53,58,59 ],
      legendIndex: 59
    },
    {
      name: 'HERNANDEZ Yonny', 
      data: [4,6,9,15,20,20,20,20,20,25,31,32,32,37,46,46 ],
      legendIndex: 46
    },
    {
      name: 'HAYDEN Nicky', 
      data: [5,10,10,10,14,14,16,16,16,16,16,23,25,31,31,34 ],
      legendIndex: 34
    },
    {
      name: 'ABRAHAM Karel', 
      data: [3,3,4,8,8,10,13,18,20,23,28,28,28,28,28,28 ],
      legendIndex: 28
    },
    {
      name: 'BARBERA Hector', 
      data: [0,1,1,1,1,1,1,1,1,1,1,1,2,13,20,25 ],
      legendIndex: 25
    },
    {
      name: 'PIRRO Michele', 
      data: [0,0,0,5,7,7,7,7,11,11,11,11,11,11,11,18 ],
      legendIndex: 18
    },
    {
      name: 'PETRUCCI Danilo', 
      data: [0,0,0,0,0,1,2,2,2,2,2,7,7,11,11,15 ],
      legendIndex: 15
    },
    {
      name: 'DE ANGELIS Alex', 
      data: [0,0,0,0,0,0,0,0,0,1,3,7,7,14,14,14 ],
      legendIndex: 14
    },
    {
      name: 'EDWARDS Colin', 
      data: [0,0,0,1,1,1,1,4,4,4,4,4,4,4,4,4 ],
      legendIndex: 4
    },
    {
      name: 'PARKES Broc', 
      data: [0,0,0,0,0,5,5,6,6,6,6,6,6,6,8,8 ],
      legendIndex: 8
    },
    {
      name: 'LAVERTY Michael', 
      data: [0,0,0,0,0,0,0,2,2,2,2,2,2,5,9,9 ],
      legendIndex: 9
    },
    {
      name: 'DI MEGLIO Mike', 
      data: [0,0,0,0,0,0,0,4,4,4,4,4,4,6,9,9 ],
      legendIndex: 9
    },
    {
      name: 'NAKASUGA Katsuyuki', 
      data: [0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4 ],
      legendIndex: 4
    },
    {
      name: 'CAMIER Leon', 
      data: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
      legendIndex: 1
    }
  ]
});