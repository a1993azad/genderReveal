<?php
//$array = new stdClass;
//$array->name=$_POST['name'];
//$array->gender=$_POST['gender'];
//$fh = fopen('data.json', 'w');
$data = file_get_contents('data.json');
$json_arr = json_decode($data, true);
$json_arr[] = array('name' => $_POST['name'],'gender' => $_POST['gender']);
//array_push($data,$array);
file_put_contents('data.json',json_encode($json_arr,JSON_UNESCAPED_UNICODE));
//fwrite($fh,json_encode($data,JSON_UNESCAPED_UNICODE) );
//fclose($fh);
echo 1;
?>