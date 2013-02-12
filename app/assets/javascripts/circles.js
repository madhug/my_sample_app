  paper.install(window);
    // Keep global references to both tools, so the HTML
    // links below can access them.

    window.onload = function() {
        paper.setup('myCanvas');
        var circle = new Path.Circle(view.center,30);
        circle.fillColor = 'red';
        circle.strokeColor = "black";
        var date = new Date();
        var grow = true;
        view.onFrame = function(event) {

            if(grow)
            {
                circle.scale(1 + (Math.sin(date.getMilliseconds())) * 0.1);
                grow = false;
            }
            else
            {
                circle.scale(1 - (Math.sin(date.getMilliseconds())) * 0.1)
                grow = true;
            }
        }
    };