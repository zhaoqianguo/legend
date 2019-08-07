<?php
  include('./conn.php');

    $name = $_GET['name'];
    $password=$_GET['password'];
    $card=$_GET['card'];

    $sql_ins = "insert into users(name,password,card)values('$name','$password','$card')";

    $result = $mysqli->query($sql_ins);
    if($result){
      echo '1';
    }else{
      echo '0';
    };
    
    $mysqli->close();
?>