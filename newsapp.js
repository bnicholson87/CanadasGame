var title 
var highlight
var video

 async function getNHL(){
    news = await fetch('GET https://newsapi.org/v2/everything?q=NHL&apiKey={f1d643aa0bf444b1852f6490e13b8878}').then(r => r.json())
    console.log(news)
    for (i = 0; i < 3; i++) {
  
      title = news.articles[i].title
      console.log(title)
      url = news.articles[i].url
      console.log(url)
      video = news.results[i].multimedia[0].url    
      changeTitle()
      changeVideo()

    }
  }
  
  // Displays news info in a card 
  function changeTitle() {
    document.querySelector(`#title0`).innerHTML = news.articles[0].title
  }

  getNHL()
