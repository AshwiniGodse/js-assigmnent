# js-assigmnent
js-assignments
<html>
    <head>
        <title>Assignment-1</title>
    </head>
    <body>

        <script>

           var today = new Date();

           var weekday = new Array(7);
           weekday[0] = "Sunday";
           weekday[1] = "Monday";
           weekday[2] = "Tuesday";
           weekday[3] = "Wednesday";
           weekday[4] = "Thursday";
           weekday[5] = "Friday";
           weekday[6] = "Saturday";

           var day = weekday[today.getDay()];

           var time = today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds();

           document.write("current day is : " +day);
           document.write("<br>")  
           document.write("current time is : " +time);  

        </script>
    </body>
</html>
