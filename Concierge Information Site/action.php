<!DOCTYPE html>
<html>
<head>
    <title>PHP RESPONSE</title>
    <style>
        body{
            background-image: url("https://images.pexels.com/photos/1887992/pexels-photo-1887992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
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
    </style>
</head>
<body >

<?php
$name =$_POST["fname"];
$email =$_POST["email"];
?>

<span class="copy">THANK YOU <?php echo $name; ?> FOR SUBSCRIPING TO OUR MAILING LIST<br>
WE WILL BE SENDING YOU OUR BEST PACKAGES AT THE EMAIL ADRESS <?php echo $email; ?><br>

</span><br>
<p><a href="index.html">RETURN TO HOME PAGE</a> </p>

</body>
</html>
