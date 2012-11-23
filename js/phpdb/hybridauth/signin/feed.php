<?php

    // configure debugging
    //ini_set('display_errors', 'On');
    //error_reporting(E_ALL | E_STRICT);

   $config_file_path = '/home/mcb/phylo/public_html/phpdb/hybridauth/hybridauth/config.php';

   require_once( "/home/mcb/phylo/public_html/phpdb/hybridauth/hybridauth/Hybrid/Auth.php" );

   $provider_name = $_POST["provider"];
   $logid = $_POST["id"];
   $caption = $_POST["caption"];
   $description = $_POST["description"];

   try{

	$hybridauth = new Hybrid_Auth( $config_file_path );
 
	// try to authenticate
 
	$adapter = $hybridauth->authenticate( $provider_name );
 
	// check cookie id first

	$user_profile = $adapter->getUserProfile();
	$my_logid = $user_profile->identifier;
	$fullname = $user_profile->displayName;
	if ($logid != $my_logid) {
	   echo 'failed: ids do not match.';
	   return;	
	}

	// Now, we can post    
        
	if ($provider_name=='Facebook') {
           // Facebook: https://developers.facebook.com/docs/reference/api/    
	   $response = $adapter->api()->api("/me/feed", "post", array(
			picture => "http://phylo.cs.mcgill.ca/images/fullLogoSquare_100x100.png",
			link => "http://phylo.cs.mcgill.ca",
			name => "Phylo",
	  	  	caption => $caption,
			description => $description,
	   ));
	} elseif ($provider_name=='Twitter') {
	    // Twitter: https://dev.twitter.com/docs/api 
            $adapter->setUserStatus($description . " phylo.cs.mcgill.ca #Phylo");
 	} elseif ($provider_name=='LinkedIn') {
	    $adapter->setUserStatus($description);
	} else {
	   echo 'provider not supported';
	}

   }
   catch( Exception $e ){
       $file = fopen("error.log","w");
       echo fwrite($file,$e->getMessage());
       fclose($file);
   }

?>