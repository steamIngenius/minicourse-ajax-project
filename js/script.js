
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=800x600&pitch=-20&location='
        + $('#street').val()
        + ', '
        + $('#city').val()
        + '">');

    // YOUR CODE GOES HERE!

    var URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var KEY = "api-key=ebd9e23f94efc45658eb7e829bee79d1:1:71392649";
    var QUERY = 'q=' + $('#city').val();
    var URI = URL + QUERY + '&' + KEY;

    // AJAJ request action, now with 50% more callback!
    $.getJSON(URI, function(data) {

        // console.log(data);

        // loop through data.response.docs
        for (var item in data.response.docs) {

            // grab data.response.docs.X.web_url, data.response.docs.X.snippet and data.response.docs.X.headline.main
            var articleLink = data.response.docs[item].web_url;
            var articleHeadline = data.response.docs[item].headline.main;
            var articleSnippet = data.response.docs[item].snippet;

            // append the data to $nytElem unordered list
            $nytElem.append('<li class="article"> '
                + '<a href="' + articleLink + '">' + articleHeadline + '</a>'
                + '<p>' + articleSnippet + '</p>'
                + '</li>');
        }

        // FUTURE: use data.response.docs.X.lead_paragraph to implement a read more... option that stays on this page
    }).error( function() {
        $nytElem.append('<li>Unable to load articles. Try again later.</li>');
    });

    // done
    return false;
};

$('#form-container').submit(loadData);

// loadData();
