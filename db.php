<?php
// db.php

// Database connection credentials
$host = 'localhost';  // MySQL host
$username = 'root';   // MySQL username (default: root)
$password = '';       // MySQL password (default: empty string)
$dbname = 'inventory_db';  // The database you created

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
