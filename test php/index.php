<?php

$auth_realm = 'My realm';

require_once 'auth.php';

echo "Vous etes connecté avec le compte {$_SESSION['username']}<br>";
echo '<p><a href="?action=logOut">Déconnection</a></p>'

?>