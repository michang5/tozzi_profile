var data = [ {
  "date": "2016/3/1",
  "income": 23.5,
  "expenses": 21.1
}, {
  "date": "2016/3/2",
  "income": 26.2,
  "expenses": 30.5
}, {
  "date": "2016/3/3",
  "income": 30.1,
  "expenses": 34.9
}, {
  "date": "2016/3/4",
  "income": 29.5,
  "expenses": 31.1
}, {
  "date": "2016/3/5",
  "income": 30.6,
  "expenses": 28.2,
  "dashLengthLine": 5
}, {
  "date": "2016/3/6",
  "income": 34.1,
  "expenses": 32.9,
  "dashLengthColumn": 5,
  "alpha": 0.2,
  "additional": "(projection)"
} ];

var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": false,
  "marginLeft": 30,
  "marginRight": 8,
  "marginTop": 10,
  "marginBottom": 26,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider": data,
  "valueAxes": [ {
    "axisAlpha": 0,
    "position": "left"
  } ],
  "startDuration": 1,
  "graphs": [ {
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "Income",
    "type": "column",
    "valueField": "income",
    "dashLengthField": "dashLengthColumn"
  }, {
    "id": "graph2",
    "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "Expenses",
    "valueField": "expenses",
    "dashLengthField": "dashLengthLine"
  } ],
  "categoryField": "date",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
} );
