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
"InovationNumber" : "200011",
"Judul" : "LISA",
"Deskripsi" : "Inovasi Pembersih Unit",
"Color" : "#4DCC8C",
"ImageUrl" : "/assets/img/event-thumbnail.png"
},
{
    "Id" : 2,
"InovationNumber" : "200012",
"Judul" : "LISA",
"Deskripsi" : "Inovasi Pembersih Unit",
"Color" : "#4DCC8C",
"ImageUrl" : "/assets/img/event-thumbnail.png"
},
{
    "Id" : 3,
"InovationNumber" : "200013",
"Judul" : "LISA",
"Deskripsi" : "Inovasi Pembersih Unit",
"Color" : "#4DCC8C",
"ImageUrl" : "/assets/img/event-thumbnail.png"
},
{
    "Id" : 4,
"InovationNumber" : "200014",
"Judul" : "LISA",
"Deskripsi" : "Inovasi Pembersih Unit",
"Color" : "#D70C27",
"ImageUrl" : "/assets/img/event-thumbnail.png"
}
]
}
