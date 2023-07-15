<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Validate input fields (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "error";
        exit;
    }

    // Send email
    $to = "sxfqarshimallcontact@gmail.com"; // Update this to your desired email address
    $subject = "New Contact Message";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>