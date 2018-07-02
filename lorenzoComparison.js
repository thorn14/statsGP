var myChart = Highcharts.chart('lorenzoComparison', {

  title: {
      text: 'LORENZO Championship Season History'
  },
  xAxis: {
      categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
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
      name: "MAX",
      color: '#eeeeee',
      data: [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450],
      legendIndex: 450
    },   
    {
      name: "2018",
      data: [0, 1, 6, 6, 16, 41, 66, 75],
      legendIndex: 75
    },
    {
      name: "2017",
      data: [5,5,12,28,38,46,59,60,65,66,79,90,90,106,116,117,137,137],
      legendIndex: 137
    },
    {
      name: "2016",
      data: [25, 25, 45, 65, 90, 115, 115, 115, 122, 138, 138, 146, 162, 182, 182, 192, 208, 233],
      legendIndex: 233
    },
    {
      name: "2015",
      data: [13,26,37,62,87,112,137,153,166,186,211,224,224,249,265,285,305,330],
      legendIndex: 330
    },
    {
      name: "2014",
      data: [0,6,22,35,45,65,78,81,97,117,137,157,177,203,228,248,263,263],
      legendIndex: 263
    },
  ]
});
