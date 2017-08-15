$(document).ready(function (){

    if( $('.d3.show').length ) {

      console.log('d3 show page loaded');


      // Example
      var data = [30, 86, 168, 281, 303, 365];

      d3.select(".chart")
        .selectAll("div")
        .data(data)
          .enter()
          .append("div")
          .style("width", function(d) { return d * 2 + "px"; })
          .text(function(d) { return '$ ' + d; });


      var circle = d3.selectAll("circle");
          circle.style("fill", "steelblue");
          circle.attr("r", 30);
          circle.attr("cx", function() { return Math.random() * 720; });


  } // if length verify the js for the page

}); // doc ready
