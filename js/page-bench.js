(function(exports) {
  var Benchmark = document.Benchmark;

  var iframe = document.getElementById("testFrame");
  var benchmarks = new Benchmark.Suite();
  benchmarks.add('jquery_drag', function() {
    iframe.src="tests/jquery_drag.html";
  });
}).call(this, typeof exports === "undefined" ? (PageBench = {}) : exports);
