const ID_MAP = {
  // Ham veriler
  "dev": "1553479747395129385",
  "sw": "1553482485139116124",

  // Onay durumları
  "onay": "<:Onay:1553486746442797198>",
  "red": "<:Red:1553486765451378808>",
  "gri": "<:Gri:1553486786599321711>",

  // Genel simgeler
  "komut": "<:Komut:1553486572140372120>",
  "paket": "<:Paket:1553486609649762324>",
  "sunucu": "<:Sunucu:1553486641921003670>",
  "süre": "<:Sure:1553486702213865472>",
  "sistem": "<:Sistem:1553486674502094888>",
  "asyf": "<:Ana_Sayfa:1553767313772380230>",
  "gnl": "<:Genel:1553767800600928317>",
  "eğl": "<:Eglence:1553768036287254548>",
  "mod": "<:Moderasyon:1553768089949175850>",

  // Aktiflik durumları
  "çevrimiçi": "<:Cevrimici:1553486830295326871>",
  "boşta": "<:Bosta:1553486869814055062>",
  "rahatsız": "<:Rahatsiz_Etmeyin:1553486896376713256>",
  "yayında": "<:Yayinda:1553486933039124682>",
  "çevrimdışı": "<:Cevrimdisi:1553486971014479932>",

  // HEX renkleri
  "ana": "#a8cfe6",
  "ohex": "#78b256",
  "rhex": "#dc2d44",
  "ghex": "#7b878e",
}

module.exports = {
  name: "id",
  brackets: true,
  params: [
    {
      name: "key",
      required: true,
    },
  ],

  code: `
$let[k;$toLowercase[$env[key]]]

$if[$get[k]==;
  $return[❌ Lütfen bir key belirtin]]
$if[$get[k]==n;
  $return[$fromCharCode[10]]]
$if[$get[k]==_;
  $return[~~-----------------------------------------------~~]]

$jsonLoad[map;${JSON.stringify(ID_MAP)}]

$if[$jsonHas[map;$get[k]]==false;
  $return[❌ Geçersiz key]]

$return[$env[map;$get[k]]]
`,
}