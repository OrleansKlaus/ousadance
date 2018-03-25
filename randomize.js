  var imageURLs = ["gifs/01.gif","gifs/02.gif","gifs/03.gif","gifs/04.gif","gifs/05.gif",
  "gifs/06.gif","gifs/07.gif","gifs/08.gif","gifs/09.gif","gifs/10.gif",
  "gifs/11.gif","gifs/12.gif","gifs/13.gif","gifs/14.gif","gifs/15.gif",
  "gifs/16.gif","gifs/17.gif","gifs/18.gif","gifs/19.gif","gifs/20.gif", "gifs/21.gif",
  "gifs/22.gif","gifs/23.gif"]
  
  function randomize() {
    var range = imageURLs.length;
    var random_index = Math.floor(Math.random() * range);
    
    var img = document.getElementById("imgDance");
    img.setAttribute("src", imageURLs[random_index])

    //$('.quote-content').html(item); 
  }
  
  function getQuote() {
    var $button = $('.btn')
  
    $button.on('click', randomize);
  }
  
  $(document).ready(function() {
    randomize();
    getQuote();
  });
  