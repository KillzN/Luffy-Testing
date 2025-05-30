let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:LUFFYBOT;;\nFN:LUFFYBOT\nORG:LUFFYBOT\nTITLE:\nitem1.TEL;waid=573243446506:573243446506\nitem1.X-ABLabel:LUFFYBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:LUFFYBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'LUFFYBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
