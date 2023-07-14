<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
 

$mailheader = "From: " .$name. "<" .$email.">\r\n";

$recipient = "hiannnguyen@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die('Error!');

echo('<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital@0;1&display=swap" rel="stylesheet">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>

  <header id="header" class="header"></header>

    <div class="center-thanks">
        <div class="thanks-form-container">
            <h3>Form submitted.</h3><br>
            <h3>Thank you for contacting us. We will get back to you as soon as possible!</h3>
            <p class="back">Go back to the <a href="index.html">homepage&#8594;</a></p>
        </div>
</div>

<footer id="footer" class="footer"></footer>
<script src="https://kit.fontawesome.com/1b7c9c4617.js" crossorigin="anonymous"></script>
<script src="main.js"></script>
</body>
')

?>
