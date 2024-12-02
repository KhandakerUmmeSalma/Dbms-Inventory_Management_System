<?php
// Include the database connection file
include('db.php');

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // Validate passwords
    if ($password !== $confirmPassword) {
        echo "Passwords do not match!";
        exit();
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL query to insert user data
    $sql = "INSERT INTO users (username, email, password, phone, address) 
            VALUES ('$username', '$email', '$hashedPassword', '$phone', '$address')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>

<!-- HTML Form for Signup -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
    <link rel="stylesheet" href="loginSignup.css">
</head>
<body>
    <div class="container custom-section-bg">
        <div class="form-container custom-card-radius">
            <h2>Create an Account</h2>
            <form method="POST" action="signup.php" id="signupForm">
                <input type="text" class="input-field" id="username" name="username" placeholder="Username" required>
                <input type="email" class="input-field" id="email" name="email" placeholder="Email Address" required>
                <input type="password" class="input-field" id="password" name="password" placeholder="Password" required>
                <input type="password" class="input-field" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>

                <!-- Phone Number Field -->
                <input type="tel" class="input-field" id="phone" name="phone" placeholder="Phone Number" required pattern="^\+?[1-9]\d{1,14}$" title="Enter a valid phone number, e.g., +1234567890">

                <!-- Address Dropdown -->
                <select class="input-field" id="address" name="address" required>
                    <option value="" disabled selected>Select Your Address</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Borishal">Borishal</option>
                    <option value="Rajshahi">Rajshahi</option>
                </select>

                <button type="submit" class="submit-btn">Sign Up</button>
            </form>
            <button class="back-btn" onclick="goToLogin()">Back to Login</button>
        </div>
    </div>

    <script>
        // JavaScript to handle the "Back to Login" button action
        function goToLogin() {
            window.location.href = 'login.html'; // Replace with your login page URL
        }

        // Optional: Form validation for the signup
        document.getElementById('signupForm').addEventListener('submit', function (event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                event.preventDefault(); // Prevent form submission if passwords don't match
            }
        });
    </script>
</body>
</html>
