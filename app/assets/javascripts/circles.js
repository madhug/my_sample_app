var graph = new Graph();
// make some nodes
var spruce = graph.newNode({label: 'Norway Spruce'});
var fir = graph.newNode({label: 'Sicilian Fir'});
var tada = graph.newNode({label: 'Tada'});

// connect them with an edge
graph.newEdge(spruce, fir);
graph.newEdge(tada,spruce);
graph.newEdge(fir,tada);

$('#my_canvas').springy({ graph: graph });