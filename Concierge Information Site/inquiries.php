<!DOCTYPE html>
<html>
<head>
    <title>PHP RESPONSE</title>
    <style>
        body{
            background-image: url("https://images.pexels.com/photos/1888000/pexels-photo-1888000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
            background-size: cover;
            background-position: center;
            height: 100vh;
            background-repeat: no-repeat;
        }
        .copy{
            display: inline-block;
            font-size: 25px;
            margin-left: 20%;
            margin-top: 10%;
            margin-bottom: 5%;
            font-weight: bold;
            color: white;
            font-family: Minion Pro, serif;
        }
        p{
            background-color: deepskyblue;
            border-radius:10px;
            font-weight: bold;
            text-align: center;
            justify-content:center;
            display: inline;
            margin-left:35vw;
            padding:10px;
            margin-top: 15%;

        }
        a{
            text-decoration: none;
        }
        fieldset{
            width:300px;
            margin-left: 35%;
            color:white;
            font-weight: bold;
            padding: 20px;
            font-size: 25px;
        }
    </style>
</head>
<body >

<?php
$name =$_POST["fname"];
$email =$_POST["email"];
$gender =$_POST["gender"];
$questions =$_POST["questions"];
?>

<span class="copy"> <?php echo $name ?> ,This is the message we will recieve and we will get back you in less than three working days</span>
<fieldset>
    Hi,my name is <?php echo $name ?><br>
    I would like to know<br> <?php echo $questions ?>
</fieldset><br>
<p><a href="index.html">RETURN TO HOME PAGE</a> </p>

</body>
</html>
