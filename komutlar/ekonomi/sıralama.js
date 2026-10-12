module.exports = {
    name: "sıralama",
    aliases: ["lb", "top", "leaderboard"],
    type: "messageCreate",
    code: `
$jsonload[db;$searchdb[nakit]]
$arraymap[db;elem;$return[$env[elem;value]];info]

$let[total;$math[$arrayjoin[info;+]]]

$color[Blurple]
$author[Küresel Nakit Sıralaması]
$description[
İşte size ekonomi hakkında biraz bilgi!

**Global Bilgi**
$codeblock[Total Nakit: $separatenumber[$get[total];.];md]
## 🏆 TOP 10
$userleaderboard[nakit;desc;10;1;$id[n];value;pos;
$return[**$env[pos].** <@$env[value;id]> — \`$env[value;value]\`]]
]
`
}