module.exports = {
  name: "bilgi",
  aliases: ["bbilgi", "botbilgi", "istatistik", "istatistikler"],
  type: "messageCreate",
  code: `
  $let[takviye;$djseval[ctx.client.guilds.cache.reduce((t, g) => t + (g.premiumSubscriptionCount || 0), 0)]]
  $let[durumlar;$djseval[
  ((m) => Array(
    { e: '$id[çevrimiçi]', c: m.filter(x => x.presence?.status === 'online' && !x.presence?.activities?.some(a => a.type === 1)).size },
    { e: '$id[boşta]',     c: m.filter(x => x.presence?.status === 'idle').size },
    { e: '$id[rahatsız]',  c: m.filter(x => x.presence?.status === 'dnd').size },
    { e: '$id[yayında]',   c: m.filter(x => x.presence?.activities?.some(a => a.type === 1)).size },
    { e: '$id[çevrimdışı]', c: m.filter(x => !x.presence || x.presence.status === 'offline').size }
  ).filter(x => x.c > 0).map(x => x.e + ' ' + x.c.toLocaleString('tr-TR')).join(' '))(ctx.client.guilds.cache.flatMap(g => g.members.cache))
]]

  $color[$id[ana]]
  $thumbnail[$useravatar[$clientid]]
  $title[🤖 Bot İstatistikleri]
  $description[> Botun teknik verileri ve çalışma bilgileri aşağıda yer almaktadır.]

  $addfield[$id[paket] Paket Bilgileri;
> **Node.js:** \`$nodeversion\`
> **Discord.js:** \`v$djsversion\`
> **ForgeScript:** \`v$version\`
> **Forge.DB:** \`v$extensionversion[forge.db]\`]

  $addfield[$id[süre] Gecikme ve Çalışma Süresi;
> **Ping:** \`$round[$divide[$ping;1000];2]s\`
> **DB Ping:** \`$dbpingms\`
> **Uptime:** \`$parsedigital[$uptime]\`]

  $addfield[$id[sistem] Sistem Bilgileri;
> **RAM Kullanımı:** \`$djseval[($readfile[/sys/fs/cgroup/memory.current] / 1024 / 1024).toFixed(2)] MB / $djseval[($readfile[/sys/fs/cgroup/memory.max] / 1024 / 1024).toFixed(2)] MB\`
> **Geliştirici:** <@$botownerid>
> **Oluşturulma:** <t:$trunc[$divide[$usercreatedat[$clientid];1000]]:R>]

  $addfield[$id[sunucu] Sunucu Bilgileri;
> **Sunucu Sayısı:** \`$guildcount\`
> **Kullanıcı Sayısı:** \`$separatenumber[$usercount;.]\` ($get[durumlar])
> **Takviye Sayısı:** \`$get[takviye]\`
> **Kanal / Rol:** \`$channelcount\` kanal / \`$rolecount\` rol
> **Emoji Sayısı:** \`$sum[$emojicount[normal];$emojicount[animated]]\`]

  $footer[$username çalıştırdı | $round[$divide[$executiontime;1000];2]s içinde;$useravatar]
  `
}