$(function () {
  // 文字色変化
  $('#change-color').on('click', function () {
    // 文字の色を変える
    $('#target').css('color','red');
  });

  // 文字内容変化
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });

  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

//  フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});