const d3 = require("d3");
const api = require('./api/api.js')

// const dataArray = api.dataArray
let dataArray = [0, 5, 1, 3, 2, 6, 7]
let graph = function (event) {
    console.log(dataArray)
    let svg = d3.select("body").append("svg")
              .attr("height","100%")
              .attr("width","100%");

    svg.selectAll("rect")
        .data(dataArray)
        .enter().append("rect")
              .attr("class", "bar")
              .attr("height", function(d, i) {return (d * 10)})
              .attr("width","40")
              .attr("x", function(d, i) {return (i * 60) + 25})
              .attr("y", function(d, i) {return 400 - (d * 10)})

    svg.selectAll("text")
        .data(dataArray)
        .enter().append("text")
        .text(function(d) {return d})
               .attr("class", "text")
               .attr("x", function(d, i) {return (i * 60) + 36})
               .attr("y", function(d, i) {return 415 - (d * 10)})
}

module.exports = {
  graph
}
