/* global Reveal */
/* global console */
/* global d3 */
/* jshint indent: false */
/* jshint -W015 */
/* jshint -W098 */
function drawCoords() {
  'use strict';
  var svg = d3.select('svg');
  svg.selectAll('g').remove();
  var h = svg[0][0].offsetHeight;
  var w = svg[0][0].offsetWidth;
  var margin = {top: 60, left: 30, right: 30, bottom: 200};
  var height = h - margin.top - margin.bottom;
  var width = w - margin.left - margin.right;

  var container = svg.append('g')
    .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

  var xArrow = container.selectAll('.x').data([width]);
  xArrow.enter()
    .append('path')
    .attr('class', 'x')
    .attr('d', 'M 0,0 L 60,0 l -20, -20 M 60,0 l -20,20')
    .style({
      'stroke': '#666',
      'stroke-width': '12px',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'fill': 'none'
    })
    .transition()
    .delay(3000)
    .duration(3000)
    .attr('d', function (d) { return 'M 0,0 L ' + d + ',0 l -20, -20 M ' + d + ',0 l -20,20'; });

  var yArrow = container.selectAll('.y').data([height]);
  yArrow.enter()
    .append('path')
    .attr('class', 'y')
    .attr('d', 'M 0,0 L 0,60 l -24, -24 M 0,60 l 24,-24')
    .style({
      'stroke': '#666',
      'stroke-width': '12px',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'fill': 'none'
    })
    .transition()
    .delay(3000)
    .duration(3000)
    .attr('d', function (d) { return 'M 0,0 L 0,' + d + ' l -20, -20 M 0,' + d + ' l 20,-20'; });

  var origin = container
    .append('text')
    .classed('origin', true)
    .style('fill', '#666')
    .attr('transform', 'translate(30,58)')
    .text('Origin: (0,0)');
}

Reveal.addEventListener('coords', function (event) {
  'use strict';
  console.log('fired');
  drawCoords();
}, false);


