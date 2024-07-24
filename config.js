const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22350442393";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text https://telegra.ph/file/df1ba0bba8da41c75a6bb.jpg" // "texthttps://telegra.ph/file/df1ba0bba8da41c75a6bb.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_40_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImwzVlJ6VXZmU211L3dTVWRIN3RjTGlyelpoKzRaenpJUnA2RGVMMzhzLzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNZcS1XNnlrUUVhc1VpN3hodHlxN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzE5ZWEyMDgtN2RlNi00ZWQ1LWFkMDMtZWNhOTUzNGMzYzE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDc4LFxuICAgICAgMTQ2LFxuICAgICAgODksXG4gICAgICAyMTksXG4gICAgICAxNDksXG4gICAgICA5MixcbiAgICAgIDIxMyxcbiAgICAgIDc1LFxuICAgICAgNjQsXG4gICAgICAyMzksXG4gICAgICAxMjQsXG4gICAgICAyMjMsXG4gICAgICAxOCxcbiAgICAgIDE1MyxcbiAgICAgIDE5OCxcbiAgICAgIDEyMCxcbiAgICAgIDEwMyxcbiAgICAgIDg0LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTYxLFxuICAgICAgMjIwLFxuICAgICAgOTcsXG4gICAgICAzNCxcbiAgICAgIDEwNixcbiAgICAgIDEwLFxuICAgICAgMjIwLFxuICAgICAgMTI4LFxuICAgICAgMTUxLFxuICAgICAgMTkxLFxuICAgICAgOTMsXG4gICAgICAxMzAsXG4gICAgICA0LFxuICAgICAgNTksXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAxMjcsXG4gICAgICAxODIsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOMTlNRzFOVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzNTA0NDIzOTM6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZG78J2SifCdkpDwnZKT8J2Sh/CdkorwnZKP8J2Sj1/Dl+G3vMOXXCIsXG4gICAgXCJsaWRcIjogXCIxNDY2NjA2MTczNzE4MzU6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmVEd3ZRQ0VNR2cvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNSDYrMnRjL20vTkRVbGViY1J4RzYxamVuQTN5U25sbVhBUTg2TDFCRDFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxLd3pWTkJNWUVjMUdTUEJsbFJUV2JwOTRXOFV4ZHVuR2hkN0kxYjRDb3RkK0UyM2pUci9LU0xkR3ZlVUM3UXhOL0dWdGRoeHZWdVExMUR4RzkxUUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlUyUXkyOWhJU05zc2pmK0lwalNueVBWbGdTS0F6QnVMWXQyeDVnUDBXdDZBV3pEN3ZRZGk5blRLQ1R6bGl3UTd6NTd2ek56eGFNSGZROTRueWdaT0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzUwNDQyMzkzOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcxNjgwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpPb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk9vLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmpFbTVaRVAwajJZY0pVbzVYbTdwMmhLWkxwejJmVEZkL1VIZjJJWEZaOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODEyMjIyOTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcxNjgxMDE5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "🕸️",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  ||🕷🕸️-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "🕷🕸️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "🕷🕸️"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
