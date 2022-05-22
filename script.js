
const md = window.markdownit();
md.options.html = true;

function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

addCss('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.min.css');

document.querySelector('main1').innerHTML = md.render(`# Markdown-Elements

 
<p align="center">
  <img height="400" src="https://imgur.com/oQgTNF3.png" />
</p>
                                                                     
<p align="center">     
            <b> Add a Markdown tag to your HTML </b>
            </p>
 <p align="center">              
Use markdown in HTML with ease!
  <p align="center">        
<small> View the demo <a href="https://marketingpipeline.github.io/Markdown-Elements/">here</a></small>
       </p>
      <p align="center">        
<small><i> Powered by <a href="https://github.com/showdownjs/showdown">Showdown</a></i></small>
       </p>
</p>





# How to use 


  Add support to any website to use markdown ANYWHERE with a simple tag! Like so -

            <md>
             # Markdown Support
               Awesomeness
             </md>



   include this [script](https://github.com/MarketingPipeline/Markdown-Elements/blob/main/markdown-elements.js) at the bottom of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Markdown-Elements/markdown-elements.js"></script> 
          
         
### How to use GitHub Styling

to use Github Markdown Styling include this [stylesheet](https://cdn.jsdelivr.net/gh/MarketingPipeline/Markdown-Elements/stylesheets/github_md.css) on the page rendering Markdown Content


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MarketingPipeline/Markdown-Elements/stylesheets/github_md.css">    

      
          
             
          








## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Markdown-Elements)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!


Looking for a task to work on? Check the tasks that need improved in the [to-do](https://github.com/MarketingPipeline/Markdown-Elements/blob/main/to-do.md) list.


See also the list of
[contributors](https://github.com/MarketingPipeline/Markdown-Elements/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Markdown-Elements)

This project is licensed under the GPL License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Markdown-Elements/blob/main/LICENSE) file for
details.`);
     


var test = document.querySelector('main') 
  
  

  test.innerHTML = md.render(test.textContent);
     
