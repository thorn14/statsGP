var myChart = Highcharts.chart('raceResults2014', {

  title: {
      text: '2014 Season'
  },
  xAxis: {
      categories: ["Losail", "Termas de Rio", "COTA", "Jerez", "Le Mans", "Mugello", "Catalunya", "Assen", "Sachsenring", "Austria", "Brno", "Silverstone", "Misano", "Aragon", "Motegi", "Phillip Island", "Sepang", "Valencia"]
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
      name: 'MARQUEZ Marc',
      data: [25,25,25,25,25,25,25,25,13,25,1,3,20,0,25,25],
      legendIndex: 312
    },
    {
      name: 'ROSSI Valentino',
      data: [13,20,20,16,20,11,13,16,16,16,25,0,16,25,20,20],
      legendIndex: 267
    },
    {
      name: 'LORENZO Jorge',
      data: [16,13,10,20,13,3,16,20,20,20,20,25,25,20,16,0],
      legendIndex: 257
    },
    {
      name: 'PEDROSA Dani',
      data: [20,16,11,13,16,16,20,13,25,13,16,2,13,0,0,16],
      legendIndex: 210
    },
    {
      name: 'DOVIZIOSO Andrea',
      data: [7,11,8,10,8,20,8,9,10,11,13,0,11,13,8,13],
      legendIndex: 160
    },
    {
      name: 'ESPARGARO Pol',
      data: [8,7,13,11,9,0,9,11,0,10,10,10,8,0,10,10],
      legendIndex: 126
    },
    {
      name: 'ESPARGARO Aleix',
      data: [1,9,7,7,10,13,10,0,8,7,0,20,5,0,0,9],
      legendIndex: 106
    },
    {
      name: 'SMITH Bradley',
      data: [9,8,6,0,6,8,0,10,7,0,9,11,7,16,11,2],
      legendIndex: 110
    },
    {
      name: 'BRADL Stefan',
      data: [11,6,9,0,11,6,0,0,9,9,0,13,9,0,13,8],
      legendIndex: 104
    },
    {
      name: 'IANNONE Andrea',
      data: [10,0,0,9,7,10,11,0,11,8,11,0,10,0,0,0], 
      legendIndex: 87
    },
    {
      name: 'BAUTISTA Alvaro',
      data: [0,10,16,8,0,9,7,0,6,0,8,9,6,10,0,0 ],
      legendIndex: 89
    },
    {
      name: 'REDDING Scott',
      data: [2,3,4,3,3,4,5,7,5,6,3,6,0,9,6,6 ],
      legendIndex: 72
    },
    {
      name: 'CRUTCHLOW Cal',
      data: [0,0,5,0,0,7,6,8,0,4,7,16,0,0,0,11 ],
      legendIndex: 64
    },
    {
      name: 'AOYAMA Hiroshi',
      data: [6,4,2,2,1,0,4,6,3,2,4,8,3,8,5,1 ],
      legendIndex: 59
    },
    {
      name: 'HERNANDEZ Yonny', 
      data: [4,2,3,6,5,0,0,0,0,5,6,1,0,5,9,0 ],
      legendIndex: 46
    },
    {
      name: 'HAYDEN Nicky', 
      data: [5,5,0,0,4,0,2,0,0,0,0,7,2,6,0,3 ],
      legendIndex: 34
    },
    {
      name: 'ABRAHAM Karel', 
      data: [3,0,1,4,0,2,3,5,2,3,5,0,0,0,0,0 ],
      legendIndex: 28
    },
    {
      name: 'BARBERA Hector', 
      data: [0,1,0,0,0,0,0,0,0,0,0,0,1,11,7,5 ],
      legendIndex: 25
    },
    {
      name: 'PIRRO Michele', 
      data: [0,0,0,5,2,0,0,0,4,0,0,0,0,0,0,7 ],
      legendIndex: 18
    },
    {
      name: 'PETRUCCI Danilo', 
      data: [0,0,0,0,0,1,1,0,0,0,0,5,0,4,0,4 ],
      legendIndex: 15
    },
    {
      name: 'DE ANGELIS Alex', 
      data: [0,0,0,0,0,0,0,0,0,1,2,4,0,7,0,0 ],
      legendIndex: 14
    },
    {
      name: 'EDWARDS Colin', 
      data: [0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,0 ],
      legendIndex: 4
    },
    {
      name: 'PARKES Broc', 
      data: [0,0,0,0,0,5,0,1,0,0,0,0,0,0,2,0 ],
      legendIndex: 8
    },
    {
      name: 'LAVERTY Michael', 
      data: [0,0,0,0,0,0,0,2,0,0,0,0,0,3,4,0 ],
      legendIndex: 9
    },
    {
      name: 'DI MEGLIO Mike', 
      data: [0,0,0,0,0,0,0,4,0,0,0,0,0,2,3,0 ],
      legendIndex: 9
    },
    {
      name: 'NAKASUGA Katsuyuki', 
      data: [0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0 ],
      legendIndex: 4
    },
    {
      name: 'CAMIER Leon', 
      data: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
      legendIndex: 1
    }
  ]
});