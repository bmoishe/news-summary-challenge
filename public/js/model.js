var title_arr = []
var imgs_arr =[]
var bt_arr = []
var summerised_arr = []
var url_arr = []
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200)
  {
    var x = JSON.parse(this.responseText)
    var response = x.response.results
    for (i = 0; i < response.length; i++)
    {
      title_arr.push(response[i].webTitle)
      url_arr.push(response[i].webUrl)
      imgs_arr.push(response[i].fields.thumbnail)
      bt_arr.push(response[i].fields.bodyText)
      summerised_arr.push(sum(bt_arr[i],i))
    }
    buildPage(title_arr)
  }

};
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?qfrom-date="+ formatDate()+ "&section=technology&show-fields=all", true);
    xhttp.send();
