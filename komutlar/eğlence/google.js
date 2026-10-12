module.exports = {
  name: "google",
  type: "messageCreate",
  code: `
  $color[$id[rhex]]
  $author[$userdisplayname;$useravatar]

  $ifx[
    $if[$message[0]==;
      $description[$id[red] Lütfen birinci metni girin.$id[n]$id[n]Kullanım:
\`$getservervar[önek]google metin1 metin2\`]]

    $elseif[$and[$charcount[$message[0]]>40;$message[1]==];
      $description[$id[red] Lütfen birinci metni 40 karakterden az girin.]]

    $elseif[$message[1]==;
      $description[$id[red] Lütfen ikinci metni girin.$id[n]$id[n]Kullanım:
\`$getservervar[önek]google $message[0] metin2\`]]

    $elseif[$and[$charcount[$message[0]]>40;$charcount[$message[1]]>40];
      $description[$id[red] Lütfen her iki metni de 40 karakterden az girin.]]

    $elseif[$charcount[$message[0]]>40;
      $description[$id[red] Lütfen birinci metni 40 karakterden az girin.]]

    $elseif[$charcount[$message[1]]>40;
      $description[$id[red] Lütfen ikinci metni 40 karakterden az girin.]]

    $elseif[$httprequest[https://api.alexflipnote.dev;get]!=200;
      $description[$id[red] Şu anda API yanıt vermiyor, eğer bu hatayı sürekli alıyorsan geliştiriciye bildir.]]
    
    $else[
      $color[$id[ana]]
      $image[https://api.alexflipnote.dev/didyoumean?top=$encodeuri[$message[0]]&bottom=$encodeuri[$message[1]]]
    ]
  ]
  `
}
