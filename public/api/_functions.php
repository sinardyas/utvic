<?php
function generateRandomString($length = 10) {
  $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}


function randomName() {
  $names = array(
      'Juan',
      'Luis',
      'Pedro',
      'Elaina England',
      'Anderson Bush',
      'Braden Draper',
      'Phillipa Travis',
      'Sherri Jennings',
      'Jamal Larson',
      'Eben Britt',
      'Izabel Whitehouse',
      'Abbie Charlton',
      'Rhys Kim'

  );
  return $names[rand ( 0 , count($names) -1)];
}

function randomPhone() {
  $phone = '08990000000';
  $phone = sprintf('%s%04d', substr($phone, 0, -7), rand(0, 9999999));

  return $phone;
}


function randomDate() {
  $timestamp = mt_rand(1, time());
  $date = date("d M Y h:m", $timestamp);

  return $date;
}

// 
function randomBoolean() {
  $names = array(
    'true',
    'false'

  );
  return $names[rand ( 0 , count($names) -1)];
}


// 
function randomIpsum() {
  $names = array(
    'Lorem ipsum',
    'Quisque porttitor',
    'Maecenas ac blandit',
    'Sed felis leo',
    'Nulla tincidunt ligula',
  );
  return $names[rand (0 , count($names) -1)];
}

?>