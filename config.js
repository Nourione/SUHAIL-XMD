const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/61n4rdK/Ephoto360-com-166ccb8e494006.jpg" || "https://i.ibb.co/d02cVRK/Ephoto360-com-166ccb5f1dd01b.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "923444844060" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_10_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImthemlWWWlMWDZNUldwU1FPcGxXVmV4NVpYeU40NTNRcjVvb0hjd295VEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjM5NzE5NzI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MjY2MjIyRjI5MEQ4MDIxMkJBRTY1Mjg5NjAxNDBFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU3NTA2NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2Mzk3MTk3MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5MjgxMjNBMjMwQkEzRThBMzhDNzI3QTRDOUU2RDUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTc1MDY0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLYXc2VjJzc1R6YW5rOFhhblBOak9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0YTVhOTA4LTNkNWUtNDEyNi1iODg1LTk0ZWNjNGQ5OTI2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDEzNyxcbiAgICAgIDE1NSxcbiAgICAgIDIxNSxcbiAgICAgIDEyMCxcbiAgICAgIDI1LFxuICAgICAgMTg5LFxuICAgICAgNTYsXG4gICAgICAxNjcsXG4gICAgICAxNixcbiAgICAgIDM5LFxuICAgICAgMTksXG4gICAgICA1MyxcbiAgICAgIDEwMCxcbiAgICAgIDE3MCxcbiAgICAgIDE5LFxuICAgICAgMTA0LFxuICAgICAgMjEzLFxuICAgICAgMjEsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgOCxcbiAgICAgIDIzMyxcbiAgICAgIDE4NSxcbiAgICAgIDY1LFxuICAgICAgNTIsXG4gICAgICAyMjksXG4gICAgICAyMSxcbiAgICAgIDM5LFxuICAgICAgMTI2LFxuICAgICAgNjQsXG4gICAgICAxMDgsXG4gICAgICAzNixcbiAgICAgIDE0MCxcbiAgICAgIDUzLFxuICAgICAgNzAsXG4gICAgICAxODgsXG4gICAgICA1NixcbiAgICAgIDcwLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdSNkpBS0ExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2Mzk3MTk3Mjc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDM3ODA1Mjc4NDMxNToxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJub3VyaW9mZmljaWFsXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkMraFBJQ0VPUzY4N1lHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOa2VRUTVpaklaa0VSMWlDanptbkYzNldJY0hrOWl1VExEQW1MNkphRkFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAwclNQMmNzbitnTWpnS1RORjdXTVpqR2lDV3Raell1UnFiSk8xTlB1N2lCaVBWT0NBQ2g2N3UyRlJKRjJyZ2JpYlJZd21FTzZvSDBKUHl2ajFDR0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhxWGM4S3dzVFROeHVybTdHTTJOODVmTzdBV2hPYVJtdzlETnhwZGpDMk5vWENmL1dLTTZTTFpHT0dZUDlSZSszTnJRdTRCbUlkWVUwNjhxaHFhT0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjYzOTcxOTcyNzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU3NTA2MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQd3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB3cy5qc29uIjogIntcImtleURhdGFcIjpcIjJTQzZqOGdPNmovQWZNd2pZZzJRK2MzZU9lUWlUUENhYUF3YTd6QXFDa0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzc2MDE5NzI4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-MD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
