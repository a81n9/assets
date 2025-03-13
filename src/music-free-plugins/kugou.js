"use strict";const t=require("axios").create({baseURL:"https://music-api.gdstudio.xyz/api.php",timeout:5e4});t.interceptors.response.use((({data:t})=>t),(t=>Promise.reject(t)));const e={low:"128",standard:"192",high:"320",super:"999"};const s={netease:"网易云",tencent:"QQ音乐",tidal:"Tidal",spotify:"Spotify",ytmusic:"YouTube",qobuz:"Qobuz",joox:"JOOX",deezer:"Deezer",migu:"咪咕",kugou:"酷狗",kuwo:"酷我",ximalaya:"喜马拉雅"};var r=function(r,a="0.0.1"){return{platform:s[r],author:"ABing",version:a,srcUrl:`https://ghproxy.net/https://raw.githubusercontent.com/a81n9/assets/refs/heads/main/src/music-free-plugins/${r}.js`,cacheControl:"no-cache",hints:{importMusicItem:["此插件暂不支持歌曲导入功能"],importMusicSheet:["此插件暂不支持歌单导入功能"]},supportedSearchType:["music"],search:(...e)=>async function(e,s,r,a){const i={types:"search",source:a,name:e,count:20,pages:s||1},c=await t.get("/",{params:i});return{isEnd:c?.length<20,data:(o=c,o.map((t=>({...t,artist:t.artist?.join(" / ")||"未知歌手",title:t.name}))))};var o}(...e,r),getMediaSource:(...s)=>async function(s,r,a){const i={types:"url",source:a,id:s.id,br:e[r]};return{...await t.get("/",{params:i})}}(...s,r),getMusicInfo:(...e)=>async function(e,s){const r={types:"pic",source:s,id:e.pic_id,size:300};return{artwork:(await t.get("/",{params:r})).url}}(...e,r),getLyric:(...e)=>async function(e,s){const r={types:"lyric",source:s,id:e.lyric_id},a=await t.get("/",{params:r});return{rawLrc:a.lyric,translation:a.tlyric}}(...e,r)}}("kugou");module.exports=r;