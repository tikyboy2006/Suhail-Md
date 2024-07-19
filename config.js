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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/rpzdkYv" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tadashy²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94711932911";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_20_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHBJVFJ6bUplQ2RldVZraG9NejNPeXhMOXhzSU5zZHVNSUhLMWgrUy8yRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMTkzMjkxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEUxQTZDMTk0ODY0NDMyNkU5QURCRTk5QjNBM0VCMDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzk4ODI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9reThoX3pLUmo2bkRvQnVIekZrbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTk5Njg1M2EtNzA3Mi00NmUxLThhMzAtNGYxMWJiMDNiZTMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDE0NSxcbiAgICAgIDIxMSxcbiAgICAgIDE5OSxcbiAgICAgIDIyNSxcbiAgICAgIDIyMSxcbiAgICAgIDExNCxcbiAgICAgIDkxLFxuICAgICAgMjcsXG4gICAgICAyNDgsXG4gICAgICAxMjIsXG4gICAgICAyNyxcbiAgICAgIDI0MCxcbiAgICAgIDMwLFxuICAgICAgMTEwLFxuICAgICAgMTU5LFxuICAgICAgMTg0LFxuICAgICAgMTM2LFxuICAgICAgMTEzLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMTA2LFxuICAgICAgMTE3LFxuICAgICAgMjM3LFxuICAgICAgMzAsXG4gICAgICA0NixcbiAgICAgIDE4MixcbiAgICAgIDIxOSxcbiAgICAgIDcxLFxuICAgICAgMTYwLFxuICAgICAgNzAsXG4gICAgICAxOTMsXG4gICAgICAyNDcsXG4gICAgICAxMTcsXG4gICAgICAzNCxcbiAgICAgIDk4LFxuICAgICAgMTYxLFxuICAgICAgMjE5LFxuICAgICAgMjM5LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjlaMkg5UTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzExOTMyOTExOjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZvPCdmptfxqzOm0TOm8anzolZIFxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5leGVcIixcbiAgICBcImxpZFwiOiBcIjI3NzQ4OTU2NTgzNTM5Nzo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZS8zU0VRb2V6cHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZMb2dxUXYwdk5sZk1rTmdseGRCaUpkOGE4NHUyQUJ6NFZYb2xaa0YwVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2lGMk5ZV01EWmFoRjMrNHdPdC9oaHBJS3RsU2tMbHN5K3MwREtZNWlER0hzaHF0K0FLbDJ5OGhhWGNMUVB5SWRtTnJMVVFHeTBSdldCZm9vSmh6QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0tqVmdrc3hBM0tRTFNZeFF5VXpaalVHaUFWTGJnWEtWK09ReG96ODlEUkdXR3pSZE5ObVlZTi9RRlYxM3Z0a1BLWnlHSXFsRG1QMDFma2p3VitSQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTE5MzI5MTE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM5ODgyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
