$ ->
  matrix = []
  $("#matrix").find("tr").each (ri, row) ->
    $(row).find("th, td").each (ci, cel) ->
      rowspan = $(cel).attr("rowspan") || 1
      colspan = $(cel).attr("colspan") || 1
      for rp in [0..rowspan-1]
        matrix[ri + rp] = [] if matrix[ri + rp] == undefined
        for cp in [0..colspan-1]
          matrix[ri + rp].push($(cel))

  for ri, row of matrix
    for ci, cel of row
      cel.attr("ri", ri) if cel.attr("ri") == undefined
      cel.attr("ci", ci) if cel.attr("ci") == undefined
      cel.hover(
        ->
          ri = $(this).attr("ri")
          ci = $(this).attr("ci")
          if $(this).hasClass("row-header")
            $("#matrix").find("[ri=" +  ri + "]").each ->
              $(this).css("background-color", "red")
          else if $(this).hasClass("col-header")
            $("#matrix").find("[ci=" +  ci + "]").each ->
              $(this).css("background-color", "red")
          else if $(this).hasClass("value")
            $("#matrix").find("[ci=" +  ci + "], [ri=" +  ri + "]").each ->
              $(this).css("background-color", "#eaa")
        ->
         for ri, row of matrix
           for ci, cel of row
             cel.css("background-color", "")
      )
