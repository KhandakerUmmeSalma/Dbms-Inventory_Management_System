<?php
// Start the session for keeping the user logged in
session_start();

// Include the database connection
include('db.php');

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare the SQL query to check if the email exists in the database
    $sql = "SELECT * FROM users WHERE email = '$email'";

    // Execute the query
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User exists, fetch the user data
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password is correct, start a session for the user
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['logged_in'] = true;

            // Redirect to a logged-in page (e.g., dashboard.php)
            header("Location: dashboard.php");
            exit();
        } else {
            // Incorrect password
            $error_message = "Invalid password!";
        }
    } else {
        // User not found
        $error_message = "No user found with that email!";
    }
}

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <!-- MDB CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="loginCss.css">
</head>

<body>
    <section class="vh-100 custom-section-bg">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-8">
                    <div class="card custom-card-radius shadow-lg">
                        <div class="row g-0">
                            <!-- Left Image Section -->
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="assets/shopping_bag.jpg" alt="login form" class="img-fluid custom-image-radius" />
                            </div>

                            <!-- Right Form Section -->
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form method="POST" action="login.php">
                                        <!-- Brand Logo and Title -->
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fa-solid fa-warehouse fa-2x me-3 icon-color"></i>
                                            <span class="h1 fw-bold mb-0">FreshPick</span>
                                        </div>

                                        <!-- Form Title -->
                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                                        <!-- Email Input -->
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example17" class="form-control form-control-lg custom-input" name="email" required />
                                            <label class="form-label" for="form2Example17">Email address</label>
                                        </div>

                                        <!-- Password Input -->
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example27" class="form-control form-control-lg custom-input" name="password" required />
                                            <label class="form-label" for="form2Example27">Password</label>
                                        </div>

                                        <!-- Login Button -->
                                        <div class="pt-1 mb-4">
                                            <button type="submit" class="btn btn-primary btn-lg btn-block w-100">Login</button>
                                        </div>

                                        <!-- Show error message if there is one -->
                                        <?php if (isset($error_message)) { echo "<p class='text-danger'>$error_message</p>"; } ?>

                                        <!-- Forgot Password and Register Links -->
                                        <div class="d-flex justify-content-between">
                                            <a class="small text-muted" href="#!">Forgot password?</a>
                                            <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="signup.php" style="color: #393f81;">Register here</a></p>
                                        </div>

                                        <!-- Footer Links -->
                                        <div class="d-flex justify-content-between">
                                            <a href="#!" class="small text-muted">Terms of use</a>
                                            <a href="#!" class="small text-muted">Privacy policy</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bootstrap and MDB JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.js"></script>
</body>

</html>
