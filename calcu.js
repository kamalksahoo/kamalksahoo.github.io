var button0=document.getElementById("but0");
var button1=document.getElementById("but1");
var button2=document.getElementById("but2");
var button3=document.getElementById("but3");
var button4=document.getElementById("but4");
var button5=document.getElementById("but5");
var button6=document.getElementById("but6");
var button7=document.getElementById("but7");
var button8=document.getElementById("but8");
var button9=document.getElementById("but9");
var buttondot=document.getElementById("butdot");
var h2=document.getElementById("h2");
var buttonc=document.getElementById("butca");
var buttonmul=document.getElementById("butmul");
var buttondiv=document.getElementById("butdiv");
var buttonplus=document.getElementById("butminus");
var buttonminus=document.getElementById("butplus");
var buttonequal=document.getElementById("butequal");

var sl="";

function display(z)  
{   
    if(z=="C")
    {
        var str="";
        document.getElementById("h2").innerText=str;
    }
    if(z==0)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button0.value
        document.getElementById("h2").innerText=x;
        sl=sl+button0.value;
    }
    if(z==1)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button1.value
        document.getElementById("h2").innerText=x;
        sl=sl+button1.value;
    }
    if(z==2)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button2.value
        document.getElementById("h2").innerText=x;
        sl=sl+button2.value;
    }
    if(z==3)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button3.value
        document.getElementById("h2").innerText=x;
        sl=sl+button3.value;
    }
    if(z==4)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button4.value
        document.getElementById("h2").innerText=x;
        sl=sl+button4.value;
    }
    if(z==5)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button5.value
        document.getElementById("h2").innerText=x;
        sl=sl+button5.value;
    }
    if(z==6)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button6.value
        document.getElementById("h2").innerText=x;
        sl=sl+button6.value;
    }

    if(z==7)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button7.value
        document.getElementById("h2").innerText=x;
        sl=sl+button7.value;
    }
    if(z==8)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button8.value
        document.getElementById("h2").innerText=x;
        sl=sl+button8.value;
    }
    if(z==9)
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+button9.value
        document.getElementById("h2").innerText=x;
        sl=sl+button9.value;
    }
    if(z==".")
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+buttondot.value
        document.getElementById("h2").innerText=x;
    }
    
    if(z=="*")
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+buttonmul.value
        document.getElementById("h2").innerText=x;
    }
    if(z=="/")
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+buttondiv.value
        document.getElementById("h2").innerText=x;
    }
    if(z=="+")
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+buttonplus.value
        document.getElementById("h2").innerText=x;
    }
    if(z=="-")
    {
        var temp=document.getElementById("h2").innerText
        var x=temp+buttonminus.value
        document.getElementById("h2").innerText=x;
    }
    if(z=="=")
    {
        var temp=document.getElementById("h2").innerText;
        document.getElementById("h2").innerText="";
        var x=eval(temp);
        document.getElementById("h2").innerText=x;
    }
}

button0.addEventListener("click",function(){display(0)});
button1.addEventListener("click",function(){display(1)});
button2.addEventListener("click",function(){display(2)});
button3.addEventListener("click",function(){display(3)});
button4.addEventListener("click",function(){display(4)});
button5.addEventListener("click",function(){display(5)});
button6.addEventListener("click",function(){display(6)});
button7.addEventListener("click",function(){display(7)});
button8.addEventListener("click",function(){display(8)});
button9.addEventListener("click",function(){display(9)});
buttondot.addEventListener("click",function(){display(".")});
buttonc.addEventListener("click",function(){display("C")});
buttonmul.addEventListener("click",function(){display("*")});
buttondiv.addEventListener("click",function(){display("/")});
buttonplus.addEventListener("click",function(){display("+")});
buttonminus.addEventListener("click",function(){display("-")});
buttonequal.addEventListener("click",function(){display("=")});
