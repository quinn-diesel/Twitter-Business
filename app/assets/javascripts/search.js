

$(document).ready(function (){

  console.log('searches loaded');


  // on the click of search button
  $('#search').on('click', function (){
        console.log('Search Clicked');

  // get the value of the term that has been entered into the search box
    var searchWords = $('#twitterSearch').val();
                        console.log(searchWords);



    var trumpTest = function (){
      $.ajax({
        url: "https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi",
        type: "GET",
        data: {
          search: searchWords
        },
        dataType: "JSON"
      })
      .done(function (res){
        console.log("Your twitter search term: " + res);
        $('#appendResults').tweet()
      })
      .fail(function (xhr,status,error){
        console.log(xhr, status, error);
      })
    }




// fire the twitter search api //
//   var twitterSearch = function (){
//
//     $.ajax({
//       url: "https://api.twitter.com/1.1/search/tweets.json" + $.param(searchWords),
//       method:'GET',
//       type: 'recent',
//       datatype: 'jsonp'
//     }).done(function(res){
//       // on the done request append the results to the page
//       console.log("success you have found the following data:" + res);
//
//       // append the tweets to the page //
//       // var search = function (){
//       //
//       // }
//       //
//       // search.appendTo("")
//
//     }).fail(function(xhr, status, error){
//       console.log(xhr, status, error);
//     })

  // }

})





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
  });


});
