
//We only have to change background-color and height of the sorting element.

var speed=300;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=10;
                break;
        case 2: speed=30;
                break;
        case 3: speed=100;
                break;
        case 4: speed=250;
                break;
        case 5: speed=500;
                break;
        case 6: speed=1000;
                break;
        case 7: speed=2500;
                break;
        case 8: speed=50000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        var width=(100/array_size-(2*margin_size));
        cont.style=" margin:0% " + margin_size + "%; width:" + width + "%; height:" + height + "%; background-color:" + color + "; font-size:" +width/1.8+"vw; writing-mode: vertical-rl; text-orientation: upright; text-align: center; color: #e6cbad; border-radius:0 0 "+width*3+"px "+width*3+"px; ";
        cont.innerHTML= height.toString();
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
        rev.classList=[];
        rev.classList.add("butt_unselected");
        rev.disabled=false;
    },c_delay+=delay_time);
}

