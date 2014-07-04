<html>
<body>

<?php

include "../mysql/mysqlConnect.php";

$sectionNumber = $_POST["sectionNumber"];
$sectionText = addslashes($_POST["sectionText"]);

  // Insert and display sections inserted thus far, in section order.
  $query = 'INSERT INTO latin_grammar VALUES ("' . $sectionNumber . '", "' . $sectionText . '")';
  echo $query;
  if (!mysql_query($query)) {
  echo mysql_errno($con) . ": " . mysql_error($con). "\n";
  	echo "Error inserting.";
  } else {
	echo "<script>document.location.href = 'manageGrammar.php';</script>";  
  }
 
mysql_close($con);

?>
</body>
</html>
