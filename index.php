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
        <h1>Symphony</h1>
        <h3>All your events, in one place.</h3>
        <br>
        <div class="navbar"> <h3>Bruh</h3> </div>
        <?php
        $sql = "SELECT * FROM post";
        $result = mysqli_query($conn, $sql);
        if($result -> num_rows > 0){
            echo "<div class='event-box-container'>";
                while ($rowArray = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                    echo "     <div class='event-block'>";
                    echo "         <h4>" . $rowArray[title] . "</h4>";
                    echo "         <h5>" . $rowArray[location] . " " . $rowArray[date] . " " . $rowArray[author] . "</h5>";
                    echo "         <p>" . $rowArray[description] ;
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
