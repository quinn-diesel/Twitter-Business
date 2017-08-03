
$(document).ready(function (){

  if( $('.tweets.index').length){

    console.log('searches save loaded');

    // START SEACH FUNCTION
    $('#saveSearch').on('click', function (){
          console.log('Search Clicked');

    var saveSearch = [];

    var searchWords = $('#twitterSearch').val();
    var searchNum = $('#searchNum').val();
    var searchType = $('.searchType').val();
    var results = [];

    // loop for score, body and sentiment
    for (var i = 0; i < ajaxResult.data.length; i++) {
      var body = ajaxResult.data[i].body;
      var score = ajaxResult.data[i].score;
      var sentiment = ajaxResult.data[i].sentiment;
      var loopResult = {"body": body, "score": score, "sentiment": sentiment};
      results.push(loopResult);
    };

    var searchObject = {
      "query":searchWords,
      "limit":searchNum,
      "type": searchType,
      "results": results
    };

    saveSearch.push(searchObject);

    // debugger;
    //   score: ,
    //   sentiment:
    // };

  //   // MICHELLE CODE
  //   $("#saveDBButton").click(function(){
  //   var elements = canvas.getObjects();
  //   console.log(elements);
  //   var elems = [];
  //   for (var i = 80; i < elements.length; i++) {
  //     var left = elements[i].get('left');
  //     var top = elements[i].get('top');
  //     var angle = elements[i].get('angle');
  //     var scaleX = elements[i].get('scaleX');
  //     var scaleY = elements[i].get('scaleY');
  //     var flourish_id = elements[i].get('id');
  //     console.log('scaleX', scaleX, 'scaleY', scaleY);
  //     var elementInfo = {
  //       left: left,
  //       top: top,
  //       angle: angle,
  //       scaleX: scaleX,
  //       scaleY: scaleY,
  //       flourish_id: flourish_id
  //     };
  //     elems.push(elementInfo);
  //   }
  //   console.log(elems);
  //   saveElementData(elems)
  //   });
  // var saveElementData = function(info){
  //   console.log('IN SAVE ELEMENT DATA FUNCTION: element info:', info);
  //   var data = {
  //     name: $('#designName').val(),
  //     elements: info
  //   };
  //   // debugger;
  //   // if( design_id ){
  //   //   // debugger;
  //   //   data.design_id = design_id;
  //   // }
  //   if (designData.id !== null){
  //     data.design_id = designData.id;
  //   }



    // AJAX CALL TO POST RESULTS
        $.ajax({
          url: "/tweets/search",
          type: "PUT",
          data: saveSearch,
          dataType: "JSON"
      })
      .done(function(res){

          // LOOP FOR SENTIMENT WORD
        for (var j = 0; j < ajaxResult.data.length; j++) {
          //define sentiment value
          var sentiment = ajaxResult.data[j].sentiment;

          // add to word counter
          if(sentiment === "positive"){
            positive += 1;
          } else if (sentiment === "neutral"){
              neutral += 1;
            } else if (sentiment === "negative"){
              negative += 1;
            }
          }

          // display sentiment numbers
          $("<li>" + "number of positive scores: " + positive + "</li>").appendTo('.addTweets');
          $("<li>" + "number of neutral scores: " + neutral + "</li>").appendTo('.addTweets');
          $("<li>" + "number of negative scores: " + negative + "</li>").appendTo('.addTweets');

          // SENTIMENT RESULTS
          var barGraph = $("#sentimentChart");

          var myChart = new Chart(barGraph, {
            type: 'bar',
            data: {
              labels: ["Positive", "Neutral", "Negative"],
              datasets: [{
                label: ('sentiment graph for ' + searchWords),
                data: [positive, neutral, negative],
                backgroundColor: [
                  'rgba(119, 221, 119, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 105, 97, 0.2)'
                ],
                borderColor: [
                  'rgba(119, 221, 119, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 105, 97, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero:true
                  }
                }]
              },
            } // end options
          }); // bar chart end

    // SENTIMENT SCORE RESULTS

        for (var k = 0; k < res.data.length; k++) {
          var sentScore = res.data[k].score;
          sentScoreArr.push(sentScore);
          console.log(sentScore);
        }

        var lineGraph = $('#scoreChart');
        var myLineChart = new Chart(lineGraph, {
              type: 'line',
              data: {
                datasets: [{
                  label: ('Line Graph for: ' + searchWords),
                  data: sentScoreArr
                }],
                labels: sentLabels
              },// data
              options: {
                scales: {
                  xAxes: [{
                    ticks: {
                      min: sentLabels
                    }
                  }] // options
                } // scales
              } // options
          }); // lineGraph end


        console.log(res);
      }) // done end
      .fail(function (xhr,status,error){
        console.log(xhr, status, error);
      }); // fail end


    }); // end on click


  } // if show. search

}); // end doc ready
