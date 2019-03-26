<?php
 
$conn = new mysqli("10.44.65.80", "root", "france3", "switch2");
 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
$out = array('error' => false);
 
$crud = 'read';
 
if(isset($_GET['crud'])){
	$crud = $_GET['crud'];
}
 
 
if($crud = 'read'){
	$sql = "select * from members";
	$query = $conn->query($sql);
	$members = array();
 
	while($row = $query->fetch_array()){
		array_push($members, $row);
	}
 
	$out['members'] = $members;
}
 
 
$conn->close();
 
header("Content-type: application/json");
echo json_encode($out);
die();
 
 
?>