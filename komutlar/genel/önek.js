module.exports = {
  name: "önek",
  aliases: ["prefix"],
  type: "messageCreate",
  code: `
  $color[$id[rhex]]
  $author[$userdisplayname;$useravatar]
  
  $ifx[
  $if[$hasperms[$guildid;$authorid;Administrator]!=true;
    $description[$id[red] Bu komutu kullanabilmen için \`Yönetici\` iznine sahip olmalısın.]]

  $elseif[$message[0]==;
    $description[$id[red] Lütfen bir önek girin.$id[n]$id[n]Kullanım:
\`$getservervar[önek]önek <yeni önek>\`]]

  $elseif[$charcount[$message[0]]>5;
    $description[$id[red] Lütfen 5 veya daha az karakter girin.]]

  $elseif[$getservervar[önek]==$message[0];
    $description[$id[red] Şu anda zaten \`$message[0]\` önekini kullanıyorsunuz.]]

  $else[
    $setservervar[önek;$message[0]]
  $color[$id[ohex]]
  $description[$id[onay] **$guildname[$guildid]** sunucusu için önek \`$message[0]\` olarak ayarlandı.]
  ]]
  `
}