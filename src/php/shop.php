<?php
    include('../php/conn.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product where id in ($id)";
    
    $res = $mysqli->query($sql);

    $arr=array();

    while($row = $res->fetch_assoc()){
      array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>