<?php
if (empty($POST['name'])) {
    die('Name is required');
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    die('Valid email is required');
}

if (strlen($_POST['password']) < 8) {
    die('Password must be at least 8 characters long');
}

if (!preg_match("/[0-9]/", $_POST['password'])) {
    die('Password must contain at least one number');
}

if ($_POST['password'] !== $_POST['password2']) {
    die('Passwords must match');
}

$password_hash = password_hash($_POST['password'], PASSWORD_DEFAULT)

$mysqli = require __DIR__ . '/database.php';
$sql = 'INSERT INTO user (name, email, password_hash)';

//statement methods
$stmt = $mysqli->stmt_init();
if (!$stmt->prepare($sql)) {
    die('SQL error: " . $mysqli->error');
};

$stmt->bind_param('sss', $_POST['name'], $_POST['email'], $password_hash)
if ($stmt->execute()) {
    echo 'Registration successful'
} else {
    if ($mysqli->error === 1062) {
        die('Email already taken')
    } else {
        die($mysqli->error . '' . $mysqli.error)
    }
};


print_r($_POST);
var_dump($password_hash);
?>
