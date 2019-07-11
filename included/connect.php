<?php
// ** MySQL Settings ** //
define('DB_NAME', 'Symphony');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'aH5ckblhF084kpCI');

/** MySQL hostname */
define('DB_HOST', '35.231.65.224');

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

?>
