module.exports = {
  type: "presenceUpdate",
  code: `
$onlyif[$newpresence[id]==$botownerid;]
$onlyif[$guildID==1558131602435870760;]

$if[$and[$oldpresence[status]==offline;$newpresence[status]!=offline];
  $sendmessage[1558144916637487164;
    $color[#4ba75a]
    $title[$id[çevrimiçi] $discordtimestamp[$gettimestamp;RelativeTime]]
    $image[https://skinmc.net/achievement/8/Hos+geldin/Fatih+yeniden+aktif%2521]
  ]
]

$if[$and[$oldpresence[status]!=offline;$newpresence[status]==offline];
  $sendmessage[1558144916637487164;
    $color[#78808d]
    $title[$id[çevrimdışı] $discordtimestamp[$gettimestamp;RelativeTime]]
    $image[https://skinmc.net/achievement/16/Hosca+kal/Fatih+cevrimdisi+oldu.]
  ]
]
`
}