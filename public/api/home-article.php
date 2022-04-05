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

$totalData = 4;

?>
{
  "Status":200,
  "Message":"Success",
  "Data":[
    <?php for ($i=0; $i<$totalData; $i++) { ?>
    {
      "IdArticle":"001",
      "ImageUrl":"../assets/img/artikel.png",
      "Title":"Jakarta",
      "Description":"<?php echo(randomIpsum());?>",
      "TotalFavorite":<?php echo(rand(50,100));?>,
      "TotalComment":<?php echo(rand(10,50));?>,
      "IsFaverite":<?php echo(randomBoolean());?>
    }<?php if ($i != $totalData - 1) {echo(',');}?>
    <?php }?>
  ]
}
