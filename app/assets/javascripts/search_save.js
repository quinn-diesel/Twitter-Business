
$(document).ready(function (){

  if( $('.tweets.index').length){

    console.log('searches save loaded');

    // START SEACH FUNCTION
    $('#saveSearch').on('click', function (){
          console.log('Search Clicked');

    var searchWords = $('#twitterSearch').val();
      console.log(searchWords);
    var searchNum = $('#searchNum').val();
      console.log(searchNum);
    var geography = $("#location").val();
      console.log(geography);
    var searchType = $('.searchType').val();
      console.log(searchType);
    var ajaxData = {query:searchWords, limit:searchNum};
    console.log(ajaxData);

    // AJAX CALL TO POST RESULTS
        $.ajax({
          url: "/tweets/search",
          type: "PUT",
          data: ajaxData,
          dataType: "JSON"
      })
      .done(function(res){
        window.location.href='/tweets'

        console.log(res);
      }) // done end
      .fail(function (xhr,status,error){
        console.log(xhr, status, error);
      }); // fail end


    }); // end on click


  } // if show. search

}); // end doc ready
