// var bubbleData = {};

// debugger;

// Bubblechart graph
// for (var l = 0; l < res.counter.length; l++) {
//     var x = res.counter[l][1];
//     var y = res.counter[l][1];
//     var r = res.counter[l][1];
//     bubbleData.push('x: ' + x + "," + "y: " + y + ", " + "r: " + r);
// }


// Bubblechart graph
// var bubbleChart = $("#worChart");
// var myBubbleChart = new Chart(bubbleChart, {
//   type: 'bubble',
//   data: {
//     datasets: [{
//       label: ('Most frequent words for: ' + searchWords),
//       data: bubbleData
//     }],
//     options: {
//       scales: {
//         xAxes: [{
//           ticks: {
//             min: sentLabels
//           }
//         }]
//       } // end scales
//     } // end options
//   } // end data
// }); // end bubbleChart

//       let MyScale = Chart.Scale.extend({
//     /* extensions ... */
// });
//
//     Chart.scaleService.registerScaleType('xAxis', MyScale, scatterData);

//SCATTER Chart
//   var scatterData = {};
//   var xAxis = [];
//
//   for (var l = 0; l < res.counter.length; l++) {
//       var x = res.counter[l][0];
//       var y = res.counter[l][1];
//       // var r = res.counter[l][1];
//       xAxis.push(x)
//       scatterData.y = y;
//       // debugger;
//   }
//
//
//   var scatChart = $('scatterChart');
//   var scatterChart = new Chart(scatChart, {
//     type: 'line',
//     data: {
//         labels: xAxis,
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [ scatterData ],
//         }], // datasets
//       }, // data
//     options: {
//         scales: {
//             yAxes: [{
//               scaleLabel:{
//                 display: true,
//                 labelString: 'probability'
//               }// position: 'bottom'
//             }] //xAxes
//         } // scales
//     } // options
// }); //
