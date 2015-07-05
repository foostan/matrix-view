// Generated by CoffeeScript 1.9.3
(function() {
  $(function() {
    var cel, ci, matrix, results, ri, row;
    matrix = [];
    $("#matrix").find("tr").each(function(ri, row) {
      return $(row).find("th, td").each(function(ci, cel) {
        var colspan, cp, i, ref, results, rowspan, rp;
        rowspan = $(cel).attr("rowspan") || 1;
        colspan = $(cel).attr("colspan") || 1;
        results = [];
        for (rp = i = 0, ref = rowspan - 1; 0 <= ref ? i <= ref : i >= ref; rp = 0 <= ref ? ++i : --i) {
          if (matrix[ri + rp] === void 0) {
            matrix[ri + rp] = [];
          }
          results.push((function() {
            var j, ref1, results1;
            results1 = [];
            for (cp = j = 0, ref1 = colspan - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; cp = 0 <= ref1 ? ++j : --j) {
              results1.push(matrix[ri + rp].push($(cel)));
            }
            return results1;
          })());
        }
        return results;
      });
    });
    results = [];
    for (ri in matrix) {
      row = matrix[ri];
      results.push((function() {
        var results1;
        results1 = [];
        for (ci in row) {
          cel = row[ci];
          if (cel.attr("ri") === void 0) {
            cel.attr("ri", ri);
          }
          if (cel.attr("ci") === void 0) {
            cel.attr("ci", ci);
          }
          results1.push(cel.hover(function() {
            ri = $(this).attr("ri");
            ci = $(this).attr("ci");
            if ($(this).hasClass("row-header")) {
              return $("#matrix").find("[ri=" + ri + "]").each(function() {
                return $(this).css("background-color", "red");
              });
            } else if ($(this).hasClass("col-header")) {
              return $("#matrix").find("[ci=" + ci + "]").each(function() {
                return $(this).css("background-color", "red");
              });
            } else if ($(this).hasClass("value")) {
              return $("#matrix").find("[ci=" + ci + "], [ri=" + ri + "]").each(function() {
                return $(this).css("background-color", "#eaa");
              });
            }
          }, function() {
            var results2;
            results2 = [];
            for (ri in matrix) {
              row = matrix[ri];
              results2.push((function() {
                var results3;
                results3 = [];
                for (ci in row) {
                  cel = row[ci];
                  results3.push(cel.css("background-color", ""));
                }
                return results3;
              })());
            }
            return results2;
          }));
        }
        return results1;
      })());
    }
    return results;
  });

}).call(this);