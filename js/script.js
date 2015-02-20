
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

    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=800x600&pitch=-20&location=' + $('#street').val() + ', ' + $('#city').val() + '">');

    return false;
};

$('#form-container').submit(loadData);

// loadData();
