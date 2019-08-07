
<?php
header("content-type:text/html;charset=utf-8");

$mysql_conf = array(
  'host'=>'localhost:3306',
  'db_user'=>'root',
  'db_pwd'=>'',
  'db'=>'users'
);

$mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']);

if($mysqli->connect_errno){
    die('连接错误'.$mysqli->connect_errno);
}
$mysqli->query("set names 'utf8';"); 

$select_db = $mysqli->select_db($mysql_conf['db']);

if(!$select_db){
    die('数据库连接错误'.$mysqli->error);
}
// header('content-type:text/html;charset=utf-8');

// $mysql_conf=array(
//   'host'=>'localhost:3306',
//   'db_user'=>'root',
//   'db_pwd'=>'',
//   'db'=>'users'
// );

// $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']);

// if($mysqli->connect_errno){
//   die('连接错误' . $mysqli->connect_errno);
// }

// $mysqli->query("set names 'utf-8';");  //设置查询编码

// $select_db = $mysqli->select_db($mysql_conf['db']); //连接数据库

// if (!$select_db) {
//   // 检查数据库是否连接成功
//   die('数据库连接错误' . $mysqli->error);
// }
?>

