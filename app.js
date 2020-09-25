// add dropdown values to html
function dropdown() {  
    var dropdown2 = d3.select("#selSubject")
    d3.json("data/samples.json").then(function(data) {
    var subject_IDs = data.samples.map(x => x.id);
    subject_IDs.forEach(element => {
    dropdown2.append("option").text(element).property("value", element)
   })})}

// create event listener change event   
d3.selectAll("body").on("change", updatePage);

// when dropdown value is selected, pull the data from json and build bar chart, bubble chart, and demographic display
function updatePage() {
  var dropdownMenu = d3.selectAll("#selSubject").node();
  var selectedID = dropdownMenu.value;
  d3.json("data/samples.json").then((data) => {

 // pull and slice data for bar chart   
  var subject_IDs = data.samples.map(x => x.id);
  var sample_values = data.samples.map(x => x.sample_values.slice(0,10));
  var otu_ids = data.samples.map(x => x.otu_ids.slice(0,10));
  var otu_labels2 = data.samples.map(x => x.otu_labels.slice(0,10));
  
  // pull data for bubble chart
  var bub_sample_values = data.samples.map(x => x.sample_values);
  var bub_otu_ids = data.samples.map(x => x.otu_ids);
  var bub_otu_labels = data.samples.map(x => x.otu_labels);
  
  // pull data for demographic display
  var demodata = data.metadata
  
  // function to return the index of the subject id selected
  function selectedIndex(x) {
    return x==selectedID;
  }
  
  // tranformed variables for the bar graph
  var subjectIndex = subject_IDs.findIndex(selectedIndex);
  var y_selected = otu_ids[subjectIndex];
  var ry_selected = y_selected.reverse();
  var rys_selected = ry_selected.toString(ry_selected);
  var ryss_selected = rys_selected.split(',');
  var y2_selected = ryss_selected.map(x => 'OTU ' + x);
  
// displaying the demographics based on the selected sample id
  var demographics = d3.select("#sample-metadata")
  var demoSelected = demodata[subjectIndex]
  console.log("demographics: ", demoSelected)
  demographics.selectAll("div").remove();
  Object.entries(demoSelected).forEach(([key, value]) => demographics.append("div").text(`${key}: ${value}`))

// Bar graph  
  var trace1 = {
        y: y2_selected,
        x: sample_values[subjectIndex].reverse(),
        text: otu_labels2[subjectIndex].reverse(),
        name: "test",
        type: "bar",
        orientation: "h"
      };
    
  // Bubble Graph    
  var trace2 = {
        y: bub_sample_values[subjectIndex],
        x: bub_otu_ids[subjectIndex],
        text: bub_otu_labels[subjectIndex],
        name: "bubble",
        mode: "markers",
        marker: {size: bub_sample_values[subjectIndex],
                  color: bub_otu_ids[subjectIndex]            
        }
      };

      var chartData1 = [trace1];
      var chartData2 = [trace2];

      var layout1 = {
        title: `Top 10 OTUs found in Subject ID: ${selectedID}`, 
      };        
      var layout2 = {
        title: `All OTUs Sample Values for Subject ID: ${selectedID}`, 
      };  

      Plotly.newPlot("bar", chartData1, layout1);
      Plotly.newPlot("bubble", chartData2, layout2);

      console.log(subject_IDs);
      console.log(selectedID);
      console.log(subjectIndex)
    })}


// initial page shows charts for subject 940    
function init() {
  
  d3.json("data/samples.json").then((data) => {
  
    var sample_values = data.samples.map(x => x.sample_values.slice(0,10));
    var otu_ids = data.samples.map(x => x.otu_ids.slice(0,10));
    var otu_labels2 = data.samples.map(x => x.otu_labels.slice(0,10));
    var y_selected = otu_ids[0];
    var ry_selected = y_selected.reverse();
    var rys_selected = ry_selected.toString(ry_selected);
    var ryss_selected = rys_selected.split(',');
    var y2_selected = ryss_selected.map(i => 'OTU ' + i);  
    var bub_sample_values = data.samples.map(x => x.sample_values);
    var bub_otu_ids = data.samples.map(x => x.otu_ids);
    var bub_otu_labels = data.samples.map(x => x.otu_labels);
    var demodata = data.metadata
    var demoSelected = demodata[0]
    var demographics = d3.select("#sample-metadata")

    Object.entries(demoSelected).forEach(([key, value]) => demographics.append("div").text(`${key}: ${value}`))

    var trace1 = {
    y: y2_selected,
    x: sample_values[0].reverse(),
    text: otu_labels2[0].reverse(),
    name: "test",
    type: "bar",
    orientation: "h"
  };
    
  var trace2 = {

    y: bub_sample_values[0],
    x: bub_otu_ids[0],
    text: bub_otu_labels[0],
    name: "test",
    mode: "markers",
      marker: {size: bub_sample_values[0],
              color: bub_otu_ids[0]            
    }
  };

  var chartData = [trace1];  
  var chartData2 = [trace2];

    var layout = {
    title: `Top 10 OTUs found in Subject ID: 940`, 
  };  
  
  var layout2 = {
    title: `All OTUs Sample Values for Subject ID: 940`, 
  };  
  
  Plotly.newPlot("bar", chartData, layout);
  Plotly.newPlot("bubble", chartData2, layout2);
})}


init();
dropdown();

