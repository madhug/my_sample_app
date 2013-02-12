  paper.install(window);
    // Keep global references to both tools, so the HTML
    // links below can access them.

    window.onload = function() {
        paper.setup('myCanvas');
        var circle = new Path.Circle(view.center,30);
        circle.fillColor = 'red';
        circle.strokeColor = "black";
        var date = new Date();
        view.onFrame = function(event) {

            circle.scale(1 + (Math.sin(date.getMilliseconds())) * 0.1);
        }
    };