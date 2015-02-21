
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
    var URI = URL + KEY;

    $.getJSON(URI, function(data) {
        console.log(data);
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
