<?php
  include('./conn.php');
  
    $name = $_GET['name'];
    
    $sql="select * from users where name='$name'";

    $res=$mysqli->query($sql);

    if($res->num_rows>0){
      echo '{"has":"true","msg":"用户名已存在"}';
    }else{
      echo '{"has":"flase","msg":"用户名可以使用"}';
    }

    // $sql_ins = "insert into users(name,password,card)values('$name','$password','$card')";

    // $result = $mysqli->query($sql_ins);
    // if($result){
    //   echo '注册成功'
    // }
    
    // $mysqli->close();
?>