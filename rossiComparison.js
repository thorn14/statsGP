var myChart = Highcharts.chart('rossiComparison', {

  title: {
      text: 'ROSSI Championship Season History'
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
      data: [16,16,29,40,56],
      legendIndex: 56
    },
    {
      name: "2017",
      data: [16,36,56,62,62,75,83,108,119,132,141,157,157,168,168,188,197,208],
      legendIndex: 208
    },
    {
      name: "2016",
      data: [13, 33, 33, 58, 78, 78, 103, 119, 127, 140, 160, 176, 196, 212, 212, 232, 252, 265],
      legendIndex: 265
    },
    {
      name: "2015",
      data: [25, 41, 66, 82, 102, 118, 138, 163, 179, 195, 211, 236, 247, 263, 283, 296, 312, 325],
      legendIndex: 325
    },
    {
      name: "2014",
      data: [13,33,53,69,89,100,113,129,145,161,186,186,202,227,247,267],
      legendIndex: 267
    },
  ]
});
