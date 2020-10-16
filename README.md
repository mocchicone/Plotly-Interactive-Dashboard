# **Belly Button Biodiversity Dashboard Using Javascript, D3, and Plotly**

Created an interactive dashboard to explore the Belly Button Biodiversity dataset of 3,500+ records from [NC State, The Public Science Lab](http://robdunnlab.com/projects/belly-button-biodiversity/) which catalogs the microbes that colonize human navels.  The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.  Dashboard and visualizations created using D3, Plotly, Bootstrap, and JavaScript

The deployed site can be found here: https://mocchicone.github.io/Plotly-Interactive-Dashboard/

![Deployed Site](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/deployed_site.PNG)

The steps are described below:

#### 1. Created Page Structure Using Bootstrap (index.html file)

Using Bootstrap, created the html.index file with sections for the jumbotron, demographics panel, bar graph, and bubble graph.  Created an event handler to allow dynamic changes upon selection of the sample id.   

#### 2. Used JavaScript to Enable Dynamic Charts and Data Display (app.js file)  
Used JavaScript and D3 to read the dataset (Json file) and create a function to append the sample ids to the dropdown values.  Created an event listener change event and a function to transform the data and create a bar chart, bubble graph, and demographics display based on the selected id.
 
![Data Transformation](https://github.com/mocchicone/Plotly-Interactive-Dashboard/blob/master/Images/js_data_extraction_and_transformation.PNG)  
  
#### 3. Used Plotly to Create Bar Chart and Bubble Graph (app.js file)  
  
   
#### 4. Deployed Site
  
The deployed site can be found here: https://mocchicone.github.io/Plotly-Interactive-Dashboard/  

**Contact:**   
Michael Occhicone: mpocchicone@gmail.com  
