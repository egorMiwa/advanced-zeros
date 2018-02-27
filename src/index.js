module.exports = function getZerosCount(number, base) {

    var j = 0;
    var i = 2;
    var count=0;
    var f = 0;
    var a = [];
    var b = [];
    var c = [];

    do {
        if (base % i == 0)
        {
           base = base / i;
           count++;
           f = 1;
        }
        else
        {   if (f == 1)
          {
            a[j] = i;
            b[j] = count;
            j++;
          }
            i++;
            count = 0;
            f = 0;
        }
    }
    while (i <= base);

    a[j] = i;
    b[j] = count;


    var c = [];
    for (i=0; i<a.length; i++)
    {
      var n = 1;
      c[i]=0;

      while (n <= number)
      {
          n = n * a[i];
          c[i] = c[i] + Math.floor(number / n);
      }
    }

    var res = c[0] / b[0];
    for (i = 0; i < b.length; i++)
    {
      res = Math.min(res, Math.floor(c[i] / b[i]));
    }


    return res;
}
