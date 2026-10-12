module.exports = {
  name: "bakiye",
  aliases: ["cüzdan"],
  type: "messageCreate",
  code: `
  $let[u;$mentioned[0;true]]

  $color[$id[ana]]
  $author[$username[$get[u]] | Bakiye;$useravatar[$get[u]]]
a
  $addfield[Nakit:;$getglobalvar[sb]$separatenumber[$getuservar[nakit;$get[u]];.]]

  $addfield[Banka:;$getglobalvar[sb]$separatenumber[$getuservar[banka;$get[u]];.]]

  $addfield[Toplam:;$getglobalvar[sb]$separatenumber[$sum[$getuservar[nakit;$get[u]];$getuservar[banka;$get[u]]];.]]
  `
}