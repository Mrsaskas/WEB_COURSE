

//---------------------------------------------------------------------

function num(a)
{
    if(a%1===0)
    {
        if(a%2===0)
        {
            return console.log('парне')
        }
        else
        {
            return console.log('не парне')
        }
    }
    else
    {
        return ''
    }
}


num(2);
num(1);
num('sfg')
//-----------------------------------------------------


function isPrime(num)
{
    for (var i = 2; i < num; i++)
    {
        if(num% i ===0)
        {
            return false
        }
        
    }
}


function inf()
{
    var i = 1;
    var n = 0;
    var sum = 0;
    var numbers = [];
    while(1)
    {

        if(n === 5)
        {
            break;
        }
        if (isPrime(i) != false)
        {
            numbers[n] = i;
            console.log('i = ' + i);
            n++;
        }

        i++;
    }

    for(var j = 0; j < 5; j++)
    {

        sum += numbers[j];
    }

    return console.log(sum);

}

inf();

//-----------------------------------------------------------------------


function sum(n)
{

    var s = 0;
    var c = 1;
    var k = 1;
    var cur = 0;

    for(var i = 1; i <= n; i++)
    {
        cur += k * c;
        s += cur;



        c = c * 10;

    }

    // console.log('c = ' + c)
    // console.log('cur = ' + cur)
    console.log('sum = '+ s)

    return s;

}

sum(5);


