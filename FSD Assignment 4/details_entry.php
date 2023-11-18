
<?php

$server_name="localhost";

$username="root";

$password="";

$database_name="database1";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)
{die("Connection Failed:" . mysqli_connect_error());}

if(isset($_POST['save']))
{
$school = $_POST['school'];
$phone = $_POST['phone'];
$state = $_POST['state'];
$city = $_POST['city'];
$country = $_POST['country'];
$pincode = $_POST['pincode'];

$sql_query = "INSERT INTO entry_details (school,phone,state,city,country,pincode)
	 VALUES ('$school','$phone','$state','$city','$country','$pincode')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);

}
?>