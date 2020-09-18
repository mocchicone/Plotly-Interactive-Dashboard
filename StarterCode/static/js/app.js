function init() {
  var subject_id = '940'
}

function getData() {
  d3.json("../data/samples.json").then((data) => {
    var subject_IDs = data.samples.map(x => x.id);
    var sample_values = data.samples.map(x => x.sample_values.slice(0,10));
    var otu_ids = data.samples.map(x => x.otu_ids.slice(0,10));
    var otu_labels = data.samples.map(x => x.otu_labels.slice(0,10));    
  })}

function dropdown() {
    var dropdown2 = d3.select("#selSubject")
    d3.json("../data/samples.json").then(function(data) {
    var subject_IDs = data.samples.map(x => x.id);
    subject_IDs.forEach(element => {
    dropdown2.append("option").text(element).property("value", element)
   })})}
   
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selSubject").node();
  var dropdownID = dropdownMenu.id;
  var selectedID = dropdownMenu.value;
  var stringID = String(selectedID)

  d3.json("../data/samples.json").then((data) => {
  var subject_IDs = data.samples.map(x => x.id);

  function selectedIndex(x) {
    return x==selectedID;
  }

  var subjectIndex = subject_IDs.findIndex(selectedIndex);

  console.log(subject_IDs);
  console.log(selectedID);
  console.log(subjectIndex)
})}


  //     var trace1 = {
  //     x: data.map(row => row.greekSearchResults),
  //     y: data.map(row => row.greekName),
  //     text: data.map(row => row.greekName),
  //     name: "Greek",
  //     type: "bar",
  //     orientation: "h"
  //   };
  
  //   // data
  //   var chartData = [trace1];
  
  //   var layout = {
  //     title: "Belly Buttom Results for Subject: ", selectionID, 
  //     margin: {
  //       l: 100,
  //       r: 100,
  //       t: 100,
  //       b: 100
  //     }
  //   };  
  //   // Render the plot to the div tag with id "bar"
  //   Plotly.newPlot("bar", chartData, layout);
  // };



init()
getData()
dropdown()


// }


// }






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