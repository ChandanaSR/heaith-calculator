document.getElementById("bt1").addEventListener("click",fun)


function fun()
{
    var x,a,b;
    if(document.getElementById("id2").value=='')
        {
        document.getElementById("id2").value=0;
            var x=0;
        }
    else
        {
            var x=parseFloat(document.getElementById("id2").value);
        }
    if(document.getElementById("id3").value=='')
        {
        document.getElementById("id3").value=0;
            var a=0;
        }
    else
        {
            var a=parseFloat(document.getElementById("id3").value);
        }
    if(document.getElementById("id4").value=='')
        {
        alert('Enter weight');
        }
    else
        {
            var b=parseFloat(document.getElementById("id4").value);
        }
    var y,c,d,e;
    c=30.48*x;
    e=2.54*a;
    d=c+e;
    y=(b/Math.pow(d,2))*Math.pow(10,4);
    var p= y.toFixed(2);
    
    document.getElementById("id").value=p;
    if(p<18.5)
        {
            document.getElementById("u").innerHTML="underweight"
        }
    else if(18.5<p && p<24.9)
            {
                document.getElementById("u").innerHTML="normalweight"
            }
    else if(25<p && p<29.9)
            {
                document.getElementById("u").innerHTML="overweight"
            }
    else
        document.getElementById("u").innerHTML="obese"
}

function f()
{
    document.getElementById("id2").value="";
    document.getElementById("id3").value="";
    document.getElementById("id4").value="";
    document.getElementById("u").innerHTML="";
    document.getElementById("id").value="";
    
}


function cal1()
{
    var gender=document.getElementById("r1").value;
    var WORK=document.getElementById("work").value;
    var RATE=document.getElementById("rate").value;
    var AGE=document.getElementById("age").value;
    if(RATE!=0)
    {var maximumheartrate=220-AGE;
    document.getElementById("max").innerHTML="the maximum heart rate is "+maximumheartrate;
    var HRR=maximumheartrate-RATE;
    document.getElementById("hrr").innerHTML="The resting heart rate is "+HRR;
    if(WORK=="very hard" && AGE!=0)
        {
            document.getElementById("w").innerHTML="The heart rate is 171-190";
        }
    else
        if(WORK=="hard" && AGE!=0)
        {
            document.getElementById("w").innerHTML="The heart rate is 152-171";
        }
    else
        if(WORK=="moderate" && AGE!=0)
        {
            document.getElementById("w").innerHTML="The heart rate is 133-152";
        }
    else if(WORK=="little" && AGE!=0)
        {
            document.getElementById("w").innerHTML="The heart rate is 95-133";
        }
}else
    alert("enter data");
}
function clr1()
{
    document.getElementById("r1").value="";
    document.getElementById("work").value="";
    document.getElementById("rate").value="";
    document.getElementById("age").value="";
    document.getElementById("w").innerHTML="";
    document.getElementById("max").innerHTML="";
    document.getElementById("hrr").innerHTML="";

}

function cal2()
{
    var a=document.getElementById("a").value;
    var gender=document.getElementById("r").value;
    var b=document.getElementById("f").value;
    var c=document.getElementById("i").value;
    if(b==5){
    if(gender=="male" && b!="" && c!="")
        {
            //var y=b*12+c;
            var z=56.2+1.41*b;
            document.getElementById("p1").innerHTML="the ideal weight according to miles FORMULAIS "+ z;
        }
    else if(gender=="female" && b!="" && c!=""){
        //var y=b*12+c;
            var z=53.1+1.36*b;
            document.getElementById("p1").innerHTML="the ideal weight according to miles FORMULAIS "+ z;
        
         } 
    else alert("enter the data");}
    else alert("calculates for 5 feets");
}

function clr2()
{
    document.getElementById("a").value=""
    document.getElementById("r").value=""
    document.getElementById("f").value=""
    document.getElementById("i").value=""
     document.getElementById("p1").innerHTML=""
}

function cal4()
{
    var g=document.getElementById("w").value;
    var A=document.getElementById("a").value;
    if(g=="")
        alert("enter the weight");
    else
        {
            var glasses=g/2.2;
            if(A<30)
                {
                    var water=glasses*40;
                }
            else if(30>A && A<55)
                {
                    var water=glasses*35;
                }
            else var water=glasses*30;
            
            var sum=water/28.3;
            var sum1=sum/8;
            document.getElementById("m").innerHTML="Your daily water requirement is "+sum1+"Glasses";
            document.getElementById("h").innerHTML="Take 2-3 glasses of water additionally if you exercise or if you environmental conditions are HOT ";
        }
    
}

function clr4()
{
    document.getElementById("w").value="";
    document.getElementById("a").value="";
    document.getElementById("m").innerHTML="";
    document.getElementById("h").innerHTML=""
}



