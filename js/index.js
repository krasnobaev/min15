$(document).ready(function () {
  var data;
  (function () {
    if (typeof localStorage.min15 === 'undefined') {
      data = [{"type":"self","desc":"text here is not even here"},{"type":"self","desc":""},{"type":"self","desc":""},{"type":"self","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"road","desc":""},{"type":"road","desc":""},{"type":"road","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"self","desc":""},{"type":"self","desc":""},{"type":"self","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"job","desc":""},{"type":"road","desc":""},{"type":"road","desc":""},{"type":"road","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"none","desc":""},{"type":"music","desc":""},{"type":"music","desc":""},{"type":"self","desc":""}];
      localStorage.min15 = JSON.stringify(data);
      alert('local storage writted!');
    }
    data = JSON.parse(localStorage.min15);
    data.forEach(function (el) {
      $('.parent').append(
        $('<a class="s" href="#chooser"></a>')
          .text(el.desc)
          .addClass(el.type)
      );
    });
  }.bind(this))();

  $('.s').click(function (evBlockClick) {
    var sOldClass;

    // new class clicked
    $('.tab-frame input').click(function (ev) {
      var sNewType = ev.target.id;
      
      $(this).removeClass(sOldClass);
      $(this).addClass(sNewType);            // update UI
      data[$(this).index()].type = sNewType; // update localStorage
      localStorage.min15 = JSON.stringify(data);
 
      sOldClass = ev.target.id;
    }.bind(this));

    // desc changed
    $('#desc').change(function (ev) {
      var val = $('#desc').val();

      $(this).text(val);                 // update UI
      data[$(this).index()].desc = val; // update localStorage
      localStorage.min15 = JSON.stringify(data);
    }.bind(this));

    // set current class on overlay open
    var aClasses = evBlockClick.target.classList;
    if (typeof aClasses !== 'undefined' && aClasses.length > 0) {
      aClasses.forEach(function (el) {
        if (['job', 'music', 'road', 'self', 'none'].indexOf(el) !== -1) {
          sOldClass = el;
          $('#' + sOldClass).prop('checked', true);
        } 
      }.bind(this));
      $('#desc').val(evBlockClick.target.innerText);
    }
  });

  $('.cancel').click(function (ev) {
    console.trace();
    $('.tab-frame input').off('click');
    $('#desc').off('change');
  });
});