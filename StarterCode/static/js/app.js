function dropdown(){
  var dropdown = d3.select("#selSubject")
  d3.json("../data/samples.json").then(function(data) {
    var names = data.names;
    names.forEach(element => {
    dropdown.append("option").text(element).property("value", element)
  SelectID(names[0])
  })})}

dropdown()

function SelectID(dropdown_option) {
  console.log("Keep on truckin")
d3.json("../data/samples.json").then(function(data) {

  var samples = data.samples
  var results = samples.filter(samples => samples.id==dropdown_option)
  console.log(results)
})}




      // Grab values from the data json object to build the plots
  // var subject_id = data.name;  

  //    var stock = data.dataset.dataset_code;
 //     var startDate = data.dataset.start_date;
 //     var endDate = data.dataset.end_date;
 //     var dates = unpack(data.dataset.data, 0);
 //     var closingPrices = unpack(data.dataset.data, 4);
    
// console.log(typeof subject_id)})


// var bar = document.getElementById("bar");
// Plotly.restly(bar,"value", [newdata]);
  
//  data = d3.json("../data/samples.json").then((data) => {
  //var subject_id = data.samples.id;
 //   var subject_id = data.map(row => row.samples.id);
 //   var otu_ids = data.samples.otu_ids;
 //   var sample_values = data.samples.sample_values;
 //   var otu_labels = data.samples.otu_labels;
 //   console.log(data)
 //   console.log(subject_id)


  


//     // Sort the data array using the greekSearchResults value
//     data.sort(function(a, b) {
//       return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
//     });
  
//     // Slice the first 10 objects for plotting
//     data = data.slice(0, 10);
  
//     // Reverse the array due to Plotly's defaults
//     data = data.reverse();
  
//     // Trace1 for the Greek Data
//     var trace1 = {
//       x: data.map(row => row.greekSearchResults),
//       y: data.map(row => row.greekName),
//       text: data.map(row => row.greekName),
//       name: "Greek",
//       type: "bar",
//       orientation: "h"
//     };
  
//     // data
//     var chartData = [trace1];
  
//     // Apply the group bar mode to the layout
//     var layout = {
//       title: "Greek gods search results",
//       margin: {
//         l: 100,
//         r: 100,
//         t: 100,
//         b: 100
//       }
//     };
  
//     // Render the plot to the div tag with id "plot"
//     Plotly.newPlot("plot", chartData, layout);
//   });
  


// function buildPlot() {
//     d3.json(url).then(function(data) {
  
//       // Grab values from the data json object to build the plots
//       var name = data.dataset.name;
//       var stock = data.dataset.dataset_code;
//       var startDate = data.dataset.start_date;
//       var endDate = data.dataset.end_date;
//       var dates = unpack(data.dataset.data, 0);
//       var closingPrices = unpack(data.dataset.data, 4);
  
//       var trace1 = {
//         type: "scatter",
//         mode: "lines",
//         name: name,
//         x: dates,
//         y: closingPrices,
//         line: {
//           color: "#17BECF"
//         }
//       };
  
//       var data = [trace1];
  
//       var layout = {
//         title: `${stock} closing prices`,
//         xaxis: {
//           range: [startDate, endDate],
//           type: "date"
//         },
//         yaxis: {
//           autorange: true,
//           type: "linear"
//         }
//       };
  
//       Plotly.newPlot("plot", data, layout);
  
//     });
//   }
  
//   buildPlot();