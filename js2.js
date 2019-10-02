'use strict';
let v1 = vidget();
let v2 = vidget();
let v3 = vidget();

function vidget(){
    let slider = document.createElement("div");
    slider.classList.add('slider');
    let thumb = document.createElement("div");
    thumb.classList.add('thumb');
    slider.append(thumb);
    document.body.append(slider); 

    thumb.onmousedown = function(){
        slider.width = slider.getBoundingClientRect().width;
        slider.x = slider.getBoundingClientRect().x;
        let shiftX = event.clientX - thumb.getBoundingClientRect().x;

        document.addEventListener("mousemove", mouseMove);
        function mouseMove(event){ 
            thumb.style.left = (event.clientX - slider.x - shiftX < 0)? 0 +"px":
            (event.clientX - slider.x - shiftX > slider.width - thumb.offsetWidth) ? slider.width - thumb.offsetWidth  +"px":
            event.clientX - slider.x - shiftX + 'px';
        }

        document.addEventListener("mouseup", mouseUp);
        function mouseUp(){
            document.removeEventListener("mousemove", mouseMove);
        }

        return false;
    }
}

