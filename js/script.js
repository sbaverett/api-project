$(function() {
  'use strict';

  var url = 'https://api.flickr.com/services/rest/';
  var method = 'flickr.interestingness.getList';
  var api_key = '3268976e6aadb68d8518ca97d4cd18da';
  var format = 'json';
  var extras;
  var per_page = '10';
  var page = '3';
 

  var getPhotos = function() {
    $.ajax(url, {
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      data: {
        method: method,
        api_key: api_key,
        format: format,
        extras: extras,
        per_page: per_page,
        page: page 
      }

    })
    .then(function(data, status, xhr) {
      $.each(data.photos.photo, function(i, photo) {
        var photoSource = "https:farm" + photo.farm + ".staticflickr.com/" + 
        photo.server + "/" + photo.id + "_" + photo.secret + "_n.jpg";
        console.log(photoSource);
        // var image = $('<img>').attr("src", photoSrc);
        var image = $('<img>').attr('src', photoSource);
        $('#photo').append(image);

      });

    }, function(xhr, status, error) {

    });
  };

getPhotos();


});


