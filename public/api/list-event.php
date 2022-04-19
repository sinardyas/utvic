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
    "Status": 200,
    "Message": "Success",
    "Data": [
        {
            "IdEvent": 1,
        "ImageUrl": "http://localhost:9000/assets/img/event-thumbnail.png",
        "Title" : "Jakarta",
        "Description" : "lorem ipsum",
        "Date" : "2022-03-12"
        },
        {
            "IdEvent": 2,
        "ImageUrl": "http://localhost:9000/assets/img/event-thumbnail.png",
        "Title" : "Jakarta",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
        "Date" : "2022-03-12"
        }
    ]
}
