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
  "Data":{
    "UserId":"0000111",
    "AreaName":"JAKARTA",
    "Email":"farhan@gmail.com",
    "Token": "jkh897%^&@#$",
    "Name":"Agat322",
    "PhoneNumber":"089518828538",
    "ProfilePicture":"http://localhost:59662/upload/image/Default.jpeg",
    "Position":"Teknisi",
    "MasaKerja":"10 Tahun",
    "Role":[
      {
        "RoleId":1,
        "RoleName":"General User"
      },
      {
        "RoleId":2,
        "RoleName":"Innovation Champion"
      }
    ]
  }
}
