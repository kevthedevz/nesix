module.exports = {
  name: "gerçek",
  aliases: ["gerçekler", "scroll", "truth"],
  type: "messageCreate",
  code: `
  $color[$id[rhex]]
  $author[$userdisplayname;$useravatar]

  $ifx[
    $if[$message[0]==;
      $description[$id[red] Lütfen bir metin girin.$id[n]$id[n]Kullanım:
\`$getservervar[önek]gerçek metin\`]]

    $elseif[$charcount[$message]>60;
      $description[$id[red] Lütfen 60 karakterden az bir metin girin.]]

    $elseif[$httprequest[https://api.alexflipnote.dev;get]!=200;
      $description[$id[red] Şu anda API yanıt vermiyor, eğer bu hatayı sürekli alıyorsan geliştiriciye bildir.]]

    $else[
    $color[$id[ana]]
    $image[https://api.alexflipnote.dev/scroll?text=$encodeuri[$message]]
    ]
  ]
  `
}