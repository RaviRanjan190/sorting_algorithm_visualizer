
/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var rev=document.getElementById("rev");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");
//butts_algos.push(rev);
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * (inp_as.max - inp_as.min) ) + 15;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        var width=(100/array_size-(2*margin_size));
        divs[i].innerHTML= div_sizes[i].toString();
        divs[i].style=" margin: 0%" + margin_size + "% 0; background-color:#084b79; width:" + width + "%; height:" + (div_sizes[i]) + "%; font-size:" +width/1.8+"vw; writing-mode: vertical-rl; text-orientation: upright; text-align: center; color: #e6cbad; border-radius:0 0 "+width*3+"px "+width*3+"px;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}
 rev.addEventListener("click",runalgo);



function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
        
    }
    rev.classList=[];
    rev.classList.add("butt_locked");

    rev.disabled=true;
   /* inp_as.disabled=true;
    inp_gen.disabled=true;
    inp_aspeed.disabled=true;*/

}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
        case "Reverse Array":reverse();
                        break;              
    }

}
