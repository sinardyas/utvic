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
  "Status":200,
  "Message":"Success",
  "Data":[
    {
      "IdFitur":"001",
      "ImageUrl":"../assets/img/innovation.png",
      "Title":"Jakarta",
      "Sort":1
    },
    {
      "IdFitur":"002",
      "ImageUrl":"../assets/img/innovation.png",
      "Title":"Jakarta",
      "Sort":2
    },
    {
      "IdFitur":"003",
      "ImageUrl":"../assets/img/innovation.png",
      "Title":"Jakarta",
      "Sort":3
    },
    {
      "IdFitur":"004",
      "ImageUrl":"../assets/img/innovation.png",
      "Title":"Jakarta",
      "Sort":4
    },
    {
      "IdFitur":"005",
      "ImageUrl":"../assets/img/innovation.png",
      "Title":"Jakarta",
      "Sort":4
    }
  ]
}
