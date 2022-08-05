$name = $_POST['Name'];
$email = $_POST['email'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);

if(mail("egikvtumane916@gmail.com", "ФИО: ".$name"", ".$message","From: ".$email" \r\n");)
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}