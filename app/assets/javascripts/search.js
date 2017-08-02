
$(document).ready(function (){

  console.log('searches loaded');

  var positive = 6;
  var neutral = 3;
  var negative = 1;

  var searchWords = $('#twitterSearch').val();
  console.log(searchWords);
  var searchNum = $('#searchNum').val();
  console.log(searchNum);

  // on the click of search button
  $('#search').on('click', function (){
        console.log('Search Clicked');

  // clear previous results
  $(".addTweets").empty();

  // establish search term and number of most recent tweets

  // set the ajax call to grab the data from the ruby back-end call
    $.ajax({
      url: "/tweets/search",
      type: "GET",
      data: {
        query: searchWords,
        limit: searchNum
      },
      dataType: "JSON"
    })
    .done(function (res){
      // objects of tweets returned
      console.log("Your twitter search term: ", res);

      // loop for twitter feed  **to used later **
      for (var i = 0; i < res.data.length; i++) {
        var result = res.data[i].body;
        // console.log(res.data[i]);
        // $("<p>"+result+"</p>").appendTo(".addTweets");
        }

        // loop to return sentiment word
      for (var j = 0; j < res.data.length; j++) {
        //define sentiment value
        var sentiment = res.data[j].sentiment;

        // append to make twitter feed
        // $("<li>"+sentiment+"</li>").appendTo('.addTweets');
        // add to word counter
        if(sentiment === "positive"){
          positive += 1;
        } else if (sentiment === "neutral"){
            neutral += 1;
          } else if (sentiment === "negative"){
            negative += 1;
          };
        }

        // display sentiment numbers
        $("<li>" + "number of positive scores: " + positive + "</li>").appendTo('.addTweets');
        $("<li>" + "number of neutral scores: " + neutral + "</li>").appendTo('.addTweets');
        $("<li>" + "number of negative scores: " + negative + "</li>").appendTo('.addTweets');
    }) // done end
    .fail(function (xhr,status,error){
      console.log(xhr, status, error);
    }); // fail end

    }); // end on click

    $('#search').keypress(function(e){
    if(e.keyCode == 13){//Enter key pressed
        $('#search').click();//Trigger search button click event
        console.log("enter smashed!");
    }
});


// SENTIMENT SCORE RESULTS
// var myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: options
// });


// SENTIMENT RESULTS
  var ctx = $("#sentimentChart");

    var myChart = new Chart(ctx, {

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
            }, // scales end
            // animation: {
            //   onProgress: function(animation) {
            //     progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            //   }
            // } // animations end
        } // end options
    }); // bar chart end







// Basic Chart.js organiser //
// This will be the foundation for later //
  var ctx = $("#myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
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
          }
      }
  }); // end chart


}); // end doc ready
