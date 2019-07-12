<?php
    include './included/connect.php';
?>
<html>
    <head>
        <title>Symphony</title>
        <link rel="stylesheet" href="./style.css">
        <script src="./included/connect.php"></script>
    </head>
    <body>
        <div class="title-heading">
        <h1>Symphony</h1>
        <h3>All your events, in one place.</h3>
        <br>
        </div>
        <div class="navbar"> <h3>Bruh</h3> </div>
        <?php
        $sql = "SELECT * FROM post";
        $result = mysqli_query($conn, $sql);
        if($result -> num_rows > 0){
            echo "<div class='event-box-container'>";
                while ($rowArray = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                    echo "     <div class='event-block'>";
                    echo "         <h6>posted by " . $rowArray[author] .  "</h6>";
                    echo "         <h4>" . $rowArray[title] . "</h4>";
                    echo "         <h5>" . $rowArray[date] . "  <span class='location-tag'>@  " . $rowArray[location] . "</span></h5>";
                    echo "         <p class='description'>" . $rowArray[description] . "</p>";
                    echo "         <h6 class='timestamp'>" . $rowArray[created_at] . "</h6>";
                    echo " <br> <hr> <br> ";
                    echo "     </div>";
                    echo "     <br>";
                }
            echo "</div>";
        } else {
            die();
        }
    ?>
    </body>
</html>
