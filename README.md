# **Belly Button Biodiversity Dashboard Using Javascript, D3, and Plotly**

Using D3, Plotly, JavaScript and Bootstrap, created an interactive dashboard to explore the Belly Button Biodiversity dataset from [NC State, The Public Science Lab](http://robdunnlab.com/projects/belly-button-biodiversity/) which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The deployed site can be found here: https://mocchicone.github.io/Plotly-Interactive-Dashboard/

![Deployed Site](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/deployed_site.PNG)

The steps are described below:

##### 1. Create a HTML page (index.html file)

  Using bootstrap, created html.index file with sections for the jumbotron, demographics panel, bar graph, and bubble graph.  Created an event handler to allow dynamic changes upon selection of the sample id.   
 
 ![HTML Event Handler](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/html_event_handler.PNG)
  
##### 2. Use JavaScript to Create Dynamic Charts and Data Displays (app.js file)  
  
  Using JavaScript and D3.js, read the dataset (Json file), created a function to append the sample ids to the dropdown values
  
  ![Adding the Dropdown Values](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/js_adding_dropdown_values.PNG)
  
  Created an event listener change event and a function to transform the data and create a bar chart, bubble graph, and demographics display based on the selected id

  ![Data Transformation](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/js_data_extraction_and_transformation.PNG)
  
##### 3. Use Plotly to Create Bar Chart and Bubble Graph (app.js file)  
  Used Plotly to create dynamic bar chart and bubble graph.
  
   ![Plotly Chart and Graph](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/plotly_chart_and_graph.PNG)
  
##### 4. Deployed Site
  
  The deployed site can be found here: https://mocchicone.github.io/Plotly-Interactive-Dashboard/

**Contact:**   
Mike Occhicone: mpocchicone@gmail.com  
