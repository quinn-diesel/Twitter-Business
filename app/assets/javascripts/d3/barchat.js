$(document).ready(function (){

    if( $('.d3.show').length ) {

      console.log('d3 show page loaded');

      var data = [30, 86, 168, 281, 303, 365];

      d3.select(".chart")
        .selectAll("div")
        .data(data)
          .enter()
          .append("div")
          .style("width", function(d) { return d * 2 + "px"; })
          .text(function(d) { return '$ ' + d; });


  } // if length verify the js for the page
}); // doc ready
