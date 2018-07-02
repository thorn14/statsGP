var myChart = Highcharts.chart('doviziosoComparison', {

  title: {
      text: 'DOVIZIOSO Championship Season History'
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
      data: [25, 35, 46, 46, 46, 66, 66, 79],
      legendIndex: 79
    },   
    {
      name: "2017",
      data: [20,20,30,41,54,79,104,115,123,133,158,183,199,208,233],
      legendIndex: 233
    },
    {
      name: "2016",
      data: [20, 23, 23, 23, 23, 34, 43, 43, 59, 79, 79, 89, 99, 104, 124, 137, 162, 171],
      legendIndex:171
    },
    {
      name: "2015",
      data: [20,40,60,67,83,83,83,87,87,94,104,120,128,139,150,153,153,162],
      legendIndex: 162
    },
    {
      name: "2014",
      data: [7,18,26,36,44,64,72,81,91,102,115,115,126,139,147,160],
      legendIndex: 160
    },
  ]
});
