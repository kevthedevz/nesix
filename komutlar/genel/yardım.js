module.exports = {
  name: "yardım",
  aliases: ["help"],
  type: "messageCreate",
  code: `
  $color[$id[ana]]
  $author[$userdisplayname;$useravatar]
  $title[Ana Sayfa]
$description[
Yardım menüsüne hoş geldin!

Aşağıdaki butonları kullanarak kategoriler arasında gezinebilirsin.

$id[asyf] **Ana Sayfa**$id[n]$id[gnl] **Genel**$id[n]$id[eğl] **Eğlence**
]
$footer[Sayfa 1/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;1;$id[asyf];true]
  $addbutton[y-genel-$authorid;;2;$id[gnl]]
  $addbutton[y-eğlence-$authorid;;2;$id[eğl]]
  `
}