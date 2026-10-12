module.exports = {
  type: "interactionCreate",
  code: `
  $onlyif[$checkcontains[$customid;y-]==true;]

  $let[p;$getservervar[önek]]

  $color[$id[ana]]
  $author[$userdisplayname;$useravatar]
  
  $ifx[
$c[// ANA MENÜ]
  $if[$customid==y-ana-$authorid;
  $interactionupdate[
$title[$id[asyf] Ana Sayfa]
$description[
Yardım menüsüne hoş geldin!

Aşağıdaki butonları kullanarak kategoriler arasında gezinebilirsin.

$id[asyf] **Ana Sayfa**$id[n]$id[gnl] **Genel**$id[n]$id[eğl] **Eğlence**
]
$footer[Sayfa 1/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;1;$id[asyf];true]
  $addbutton[y-genel-$authorid;;2;$id[gnl]]
  $addbutton[y-eğlence-$authorid;;2;$id[eğl]]]]

$c[// GENEL]
  $elseif[$customid==y-genel-$authorid;
  $interactionupdate[
$title[$id[gnl] Genel Komutlar]
$description[
Komutlarda belirtilen\\\;
() işareti opsiyonel, <> ise zorunlu olduğu anlamına gelir.

\`$get[p]ping\`
Botun gecikme süresini gösterir

\`$get[p]bilgi\`
Botun istatistiklerini listeler

\`$get[p]önek <yeni önek>\`
Sunucuya özel prefix(önek)'i değiştirir
]
$footer[Sayfa 2/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;2;$id[asyf]]
  $addbutton[y-genel-$authorid;;1;$id[gnl];true]
  $addbutton[y-eğlence-$authorid;;2;$id[eğl]]]]

$c[// EĞLENCE]
  $elseif[$customid==y-eğlence-$authorid;
  $interactionupdate[
$title[$id[eğl] Eğlence Komutları]
$description[
Komutlarda belirtilen\\\;
() işareti opsiyonel, <> ise zorunlu olduğu anlamına gelir.

\`$get[p]gayölç (@kişi)\`
Eşcinsellik ölçümü yapar

\`$get[p]google <metin1> <metin2>\`
"Bunu mu demek istediniz" meme'ini oluşturur

\`$get[p]gerçek <metin>\`
Gerçeğin parşömeni meme'ini oluşturur
]
$footer[Sayfa 3/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;2;$id[asyf]]
  $addbutton[y-genel-$authorid;;2;$id[gnl]]
  $addbutton[y-eğlence-$authorid;;1;$id[eğl];true]]]

$c[// YANLIŞ BUTON]
  $else[
  $ephemeral
  $color[$id[rhex]]
  $description[$id[red] Bu mesaj size ait değil. Lütfen \`$getservervar[önek]yardım\` komutunu çalıştırın.]
    ]
  ]
  `
}