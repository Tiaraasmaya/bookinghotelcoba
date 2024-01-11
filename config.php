<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "databasehotel";
$port = 3310;

$conn = mysqli_connect($server,$username,$password,$database,$port);

if(!$conn){
    die("<script>alert('connection Failed.')</script>");
}
// else{
//     echo "<script>alert('connection successfully.')</script>";
// }
?>