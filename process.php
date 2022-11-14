<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "viliamnovicky@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $street = $_POST['street'];
    $zip = $_POST['zip'];
    $tovar = $_POST['text'];
    $obraz = $_POST['obraz'];
    $rozmer = $_POST['rozmer'];
    $typ = $_POST['typ'];
    $city = $_POST['city'];
    // $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "Nová správa od klienta", $message . ' - MENO: ' . $name  . ' - PRODUKT: ' . $tovar . ' - OBRAZ: '. $obraz . ' - ROZMER: ' . $rozmer . ' - TYP: ' . $typ . ' - ULICA: ' . $street . ' - PSČ: ' . $zip . ' - MESTO: ' . $city, "From:" . $email);
    
    header('Location: http://viliamnovicky.sk/success.html');
  }

  