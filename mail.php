<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

session_start();

$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
$to = 'a1993azad@gmail.com';
$subject = 'celebration';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=charset=utf-8\r\n";
$headers .= "From: a.r_azad93@yahoo.com\r\n";
//$headers .= "Reply-To: ". $_POST['email'] . "\r\n";
$headers .= "CC: a.r_azad93@yahoo.com\r\n";



$message = "<html><body>";

$message .= '<table style="border-color: #666; background: #eee; cellpadding="10">';
$message .= "<tr><td><strong>Gender:</strong> </td><td>" . $data['gender'] . "</td></tr>";
$message .= "<tr><td><strong>Name:</strong> </td><td>" . $data['name'] . "</td></tr>"; 


$message .= "</table>";
$message .= "</body></html>";


//echo $headers;



$response=mail($to, $subject, $message, $headers);

if($response==1)
{
echo true;

}
else{
echo false;
}



?>