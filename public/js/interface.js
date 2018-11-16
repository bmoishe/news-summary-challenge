function buildPage(response) {
  // set h1 tag before redering elements
  var h1 = document.getElementById("news_article");
  // loop through response array sent from news.js
  for (i = 0; i < response.length; i++)
  {
    // Create elements
    var div = document.createElement("div");
    var imgage = document.createElement("img")
    var headline = document.createElement("h2")
    var details = document.createElement("details")
    var fullArticle = document.createElement("a")
    var summary = document.createElement("a")
// Append each element to the the h1
    h1.appendChild(div);
    div.appendChild(imgage);
    div.appendChild(headline);
    div.appendChild(details);
    summary.appendChild(fullArticle);
    div.appendChild(summary)
// Set values for elements
    div.id = "div"+i
    div.style = "padding-left: 0%; padding-right: 0%; padding-top: 0%; padding-bottom: 0%;"

    imgage.id = "img"+i
    imgage.src = imgs_arr[i]

    headline.id = "headline"+i
    headline.innerHTML = title_arr[i]
    headline.style = "font-family: Helvetica Neue; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 20.9px;"

    fullArticle.id = "fullArticle" + i
    fullArticle.innerHTML = '<p>See full article<p>'
    fullArticle.href = url_arr[i]
    fullArticle.style = "font-family: Helvetica Neue; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; padding-left: 10%"

    details.id = "details"+i
    details.innerHTML = summerised_arr[i]
    details.style = "font-family: Helvetica Neue; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; padding-left: 10%"

    // fullArticle.style = "background-color: black; color: black; border: 2px solid black; width: 100%"
    summary.id = "summary"+i
    summary.href = i
   }
}
