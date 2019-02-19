<?php

if (isset($_POST['submit'])) {
  require __DIR__ . '/vendor/autoload.php';

  function sendMail($to, $body, $attachment) {
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
    $mail->addAttachment($attachment);
    $mail->Subject = 'ЭСДИ онлайн заявка с сайта';
    $mail->Body = $body;
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    return $mail->send();
  }

  /*$secret = '6LdpuIkUAAAAAFkPAo_gPNWKWZJFV5_wWKAs4I-e';
  $response = $_POST['g-recaptcha-response'];
  $url = 'https://www.google.com/recaptcha/api/siteverify';

  $data = [
    'secret' => $secret,
    'response' => $response
  ];

  $options = [
    'http' => [
      'method' => 'POST',
      'content' => http_build_query($data)
    ]
  ];

  $context = stream_context_create($options);
  $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
  $captchaSuccess = json_decode($verify);
  */

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $comment = $_POST['comment'];


  $body = '<table style="border: 1px solid #ddd; border-collapse: collapse; width: 100%;">
  <thead>
  <tr style="background: #f9f9f9;">
    <th style="padding: 8px; border: 1px solid #ddd;">Имя</th>
    <th style="padding: 8px; border: 1px solid #ddd;">Email</th>
    <th style="padding: 8px; border: 1px solid #ddd;">Телефон</th>
    <th style="padding: 8px; border: 1px solid #ddd;">Комментарий</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $name .  '</td>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $email .  '</td>
      <td style="padding: 8px; border: 1px solid #ddd;">' . $phone .  '</td>
      <td style="padding: 8px; border: 1px solid #ddd;">'. nl2br($comment) . '</td>
    </tr>
  </tbody>
</table>

</body>
</html>';

  $file = "attachment/" . basename($_FILES['attachment']['name']);

  // перемещаем загруженный файл в новое место
  move_uploaded_file($_FILES['attachment']['tmp_name'], $file);

  // если сообщение отправлено
  if (sendMail('sergey_bobkov@inbox.ru', $body, $file)) {
    echo $message = '<div class="alert alert-success">Сообщение успешно отправлено</div>';
    // удаляем файл
    if (!empty($_FILES['attachment']['name'])) {
      unlink($file);
    }

  } else {
    echo $message = '<div class="alert alert-danger">Что то пошло не так</div>';
  }
}



