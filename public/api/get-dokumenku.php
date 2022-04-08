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
      "name": "Folder Makalah",
      "ImageUrl": "{DOMAIN}/upload/folder.png",
      "Type": "folder",
      "IsPublic": true,
      "IsActive": true,
      "Children": [
        {
            "DocumentId": 1,
          "name": "Folder Makalah.docx",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".docx",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/folder-makalah.docx"
        },
        {
            "DocumentId": 2,
          "name": "Data Perhitungan.docx",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".docx",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/data-perhitungan.docx"
        },
        {
            "DocumentId": 3,
          "name": "Inovasi AI.pdf",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".pdf",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/inovasi-ai.pdf"
        },
        {
            "DocumentId": 4,
          "name": "Data AI.pdf",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".pdf",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/data-ai.pdf"
        },
        {
            "DocumentId": 5,
          "name": "Inovasi AI2.pdf",
          "ImageUrl": "{DOMAIN}/upload/file.png",
          "Type": ".pdf",
          "IsPublic": true,
          "IsActive": true,
          "PathUrl": "{DOMAIL}/upload/dokumen/inovasi-ai2.pdf"
        }
      ]
    }
  ]
}

