function reverse()
{
    c_delay=0;

    for(var i=0;i<array_size/2;i++)
    {   
        var temp=div_sizes[array_size-i-1];
            div_sizes[array_size-i-1]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[i],div_sizes[i],"aqua");//Color update
            div_update(divs[array_size-i-1],div_sizes[array_size-i-1],"aqua");//color update
            div_update(divs[i],div_sizes[i],"#084b79");//Color update
            div_update(divs[array_size-i-1],div_sizes[array_size-i-1],"#084b79");//color update
    
    }

    enable_buttons();
}