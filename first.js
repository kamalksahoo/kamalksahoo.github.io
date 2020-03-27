
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");

const button=document.getElementById("button");
const result=document.getElementById("result");

const button2=document.getElementById("button2");
const result2=document.getElementById("result2");


const button3=document.getElementById("button3");
const button4=document.getElementById("button4");


function addition()
{
    if(num1.value != '' &&  num2.value != "")
    {
        let temp=Number(num1.value) + Number(num2.value);
        result.textContent="the result :"+num1.value+"+"+num2.value+"="+temp;
        num1.value=""
        num2.value=""
    }
    else
    {
        result.textcontent="enter valid input";
    }

}
function sub()
{
    if(num1.value != '' &&  num2.value != "")
    {
        let temp=Number(num1.value) - Number(num2.value);
        result.textContent="the result :"+num1.value+"-"+num2.value+"="+temp;
        num1.value=""
        num2.value=""
    }
    else
    {
        result.textcontent="enter valid input";
    }
}
function mul()
{
    if(num1.value != '' &&  num2.value != "")
    {
        let temp=Number(num1.value) * Number(num2.value);
        result.textContent="the result :"+num1.value+"*"+num2.value+"="+temp;
        num1.value=""
        num2.value=""
    }
    else
    {
        result.textcontent="enter valid input";
    }
}
function div()
{
    if(num1.value != '' &&  num2.value != "")
    {
        let temp=Number(num1.value) / Number(num2.value);
        result.textContent="the result :"+num1.value+"/"+num2.value+"="+temp;
        num1.value=""
        num2.value=""
    }
    else
    {
        result.textcontent="enter valid input";
    }
}

button.addEventListener("click",addition);
button2.addEventListener("click",sub);
button3.addEventListener("click",mul);
button4.addEventListener("click",div);



