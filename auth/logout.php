<?php

session_start();

session_destroy();

// header(Location: '../index.html');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>You are now logged out</h1>
    <p>Return to <a href='../index.html'>homepage</a></p>
</body>
</html>