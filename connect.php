<?php
$servername = "locallhost";
$database = "dbname";// database name
$username = "uname";//mysql username
$password = "pass";//mysql pass

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);
 
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

?>