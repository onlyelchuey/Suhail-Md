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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234915435863";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_16_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwcmZnS3ZVWG1WQ2ZPNXljdXZMNDhORGc1b2xYT0dnZURjMGw0SVlZc3VNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0eHl4T0NVSVNFQ19lNEhIQngzWkp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1MGIyMGYwLTEzODQtNDg5MC05ODE5LWUxZGUwMWIxZDU2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMjYsXG4gICAgICAxNTEsXG4gICAgICAxMTAsXG4gICAgICAxOTEsXG4gICAgICAxNDcsXG4gICAgICA1NCxcbiAgICAgIDIwNSxcbiAgICAgIDIzNSxcbiAgICAgIDExLFxuICAgICAgNTEsXG4gICAgICAxMjgsXG4gICAgICAxODEsXG4gICAgICAxMzQsXG4gICAgICAxNzIsXG4gICAgICA2NyxcbiAgICAgIDEyNyxcbiAgICAgIDMyLFxuICAgICAgOTEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMjE1LFxuICAgICAgNDUsXG4gICAgICAxMzcsXG4gICAgICAyMzgsXG4gICAgICA5NSxcbiAgICAgIDEyLFxuICAgICAgMTI5LFxuICAgICAgMTA4LFxuICAgICAgMzcsXG4gICAgICAxNDQsXG4gICAgICAxMTUsXG4gICAgICAxOSxcbiAgICAgIDEwOCxcbiAgICAgIDIxNSxcbiAgICAgIDE1NCxcbiAgICAgIDEyNCxcbiAgICAgIDk2LFxuICAgICAgMjA2LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKem41cDhIRUwvKzNMTUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9Rd0FvM05ObkR4bVlGUnJsakp0cVZaNmZ2MkM3YjRyNFdqNGhoU0cvU2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDIvNlFsQXhxUklOa1dMQ0JXZ0Q2Z2RCdnZOckcwbk51U0JFZmlTK0FGaDVQcnN2WCsyLzNQNkNWYlM2SjJJdTl3d01UcjhvaXIveThwREowdVdvaGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHdIYklpQ3B5RjhYQUJuTjhFOUoxQnViRUNTYjViUEsxb0dEY09jSzFwRHg3bmdSeVBsbnowMWt1WFJCa3hGbGFKc2Jka2dSZk9zQjhlR0U2VG9sanc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU0MzU4NjMwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgxNzM1MzI4Njg4MzM6MThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU0MzU4NjMwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwOTEwMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOUHRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Qci5qc29uIjogIntcImtleURhdGFcIjpcIit2WXpOQjUyMk1YQjllWDlHc2ZsNDU0WmJpUzUyUlNObkZET1BjLzJoMlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MzA3MjIyNzU4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGU3NUQvNkpST1QvUzZLdGk5aEdxRllBRFh6ZkUxeHo0WmN5ZGlGRkJVST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMiwxLDMsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTMxNzgyODk1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEFLVklKdithM2hMWmY2RmFTOHc0Q1FhR1VBTXpzSlZsd0FVeGhyZnYzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzMjU1ODY3OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5QeC5qc29uIjogIntcImtleURhdGFcIjpcInFMT3JJQkJFOUtLY0VOR2c1TW9leERMd1BpYjNRTXdIeE1IWlQ0R2pNU0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzEsNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MzM3MTM1MDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJb1FET00weVdMQ1dCWnNmOEtkMWtsa2tIMFdLc1FPZ2xXb2VlVGFLaGZBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzNDQ3MDU1NVwifSIKfQ=="  // PUT your SESSION_ID 


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
