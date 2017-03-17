
function calculate(data) {
  if (data.records.length == 0) return [];

  var price = data.price;
  var records = [];
  var base = 0;
  var gain = 0;
  var total = 0;
  var stocks = {};
  var points = {};

  var dates = Object.keys(price['1314']).sort();
  for (var i in data.records) records.push(data.records[i]);
  for (var i in dates) records.push({ 'date': dates[i] + ' 14:00:00' });
  records.sort(function (a, b) { return (a.date < b.date)? -1: 1; });

  for (var i in records) {
    var r = records[i];
    if (r.type) {
      var id = /[0-9][0-9A-Z]+$/.exec(r.name)[0];
      if (!stocks[id]) stocks[id] = [];
      var stock = stocks[id];
      if (r.type == '賣') {
        total -= r.total;
        var cost = 0;
        var left = r.share;
        for (var j in stock) {
          var s = stock[j];
          if (s.share >= left) {
            cost += left * s.price;
            s.share -= left;
            break;
          }
          cost += s.share * s.price;
          left -= s.share;
          s.share = 0;
        }
        r.gain = r.total - cost;
        gain += r.gain;
      }
      else { //買
        total += r.total;
        if (total > base) base = total;
        stocks[id].push({price: r.price, share: r.share})
      }
    }
    var p = {};
    p.date = r.date.toString().substr(0, 5);
    p.value = 0;
    p.price = 0;
    for (var k in stocks) {
        var stock = stocks[k];
        for (var j in stock) {
            var s = stock[j];
if (!price[k]) { console.log(k); continue; }
            p.value += s.share * price[k][p.date];
            p.price += s.share * s.price;
        }
    }
    p.rate = Math.round((gain + p.value - p.price) / base * 1000) / 10.0;
    p.price = p.price / 1000;
    p.value = Math.round(p.value / 100) / 10.0;
    p.base = Math.round(base / 100) / 10.0;
    p.gain = Math.round(gain / 100) / 10.0;
    points[p.date] = p;
  }
  var arr = [];
  var dates = Object.keys(points).sort();
  for (var i in dates) arr.push(points[dates[i]]);
  console.log(arr);
  return arr;
}

function hide() {
  var a = $('a[title]');
  if (a.length == 1) {
    $('image[x]').parent().parent().hide();
    a.hide();
    return;
  }
  setTimeout(hide, 500);
}

function draw(points) {
  if (!points.length) {
    $('#section-4').hide();
    return;
  }
var chart = AmCharts.makeChart( "chartdiv", {
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
  "dataProvider": points,
  "valueAxes": [ {
    "id": "money",
    "title": "本金/持股/獲利(千元)",
    "axisAlpha": 0,
    "position": "left"
  }, {
    "id": "percent",
    "title": "投資報酬率(百分比)",
    "axisAlpha": 0,
    "position": "right",
    "labelFunction": function(value) {
      return value + "%";
    }
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueAxis": "money",
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "本金",
    "type": "column",
    "valueField": "base",
    "dashLengthField": "dashLengthColumn"
  }, {
    "valueAxis": "money",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "持股價值",
    "valueField": "value",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "money",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "已實現獲利",
    "valueField": "gain",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "投報率",
    "valueField": "rate",
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
return chart;
}
