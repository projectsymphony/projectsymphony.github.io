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
        <p>Welcome!</p>
        <?php
        $sql = "SELECT * FROM post";
        $result = mysqli_query($conn, $sql);
        if($result -> num_rows > 0){
                echo " <table> ";
                echo "     <tr> ";
                echo "         <th>Post ID</th> ";
                echo "         <th>Author</th> ";
                echo "         <th>Date</th> ";
                echo "         <th>Content</th> ";
                echo "     </tr> ";
                while ($rowArray = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                    echo "     <tr> ";
                    echo "         <td>" . $rowArray[post_id] . "</td> ";
                    echo "         <td>" . $rowArray[author] . "</td> ";
                    echo "         <td>" . $rowArray[date] . "</td> ";
                    echo "         <td>" . $rowArray[content] . "</td> ";
                    echo "     </tr> ";
                }
                echo " <table> ";
        } else {
            die();
        }
    ?>
    </body>
</html>
