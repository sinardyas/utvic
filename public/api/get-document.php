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
  "Message": "Sukses",
  "Data": [
    {
        "DocumentId": 123,
      "name": "Makalah",
      "ImageUrl": "{DOMAIN}/upload/folder.png",
      "Type": "folder",
      "IsPublic": true,
      "IsActive": true,
      "Children": [
        {
            "DocumentId": 123,
          "name": "makalah.doc",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".doc",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/makalah.doc"
        },
        {
            "DocumentId": 123,
          "name": "makalah.doc",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".doc",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/makalah.doc"
        }
      ]
    },
    {
        "DocumentId": 123,
      "name": "Makalah",
      "ImageUrl": "{DOMAIN}/upload/folder.png",
      "Type": "folder",
      "IsPublic": true,
      "IsActive": true,
      "Children": [
        {
            "DocumentId": 123,
          "name": "makalah.doc",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".doc",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/makalah.doc"
        },
        {
            "DocumentId": 123,
          "name": "makalah.doc",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".doc",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/makalah.doc"
        }
      ]
    }
  ]
}

