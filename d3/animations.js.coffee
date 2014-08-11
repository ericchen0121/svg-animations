# Animations in SVG with D3
# author: Eric Chen
#

(($, window, document) ->

  $.linearAnimation = (options) ->

    var anim =

      options: $.extend({
          'width': 1000
          'barHeight': 250
          'barDistance': 50
        }, options),

      init: ->
        opts = @options

      getChart: ->
        return d3.select(".chart")
          .attr("width", "100%")
          .attr("height", 800)






)(jQuery, window, document)
