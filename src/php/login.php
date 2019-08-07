<?php
    include('../php/conn.php');

    $name = $_GET['name'];
    $password = $_GET['password'];
    
    $sql = "select * from users where name='$name' and password='$password'";

    $res = $mysqli->query($sql);

    if($res->num_rows == 1){
        echo "1";
    }else{
        echo "0";
    };
?>