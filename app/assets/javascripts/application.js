//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function () {

  $.getJSON(window.location + '/questions', function (data) {
    console.log(data);

    var correctAnswers = 0
    questionNumber = 0

    $('h1').replaceWith(data[questionNumber].description);
    $('.btn-default').replaceWith('<button class="btn btn-default">' + data[questionNumber].possible_answers[0].description + '</button>');
    $('.btn-success').replaceWith('<button class="btn btn-success">' + data[questionNumber].possible_answers[1].description + '</button>');
    $('.btn-danger').replaceWith('<button class="btn btn-danger">' + data[questionNumber].possible_answers[2].description + '</button>');
    $('.btn-primary').replaceWith('<button class="btn btn-primary">' + data[questionNumber].possible_answers[3].description + '</button>');
    $('.container').append('<button id ="next" class="btn btn-info">Next</button>');


    $('h3').append(correctAnswers + '/' + data[0].possible_answers.length);

    $('.container').on('click', '.btn-default', function () {
      if (data[questionNumber].possible_answers[0].correct == true) {
        correctAnswers += 1
        $('.result').append('Correct!');
      }
      else {
        $('.result').append('Incorrect!');
      }
    });

    $('.container').on('click', '.btn-success', function () {
      if (data[questionNumber].possible_answers[1].correct == true) {
        correctAnswers += 1
        $('.result').append('Correct!');
      }
      else {
        $('.result').append('Incorrect!');
      }
    });
    $('.container').on('click', '.btn-danger', function () {
      if (data[questionNumber].possible_answers[2].correct == true) {
        correctAnswers += 1
        $('.result').append('Correct!');
      }
      else {
        $('.result').append('Incorrect!');
      }
    });
    $('.container').on('click', '.btn-primary', function () {
      if (data[questionNumber].possible_answers[3].correct == true) {
        correctAnswers += 1
        $('.result').append('Correct!');
      }
      else {
        $('.result').append('Incorrect!');
      }
    });




    $('.container').on('click', '#next', function () {
      questionNumber += 1
      location.reload();
    });


  });
});