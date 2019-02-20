<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
  require __DIR__ . '/vendor/autoload.php';

  function sendMail($to, $body) {
    $mail = new \PHPMailer\PHPMailer\PHPMailer();

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "esdipochta@gmail.com";
    $mail->Password = "1987Kira1954";
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->setFrom('esdipochta@gmail.com', 'ЭСДИ');
    $mail->addAddress($to);
    //$mail->AddBCC($toCopy);
    $mail->Subject = 'ЭСДИ онлайн заявка с сайта';
    $mail->Body = $body;
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    return $mail->send();
  }

  $name = trim($_POST['name']);
  $phone = trim($_POST['phone']);
  $email = trim($_POST['email']);


  $body = '<table style="border: 1px solid #ddd; background: #f9f9f9; border-collapse: collapse; width: 100%;">
  <thead>
 
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Имя</td>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $name .  '</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $email .  '</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">Телефон</td>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $phone .  '</td>
    </tr>
  </tbody>
</table>

</body>
</html>';

  if (sendMail('sergey_bobkov@inbox.ru', $body)) {
    echo $message = '<div class="alert alert-success">Сообщение успешно отправлено</div>';

  } else {
    echo $message = '<div class="alert alert-danger">Что то пошло не так</div>';
  }


}



