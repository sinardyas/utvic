<?php
require('./_functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Methods: DELETE, GET, OPTIONS, PATCH, POST, PUT');
header('Access-Control-Allow-Headers: Accept, Accept-Encoding, Authorization, Cache-Control, Content-Type, Origin, Pragma, X-Requested-With, Auth');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('HTTP/1.1 204 No Content');

    exit();
}
?>
{
"Status" : 200,
"Message" : "Success",
"Data" : [
{
"Id" : 1,
"Judul" : "Jakarta"
},
{
"Id" : 2,
"Judul" : "Bandung"
}]
}
