<?php
global $conn;
$host = 'localhost';
$user = '';
$pass = '';
$dbname = 'portfolio';

$conn = mysqli_connect($host, $user, $pass,$dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} 
// // create table
// $sql = "INSERT INTO input ( namabarang, hargabarang, keterangan)
// 					Value ( 'jacboat', '1000000', 'barang dagadqwdqwdwqwqdngan' )";

// // database koneksi

// if (mysqli_query($conn, $sql)) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }


?>