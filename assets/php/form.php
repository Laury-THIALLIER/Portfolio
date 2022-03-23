<?php

    // Récupération des données du formulaire
    $from = htmlspecialchars($_POST['mail']);
    $object = htmlspecialchars($_POST['object']);
    $message = htmlspecialchars($_POST['message']);


    // Destinataire
    $to  = 'laury.thiallier@gmail.com';

    // Sujet
    $subject = 'Formulaire Gmail - Portfolio';

    // Message
    $message = '
     <html>
      <head>
      </head>
      <body>
        <h3>'.$object.'</h3>

        </br>

        <p><b>De </b> : '.$from.'</p>
        <br>
        <p><b>Message</b> : '.$message.'</p>
      </body>
     </html>
     ';

     // Entête type mail
     $headers[] = 'MIME-Version: 1.0';
     $headers[] = 'Content-type: text/html; charset=iso-8859-1';

     $headers[] = 'From: Site Web <formulaire@admin.fr>';

     // Envoi
     mail($to, $subject, $message, implode("\r\n", $headers));

     //Redirection
     header('Location: ../../index.html');
     exit();
 ?>