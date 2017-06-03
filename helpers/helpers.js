var axios = require('axios');

var helper = {
    runQuery: function(searchTerm, startYear, endYear){

        if (startYear == ''){
            startYear = '2015';
        }
        if (endYear == ''){
            endYear = '2016';
        }


        console.log("run query param " + searchTerm + startYear +endYear);
        var authKey = "759488b3dc7b483fa92b2479f1bc939f";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"+
        "?api-key=" + authKey
        + "&q=" + searchTerm
        + "&begin_date=" + startYear + "0101" 
        + "&end_date=" + endYear + "1231";

        return axios.get(queryURL).then(function(response) {
            // console.log("response: " + JSON.stringify(response.data.response.docs, null, 2))
            
            for (var i = 0; i < 5; i++) {
                console.log("i: " + i + JSON.stringify(response.data.response.docs[i].headline.main));
                // title:
                JSON.stringify(response.data.response.docs[i].headline.main);
                // URL:
                JSON.stringify(response.data.response.docs[i].web_url);
                // console.log("url: " + JSON.stringify(response.data.response.docs[i].web_url));

            }
            if (response.data.results[0]) {
                return response.data.results[0].formatted;
            }
            else {
                return "";
            }
        });
    },

    getHistory: function(){
        return axios.get("/api");
    },
    postArticle: function(articleObj){
       return axios.post("/api",
       {
        title: articleObj.title,
        date: articleObj.date,
        url: articleObj.url
       });
    },
};
module.exports = helper;