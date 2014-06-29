<?php

include "../mysql/mysqlConnect.php";

$sectionNumber = $_POST["sectionNumber"];
$sectionText = $_POST["sectionText"];

if (!$sectionNumber) {
  // Display form to insert a section.

  ?>
    <center><h2>Add Grammar Section</h2></center><br>
    <form action="addGrammar.php" method="post">
    Section Number: <input type="text" name="sectionNumber"><br>
    Section:<br>
    <textarea rows="50" cols="400" name="sectionText"></textarea>
    <input type="submit" value="Submit">
    </form>
  <?php

} else {
  // Insert and display sections inserted thus far, in section order.
  echo $sectionNumber + "<br>" + $sectionText;

}

mysql_close($con);

?>
