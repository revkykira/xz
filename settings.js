//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'

//edit aja sesuka hati
global.welcome = `
ada yang dateng
`
global.left = ` 
keluar ga usah join lagi bgsd
`
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
autoread = true //jangan di ubah
global.footer = 'Lenttobd'//ganti
global.pulsa = "6285966393571"//ganti
global.gopay = "6285966393571"//ganti
global.dana = "6285966393571"//ganti
global.paypal = "--" // biarin aja kalau gaada
global.shopay = "--" // biarin aja kalau gaada
global.saweria = "--" // biarin aja kalau gaada
global.sociabus = "--" // biarin aja kalau gaada
global.bni = "--" // biarin aja kalau gaada
global.bri = "--" // biarin aja kalau gaada
global.bankjatim = "--" // biarin aja kalau gaada
global.jago = "--" // biarin aja kalau gaada
global.neobank = "--" // biarin aja kalau gaada
global.packname = 'WhatsAppbot'//ganti
global.footer = '©Bot'//ganti
global.ovo = "6285966393571"//ganti
global.ownerlen = "Chat/Me"//Ubah
global.owner = ['6285966393571'] //ubh nomor owner hp
global.ownername = "Chat" //ubah
global.ytname = "YT: Revky"//ubah
global.socialm = "IG: revkyrey"//ubah
global.location = "Indonesia, Jawatimur, Lumajang"//ubah
global.ownernomer = "6285966393571"//ubah nomorhp owner
global.premium = ['6285966393571']//ubah nomor hp premium
global.nomorcs = '6285966393571'//nomormu
global.botname = 'WhatsAppbot' //ubah
global.linkz = "Nothing"//ubah
global.websitex = "Revky"//ubah
global.botscript = '--'
global.themeemoji = "!"//ubah
global.packname = "Created By"//ubah
global.author = "Who?"//ubah
global.wm = "Chat"//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'ペドペドゥー..', //ubah...
    admin: '管理者のみ。',
    botAdmin: '非管理ボット。',
    premime: 'プレミアム機能。',
    owner: '所有者のみ', 
    group: 'グループでのみ利用可能',
    private: 'プライベートチャット。 ワンタイムコンタクト',
    bot: 'ボットにアクセス...',
    wait: '我慢お姉ちゃん ><',
    linkm: 'リンクはどこですか？',
    endLimit: 'Upss 制限がなくなりました.12:00 が表示されるまでお待ちください 制限は自動的にリセットされます!!!',
    nsfw: 'nsfw 機能がアクティブ化されていません。管理者に連絡してアクティブ化してください',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")

//SETTING AJA SUKA SUKA ASAL PERHATIIN TANDA PETIK MAUPUN KURUNG
//Jagan lupa menunya di tambhin ya Soalnya saya capek wkkw
global.allmenu = `
terimakasih telah
menggunakan bot
ini :)

//dan text yang di awali // jangan di hapus sebagai penanda saja
//ada petik di bawah text ini jangan di hapus kalau mau nambah list langsung tambah aja jangan hapus text ini dan petik di bawa ini
`


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
