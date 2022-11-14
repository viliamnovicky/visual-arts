<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "viliamnovicky@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $street = $_POST['street'];
    $zip = $_POST['zip'];
    $tovar = $_POST['text'];
    $city = $_POST['city'];
    // $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "Nová správa od klienta", $message . ' - ' . $name, "From:" . $email .
    ' - ' $street . ' - ' $zip . ' - ' $city . ' - ' $tovar) ;
    
    header('Location: http://viliamnovicky.eu/success.html');