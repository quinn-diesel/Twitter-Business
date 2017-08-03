
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

    var positive = 0;
    var neutral = 0;
    var negative = 0;

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

    // clear previous sentiment word results
    $(".addTweets").empty();
    positive = 0;
    neutral = 0;
    negative = 0;

    // debugger;
    //   score: ,
    //   sentiment:
    // };

    // AJAX CALL TO POST RESULTS
        $.ajax({
          url: "/tweets/search",
          type: "PUT",
          data: saveSearch,
          dataType: "JSON"
      })
      .done(function(res){
          console.log('database save working');

        // append the search term and limti to termslimit


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

        for (var k = 0; k < ajaxResult.data.length; k++) {
          var sentScore = ajaxResult.data[k].score;
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
