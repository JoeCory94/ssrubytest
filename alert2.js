$(".counter").each(function() {
  var a = $(this),
      b = a.attr("data-count");
  $({
    countNum: a.text()
  }).animate({
    countNum: b
  }, {
    duration: 3e3,
    easing: "linear",
    step: function() {
      a.text(Math.floor(this.countNum))
    },
    complete: function() {
      a.text(this.countNum)
    }
  })
})