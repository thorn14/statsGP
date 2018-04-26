var myChart = Highcharts.chart('marquezComparison', {

  title: {
      text: 'MARQUEZ Championship Season History'
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
      reversed: true
  },
  series: [  
    {
      name: "MARQUEZ 2018",
      data: [20,20,45,],
      legendIndex: 45
    },
    {
      name: "MARQUEZ 2017",
      data: [13,13,38,58,58,68,88,104,129,154,174,174,199,224,244,269,282,298],
      legendIndex: 298
    },
    {
      name: "MARQUEZ 2016",
      data: [16,41,66,82,85,105,125,145,170,181,197,210,223,248,273,273,278,298],
      legendIndex:298
    },
    {
      name: "MARQUEZ 2015",
      data: [11,36,36,56,69,69,69,89,114,139,159,159,184,184,197,222,222,242],
      legendIndex: 242
    },
    {
      name: "MARQUEZ 2014",
      data: [25,50,75,100,125,150,175,200,225,250,263,288,289,292,312,312,337,362],
      legendIndex: 362
    },
  ]
});
