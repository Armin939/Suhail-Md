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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22367542669";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_06_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhWek56NFl1cEFqM3h0VXd0bCtRYlIxd21zVi9vRW0wZ2JnTENack9oVms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpDYWZLb1lyUWxTTm1HeENuc3dhVUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTUzZjE1MDEtNWRhYS00N2NhLTkzYTQtZTFhZTdjY2NmNDRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDEyOCxcbiAgICAgIDE5NyxcbiAgICAgIDI0OSxcbiAgICAgIDE2LFxuICAgICAgMTgwLFxuICAgICAgMTk0LFxuICAgICAgOTksXG4gICAgICAyNDMsXG4gICAgICAyNTUsXG4gICAgICA5LFxuICAgICAgNDIsXG4gICAgICAxNjgsXG4gICAgICAzOCxcbiAgICAgIDEyMyxcbiAgICAgIDExNCxcbiAgICAgIDE3LFxuICAgICAgMjMxLFxuICAgICAgMTc2LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDEwLFxuICAgICAgNDUsXG4gICAgICAxNjAsXG4gICAgICA2NixcbiAgICAgIDg1LFxuICAgICAgMTIyLFxuICAgICAgMTE4LFxuICAgICAgMzcsXG4gICAgICAyOSxcbiAgICAgIDExOCxcbiAgICAgIDg3LFxuICAgICAgMTYyLFxuICAgICAgMTMxLFxuICAgICAgMTUsXG4gICAgICAzNixcbiAgICAgIDExOCxcbiAgICAgIDg5LFxuICAgICAgNzQsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0FBSFZYMlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzY3NTQyNjY5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjM3NTkzNTcyMjcyNTI6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFSOUxFQkVMTDRnN1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJONFFyMFdmRDBzWmxCdEkyNnQxME5DU2lRNmhSTGxyTk9Jc29FZW9vd2dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImE4K0ErS0tvMzUwcXYrNWRjdkdkWDdrQTk5UHhiV3cxTTRibDgwNVRlN0Y1RGhINXV1NkNCaGRMb0VyMHhGaGRuQzhLeFhSMlg1NWQ4bmkxaDJ3b0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdybzA0bkc0QmgxTnQ1SG83OWF4Z0IwT0RjdmtzcjMzVm1qdTNWeDZIQjRwMGd1OFJ5TkdkVzlLZC8xUmxmWDkvdmlpOUNJeGFUZWgyT3YxYkxDYmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzY3NTQyNjY5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyNjM1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxQclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkJsQXR4U0xIK1V1UmRZUGFaV2o3cDJBYXZKY2dCUitmWHRrTGlCNDByTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzMwOTg2MzMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
