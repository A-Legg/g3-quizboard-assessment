//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function () {

  $.getJSON(window.location + '/questions', function(data) {
    console.log(data);
    $('h1').replaceWith(data[0].description);
    $('.btn-default').replaceWith('<button class="btn btn-default">' + data[0].possible_answers[0].description + '</button>');
    $('.btn-success').replaceWith('<button class="btn btn-success">' + data[0].possible_answers[1].description + '</button>');
    $('.btn-danger').replaceWith('<button class="btn btn-danger">' + data[0].possible_answers[2].description + '</button>');
    $('.btn-primary').replaceWith('<button class="btn btn-primary">' + data[0].possible_answers[3].description + '</button>');
    $('.container').append('<button class="btn btn-default">Next</button>');

    var correctAnswers = 0

    $('h3').append( correctAnswers + '/' + data[0].possible_answers.length);




  });





});