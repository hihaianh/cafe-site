<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.phptutorial.net/app/css/style.css">
    <title>Register</title>
</head>
<body>
<main>

<div>
    <?php
    if(isset($_POST['register'])) {
        echo 'User is now registered.';
    }
    ?>
</div>


<div>
<form action="register.php" method="post">
    <div class="register-form-container">
        <h1>Registration</h1>
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
        </div>
        <div>
            <label for="password2">Re-type Password</label>
            <input type="password" name="password2" id="password2" required>
        </div>
        <div>
            <label for="agree">
                <input type="checkbox" name="agree" id="agree" value="yes" required/> I agree
                with the
                <a href="#" title="term of services">term of services</a>
            </label>
        </div>
        <input type="submit" name="register" value="Register">Register</button>
        <footer>Already a member? <a href="login.php">Login here</a></footer>
    </div>
</form>
</div>

</main>
</body>
</html>
