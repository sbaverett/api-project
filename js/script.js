$(function() {
  'use strict';

  var url = 'https://api.flickr.com/services/rest/';
  var method = 'flickr.interestingness.getList';
  var api_key = '3268976e6aadb68d8518ca97d4cd18da';
  var format = 'json';
  var extras;
  var per_page = '10';
  var page = '6';
  var title;
 

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
        page: page,
        title: title 
      }

    })
    .then(function(data, status, xhr) {
      $.each(data.photos.photo, function(i, photo) {
        var photoSource = "https:farm" + photo.farm + ".staticflickr.com/" + 
        photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg";
        var image = $('<img>').attr('src', photoSource);
        $('div').append(image);

        });   

    }, function(xhr, status, error) {

    });

  };

  getPhotos();

  $('div').click(function() {
    console.log('awesome');
    $(this).closest('div').toggleClass('clicked');
  });

});


