// add dropdown values to html
function dropdown() {  
    var dropdown2 = d3.select("#selSubject")
    d3.json("../data/samples.json").then(function(data) {
    var subject_IDs = data.samples.map(x => x.id);
    subject_IDs.forEach(element => {
    dropdown2.append("option").text(element).property("value", element)
   })})}

// create event listener change event   
d3.selectAll("body").on("change", updatePage);

// when dropdown value is selected, pull the data from json and build a horizontal bar chart
function updatePage() {
  var dropdownMenu = d3.selectAll("#selSubject").node();
  var selectedID = dropdownMenu.value;

  d3.json("../data/samples.json").then((data) => {
  
  var subject_IDs = data.samples.map(x => x.id);
  var sample_values = data.samples.map(x => x.sample_values.slice(0,10));
  var otu_ids = data.samples.map(x => x.otu_ids.slice(0,10));
  var otu_labels2 = data.samples.map(x => x.otu_labels.slice(0,10));

  function selectedIndex(x) {
    return x==selectedID;
  }
  
  var subjectIndex = subject_IDs.findIndex(selectedIndex);
  var y_selected = otu_ids[subjectIndex];
  var ry_selected = y_selected.reverse();
  var rys_selected = ry_selected.toString(ry_selected);
  var ryss_selected = rys_selected.split(',');
  var y2_selected = ryss_selected.map(i => 'OTU ' + i);

  var trace1 = {

        y: y2_selected,
        x: sample_values[subjectIndex].reverse(),
        text: otu_labels2[subjectIndex].reverse(),
        name: "test",
        type: "bar",
        orientation: "h"
      };
    
      var chartData = [trace1];
    
      var layout = {
        title: `Top 10 OTUs found in Subject ID: ${selectedID}`, 
      };  
      
      Plotly.newPlot("bar", chartData, layout);
    
      console.log(subject_IDs);
      console.log(selectedID);
      console.log(subjectIndex)
    })}


// initial page shows charts for subject 940    
function init() {
  
  d3.json("../data/samples.json").then((data) => {
  
    var sample_values = data.samples.map(x => x.sample_values.slice(0,10));
    var otu_ids = data.samples.map(x => x.otu_ids.slice(0,10));
    var otu_labels2 = data.samples.map(x => x.otu_labels.slice(0,10));
    var y_selected = otu_ids[0];
    var ry_selected = y_selected.reverse();
    var rys_selected = ry_selected.toString(ry_selected);
    var ryss_selected = rys_selected.split(',');
    var y2_selected = ryss_selected.map(i => 'OTU ' + i);  
  
    var trace1 = {
    y: y2_selected,
    x: sample_values[0].reverse(),
    text: otu_labels2[0].reverse(),
    name: "test",
    type: "bar",
    orientation: "h"
  };
    
  var chartData = [trace1];  
    var layout = {
    title: `Top 10 OTUs found in Subject ID: 940`, 
  };  
    Plotly.newPlot("bar", chartData, layout);
})}


init();
dropdown();

