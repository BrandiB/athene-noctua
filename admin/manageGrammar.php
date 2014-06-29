<html>
<body>

<?php

include "../mysql/mysqlConnect.php";

  	echo "<center><table width='70%' style='border: solid 1px black'>";
  	$query = "select * from latin_grammar order by section";
  	$result = mysql_query($query);
  	if (!$result) {
  		echo "No data yet.";
  	} else {	
  		while ($row = mysql_fetch_array($result)) {
  			$theSection = $row['section'];
  			$theInfo = $row['info'];
  			echo "<tr><td style='border: solid 1px black' valign='top' align='center'>" . $theSection . "<br>(Edit)</td><td style='border: solid 1px black'>" . $theInfo . "</td></tr>";
  		}
  	}
  	
  	echo "</table></center>";	

?><hr>

    <center><h2>Add Grammar Section</h2></center><br>
    <form action="addGrammar.php" method="post">
    Section Number: <input type="text" name="sectionNumber"><br>
    Section:<br>
    <textarea rows="50" cols="100" name="sectionText"></textarea>
    <input type="submit" value="Submit">
    </form>
    
  <?php

mysql_close($con);

?>
</body>
</html>
