const fs = require('fs')
const mongoose = require('mongoose')
const {Telegraf , Composer} = require('micro-bot')

const dbModel = require('./model')
const postId = "620fcca24e419ac556a20278"

const bot = new Composer()



//DB mail gejaho3293@rubygon.com pass: rps
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.6rm9z.mongodb.net/telegramDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).catch((e)=>{
        console.log(e)
}).then((d)=>console.log('Database connected')).catch((e)=>console.log(e))




bot.start((ctx)=>{
    ctx.reply("This is private groups bot").catch('Something is wrong')
})

bot.on('new_chat_members',ctx=>{
    ctx.reply(`Hello ${ctx.from.first_name} \n❗Welcome to Vape Lovers❗  \n🌀🌀TRUSTED SELLER🌀🌀  \n■■■■■AUTHENTIC ■■■■■`).catch("Something is wrong")
})




bot.hears('vlbotstart',(ctx)=>{	

    fs.readFile('db.txt',(err,data)=>{

        const showTest = data.toString()
        
		ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')

        setInterval(()=>{

		ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')

        },1000*60*15)
    })

})



bot.hears(/setvlbotmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setvlbotmessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('db.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('db.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    })
})



module.exports = bot
