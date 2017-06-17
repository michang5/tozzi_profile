function hide() {
  var a = $('a[title]');
  if (a.length == 1) {
    $('image[x]').parent().parent().hide();
    a.hide();
    return;
  }
  setTimeout(hide, 500);
}

function top3(data) {
  if (!data.points.length) {
    $('.chart-top3').hide();
    return;
  }
AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": true,
  "marginLeft": 0,
  "marginRight": 0,
  "marginTop": 25,
  "marginBottom": 0,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
  "dataProvider": data.points,
  "valueAxes": [ {
    "id": "percent",
    "title": "投資報酬率(百分比)",
    "axisAlpha": 0,
    "labelFunction": function(value) {
      return value + "%";
    }
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]]" + data.kaede + ":<br><span style='font-size:20px;'>[[kaede]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#CF0000",
    "title": data.kaede,
    "valueField": "kaede",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]]" + data.name0 + ":<br><span style='font-size:20px;'>[[no0]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#FFFF00",
    "title": data.name0,
    "valueField": "no0",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]]" + data.name1 + ":<br><span style='font-size:20px;'>[[no1]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#00FF00",
    "title": data.name1,
    "valueField": "no1",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]]" + data.name2 + ":<br><span style='font-size:20px;'>[[no2]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#0000FF",
    "title": data.name2,
    "valueField": "no2",
    "dashLengthField": "dashLengthLine"
  } ],
  "dataDateFormat": "MM/DD",
  "categoryField": "date",
  "categoryAxis": {
    "dateFormats": [{"period":"DD","format":"MM/DD"},{"period":"WW","format":"MM/DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}],
    "parseDates": true,
    "minPeriod": "DD",
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
} );
hide();
}