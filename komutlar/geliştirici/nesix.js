module.exports = {
  type: "clientReady",
  code: `
  $arrayload[durum;|;Bu ekonomide Nesix mi?|Hâlâ BDFD kullanan var mı?|Nesix™ made with ❤️]
  $let[index;0]
$setinterval[
$setstatus[online;Custom;$arrayat[durum;$get[index]]]
  $let[index;$math[$get[index]+1]]
    $if[$get[index]>=$arraylength[durum];$let[index;0]]
;30s]

  $sendmessage[1559147121914019900;
    $color[#4ba75a]
    $title[$id[çevrimiçi] $discordtimestamp[$gettimestamp;RelativeTime]]
    $image[https://skinmc.net/achievement/8/Ben+geldim/Nesix+yeniden+aktif%2521]
]
`
}