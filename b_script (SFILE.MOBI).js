/* ============================================================================
 * stream-urls.js — SEMUA URL STREAM Sumaleng TV (lab RE)
 * ----------------------------------------------------------------------------
 * Auto-generated dari scrape-data.js — 2026-08-22
 * Isi:
 *   STREAM_URLS.channels  -> 240 channel { name, category, logo, servers[{name,url}] }
 *   STREAM_URLS.events    -> 179 event   { match, league, startTime, servers[{name,url}] }
 *   STREAM_URLS.all       -> flat array 1.024 URL (format asli: url|drmScheme=..&Referer=..)
 * Pemakaian:
 *   const S = require('./stream-urls.js');
 *   S.all.length;  S.channels[0].servers[0].url;
 * ========================================================================== */

'use strict';

const STREAM_URLS = {
  meta: {
    channels: 240,
    events: 179,
    totalUrls: 1024,
    generated: "2026-08-22",
    format: "url|drmScheme=..&drmLicense=..&user-agent=..&referer=..  (parameter setelah '|')",
  },
  channels: [
 {
  "name": "INDOSIAR",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/e-tiJFPZKI4QjhxAHzp_5foCkGE=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/205/indosiar-d9a3d0.jpg",
  "servers": [
   {
    "name": "Indosiar",
    "url": "https://vidsemar.pages.dev/terraluna/205.mpd|drmScheme=clearkey&drmLicense=f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,12d1c29c75cfee70288bd9933a5f510d:4a4b77352a6bd0a10546f3116690aa4d,ab520f3b1b06253b599a4e202d1e1ad4:1204ad83fae75e0afaddb5198bae95a5"
   },
   {
    "name": "Indosiar",
    "url": "http://tvratu.my.id/nissa/index.mpd?id=205&type=dash|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "Indosiar V+",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/e930be336fed49e6b26a7554e113f7a4/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=9"
   },
   {
    "name": "Indosiar Trv",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016cd6e773b02392/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/"
   },
   {
    "name": "Indosiar Dgt",
    "url": "http://filex.me:8080/live/3114654477/5787654467/302264.ts"
   },
   {
    "name": "Server 3",
    "url": "https://raw.githubusercontent.com/Cutsiffa/pl/refs/heads/main/Loc/Indos.m3u8"
   }
  ]
 },
 {
  "name": "MOJI",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/bwUEILb_i5ngA1tmC0WaTOP9gCc=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/206/moji-a5bd3e.jpg",
  "servers": [
   {
    "name": "Moji",
    "url": "https://vidsemar.pages.dev/terraluna/206.mpd"
   },
   {
    "name": "Moji",
    "url": "https://tvratu.my.id/vid/index.mpd?id=206&type=dash"
   },
   {
    "name": "Moji Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h207/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "Moji V+",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2f1c4190dcf045c9aafc447d54ef7c91/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=22bd0016090143f795a275629a6e7a0a:cae11accebe3ca7535141d35f4d41a1d"
   },
   {
    "name": "Moji",
    "url": "https://nextgenz.my.id/event/pidio/play.mpd?id=206&type=dash"
   },
   {
    "name": "Server 3",
    "url": "https://raw.githubusercontent.com/Cutsiffa/pl/refs/heads/main/Loc/Moj.m3u8"
   }
  ]
 },
 {
  "name": "SCTV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/WL48ZBsxNGEncu7T5Bj0LuOmG2A=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/204/sctv-f23abc.jpg",
  "servers": [
   {
    "name": "SCTV",
    "url": "https://vidsemar.pages.dev/terraluna/204.mpd"
   },
   {
    "name": "SCTV",
    "url": "http://tvratu.my.id/nissa/index.mpd?id=204&type=dash"
   },
   {
    "name": "SCTV V+",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9e9aba7068ca4c7f8a73381bef5f8742/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=8"
   },
   {
    "name": "SCTV",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856c3db2cc016cd6e647532391/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/"
   },
   {
    "name": "SCTV",
    "url": "https://nextgenz.my.id/event/pidio/play.mpd?id=204&type=dash"
   },
   {
    "name": "Server 3 ",
    "url": "http://103.66.62.83:8000/play/a04h/index.m3u8"
   }
  ]
 },
 {
  "name": "TRANS TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LAR1UUsYqpBTkO5W4bnL-bWT3V5bReOiIA&usqp=CAU",
  "servers": [
   {
    "name": "TRANS TV",
    "url": "https://video.detik.com/transtv/smil:transtv.smil/playlist.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "TRANS TV V+",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/7a69cfc9e135493f87ac4efd63000429/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=6.play"
   },
   {
    "name": "Server 2 ",
    "url": "https://cdnjktbpid01.transvision.co.id/riutx01-1b04ad969ab2fc0fb50d5cbfbceab1d4/dash/VHJhbnNUVg/manifest.mpd|drmScheme=clearkey&drmLicense=f3841ff1c16144f8ba1e303430a66b5a:31ac91d00bbb4437830528fb00e6be07"
   }
  ]
 },
 {
  "name": "TRANS 7",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/y2EK0E-_czvxzROVu4AMCuywmCw=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/734/trans7-tv-stream-b793ab.jpg",
  "servers": [
   {
    "name": "TRANS 7",
    "url": "https://video.detik.com/trans7/smil:trans7.smil/playlist.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "TRANS 7 V+",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/0fd7b7d368bc44bc9b4dece20acc3e33/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=7.play"
   },
   {
    "name": "TRANS 7",
    "url": "http://157.15.187.3:25092/hls/42/42.m3u8"
   }
  ]
 },
 {
  "name": "RCTI",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSKTPLMhFQSY-vwiSFD8XXoyJIW0Flp3ePA&usqp=CAU",
  "servers": [
   {
    "name": "RCTI R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=rcti"
   },
   {
    "name": "RCTI V+",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/997ce8767b604fae9fce05379b3b8b3a/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=1.play"
   }
  ]
 },
 {
  "name": "MNCTV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jsdu74p6BMrmJ_tbwBGY3c9Uu7GtIG5SeA&usqp=CAU",
  "servers": [
   {
    "name": "MNCTV R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=mnctv"
   },
   {
    "name": "MNCTV V+",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/d6b026ad50f14b7f9af5ddd5450007d4/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=2.play"
   }
  ]
 },
 {
  "name": "GTV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDMgJtVP-MkovwzvIgobp0_ZgP57prIIRyA&usqp=CAU",
  "servers": [
   {
    "name": "GTV R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv"
   },
   {
    "name": "GTV V+",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/b8b9b1d5f80f45649b4a3619291551ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=036e85de0bb448eeb21d39ab300da48e:4c6f9b15dfab2a169b2b78a498c4d77d"
   }
  ]
 },
 {
  "name": "INEWS",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNyuwZO5iQ4ZKlHWmWNOaJVnw2_V6sN21f-aIRBL_8PHAJ5ZwzlT5Dbw&s=10",
  "servers": [
   {
    "name": "INEWS R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews"
   },
   {
    "name": "INEWS V+",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/34d8dd29eb1d4eba931c7c5ab5f4be09/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=4.play"
   },
   {
    "name": "INEWS R+",
    "url": "http://beetv.my.id/stream/rctiplus.m3u8?ch=inews|Referer=https://www.rctiplus.com/"
   }
  ]
 },
 {
  "name": "ANTV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/Hh8KNGo558dzdT-tqWrLonOsmAM=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/782/antv-tv-stream-b6cca5.jpg",
  "servers": [
   {
    "name": "ANTV V+",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/0a6c6b1534444ab4bd903af8761e6747/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=10.play"
   },
   {
    "name": "ANTV VD",
    "url": "https://beetv.my.id/stream/vd.m3u8?ch=antv"
   },
   {
    "name": "ANTV DGT",
    "url": "https://iptv.lancartech.co.id/live/bombom/full/1.m3u8"
   }
  ]
 },
 {
  "name": "TVONE",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/stn_xzEBBDF0BDuxM9iNypkhsN4=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/783/tvone-a88018.jpg",
  "servers": [
   {
    "name": "TVONE",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/f3df48faafaf4198a65b9763140fce30/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=12.play"
   },
   {
    "name": "TVONE Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h40/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "RTV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/1TMD8nonXrRVhDaBUo7VQgJGkQc=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/1561/rtv-stream-06c6dc.jpg",
  "servers": [
   {
    "name": "RTV V+",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/b0eebcecfb12424cb5f3c3cdb239f3c1/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=87484c0b2a4c41b9b08249ef7817ad7f:ff4f3f232f747e5e7f616b4741fa5c32"
   },
   {
    "name": "RTV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h10/index.m3u8?app_type=web&userid=lite&chname=RTV|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "MDTV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/vkORCwK34mMDw2PbRGLcVLkux10=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/875/mdtv-ff5756.jpg",
  "servers": [
   {
    "name": "MDTV V+",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/3aefa03d32954b678e5faab6daa04b58/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=91dec6fd9fd84b879aacc027bf532790:588a2214bfb91fc0150b9ac2a745cef8"
   },
   {
    "name": "MDTV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h223/index.m3u8?app_type=web&userid=lite&chname=MDTV|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "MDTV",
    "url": "https://iptv.lancartech.co.id/live/bombom/full/19.m3u8"
   }
  ]
 },
 {
  "name": "METRO TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kPbkIp9idNFIcbHt1lxXr6FKQQUpRzrisw&usqp=CAU",
  "servers": [
   {
    "name": "METRO TV V+",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/fd4360b1c12c4375848c8f085fd51d41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=14.play"
   },
   {
    "name": "METRO TV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h12/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "KOMPAS TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HPAmO80jmnzCTqJEKnOzcEweDOepORaxAQ&usqp=CAU",
  "servers": [
   {
    "name": "KOMPAS TV V+",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/dafcaf8b26064ae7b27702088240b535/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=13.play"
   },
   {
    "name": "KOMPAS TV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h234/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "CNN ID",
  "category": "TV Indonesia",
  "logo": "https://cdn.cnnindonesia.com/cnnid/images/Logo-CNN-Indonesia-Peta-Indonesia.jpg?v=8.3.1",
  "servers": [
   {
    "name": "Server 1 ()",
    "url": "https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/chunklist.m3u8|&User-Agent=Mozilla/5.0|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "BTV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/4HBTMNO-_vri_NmmDniraoabE4c=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6165/beritasatu-e7ed52.jpg",
  "servers": [
   {
    "name": "Server 1 ()",
    "url": "https://op-flashcon-digdayaxenkoda.dens.tv/e6550891-6bef-42e1-bab9-13bf4af739ce/stream.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "JTV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9slOvpWCuV8lxhLysImQM6mngmZP3cDu0yZ7MCa8zLa92n6w0bkl_W4N&s=10",
  "servers": [
   {
    "name": "JTV V+",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/77641c37b4834a9db823ec5137774973/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=994121840707471a920b2e65bdf21b7e:0033ae3118a0153ad05fc9a066a8805c"
   }
  ]
 },
 {
  "name": "SINPO TV",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/Gj8aW6S6ykzNKy7as_gAybv8pxU=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/19046/sin-po-tv-c5cad0.jpg",
  "servers": [
   {
    "name": "Server 1",
    "url": "http://tvratu.my.id/nissa/index.mpd?id=19046&type=dash|User-Agent=VidioPlayer/4.3.0-WITH_ADS"
   },
   {
    "name": "Server 2",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/SINPOTVHD/mediampd/SINPOTVHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&&drmScheme=clearkey&drmLicense=27fe63a923084c12b0b05d33d204bdca:f9624ac728524e9fdf8e3a97018fe26d"
   }
  ]
 },
 {
  "name": "GARUDA TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlgUdDa7-fZXLbW-pH52ATgr6-3CxX651NA&usqp=CAU",
  "servers": [
   {
    "name": "Server 1 ()",
    "url": "https://hgmtv.com:19360/garudatvlivestreaming/garudatvlivestreaming.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "NUSANTARA",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYjsN0LwNmAf4vzNLZWyC2PjvfnQChgE-Ag&usqp=CAU",
  "servers": [
   {
    "name": "Nusantara TV",
    "url": "http://tvratu.my.id/nissa/index.mpd?id=7432&type=dash|User-Agent=VidioPlayer/4.3.0-WITH_ADS"
   },
   {
    "name": "Nusantara TV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h37/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "INDONESIANA",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtR1z4jcYgJQROb8PSPhV6i0d0PAxNVe-BA&usqp=CAU",
  "servers": [
   {
    "name": "Server 1 ()",
    "url": "https://tvstreamcast.com/indonesiana.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "MAGNA TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y0VvPKDGIvTpCCAiDW9ZBLWsHTX974fnrA&usqp=CAU",
  "servers": [
   {
    "name": "MAGNA TV",
    "url": "https://edge.medcom.id/live-edge/smil:magna.smil/chunklist.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "MAGNA TV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h24/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "CNBC ID",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8NEXmKs66ZU_GTi5-lbr2iA6E6GnAvJbHESGliuHzywh4A9kJhOtWoWu&s=10",
  "servers": [
   {
    "name": "Server 1 ()",
    "url": "https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/playlist.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "JAKTV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlkdE5Gz7vhATclaEDl-ugpkC74KGPMAcrCKkHb-zq19WQROtNlF5Fxk&s=10",
  "servers": [
   {
    "name": "JAKTV V+",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/fea2c4b90ae2472d891389eb8b95571c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5dfa046b3bf14866a143470d9c8dd74d:97e354284ee7a67e5dafbce04e17c4c0"
   }
  ]
 },
 {
  "name": "TVRI NASIONAL",
  "category": "TV Indonesia",
  "logo": "https://thumbor.prod.vidiocdn.com/ITgomqe4r80G_YlUJO-ZLBdgztM=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6441/tvri-tv-stream-f6cbb3.jpg",
  "servers": [
   {
    "name": "TVRI Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h17/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "TVRI NASIONAL",
    "url": "https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8"
   },
   {
    "name": "TVRI Digital",
    "url": "http://103.148.44.38:8000/play/a03t/index.m3u8"
   },
   {
    "name": "TVRI Digital",
    "url": "http://103.148.44.38:8000/play/a03t/index.m3u8"
   }
  ]
 },
 {
  "name": "SINDONEWS",
  "category": "TV Indonesia",
  "logo": "https://i.pinimg.com/474x/44/00/45/4400456fca92bf987c912d7b23fd5d68.jpg",
  "servers": [
   {
    "name": "SINDONEWS TV",
    "url": "https://d43tg978oium5.cloudfront.net/out/v1/8c2df39f9b2842fbb997b89378841ad9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=5.play"
   },
   {
    "name": "SINDONEWS",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/mncnews/manifest.mpd"
   }
  ]
 },
 {
  "name": "PSJ TV",
  "category": "TV Indonesia",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL2OSwDf-kZBdCvL8JUnjIiseGAENWT6M7e0ZuGmgq2uEEzSNOPuOF_0&s=10",
  "servers": [
   {
    "name": "PSJ TV",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/1/000000008d1b3a72018dbfcd427f46ab/manifest.mpd"
   }
  ]
 },
 {
  "name": "TVRI SPORT",
  "category": "TV SPORT",
  "logo": "https://football-tribe.com/indonesia/wp-content/uploads/sites/10/2019/01/TVRI-Sport-HD.png",
  "servers": [
   {
    "name": "TVRI SPORT",
    "url": "https://ott-cdn2.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8"
   },
   {
    "name": "TVRI SPORT Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h19/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "TVRI SPORT D",
    "url": "http://157.15.187.3:25092/hls/49/49.m3u8"
   }
  ]
 },
 {
  "name": "Max Sport",
  "category": "TV SPORT",
  "logo": "https://yt3.googleusercontent.com/7obqM1s2JIRr_S-n73eMNDDNhNpM30elgzySzFstHgIIXmEN0S-HxrMpaKzWqqOjHBuOOwbvOQ=s900-c-k-c0x00ffffff-no-rj",
  "servers": [
   {
    "name": "Max Sport",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/useesport/manifest.mpd"
   }
  ]
 },
 {
  "name": "FIGHT SPORT",
  "category": "TV SPORT",
  "logo": "https://www.advanced-television.com/wp-content/uploads/2024/05/Fight-Sports-new.jpg",
  "servers": [
   {
    "name": "FIGHT SPORT",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/73b7057c72da4615888a11b02a6cbb3c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=aa00f320f06247dcaf8e3cea1fb07f44:6169dd042bb5e59d709272b614011bbb"
   },
   {
    "name": "FIGHT SPORT",
    "url": "https://streams2.sofast.tv/ptnr-yupptv/title-FIGHT-TV-ENG_yupptv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/70e45fc8-1f6c-4492-ac26-9868f70f4e02/2bd799bd-71c3-4786-a5d6-c029c1420cba/0.m3u8"
   }
  ]
 },
 {
  "name": "UNIFI SPORT TV",
  "category": "TV SPORT",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5a/UnifiSports2023.png",
  "servers": [
   {
    "name": "Unifi Sport",
    "url": "https://ikoh.branck.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(unifi1)/master.mpd|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f"
   },
   {
    "name": "Unifi Sport",
    "url": "https://ciancuk.kesufuk3.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(unifi1)/master.mpd|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f"
   },
   {
    "name": "Unifi Sport Alt",
    "url": "https://sghost.mobileads.uno/uni5/uni5.mpd?id=unifi1|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f"
   }
  ]
 },
 {
  "name": "RTM Sport",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJaHeglBK3dDTAzYlC-q7bpjx07F0OAYqWIS7Uzp3uZ7MOZVrFoIrnVQ&s=10",
  "servers": [
   {
    "name": "RTM Sport",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd"
   }
  ]
 },
 {
  "name": "RED BULL TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSr9_uPrD4rwhoCLKTFcsbcpe79xIQrIwWt4Xo6ehbFs3c9-a9f0r5FAV&s=10",
  "servers": [
   {
    "name": "RED BULL TV",
    "url": "https://dms.redbull.tv/v5/destination/rbtv/linear-borb/personal_computer/http/us/en/playlist.m3u8"
   }
  ]
 },
 {
  "name": "MU TV",
  "category": "TV SPORT",
  "logo": "https://m.media-amazon.com/images/I/611NwkDJjOL.png",
  "servers": [
   {
    "name": "MU TV",
    "url": "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-hls.m3u8"
   },
   {
    "name": "MU TV",
    "url": "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-dash.mpd"
   },
   {
    "name": "MU TV",
    "url": "https://adp-mcu.mediaflow.workers.dev/dash/kingmcu.mpd"
   }
  ]
 },
 {
  "name": "INTER MILAN TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJjO5evT_xQZ08eS5KUnmtDHjI92GF0f1zZgysIf29Z9750eOaGCb_nccC&s=10",
  "servers": [
   {
    "name": "INTER MILAN TV",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/ekeomalvg7/out/v1/f63288f993e6470580623d7b9b45efb0/cenc.mpd|drmScheme=clearkey&drmLicense=7313f38125a3fefd00cf7d6567ff333b:87b49a0329febb10eef514fd0f044ee2"
   }
  ]
 },
 {
  "name": "AC MILAN TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jCWCmH9R0WS0_dnYjXVas4orr_gcRWmuLbszjFkyPtu_oMGw_eqjKX4&s=10",
  "servers": [
   {
    "name": "AC MILAN TV",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/jsqfhask6w/out/v1/e70dcd0f1e684592a3db4bbe7feee0fa/cenc.mpd|drmScheme=clearkey&drmLicense=602f114e6caa09eb9ec0dc18d0b01cb0:0c433e2a2157f7c1e240ad7eac62d604"
   }
  ]
 },
 {
  "name": "JUVENTUS TV",
  "category": "TV SPORT",
  "logo": "https://www.juventus.com/images/image/private/t_editorial_landscape_8_desktop_mobile/f_png/v1765909001/dev/elrnza6pnzeplaydfzhq.png",
  "servers": [
   {
    "name": "JUVENTUS TV",
    "url": "https://amg27604-amg27604c3-amgplt0148.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg27604-amg27604c3-amgplt0148/playlist.m3u8"
   }
  ]
 },
 {
  "name": "REAL MADRID TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxBCXUOMNAi9BbQDpxxyazAD7YsW0n7lg-3KH6Lhh4a0AC8rGBxwwG5G-&s=10",
  "servers": [
   {
    "name": "REAL MADRID TV",
    "url": "https://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/master.m3u8"
   },
   {
    "name": "REAL MADRID TV",
    "url": "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8"
   }
  ]
 },
 {
  "name": "BARCA TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OoulmuZEQA2ev4rTr97DqAWEHj8yaut1YNrjKyuB9OC0VrBhedhyVts&s=10",
  "servers": [
   {
    "name": "BARCA TV",
    "url": "https://amg17560-fcb-amg17560c1-rakuten-uk-4891.playouts.now.amagi.tv/playlist/amg17560-fcbarcelona-topbarcaenglish-rakutenuk/playlist.m3u8"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV 1",
  "category": "TV SPORT",
  "logo": "https://cdn0-production-images-kly.akamaized.net/si4Z12-cK8zODt65n5FoNJ03jtc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2907592/original/056844200_1568171580-Champions_TV-Vidio.jpeg",
  "servers": [
   {
    "name": "CHAMPIONS TV 1",
    "url": "https://tvratu.my.id/vid/index.mpd?id=17938&type=dash|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760"
   },
   {
    "name": "CHAMPIONS TV 1",
    "url": "https://aspaltvpasti.top/Allinone/6685.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/6685.drm"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV 2",
  "category": "TV SPORT",
  "logo": "https://cdn0-production-images-kly.akamaized.net/si4Z12-cK8zODt65n5FoNJ03jtc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2907592/original/056844200_1568171580-Champions_TV-Vidio.jpeg",
  "servers": [
   {
    "name": "CHAMPIONS TV 2",
    "url": "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=17939&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=d8810a06df6e5437aa378be1aef6a3d9:f9e0f84b886f7402738c2e201af9f4db,8912d41b6dc628229afa43a67cf2f3ac:1588e5fc9e30b995c81e661487b68265"
   },
   {
    "name": "CHAMPIONS TV 2",
    "url": "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=6686&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=d8810a06df6e5437aa378be1aef6a3d9:f9e0f84b886f7402738c2e201af9f4db"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV 3",
  "category": "TV SPORT",
  "logo": "https://cdn0-production-images-kly.akamaized.net/si4Z12-cK8zODt65n5FoNJ03jtc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2907592/original/056844200_1568171580-Champions_TV-Vidio.jpeg",
  "servers": [
   {
    "name": "CHAMPIONS TV 3",
    "url": "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=19404&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=https://v1dx.inisemar.my.id/pidick.php?id=19404&type=drm"
   },
   {
    "name": "CHAMPIONS TV 3",
    "url": "https://tvratu.my.id/vid/index.mpd?id=6786&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=0368770b1b2a3b3b9377c75e32acd23f:2cdada53fa00b7b66518261ed587b2d9"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV 5",
  "category": "TV SPORT",
  "logo": "https://cdn0-production-images-kly.akamaized.net/si4Z12-cK8zODt65n5FoNJ03jtc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2907592/original/056844200_1568171580-Champions_TV-Vidio.jpeg",
  "servers": [
   {
    "name": "CHAMPIONS TV 5",
    "url": "https://tvratu.my.id/vid/index.mpd?id=9182&type=dash|drmScheme=clearkey&drmLicense=654e3893f622a676cccd048d13b8d54e:fc272dd6b7945bcd562c186854b8538b"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV 6",
  "category": "TV SPORT",
  "logo": "https://cdn0-production-images-kly.akamaized.net/si4Z12-cK8zODt65n5FoNJ03jtc=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2907592/original/056844200_1568171580-Champions_TV-Vidio.jpeg",
  "servers": [
   {
    "name": "CHAMPIONS TV 6",
    "url": "https://tvratu.my.id/vid/index.mpd?id=9183&type=dash|drmScheme=clearkey&drmLicense=f5edbe4006617c5a576a61b592437469:b8c47aa4f0ff958aaac5e655845c7834"
   }
  ]
 },
 {
  "name": "CHAMPIONS TV FIGHT",
  "category": "TV SPORT",
  "logo": "https://thumbor.prod.vidiocdn.com/T4Ye0Z8zvfF62OqWY6CMT7YZuWM=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/20216/champion-fight-c7c19e.jpg",
  "servers": [
   {
    "name": "CHAMPIONS TV FIGHT",
    "url": "https://tvratu.my.id/vid/index.mpd?id=20216&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=b8234540888aaac0b056c430f52f48bf:aaad1315f5d21d969518a0fb9a2b83cb"
   },
   {
    "name": "CHAMPIONS TV FIGHT",
    "url": "https://tvratu.my.id/vid/index.mpd?id=20216&type=dash|drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.mpd?id=20216&type=drm"
   }
  ]
 },
 {
  "name": "SOCCER CHANNEL",
  "category": "TV SPORT",
  "logo": "https://blog.visionplus.id/wp-content/uploads/2024/01/jadwal-program-soccer-channel-1140x641.jpg",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=115.play"
   }
  ]
 },
 {
  "name": "SPORTSTAR ",
  "category": "TV SPORT",
  "logo": "https://blog.visionplus.id/wp-content/uploads/2023/07/jadwal-program-sportstar.jpg",
  "servers": [
   {
    "name": "SPORTSTAR 1",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea"
   },
   {
    "name": "SPORTSTAR 2",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=113"
   },
   {
    "name": "SPORTSTAR 3",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/6f5596513af749c19d0bcdac013dda3c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=114.play"
   },
   {
    "name": "SPORTSTAR 4",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2fcc58ccec8c45e9aa094fb980eb642d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b576e5f5f1bc4cbaa866e5b0face5a30:3377be6c3b5f688ebed687312c9b9d95"
   }
  ]
 },
 {
  "name": "SPOTV NOW",
  "category": "TV SPORT",
  "logo": "https://image.idntimes.com/post/20240308/banner-img-078ea664188aa7e17deaea8f5156b901.png",
  "servers": [
   {
    "name": "SPOTV NOW",
    "url": "https://slive.mana2.my/SpotvNow/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407"
   }
  ]
 },
 {
  "name": "SPOTV 1",
  "category": "TV SPORT",
  "logo": "https://thumbor.prod.vidiocdn.com/MrWnk04A5i5ak4Ill5aBLnTqC6c=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/17139/spotv-c18c69.jpg",
  "servers": [
   {
    "name": "SPOTV 1 ID",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=119.play"
   },
   {
    "name": "SPOTV 1 PH",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e"
   },
   {
    "name": "SPOTV 1",
    "url": "https://aspaltvpasti.top/Allinone/17139.mpd|drmScheme=clearkey&drmLicense=8d49b45de7ba8c8dfbd1fe04b874be34:b4f813a1e820bc55dbef9f2540adf49f"
   },
   {
    "name": "SPOTV 1 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTVNEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a9b08ce3328f467dac1c6ff03b4cf358:499e104ca0c44ebc78d601094001cd67"
   },
   {
    "name": "SPOTV 1 MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV)/master.mpd|drmScheme=clearkey&drmLicense=5b593bd530f1403a8f3eb9b2cd9236c8:d07c6a7f0b37a4090341e6380ff85060"
   }
  ]
 },
 {
  "name": "SPOTV 2",
  "category": "TV SPORT",
  "logo": "https://thumbor.prod.vidiocdn.com/M8pDa0IRTOTi7poAEWslAmwItbg=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/17140/spotv-2-c8e8ac.jpg",
  "servers": [
   {
    "name": "SPOTV 2 ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=120.play"
   },
   {
    "name": "SPOTV 2 PH",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed"
   },
   {
    "name": "SPOTV 2",
    "url": "https://aspaltvpasti.top/Allinone/17140.mpd|drmScheme=clearkey&drmLicense=6d576b166f055e97c9371a30835d1d90:bab4a56701471429489ecb6fa02d4ebf"
   },
   {
    "name": "SPOTV 2 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTV2NEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=a3fab992070540f69551d9497a1499ab:6c48e33896b10978099f81ca0b454aff"
   },
   {
    "name": "SPOTV 2 MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV2)/master.mpd|drmScheme=clearkey&drmLicense=1af079fb8e1d43d890c1d804431ad84c:3dc40bc5aaf09af8b1572646a45b1242"
   }
  ]
 },
 {
  "name": "BEIN SPORT 1",
  "category": "TV SPORT",
  "logo": "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/1318873e-8501-4f79-bb69-182d741cf9ad/beIN%20SPORTS%20Portada.jpg?ver=03-06-2025?w=3840&q=75",
  "servers": [
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "Bein Sport 1 MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein1)/master.mpd|drmScheme=clearkey&drmLicense=d48b6088253c443eb94d27cb7828f707:e9776141f9e949273a072b0e035070ab"
   },
   {
    "name": "Bein Sport 1 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd|drmScheme=clearkey&drmLicense=335dad778109954503dcbb21dc92015f:24bfd75d436cbf73168a2a2dccd40281"
   },
   {
    "name": "Bein Sport 1 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48"
   },
   {
    "name": "Bein Sport 1 ARAB",
    "url": "http://het109a.ycn-redirect.com/live/978480008877005/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   }
  ]
 },
 {
  "name": "BEIN SPORT 2",
  "category": "TV SPORT",
  "logo": "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/1318873e-8501-4f79-bb69-182d741cf9ad/beIN%20SPORTS%20Portada.jpg?ver=03-06-2025?w=3840&q=75",
  "servers": [
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "Bein Sport 2 MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein2)/master.mpd|drmScheme=clearkey&drmLicense=efa6ff1acefa43048e8b7adc21d98871:5d0f448b52a92035e3763c4a60275933"
   },
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "Bein Sport 2 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/beINSportsHD2/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=9e9a4d58a8bb48019ec1589df652dd2b:8b1ba8fdf2c1a141322cd18564973bd4"
   },
   {
    "name": "Bein Sport 2 ARAB",
    "url": "http://het109a.ycn-redirect.com/live/10011244/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   }
  ]
 },
 {
  "name": "BEIN SPORT 3",
  "category": "TV SPORT",
  "logo": "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/1318873e-8501-4f79-bb69-182d741cf9ad/beIN%20SPORTS%20Portada.jpg?ver=03-06-2025?w=3840&q=75",
  "servers": [
   {
    "name": "Bein Sport 3 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=344d320ca45641a88cf002db351ed9a4:246cc6ee7ab235cb824ed3b904b7040b"
   },
   {
    "name": "Bein Sport 3 MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein3)/master.mpd|drmScheme=clearkey&drmLicense=816ee2f7c19f49ed84276f34541b465b:ca764a9973b6123a1112cffd3b32010d"
   },
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "Bein Sport 3 SG",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/beINSports3NEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=f8b328f4b7bd4ac5966f8a7d434536b7:9354e572eaedf7b9481cbe30776ae781"
   },
   {
    "name": "Bein Sport 3 ARAB",
    "url": "http://het109a.ycn-redirect.com/live/161988840/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   }
  ]
 },
 {
  "name": "BEIN SPORT 4",
  "category": "TV SPORT",
  "logo": "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/1318873e-8501-4f79-bb69-182d741cf9ad/beIN%20SPORTS%20Portada.jpg?ver=03-06-2025?w=3840&q=75",
  "servers": [
   {
    "name": "Bein Sport 4 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/2e55bc8199044c27b1dbb827af65a04f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=aef1823177ad40199de440504d992ad5:b95c919408eec7663214a9a67af831ba"
   },
   {
    "name": "Bein Sport 4 MY",
    "url": "https://cors-proxy.cooks.fyi/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein4)/master.mpd|drmScheme=clearkey&drmLicense=d561ff976397473e9b456b44cdffcdd2:2b6cff42f7fae7e8bc32f3d5c62dc3c2"
   },
   {
    "name": "Bein Sport 4 SG",
    "url": "https://anywhere.pwisetthon.com/https://ucdn.starhubgo.com/bpk-tv/beINSports4/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=b6addeb1135a4279b917e35c26d5b0f5:7f5599f34b2a49e23f98045a5a0f512a"
   },
   {
    "name": "Bein Sport 4 ARAB",
    "url": "http://het109a.ycn-redirect.com/live/0103088447/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   }
  ]
 },
 {
  "name": "BEIN SPORT 5",
  "category": "TV SPORT",
  "logo": "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/1318873e-8501-4f79-bb69-182d741cf9ad/beIN%20SPORTS%20Portada.jpg?ver=03-06-2025?w=3840&q=75",
  "servers": [
   {
    "name": "Bein Sport 5 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c48c8e48dba24420b5dcef9f5b847b12:daad0aeb165b9a26b706f2a261b8fafe"
   },
   {
    "name": "Bein Sport 5 SG",
    "url": "https://anywhere.pwisetthon.com/https://ucdn.starhubgo.com/bpk-tv/beINSports5/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=7f8252e59f9b439cb89cb8628ced2443:4faba8fd3d200f9825dc29ca98d97e33"
   },
   {
    "name": "Bein Sport 5 ARAB",
    "url": "http://het109a.ycn-redirect.com/live/115451004/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   }
  ]
 },
 {
  "name": "BEIN XTRA",
  "category": "TV SPORT",
  "logo": "https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/46743/assets/685084/large-e019672ef45f0c76529c6ef43aec253e.png",
  "servers": [
   {
    "name": "BEIN XTRA",
    "url": "https://bein-esp-xumo.amagi.tv/playlist.m3u8"
   },
   {
    "name": "BEIN XTRA ALT",
    "url": "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8"
   }
  ]
 },
 {
  "name": "PREMIER SPORT",
  "category": "TV SPORT",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8c/PS_Logo_STACKED_4.png",
  "servers": [
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   },
   {
    "name": "PREMIER SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd|drmScheme=clearkey&drmLicense=1a5df53609ebc9857898c490f4724918:77f62980d582ec541280796acf8b2d19"
   }
  ]
 },
 {
  "name": "SKY SPORT",
  "category": "TV SPORT",
  "logo": "https://static.skyassets.com/contentstack/assets/blt4b099fa9cc3801a6/bltf6d1b89ebcad0ac0/68a31b459c59073b2e2e6928/Sky_Sports_new.png?downsize=1200:*&output-format=jpg",
  "servers": [
   {
    "name": "SKY SPORT PL",
    "url": "https://simplitv-live.mdn.ors.at/live/eds/sky_sport_premier_league_hd/dash/sky_sport_premier_league_hd.mpd|drmScheme=clearkey&drmLicense=446af6dd9ec0395eaf5ab6adac2b8234:a70a5944e51312f5a045b1e81651d033"
   },
   {
    "name": "SKY SPORT PL",
    "url": "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_PREMIER_LEAGUE_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/"
   },
   {
    "name": "SKY SPORT Football",
    "url": "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_FOOTBALL_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/"
   },
   {
    "name": "SKY SPORT BL",
    "url": "https://bbb.exoadash.com/TVD235/index.mpd"
   },
   {
    "name": "SKY SPORT MOTOGP",
    "url": "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/IT_SKY_SPORTS_MOTOGP_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/"
   },
   {
    "name": "SKY SPORT F1",
    "url": "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/IT_SKY_SPORTS_F1_LIVE/index.m3u8|Referer=https://mirror-2.kilat-live.com/"
   },
   {
    "name": "SKY SPORT F1",
    "url": "https://dlhd.iclik.workers.dev/.m3u8?channel=SkySportsF1&play=1|Referer=https://www.ksohls.ru/"
   },
   {
    "name": "SKY SPORT MIX",
    "url": "https://simplitv-live.mdn.ors.at/live/eds/sky_sport_mix_hd/dash/sky_sport_mix_hd.mpd|drmScheme=clearkey&drmLicense=df41cd757f7033d3add1d5d7cc34b95a:9cf69ec5ff03809f65c5d7ef73aa538c"
   },
   {
    "name": "SKY SPORT MIX",
    "url": "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_MIX_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/"
   },
   {
    "name": "SKY SPORT TOP",
    "url": "https://bbb.exoadash.com/TVD215/index.mpd"
   },
   {
    "name": "SKY SPORT TENNIS",
    "url": "https://bbb.exoadash.com/TVD224/index.mpd"
   }
  ]
 },
 {
  "name": "SKY SPORT NZ",
  "category": "TV SPORT",
  "logo": "https://www.mad-daily.com/wp-content/uploads/2024/10/Sky-Sport.jpg",
  "servers": [
   {
    "name": "SKY SPORT 1",
    "url": "https://sky-nz.b-cdn.net/skysport1/master.mpd|drmScheme=clearkey&drmLicense=aefc2c8d1c8840f1b6981f856c9269ba:cf8ea114c45b4d6596b2748258ab74d6"
   },
   {
    "name": "SKY SPORT 2",
    "url": "https://sky-nz.b-cdn.net/skysport2/master.mpd|drmScheme=clearkey&drmLicense=708a98b352bd4418a73a028edd84da8f:b1fa5c2bca4c4b57b924b748564532cb"
   },
   {
    "name": "SKY SPORT 3",
    "url": "https://sky-nz.b-cdn.net/skysport3/master.mpd|drmScheme=clearkey&drmLicense=2e2636daa74141b68cc14882ea3ff82b:0961f48287324adbb4b7ff3c9d82b3c9"
   },
   {
    "name": "SKY SPORT 4",
    "url": "https://sky-nz.b-cdn.net/skysport4/master.mpd|drmScheme=clearkey&drmLicense=278b8746b7c7410e901af0aa3774f037:15e1142d647b474ebbd49e41efa2a9d7"
   },
   {
    "name": "SKY SPORT 5",
    "url": "https://sky-nz.b-cdn.net/skysport5/master.mpd|drmScheme=clearkey&drmLicense=fdd24dd2c6c14126ad7c1ad1066b03dd:08289c6d57d54e8d8dca55e1862afb82"
   },
   {
    "name": "SKY SPORT 6",
    "url": "https://sky-nz.b-cdn.net/skysport6/master.mpd|drmScheme=clearkey&drmLicense=e87521b3dfa44ed9ba004012dcb89172:bba9734a9d724531bbab7ef5d64ca1f8"
   },
   {
    "name": "SKY SPORT 7",
    "url": "https://sky-nz.b-cdn.net/skysport7/master.mpd|drmScheme=clearkey&drmLicense=af95024eda94455e922b90a39a3af93e:852e715ef4064b05b8e1cdee285648b5"
   },
   {
    "name": "SKY SPORT 8 PL",
    "url": "https://sky-nz.b-cdn.net/skysport8/master.mpd|drmScheme=clearkey&drmLicense=7a2758575dc04d63acc3573ab594d441:47071dd80de746a38cdc6a4dcde21abc"
   },
   {
    "name": "SKY SPORT 9",
    "url": "https://sky-nz.b-cdn.net/skysport9/master.mpd|drmScheme=clearkey&drmLicense=72002c630e2343849984b5d3ec418162:ae6f8e3ff42a4963ae25686cca56c8e8"
   },
   {
    "name": "SKY SPORT Select",
    "url": "https://sky-nz.b-cdn.net/skysportselect/master.mpd|drmScheme=clearkey&drmLicense=01d02c97d1c949f9877acd230dcaa56d:708410b8bf1f4e998931183e8fab5d1e"
   }
  ]
 },
 {
  "name": "TNT SPORT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLjsTUBrYhHCkhI4n-iyAGKuT6NS7gTP-90bDi15wYAe6jE7aU0JxIc8&s=10",
  "servers": [
   {
    "name": "TNT Sport 1",
    "url": "https://tmaxapp.site/8wirwjs76erftg/tntsports1.m3u8"
   },
   {
    "name": "TNT Sport 2",
    "url": "https://tmaxapp.site/8wirwjs76erftg/tntsports2.m3u8"
   },
   {
    "name": "TNT Sport 3",
    "url": "https://tmaxapp.site/8wirwjs76erftg/tntsports3.m3u8"
   },
   {
    "name": "TNT Sport 4",
    "url": "https://tmaxapp.site/8wirwjs76erftg/tntsports4.m3u8"
   },
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b"
   },
   {
    "name": "TNT Sport 2",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea7d8808042e1b"
   },
   {
    "name": "TNT Sport 3",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/dash/enc/5sxuux529k/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd|drmScheme=clearkey&drmLicense=1d96ab366bbe6451edf7407b58e2fa16:0116201f4a63ac5bf5787d2c610c41a7"
   },
   {
    "name": "TNT Sport 4",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/pnu10tp36z/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd|drmScheme=clearkey&drmLicense=192b1115da041585c77200128549efa1:634e10efe4abbb14be400a3ccbac0258"
   }
  ]
 },
 {
  "name": "TSN SPORT",
  "category": "TV SPORT",
  "logo": "https://bellmedia-images.imgix.net/lede/wp-content/uploads/2024/09/18581592_10155403529061055_8240563011649656197_n.jpg?auto=format&q=60&crop=faces%2C%20edges&ar=16%3A9&fit=crop&ixlib=react-9.8.1&w=1400",
  "servers": [
   {
    "name": "TSN SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d"
   },
   {
    "name": "TSN SPORT 2",
    "url": "https://otte.cache.aiv-cdn.net/gru-nitro/live/clients/dash/enc/cjglydxghe/out/v1/8977baf175da4b94873194613dd3fe55/cenc.mpd|drmScheme=clearkey&drmLicense=85b277daf5aae05833fe43a68f587968:d52d7e9bc0bcd98787efd547ac91eca0"
   },
   {
    "name": "TSN SPORT 3",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/lsibpqruq1/out/v1/748887d614a84913ba8bcdf3c82823e6/cenc.mpd|drmScheme=clearkey&drmLicense=d3250252765347a0c2603c6cb4869f8c:0c19319460da7e9ed816db46ce839b37"
   },
   {
    "name": "TSN SPORT 4",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7"
   },
   {
    "name": "TSN SPORT 5",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cscevwljkq/out/v1/972185041b244140860b7d56398e9aaf/cenc.mpd|drmScheme=clearkey&drmLicense=385ceb9714b75e0cef61254f80b31002:18dce92a2891fee68d21ede5173230f8"
   }
  ]
 },
 {
  "name": "FOX SPORT MX",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYlkkDVc-ctq1WuTRfj9yQdIlrSxtSxPgYsMiuWgj1QH_dQXPoM9qCek&s=10",
  "servers": [
   {
    "name": "FOX SPORT MX 1",
    "url": "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/oboxe53wyo/out/v1/f7892a9d706d419a846d738fa22ea33e/cenc.mpd|drmScheme=clearkey&drmLicense=2fbdaa3bea0d0323ae011b318d1db716:8726ef7eaf5b9dce15fb6aa9f80bd53f"
   },
   {
    "name": "FOX SPORT MX 2",
    "url": "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd|drmScheme=clearkey&drmLicense=8836fb04d62dc64c9f8a39ef8640d5eb:d4f05ce56c5231b7cdf53455bea58621"
   },
   {
    "name": "FOX SPORT MX 3",
    "url": "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd|drmScheme=clearkey&drmLicense=11c8c1c2ef0385cf1e64d44bb9c3a395:5769730ffbdc4b2fd8945929d9ace063"
   },
   {
    "name": "FOX SPORT MX Premium",
    "url": "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd|drmScheme=clearkey&drmLicense=9f327d24c66fbd84e15ab5c9ead7c7a4:83837185529c0c4048f81386c2d36426"
   }
  ]
 },
 {
  "name": "FOX SPORT USA",
  "category": "TV SPORT",
  "logo": "https://b.fssta.com/uploads/application/fscom/SiteShareImage.vresize.1200.630.high.0.png",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   },
   {
    "name": "FOX SPORT 2",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae"
   },
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   }
  ]
 },
 {
  "name": "Match TV Russia Groups",
  "category": "TV SPORT",
  "logo": "https://unitedsenses.tv/wp-content/uploads/2017/04/Match_thumb_compi.png",
  "servers": [
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   },
   {
    "name": "Match Arena RU",
    "url": "https://video.beeline.tv/live/d/channel512.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=9839b170b4fc384f243bffd8929b71a2:34cdd6f3e1bf6a9f9d54e9165abf8c09"
   },
   {
    "name": "Match Fight RU",
    "url": "https://video.beeline.tv/live/d/channel377.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=660a37a91aa00b7e2e0bc7dca349b982:3593a4a2bfbd7d9585efff083b769cf5"
   },
   {
    "name": "Match Game RU",
    "url": "https://video.beeline.tv/live/d/channel510.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=076fd3d5688d47758ecf14a8935827a8:257b7de78413814d67227f7a834aaf04"
   },
   {
    "name": "Match Football 1 RU",
    "url": "https://video.beeline.tv/live/d/channel319.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=9145a6e0f778e61866f573d4944dd533:d02173d40515fea5c83944f21d0f3114"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   },
   {
    "name": "Match Football 3 RU",
    "url": "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c"
   },
   {
    "name": "Match Premier RU",
    "url": "https://video.beeline.tv/live/d/channel318.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=2bb7b314771ed5eeddd8f44a9aa42740:01f2a8f11bd891655a752c1749f478ec"
   },
   {
    "name": "Match Country RU",
    "url": "http://video.beeline.tv/live/d/channel304.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=dadaa697622b0ad0083acc9b6dd0c294:beb4fbc34be9b1c5ff12964830002c89"
   }
  ]
 },
 {
  "name": "FUBO SPORT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KXfXnICsCyRs3vwj3NSS6oWpo5ca65t8QxGc6SqnhCTKdQCxSnMcBXg&s=10",
  "servers": [
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "FUBO SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/uiffe4jhf0/out/v1/3534efafca8c4815adbb4d2e9a1fe003/cenc.mpd|drmScheme=clearkey&drmLicense=3dcfbec0e7146928baa55210bf2cb62f:bc85f74f815d9be5ae1dd6defaa05135"
   }
  ]
 },
 {
  "name": "FANCODE",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPBg6yrl692DIH0QAuxWPJOypVWziyFJgKR4WCnGsfOnhTx__4sjjyuoB&s=10",
  "servers": [
   {
    "name": "FANCODE 1",
    "url": "https://a166aivottlinear-a.akamaihd.net/OTTB/sin-nitro/live/clients/dash/enc/inpyms8ezu/out/v1/1084d5c9a97a4c5b9f9554c88f486646/cenc.mpd|drmScheme=clearkey&drmLicense=065051b99bf5cf8d9a3bde5cbde6aaf9:214bd176832872339ce184338320f9a2"
   },
   {
    "name": "FANCODE 2",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/fdb3pubmek/out/v1/aefca6420f944a9482e117f315de535f/cenc.mpd|drmScheme=clearkey&drmLicense=7e9239c1982d984a002df3ed049d0756:1b8a17598129a3618535c8fb05f103fe"
   }
  ]
 },
 {
  "name": "LA LIGA TV",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuu1PVe57Y_MvyqIe9H6-uJ7ELcA8N2ilMpQ&usqp=CAU",
  "servers": [
   {
    "name": "LA LIGA TV",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd|drmScheme=clearkey&drmLicense=620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a"
   }
  ]
 },
 {
  "name": "CBS SPORTS",
  "category": "TV SPORT",
  "logo": "https://public-assets-pressexpress.s3.amazonaws.com/assets/pages/images/2023/06/05/HypeCBS-wnmrjfab.png",
  "servers": [
   {
    "name": "CBS GOLAZO",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861"
   },
   {
    "name": "CBS Sport Network",
    "url": "https://messi.damitv.st/papi/ts/cbssn-usa/playlist.m3u8|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "name": "SPORTDIGITAL",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY2t2NToLclN6hxqeMMkjYrpJ8USicYlFxX_KO_OGGmpIHyUSsOjQW23M&s=10",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "name": "TV4 SPORT",
  "category": "TV SPORT",
  "logo": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b9/08/25/b9082569-dc36-5647-da1f-c1a7e3d2304f/Placeholder.mill/1200x630wa.jpg",
  "servers": [
   {
    "name": "TV4 FOOTBALL",
    "url": "https://live.streaming.a2d.tv/asset/20465725.isml/dash.mpd|drmScheme=clearkey&drmLicense=a518c629bd683a4eba5f2a793bcb48d6:49642d2151ac6c3f8453bbfc4b3fdfc0"
   },
   {
    "name": "TV4 SPORTKANALEN",
    "url": "https://live.streaming.a2d.tv/asset/20465728.isml/dash.mpd|drmScheme=clearkey&drmLicense=20f9a036eabc3930b2b1d124778090e6:b557b2e61b73935ef74bfa22d8ea2c34"
   },
   {
    "name": "TV4 SPORT 1",
    "url": "https://live.streaming.a2d.tv/asset/20465729.isml/.mpd|drmScheme=clearkey&drmLicense=6c2908a6d85d35fd9a33db46d6b157b2:2327be90af966a52a164cc46e18b35f5"
   },
   {
    "name": "TV4 SPORT 2",
    "url": "https://live.streaming.a2d.tv/asset/20465730.isml/.mpd|drmScheme=clearkey&drmLicense=729e43e22f86327ea9cbfd859b6e50e9:bbd3b6b123a10cb4cdfd79751f56b0af"
   },
   {
    "name": "TV4 SPORT 3",
    "url": "https://live.streaming.a2d.tv/asset/20465731.isml/.mpd|drmScheme=clearkey&drmLicense=4e30426a0a5c36359b1606dd7bc90937:508fb8a6038bf24a216c27e3efe3d9cf"
   },
   {
    "name": "TV4 SPORT 4",
    "url": "https://live.streaming.a2d.tv/asset/20465732.isml/.mpd|drmScheme=clearkey&drmLicense=08c544c527b93252a34932c4890903a1:86a3d7e41bd51161039cfc80d880c746"
   },
   {
    "name": "TV4 TENNIS",
    "url": "https://live.streaming.a2d.tv/asset/20465727.isml/dash.mpd|drmScheme=clearkey&drmLicense=bd32ad608e8c35368dbb0acbfa94d8e0:957b32508fecaf1a7f842e9d89bc7537"
   }
  ]
 },
 {
  "name": "SPOR TV BRAZIL",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSHEvDyCaVh6ikky3nPoxx8xYWQVDZc6B6XpVCYX7on9YPZNG5uKqI-he&s=10",
  "servers": [
   {
    "name": "SPOR TV 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7"
   },
   {
    "name": "SPOR TV 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/4yiko4it8k/out/v1/b77dd424c745443aba2f3f88d418f797/cenc-sd.mpd|drmScheme=clearkey&drmLicense=9009b7189e3e68cc09d17811f2beb55a:dd3f96a94c909da48ff40c92aabf8cf3"
   },
   {
    "name": "SPOR TV 3",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/6otiglnptp/out/v1/add7499679b0422cb6791f7701f95ecc/cenc.mpd|drmScheme=clearkey&drmLicense=902e5ec0e3d05e665daa32fc23f4f59e:7b2322a273843921a43e2c61dac7cae3"
   }
  ]
 },
 {
  "name": "D SPORT GROUPS",
  "category": "TV SPORT",
  "logo": "https://rutanoticias.co/wp-content/uploads/2023/06/DitecTV-Sports.png",
  "servers": [
   {
    "name": "D SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/ubehitlwzo/out/v1/8e09c381a51f4366a19e979418112e8f/cenc.mpd|drmScheme=clearkey&drmLicense=a7d11d37a1f7611ee88d4db880171f32:68f96d618b0b956b008c445896a25a79"
   },
   {
    "name": "D SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/rgilyeubta/out/v1/09a67027b18f4fd78aaa3794a2aacfe8/cenc.mpd|drmScheme=clearkey&drmLicense=03f12d6a3dbfd3a6fa7dd7f6417e0c11:ea07b87acdf2e45be824cde4a1cf3504"
   },
   {
    "name": "D SPORT Plus",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/ud6bnhthpj/out/v1/2639a2f4480f4269953de466d5f46463/cenc.mpd|drmScheme=clearkey&drmLicense=83f81c4cc1443991543de4e22eea7586:ddfd7ca653d6f35543d8edb3c688e20f"
   },
   {
    "name": "D SPORT Fight",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/hubonmgf5k/out/v1/10560d92577e4917973aa4624124ecd6/cenc-sd.mpd|drmScheme=clearkey&drmLicense=45bbd582f220f438f896450d8306a3f2:582c6ba7f64bbc0f2d91c6b0c265760c"
   }
  ]
 },
 {
  "name": "ESPN MEXICO",
  "category": "TV SPORT",
  "logo": "https://yt3.googleusercontent.com/WRlCLbVoxwvCqEc1LP9Z29dIayQ8RMDrrMutBQ2vb_zy5sDAgcDxOh3S0V76vsWEC9Nh5Yik=s900-c-k-c0x00ffffff-no-rj",
  "servers": [
   {
    "name": "ESPN 2 MEXICO",
    "url": "https://aca-live1-ott.izzigo.tv/7/out/u/dash/ESPN-2-HD-H265/default.mpd|drmScheme=clearkey&drmLicense=faa2d2197cc44dc154650bbacb0dc238:9859d70c856660e20bbe6896f9cd3048"
   },
   {
    "name": "ESPN 3 MEXICO",
    "url": "https://vod-sev-orbit2-s2.izzigo.tv/out/u/startover/dash/ESPN-3-HD/default.mpd|drmScheme=clearkey&drmLicense=dc3c1a083eae593631b5b5019e2efb78:68693fb66dc31ca864d854cd176c44c6"
   }
  ]
 },
 {
  "name": "Telewebion Sport",
  "category": "TV SPORT",
  "logo": "https://yt3.googleusercontent.com/WRlCLbVoxwvCqEc1LP9Z29dIayQ8RMDrrMutBQ2vb_zy5sDAgcDxOh3S0V76vsWEC9Nh5Yik=s900-c-k-c0x00ffffff-no-rj",
  "servers": [
   {
    "name": "Telewebion Sport 1",
    "url": "https://ncdn.telewebion.ir/sport1/live/playlist.m3u8"
   },
   {
    "name": "Telewebion Sport 2",
    "url": "https://ncdn.telewebion.ir/sport2/live/playlist.m3u8"
   },
   {
    "name": "Telewebion Sport 3",
    "url": "https://ncdn.telewebion.ir/sport3/live/playlist.m3u8"
   },
   {
    "name": "Telewebion Sport 4",
    "url": "https://ncdn.telewebion.ir/sport4/live/playlist.m3u8"
   }
  ]
 },
 {
  "name": "ON LIVE VIET",
  "category": "TV SPORT",
  "logo": "https://onlivetv.vn/logoOnliveTV.png",
  "servers": [
   {
    "name": "ON Sport",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_HD/manifest.mpd|X-Forwarded-For=38.60.252.162&drmScheme=clearkey&drmLicense=dcda1c0511c347f8b89c1821600426ac:dbc1d4d9244f8e7d01d999d4d9f53855"
   },
   {
    "name": "ON Sport Plus",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/HAY_TV/manifest.mpd|drmScheme=clearkey&drmLicense=4e619c5b54494762b131f65fc34a885b:676d9f5a28d409d7d601514baa147c9d"
   },
   {
    "name": "ON Football",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/BONGDA_HD/manifest.mpd|drmScheme=clearkey&drmLicense=f69bf028397e4ecfafce84abb7c5fe2b:25028aad0e2003b2785cf5196a4e2fa1"
   },
   {
    "name": "ON Sport News",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_TINTUC_HD/manifest.mpd|drmScheme=clearkey&drmLicense=cafb6e60c1504dfc858fd3dddc6fd20c:92061ffeb13f47c4d8879316dbc9521d"
   },
   {
    "name": "ON Golf",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_GOLF_HD/manifest.mpd|drmScheme=clearkey&drmLicense=5a323b53e0864492b0e04c70d591c564:843584bafaf2736c4fd1b76e1eee74d8"
   }
  ]
 },
 {
  "name": "SCTV SPORT VIET",
  "category": "TV SPORT",
  "logo": "https://www.sctv.com.vn/images/intro/logo-sctv.png",
  "servers": [
   {
    "name": "SCTV 15",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/SCTV15HD/manifest.mpd|drmScheme=clearkey&drmLicense=a7c942778e874d43be92b8d0a0cd11b4:6d54358306571658ffdb952c6560688b"
   },
   {
    "name": "SCTV 17",
    "url": "https://livevlisctcdnw.seenow.vn/livesnv2/SCTV17/manifest.mpd|drmScheme=clearkey&drmLicense=a7c942778e874d43be92b8d0a0cd11b4:6d54358306571658ffdb952c6560688b"
   },
   {
    "name": "SCTV 22",
    "url": "https://liveh34.vtvprime.vn/hls/SCTV22/index.m3u8"
   }
  ]
 },
 {
  "name": "ONE SPORT PH",
  "category": "TV SPORT",
  "logo": "https://a.espncdn.com/photo/2020/0306/r675671_1280x720_16-9.jpg",
  "servers": [
   {
    "name": "One Sport PH",
    "url": "http://136.239.158.18:6610/001/2/ch00000090990000001083/index.m3u8?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BpiZhzOAmsfItUIS2UHXxD0ytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001173&contentid=ch00000000000000001173&videoid=ch00000090990000001083&recommendtype=0&userid=1797679327850&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=RCAJM4IFILAXXX&NeedJITP=1&JITPMediaType=HLS&JITPDRMType=NO"
   },
   {
    "name": "One Sport PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd|drmScheme=clearkey&drmLicense=53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd"
   },
   {
    "name": "One Sport Plus PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=f00bd0122a8a4da1a49ea6c49f7098ad:a4079f3667ba4c2bcfdeb13e45a6e9c6"
   }
  ]
 },
 {
  "name": "PREMIER SPORT PH",
  "category": "TV SPORT",
  "logo": "https://ownassetsmysky.blob.core.windows.net/assetsmysky/production/plans-and-bundles/1637028015_premier-sports.png",
  "servers": [
   {
    "name": "Premier Sport 1 PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=b8b595299fdf41c1a3481fddeb0b55e4:cd2b4ad0eb286239a4a022e6ca5fd007"
   },
   {
    "name": "Premier Sport 1 PH",
    "url": "http://136.239.173.10:6610/001/2/ch00000090990000001135/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BoP1uzasPUQtxzHrrWIYilSytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001282&contentid=ch00000000000000001282&videoid=ch00000090990000001135&recommendtype=0&userid=1603895214902&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=ZGWMVRUB2AQXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO"
   },
   {
    "name": "Premier Sport 2 PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd|drmScheme=clearkey&drmLicense=59454adb530b4e0784eae62735f9d850:61100d0b8c4dd13e4eb8b4851ba192cc"
   },
   {
    "name": "Premier Football PH",
    "url": "http://161.49.17.2:6610/001/2/ch00000090990000001127/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqqxWqB5I3LphK7WUAFquWrytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001293&contentid=ch00000000000000001293&videoid=ch00000090990000001127&recommendtype=0&userid=1446387897422&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=OY4RBOUL5WXXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO"
   }
  ]
 },
 {
  "name": "Tap Sport PH",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlbDC7_Ao6wGkg9RtIM9V_KdBTqgcjjmXedNobvyE25aLIFlR_3UJxcLQ&s=10",
  "servers": [
   {
    "name": "Tap Sport PH",
    "url": "http://136.239.173.3:6610/001/2/ch00000090990000001151/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqvuCQC%2BfGfSFGYE2TZKWpbytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001321&contentid=ch00000000000000001321&videoid=ch00000090990000001151&recommendtype=0&userid=1148739009053&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=Z6EHYVCYR3XXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO"
   },
   {
    "name": "TAP Sport",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd|drmScheme=clearkey&drmLicense=eabd2d95c89e42f2b0b0b40ce4179ea0:0e7e35a07e2c12822316c0dc4873903f"
   }
  ]
 },
 {
  "name": "EUROSPORT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5djoUmIkwzrVR7TY687xRmxZqPgrY1Yt6dpWR_2_SGqHs2N_MW6BuezQ&s=10",
  "servers": [
   {
    "name": "EUROSPORT 1",
    "url": "https://dash2.antik.sk/stream/nvidia_eurosport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "EUROSPORT 2",
    "url": "https://dash2.antik.sk/stream/nvidia_eurosport2/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "name": "V SPORT",
  "category": "TV SPORT",
  "logo": "https://static.wikia.nocookie.net/logopedia/images/9/9b/Viasat_Sport_2008.png/revision/latest?cb=20100122152914",
  "servers": [
   {
    "name": "V SPORT 1",
    "url": "https://agile-ridge-02432.herokuapp.com/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport1_hd_live/sm_viasport1_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=a0e68f01a5428cbdb8cfac2080c66b20:556d72c812df452fad9bed66292bfc63,a0e68f01a5428cbdb8cfac2080c66b10:be7f9d1a00bbd0478335a4a48379157d"
   },
   {
    "name": "V SPORT 2",
    "url": "https://warm-caverns-48629-92fab798385f.herokuapp.com/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport2_hd_live/sm_viasport2_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=b62aca5b566dc3ded74233192b28a120:e8c5369c9c4aa58c1c8489c7db52db8c,b62aca5b566dc3ded74233192b28a110:143bfe648cc9d14917d41e0662452771"
   },
   {
    "name": "V SPORT 3",
    "url": "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport3_hd_live/sm_viasport3_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=10827657b810ae957f6adc178eca9c20:3f73e8c9b64b2972bd25859efef7e5ac,10827657b810ae957f6adc178eca9c10:ca8605499cbdc8e0d2f12898258f8f6e"
   }
  ]
 },
 {
  "name": "HUB PREMIER",
  "category": "TV SPORT",
  "logo": "https://tva.onscreenasia.com/wp-content/uploads/2022/06/5-Hub-Premier.png",
  "servers": [
   {
    "name": "HUB PREMIER 1",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier1/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=d9df2aa9c4974ed3bbf0730defad68fe:0cac792b5d5ef9ffb24e324a52c3da0b"
   },
   {
    "name": "HUB PREMIER 2",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier12/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=17e9c5d34f514dd3bce90fcc7deaeaa6:ab86716fe05961647a3713243e95dcd2"
   },
   {
    "name": "HUB PREMIER 3",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier3/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=d02ff184351548eea3981c38b6f48d9b:42d56d760c19c180ceaf2e7ef512e5be"
   },
   {
    "name": "HUB PREMIER 4",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier4/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=624bceaf2e78422c8ee1b8f31c638fb4:5223fbfd77b228f2f01e20358972850b"
   },
   {
    "name": "HUB PREMIER 5",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier5/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=549415570a894df19a2aaa524d035bb6:8cd102efa9e4feeb98b62b1e8b1f10a4"
   },
   {
    "name": "HUB PREMIER 6",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier6/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=ecd1e866cc4e4bb1a230dda645081865:edaf41fe7af1249eef03bfac6e9ab632"
   },
   {
    "name": "HUB PREMIER 7",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier7/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=ec361b73771546b3b42aadbd847d4ad6:bcb5a85c2236d319aff588fe280e0a35"
   },
   {
    "name": "HUB PREMIER 8",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier8/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=8453cc1161814eaab26bca37dc85e360:72c9a9cad5387966e5715eee5cc1a94b"
   }
  ]
 },
 {
  "name": "HUB SPORT",
  "category": "TV SPORT",
  "logo": "https://i.vimeocdn.com/video/603354158-ed3b9313708ee638b169d3704a99c672f4a2dfe2859d94e48a551941b84e0ef7-d",
  "servers": [
   {
    "name": "HUB SPORT 1",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports1HDnew1/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=42a10a01419642de97ee025db907fccd:04173eabe97faf32a1697878f5bdb156"
   },
   {
    "name": "HUB SPORT 2",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports2HD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=fd72f19fac0c441b808996ea993d06d2:8f0be65b978ef60062b4c7dabb226a1d"
   },
   {
    "name": "HUB SPORT 3",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports3HDNEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=6cfb926f22184132a35ebf76f19595f1:ef9c426de14abc376edc1656c47875e6"
   },
   {
    "name": "HUB SPORT 4",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports4HDnew/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=9a29d4f3b6e540b3aa2f36927c01b6f4:57b670b45b5cb453a9f48fa975b702c1"
   },
   {
    "name": "HUB SPORT 5",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports5HD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=14d1d427e8144c7b80cd5a8a6b9aa5e3:b3992507b4df8956717e3d5d798b7ab0"
   },
   {
    "name": "HUB SPORT 6",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports6/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=0bed9555084b4eaa9bfea62c3ca52871:ccac45f8beaf3eb8aafbd934d1791584"
   },
   {
    "name": "HUB SPORT 7",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports7/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=16f39f24603a4b9ea70fa22d91f55d29:bab7601e930f1d08ccfa005548dbbace"
   },
   {
    "name": "HUB SPORT 8",
    "url": "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports8/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=760126fc9c2640f8b32e647c0f43fa09:f139ce2dd6ebe611388fa8e175e99baf"
   }
  ]
 },
 {
  "name": "ZIGGO SPORT",
  "category": "TV SPORT",
  "logo": "https://cdn.broadbandtvnews.com/wp-content/uploads/2015/12/14120446/Ziggo_Sport.jpg",
  "servers": [
   {
    "name": "ZIGGO SPORT 1",
    "url": "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw75168188_-627298088/PLTV/86/224/3221241590/3221241590.mpd?accountinfo=~~V2.0~qbcsJh_jU5C9BcZc959e_wae44b4867b3417aa76b5db2da20fe46c~KZzTWjB8qD1zdgbJjRPVLJX-tV0qiN9RBHC_iseGrsmTSRjj06oGDtGlpSCRGOwF3626cf085c08d024c7e4aafc18c32440:UTC,|drmScheme=clearkey&drmLicense=ef34ae91b4f2415e8439b2ad105e7488:243248d8de1ff8c7c587ee2057317523"
   },
   {
    "name": "ZIGGO SPORT 1",
    "url": "http://cdn.tv-rds.workers.dev/ZiggoSport1.m3u8"
   },
   {
    "name": "ZIGGO SPORT 2",
    "url": "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw266117884_-1972819316/PLTV/86/224/3221241560/3221241560.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7EOhA1DF4svOZppKxb-t-Ngw144cce44121c63284a33d5453493e5c8%7E1_Fmlu5PevHMYnEi9Z_HX2goKAd0VHSuxZMoIcAXcawYvG1meqGp2eQ2Ibhjvh7e59e7f6df3d57f23a32024ad67f0f19dc%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601013140%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601013140%2C3103_SP1V%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&_=1717205500296&RTS=1717205500&from=11&hms_devid=579&online=1717205500&mag_hms=579|drmScheme=clearkey&drmLicense=3cfa8625f650406ebf6a4d1ea737f572:0534e747c70b364aa7210e1bf3191df0"
   },
   {
    "name": "ZIGGO SPORT 3",
    "url": "https://mag02.tvx.prd.tv.odido.nl/wh7f454c46tw407556707_-381738111/PLTV/86/224/3221241511/3221241511.mpd?accountinfo=~~V2.0~yVi0dMX4icO5Ka9e92EQfg8812e1c1044f7d357066472e3ee99ef4~2dRB9E-vDtoAbYl169LbcJpxUgWVJtbeU_PlhGfNUflphvljOb5VaEhxruETYG9qcccaf5c5b655bf7504ed7ec5a1dd798f:UTC,|drmScheme=clearkey&drmLicense=4dbea4b5713a4aa1ae3a2544cd522fc7:a8323ea99b2d6200a48e1bc27322d548"
   },
   {
    "name": "ZIGGO SPORT 4",
    "url": "https://mag01.tvx.prd.tv.odido.nl/wh7f454c46tw523693457_1808344289/PLTV/86/224/3221241652/3221241652.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7Eu0jaHTa0MTNW18tBSpXw1Ad47f31195be578ee163e34a9e557d481%7E-tEuN4yI47Z49lA_lxVw3r26rEF-eIM-4N-YRBTnBjXeDlL3yoAcCSTfh367bmnJfe93264045ad9787422349ffe59c4e2f%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601013557%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601013557%2C3103_SP1T%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&_=1717205757900&RTS=1717205758&from=11&hms_devid=538&online=1717205758&mag_hms=538|drmScheme=clearkey&drmLicense=b5c04cfb6da84104ba5bbe51cd065b12:d96561be4819d3ed4e5f4f54015baaca"
   },
   {
    "name": "ZIGGO SPORT 5",
    "url": "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw865586829_-819821292/PLTV/86/224/3221241610/3221241610.mpd?accountinfo=~~V2.0~LNS2PBO5tyhp5z1Pe6ObBA6cd7a4ec35c4492167b9376e6dff2932~BZw2dESHw-I1PQCFh9gGxCMvrIIzgMdYAe900qj8l6aoXUX9ahyR6I9EUIu7nDR4f4887615c83ea7a8cee6dd33137c4ebe:UTC,|drmScheme=clearkey&drmLicense=3fb40d85724942f994d86943f48021db:a6da8742502c8a2153067f5f2a70fb02"
   },
   {
    "name": "ZIGGO SPORT 6",
    "url": "https://mag01.tvx.prd.tv.odido.nl/wh7f454c46tw1024019879_757686866/PLTV/86/224/3221241521/3221241521.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7EURnD_afuosWHfY5OEqRXOwfa01c8ac56cf4511de39c2c4a3cab278%7EiVxKjbtf2gx_dYFqI-vt5C4Cu3COYDjZaw6C_kO2T2wm30fwo1ctD1gr_e2PrgTh48867c3177f3c34842031623cb2e06c9%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601014418%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601014418%2C3103_S1E2%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&RTS=1717206258&from=14&hms_devid=538&online=1717206258&mag_hms=538&_=1717206265600|drmScheme=clearkey&drmLicense=1a0ffa532aa2498490826e2f6a37f7c9:a8cec27bc7d47909c5b0d8f473b43e8d"
   }
  ]
 },
 {
  "name": "SPORT BALTIC",
  "category": "TV SPORT",
  "logo": "https://stv.ee/wp-content/uploads/2024/02/e8c3436bb0e3022880cac14b275a1f64e643e85b.png",
  "servers": [
   {
    "name": "SPORT 1 BALTIC",
    "url": "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561204/index.mpd|X-Forwarded-For=94.131.13.119&User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=032ba9e7db644873861490a3afc863d8:fd29ed4731ecafba696ac68cbe870008"
   },
   {
    "name": "SPORT 2 BALTIC",
    "url": "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561209/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=5fd3f407ea7c465b854db7cd8235b39b:0c2ad3408bb09f698e86e1ca2e26a888"
   }
  ]
 },
 {
  "name": "GO 3 SPORT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG5TLTU3LnDNffasWh8E0ZcGuLrBx1xyT3VVs5B3ObeLs8fB--d9TRPZV&s=10",
  "servers": [
   {
    "name": "GO 3 SPORT 1",
    "url": "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/560502/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=f48a8131e05f4d6e84de19f086c781a6:fd28f2f966a906f4d4dcfd72ae90094e"
   },
   {
    "name": "GO 3 SPORT 2",
    "url": "https://shortcut-edgeware.helio.lv/__cl/cg:EDW-Production_HTTP/__c/153_HTTP/__op/dash-default/__f/manifest.mpd|drmScheme=clearkey&drmLicense=76e9be4fab3e5816bce280f6ca3f73d5:344103b77cc9bcb1b4b5461b3071639c,7026b3c03cb15e7c90bb5d98d2918eea:66c6f85f004fb9936ed20733e5eae60c,f7839d964c5356be9acc7491cc721860:f84a6ee22df39731fdaa7b9e5c676dd1"
   },
   {
    "name": "GO 3 SPORT OPEN",
    "url": "https://shortcut-edgeware.helio.lv/__cl/cg:EDW-Production_HTTP/__c/229_HTTP/__op/dash-default/__f/manifest.mpd|drmScheme=clearkey&drmLicense=a55253dc8ada542f9908892a16165207:b3271fd768a7650aa651d4a47e353c4f,f6062d0e8cf65e97a567e7395cb0d5d9:0864c690f302f8ad17a3358d842b0acf,318d2477980651e0aed4ad175955eae9:c238b596496635e74041b7b7730ad95b"
   }
  ]
 },
 {
  "name": "SETANTA SPORT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zTSrk-YUB3puQ11vccRGAbtXbp_p7vJfWVxv7i6H0sTuNig8yZxMtTpd&s=10",
  "servers": [
   {
    "name": "SETANTA SPORT 1",
    "url": "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561002/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=8ab2332442854e62b0018eec3ee58484:37fdee8b6eef5c96001e8c6fc47bfc08"
   },
   {
    "name": "SETANTA SPORT 2",
    "url": "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561504/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=9552bcbabfbd4ac19744422143bfb875:e6daacaced7eba147d2b667441060a4f"
   }
  ]
 },
 {
  "name": "CT SPORT CZ/SK",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwvO6leFqR3oM5kClgUK0mXORDUw_GlNfs2APo21fLmwBEDiUm1D46xQ&s=10",
  "servers": [
   {
    "name": "CT SPORT CZ/SK",
    "url": "https://dash.antik.sk/stream/nvidia_ct_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "name": "JOJ SPORT CZ/SK",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuoxHf97vvlUR5dSg3Pk8y_pvNI5DwJOrsG1OQyZNuAQ59DEKyuuExBL4&s=10",
  "servers": [
   {
    "name": "JOJ SPORT CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_joj_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "JOJ SPORT 2 CZ/SK",
    "url": "https://dash.antik.sk/stream/nvidia_joj_sport_2/playlist_cbcs.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key"
   }
  ]
 },
 {
  "name": "RTVS SPORT CZ/SK",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyEQ0PF6CH40f9kNMmkGHjTtBs7W_5o38kwoWuEyKonTyW_ZoOfNsIK7w&s=10",
  "servers": [
   {
    "name": "RTVS SPORT CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_rtvs_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "name": "SPORT CZ/SK",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW5Ent_vLYIT2oYI5blgvKetA0uoGBBk3Oy9K7Gi3JIm-P8vmKO2TRxs&s=10",
  "servers": [
   {
    "name": "SPORT 1 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "SPORT 2 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "name": "NOVA SPORT CZ",
  "category": "TV SPORT",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Nova_Sport.png",
  "servers": [
   {
    "name": "NOVA SPORT 1 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "NOVA SPORT 2 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "NOVA SPORT 3 CZ",
    "url": "https://bbb.exoadash.com/TVD2709/index.mpd"
   },
   {
    "name": "NOVA SPORT 4 CZ",
    "url": "https://bbb.exoadash.com/TVD2700/index.mpd"
   }
  ]
 },
 {
  "name": "SPORT 5",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBHTi3oO6juPixHlX0pW31Y1UFOyVwFOh5JdxspbxmcZyiC-2WRWYPOA&s=10",
  "servers": [
   {
    "name": "SPORT 5 IL",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=c3b32b23081b5486ae5176da9c358808:4708b352ee1d50ccdf94af9d2a952ed8"
   },
   {
    "name": "SPORT 5 STAR",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_starz/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=f788e107fecdf189b157766bc4db084e:7f531e4eed5d07f5ae187c8807b40480"
   },
   {
    "name": "SPORT 5 LIVE",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_live/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=cc667cda2ff49c4500fdf1ad847d4fc0:13a48dc2c1257fd9a119b448de5225f6"
   },
   {
    "name": "SPORT 5 PLUS",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_plus/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=b2148b62369126aee4ea1a6bdaea7ede:ddafd3d32662550e624a81b8bfc4ed09"
   }
  ]
 },
 {
  "name": "ONE IL",
  "category": "TV SPORT",
  "logo": "https://play-lh.googleusercontent.com/n-lc84rzCg5eLnu12rblsdicmsm-LWeqDv-hYqRLSk7DwS70HyEM1s3H7hcnhfQXFg0=w600-h300-pc0xffffff-pd",
  "servers": [
   {
    "name": "ONE 1 IL",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/one_1/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=3f9bd29c066a700e8b282c4a9dccf8eb:6e3314a39d06af5553a16b8550f0691e"
   },
   {
    "name": "ONE 2 IL",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/one_2/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=6f09c99d572d9c6d4d616521ee785460:12893b12e80c3c5dbaf6b4994c8432c0"
   }
  ]
 },
 {
  "name": "DIGI SPORT",
  "category": "TV SPORT",
  "logo": "https://cdn.adh.reperio.news/image-d/d7c22921-0830-4fec-b207-dc4a6b9ce1de/index.jpeg?p=f%3Djpeg%26w%3D1400%26r%3Dcontain",
  "servers": [
   {
    "name": "DIGI SPORT 1",
    "url": "https://kuk1.modprimus1.cfd/kuk1/usergendx472snx93kdgwqrnd.m3u8|Referer=https://cool-tv.net/"
   },
   {
    "name": "DIGI SPORT 2",
    "url": "https://kudos111.terranovax1.cfd/kuk2/usergendx0ul2J8tsDx9lgcddwqrnd.m3u8|Referer=https://cool-tv.net/"
   },
   {
    "name": "DIGI SPORT 3",
    "url": "https://pulse1.zalmora1.cfd/kuk3/usergendxt1v8klq6rnd.m3u8|Referer=https://cool-tv.net/"
   },
   {
    "name": "DIGI SPORT 4",
    "url": "https://pulse1.zalmora1.cfd/kuk4/usergendlg1ks0t2n.m3u8|Referer=https://cool-tv.net/"
   }
  ]
 },
 {
  "name": "PRIMA SPORT",
  "category": "TV SPORT",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/3/35/Prima_sport.png",
  "servers": [
   {
    "name": "PRIMA SPORT 1",
    "url": "https://rohan116.ultronx1.cfd/puk1/usergenrx0cir27aq.m3u8|Referer=https://cool-tv.net/"
   },
   {
    "name": "PRIMA SPORT 2",
    "url": "https://arwen1.panaka1.cfd/puk2/usergenrnd0clv03fyt.m3u8|Referer=https://arwen1.panaka.cfd/000/"
   },
   {
    "name": "PRIMA SPORT 3",
    "url": "https://iron1.jarvisx1.cfd/puk3/usergenrx4t0l8sybkr.m3u8|Referer=https://iron1.jarvisx.cfd/000/"
   },
   {
    "name": "PRIMA SPORT 4",
    "url": "https://galandriel1.thobias11.cfd/puk4/usergendx42x9qrnd.m3u8|Referer=https://cool-tv.net/"
   },
   {
    "name": "PRIMA SPORT 5",
    "url": "https://galandriel1.thobias11.cfd/puk5/usergen0grnd3y8.m3u8|Referer=https://cool-tv.net/"
   }
  ]
 },
 {
  "name": "NBA TV",
  "category": "TV SPORT",
  "logo": "https://cdn.nba.com/manage/2021/02/NBATV-logo-horizontal.jpg",
  "servers": [
   {
    "name": "NBA TV",
    "url": "https://otte.cache.aiv-cdn.net/dub-nitro/live/clients/dash/enc/2jbycgm3g3/out/v1/066dd9325648468c9ecdc8b272370931/cenc.mpd|drmScheme=clearkey&drmLicense=84077d18bcf234a42de3745be106a87f:aee3069c062ec8ee6bfdd32985f287ef"
   }
  ]
 },
 {
  "name": "SPORT TV PT",
  "category": "TV SPORT",
  "logo": "https://www.mxgp.com/sites/default/files/news/image/SportTv_Institucional-05.png",
  "servers": [
   {
    "name": "SPORT TV 1 PT",
    "url": "http://94.130.32.19:8080/sporttv1/index.m3u8"
   },
   {
    "name": "SPORT TV 1 PT",
    "url": "http://znty.dyndns.org:5010/hls/stv1.m3u8"
   },
   {
    "name": "SPORT TV 2 PT",
    "url": "http://znty.dyndns.org:5010/hls/stv2.m3u8"
   },
   {
    "name": "SPORT TV 3 PT",
    "url": "http://znty.dyndns.org:5010/hls/stv3.m3u8"
   },
   {
    "name": "SPORT TV 4 PT",
    "url": "http://znty.dyndns.org:5010/hls/stv4.m3u8"
   },
   {
    "name": "SPORT TV 5 PT",
    "url": "http://znty.dyndns.org:5010/hls/stv5.m3u8"
   },
   {
    "name": "SPORT TV + PT",
    "url": "http://znty.dyndns.org:5010/hls/sportv+.m3u8"
   }
  ]
 },
 {
  "name": "DAZN ELEVEN PT",
  "category": "TV SPORT",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4wUk2jt7Si5dvd2CDwlO6AvL5qc8KmBI051aslZ3dc4vQCeKYPdsFZEJ&s=10",
  "servers": [
   {
    "name": "DAZN ELEVEN 1 PT",
    "url": "http://znty.dyndns.org:5010/hls/eleven1.m3u8"
   },
   {
    "name": "DAZN ELEVEN 2 PT",
    "url": "http://znty.dyndns.org:5010/hls/eleven2.m3u8"
   },
   {
    "name": "DAZN ELEVEN 3 PT",
    "url": "http://znty.dyndns.org:5010/hls/eleven3.m3u8"
   },
   {
    "name": "DAZN ELEVEN 4 PT",
    "url": "http://znty.dyndns.org:5010/hls/eleven4.m3u8"
   },
   {
    "name": "DAZN ELEVEN 5 PT",
    "url": "http://znty.dyndns.org:5010/hls/eleven5.m3u8"
   }
  ]
 },
 {
  "name": "J Sport JPN",
  "category": "TV SPORT",
  "logo": "https://www.jsports.co.jp/img/web/sns_dragons01.png",
  "servers": [
   {
    "name": "J Sport 1",
    "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs18&isp=5"
   },
   {
    "name": "J Sport 2",
    "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs19&isp=5"
   },
   {
    "name": "J Sport 3",
    "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs21&isp=5"
   },
   {
    "name": "J Sport 4",
    "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs22&isp=5"
   }
  ]
 },
 {
  "name": "HBO",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJCt8flc4ECpgPntHKPzTcQzozpbVEVt3Gg&usqp=CAU",
  "servers": [
   {
    "name": "HBO PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd|drmScheme=clearkey&drmLicense=d7f3c8215a944e068b176c9d2a5f3048:93c0a798243d6443864d1a7ff3e42c05"
   },
   {
    "name": "HBO VIET",
    "url": "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/hbo.smil/manifest.mpd|drmScheme=clearkey&drmLicense=09ddfe3d63863cafaeb79d0546b098ab:3de0f38dcf014827dfd5bec38743c6a2"
   },
   {
    "name": "HBO ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/hbo/manifest.mpd"
   },
   {
    "name": "HBO MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBO)/master.mpd|drmScheme=clearkey&drmLicense=7ad888ee5dd6496a8c2c77a6284ff936:718716c435914901d2551930a256974e"
   }
  ]
 },
 {
  "name": "HBO HITS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8p1ezoMpMeuN8D7n5tWElhsmKB_WmJQ6VI9aQxqYQ5HnBiiC8AhdFjq0&s=10",
  "servers": [
   {
    "name": "HBO HITS PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd|drmScheme=clearkey&drmLicense=3e8c5a917d424f06b2196a5c9e2d8043:516c47ccef00a12421d9805c8c1c6c1d"
   },
   {
    "name": "HBO HITS ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/hbohits/manifest.mpd"
   },
   {
    "name": "HBO HITS MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBOH)/master.mpd|drmScheme=clearkey&drmLicense=437a4a8dfb314f81883c7894c99e72bf:e95073f71af10f85067c5d8bc509f667"
   }
  ]
 },
 {
  "name": "HBO FAMILY",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREis8BTJrcHKO0i8DxZWp65TM45gaannAfFA&usqp=CAU",
  "servers": [
   {
    "name": "HBO FAMILY PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd|drmScheme=clearkey&drmLicense=c6e4b9218f534a709d165c3a7e2f8048:87c0e7cf73324aea32dada7b5f33063d"
   },
   {
    "name": "HBO FAMILY ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/hbofamily/manifest.mpd"
   },
   {
    "name": "HBO FAMILY MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBOF)/master.mpd|drmScheme=clearkey&drmLicense=98e8255fae9b41aebb334645a916c82b:3b631ef06c2782808a6d53ff0e24d9e3"
   },
   {
    "name": "HBO FAMILY MY WEB",
    "url": "https://player.asnger.my.id/bitplayer.html?file=https://unifix.astv-best.workers.dev/HBOF/master.mpd&key=98e8255fae9b41aebb334645a916c82b:3b631ef06c2782808a6d53ff0e24d9e3"
   }
  ]
 },
 {
  "name": "HBO SIGNATURE",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgGWDK2oHyO33OLtpxNA_rIwKnOx5y9Wz8A&s",
  "servers": [
   {
    "name": "HBO SIGNATURE PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd|drmScheme=clearkey&drmLicense=74d8f5916c234b80a9179e5d3c7a2046:f8d2753ff54579efc01d3373acf21f96"
   },
   {
    "name": "HBO SIGNATURE ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/hbosignature/manifest.mpd"
   }
  ]
 },
 {
  "name": "CINEMAX",
  "category": "TV Movies",
  "logo": "https://i.vimeocdn.com/video/381301582-e88666d059aa981f250d5868c1dcc87aa99aaa3e0042b02a5a2be3b44e3d8f03-d?f=webp",
  "servers": [
   {
    "name": "CINEMAX PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd|drmScheme=clearkey&drmLicense=d7a9c5215e364b809f148c2d6a7e3045:c92a3b4a7fe9fab97c130468260b963f"
   },
   {
    "name": "CINEMAX ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/cinemax/manifest.mpd"
   },
   {
    "name": "CINEMAX MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Cinemax)/master.mpd|drmScheme=clearkey&drmLicense=b83391c0f7c64142baa326b101c9f3d4:1ea53c247b115d6c3bb37a4d0485a37c"
   },
   {
    "name": "CINEMAX ID Trv",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016cdbfc4a1934bf/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   },
   {
    "name": "CINEMAX WEB",
    "url": "https://player.asnger.my.id/dash_player.html?file=https://frmedia.bangme1990.workers.dev/https://frmedia.bangme1990.workers.dev/https://atemecdnbalancer-voe.sysln.id/live/eds/CinemaxHD/mediampd/CinemaxHD.mpd&key=b489136b34aa4166a9c9984f19155d30:2c6de796954779fd6f51584425ac834e"
   }
  ]
 },
 {
  "name": "AXN",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-dHk_vlJD8MxbWbE0AUK4Xerf81mhMTkwwGmcCeQs8Gw77rlK9wfIgem&s=10",
  "servers": [
   {
    "name": "AXN PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd|drmScheme=clearkey&drmLicense=c7e5a2199d644b318f702a6c4e5d8139:300778996b5a71594db508982256f365"
   },
   {
    "name": "AXN ID",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/456143d3b12140e1a872b25f067ddb62/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=2b095c9946d242cb9108e6a589a26072:8bc2cdfd0e86f7cfa935ef05978be229"
   },
   {
    "name": "AXN MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(AXN)/master.mpd|drmScheme=clearkey&drmLicense=4345340d92d64788bef7d99594cbe643:c67f6e21ebbd520e31d4141b771d3867"
   }
  ]
 },
 {
  "name": "ROCK ACTION",
  "category": "TV Movies",
  "logo": "https://thumbor.prod.vidiocdn.com/1bHJE8jzAfdHr_zMSs216Ya-pGk=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/8121/rock-action-3cc936.jpg",
  "servers": [
   {
    "name": "ROCK ACTION PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd|drmScheme=clearkey&drmLicense=d9a4f5218c374b069e156f2d7a3c8049:72aa902f471adf15bef2710b6b689ed0"
   },
   {
    "name": "ROCK ACTION ID",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/010bb28c19b64975b318d3b00f58b18b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=d4126f7fd6134adfbedb3a0daefd7657:920f1adcca60069c887da7f1d225607d"
   },
   {
    "name": "ROCK ACTION ID Trv",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/ROCK_ACTION/manifest.mpd"
   },
   {
    "name": "ROCK ACTION MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(RockAction)/master.mpd|drmScheme=clearkey&drmLicense=c64cf911505e42c8aa17869ae51206ba:2f3f5f1c609c1120216d4d72377d1ac2"
   }
  ]
 },
 {
  "name": "ROCK ENTERTAIMENT",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qdvjqaiXntdAqpgweyENqjHnBxuSYQWDiw&usqp=CAU",
  "servers": [
   {
    "name": "ROCK ENTERTAIMENT PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd|drmScheme=clearkey&drmLicense=86e5c7921a434f60b9287d3c9e5a6041:fab817af24eab2a73ae89145797cf556"
   },
   {
    "name": "ROCK ENTERTAIMENT ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/4cae4723d4d54a7fb71020bd7939a202/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=a44cd51b688a458d97f534c286e58243:d62302543075463e472e23d7e947f10b"
   },
   {
    "name": "ROCK ENTERTAIMENT ID Trv",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/rock_entertainment/manifest.mpd"
   },
   {
    "name": "ROCK ENTERTAIMENT MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(RockEnt)/master.mpd|drmScheme=clearkey&drmLicense=6bbe30dc7d7949849ba0c4f2abb2a3ff:9eb316564523faecf7d5b2fef8081007"
   }
  ]
 },
 {
  "name": "DRAMA CHANNEL",
  "category": "TV Movies",
  "logo": "https://pbs.twimg.com/media/C8zayX-UAAAVFzU.jpg",
  "servers": [
   {
    "name": "DRAMA CHANNEL",
    "url": "https://slive.mana2.my/DramaChannel/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407"
   }
  ]
 },
 {
  "name": "CITRA MUSLIM",
  "category": "TV Movies",
  "logo": "https://thumbor.prod.vidiocdn.com/cYjrKEVUBEgNSFGp-F_QtnYVUXE=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6678/citra-muslim-68ac64.jpg",
  "servers": [
   {
    "name": "CITRA MUSLIM",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/CitraMuslimHD/mediampd/CitraMuslimHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=f0bdfdef0f564819a2b43345b328f989:9f7555440fb310341ddb00cdbc638cea"
   }
  ]
 },
 {
  "name": "CITRA BIOSKOP",
  "category": "TV Movies",
  "logo": "https://thumbor.prod.vidiocdn.com/AC-3tXEL_aNdU-jHErZHxSrazrk=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6684/citra-bioskop-2be866.jpg",
  "servers": [
   {
    "name": "CITRA BIOSKOP",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/CitraBioskopHD/mediampd/CitraBioskopHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=94788bc937054090b216dc101e5fa5dc:297c97962ff8d9e99f1da178ea0083ec"
   }
  ]
 },
 {
  "name": "CITRA ENTERTAINMENT",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCE8Nigq-VIeBU5gQi-Tiux9tVdM3LWU5JkdO9p6y8v4T5VNGzQCRExSo&s=10",
  "servers": [
   {
    "name": "CITRA ENTERTAINMENT",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/CitraEntertainmentHD/mediampd/CitraEntertainmentHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=05cb4bbd91e34d858f6921e7196f7795:da3e19311e3a3d147607971a101c8dc3"
   }
  ]
 },
 {
  "name": "CITRA DANGDUT",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVc9TCoRQzRSNkZCmz_Kpn9QRjMC8rEUD3pmlPATwpQblqTwdaRP7xcw&s=10",
  "servers": [
   {
    "name": "CITRA DANGDUT",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/CitraDangdutHD/mediampd/CitraDangdutHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=44a4c73921ea4f5f90eaaaf793d3f7cf:3be319093fec8a409fe0553128089671"
   }
  ]
 },
 {
  "name": "MOVIE NEWS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2s47VIovlYftEcx_q0jl3Q4oV__fV_tw4OxmnHIqEZxbn_AOsAxYdqJ&s=10",
  "servers": [
   {
    "name": "MOVIE NEWS",
    "url": "https://www.cubmu.com/watch/live-tv/185-movies-news"
   },
   {
    "name": "MOVIE NEWS",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c68572841ba301729cc464d33c0b/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "ONE CHANNEL",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uof7-5YIZRGzXVOeVUQSNVd_tHavuQ-mag&usqp=CAU",
  "servers": [
   {
    "name": "ONE CHANNEL",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/9ec31bcce34848d69d4771270ff23ab9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=be886ebe45024d4b80110269211b3adb:91b1858f34ece95c8377366fb87d99c4"
   }
  ]
 },
 {
  "name": "CINEMACHI GROUPS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA1_7pNF4r6x-0EBR4rUiGnYV_--KapeKDmT7g26WPl9mSmXLsNNdn-2f&s=10",
  "servers": [
   {
    "name": "CINEMACHI CH",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/e992e986a88346c18a5dcc4fbcdae6b9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=33333f38930949b1af65b3361ad80d1d:b159847f9af0500738b01e91cf023e30"
   },
   {
    "name": "CINEMACHI KID",
    "url": "https:///d84q7nw4qf3j3.cloudfront.net/out/v1/c70975aaa68d47f2a38799e6730a7816/index.mpd|Referer=https://www.visionplus.id/&drmScheme=clearkey&drmLicense=2bfc3e059a9f4176b835a15c9a0c0dac:265c00f7fd825ad3e092b56081953b60"
   },
   {
    "name": "CINEMACHI XTRA",
    "url": "https:///d2xz2v5wuvgur6.cloudfront.net/out/v1/47c895ca72544fcfa4221c499b555a10/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c7b3852d9c84418f942923e41c31e633:ddb99755e0bebd98c92c7eab974bf161"
   },
   {
    "name": "CINEMACHI MAX",
    "url": "https:///d2tjypxxy769fn.cloudfront.net/out/v1/782400332c96440598260730a864bc6f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=1dc30f49888c4652897d9c998aa2cac1:8ccb6857157c1a01c5a47eb853f51aa2"
   },
   {
    "name": "CINEMACHI ACTION",
    "url": "https:///d3b0v7fggu5zwm.cloudfront.net/out/v1/bde0a6d8d3fd4d77ae5093ad2e6699dc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5a6668f3a5d64338bce13307e5c570be:d0c76237c5ee38e7a420e9c83323023e"
   }
  ]
 },
 {
  "name": "WARNER BROS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW6pbaRlYj6_E7HLcTfGhfMHFuO4n-bYLAa1acIf4tiFnUCL4rZ7MKFYi&s=10",
  "servers": [
   {
    "name": "WARNER BROS PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_warnerhd/default1/default/index.mpd|drmScheme=clearkey&drmLicense=c4a8d5319e624f078b156d3c7a5e2049:cee9422b4a40d85589f36f1d76fb144f"
   },
   {
    "name": "WARNER BROS ID Trv",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/warner/manifest.mpd"
   },
   {
    "name": "WARNER BROS MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(WarnerTV)/master.mpd|drmScheme=clearkey&drmLicense=6f4ea7be45af4275a8d76845fb19dba5:b02208ea61a2cdbf5b09440bc3157f04"
   },
   {
    "name": "WARNER BROS ID Alt",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856c3db2cc016cf0b533fe73e3/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "GALAXY GROUPS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjPTZj4XoVl-WFxUmIx7isCte6Vb7096GxS27F2qyh76GjIlgU2_bkgA&s=10",
  "servers": [
   {
    "name": "GALAXY CHANNEL",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/751a0982779f4edd904205eb351e220d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cfbae59795044563b5b9b4927a79a76e:ce57c9490bd772b390d78b9fedaf8d36"
   },
   {
    "name": "GALAXY PREMIUM",
    "url": "https://live-channel4-cdn.visionplus.id/out/v1/45c0752c6b6b4397b80243ac9fed96fd/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0d9539db24004da9ac36ea49a09e255c:30304533b5008ad7f33c25f225506bc0"
   }
  ]
 },
 {
  "name": "IMC ",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLG--iJaseh71v3IXL8SmwiXRyUSyIho3wg&usqp=CAU",
  "servers": [
   {
    "name": "IMC ",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/65432a4c12ca4a52abf473a0e41d7c7e/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=a04c73e95eeb411dabcba8c35a5a58e8:3f9195dc468d3372f69c6bec5bfa75bb"
   }
  ]
 },
 {
  "name": "DREAMWORK",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kKEZFCMBLvCk0cZMMZ9fNNOfGvFj8Nx3nTV3Y7O2Rmfo7M2EqLWEeLA&s=10",
  "servers": [
   {
    "name": "DREAMWORK PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=1f7c9a425d864e30b2198a3c6f7d5041:b392ee3cd42686a8cff3070eef614745"
   },
   {
    "name": "DREAMWORK MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Dreamworks)/master.mpd|drmScheme=clearkey&drmLicense=e8ce35ed8bc34772abedd63383aa11b7:1d2d76741e825e5c7babf597374b016e"
   },
   {
    "name": "DREAMWORK ID",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/DreamWorksHD/mediampd/DreamWorksHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=f08c30b7ee114399b72e77b0c099244b:a33d496875d04510a9b3116ba51ae65d"
   }
  ]
 },
 {
  "name": "ZEE GROUPS",
  "category": "TV Movies",
  "logo": "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/www.bizasialive.com/wp-content/uploads/2018/11/zeetvlogo001.jpg",
  "servers": [
   {
    "name": "ZEE BIOSKOP",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/81cb1af2ea4d4842a94f1c83957b4cd2/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=398ef14ec7014ad8ae75414a7efd2a0f:99a6225691aa669f0f22677b4536705e"
   },
   {
    "name": "ZEE BIOSKOP Alt",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/ZeeBioskop/mediampd/ZeeBioskop.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=70d0197a8aca42589cf5df6daa576d86:ebd47832fd7251a09e3cc8eb36790ad5"
   },
   {
    "name": "ZEE THI",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeThi)/master.mpd|drmScheme=clearkey&drmLicense=bd7282e920e5437a9b1f01bc6f81795c:99763370f0763b0f7119aab091cc70c8"
   },
   {
    "name": "ZEE TAMIL",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeTamil)/master.mpd|drmScheme=clearkey&drmLicense=06e1831ba6f946568bdea62e67ca7317:f02c40d2006e036104f7726116861d7c"
   },
   {
    "name": "ZEE CINEMA",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeCinema)/master.mpd|drmScheme=clearkey&drmLicense=22fdfcf5cb304eb6b2ebbecbca9c9d10:b7c4f0ab8bc0bd4deabe73cf75dfa537"
   },
   {
    "name": "ZEE TV",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetv/default/manifest.mpd|drmScheme=clearkey&drmLicense=ed068cf84f0640ccbc7c0e395c0a272e:bb722190f2bb446391020411a7d0828b"
   }
  ]
 },
 {
  "name": "MY CINEMA GROUPS",
  "category": "TV Movies",
  "logo": "https://stmify.com/wp-content/uploads/2024/11/262-s.webp",
  "servers": [
   {
    "name": "MY CINEMA EUROPA",
    "url": "http://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "MY CINEMA KIDS",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/mykids/manifest.mpd"
   }
  ]
 },
 {
  "name": "CELESTIAL MOVIES",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDDE-maQyY3kv82Fba4qeJKO-0DdRJCa_MN0KwSTSLcHi_6Nlralp0ik&s=10",
  "servers": [
   {
    "name": "CELESTIAL MOVIES MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Celestial)/master.mpd|drmScheme=clearkey&drmLicense=107e13b213a94a6cbb6d02c25653c083:044af5b9e0258e2d39437ee03365fd2d"
   },
   {
    "name": "CELESTIAL MOVIES ID",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/fd25e662b7154c60a94f7c061573ba2d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=de4a383599bb4ec4a24f8c61f2b9a3ba:5166677d7f6797bcf459cf7c8b66dcb9"
   }
  ]
 },
 {
  "name": "TVN GROUPS",
  "category": "TV Movies",
  "logo": "https://thumbor.prod.vidiocdn.com/GywFg7I_Jkpy5noohBX1mLkoRXQ=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6362/tvn-40a16d.jpg",
  "servers": [
   {
    "name": "TVN MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(tVNHD)/master.mpd|drmScheme=clearkey&drmLicense=925fe1266db744a3b9524a23a6cc524b:d1266e747e241339a539e54f26890286"
   },
   {
    "name": "TVN ID",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/6dc5412d26ea4e65961c825d866f2a34/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=2e8cbd6f664b4ace966d3edfad94c18e:cff33777777f7e61078ae2ae41ed0636"
   },
   {
    "name": "TVN KOREA",
    "url": "https://d21dxaer0ypwk1.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-a6m2cy2rylsvo-ssai-prd/54ac8e25_eb5a_4f10_ba20_ffb254f0a16c/hls/playlist.m3u8"
   },
   {
    "name": "TVN STORY KOREA",
    "url": "https://d2zyqoz1zsj2mq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-i9yul1lyegl6e-ssai-prd/6d07fe2a_003a_4879_acfc_44e3c3c10f03/hls/playlist.m3u8"
   },
   {
    "name": "TVN MOVIES MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(tVnM)/master.mpd|drmScheme=clearkey&drmLicense=52480b6651c243e2b48b04ab3ecf05ec:aa3513df0bc2d949ee44c52204665d50"
   },
   {
    "name": "TVN MOVIES ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/096d5cf064294e7ea3a7f59ee2899669/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=17fb563c784848f09d8a1ea88a2fa989:1d0bd94eab5d5f56a950b784d9345439"
   }
  ]
 },
 {
  "name": "KIX",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtV6annmuqvOvBjl7a-qm3pkBh-njpUE9GA&usqp=CAU",
  "servers": [
   {
    "name": "KIX PH",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kix_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=7f4a9c312e854d67b0198c6f5a3e7240:141f058ad1a6230e7c6f9d302ce378ef"
   },
   {
    "name": "KIX ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/7a50d44c0a154dd29880c3728fb49a56/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=85f74e4d84834605a4b01820091ea627:c2881a45f94ec6ecbec1303f4e3b1fd6"
   },
   {
    "name": "KIX ID Alt",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/kix/manifest.mpd"
   }
  ]
 },
 {
  "name": "CCM",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdR1Ys-ZqxoausXiJUfTOZ08nrLiUJXYUKhymu2_n0ZtvpJ8BCG2HvSq2a&s=10",
  "servers": [
   {
    "name": "CCM ID",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/6bdbe6ce7f034807aba5f09bed048b05/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=974d4fb195224f66a2271de806e62018:0e92ec1a28d59da80161c3541c6eb8eb"
   }
  ]
 },
 {
  "name": "K PLUS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgAuvgqTX6lZ3S7qwGU8CBj1j-8BsZ1iO3fG1_pBDqdch9XthS2VJOAk&s=10",
  "servers": [
   {
    "name": "K PLUS MY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Kplus)/master.mpd|drmScheme=clearkey&drmLicense=826e7fd2d6a14060bfea9347d96f8824:176897afb079e0cc76bc912df4cb0b6e"
   },
   {
    "name": "K PLUS ID",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/kplus/manifest.mpd"
   }
  ]
 },
 {
  "name": "THRILL",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLswJ26Sr_ar4aPj073ysrK7dpqaVaewGQbw&usqp=CAU",
  "servers": [
   {
    "name": "THRILL ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/3c619ecc120b46e999d1eaa627cc544f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=3ffab3471a994535bdf7fc663792f08b:6e82876474df025c39ae804ba738ff17"
   },
   {
    "name": "THRILL ID Alt",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/thrill/manifest.mpd"
   },
   {
    "name": "THRILL PH",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd|drmScheme=clearkey&drmLicense=b8c3d5906e424f17a9215d8c7a2e6043:02ce48f1b48f7cbdc3e2703a56e8fa31"
   }
  ]
 },
 {
  "name": "BIOSKOP INDONESIAN",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61i3sHQvqrup2aP9zYnrVHR-NqSgsskSA-w&usqp=CAU",
  "servers": [
   {
    "name": "BIOSKOP INDONESIAN",
    "url": "http://202.150.161.212:5000/live/channel35/playlist.m3u8"
   },
   {
    "name": "BIOSKOP INDONESIAN",
    "url": "https://www.cubmu.com/watch/live-tv/230-bioskop-indonesia"
   },
   {
    "name": "BIOSKOP INDONESIAN",
    "url": "https://cdnjkt913.transvision.co.id:1004/live/master/4/4028c6856fd0d66d0170341bf1000905/manifest.mpd|User-Agent=Mozilla/5.0 (Linux; Android 13; UltraBox Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/136.0.7103.61 Mobile Safari/537.36&Referer=https://www.cubmu.com/&drmScheme=clearkey&drmLicense=584638687655344f724d7330484e5552:34616c6b32476b4372427051716b4656"
   }
  ]
 },
 {
  "name": "CINEMA WORLD",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKdzb0-sOhgCnLaWuFVHzyPLJs3I8o3O09EawA7YppqUNwYP56kHy20DQ&s=10",
  "servers": [
   {
    "name": "CINEMA WORLD ID",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016d0555b83e37a3/manifest.mpd|Referer=https://www.cubmu.com/&drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   },
   {
    "name": "CINEMA WORLD VIET",
    "url": "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/cinemaworld.smil/manifest.mpd|drmScheme=clearkey&drmLicense=ee7915564d7439d09bd3556ffccc87a4:b35e12a75a42a6f9184723a90ff42d9c"
   }
  ]
 },
 {
  "name": "STUDIO UNIVERSAL",
  "category": "TV Movies",
  "logo": "https://i.vimeocdn.com/video/476760252-d04d9933919b72b3a48ade5dcb35a0d10dc7e2819c23201f8e78d78078058e83-d_640?isnew=1",
  "servers": [
   {
    "name": "STUDIO UNIVERSAL",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b4a7b3289eff493d8700becf2e2a1157:bfbcfcb8137dd565a7f4b5ce7800c1f0"
   }
  ]
 },
 {
  "name": "HITS GROUPS",
  "category": "TV Movies",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/a/af/HITS-WWW-Banner1.png",
  "servers": [
   {
    "name": "HITS CHANNEL ID",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/333a9658ed6a4424a92e319114fb7111/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=9e9d9ca2bb814de9bfd73d7c19bfe190:e8c178a885d1a1e042ca34ec5ea3b938"
   },
   {
    "name": "HITS MOVIES ID",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/de93893d01e6446daaf052a7fec694fc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=07af9ce05d8f4960a1b9113e7fdb8e7e:12b66b374d9c804f7311cb6a8d421c8c"
   },
   {
    "name": "HITS NOW ID",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/HITSNowHD/mediampd/HITSNowHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=26bfec0f1cb047d7963f37e1b6401ec0:60e2302b29cb9cabf7e1743fc2f0f059"
   }
  ]
 },
 {
  "name": "WEDOTV GROUPS",
  "category": "TV Movies",
  "logo": "https://episodemag.com/wp-content/uploads/2025/12/wedotv_logo_og.png",
  "servers": [
   {
    "name": "WEDOTV MOVIE",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h70/wedotv_movie.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "WEDOTV ARMOR",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h68/wedotv_amor.m3u8?app_type=web&userid=lite&chname=wedotvAmor|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "WEDOTV BIG STORIES",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h69/wedotv_big_stories.m3u8?app_type=web&userid=lite&chname=wedotvBig_Stories|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   },
   {
    "name": "WEDOTV SPORT",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h71/wedo_sport.m3u8?app_type=web&userid=lite&chname=wedoSports|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "SONY MOVIES",
  "category": "TV Movies",
  "logo": "https://i.ytimg.com/vi/KM76c3-Cor4/maxresdefault.jpg",
  "servers": [
   {
    "name": "SONY MAX",
    "url": "https://agile-ridge-02432.herokuapp.com/https://ucdn.starhubgo.com/bpk-tv/SonyMAX/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=d9d97a893d1c42a3ab865f0ea5f85d87:fe1f21eda73955bf58f01cf5449cb289"
   },
   {
    "name": "SONY ENTERTAINMENT",
    "url": "https://agile-ridge-02432.herokuapp.com/https://ucdn.starhubgo.com/bpk-tv/SonyEntertainmentTelevision/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=11638fd3d4294a00a06a96752386c974:1631bf2a7e1c01aa9be0777798cbacbc"
   },
   {
    "name": "SONY YAY",
    "url": "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(SonyYay)/master.mpd|drmScheme=clearkey&drmLicense=582e9e382cb0495886afbabdbdb6fbf7:c0f550839b235443724cd007392b6e40"
   }
  ]
 },
 {
  "name": "AND CHANNEL",
  "category": "TV Movies",
  "logo": "https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-9-tvhd_0/list_clean/1170x658withlog2079502313.png",
  "servers": [
   {
    "name": "AND TV",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtv/default/manifest.mpd|drmScheme=clearkey&drmLicense=26df86eeebb04d7fbc45c948f76e81fd:5f3a23f1a73c4c96ababce5fffe7b06b"
   },
   {
    "name": "AND PICTURE",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andpictures/default/manifest.mpd|drmScheme=clearkey&drmLicense=8dea532cabfe4f71ba20f62310e7949f:7a214a974e4f4d1d9bb66364d5f0cb92"
   }
  ]
 },
 {
  "name": "WATCH MOJO",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSQFCyUdS1dGfJ_YSK7-1gJ3hnGoM0eiIaQ&usqp=CAU",
  "servers": [
   {
    "name": "WATCH MOJO",
    "url": "https://watchmojo-1-us.tcl.wurl.tv/playlist.m3u8"
   }
  ]
 },
 {
  "name": "MN PLUS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFdMc5i-Lzdbu-8aeSRAMWsgZD_SbDWhmGuZEQJdBv00Bl7i5s5d8682K&s=10",
  "servers": [
   {
    "name": "MN PLUS",
    "url": "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e"
   }
  ]
 },
 {
  "name": "MNX",
  "category": "TV Movies",
  "logo": "https://jiotvimages.cdn.jio.com/dare_images/shows/channel/289a02504b3f11f0845aeda1bd0d78cf_1750139508469_l_medium.jpg?width=350&optimize=low&format=webp",
  "servers": [
   {
    "name": "MNX",
    "url": "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e"
   }
  ]
 },
 {
  "name": "MOVIES NOW",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPvSLYTgETVmilGR2Iyqn58KqjmHS3Rxz43mz3AwxSXusXEErTfWkuwWt&s=10",
  "servers": [
   {
    "name": "MOVIES NOW",
    "url": "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e"
   }
  ]
 },
 {
  "name": "ROMEDY NOW",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwbc_zJxaW4gYSSUZJ5ce3xNiQuZ0sAo1plgKZIEY-iVHtNlQNurhC0OZ&s=10",
  "servers": [
   {
    "name": "ROMEDY NOW",
    "url": "https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e"
   }
  ]
 },
 {
  "name": "DUNIA SINEMA",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmWa8JY65rQO4878aqwdCFRSDefyWmhzhag&usqp=CAU",
  "servers": [
   {
    "name": "DUNIA SINEMA",
    "url": "https://ikoh.branck.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(DuniaSin)/master.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=01a17625701e4734b02aa22c8657bd6f:975a483df422455dbc29a1d83ed6f154"
   }
  ]
 },
 {
  "name": "SOOKA TV GROUPS",
  "category": "TV Movies",
  "logo": "https://assets.theedgemarkets.com/sooka_20210608113149_facebook-sookamalaysia.jpg",
  "servers": [
   {
    "name": "DRAMA HEBAT",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_1/dash.mpd"
   },
   {
    "name": "FILM MANTAP",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_2/dash.mpd"
   },
   {
    "name": "Lawak Central",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_3/dash.mpd"
   },
   {
    "name": "DRAMA HOTPOT",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_4/dash.mpd"
   },
   {
    "name": "Travel & Taste",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_5/dash.mpd"
   },
   {
    "name": "Jom Ngaji",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_6/dash.mpd"
   },
   {
    "name": "Oh My Ceria",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_7/dash.mpd"
   },
   {
    "name": "ASIAN",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_8/dash.mpd"
   },
   {
    "name": "LOCAL",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_9/dash.mpd"
   },
   {
    "name": "LIFESTYLE",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_10/dash.mpd"
   },
   {
    "name": "MOVIES",
    "url": "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_11/dash.mpd"
   }
  ]
 },
 {
  "name": "MOVIE SPHERE",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_Y4gs8EO8rIRq54qmUgAEpByiP9m1_yiDI2XEa_PvHzTztocFOiqtGfP&s=10",
  "servers": [
   {
    "name": "MOVIE SPHERE",
    "url": "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8"
   }
  ]
 },
 {
  "name": "AMC GROUPS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiVbOjSd9KJolFe351VC30x9aaUuK18qh_U3XcHE2bGqiilTyvupQVzk&s=10",
  "servers": [
   {
    "name": "AMC PLUS",
    "url": "https://bcovlive-a.akamaihd.net/ba853de442c140b7b3dc020001597c0a/us-east-1/6245817279001/playlist.m3u8"
   },
   {
    "name": "AMC",
    "url": "https://5def33c73f084e11a19ca77697d6b413.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_AMCPresents/playlist.m3u8"
   },
   {
    "name": "AMC THRILLER",
    "url": "https://436f59579436473e8168284cac5d725f.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_RushByAMC/playlist.m3u8"
   }
  ]
 },
 {
  "name": "RUN TIME GROUPS",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNspkOSEzplCaR9S8_u2HrL8bzdb3IlTl72w&usqp=CAU",
  "servers": [
   {
    "name": "RUN TIME",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2649"
   },
   {
    "name": "RUN TIME THRILLER TEROR",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3054"
   },
   {
    "name": "RUN TIME CRIMEN",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3527"
   },
   {
    "name": "RUN TIME CRIMEN 2",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3533"
   },
   {
    "name": "RUN TIME CINE SERIES",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2152"
   },
   {
    "name": "RUN TIME ACTION",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3058"
   },
   {
    "name": "RUN TIME ROMANCE",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3056"
   },
   {
    "name": "RUN TIME CLASICO",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3053"
   },
   {
    "name": "RUN TIME SERIES",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3434"
   }
  ]
 },
 {
  "name": "ACTION HOLLYWOOD",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqcnkwJ6xS7wBKSX1dLZRwBv3wX0lOTE8L2rpchtvQtsRHT9H79eDPkM&s=10",
  "servers": [
   {
    "name": "ACTION HOLLYWOOD",
    "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8"
   }
  ]
 },
 {
  "name": "MY TIME MOVIE",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9RwbDRKvm_6a4ibbNGNC347FY8pbdsjeYMaUZPMnTrObE1CKhptSQJ0&s=10",
  "servers": [
   {
    "name": "MY TIME MOVIE",
    "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00500-studiocitypictu-mytimefr-xiaomi/playlist.m3u8"
   }
  ]
 },
 {
  "name": "KOREAN DRAMA",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWv9kqudhSBWDYeluULuCPk0qfGh6Q-CrYpNXVIUvXOpQ7EqVJ0fEDXDX&s=10",
  "servers": [
   {
    "name": "KOREAN DRAMA",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Koreandramas2/default/manifest.mpd|drmScheme=clearkey&drmLicense=ed197e7253c04946903f03bad9afac91:99ebb8683ea74b70a9fda1cbdc2cc1b4"
   }
  ]
 },
 {
  "name": "SHORTS TV",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYt7hSVp_Mv7ev3tFsHjx3JrMUQMBLG7Vn8DzOc0Banrjl4l9V7MSTS7O&s=10",
  "servers": [
   {
    "name": "SHORTS TV",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Shortstv2/default/manifest.mpd|drmScheme=clearkey&drmLicense=b994480f788d41ddbc805862ac469416:78a6a0fc1758483595da7113e58e4467"
   }
  ]
 },
 {
  "name": "K DRAMA",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCCVUOQbzB0fqJgG1RjDMtPO2zL6-BoYYyfaHE11ug0nUPJLo6oWAZotq&s=10",
  "servers": [
   {
    "name": "K DRAMA",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=425"
   }
  ]
 },
 {
  "name": "HI YAAH Movie",
  "category": "TV Movies",
  "logo": "https://vhx.imgix.net/hi-yahtv/assets/2d0cd40c-eaee-48cf-9ab3-b2cf69d6e110-9b300abc.png?auto=format%2Ccompress&fit=crop&h=720&w=1280",
  "servers": [
   {
    "name": "HI YAAH Movie",
    "url": "https://a28dc5e3f24c4a8da3a67c68be729c2c.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-59-HIYAH-PLEX/mt/plex/59/hls/master/playlist.m3u8"
   }
  ]
 },
 {
  "name": "NECO ",
  "category": "TV Movies",
  "logo": "https://www.necoweb.com/neco/assets/images/og.png",
  "servers": [
   {
    "name": "NECO",
    "url": "https://nl.utako.moe/neco/index.m3u8"
   }
  ]
 },
 {
  "name": "WOWOW GROUPS",
  "category": "TV Movies",
  "logo": "https://area.aeon.co.jp/img/aeoncs/shopimg/4608503_01.jpg",
  "servers": [
   {
    "name": "WOWOW PRIME",
    "url": "https://nl.utako.moe/wprime/index.m3u8"
   },
   {
    "name": "WOWOW CINEMA",
    "url": "https://nl.utako.moe/wcinema/index.m3u8"
   },
   {
    "name": "WOWOW LIVE",
    "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs20"
   }
  ]
 },
 {
  "name": "DLIFE",
  "category": "TV Movies",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33TwBmLHatKlxyqQr4aMQsXuw1qYj2y4CYA&usqp=CAU",
  "servers": [
   {
    "name": "DLIFE",
    "url": "https://nl.utako.moe/dlife/index.m3u8"
   }
  ]
 },
 {
  "name": "DISCOVERY GROUP",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLiwkOnQ9cZzUXfpkRAJj7WGbZCFMAwxXvA&usqp=CAU",
  "servers": [
   {
    "name": "Discovery Channel PH",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/discovery/default/index.mpd|drmScheme=clearkey&drmLicense=d5a7f8219c364e50b2147f6d3a8c9025:c77d5e56c52c4065c42594422ac85e2c"
   },
   {
    "name": "Discovery Asia",
    "url": "https://cdn4.skygo.mn/live/disk1/Discovery_Asia/HLSv3-FTA/Discovery_Asia.m3u8"
   }
  ]
 },
 {
  "name": "HGTV",
  "category": "TV Others",
  "logo": "https://cdn.broadbandtvnews.com/wp-content/uploads/2019/07/14112631/HGTV-HD-KV-1.jpg",
  "servers": [
   {
    "name": "HGTV PH",
    "url": "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=4e9a6c317d524f808b163c5a2e7d9048:5079e2288b584f47d4bbf8d149b2a986"
   },
   {
    "name": "HGTV SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/HGTV/output/manifest.mpd|drmScheme=clearkey&drmLicense=c1ac1cd0128240e18b68f337fe871b59:372c1435914f835639e2595c0670b0ed"
   }
  ]
 },
 {
  "name": "ABC AUSTRALIA GROUP",
  "category": "TV Others",
  "logo": "https://www.abc.net.au/asia/abcaustralia/tvguide/fallback.png",
  "servers": [
   {
    "name": "ABC TV",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/1ead6af29a8c4434a70db196b8628580/index.mpd|drmScheme=clearkey&drmLicense=0c75465966be494a8b685a3bc1fea5b5:81c825e32de24449c770d1a120606939"
   },
   {
    "name": "ABC News",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/7e1cd32d1ec24845bf7bf3d9c60704e6/index.mpd|drmScheme=clearkey&drmLicense=83b7c942bf0c4a2d80a299426da2d764:5b1dd642b5a6317e00335eda59dfb07e"
   },
   {
    "name": "ABC Cartoon",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/399aa25b71e84ab19a7d3261703c4a29/index.mpd|drmScheme=clearkey&drmLicense=aec51cf82ef14226a097a4ff91b7b32e:652bcaec397fb789fa5138fd3461333c"
   },
   {
    "name": "ABC Entertains",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/4e08e6a57a334d0bb1cb2fc80532861c/index.mpd|drmScheme=clearkey&drmLicense=1ffe9e9a5e6648e884d741b536d34e72:86dead7608ebf2d8028416add9b8769b"
   },
   {
    "name": "ABC Family",
    "url": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/37140e68f8124d45a0dc673d3a34af11/index.mpd|drmScheme=clearkey&drmLicense=561611703c4b4749973a73e7bb1d0af2:f90bd049ac3734d46fe66f89f02f1f0f"
   },
   {
    "name": "ABC Kids",
    "url": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/8c6fa500258e44289312adb342b0f7ad/index.mpd|drmScheme=clearkey&drmLicense=b70a4c3a102b47ec832d11da8a024161:8bd84110abda56e41511c16feaa2de69"
   },
   {
    "name": "ABC Kids All Ausie",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/8da66660000f4c05921b166bb4cee65e/index.mpd|drmScheme=clearkey&drmLicense=5adc6dfdcbcf42638a64858190992fab:c036a7b9963ac34d89bbebe3ed071cc0"
   },
   {
    "name": "ABC Big Kids All Ausie",
    "url": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/94adcb14be98408cbda4b7b404e94fb4/index.mpd|drmScheme=clearkey&drmLicense=47c13253f2ed45318e5b6e5d799c5956:38ddb989dfb05091db949ce404de52e5"
   },
   {
    "name": "ABC Kids Play School",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/8ca49b4e0bec4bbb84f14c4f18e88697/index.mpd|drmScheme=clearkey&drmLicense=593adcf2ed594c2ba2aeee9539b43f5c:b47e01622b87a37374dae5fb3645e4a8"
   },
   {
    "name": "ABC Kids Play Music",
    "url": "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/72481e65a40b49b59af9f49e29e7b352/index.mpd|drmScheme=clearkey&drmLicense=ceeaf88efed649d898646d151439b6bd:e35e2727d4d8618247c1b2f223ed9cfa"
   },
   {
    "name": "ABC Big Kids",
    "url": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/f160f706ecde4707ac4003d17d5a17a8/index.mpd|drmScheme=clearkey&drmLicense=ab4a24725b1c47e7ae3c0f17ab020905:214f5979b5a30a0b3cda03085006a77f"
   }
  ]
 },
 {
  "name": "NAT GEO GROUPS",
  "category": "TV Others",
  "logo": "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22495386/nat_geo_board_3.jpg?quality=90&strip=all&crop=7.7916666666667,0,84.416666666667,100",
  "servers": [
   {
    "name": "NAT GEO",
    "url": "https://dash2.antik.sk/stream/hisi_ngc/playlist_cbcs.mpd|drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key"
   },
   {
    "name": "NAT GEO WILD",
    "url": "https://dash2.antik.sk/stream/hisi_ngw/playlist_cbcs.mpd|drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key"
   }
  ]
 },
 {
  "name": "Animal Planet",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXSrXRjpFDmM0vv8yWFMWPSfjewcZ50CiWl24x_6B2qaRDlGojcVbKlCg&s=10",
  "servers": [
   {
    "name": "Animal Planet",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd|drmScheme=clearkey&drmLicense=3c8e5a927d414b069f236a5c8e1d7049:a9b9198bf7b116b30492aea4dc471122"
   },
   {
    "name": "Animal Planet",
    "url": "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/ap.smil/manifest.mpd|drmScheme=clearkey&drmLicense=ec6f072c7125377a9bc0ae61598095f4:1d5388e0781415ebcec9914f5ad75875"
   },
   {
    "name": "Animal Planet",
    "url": "https://login.bheem.tv/bpk-tv/22052/output/index.mpd|drmScheme=clearkey&drmLicense=8aaf27b53099505a8307b7df2f61b46c:83692149a2e59a8aae8e39ed6a1f6325"
   }
  ]
 },
 {
  "name": "Love Nature",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ih0KC32c1zamHG-jyGpAsWDj-wFHDeb2M6hgAPL8zuk3ZSlAAu-s9p1Z&s=10",
  "servers": [
   {
    "name": "Love Nature",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/15500e8f0dc44058ba0431d39a8fed57/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=6c4190749d6f4b51bde2df71715e843b:9dfc9803c0fdbb1cd6df2188a6f29064"
   },
   {
    "name": "Love Nature",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/LoveNatureHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=e2a1e56e9f1e4f1d8fc4b129a4c6162c:a7e50888cdc875f51f23607c3c9a012e"
   }
  ]
 },
 {
  "name": "Biznet Groups",
  "category": "TV Others",
  "logo": "https://cdn.antaranews.com/cache/1200x800/2020/04/18/images.jpg",
  "servers": [
   {
    "name": "Biznet Adventure",
    "url": "http://livestream.biznetvideo.net/biznet_adventure/smil:adventure.smil/playlist.m3u8"
   },
   {
    "name": "Biznet Lifestyle",
    "url": "http://livestream.biznetvideo.net/biznet_lifestyle/smil:lifestyle.smil/index.m3u8"
   },
   {
    "name": "Biznet Kids",
    "url": "http://livestream.biznetvideo.net/biznet_kids/smil:kids.smil/index.m3u8"
   }
  ]
 },
 {
  "name": "Outdoor Channel",
  "category": "TV Others",
  "logo": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/57409e50258033.58cb840c2bbbb.jpg",
  "servers": [
   {
    "name": "Outdoor Channel",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/c169ca1dcbe249c5bf233aabc3db4a4f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=7efd32eb4765465c8a19aba6987770c8:733e8d3f4fb8f7ae021168d92f922645"
   },
   {
    "name": "Outdoor Channel",
    "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8"
   }
  ]
 },
 {
  "name": "Real Wild",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI_J7BUX2uK5r9vUoqg5xwm2k8pGIyQ86jspCbIOtuOnKfNiuGZFcLOiU&s=10",
  "servers": [
   {
    "name": "Real Wild",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00426-littledotstudio-realwild-tcl/playlist.m3u8"
   }
  ]
 },
 {
  "name": "Wild Earth",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprstG26smLtPwUnH4-Rb4TiOymxvQiERjMrhtMYjunTl3OQ5H1OHwhoc&s=10",
  "servers": [
   {
    "name": "Wild Earth",
    "url": "https://wildearth-plex.amagi.tv/master.m3u8"
   }
  ]
 },
 {
  "name": "TLC",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj70Qkt7yH8MHDgSYRIl2Y2yKwWE20A29A5YhWhQPOEUyqY_Fp_77zIt4&s=10",
  "servers": [
   {
    "name": "TLC",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/TLCHD/mediampd/TLCHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=abac9e0bf2b448f8871145829c68a7fd:eebd1a86367df6c2c4aad70b7a6165a9"
   }
  ]
 },
 {
  "name": "AFN",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzL7hBbCiBej9deNaXqKyMQjXR9mez-QZYmA&usqp=CAU",
  "servers": [
   {
    "name": "AFN",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd|drmScheme=clearkey&drmLicense=f4b7c8219e364a058d295c6f3e7a1042:d10c7f2a37c1079e6b83837423c0d6b2"
   }
  ]
 },
 {
  "name": "First Groups",
  "category": "TV Others",
  "logo": "https://storage.googleapis.com/swafiles/images/2025/03/161440/1742110829_18c3c044046ae2fb62a0.jpg",
  "servers": [
   {
    "name": "First Warrior",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/FirstWarriorsHD/mediampd/FirstWarriorsHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=77555ed22f924e4b98620319e1de3739:2876649ccd9840346084c565d25f8f6b"
   },
   {
    "name": "First Lifestyle",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/FirstLifestyleHD/mediampd/FirstLifestyleHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=c45d2c72ab7e41f7b368a3a09dacfd08:72d5dd7b3d92a23d81317a04ac25271a"
   },
   {
    "name": "First Highlight",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/firsthighlight/mediampd/firsthighlight.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=a885301cc764406fb897bd2b2738e97d:eb3d733397cab652cfe62788ee6939e1"
   }
  ]
 },
 {
  "name": "Vision Prime",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-gDmO0UkBYrOfOPMh_dpFHK9iuT5NOKgMA&usqp=CAU",
  "servers": [
   {
    "name": "Vision Prime",
    "url": "https://d43tg978oium5.cloudfront.net/out/v1/873c24d3946048f68e459250f1d2fd98/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=483c71dd36fd45dd965321e8c568ba42:719598f53c998c618adf76a8f4f17fd1"
   }
  ]
 },
 {
  "name": "Fashion TV Groups",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_HsEfOglUk5cgA1OxJfgU5ddqyoBFeKBpbWWgkheRaj23xB9GWA_K_iR&s=10",
  "servers": [
   {
    "name": "FASHION TV",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/FashionTV/mediampd/FashionTV.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=16ce4fb658cf41678c72cca871770da3:95509b2ad660b196310e93a0388a8a6b"
   },
   {
    "name": "FASHION TV",
    "url": "https://ftv1.b-cdn.net/bfdbb576-83f7-11f0-9f89-0200170e3e04_1000028043_HLS/manifest.m3u8"
   }
  ]
 },
 {
  "name": "MNC ENT",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XivcxaTJKZH6_S2nLdabND6BnSeV5KuCQAuAC5BrwSziuJ7aii38Bb0&s=10",
  "servers": [
   {
    "name": "MNC ENT",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/a90cb773466446b08595007bab12b920/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=62f0fb29203c45419e2ea683c5c365e6:10b227a6ea7d65628f025e41318b927c"
   }
  ]
 },
 {
  "name": "Celebrities TV",
  "category": "TV Others",
  "logo": "https://yt3.googleusercontent.com/zT1k9FPPUhW93o_9KUL21UwqP7rnjbSczLl97fztKvJcO52_3UTF2POzXcUpaVR_8oJdtrOVbw=s900-c-k-c0x00ffffff-no-rj",
  "servers": [
   {
    "name": "Celebrities TV",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/8cf72e61626f4361a45c57ce6f2fdad8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=10bba49df37c42e78365a9995ca93f79:1d504b9bf2efa10d4d00058222b5020a"
   }
  ]
 },
 {
  "name": "FOOD TRAVEL",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabn2ntZClp0XGK6PsCWZZKh6RXtnz_oGnyMv543DmShtJNb8pAks_KQU&s=10",
  "servers": [
   {
    "name": "FOOD TRAVEL",
    "url": "https://d2gr3zenqo3tg4.cloudfront.net/out/v1/77d7eac1b90247ac9aa745bd2eb47fa8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c263b43be6b94fb682b1d701e0aaf847:83491ecbe2968e91ed563ce2c41428dc"
   }
  ]
 },
 {
  "name": "TECH STORM",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRev3ceY4S2PoEgpeXVayXZQnjk8cBmvZHpxwvrGGznOby4R0Q2igUFJNN1&s=10",
  "servers": [
   {
    "name": "TECH STORM",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tech_storm/default/index.mpd|drmScheme=clearkey&drmLicense=5675d85ce6754ba6aa8f6acc4660f76f:140bfb365cf143c349f68699238a610c"
   }
  ]
 },
 {
  "name": "EAT & GO",
  "category": "TV Others",
  "logo": "https://servicebuss.transvision.co.id/cubmu/images/freecontent/banners/eatngo_1670395212.png",
  "servers": [
   {
    "name": "EAT & GO",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856fd0d66d0170342015d30907/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "DUNIA LAIN",
  "category": "TV Others",
  "logo": "https://www.transvision.co.id/img/channel/dunia_lain.png",
  "servers": [
   {
    "name": "DUNIA LAIN",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856ea34e35016ef8e9fdf951c1/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/"
   },
   {
    "name": "DUNIA LAIN",
    "url": "https://www.cubmu.com/watch/live-tv/265-dunia-lain"
   }
  ]
 },
 {
  "name": "BBC EARTH",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Z67O3EvOA46yV-fmrLdogDmbqfDZOFCWig&usqp=CAU",
  "servers": [
   {
    "name": "BBC EARTH",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/4e5b2a283adf462c8b6b55b2ef059fac/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5709bc59805c4f23b000306efea48438:1772cf06c2f5dd3980a3245cd31fd356"
   }
  ]
 },
 {
  "name": "BBC WORLD",
  "category": "TV Others",
  "logo": "https://c.files.bbci.co.uk/16B26/production/_96566929_bbc_wn_rgb.png",
  "servers": [
   {
    "name": "BBC WORLD",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/7d38a4525dfa42b08a94c22c173061da/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0e7c10b448444c53904de46d1a30f427:d638c2cb75ff93d38b5ec8b6f5098dea"
   }
  ]
 },
 {
  "name": "INSERT",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3LdYnWU7wwgXXIei0HgseXCEvkhpQC7NNd_IwtJ4PYioa6kNEf5JxNM&s=10",
  "servers": [
   {
    "name": "INSERT",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/3/4028c6856c3db2cc016cdc51294b4f8e/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "Dens Groups",
  "category": "TV Others",
  "logo": "https://media.licdn.com/dms/image/v2/C561BAQFyROPrzUY4pQ/company-background_10000/company-background_10000/0/1617852520781/pt_digdaya_duta_digital_cover?e=2147483647&v=beta&t=pp2ESKbrgQ8O7rFJFfLNskNfqN_yWny8TrgyBHcUajg",
  "servers": [
   {
    "name": "Dens Food",
    "url": "http://op-group1-swiftservehd-1.dens.tv/h/h221/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "Dens Knowledge",
    "url": "http://op-group1-swiftservehd-1.dens.tv/h/h236/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "Dens Life & Style",
    "url": "http://op-group1-swiftservehd-1.dens.tv/h/h222/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   },
   {
    "name": "Dens Showbiz",
    "url": "http://op-group1-swiftservehd-1.dens.tv/h/h244/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   }
  ]
 },
 {
  "name": "Food Network",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIkkPwQ3RLeSiebs5kXI2_pFH2XsUU8MgHIwHOvYECWWWXGNW1Pfh43I&s=10",
  "servers": [
   {
    "name": "Food Network",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/FoodNetworkHD/mediampd/FoodNetworkHD.mpd|user-agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=6dc31ac1031242a8b0c37286acb66a37:648286167b494bf9ee122eced0e37de1"
   }
  ]
 },
 {
  "name": "COOKING TV",
  "category": "TV Others",
  "logo": "https://www.transvision.co.id/img/channel/new/COOKING%20TV.png",
  "servers": [
   {
    "name": "COOKING TV",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c68582449a2e0182597009c021ef/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "GAMING TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUK3XKYhf-Jv-o4SkH4vNr-rcl4vyN1I76DA&usqp=CAU",
  "servers": [
   {
    "name": "GAMING TV",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c6858119921801816b5359d15e63/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/"
   }
  ]
 },
 {
  "name": "HANACARAKA TV",
  "category": "TV Others",
  "logo": "https://api.visionplustv.id/static/pqkogt.webp",
  "servers": [
   {
    "name": "HANACARAKA TV",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/17c724036c5f4615bd0b8093126b5c44/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0de1f882d278465abdba73a8b4cb2bda:7061f5e1115d6ef504726c3faa8bf146"
   }
  ]
 },
 {
  "name": "BALI TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCQCl7j8IFovVwkxjRr1fvQUxQFJ441ljfQ&s",
  "servers": [
   {
    "name": "BALI TV",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/44a2d1ab71a740babb233cf14832c59d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=9cf20a8618854bb8bf3b7891c6cb5606:7284d5c76c7f913632c715f3d5c5aa8a"
   }
  ]
 },
 {
  "name": "JOWO TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-HCrvjy42nU0vbtXmR4WiSB9SDFgsl9X15-neYCyj536DRFcyWx24rRl&s=10",
  "servers": [
   {
    "name": "JOWO TV",
    "url": "http://khano.nng.cloudns.us/live/m3u8/id/1de333734b1b7e0.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
   }
  ]
 },
 {
  "name": "BANDUNG TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLj4wiJHahJfQ9U6ohfHOTkpV4Pmv5V35oA&usqp=CAU",
  "servers": [
   {
    "name": "BANDUNG TV",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/f16b53f0d5ed459da208c459049c9bb0/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=86e50e1506af46c780233c0091b67159:549788738d10df77094a0d4efaf0d567"
   }
  ]
 },
 {
  "name": "DAAI TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBr4-PWmYTt8btpePeF_nKO4SFAS5e5tr5P3fi3kQgZgJMkDv_Oz1jjVI&s=10",
  "servers": [
   {
    "name": "DAAI TV",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/744044c3985142399fbd466f9f3fd8fa/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b2fdc5d5def7460a8dfb78492b66dd4f:a99645e65ce190e9556dda93be172cd4"
   },
   {
    "name": "DAAI TV Dens",
    "url": "https://op-flashcon-digdayahd-1.dens.tv/h/h16/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36"
   }
  ]
 },
 {
  "name": "Muslim TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc0swc9tl2mV5wr2GmkXStTt8LK7q-GBBzA&usqp=CAU",
  "servers": [
   {
    "name": "Muslim TV",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/a8f14e34c687494fb1454b88742db085/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c2e6de6943ef47d08c2634a2df4bcece:badf619476b3bf0889ab545e8d3926f6"
   }
  ]
 },
 {
  "name": "TV 9",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NLRomplw0A64zvwDZlgVorTk4cNwgrm6mA&usqp=CAU",
  "servers": [
   {
    "name": "TV 9",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9688c51b534d4165bf4b0b328e53b980/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=730bf9b6641f4ca597fd0d2903ffc574:293446fd53697862b165984b860fd7b0"
   }
  ]
 },
 {
  "name": "TV Muhammadiyah",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGld8fbsoOd9U6hudiENwlIxSPyvcaPEYgGYtmUyyCqXz56xXiHdfPcrS&s=10",
  "servers": [
   {
    "name": "TV Muhammadiyah",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/980cfe26ff00479c97eb8057a1129c7f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=94f0b3d645c64f0dbe2e0990ec290cdf:0dc311915f9decffaf7dfee30c4d8482"
   }
  ]
 },
 {
  "name": "Al Quran Al Kareem",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7k8S6V3VW8rdRnQDpCZIQfFO89eSSX_qQxvfPo1qqnu3A3rkYzoIwao&s=10",
  "servers": [
   {
    "name": "Al Quran Al Kareem",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/099aba2d60b44679915cd56f303b975d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=d856bf85229c4a42a7b0de45e4c91a31:5633e069ef585f73ccfe2dd6a85a6f48"
   }
  ]
 },
 {
  "name": "Tawaf TV",
  "category": "TV Others",
  "logo": "https://thumbor.prod.vidiocdn.com/IYaBCYcHoxvH2GswjsvIKXylgc8=/640x360/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/12607/tawaf-tv-8f44ca.jpg",
  "servers": [
   {
    "name": "Tawaf TV",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/7819c09ece974a7582eed4770bf60e65/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cf8d36bbfa904cb8a1c714dd74217cf2:97c0f4b08a496f8ab05e46f29a71c7c8"
   }
  ]
 },
 {
  "name": "DMI TV",
  "category": "TV Others",
  "logo": "https://thumbor.prod.vidiocdn.com/8xK99N2_n_4bGkYJTuuWIVtHf_Q=/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/31334652/ProfilePictureDMITV-dde35fc5cf7acbe2.png",
  "servers": [
   {
    "name": "DMI TV",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/319544fbde164be4b023d62fcd116d14/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cf8d36bbfa904cb8a1c714dd74217cf2:97c0f4b08a496f8ab05e46f29a71c7c8"
   }
  ]
 },
 {
  "name": "SUNNAH TV",
  "category": "TV Others",
  "logo": "https://www.kasi-hd.com/uploads/tv_image/sunna-tv.png",
  "servers": [
   {
    "name": "SUNNAH TV",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/SunnahTV/mediampd/SunnahTV.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=fcb8abc387174813b6a73d045a6850ec:f2064430890f44181aa58011ff73fa9c"
   }
  ]
 },
 {
  "name": "KAIROS",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSapmWq_DoE9RvyYV5PaFHTwqib0w0MWGej555BE8RwMe-x-r2tZJPnqw&s=10",
  "servers": [
   {
    "name": "KAIROS",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/Kairos/mediampd/Kairos.mpd|user-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=4e59e1e60b92407c972178c7959ec340:cdfcef62ac2b749f3e0d95c135647bac"
   }
  ]
 },
 {
  "name": "Life TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhl_f3AMKqvcXunXop5uQ8wPTY-325wWtDw&usqp=CAU",
  "servers": [
   {
    "name": "Life TV",
    "url": "https://d2xx73ro32cip.cloudfront.net/out/v1/a61250017f23459692bf28a6841cf087/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=08e5cf90e8c04a7fa90f5c126768b239:b9406a99b9ea4b07149ecc582faf2613"
   }
  ]
 },
 {
  "name": "Reformed 21",
  "category": "TV Others",
  "logo": "https://thumbor.prod.vidiocdn.com/XQ7S6mCC_UcN7TbF28xwGbQ1PD8=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/6853/reformed-21-tv-b1db6d.jpg",
  "servers": [
   {
    "name": "Reformed 21",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/623c771560e443f2920ea5be99016b7e/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=729e39db83984d58a23e16f2c05f915f:0d3871bf01b6d871c9882265fb78e8fa"
   }
  ]
 },
 {
  "name": "EWTN",
  "category": "TV Others",
  "logo": "https://www.ewtn.com/img/ewtn-logo.jpg",
  "servers": [
   {
    "name": "EWTN",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/96e20532df53449ab254f765073ec866/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=070756a16fd44081b6c2d64e40346b9e:d5fa9eaa7fd94f93d1b613d1ff0a5f91"
   }
  ]
 },
 {
  "name": "EWTN",
  "category": "TV Others",
  "logo": "https://www.ewtn.com/img/ewtn-logo.jpg",
  "servers": [
   {
    "name": "EWTN",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/96e20532df53449ab254f765073ec866/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=070756a16fd44081b6c2d64e40346b9e:d5fa9eaa7fd94f93d1b613d1ff0a5f91"
   }
  ]
 },
 {
  "name": "OKEY TV",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5eCNXAAB3BaoImcr_9vcPgdLQZY9ebFqFnnUtsb5lUMKd2l070u1F_b_&s=10",
  "servers": [
   {
    "name": "OKEY TV",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd"
   }
  ]
 },
 {
  "name": "TV 1 My",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVXT7znaqz-Wc7So0Qmci5aHGMtGB4mloKB0BDSUp6opicVJZr4hZQOQ&s=10",
  "servers": [
   {
    "name": "TV 1 My",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:tv1/manifest.mpd"
   }
  ]
 },
 {
  "name": "TV 2 My",
  "category": "TV Others",
  "logo": "https://i.ytimg.com/vi/Bg0j-qGkXsY/maxresdefault.jpg",
  "servers": [
   {
    "name": "TV 2 My",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd"
   }
  ]
 },
 {
  "name": "TV 6 My",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyt8jMdDHaFbIfa4Cz5HfQtBgPROwRV3FSAgpLalNq76APoOuCOmnVVZM&s=10",
  "servers": [
   {
    "name": "TV 6 My",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:tv6/manifest.mpd"
   }
  ]
 },
 {
  "name": "TV Berita RTM My",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoqIFIHmMgo-JcDeQmKq_LsRa-0JP5oFO2kFuxTmSNRJFus2QOTIPHzUB&s=10",
  "servers": [
   {
    "name": "TV Berita RTM My",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:berita/manifest.mpd"
   }
  ]
 },
 {
  "name": "Astro Awani",
  "category": "TV Others",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtacbQIf-CU_PHgCgXdhwO5Bf4yCh4Tah1Gg&usqp=CAU",
  "servers": [
   {
    "name": "Astro Awani",
    "url": "https://d2idp3hzkhjpih.cloudfront.net/out/v1/4b85d9c2bf97413eb0c9fd875599b837/index.m3u8"
   }
  ]
 },
 {
  "name": "Mono 29 TH",
  "category": "TV Others",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/8/83/MONO292025.png",
  "servers": [
   {
    "name": "Mono 29 TH",
    "url": "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/29/29.mpd|drmScheme=clearkey&drmLicense=96a14b36335645b391bbbb48c424fec7:e6971b27837a4822832d8215156bb516"
   }
  ]
 },
 {
  "name": "Thairath TH",
  "category": "TV Others",
  "logo": "https://www.thairath.co.th/assets/tv/img/share_tv.jpg",
  "servers": [
   {
    "name": "Thairath TH",
    "url": "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/32/32.mpd|drmScheme=clearkey&drmLicense=4b2bff3e598043cfaf949305e3d153fa:545df84ff4c54af6b5385516e0f65956"
   }
  ]
 },
 {
  "name": "Animax",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPk7mD7E4stFosi9QIJAWtG7dxuwsGbmgKEr4ixcfZLkFDxLd2gTUuE6t&s=10",
  "servers": [
   {
    "name": "Animax",
    "url": "http://d84q7nw4qf3j3.cloudfront.net/out/v1/ab3ef0f0e4144c3c8b7e60f1873a3bcc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=6f309276a94e45be89a8860159456e84:3fe2eec12885264556ca4e29aa6c0c40"
   }
  ]
 },
 {
  "name": "Aniplus",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGR_tLi84VnhTvzLHn0Uv3lcS72K0sRnqeSSRxn7kPzDOS9dWAnPCcXWp&s=10",
  "servers": [
   {
    "name": "Aniplus",
    "url": "http://slive.mana2.my/AniPlus/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407"
   }
  ]
 },
 {
  "name": "Max Kids",
  "category": "TV Kids",
  "logo": "https://i.ytimg.com/vi/CCyiYb6A308/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBsgYyhlMA8=&rs=AOn4CLAXHmg6hIV1c6Jve5L-t0dJBCqL3w",
  "servers": [
   {
    "name": "Max Kids",
    "url": "https://cdnbal1.indihometv.com/atm/DASH/indikids/manifest.mpd"
   }
  ]
 },
 {
  "name": "Mentari TV",
  "category": "TV Kids",
  "logo": "https://thumbor.prod.vidiocdn.com/Iqs6mheIjesM4cUEh_dUVIdV0jU=/filters:quality(70)/vidio-web-prod-livestreaming/uploads/livestreaming/image/8237/mentari-tv-b64c27.jpg",
  "servers": [
   {
    "name": "Mentari TV",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/703a71abac3844748b1e68166242d4f3/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=340ff241ff754b038f07096e17104cdc:839bdf4f1523661ba61df2dc219878a3"
   },
   {
    "name": "Mentari TV",
    "url": "https://tvratu.my.id/vid/index.mpd?id=8237"
   }
  ]
 },
 {
  "name": "Cartoonito",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gWltJ9gA5dpgNWVMa11SQvmApehrp2gA-w&usqp=CAU",
  "servers": [
   {
    "name": "Cartoonito",
    "url": "https://atemecdnbalancer-voe.sysln.id/live/eds/CartoonitoHD/mediampd/CartoonitoHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=955574ee2b674f0fbbad818fb384c233:51d2893619bdd062fb4c0cdaafefbf27"
   }
  ]
 },
 {
  "name": "Hip Hip Horee",
  "category": "TV Kids",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_Hip_Hip_Horee.png",
  "servers": [
   {
    "name": "Hip Hip Horee",
    "url": "https://vidx.semar.my.id/biasa2.mpd?id=7052&type=dash"
   },
   {
    "name": "Horee TV",
    "url": "http://opplextv.cyou:8080/nasir6160/nasir/350964"
   }
  ]
 },
 {
  "name": "Dunia Anak",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WZOt0TKcbUzSwBK_-c_a9WHwFNvl-UOHSQ&s",
  "servers": [
   {
    "name": "Dunia Anak",
    "url": "https://www.cubmu.com/watch/live-tv/186-dunia-anak"
   },
   {
    "name": "Dunia Anak",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856c3db2cc016cdc32eb0c439c/manifest.mpd|referrer=https://www.indihometv.com/&drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/"
   }
  ]
 },
 {
  "name": "Nick JR",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNSdLbZyDUUHUgGZYeCmlrK2YufUgXmNV9g&usqp=CAU",
  "servers": [
   {
    "name": "Nick JR",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/27163af9499b4bcca2da96677b158efe/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c1d5f77cd96049f78b6b253540b31722:ba8d0801fe81187d35633e1d3b3855d5"
   }
  ]
 },
 {
  "name": "Nickelodeon",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOnogH9yt8uZ11EKFLVr1x4_q2v2E_CX_R8E4-blt4WELNq4OE9HTy4&s=10",
  "servers": [
   {
    "name": "Nickelodeon",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/3fe6d9eb97ed455c942eb8d3d1c2c2e8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=676b60c2b84b49b6b316207a590203e4:da9878a96062ea105895f310e052fa7b"
   }
  ]
 },
 {
  "name": "MOONBUG",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTVZqreuyXB31-sVh1G2I3pBPuTKcSBcwCQ&usqp=CAU",
  "servers": [
   {
    "name": "MOONBUG",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/8554b3cb938e44038093df2d65080932/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=780f283e8dd84dc195d93899ea9fcabe:59103ac45e9c5e411651e3fa26a2e6d9"
   }
  ]
 },
 {
  "name": "Zoo Moo",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjIp2zbp72DAF99vCgbbyqv0bO6ZYZHj9qw&usqp=CAU",
  "servers": [
   {
    "name": "Zoo Moo",
    "url": "https://d84q7nw4qf3j3.cloudfront.net/out/v1/198f7febb48c4c909d62977d88c195b0/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=8b62ae389f0944d4a55daaad52de1f9d:ba145a1426491316010da87bfd69de05"
   }
  ]
 },
 {
  "name": "Cartoon Network",
  "category": "TV Kids",
  "logo": "https://logos-world.net/wp-content/uploads/2021/08/Cartoon-Network-Logo.png",
  "servers": [
   {
    "name": "Cartoon Network",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856b8d2390016b9c3ee6c21d7c/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/"
   }
  ]
 },
 {
  "name": "CARTOON TV",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavYUxtPdFdFjETJEaGySEo7eFr5_maY4BSqs_CDCwitBSWo0azvkNTcU&s=10",
  "servers": [
   {
    "name": "CARTOON TV",
    "url": "https://www.cubmu.com/watch/live-tv/249-cartoon-tv"
   },
   {
    "name": "CARTOON TV",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856c3db2cc016d144f21811dc9/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/"
   }
  ]
 },
 {
  "name": "CARTOON TV PREM",
  "category": "TV Kids",
  "logo": "https://www.transvision.co.id/img/channel/new/CARTOON%20TV%20TAG%20PREMIUM.png",
  "servers": [
   {
    "name": "CARTOON TV PREM",
    "url": "https://www.cubmu.com/watch/live-tv/248-cartoon-tv-premium"
   },
   {
    "name": "CARTOON TV PREM",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c6856b8d2390016b9c47b6f01de1/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/"
   }
  ]
 },
 {
  "name": "CARTOON TV CLASIC",
  "category": "TV Kids",
  "logo": "https://cdnjktbpid01.transvision.co.id/image/web/channel/4028c685840ff04901846166f4d93e5e/af61929b5f3b419da7e3d407ce601dbb.jpg",
  "servers": [
   {
    "name": "CARTOON TV CLASIC",
    "url": "https://www.cubmu.com/watch/live-tv/250-cartoon-tv-classic"
   },
   {
    "name": "CARTOON TV CLASIC",
    "url": "https://cdnjkt913.transvision.co.id:1000/live/master/100/4028c685840ff0490184560100c34363/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/"
   }
  ]
 },
 {
  "name": "Cbeebies",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmtToYz9Ri1Lky7PxyBZls4cUWuVYktmhqNRfUXPYjSm-hwCFeghrUxM&s=10",
  "servers": [
   {
    "name": "Cbeebies",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2a5668fb3b9f4e34ab7c02cdc6ef56db/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=736777e5823249849d71a7d41ddc35aa:f831235372e07e24fb70f7336291c549"
   }
  ]
 },
 {
  "name": "Kids TV",
  "category": "TV Kids",
  "logo": "https://upload.wikimedia.org/wikipedia/id/7/7f/Kids_TV_%282020%29.png",
  "servers": [
   {
    "name": "Kids TV",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9041826689ae4f9c9619576d411fa989/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=ec31647c5c3b490bbb5c840ca3e96c9e:a28271a4ba4d085efa1f7738e0f82ea1"
   }
  ]
 },
 {
  "name": "Disney Channel",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosPZdGTY14VfOGjqz4hzZt_3a74qayIz7_KXlc1YZsj4iVX8l77JEQ-U&s=10",
  "servers": [
   {
    "name": "Disney Channel",
    "url": "https://a77aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=be9caaa813c5305e761c66ac63645901:3d40f2990ec5362ca5be3a3c9bb8f8b4"
   }
  ]
 },
 {
  "name": "TREE HOUSE",
  "category": "TV Kids",
  "logo": "https://assets.stacktv.ca/wp-content/uploads/2023/09/treehouse.png",
  "servers": [
   {
    "name": "TREE HOUSE",
    "url": "https://a79aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/ghf7y1plnj/out/v1/0c87bd17ab474015b77c0f3028190f78/cenc.mpd|drmScheme=clearkey&drmLicense=de9b995d2aba32bae1c5dbe38a46f2d9:a2d94fdff16e9c332164a73f8b170bd3"
   }
  ]
 },
 {
  "name": "YTV",
  "category": "TV Kids",
  "logo": "https://assets.stacktv.ca/wp-content/uploads/2023/09/ytv.png",
  "servers": [
   {
    "name": "YTV",
    "url": "https://a196aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/o7aqpbb6vv/out/v1/f8f6ef738ef24c4f8176d561ffb8a157/cenc.mpd|drmScheme=clearkey&drmLicense=6f0aeae5779f1dcaef23f0bfbc828220:7bcef3cf93de00e3daeb190d15b1ec05"
   }
  ]
 },
 {
  "name": "ADULT SWIM",
  "category": "TV Kids",
  "logo": "https://assets.stacktv.ca/wp-content/uploads/2023/09/AdultSwim-New.png",
  "servers": [
   {
    "name": "ADULT SWIM",
    "url": "https://a116aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/rwcf8uax9l/out/v1/13ccaaacbe1143e69b7732fced73f0ab/cenc.mpd|drmScheme=clearkey&drmLicense=cc26110bb0d29d0e4452d42602846080:4a2e5782e26a3e2d7dd0431205c14518"
   }
  ]
 },
 {
  "name": "BABY SHARK",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCYlY0VSx8Pwak7PFlGy6uzAz43wjzWkcew&usqp=CAU",
  "servers": [
   {
    "name": "BABY SHARK",
    "url": "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8"
   }
  ]
 },
 {
  "name": "ABC KID",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH6Kop5MWJ8q9eVLud8PTVMkE-IXMCF7G_Q&usqp=CAU",
  "servers": [
   {
    "name": "ABC KID",
    "url": "https://c.mjh.nz/abc-kids.m3u8"
   }
  ]
 },
 {
  "name": "PBS KID",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpX-edI5wUltMpNsvF7OwpFqTd-B4LLTA2YA&usqp=CAU",
  "servers": [
   {
    "name": "PBS KID",
    "url": "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8"
   }
  ]
 },
 {
  "name": "EBS KID",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwp4jSmJaXhIcZGgcYkNFCqnjACJxc6xwZ4fH5tYy7XAb5SZBGrOMN5c&s=10",
  "servers": [
   {
    "name": "EBS KID",
    "url": "https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8"
   }
  ]
 },
 {
  "name": "EBS 1",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVnG7LTVYLgVjWySn7tPWpaZgsuFfbHzxXw&usqp=CAU",
  "servers": [
   {
    "name": "EBS 1",
    "url": "https://ebsonairios.ebs.co.kr/groundwavetablet500k/tablet500k/playlist.m3u8"
   }
  ]
 },
 {
  "name": "EBS 2",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFror9nhTO8zBmiTEzPf2LKq9mF_iPxrsGg&usqp=CAU",
  "servers": [
   {
    "name": "EBS 2",
    "url": "https://ebsonairios.ebs.co.kr/ebs2tablet500k/tablet500k/playlist.m3u8"
   }
  ]
 },
 {
  "name": "KIDS Flix",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqTq07BpR8P-Ar3qaGlVFB9l9VL5OBYQGOl9BHmA5umZ5_cbiLhplMxA&s=10",
  "servers": [
   {
    "name": "KIDS Flix",
    "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50"
   }
  ]
 },
 {
  "name": "Anggry bird",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkv2PAL7P_Khy-LRPODFfgFgtV9WbnDbBBxF6473QXxvEkvkviKffNuQ&s=10",
  "servers": [
   {
    "name": "Anggry bird",
    "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=547"
   }
  ]
 },
 {
  "name": "NARUTO PLUTO TV",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGknQ_T4kVmRvDxLYO6V17IiNlNRYYT38X6g&usqp=CAU",
  "servers": [
   {
    "name": "NARUTO PLUTO TV",
    "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ee92e72fb286e0007285fec/master.m3u8?HasBahCa.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=bff27170-6307-11eb-b3fa-019cb96f121b&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=d1372261-d71b-427e-b9b7-e0afe4a6974b&userId=&serverSideAds=true"
   }
  ]
 },
 {
  "name": "One Piece Pluto TV",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIPzzu5pgxL01gZAAGRlatHf3YCqSlC0gQ3SBA0HFjrfhT2dUoZ_84V7K&s=10",
  "servers": [
   {
    "name": "One Piece Pluto TV",
    "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ff4b9ccf938f8000779eb99/master.m3u8?HasBahCa.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=79573c14-77dd-11eb-a61c-2f38487b60c0&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=c4c4d3a3-dc88-49b4-9fda-30049d73b3f2&userId=&serverSideAds=true"
   }
  ]
 },
 {
  "name": "Anime All day",
  "category": "TV Kids",
  "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lkGc3mrevdFMTMNTwBDwd-KDuJhae4yn3M0yLSdy--Ushjo0AfQY2OE&s=10",
  "servers": [
   {
    "name": "Anime All day",
    "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?deviceId=0&deviceVersion=0&appVersion=0&deviceType=0&deviceMake=0&sid=dd4b&deviceDNT=0&deviceModel=0"
   }
  ]
 }
],
  events: [
 {
  "match": "Indonesia U17 vs Malaysia U17",
  "league": "FIFA Matchday International Friendly Match",
  "startTime": "2026-07-04T20:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://streamvididi.bonetvkoe.web.id/index.mpd?q=21746&ext=dash&x=1783436482&k=6b8dfd54bbf33bb90a6d6322eaccd8417c38ae3cc112d38d2470c84f2ed84aa1&sc=5184501|drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.drm?id=21746&type=drm"
   },
   {
    "name": "Live Only",
    "url": "https://stviptv.tvnid.workers.dev/21746.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/21746.drm"
   },
   {
    "name": "Live Only",
    "url": "https://tvratu.my.id/vid/index.mpd?id=21746&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.drm?id=21746&type=drm"
   }
  ]
 },
 {
  "match": "Heidenheim vs Bayern München",
  "league": "Club Friendly",
  "startTime": "2026-08-18T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4610650-40415.m3u8"
   }
  ]
 },
 {
  "match": "Barcelona vs Al Ahly",
  "league": "Club Friendly",
  "startTime": "2026-08-20T01:00:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   },
   {
    "name": "BARCA TV",
    "url": "https://amg17560-fcb-amg17560c1-rakuten-uk-4891.playouts.now.amagi.tv/playlist/amg17560-fcbarcelona-topbarcaenglish-rakutenuk/playlist.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=evento1"
   }
  ]
 },
 {
  "match": "Perancis vs Spanyol",
  "league": "FIFA WORLD CUP 2026",
  "startTime": "2026-07-15T02:00:00+07:00",
  "servers": [
   {
    "name": "TVRI SPORT ID",
    "url": "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/f3c7b70e7b7870ee2cf820e948e56fcd/6A586E2B/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad"
   },
   {
    "name": "World Cup TV PH",
    "url": "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/fifa_ppv1/default/index.mpd|drmScheme=clearkey&drmLicense=603e4118f91f453282dc44850376aabd:be92f663ca1a10134a5b371ade386ccc"
   },
   {
    "name": "Teleamazonas Ecu",
    "url": "https://teleamazonasb.cdn.mdstrm.com/live-stream-mp/dfzu2jckcs3he/a5e7a2777ea24b8ca49b326b536f87b2/6a0cd90eb3852427fcded197/manifest.mpd|drmScheme=clearkey&drmLicense=aa78205160ef4b5c972d5e815a8fe6e4:338b545591e45469e71dae3a8fb8dbb0"
   },
   {
    "name": "TSN Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d"
   },
   {
    "name": "MAKAN 33 IL",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livehls/oil/freetv/live/makkan/live.livx/playlist.m3u8"
   },
   {
    "name": "FOX Network 4k",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7"
   },
   {
    "name": "IRIB 4K",
    "url": "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/"
   },
   {
    "name": "D SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d"
   },
   {
    "name": "Qazaqstan TV KZ",
    "url": "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8"
   },
   {
    "name": "TELEMUNDO",
    "url": "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1"
   },
   {
    "name": "WC TV",
    "url": "https://test.antmedia.io/live/streams/fajer_adaptive.m3u8"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   }
  ]
 },
 {
  "match": "Inggris vs Argentina",
  "league": "FIFA WORLD CUP 2026",
  "startTime": "2026-07-16T02:00:00+07:00",
  "servers": [
   {
    "name": "Teleamazonas Ecu",
    "url": "https://teleamazonasb.cdn.mdstrm.com/live-stream-mp/dfzu2jckcs3he/a5e7a2777ea24b8ca49b326b536f87b2/6a0cd90eb3852427fcded197/manifest.mpd|drmScheme=clearkey&drmLicense=aa78205160ef4b5c972d5e815a8fe6e4:338b545591e45469e71dae3a8fb8dbb0"
   },
   {
    "name": "TVRI SPORT ID",
    "url": "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/8b50c10ecf4fec84c30ec54f4b337053/6A5C7ED8/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad"
   },
   {
    "name": "SBS AU",
    "url": "https://kltratai.hbx4.workers.dev/https://i.mjh.nz/.r/sbs-sbst.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )"
   },
   {
    "name": "TSN Sport 1",
    "url": "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d"
   },
   {
    "name": "MAKAN 33 IL",
    "url": "https://d1zqtf09wb8nt5.cloudfront.net/livehls/oil/freetv/live/makkan/live.livx/playlist.m3u8"
   },
   {
    "name": "FOX Network 4k",
    "url": "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7"
   },
   {
    "name": "IRIB 4K",
    "url": "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/"
   },
   {
    "name": "D SPORT 1",
    "url": "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d"
   },
   {
    "name": "Qazaqstan TV KZ",
    "url": "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8"
   },
   {
    "name": "TELEMUNDO",
    "url": "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1"
   },
   {
    "name": "WC TV",
    "url": "https://test.antmedia.io/live/streams/fajer_adaptive.m3u8"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   },
   {
    "name": "CCTV 5",
    "url": "http://107.150.60.122/live/cctv5hd.m3u8"
   }
  ]
 },
 {
  "match": "Perancis vs Inggris",
  "league": "FIFA WORLD CUP 2026",
  "startTime": "2026-07-19T04:00:00+07:00",
  "servers": [
   {
    "name": "SBS AU",
    "url": "https://au-cdn-master.astv-best.workers.dev/tokenized/sbs.m3u8|Referer=https://player.asnger.my.id/"
   },
   {
    "name": "TVRI SPORT ID",
    "url": "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/8b50c10ecf4fec84c30ec54f4b337053/6A5C7ED8/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad"
   },
   {
    "name": "TSN Sport 1",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d"
   },
   {
    "name": "IRIB 4K",
    "url": "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/"
   },
   {
    "name": "FOX Network 4k",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7"
   },
   {
    "name": "D SPORT 1",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d"
   },
   {
    "name": "Qazaqstan TV KZ",
    "url": "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8"
   },
   {
    "name": "TELEMUNDO",
    "url": "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   },
   {
    "name": "TVRI",
    "url": "https://pildun.cob.web.id/hls3-lo/index.m3u8"
   },
   {
    "name": "CCTV 5",
    "url": "http://107.150.60.122/live/cctv5hd.m3u8"
   }
  ]
 },
 {
  "match": "Spanyol vs Argentina",
  "league": "FIFA WORLD CUP 2026",
  "startTime": "2026-07-20T02:00:00+07:00",
  "servers": [
   {
    "name": "TSN Sport 1",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d"
   },
   {
    "name": "TVRI SPORT ID",
    "url": "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/2013f54319e9a95f46ea37d910faab71/6A5D968E/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad"
   },
   {
    "name": "TSN 4",
    "url": "https://cors-alx.astv-best.workers.dev/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|Referer=https://player.asnger.my.id/&drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7"
   },
   {
    "name": "Mundial",
    "url": "https://s2.bufaloweb.com/bufalo9/index.m3u8"
   },
   {
    "name": "FOX Network 4k",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7"
   },
   {
    "name": "TELEMUNDO",
    "url": "https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8"
   },
   {
    "name": "D SPORT 1",
    "url": "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d"
   },
   {
    "name": "Qazaqstan TV KZ",
    "url": "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8"
   },
   {
    "name": "TELEMUNDO",
    "url": "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   },
   {
    "name": "TVRI",
    "url": "https://pildun.cob.web.id/hls3-lo/index.m3u8"
   },
   {
    "name": "CCTV 5",
    "url": "http://107.150.60.122/live/cctv5hd.m3u8"
   }
  ]
 },
 {
  "match": "Pantai Gading U-23 vs DR Kongo U-20",
  "league": "Tournoi Maurice Revello",
  "startTime": "2026-06-13T18:30:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   },
   {
    "name": "Champions TV 1",
    "url": "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=17938&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760"
   },
   {
    "name": "Champions TV 1",
    "url": "https://freemiumkltratv.elutuna.workers.dev/index.mpd?q=6685&ext=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://freemiumkltratv.elutuna.workers.dev/license?q=6685"
   }
  ]
 },
 {
  "match": "Portugal U-20 vs Tunisia U-20",
  "league": "Tournoi Maurice Revello",
  "startTime": "2026-06-14T00:00:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   },
   {
    "name": "Champions TV 1",
    "url": "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=17938&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760"
   },
   {
    "name": "Champions TV 1",
    "url": "https://freemiumkltratv.elutuna.workers.dev/index.mpd?q=6685&ext=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://freemiumkltratv.elutuna.workers.dev/license?q=6685"
   }
  ]
 },
 {
  "match": "Thailand vs Singapura",
  "league": "ASEAN Hyundai Cup 2026",
  "startTime": "2026-08-18T20:00:00+07:00",
  "servers": [
   {
    "name": "SPORTSTAR 2",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=113.play"
   },
   {
    "name": "GTV R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv"
   },
   {
    "name": "INEWS R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews"
   },
   {
    "name": "VTV 6 VN",
    "url": "https://live.fptplay53.net/live/media/vtv6/live247-hls-avc/vtv6.m3u8"
   }
  ]
 },
 {
  "match": "Vietnam vs Malaysia",
  "league": "ASEAN Hyundai Cup 2026",
  "startTime": "2026-08-19T20:00:00+07:00",
  "servers": [
   {
    "name": "SPORTSTAR 2",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=113.play"
   },
   {
    "name": "GTV R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv"
   },
   {
    "name": "INEWS R+",
    "url": "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews"
   },
   {
    "name": "VTV 6 VN",
    "url": "https://live.fptplay53.net/live/media/vtv6/live247-hls-avc/vtv6.m3u8"
   }
  ]
 },
 {
  "match": "Thailand vs Vietnam",
  "league": "ASEAN Hyundai Cup 2026",
  "startTime": "2026-08-22T20:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Vietnam vs Thailand",
  "league": "ASEAN Hyundai Cup 2026",
  "startTime": "2026-08-26T20:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Vietnam vs Australia",
  "league": "ASEAN Futsal Championship 2026",
  "startTime": "2026-04-12T17:00:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "SOCCER CHANNEL",
    "url": "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011"
   }
  ]
 },
 {
  "match": "Indonesia vs Thailand",
  "league": "ASEAN Futsal Championship 2026",
  "startTime": "2026-04-12T20:00:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "SOCCER CHANNEL",
    "url": "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011"
   }
  ]
 },
 {
  "match": "Bali United vs Persib",
  "league": "Indonesian Dewata Challenge",
  "startTime": "2026-08-18T19:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://hd-stream.lxscore.com/live/default-103563.m3u8|referer=https://lxscore.com/"
   },
   {
    "name": "Live Only",
    "url": "https://live2.livefeedtextbox.com/live/channel7.m3u8|Referer=https://xl365.textliveupdaterz.com/"
   }
  ]
 },
 {
  "match": "Persija vs Arema",
  "league": "Indonesian President Cup",
  "startTime": "2026-08-06T15:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://hd-stream.lxscore.com/live/default-1847275.m3u8|referer=https://lxscore.com/"
   },
   {
    "name": "Live Only",
    "url": "https://aspaltvpasti.top/Allinone/21872.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/21872.drm"
   },
   {
    "name": "Indosiar Dgt",
    "url": "https://iptv.lancartech.co.id/live/bombom/full/11.m3u8"
   }
  ]
 },
 {
  "match": "Arema vs PSIM Yogyakarta",
  "league": "Indonesian Super League",
  "startTime": "2026-05-22T15:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc4MDA0MjAwNCwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3Nzk0MzcyMDQsIm5iZiI6MTc3OTQzNzIwNCwidHh3bXZlciI6MSwid21wYXQiOiJvQXJ3Q3Y4QiIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQ4fQ.Hr2BN7BgBZYvdEQrnG1wnRnLk1AzBL1FhZTDqjEiqAw/live/tencent-1/main.m3u8"
   }
  ]
 },
 {
  "match": "Dewa United vs Bali United",
  "league": "Indonesian Super League",
  "startTime": "2026-05-22T19:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://etslive-v3-vidio-com-tokenized.akamaized.net/stream/19354/res=720p/file/drm/dash/stream.mpd?hdntl=exp=1779537510~acl=%2fstream%2f19354%2fres%3d720p%2ffile%2fdrm%2fdash%2fstream.mpd!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2faac%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-720p%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-480p%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-360p%2f*~id=199200209~data=hdntl~hmac=b27d36cf7bbd04aba37551cf7f175e1ba8b80cf3658987f941088de7ab47d51f|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/19354.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTQ1MDEzNywiZXhwIjoxNzc5NDkzMzM3LCJyeiI6MzUxOTUzfQ.IKsawA2cJoOxTNHk__zwHW1TNXgGhHhFugmB69iSNEM|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3"
   },
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/1/zhetv.mpd?idx=001|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3"
   }
  ]
 },
 {
  "match": "Persebaya Surabaya vs Persik Kediri",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/2/zhetv.mpd?idx=002|drmScheme=clearkey&drmLicense=95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,520a181530afd945b814e3b709f12a53:a98ea7ec85b79edf82e0b2b324301f64,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b"
   },
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/2/zhetv.mpd?idx=002|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-1&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga2-1&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-1&type=kltra"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU5OV8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Persib vs Persijap",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/1/zhetv.mpd?idx=001|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/19354.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyMzgzNywiZXhwIjoxNzc5NTY3MDM3LCJyeiI6MjU5MTc1fQ.NEXGuIp7kfddEsEXmIAuwZY3T3wtyx9AFhhQcCGUtE4|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1NV8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Persija vs Semen Padang",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/3/zhetv.mpd?idx=003|drmScheme=clearkey&drmLicense=aa1cbd9b041069ae681f231f33f848e6:e65ec4587e191185f9437c86a922b563,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6"
   },
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/3/zhetv.mpd?idx=003|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-3&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga2-3&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-3&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/21483.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNDgzMSwiZXhwIjoxNzc5NTY4MDMxLCJyeiI6NTAyODU0fQ.XcDwpueiCMAOhLIBR-hs9jVwAqEqDLNqWHUI2cdA6so|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/21483.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNDgzMSwiZXhwIjoxNzc5NTY4MDMxLCJyeiI6NTAyODU0fQ.XcDwpueiCMAOhLIBR-hs9jVwAqEqDLNqWHUI2cdA6so"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1NF8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Persita vs Persis Solo",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc4MDEzMTgzMiwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3Nzk1MjcwMzIsIm5iZiI6MTc3OTUyNzAzMiwidHh3bXZlciI6MSwid21wYXQiOiJvTkdOM3dzPSIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQwfQ.xNIvy4xMgLFrbX5koHvMN005J_3LCmXNvs2kDpwyZQA/live/tencent-1/main.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTYwM18x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Borneo vs Malut United",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/4/zhetv.mpd?idx=004|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=608ec7b4bb8ba4cf422c41807757402e:0167309e77845d8b26c38a213f691e1a,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b"
   },
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-1&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-1&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl1|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=608ec7b4bb8ba4cf422c41807757402e:0167309e77845d8b26c38a213f691e1a,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/19384.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTEzMywiZXhwIjoxNzc5NTY4MzMzLCJyeiI6MTk3NTg2fQ.wVb4AZZyIriBEV5eITgPBd_BCFRNSSaO5Hl-tLuKt-A|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19384.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTEzMywiZXhwIjoxNzc5NTY4MzMzLCJyeiI6MTk3NTg2fQ.wVb4AZZyIriBEV5eITgPBd_BCFRNSSaO5Hl-tLuKt-A"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1OV8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Madura United vs PSM",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/5/zhetv.mpd?idx=005|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6"
   },
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-3&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-3&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl13|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/19385.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTE5NiwiZXhwIjoxNzc5NTY4Mzk2LCJyeiI6MjI4NDk0fQ.92ingyqPDK5LiVgeu0Tfcf7uP3O5mJFAT8hOjYnfmSs|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19385.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTE5NiwiZXhwIjoxNzc5NTY4Mzk2LCJyeiI6MjI4NDk0fQ.92ingyqPDK5LiVgeu0Tfcf7uP3O5mJFAT8hOjYnfmSs"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU0N18x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Bhayangkara vs PSBS Biak Numfor",
  "league": "Indonesian Super League",
  "startTime": "2026-05-23T16:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://sczhetv.elutuna.workers.dev/6/zhetv.mpd?idx=006|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6"
   },
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-2&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-2&type=kltra"
   },
   {
    "name": "Live Only",
    "url": "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl12|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6"
   },
   {
    "name": "Live Only",
    "url": "https://bosstv.asia/1bostv/TOKEN/19386.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTI2MCwiZXhwIjoxNzc5NTY4NDYwLCJyeiI6NDEwODU0fQ.RIaHXcf3RxO3Ff-HzpuZKUinHCmo5w-JalXUTPYLKTQ|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19386.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTI2MCwiZXhwIjoxNzc5NTY4NDYwLCJyeiI6NDEwODU0fQ.RIaHXcf3RxO3Ff-HzpuZKUinHCmo5w-JalXUTPYLKTQ"
   },
   {
    "name": "Live Only Web",
    "url": "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTY1M18x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "PSS Sleman vs Garudayaksa",
  "league": "Indonesian League 2",
  "startTime": "2026-05-09T19:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://vidx.bassandy.workers.dev/PunyaKltra_tv.mpd?id=liga2-2&type=kltra|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=e5b5971e258473c3212b2a66e2bb70eb:d5a085b36437b8216851cb1483ca4abd,f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d"
   },
   {
    "name": "Live Only",
    "url": "https://netx.pisionpluss13.workers.dev/PunyaKltra_TV.mpd?type=dash&id=vidxl2x|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=e5b5971e258473c3212b2a66e2bb70eb:d5a085b36437b8216851cb1483ca4abd,f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d"
   },
   {
    "name": "Live Only",
    "url": "https://raw.githubusercontent.com/Tboys88/tboys88.github.io/refs/heads/main/2ligalt1.m3u8|Referer=https://zac01eo.mpipzni2naturally32kistomach.ru/&User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1"
   }
  ]
 },
 {
  "match": "Persekat vs Persiba Balikpapan",
  "league": "Indonesian League 2",
  "startTime": "2026-05-08T15:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc3ODgzMTU3MCwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3NzgyMjY3NzAsIm5iZiI6MTc3ODIyNjc3MCwidHh3bXZlciI6MSwid21wYXQiOiJvRUVtQmd3PSIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQwfQ.tfR-r94oT2yLEiPCj2-Z4D14AQ3b0yYcjqn0-oKrN3A/live/tencent-1/main.m3u8"
   }
  ]
 },
 {
  "match": "Al-Ahli vs Machida Zelvia",
  "league": "AFC Champions Elite",
  "startTime": "2026-04-25T23:15:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|Referer=https://www.visionplus.id/&drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "BEIN ARABIC 2",
    "url": "https://raw.githubusercontent.com/Tboys88/tboys88.github.io/refs/heads/main/b2.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
   },
   {
    "name": "SOCCER CHANNEL",
    "url": "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011"
   }
  ]
 },
 {
  "match": "Al Nassr vs Gamba Osaka",
  "league": "AFC Champions Two",
  "startTime": "2026-05-17T00:45:00+07:00",
  "servers": [
   {
    "name": "Mewatch Live 2",
    "url": "https://tglmp02.akamaized.net/out/v1/3170252e3fb0453085f2f4b0f8401a6b/manifest.mpd|&drmScheme=clearkey&drmLicense=60dc08aae52f4c0b806a8e43f24a12c8:30d5b579966d822b215ec51a91d8a271"
   },
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   },
   {
    "name": "ESPN 3 MEXICO",
    "url": "https://mega.z5cable.com/bpk-tv/espn_3_hd/default/index.mpd|drmScheme=clearkey&drmLicense=0c39778fe8fb4f9f8574016b3d4ae2ed:232b1f450f2e37f47fdd5b678a8a546d"
   }
  ]
 },
 {
  "match": "Dewa United vs Manila Digger",
  "league": "AFC Challange",
  "startTime": "2026-03-12T20:30:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   }
  ]
 },
 {
  "match": "Buriram United vs Selangor",
  "league": "ASEAN Shopee Cup",
  "startTime": "2026-05-27T19:00:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "SOCCER CHANNEL",
    "url": "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011"
   }
  ]
 },
 {
  "match": "Belanda vs Uzbekistan",
  "league": "Friendly",
  "startTime": "2026-06-09T01:45:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "TV 360 +6",
    "url": "https://sgclient.duckdns.org/source/tv360.mpd?id=9868|drmScheme=clearkey&drmLicense=3b0f9e1892864641aa17f02b2e7b0b2d:6c06f96a6296d05442466d5b09e58192"
   },
   {
    "name": "PRIMA SPORT 2",
    "url": "https://arwen1.panaka1.cfd/puk2/usergenrnd0clv03fyt.m3u8|Referer=https://arwen1.panaka.cfd/000/"
   }
  ]
 },
 {
  "match": "Perancis vs Irlandia Utara",
  "league": "Friendly",
  "startTime": "2026-06-09T02:10:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae"
   },
   {
    "name": "SPORTSTAR 1",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea"
   },
   {
    "name": "Irib Varzesh",
    "url": "https://ncdn.telewebion.ir/varzesh/live/playlist.m3u8"
   }
  ]
 },
 {
  "match": "Peru vs Spanyol",
  "league": "Friendly",
  "startTime": "2026-06-09T09:00:00+07:00",
  "servers": [
   {
    "name": "TVE LA 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/62qdkefv9f/out/v1/f7d5b356e048494a8325563e8916d50b/cenc.mpd|drmScheme=clearkey&drmLicense=fd86dde0ae3e14ff51c8fc8f248a50db:d106ae78b0893da2e4393ece99420baa"
   },
   {
    "name": "SPORTSTAR 1",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea"
   },
   {
    "name": "Sabake TV 3",
    "url": "https://ncdn.telewebion.ir/tv3/live/playlist.m3u8"
   }
  ]
 },
 {
  "match": "Filipina vs Myanmar",
  "league": "Friendly",
  "startTime": "2026-06-09T18:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.streamoke.net/live/sd-6Mwe5ZtfDBdC2JZYsf/main_stream.m3u8|Referer=https://stream.livenobarseru.com/"
   },
   {
    "name": "Live Only",
    "url": "https://stream.yultech.online/hls/live/sd-6Mwe5ZtfDBdC2JZYsf/index.m3u8|Referer=https://stream.livenobarseru.com/"
   }
  ]
 },
 {
  "match": "Tiongkok vs Thailand",
  "league": "Friendly",
  "startTime": "2026-06-09T18:35:00+07:00",
  "servers": [
   {
    "name": "Thairath TH",
    "url": "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/32/32.mpd|drmScheme=clearkey&drmLicense=4b2bff3e598043cfaf949305e3d153fa:545df84ff4c54af6b5385516e0f65956"
   },
   {
    "name": "Thairath TV",
    "url": "https://ssai-streaming.thairath.co.th/bamm-csai/480p/index.m3u8|Referer=https://www.thairath.co.th/"
   }
  ]
 },
 {
  "match": "Kamboja vs Hong Kong",
  "league": "Friendly",
  "startTime": "2026-06-09T19:00:00+07:00",
  "servers": [
   {
    "name": "BTV News",
    "url": "https://live.happywatch99.com/btv/0c00b89a106bb365ec031b28fa3ae499.sdp/chunks.m3u8"
   }
  ]
 },
 {
  "match": "Bahrain vs Syria",
  "league": "Friendly",
  "startTime": "2026-06-09T21:00:00+07:00",
  "servers": [
   {
    "name": "Bahrain Sport 1",
    "url": "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8"
   }
  ]
 },
 {
  "match": "Armenia vs Moldova",
  "league": "Friendly",
  "startTime": "2026-06-09T22:00:00+07:00",
  "servers": [
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   },
   {
    "name": "Live Only",
    "url": "https://live3.egmdispatch.com/live/71422648_dc7b97661fc364ed335c87c248b22332_autoChange.m3u8?auth_key=1781030880-0-0-6f3ffc2f3390ae908fc0572917ed8cc4"
   },
   {
    "name": "SPOR TV 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7"
   },
   {
    "name": "SPORT 2 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Tajikistan vs India",
  "league": "Friendly",
  "startTime": "2026-06-09T22:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live4.egmdispatch.com/live/71865704_255b00c8c26817c16445898cafc2ce4e_autoChange.m3u8?auth_key=1781030880-0-0-f392ea225d1c4fce53207288ad2fb207"
   },
   {
    "name": "Live Only",
    "url": "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwODYzNF8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Kyrgyzstan vs Palestina",
  "league": "Friendly",
  "startTime": "2026-06-09T21:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live.egmdispatch.com/live/71814446_b6b1c24c1b749793d3f090c24c448883_autoChange.m3u8?auth_key=1781029652-0-0-9a606769f16191a553a0fa3e818bdd09"
   },
   {
    "name": "Live Only",
    "url": "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwNDAyNV8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Latvia vs Kepulauan Faroe",
  "league": "Baltic Cup",
  "startTime": "2026-06-09T22:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live1.egmdispatch.com/live/71960924_23d921463083fd332992c4eca17d8d60_autoChange.m3u8?auth_key=1781031784-0-0-1cd347368105ddb303e0157838c27d44"
   },
   {
    "name": "SPORTSTAR 3",
    "url": "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/6f5596513af749c19d0bcdac013dda3c/index.mpd|drmScheme=widevine&drmLicense=https://boti.my.id/saya.suka?id=9999&type=fitnah"
   }
  ]
 },
 {
  "match": "Lithuania vs Estonia",
  "league": "Baltic Cup",
  "startTime": "2026-06-09T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live4.egmdispatch.com/live/71961326_ca3ee93d19fad8328517c1ee375b194d_autoChange.m3u8?auth_key=1781035076-0-0-e57b2b8c5f6f2510d811bdb9408680d6"
   },
   {
    "name": "LRT Pilus",
    "url": "https://stream-secure.lrt.lt/plius/stream01/streamPlaylist.m3u8"
   },
   {
    "name": "LRT Pilus",
    "url": "https://stream-secure.lrt.lt/plius/stream02/streamPlaylist.m3u8"
   }
  ]
 },
 {
  "match": "Hungaria vs Kazakhstan",
  "league": "Friendly",
  "startTime": "2026-06-10T00:00:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae"
   },
   {
    "name": "SPORTSTAR 1",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea"
   }
  ]
 },
 {
  "match": "Rusia vs Trinidad dan Tobago",
  "league": "Friendly",
  "startTime": "2026-06-10T00:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live1.egmdispatch.com/live/71527260_c9b22d1d811143d32428f737382a9479_autoChange.m3u8?auth_key=1781038789-0-0-73b7561dc58881e51a941033a1fd5cb8"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   }
  ]
 },
 {
  "match": "Azerbaijan vs San Marino",
  "league": "Friendly",
  "startTime": "2026-06-10T01:00:00+07:00",
  "servers": [
   {
    "name": "SPORTSTAR 2",
    "url": "https://fta3-cdn-flr.visionplus.id/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|drmScheme=clearkey&drmLicense=911e72adf36946afbdbb4f80782a8394:08aec548a851ba64b7172ae7f05cb91c"
   },
   {
    "name": "SPORT 2 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Argentina vs Islandia",
  "league": "Friendly",
  "startTime": "2026-06-10T08:00:00+07:00",
  "servers": [
   {
    "name": "RTM Sport",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd"
   },
   {
    "name": "OKEY TV",
    "url": "https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd"
   },
   {
    "name": "CAZE TV",
    "url": "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8"
   }
  ]
 },
 {
  "match": "Irak vs Venezuela",
  "league": "Friendly",
  "startTime": "2026-06-10T08:00:00+07:00",
  "servers": [
   {
    "name": "Iraqia Sport",
    "url": "https://imn-live.esite-lab.com/hls/iraqia-sports-1.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwNDAxOV8x&ilang=id|iframe"
   }
  ]
 },
 {
  "match": "Portugal vs Nigeria",
  "league": "Friendly",
  "startTime": "2026-06-11T02:45:00+07:00",
  "servers": [
   {
    "name": "SPOR TV 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7"
   },
   {
    "name": "SPORTSTAR 1",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea"
   },
   {
    "name": "Sabake TV 3",
    "url": "https://ncdn.telewebion.ir/tv3/live/playlist.m3u8"
   },
   {
    "name": "SPORT 2 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Inggris vs Kosta Rika",
  "league": "Friendly",
  "startTime": "2026-06-11T03:00:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae"
   },
   {
    "name": "SOCCER CHANNEL",
    "url": "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5"
   }
  ]
 },
 {
  "match": "Bolivia vs Aljazair",
  "league": "Friendly",
  "startTime": "2026-06-11T03:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Republik Ceko vs Denmark",
  "league": "World Cup Qualifiers",
  "startTime": "2026-04-01T01:45:00+07:00",
  "servers": [
   {
    "name": "CT SPORT CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_ct_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "NOVA SPORT 3",
    "url": "https://cc1.screenistream.xyz:8080/stream/257/index.m3u8?token=T4Nz6WCt2Uwlqma4"
   }
  ]
 },
 {
  "match": "Irak vs Bolivia",
  "league": "World Cup Qualifiers",
  "startTime": "2026-04-01T10:00:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   }
  ]
 },
 {
  "match": "Swedia vs Polandia",
  "league": "World Cup Qualifiers",
  "startTime": "2026-04-01T01:45:00+07:00",
  "servers": [
   {
    "name": "SPORT 1 CZ/SK",
    "url": "https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   },
   {
    "name": "Sky Max",
    "url": "https://cc1.screenistream.xyz:8080/stream/236/index.m3u8?token=T4Nz6WCt2Uwlqma4"
   }
  ]
 },
 {
  "match": "Kosovo vs Turki",
  "league": "World Cup Qualifiers",
  "startTime": "2026-04-01T01:45:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae"
   },
   {
    "name": "QAZSPORT",
    "url": "http://188.225.31.197/bpk-tv/000003038/tve/index.m3u8"
   }
  ]
 },
 {
  "match": "Luksemburg vs Malta",
  "league": "UEFA Nations League",
  "startTime": "2026-03-31T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://streaming.cdnx-sportnobar.xyz/live/sd-6MtMdmmDeQtRYY1JEZ.m3u8"
   }
  ]
 },
 {
  "match": "Latvia vs Gibraltar",
  "league": "UEFA Nations League",
  "startTime": "2026-03-31T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://streaming.cdnx-sportnobar.xyz/live/sd-6MtMdmmDewf9jFa8P7.m3u8"
   },
   {
    "name": "SPORTV 1",
    "url": "https://a123aivottepl-a.akamaihd.net/gru-nitro/live/clients/dash/enc/m7duvnk2bu/out/v1/d1ad69118b5647309b1eb7213affdb3d/cenc.mpd|drmScheme=clearkey&drmLicense=4bbcff3289d457b4dd5dbdd21221de9a:c4906b9a9f8dda3c0725bddb8c497733"
   }
  ]
 },
 {
  "match": "Dinamo Zagreb vs Viking",
  "league": "UEFA Champions League",
  "startTime": "2026-08-19T02:00:00+07:00",
  "servers": [
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749"
   },
   {
    "name": "Bein Sport 3 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play"
   },
   {
    "name": "ESPN 5 CO",
    "url": "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(80c74968-a2ef-4005-8661-045fe97408a8)/master.mpd|drmScheme=clearkey&drmLicense=4e126297fc7af35c736bdffe98eecaaa:fdb0091cf67d9c596dbfb07cf6f4c8f5"
   }
  ]
 },
 {
  "match": "Fenerbahçe vs Olympique Lyonnais",
  "league": "UEFA Champions League",
  "startTime": "2026-08-19T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "SONY TEN 2",
    "url": "https://digitalotthub.com/tv/toffee-by-maruf/live.php?id=sony_sports_2_hd&e=.m3u8"
   },
   {
    "name": "ESPN 1 CO",
    "url": "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05"
   }
  ]
 },
 {
  "match": "Levski Sofia vs AEK Athens",
  "league": "UEFA Champions League",
  "startTime": "2026-08-19T02:00:00+07:00",
  "servers": [
   {
    "name": "TNT Sport 2",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea74888c042e1b"
   },
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "ESPN 1 CO",
    "url": "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05"
   }
  ]
 },
 {
  "match": "Freiburg vs Aston Villa",
  "league": "UEFA Europa League",
  "startTime": "2026-05-21T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 1 ID",
    "url": "https://ratuvidio.adptv.workers.dev/index.mpd?id=6299&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e"
   },
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b"
   },
   {
    "name": "RTL Germany",
    "url": "https://pnowlive-a.akamaized.net/live/rtlhd/dash/rtlhd.mpd|drmScheme=clearkey&drmLicense=57e48b99f3f6d4f13f5c5afdcca084ca:29379a5e2d3405fad2f5d9cbe92586c3"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://bosstv.asia/1bostv/6299.mpd|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e"
   },
   {
    "name": "Bein Sport 1 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48"
   }
  ]
 },
 {
  "match": "Crystal Palace vs Rayo Vallecano",
  "league": "UEFA Conference League",
  "startTime": "2026-05-28T02:00:00+07:00",
  "servers": [
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://ratuvidio.adptv.workers.dev/index.mpd?id=6299&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=6299&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e"
   }
  ]
 },
 {
  "match": "Tigres UANL vs Nashville SC",
  "league": "CONCACAF Champions League",
  "startTime": "2026-05-06T08:30:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   }
  ]
 },
 {
  "match": "Toluca vs Los Angeles FC",
  "league": "CONCACAF Champions League",
  "startTime": "2026-05-07T08:30:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   }
  ]
 },
 {
  "match": "Arsenal vs Coventry City",
  "league": "England Premier League",
  "startTime": "2026-08-22T02:00:00+07:00",
  "servers": [
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "Live Only",
    "url": "https://live.kinxie.com/live/72221154_6f7b6a3ad6e3be83540c44e4585be9b3_autoChange.m3u8?auth_key=1787353255-0-0-c22baa1f3bd4ab9e7ae53518c12587d8"
   },
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4558449.m3u8"
   },
   {
    "name": "Bein 1 Arabic",
    "url": "https://crimson-cloud-807f.kamrukhanchy.workers.dev/1201183/index.json?&e=.m3u8"
   },
   {
    "name": "USA Network",
    "url": "https://volder.timst.cfd/main/secure/966ede7659f94452fd1151cab2bf4c4714b0dcc09a45e534560dd9c00e90a726/1787343792/usanetwork-usa.m3u8|Referer=https://cdx-08192.website/"
   },
   {
    "name": "SKY Main Event",
    "url": "https://volder.timst.cfd/main/secure/f9370f7a887e2439ad8a2764847d41f341fa2564e6b882f4abc1b6c41f4d1dc6/1787343857/skysportsmainevent-uk.m3u8|Referer=https://cdx-08192.website/"
   },
   {
    "name": "Hub Premier 1",
    "url": "https://volder.timst.cfd/main/secure/e1c0e0ee86c130a53009acfb4b4f72b39a20c69ce6d6358b25500aafe2f3e261/1787343938/starhubpremier1-sg.m3u8|Referer=https://cdx-08192.website/"
   },
   {
    "name": "Astro PL",
    "url": "https://volder.timst.cfd/main/secure/042414a5e2848aad0577101a8ed144d7ca1c11a307876d2f273dee5854054eed/1787343916/astropremierleague-my.m3u8|Referer=https://cdx-08192.website/"
   },
   {
    "name": "ESPN 1 CO",
    "url": "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05"
   }
  ]
 },
 {
  "match": "Hull City vs Manchester United",
  "league": "England Premier League",
  "startTime": "2026-08-22T18:30:00+07:00",
  "servers": [
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749"
   },
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Everton vs Crystal Palace",
  "league": "England Premier League",
  "startTime": "2026-08-22T21:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Ipswich Town vs Sunderland",
  "league": "England Premier League",
  "startTime": "2026-08-22T21:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Nottingham Forest vs Leeds United",
  "league": "England Premier League",
  "startTime": "2026-08-22T21:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Brentford vs Tottenham Hotspur",
  "league": "England Premier League",
  "startTime": "2026-08-22T23:30:00+07:00",
  "servers": [
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Brighton & Hove Albion vs Aston Villa",
  "league": "England Premier League",
  "startTime": "2026-08-23T20:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Manchester City vs AFC Bournemouth",
  "league": "England Premier League",
  "startTime": "2026-08-23T20:00:00+07:00",
  "servers": [
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Newcastle United vs Liverpool",
  "league": "England Premier League",
  "startTime": "2026-08-23T22:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Fulham vs Chelsea",
  "league": "England Premier League",
  "startTime": "2026-08-25T02:00:00+07:00",
  "servers": [
   {
    "name": "FUBO SPORT 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Millwall vs Hull City",
  "league": "England Championship League",
  "startTime": "2026-05-12T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   }
  ]
 },
 {
  "match": "Southampton vs Middlesbrough",
  "league": "England Championship League",
  "startTime": "2026-05-13T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   }
  ]
 },
 {
  "match": "Atlético Madrid vs Málaga",
  "league": "La Liga Spain",
  "startTime": "2026-08-20T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   }
  ]
 },
 {
  "match": "Rayo Vallecano vs Deportivo Alavés",
  "league": "La Liga Spain",
  "startTime": "2026-08-21T02:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   }
  ]
 },
 {
  "match": "Real Betis vs Real Sociedad",
  "league": "La Liga Spain",
  "startTime": "2026-08-22T02:00:00+07:00",
  "servers": [
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   }
  ]
 },
 {
  "match": "Athletic Club vs Sevilla",
  "league": "La Liga Spain",
  "startTime": "2026-08-22T22:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 1 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd|drmScheme=clearkey&drmLicense=335dad778109954503dcbb21dc92015f:24bfd75d436cbf73168a2a2dccd40281"
   },
   {
    "name": "Bein Sport 3 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   }
  ]
 },
 {
  "match": "Valencia vs Celta de Vigo",
  "league": "La Liga Spain",
  "startTime": "2026-08-23T00:30:00+07:00",
  "servers": [
   {
    "name": "PREMIER SPORT 2",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd|drmScheme=clearkey&drmLicense=1a5df53609ebc9857898c490f4724918:77f62980d582ec541280796acf8b2d19"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   }
  ]
 },
 {
  "match": "Espanyol vs Real Madrid",
  "league": "La Liga Spain",
  "startTime": "2026-08-23T02:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   }
  ]
 },
 {
  "match": "Atlético Madrid vs Villarreal",
  "league": "La Liga Spain",
  "startTime": "2026-08-23T22:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "Bein Sport 3 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   }
  ]
 },
 {
  "match": "Getafe vs Racing Santander",
  "league": "La Liga Spain",
  "startTime": "2026-08-24T00:30:00+07:00",
  "servers": [
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   }
  ]
 },
 {
  "match": "Elche vs Barcelona",
  "league": "La Liga Spain",
  "startTime": "2026-08-24T02:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "TSN SPORT 4",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "MATCH TV RU",
    "url": "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333"
   }
  ]
 },
 {
  "match": "Osasuna vs Levante",
  "league": "La Liga Spain",
  "startTime": "2026-08-25T00:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   }
  ]
 },
 {
  "match": "Málaga vs Deportivo La Coruña",
  "league": "La Liga Spain",
  "startTime": "2026-08-25T02:30:00+07:00",
  "servers": [
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   },
   {
    "name": "Bein Sport 1 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play"
   },
   {
    "name": "D SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/x0srg3jjpz/out/v1/f779c49314394d61886d63f58d9d52e4/cenc.mpd|drmScheme=clearkey&drmLicense=4f4c3a9912ea752e88f4497864a1bc8b:278128004fe8c6ffb2cd2a0c154a241a"
   }
  ]
 },
 {
  "match": "Valencia vs Real Betis",
  "league": "La Liga Spain",
  "startTime": "2026-08-26T02:00:00+07:00",
  "servers": [
   {
    "name": "PREMIER SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f"
   },
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   }
  ]
 },
 {
  "match": "Internazionale vs Monza",
  "league": "Serie A Italy",
  "startTime": "2026-08-22T23:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "CBS GOLAZO",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Udinese vs Como",
  "league": "Serie A Italy",
  "startTime": "2026-08-22T23:30:00+07:00",
  "servers": [
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   },
   {
    "name": "Match Football 3 RU",
    "url": "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c"
   }
  ]
 },
 {
  "match": "Genoa vs Napoli",
  "league": "Serie A Italy",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "CBS GOLAZO",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Parma vs Cagliari",
  "league": "Serie A Italy",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Frosinone vs Juventus",
  "league": "Serie A Italy",
  "startTime": "2026-08-23T23:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "CBS GOLAZO",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Venezia vs Lecce",
  "league": "Serie A Italy",
  "startTime": "2026-08-23T23:30:00+07:00",
  "servers": [
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   },
   {
    "name": "Match Football 3 RU",
    "url": "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c"
   }
  ]
 },
 {
  "match": "Torino vs Milan",
  "league": "Serie A Italy",
  "startTime": "2026-08-24T01:45:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "TNT Sport 1",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Atalanta vs Sassuolo",
  "league": "Serie A Italy",
  "startTime": "2026-08-24T01:45:00+07:00",
  "servers": [
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Bologna vs Lazio",
  "league": "Serie A Italy",
  "startTime": "2026-08-24T23:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "Roma vs Fiorentina",
  "league": "Serie A Italy",
  "startTime": "2026-08-25T01:45:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 3 AUS",
    "url": "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e"
   },
   {
    "name": "STARZPLAY SPORT 1",
    "url": "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42"
   },
   {
    "name": "STARZPLAY SPORT 2",
    "url": "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0"
   }
  ]
 },
 {
  "match": "SC St. Tönis vs Eintracht Frankfurt",
  "league": "Germany DFB Pokal",
  "startTime": "2026-08-21T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://live1.kinxie.com/live/71960084_83e1b45ed4e971104984948e294a06bf_autoChange.m3u8?auth_key=1787344490-0-0-d9384f7db64d191a304b92ca2d38a406"
   },
   {
    "name": "Live Only",
    "url": "https://baru.pw/rbtv.m3u8?streamId=775366&matchId=4431321&sportType=1|Referer=https://nadia01eo.tn76degree12ec3out.cfd/&User-Agent=Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36"
   }
  ]
 },
 {
  "match": "Wehen Wiesbaden vs Bayer Leverkusen",
  "league": "Germany DFB Pokal",
  "startTime": "2026-08-22T18:00:00+07:00",
  "servers": [
   {
    "name": "NOVA SPORT 1 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Eintracht Trier vs RB Leipzig",
  "league": "Germany DFB Pokal",
  "startTime": "2026-08-22T23:00:00+07:00",
  "servers": [
   {
    "name": "NOVA SPORT 1 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Schott Mainz vs Borussia M'gladbach",
  "league": "Germany DFB Pokal",
  "startTime": "2026-08-23T20:30:00+07:00",
  "servers": [
   {
    "name": "NOVA SPORT 1 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Hallescher FC vs Schalke 04",
  "league": "Germany DFB Pokal",
  "startTime": "2026-08-25T01:45:00+07:00",
  "servers": [
   {
    "name": "NOVA SPORT 1 CZ",
    "url": "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d"
   }
  ]
 },
 {
  "match": "Olympique Marseille vs Strasbourg",
  "league": "Ligue 1 France",
  "startTime": "2026-08-22T01:45:00+07:00",
  "servers": [
   {
    "name": "ESPN 2 CO",
    "url": "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(62567d5c-295c-4ffd-ac7e-c9749e874884)/master.mpd|drmScheme=clearkey&drmLicense=a81ee4a694fecd6aa8a682e5024b313c:6d15568e1dab59e7202ae12e71505185"
   },
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4550846-42298.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4550846.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-sd/streamed/admin/ppv-marseille-vs-strasbourg/2/playlist.m3u8?tk=okDlCsDsrmCoCsQSA5JMwg&e=1787240856|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Lens vs Auxerre",
  "league": "Ligue 1 France",
  "startTime": "2026-08-22T22:15:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/rcl-aux/playlist.m3u8?tk=KSPGqXu_Jzv_P7h5xoXlBA&e=1787240985|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Le Mans vs Brest",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-sd/streamed/admin/ppv-le-mans-vs-brest/2/playlist.m3u8?tk=_rjR_3YfnVr-QJzt1xLxxg&e=1787241235|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Nice vs Lorient",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/nice-lor/playlist.m3u8?tk=EXeox-ikQZ6SUfScqCbTQA&e=1787241389|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Toulouse vs Olympique Lyonnais",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "Tv5 Monde Asie",
    "url": "https://ott.tv5monde.com/Content/HLS/Live/channel(seasie)/index.m3u8"
   }
  ]
 },
 {
  "match": "Troyes vs Paris",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T01:45:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/try-par/playlist.m3u8?tk=n8G6GY04paBsiL_kBK-srQ&e=1787241762|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Angers SCO vs Lille",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T20:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-sd/streamed/admin/ppv-angers-vs-lille/2/playlist.m3u8?tk=EDN3wo2XBQdXl1VjW7ahlA&e=1787241853|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Le Havre vs Monaco",
  "league": "Ligue 1 France",
  "startTime": "2026-08-23T22:15:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-sd/streamed/admin/ppv-le-havre-ac-vs-as-monaco/2/playlist.m3u8?tk=wSRqc2-nbyWcm5BPQgcK8w&e=1787241943|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "PSG vs Rennes",
  "league": "Ligue 1 France",
  "startTime": "2026-08-24T01:45:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Live Only",
    "url": "https://messi.damitv.st/live-sd/streamed/admin/ppv-paris-saint-germain-vs-stade-rennais/2/playlist.m3u8?tk=SJvm-3xtVNd4Bf6_iZXcAQ&e=1787242069|Referer=https://damitvsports.com/"
   }
  ]
 },
 {
  "match": "Fortuna Sittard vs AZ",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-22T21:30:00+07:00",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "match": "Sparta Rotterdam vs Utrecht",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-22T23:45:00+07:00",
  "servers": [
   {
    "name": "ESPN 1 NL Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-1/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Heerenveen vs PEC Zwolle",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-23T02:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "ESPN 1 NL Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-1/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Go Ahead Eagles vs ADO Den Haag",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-13T17:15:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "ESPN 2 NL Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-2/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "PSV vs Groningen",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-23T19:30:00+07:00",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "match": "Cambuur vs Feyenoord",
  "league": "Eredevisie Netherland",
  "startTime": "2026-08-23T21:45:00+07:00",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "match": "Marítimo vs Academico Viseu",
  "league": "Portugal League",
  "startTime": "2026-08-22T21:30:00+07:00",
  "servers": [
   {
    "name": "SPORTTV 1 PT Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Estoril vs Rio Ave",
  "league": "Portugal League",
  "startTime": "2026-08-23T00:00:00+07:00",
  "servers": [
   {
    "name": "SPORTTV 2 PT Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-2-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Sporting CP vs Alverca",
  "league": "Portugal League",
  "startTime": "2026-08-23T02:30:00+07:00",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "match": "Vitória Guimarães vs Nacional",
  "league": "Portugal League",
  "startTime": "2026-08-23T21:30:00+07:00",
  "servers": [
   {
    "name": "SPORTTV 1 PT Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Santa Clara vs Famalicão",
  "league": "Portugal League",
  "startTime": "2026-08-24T00:00:00+07:00",
  "servers": [
   {
    "name": "SPORTDIGITAL",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8"
   }
  ]
 },
 {
  "match": "Porto vs Arouca",
  "league": "Portugal League",
  "startTime": "2026-08-24T02:30:00+07:00",
  "servers": [
   {
    "name": "Match Football 2 RU",
    "url": "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9"
   },
   {
    "name": "SPORTTV 1 PT Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Gil Vicente vs Casa Pia",
  "league": "Portugal League",
  "startTime": "2026-08-25T02:15:00+07:00",
  "servers": [
   {
    "name": "SPORTTV 1 PT Web",
    "url": "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe"
   }
  ]
 },
 {
  "match": "Al Riyadh vs Al Nassr",
  "league": "Saudi Pro League",
  "startTime": "2026-08-21T23:00:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   }
  ]
 },
 {
  "match": "Al Hazm vs Diriyah",
  "league": "Saudi Pro League",
  "startTime": "2026-08-21T23:15:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4599551-42332.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://baru.pw/rbtv.m3u8?streamId=777499&matchId=4456684&sportType=1|Referer=https://nadia01eo.tn76degree12ec3out.cfd/&User-Agent=Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36"
   }
  ]
 },
 {
  "match": "Al Faisaly vs NEOM",
  "league": "Saudi Pro League",
  "startTime": "2026-08-22T01:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4599553-42382.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4599553.m3u8"
   }
  ]
 },
 {
  "match": "Al Quadisiya vs Al Ittihad",
  "league": "Saudi Pro League",
  "startTime": "2026-08-22T01:00:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   }
  ]
 },
 {
  "match": "Al Fateh vs Al Ittifaq",
  "league": "Saudi Pro League",
  "startTime": "2026-08-22T22:45:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Al Kholood vs Al Taawon",
  "league": "Saudi Pro League",
  "startTime": "2026-08-22T23:10:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Al Khaleej vs Al Shabab",
  "league": "Saudi Pro League",
  "startTime": "2026-08-23T01:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   }
  ]
 },
 {
  "match": "Al-Ahli vs Abha",
  "league": "Saudi Pro League",
  "startTime": "2026-08-23T01:00:00+07:00",
  "servers": [
   {
    "name": "FOX DEPORTES",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811"
   }
  ]
 },
 {
  "match": "BB Erzurumspor vs Galatasaray",
  "league": "Turkey League",
  "startTime": "2026-08-22T01:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4581280-42388.m3u8"
   },
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4581280.m3u8"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Çorum Belediyespor vs Kasımpaşa",
  "league": "Turkey League",
  "startTime": "2026-08-22T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 2 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8"
   }
  ]
 },
 {
  "match": "Rizespor vs Samsunspor",
  "league": "Turkey League",
  "startTime": "2026-08-22T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Fenerbahçe vs Konyaspor",
  "league": "Turkey League",
  "startTime": "2026-08-23T01:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Eyüpspor vs Gaziantep FK",
  "league": "Turkey League",
  "startTime": "2026-08-23T23:00:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 2 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8"
   }
  ]
 },
 {
  "match": "Trabzonspor vs İstanbul Başakşehir",
  "league": "Turkey League",
  "startTime": "2026-08-23T23:00:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Alanyaspor vs Beşiktaş",
  "league": "Turkey League",
  "startTime": "2026-08-24T01:30:00+07:00",
  "servers": [
   {
    "name": "Bein Sport 2 ID",
    "url": "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play"
   },
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Göztepe vs Gençlerbirliği",
  "league": "Turkey League",
  "startTime": "2026-08-24T01:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 2 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8"
   }
  ]
 },
 {
  "match": "Kocaelispor vs Amed SK",
  "league": "Turkey League",
  "startTime": "2026-08-25T01:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://placeit.net/uploads/stage/56263/preview.mp4?13"
   },
   {
    "name": "Bein Sport 1 Turkey",
    "url": "https://andro.evrenesoglu57.click/checklist/batutest.m3u8"
   }
  ]
 },
 {
  "match": "Cincinnati vs New York City",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460456-40968.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv10"
   }
  ]
 },
 {
  "match": "Columbus Crew vs CF Montréal",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "TSN SPORT 5",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cscevwljkq/out/v1/972185041b244140860b7d56398e9aaf/cenc.mpd|drmScheme=clearkey&drmLicense=385ceb9714b75e0cef61254f80b31002:18dce92a2891fee68d21ede5173230f8"
   }
  ]
 },
 {
  "match": "DC United vs New England",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460461-40970.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv8"
   }
  ]
 },
 {
  "match": "New York RB vs Nashville SC",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460463-40971.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv12"
   }
  ]
 },
 {
  "match": "Orlando City SC vs Chicago Fire",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460465-40972.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv6"
   }
  ]
 },
 {
  "match": "Philadelphia Union vs Inter Miami",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460466-40973.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv2"
   }
  ]
 },
 {
  "match": "Toronto FC vs Charlotte",
  "league": "MLS USA",
  "startTime": "2026-08-20T06:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460468-40974.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv14"
   }
  ]
 },
 {
  "match": "Sporting KC vs St. Louis City",
  "league": "MLS USA",
  "startTime": "2026-08-20T07:00:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   }
  ]
 },
 {
  "match": "Minnesota United vs Atlanta United",
  "league": "MLS USA",
  "startTime": "2026-08-20T07:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460470-40981.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv18"
   }
  ]
 },
 {
  "match": "Colorado Rapids vs Los Angeles FC",
  "league": "MLS USA",
  "startTime": "2026-08-20T08:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460471-40987.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv20"
   }
  ]
 },
 {
  "match": "Real Salt Lake vs Dallas",
  "league": "MLS USA",
  "startTime": "2026-08-20T08:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460472-40988.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv22"
   }
  ]
 },
 {
  "match": "Seattle Sounders FC vs Austin",
  "league": "MLS USA",
  "startTime": "2026-08-20T08:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://stream.sports3.win/iptv/live/signal-4460473-40989.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv24"
   }
  ]
 },
 {
  "match": "LA Galaxy vs SJ Earthquakes",
  "league": "MLS USA",
  "startTime": "2026-08-20T09:30:00+07:00",
  "servers": [
   {
    "name": "FOX SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16"
   }
  ]
 },
 {
  "match": "Portland Timbers vs San Diego",
  "league": "MLS USA",
  "startTime": "2026-08-20T09:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4460475.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv28"
   }
  ]
 },
 {
  "match": "Vancouver Whitecaps vs Houston Dynamo",
  "league": "MLS USA",
  "startTime": "2026-08-20T09:30:00+07:00",
  "servers": [
   {
    "name": "Live Only",
    "url": "https://hls.live123.fans/live/4460477.m3u8"
   },
   {
    "name": "Live Only Web",
    "url": "https://streamx-hd.com/live2.php?stream=appletv30"
   }
  ]
 },
 {
  "match": "All Soccer vs All Soccer",
  "league": "All Soccer",
  "startTime": "LIVE FOOTBALL",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/football.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "All Soccer",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://www.fctv33hd.mom/id/football.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Badminton - World Championships 2026",
  "startTime": "",
  "servers": [
   {
    "name": "Court 1",
    "url": "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel61.m3u8"
   },
   {
    "name": "Court 2",
    "url": "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel62.m3u8"
   },
   {
    "name": "Court 3",
    "url": "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel63.m3u8"
   },
   {
    "name": "Court 4",
    "url": "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel64.m3u8"
   },
   {
    "name": "Court 1",
    "url": "https://aspaltvpasti.top/Allinone/18249.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18249.drm"
   },
   {
    "name": "Court 2",
    "url": "https://aspaltvpasti.top/Allinone/18250.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18250.drm"
   },
   {
    "name": "Court 3",
    "url": "https://aspaltvpasti.top/Allinone/18252.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18252.drm"
   },
   {
    "name": "Court 4",
    "url": "https://aspaltvpasti.top/Allinone/18253.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=7abf8c6b6ad702c484b59959c11ab575:33a8a0828e996d4918edb8957798e1d7"
   },
   {
    "name": "Live Only",
    "url": "https://mewotss.kesufuk3.workers.dev/mwlsmpn01.akamaized.net/out/v1/mwlsmpn01/ll_wc_ch01/ll_wc_ch01_cmaf_dash01/cmafdash1s.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=63bcb2ae029b3af3bab113950aa972dd:49ef2d7ef95fd3328f1ede9eecde6c58"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "All Badminton",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/badminton.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "AVC Women's Continentals 2026",
  "startTime": "",
  "servers": [
   {
    "name": "AVC Channel",
    "url": "https://live2.livefeedtextbox.com/live/channel33.m3u8|Referer=https://xl365.textliveupdaterz.com/"
   },
   {
    "name": "Chinese Taipei v Iran | 09:00 WIB | 21 Aug ",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FgzzPjSr/live.isml/.m3u8"
   },
   {
    "name": "Thailand v Australia | 13:00 WIB | 21 Aug",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FLg3lkPK/live.isml/.m3u8"
   },
   {
    "name": "Japan v Hong Kong | 17:30 WIB | 21 Aug",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FUuxeMHd/live.isml/.m3u8"
   },
   {
    "name": "Vietnam v Korea | 09:00 WIB | 22 Aug ",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/bMzlzue0/live.isml/.m3u8"
   },
   {
    "name": "Kazakhstan v Indonesia | 14:00 WIB | 22 Aug",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/cG2X784e/live.isml/.m3u8"
   },
   {
    "name": "China v Iraq | 17:30 WIB | 22 Aug",
    "url": "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/8tJUf4uc/live.isml/.m3u8"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "SEA V Cup Womens 2026",
  "startTime": "",
  "servers": [
   {
    "name": "SEA V Cup Channel 1",
    "url": "https://live2.livefeedtextbox.com/live/channel33.m3u8|Referer=https://xl365.textliveupdaterz.com/"
   },
   {
    "name": "SEA V Cup Channel 2",
    "url": "https://aspaltvpasti.top/Allinone/21811.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/21811.drm"
   },
   {
    "name": "One Sport PH",
    "url": "http://136.239.158.18:6610/001/2/ch00000090990000001083/index.m3u8?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BpiZhzOAmsfItUIS2UHXxD0ytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001173&contentid=ch00000000000000001173&videoid=ch00000090990000001083&recommendtype=0&userid=1797679327850&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=RCAJM4IFILAXXX&NeedJITP=1&JITPMediaType=HLS&JITPDRMType=NO"
   },
   {
    "name": "GMM 25 TH",
    "url": "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/25/25.mpd|drmScheme=clearkey&drmLicense=ae986b6dd3d84b2bb868c8765c604815:89bf3c85580249d5bac4d3edaec019ec"
   },
   {
    "name": "MOJI",
    "url": "http://157.15.187.3:25092/hls/50/50.m3u8"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "All Volleyball",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/volleyball.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "UFC, ONE, Smackdown",
  "startTime": "",
  "servers": [
   {
    "name": "CHAMPIONS TV FIGHT",
    "url": "https://aspaltvpasti.top/Allinone/20216.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/20216.drm"
   },
   {
    "name": "FOX Sport 2 Mexico",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd|drmScheme=clearkey&drmLicense=8836fb04d62dc64c9f8a39ef8640d5eb:d4f05ce56c5231b7cdf53455bea58621"
   },
   {
    "name": "UFC CH",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/8mxwjnh2te/out/v1/356704796c0c4bed81f67cd3518d0c8a/cenc.mpd|drmScheme=clearkey&drmLicense=a49085f8da5e65af1efff0edac830b1f:4659bc58a85c062e3fe0c039a446fe47"
   },
   {
    "name": "ONE FIGHT",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/kkfdbi2d1c/out/v1/a5b9b32dafd5499688240287ef8c9b90/cenc.mpd|drmScheme=clearkey&drmLicense=308006101c8fd0262c0f529319b9c127:37683aadc75b1450efa82d62c647984d"
   },
   {
    "name": "Tap Sport PH",
    "url": "http://136.239.173.3:6610/001/2/ch00000090990000001151/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqvuCQC%2BfGfSFGYE2TZKWpbytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001321&contentid=ch00000000000000001321&videoid=ch00000090990000001151&recommendtype=0&userid=1148739009053&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=Z6EHYVCYR3XXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO"
   },
   {
    "name": "TNT Sport 1",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "All Fight",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/fighting.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "MOTOGP 2026",
  "startTime": "",
  "servers": [
   {
    "name": "LIVE ONLY ",
    "url": "https://master3.s5stream.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/"
   },
   {
    "name": "TNT Sport 2",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea74888c042e1b"
   },
   {
    "name": "LIVE ONLY ",
    "url": "https://cdn.strea.ru/index.m3u8"
   },
   {
    "name": "FANCODE 1",
    "url": "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/b3b3fkmrbl/out/v1/1084d5c9a97a4c5b9f9554c88f486646/cenc.mpd|drmScheme=clearkey&drmLicense=82dfca238e8c4b430a3269db71965db9:a00b28caf4ac628e77a553d440c0ddca"
   },
   {
    "name": "Motogp Channel",
    "url": "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/wjeweupwyc/out/v1/8197c8e055c94a868623653ac55c10bf/cenc.mpd|drmScheme=clearkey&drmLicense=e03f302ec4dabcccca82cc9f76731ec9:53ea1027d2bf2893a552cf15bc0366de"
   },
   {
    "name": "SPOTV 2 PH",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed"
   },
   {
    "name": "SPOTV 2 ID",
    "url": "https://d2tjypxxy769fn.cloudfront.net/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=120.play"
   },
   {
    "name": "SPOTV 2",
    "url": "https://aspaltvpasti.top/Allinone/17140.mpd|drmScheme=clearkey&drmLicense=6d576b166f055e97c9371a30835d1d90:bab4a56701471429489ecb6fa02d4ebf"
   },
   {
    "name": "TNT Sport 2",
    "url": "https://next.kesufuk.workers.dev/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3j04z3pbit/out/v1/042ee0757ed348bf8c26f75895cae871/cenc.mpd|drmScheme=clearkey&drmLicense=0b59ce06de74ed84f2eda5e81dadba13:48e4ba4ad6c2a60d2bda5d71a0050844"
   },
   {
    "name": "SPOTV 2 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTV2NEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a3fab992070540f69551d9497a1499ab:6c48e33896b10978099f81ca0b454aff"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "FORMULA 1 2026",
  "startTime": "",
  "servers": [
   {
    "name": "LIVE ONLY ",
    "url": "https://master3.hdtvs2.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/"
   },
   {
    "name": "FANCODE 2",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/avqlywnuzx/out/v1/aefca6420f944a9482e117f315de535f/cenc.mpd|drmScheme=clearkey&drmLicense=1994b1df7dfd2e8a8d7b9bf3fb900285:22a1444b3da18e139191665b3d652835"
   },
   {
    "name": "TSN SPORT 1",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/7janu55dwc/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|drmScheme=clearkey&drmLicense=e51aa21f2a0fef9aabc120dfb655b52f:a12a987fe725a40b6be95cd84b15f689"
   },
   {
    "name": "TSN SPORT 5",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/jkcljgqbx8/out/v1/63bfa701559340f3a2a2cb1fccd24807/cenc.mpd|drmScheme=clearkey&drmLicense=e853333da2c9196ea11374634231bc45:de2e2dbe818d78dfad07d6cd9a4c63d4"
   },
   {
    "name": "TIPIK",
    "url": "https://c9851ec-rbm-hilv-fsly.cdn.redbee.live/L26/6b640fa2/a765d074.isml/dash/.mpd|drmScheme=clearkey&drmLicense=adca25b8779e4168a0cd710f59f61ccf:be5383ed3cd8079f4ffe78ad067f476a"
   },
   {
    "name": "F1 TV",
    "url": "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/duqbirmk0d/out/v1/40f53c7cbc95498db3afd081c377d776/cenc.mpd|drmScheme=clearkey&drmLicense=609d795905904705028ef54653019af7:2c791eb611e57a7d7f203022bc1b9ba3"
   },
   {
    "name": "Bein Sport 1 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48"
   },
   {
    "name": "ELEVEN SPORT 1",
    "url": "https://r.e.blueonline.tv/l/tvsmart/live/eds/Eleven_Sport_1/D11/Manifest.mpd|drmScheme=clearkey&drmLicense=69021095220f3c0eae9bc24215fd692b:eb58cfe0458ed0b48f7351fa3393ad59"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "World SBK 2026",
  "startTime": "",
  "servers": [
   {
    "name": "SPOTV 1 PH",
    "url": "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=c5e8a3927d414b609f286a3c5e1d7049:7c5edbd3d090bb6de9a9c3685defa959"
   },
   {
    "name": "LIVE ONLY ",
    "url": "https://master3.s5stream.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/"
   },
   {
    "name": "SPOTV 1 ID",
    "url": "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd|User-Agent=KLTRA-TV/2.0.0 - Velocity (Linux;Android 15) AndroidXMedia3/1.5.1&drmScheme=clearkey&drmLicense=3197f7f5086c4315af2b7a94bc9201cb:17462a74739ae0d9855705ffc2c0e1b5"
   },
   {
    "name": "SPOTV 1 SG",
    "url": "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTVNEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a9b08ce3328f467dac1c6ff03b4cf358:499e104ca0c44ebc78d601094001cd67"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "All Race",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/motorsport.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "NBA 2026",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/basketball.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Tennis Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/tennis.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Basseball Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/baseball.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Cricket Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/cricket.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Rugby Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/rugby.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Hockey Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/hockey.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "NFL Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/american-football.html"
   }
  ]
 },
 {
  "match": " vs ",
  "league": "Others Live",
  "startTime": "",
  "servers": [
   {
    "name": "Embed Utama",
    "url": "https://theoe7am.gk8bloud123lkitchen.sbs/id/others.html"
   }
  ]
 }
],
  all: [
 "https://vidsemar.pages.dev/terraluna/205.mpd|drmScheme=clearkey&drmLicense=f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,12d1c29c75cfee70288bd9933a5f510d:4a4b77352a6bd0a10546f3116690aa4d,ab520f3b1b06253b599a4e202d1e1ad4:1204ad83fae75e0afaddb5198bae95a5",
 "http://tvratu.my.id/nissa/index.mpd?id=205&type=dash|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/e930be336fed49e6b26a7554e113f7a4/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=9",
 "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016cd6e773b02392/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/",
 "http://filex.me:8080/live/3114654477/5787654467/302264.ts",
 "https://raw.githubusercontent.com/Cutsiffa/pl/refs/heads/main/Loc/Indos.m3u8",
 "https://vidsemar.pages.dev/terraluna/206.mpd",
 "https://tvratu.my.id/vid/index.mpd?id=206&type=dash",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h207/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2f1c4190dcf045c9aafc447d54ef7c91/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=22bd0016090143f795a275629a6e7a0a:cae11accebe3ca7535141d35f4d41a1d",
 "https://nextgenz.my.id/event/pidio/play.mpd?id=206&type=dash",
 "https://raw.githubusercontent.com/Cutsiffa/pl/refs/heads/main/Loc/Moj.m3u8",
 "https://vidsemar.pages.dev/terraluna/204.mpd",
 "http://tvratu.my.id/nissa/index.mpd?id=204&type=dash",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9e9aba7068ca4c7f8a73381bef5f8742/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=8",
 "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856c3db2cc016cd6e647532391/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/",
 "https://nextgenz.my.id/event/pidio/play.mpd?id=204&type=dash",
 "http://103.66.62.83:8000/play/a04h/index.m3u8",
 "https://video.detik.com/transtv/smil:transtv.smil/playlist.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/7a69cfc9e135493f87ac4efd63000429/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=6.play",
 "https://cdnjktbpid01.transvision.co.id/riutx01-1b04ad969ab2fc0fb50d5cbfbceab1d4/dash/VHJhbnNUVg/manifest.mpd|drmScheme=clearkey&drmLicense=f3841ff1c16144f8ba1e303430a66b5a:31ac91d00bbb4437830528fb00e6be07",
 "https://video.detik.com/trans7/smil:trans7.smil/playlist.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/0fd7b7d368bc44bc9b4dece20acc3e33/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=7.play",
 "http://157.15.187.3:25092/hls/42/42.m3u8",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=rcti",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/997ce8767b604fae9fce05379b3b8b3a/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=1.play",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=mnctv",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/d6b026ad50f14b7f9af5ddd5450007d4/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=2.play",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/b8b9b1d5f80f45649b4a3619291551ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=036e85de0bb448eeb21d39ab300da48e:4c6f9b15dfab2a169b2b78a498c4d77d",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/34d8dd29eb1d4eba931c7c5ab5f4be09/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=4.play",
 "http://beetv.my.id/stream/rctiplus.m3u8?ch=inews|Referer=https://www.rctiplus.com/",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/0a6c6b1534444ab4bd903af8761e6747/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=10.play",
 "https://beetv.my.id/stream/vd.m3u8?ch=antv",
 "https://iptv.lancartech.co.id/live/bombom/full/1.m3u8",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/f3df48faafaf4198a65b9763140fce30/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=12.play",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h40/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/b0eebcecfb12424cb5f3c3cdb239f3c1/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=87484c0b2a4c41b9b08249ef7817ad7f:ff4f3f232f747e5e7f616b4741fa5c32",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h10/index.m3u8?app_type=web&userid=lite&chname=RTV|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/3aefa03d32954b678e5faab6daa04b58/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=91dec6fd9fd84b879aacc027bf532790:588a2214bfb91fc0150b9ac2a745cef8",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h223/index.m3u8?app_type=web&userid=lite&chname=MDTV|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://iptv.lancartech.co.id/live/bombom/full/19.m3u8",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/fd4360b1c12c4375848c8f085fd51d41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=14.play",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h12/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/dafcaf8b26064ae7b27702088240b535/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=13.play",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h234/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/chunklist.m3u8|&User-Agent=Mozilla/5.0|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://op-flashcon-digdayaxenkoda.dens.tv/e6550891-6bef-42e1-bab9-13bf4af739ce/stream.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/77641c37b4834a9db823ec5137774973/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=994121840707471a920b2e65bdf21b7e:0033ae3118a0153ad05fc9a066a8805c",
 "http://tvratu.my.id/nissa/index.mpd?id=19046&type=dash|User-Agent=VidioPlayer/4.3.0-WITH_ADS",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/SINPOTVHD/mediampd/SINPOTVHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&&drmScheme=clearkey&drmLicense=27fe63a923084c12b0b05d33d204bdca:f9624ac728524e9fdf8e3a97018fe26d",
 "https://hgmtv.com:19360/garudatvlivestreaming/garudatvlivestreaming.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "http://tvratu.my.id/nissa/index.mpd?id=7432&type=dash|User-Agent=VidioPlayer/4.3.0-WITH_ADS",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h37/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://tvstreamcast.com/indonesiana.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://edge.medcom.id/live-edge/smil:magna.smil/chunklist.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h24/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/playlist.m3u8|&User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/fea2c4b90ae2472d891389eb8b95571c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5dfa046b3bf14866a143470d9c8dd74d:97e354284ee7a67e5dafbce04e17c4c0",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h17/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8",
 "http://103.148.44.38:8000/play/a03t/index.m3u8",
 "http://103.148.44.38:8000/play/a03t/index.m3u8",
 "https://d43tg978oium5.cloudfront.net/out/v1/8c2df39f9b2842fbb997b89378841ad9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=5.play",
 "https://cdnbal1.indihometv.com/atm/DASH/mncnews/manifest.mpd",
 "https://cdnjkt913.transvision.co.id:1000/live/master/1/000000008d1b3a72018dbfcd427f46ab/manifest.mpd",
 "https://ott-cdn2.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h19/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "http://157.15.187.3:25092/hls/49/49.m3u8",
 "https://cdnbal1.indihometv.com/atm/DASH/useesport/manifest.mpd",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/73b7057c72da4615888a11b02a6cbb3c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=aa00f320f06247dcaf8e3cea1fb07f44:6169dd042bb5e59d709272b614011bbb",
 "https://streams2.sofast.tv/ptnr-yupptv/title-FIGHT-TV-ENG_yupptv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/70e45fc8-1f6c-4492-ac26-9868f70f4e02/2bd799bd-71c3-4786-a5d6-c029c1420cba/0.m3u8",
 "https://ikoh.branck.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(unifi1)/master.mpd|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f",
 "https://ciancuk.kesufuk3.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(unifi1)/master.mpd|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f",
 "https://sghost.mobileads.uno/uni5/uni5.mpd?id=unifi1|drmScheme=clearkey&drmLicense=90c7eb5d66b442a9a591775cc1154bc9:4af842b9ad5315a01d7655b8b502196f",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd",
 "https://dms.redbull.tv/v5/destination/rbtv/linear-borb/personal_computer/http/us/en/playlist.m3u8",
 "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-hls.m3u8",
 "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-dash.mpd",
 "https://adp-mcu.mediaflow.workers.dev/dash/kingmcu.mpd",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/ekeomalvg7/out/v1/f63288f993e6470580623d7b9b45efb0/cenc.mpd|drmScheme=clearkey&drmLicense=7313f38125a3fefd00cf7d6567ff333b:87b49a0329febb10eef514fd0f044ee2",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/jsqfhask6w/out/v1/e70dcd0f1e684592a3db4bbe7feee0fa/cenc.mpd|drmScheme=clearkey&drmLicense=602f114e6caa09eb9ec0dc18d0b01cb0:0c433e2a2157f7c1e240ad7eac62d604",
 "https://amg27604-amg27604c3-amgplt0148.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg27604-amg27604c3-amgplt0148/playlist.m3u8",
 "https://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/master.m3u8",
 "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8",
 "https://amg17560-fcb-amg17560c1-rakuten-uk-4891.playouts.now.amagi.tv/playlist/amg17560-fcbarcelona-topbarcaenglish-rakutenuk/playlist.m3u8",
 "https://tvratu.my.id/vid/index.mpd?id=17938&type=dash|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760",
 "https://aspaltvpasti.top/Allinone/6685.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/6685.drm",
 "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=17939&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=d8810a06df6e5437aa378be1aef6a3d9:f9e0f84b886f7402738c2e201af9f4db,8912d41b6dc628229afa43a67cf2f3ac:1588e5fc9e30b995c81e661487b68265",
 "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=6686&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=d8810a06df6e5437aa378be1aef6a3d9:f9e0f84b886f7402738c2e201af9f4db",
 "https://v1dx.inisemar.my.id/cobaduarr.mpd?id=19404&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleCoreMedia/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=https://v1dx.inisemar.my.id/pidick.php?id=19404&type=drm",
 "https://tvratu.my.id/vid/index.mpd?id=6786&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=0368770b1b2a3b3b9377c75e32acd23f:2cdada53fa00b7b66518261ed587b2d9",
 "https://tvratu.my.id/vid/index.mpd?id=9182&type=dash|drmScheme=clearkey&drmLicense=654e3893f622a676cccd048d13b8d54e:fc272dd6b7945bcd562c186854b8538b",
 "https://tvratu.my.id/vid/index.mpd?id=9183&type=dash|drmScheme=clearkey&drmLicense=f5edbe4006617c5a576a61b592437469:b8c47aa4f0ff958aaac5e655845c7834",
 "https://tvratu.my.id/vid/index.mpd?id=20216&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=b8234540888aaac0b056c430f52f48bf:aaad1315f5d21d969518a0fb9a2b83cb",
 "https://tvratu.my.id/vid/index.mpd?id=20216&type=dash|drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.mpd?id=20216&type=drm",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=115.play",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://bintangstreaming.my.id/rcti_pro/index.drm?id=113",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/6f5596513af749c19d0bcdac013dda3c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=114.play",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2fcc58ccec8c45e9aa094fb980eb642d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b576e5f5f1bc4cbaa866e5b0face5a30:3377be6c3b5f688ebed687312c9b9d95",
 "https://slive.mana2.my/SpotvNow/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=119.play",
 "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e",
 "https://aspaltvpasti.top/Allinone/17139.mpd|drmScheme=clearkey&drmLicense=8d49b45de7ba8c8dfbd1fe04b874be34:b4f813a1e820bc55dbef9f2540adf49f",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTVNEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a9b08ce3328f467dac1c6ff03b4cf358:499e104ca0c44ebc78d601094001cd67",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV)/master.mpd|drmScheme=clearkey&drmLicense=5b593bd530f1403a8f3eb9b2cd9236c8:d07c6a7f0b37a4090341e6380ff85060",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=120.play",
 "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed",
 "https://aspaltvpasti.top/Allinone/17140.mpd|drmScheme=clearkey&drmLicense=6d576b166f055e97c9371a30835d1d90:bab4a56701471429489ecb6fa02d4ebf",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTV2NEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=a3fab992070540f69551d9497a1499ab:6c48e33896b10978099f81ca0b454aff",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV2)/master.mpd|drmScheme=clearkey&drmLicense=1af079fb8e1d43d890c1d804431ad84c:3dc40bc5aaf09af8b1572646a45b1242",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein1)/master.mpd|drmScheme=clearkey&drmLicense=d48b6088253c443eb94d27cb7828f707:e9776141f9e949273a072b0e035070ab",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd|drmScheme=clearkey&drmLicense=335dad778109954503dcbb21dc92015f:24bfd75d436cbf73168a2a2dccd40281",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48",
 "http://het109a.ycn-redirect.com/live/978480008877005/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein2)/master.mpd|drmScheme=clearkey&drmLicense=efa6ff1acefa43048e8b7adc21d98871:5d0f448b52a92035e3763c4a60275933",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/beINSportsHD2/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=9e9a4d58a8bb48019ec1589df652dd2b:8b1ba8fdf2c1a141322cd18564973bd4",
 "http://het109a.ycn-redirect.com/live/10011244/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=344d320ca45641a88cf002db351ed9a4:246cc6ee7ab235cb824ed3b904b7040b",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein3)/master.mpd|drmScheme=clearkey&drmLicense=816ee2f7c19f49ed84276f34541b465b:ca764a9973b6123a1112cffd3b32010d",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/beINSports3NEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=f8b328f4b7bd4ac5966f8a7d434536b7:9354e572eaedf7b9481cbe30776ae781",
 "http://het109a.ycn-redirect.com/live/161988840/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/2e55bc8199044c27b1dbb827af65a04f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=aef1823177ad40199de440504d992ad5:b95c919408eec7663214a9a67af831ba",
 "https://cors-proxy.cooks.fyi/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein4)/master.mpd|drmScheme=clearkey&drmLicense=d561ff976397473e9b456b44cdffcdd2:2b6cff42f7fae7e8bc32f3d5c62dc3c2",
 "https://anywhere.pwisetthon.com/https://ucdn.starhubgo.com/bpk-tv/beINSports4/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=b6addeb1135a4279b917e35c26d5b0f5:7f5599f34b2a49e23f98045a5a0f512a",
 "http://het109a.ycn-redirect.com/live/0103088447/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c48c8e48dba24420b5dcef9f5b847b12:daad0aeb165b9a26b706f2a261b8fafe",
 "https://anywhere.pwisetthon.com/https://ucdn.starhubgo.com/bpk-tv/beINSports5/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=7f8252e59f9b439cb89cb8628ced2443:4faba8fd3d200f9825dc29ca98d97e33",
 "http://het109a.ycn-redirect.com/live/115451004/index.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://bein-esp-xumo.amagi.tv/playlist.m3u8",
 "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd|drmScheme=clearkey&drmLicense=1a5df53609ebc9857898c490f4724918:77f62980d582ec541280796acf8b2d19",
 "https://simplitv-live.mdn.ors.at/live/eds/sky_sport_premier_league_hd/dash/sky_sport_premier_league_hd.mpd|drmScheme=clearkey&drmLicense=446af6dd9ec0395eaf5ab6adac2b8234:a70a5944e51312f5a045b1e81651d033",
 "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_PREMIER_LEAGUE_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/",
 "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_FOOTBALL_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/",
 "https://bbb.exoadash.com/TVD235/index.mpd",
 "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/IT_SKY_SPORTS_MOTOGP_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/",
 "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/IT_SKY_SPORTS_F1_LIVE/index.m3u8|Referer=https://mirror-2.kilat-live.com/",
 "https://dlhd.iclik.workers.dev/.m3u8?channel=SkySportsF1&play=1|Referer=https://www.ksohls.ru/",
 "https://simplitv-live.mdn.ors.at/live/eds/sky_sport_mix_hd/dash/sky_sport_mix_hd.mpd|drmScheme=clearkey&drmLicense=df41cd757f7033d3add1d5d7cc34b95a:9cf69ec5ff03809f65c5d7ef73aa538c",
 "https://rr4---sn-8pxuuxa-on.tvlivegoogle.vip/UK_SKY_SPORTS_MIX_TV/tracks-v1a1/mono.ts.m3u8|Referer=https://mirror-2.kilat-live.com/",
 "https://bbb.exoadash.com/TVD215/index.mpd",
 "https://bbb.exoadash.com/TVD224/index.mpd",
 "https://sky-nz.b-cdn.net/skysport1/master.mpd|drmScheme=clearkey&drmLicense=aefc2c8d1c8840f1b6981f856c9269ba:cf8ea114c45b4d6596b2748258ab74d6",
 "https://sky-nz.b-cdn.net/skysport2/master.mpd|drmScheme=clearkey&drmLicense=708a98b352bd4418a73a028edd84da8f:b1fa5c2bca4c4b57b924b748564532cb",
 "https://sky-nz.b-cdn.net/skysport3/master.mpd|drmScheme=clearkey&drmLicense=2e2636daa74141b68cc14882ea3ff82b:0961f48287324adbb4b7ff3c9d82b3c9",
 "https://sky-nz.b-cdn.net/skysport4/master.mpd|drmScheme=clearkey&drmLicense=278b8746b7c7410e901af0aa3774f037:15e1142d647b474ebbd49e41efa2a9d7",
 "https://sky-nz.b-cdn.net/skysport5/master.mpd|drmScheme=clearkey&drmLicense=fdd24dd2c6c14126ad7c1ad1066b03dd:08289c6d57d54e8d8dca55e1862afb82",
 "https://sky-nz.b-cdn.net/skysport6/master.mpd|drmScheme=clearkey&drmLicense=e87521b3dfa44ed9ba004012dcb89172:bba9734a9d724531bbab7ef5d64ca1f8",
 "https://sky-nz.b-cdn.net/skysport7/master.mpd|drmScheme=clearkey&drmLicense=af95024eda94455e922b90a39a3af93e:852e715ef4064b05b8e1cdee285648b5",
 "https://sky-nz.b-cdn.net/skysport8/master.mpd|drmScheme=clearkey&drmLicense=7a2758575dc04d63acc3573ab594d441:47071dd80de746a38cdc6a4dcde21abc",
 "https://sky-nz.b-cdn.net/skysport9/master.mpd|drmScheme=clearkey&drmLicense=72002c630e2343849984b5d3ec418162:ae6f8e3ff42a4963ae25686cca56c8e8",
 "https://sky-nz.b-cdn.net/skysportselect/master.mpd|drmScheme=clearkey&drmLicense=01d02c97d1c949f9877acd230dcaa56d:708410b8bf1f4e998931183e8fab5d1e",
 "https://tmaxapp.site/8wirwjs76erftg/tntsports1.m3u8",
 "https://tmaxapp.site/8wirwjs76erftg/tntsports2.m3u8",
 "https://tmaxapp.site/8wirwjs76erftg/tntsports3.m3u8",
 "https://tmaxapp.site/8wirwjs76erftg/tntsports4.m3u8",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea7d8808042e1b",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/dash/enc/5sxuux529k/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd|drmScheme=clearkey&drmLicense=1d96ab366bbe6451edf7407b58e2fa16:0116201f4a63ac5bf5787d2c610c41a7",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/pnu10tp36z/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd|drmScheme=clearkey&drmLicense=192b1115da041585c77200128549efa1:634e10efe4abbb14be400a3ccbac0258",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d",
 "https://otte.cache.aiv-cdn.net/gru-nitro/live/clients/dash/enc/cjglydxghe/out/v1/8977baf175da4b94873194613dd3fe55/cenc.mpd|drmScheme=clearkey&drmLicense=85b277daf5aae05833fe43a68f587968:d52d7e9bc0bcd98787efd547ac91eca0",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/lsibpqruq1/out/v1/748887d614a84913ba8bcdf3c82823e6/cenc.mpd|drmScheme=clearkey&drmLicense=d3250252765347a0c2603c6cb4869f8c:0c19319460da7e9ed816db46ce839b37",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cscevwljkq/out/v1/972185041b244140860b7d56398e9aaf/cenc.mpd|drmScheme=clearkey&drmLicense=385ceb9714b75e0cef61254f80b31002:18dce92a2891fee68d21ede5173230f8",
 "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/oboxe53wyo/out/v1/f7892a9d706d419a846d738fa22ea33e/cenc.mpd|drmScheme=clearkey&drmLicense=2fbdaa3bea0d0323ae011b318d1db716:8726ef7eaf5b9dce15fb6aa9f80bd53f",
 "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd|drmScheme=clearkey&drmLicense=8836fb04d62dc64c9f8a39ef8640d5eb:d4f05ce56c5231b7cdf53455bea58621",
 "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd|drmScheme=clearkey&drmLicense=11c8c1c2ef0385cf1e64d44bb9c3a395:5769730ffbdc4b2fd8945929d9ace063",
 "https://a151aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd|drmScheme=clearkey&drmLicense=9f327d24c66fbd84e15ab5c9ead7c7a4:83837185529c0c4048f81386c2d36426",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://video.beeline.tv/live/d/channel512.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=9839b170b4fc384f243bffd8929b71a2:34cdd6f3e1bf6a9f9d54e9165abf8c09",
 "https://video.beeline.tv/live/d/channel377.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=660a37a91aa00b7e2e0bc7dca349b982:3593a4a2bfbd7d9585efff083b769cf5",
 "https://video.beeline.tv/live/d/channel510.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=076fd3d5688d47758ecf14a8935827a8:257b7de78413814d67227f7a834aaf04",
 "https://video.beeline.tv/live/d/channel319.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=9145a6e0f778e61866f573d4944dd533:d02173d40515fea5c83944f21d0f3114",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c",
 "https://video.beeline.tv/live/d/channel318.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=2bb7b314771ed5eeddd8f44a9aa42740:01f2a8f11bd891655a752c1749f478ec",
 "http://video.beeline.tv/live/d/channel304.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=dadaa697622b0ad0083acc9b6dd0c294:beb4fbc34be9b1c5ff12964830002c89",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/uiffe4jhf0/out/v1/3534efafca8c4815adbb4d2e9a1fe003/cenc.mpd|drmScheme=clearkey&drmLicense=3dcfbec0e7146928baa55210bf2cb62f:bc85f74f815d9be5ae1dd6defaa05135",
 "https://a166aivottlinear-a.akamaihd.net/OTTB/sin-nitro/live/clients/dash/enc/inpyms8ezu/out/v1/1084d5c9a97a4c5b9f9554c88f486646/cenc.mpd|drmScheme=clearkey&drmLicense=065051b99bf5cf8d9a3bde5cbde6aaf9:214bd176832872339ce184338320f9a2",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/fdb3pubmek/out/v1/aefca6420f944a9482e117f315de535f/cenc.mpd|drmScheme=clearkey&drmLicense=7e9239c1982d984a002df3ed049d0756:1b8a17598129a3618535c8fb05f103fe",
 "https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd|drmScheme=clearkey&drmLicense=620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a",
 "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861",
 "https://messi.damitv.st/papi/ts/cbssn-usa/playlist.m3u8|Referer=https://damitvsports.com/",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://live.streaming.a2d.tv/asset/20465725.isml/dash.mpd|drmScheme=clearkey&drmLicense=a518c629bd683a4eba5f2a793bcb48d6:49642d2151ac6c3f8453bbfc4b3fdfc0",
 "https://live.streaming.a2d.tv/asset/20465728.isml/dash.mpd|drmScheme=clearkey&drmLicense=20f9a036eabc3930b2b1d124778090e6:b557b2e61b73935ef74bfa22d8ea2c34",
 "https://live.streaming.a2d.tv/asset/20465729.isml/.mpd|drmScheme=clearkey&drmLicense=6c2908a6d85d35fd9a33db46d6b157b2:2327be90af966a52a164cc46e18b35f5",
 "https://live.streaming.a2d.tv/asset/20465730.isml/.mpd|drmScheme=clearkey&drmLicense=729e43e22f86327ea9cbfd859b6e50e9:bbd3b6b123a10cb4cdfd79751f56b0af",
 "https://live.streaming.a2d.tv/asset/20465731.isml/.mpd|drmScheme=clearkey&drmLicense=4e30426a0a5c36359b1606dd7bc90937:508fb8a6038bf24a216c27e3efe3d9cf",
 "https://live.streaming.a2d.tv/asset/20465732.isml/.mpd|drmScheme=clearkey&drmLicense=08c544c527b93252a34932c4890903a1:86a3d7e41bd51161039cfc80d880c746",
 "https://live.streaming.a2d.tv/asset/20465727.isml/dash.mpd|drmScheme=clearkey&drmLicense=bd32ad608e8c35368dbb0acbfa94d8e0:957b32508fecaf1a7f842e9d89bc7537",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/4yiko4it8k/out/v1/b77dd424c745443aba2f3f88d418f797/cenc-sd.mpd|drmScheme=clearkey&drmLicense=9009b7189e3e68cc09d17811f2beb55a:dd3f96a94c909da48ff40c92aabf8cf3",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/6otiglnptp/out/v1/add7499679b0422cb6791f7701f95ecc/cenc.mpd|drmScheme=clearkey&drmLicense=902e5ec0e3d05e665daa32fc23f4f59e:7b2322a273843921a43e2c61dac7cae3",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/ubehitlwzo/out/v1/8e09c381a51f4366a19e979418112e8f/cenc.mpd|drmScheme=clearkey&drmLicense=a7d11d37a1f7611ee88d4db880171f32:68f96d618b0b956b008c445896a25a79",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/rgilyeubta/out/v1/09a67027b18f4fd78aaa3794a2aacfe8/cenc.mpd|drmScheme=clearkey&drmLicense=03f12d6a3dbfd3a6fa7dd7f6417e0c11:ea07b87acdf2e45be824cde4a1cf3504",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/ud6bnhthpj/out/v1/2639a2f4480f4269953de466d5f46463/cenc.mpd|drmScheme=clearkey&drmLicense=83f81c4cc1443991543de4e22eea7586:ddfd7ca653d6f35543d8edb3c688e20f",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/hubonmgf5k/out/v1/10560d92577e4917973aa4624124ecd6/cenc-sd.mpd|drmScheme=clearkey&drmLicense=45bbd582f220f438f896450d8306a3f2:582c6ba7f64bbc0f2d91c6b0c265760c",
 "https://aca-live1-ott.izzigo.tv/7/out/u/dash/ESPN-2-HD-H265/default.mpd|drmScheme=clearkey&drmLicense=faa2d2197cc44dc154650bbacb0dc238:9859d70c856660e20bbe6896f9cd3048",
 "https://vod-sev-orbit2-s2.izzigo.tv/out/u/startover/dash/ESPN-3-HD/default.mpd|drmScheme=clearkey&drmLicense=dc3c1a083eae593631b5b5019e2efb78:68693fb66dc31ca864d854cd176c44c6",
 "https://ncdn.telewebion.ir/sport1/live/playlist.m3u8",
 "https://ncdn.telewebion.ir/sport2/live/playlist.m3u8",
 "https://ncdn.telewebion.ir/sport3/live/playlist.m3u8",
 "https://ncdn.telewebion.ir/sport4/live/playlist.m3u8",
 "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_HD/manifest.mpd|X-Forwarded-For=38.60.252.162&drmScheme=clearkey&drmLicense=dcda1c0511c347f8b89c1821600426ac:dbc1d4d9244f8e7d01d999d4d9f53855",
 "https://livevlisctcdnw.seenow.vn/livesnv2/HAY_TV/manifest.mpd|drmScheme=clearkey&drmLicense=4e619c5b54494762b131f65fc34a885b:676d9f5a28d409d7d601514baa147c9d",
 "https://livevlisctcdnw.seenow.vn/livesnv2/BONGDA_HD/manifest.mpd|drmScheme=clearkey&drmLicense=f69bf028397e4ecfafce84abb7c5fe2b:25028aad0e2003b2785cf5196a4e2fa1",
 "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_TINTUC_HD/manifest.mpd|drmScheme=clearkey&drmLicense=cafb6e60c1504dfc858fd3dddc6fd20c:92061ffeb13f47c4d8879316dbc9521d",
 "https://livevlisctcdnw.seenow.vn/livesnv2/THETHAO_GOLF_HD/manifest.mpd|drmScheme=clearkey&drmLicense=5a323b53e0864492b0e04c70d591c564:843584bafaf2736c4fd1b76e1eee74d8",
 "https://livevlisctcdnw.seenow.vn/livesnv2/SCTV15HD/manifest.mpd|drmScheme=clearkey&drmLicense=a7c942778e874d43be92b8d0a0cd11b4:6d54358306571658ffdb952c6560688b",
 "https://livevlisctcdnw.seenow.vn/livesnv2/SCTV17/manifest.mpd|drmScheme=clearkey&drmLicense=a7c942778e874d43be92b8d0a0cd11b4:6d54358306571658ffdb952c6560688b",
 "https://liveh34.vtvprime.vn/hls/SCTV22/index.m3u8",
 "http://136.239.158.18:6610/001/2/ch00000090990000001083/index.m3u8?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BpiZhzOAmsfItUIS2UHXxD0ytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001173&contentid=ch00000000000000001173&videoid=ch00000090990000001083&recommendtype=0&userid=1797679327850&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=RCAJM4IFILAXXX&NeedJITP=1&JITPMediaType=HLS&JITPDRMType=NO",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd|drmScheme=clearkey&drmLicense=53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=f00bd0122a8a4da1a49ea6c49f7098ad:a4079f3667ba4c2bcfdeb13e45a6e9c6",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=b8b595299fdf41c1a3481fddeb0b55e4:cd2b4ad0eb286239a4a022e6ca5fd007",
 "http://136.239.173.10:6610/001/2/ch00000090990000001135/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BoP1uzasPUQtxzHrrWIYilSytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001282&contentid=ch00000000000000001282&videoid=ch00000090990000001135&recommendtype=0&userid=1603895214902&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=ZGWMVRUB2AQXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd|drmScheme=clearkey&drmLicense=59454adb530b4e0784eae62735f9d850:61100d0b8c4dd13e4eb8b4851ba192cc",
 "http://161.49.17.2:6610/001/2/ch00000090990000001127/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqqxWqB5I3LphK7WUAFquWrytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001293&contentid=ch00000000000000001293&videoid=ch00000090990000001127&recommendtype=0&userid=1446387897422&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=OY4RBOUL5WXXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO",
 "http://136.239.173.3:6610/001/2/ch00000090990000001151/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqvuCQC%2BfGfSFGYE2TZKWpbytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001321&contentid=ch00000000000000001321&videoid=ch00000090990000001151&recommendtype=0&userid=1148739009053&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=Z6EHYVCYR3XXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO",
 "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd|drmScheme=clearkey&drmLicense=eabd2d95c89e42f2b0b0b40ce4179ea0:0e7e35a07e2c12822316c0dc4873903f",
 "https://dash2.antik.sk/stream/nvidia_eurosport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_eurosport2/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://agile-ridge-02432.herokuapp.com/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport1_hd_live/sm_viasport1_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=a0e68f01a5428cbdb8cfac2080c66b20:556d72c812df452fad9bed66292bfc63,a0e68f01a5428cbdb8cfac2080c66b10:be7f9d1a00bbd0478335a4a48379157d",
 "https://warm-caverns-48629-92fab798385f.herokuapp.com/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport2_hd_live/sm_viasport2_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=b62aca5b566dc3ded74233192b28a120:e8c5369c9c4aa58c1c8489c7db52db8c,b62aca5b566dc3ded74233192b28a110:143bfe648cc9d14917d41e0662452771",
 "https://cors-proxy.cooks.fyi/https://cd-stream-live.telenorcdn.net/cdgo/sm_viasport3_hd_live/sm_viasport3_hd_live.isml/playlist.mpd|drmScheme=clearkey&drmLicense=10827657b810ae957f6adc178eca9c20:3f73e8c9b64b2972bd25859efef7e5ac,10827657b810ae957f6adc178eca9c10:ca8605499cbdc8e0d2f12898258f8f6e",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier1/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=d9df2aa9c4974ed3bbf0730defad68fe:0cac792b5d5ef9ffb24e324a52c3da0b",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier12/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=17e9c5d34f514dd3bce90fcc7deaeaa6:ab86716fe05961647a3713243e95dcd2",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier3/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=d02ff184351548eea3981c38b6f48d9b:42d56d760c19c180ceaf2e7ef512e5be",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier4/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=624bceaf2e78422c8ee1b8f31c638fb4:5223fbfd77b228f2f01e20358972850b",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier5/output/manifest.mpd|X-Forwarded-For=119.56.77.101&drmScheme=clearkey&drmLicense=549415570a894df19a2aaa524d035bb6:8cd102efa9e4feeb98b62b1e8b1f10a4",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier6/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=ecd1e866cc4e4bb1a230dda645081865:edaf41fe7af1249eef03bfac6e9ab632",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier7/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=ec361b73771546b3b42aadbd847d4ad6:bcb5a85c2236d319aff588fe280e0a35",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubPremier8/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=8453cc1161814eaab26bca37dc85e360:72c9a9cad5387966e5715eee5cc1a94b",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports1HDnew1/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=42a10a01419642de97ee025db907fccd:04173eabe97faf32a1697878f5bdb156",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports2HD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=fd72f19fac0c441b808996ea993d06d2:8f0be65b978ef60062b4c7dabb226a1d",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports3HDNEW/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=6cfb926f22184132a35ebf76f19595f1:ef9c426de14abc376edc1656c47875e6",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports4HDnew/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=9a29d4f3b6e540b3aa2f36927c01b6f4:57b670b45b5cb453a9f48fa975b702c1",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports5HD/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=14d1d427e8144c7b80cd5a8a6b9aa5e3:b3992507b4df8956717e3d5d798b7ab0",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports6/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=0bed9555084b4eaa9bfea62c3ca52871:ccac45f8beaf3eb8aafbd934d1791584",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports7/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=16f39f24603a4b9ea70fa22d91f55d29:bab7601e930f1d08ccfa005548dbbace",
 "http://iptv.flyin.my.id:8080/https://ucdn.starhubgo.com/bpk-tv/HubSports8/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=760126fc9c2640f8b32e647c0f43fa09:f139ce2dd6ebe611388fa8e175e99baf",
 "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw75168188_-627298088/PLTV/86/224/3221241590/3221241590.mpd?accountinfo=~~V2.0~qbcsJh_jU5C9BcZc959e_wae44b4867b3417aa76b5db2da20fe46c~KZzTWjB8qD1zdgbJjRPVLJX-tV0qiN9RBHC_iseGrsmTSRjj06oGDtGlpSCRGOwF3626cf085c08d024c7e4aafc18c32440:UTC,|drmScheme=clearkey&drmLicense=ef34ae91b4f2415e8439b2ad105e7488:243248d8de1ff8c7c587ee2057317523",
 "http://cdn.tv-rds.workers.dev/ZiggoSport1.m3u8",
 "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw266117884_-1972819316/PLTV/86/224/3221241560/3221241560.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7EOhA1DF4svOZppKxb-t-Ngw144cce44121c63284a33d5453493e5c8%7E1_Fmlu5PevHMYnEi9Z_HX2goKAd0VHSuxZMoIcAXcawYvG1meqGp2eQ2Ibhjvh7e59e7f6df3d57f23a32024ad67f0f19dc%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601013140%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601013140%2C3103_SP1V%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&_=1717205500296&RTS=1717205500&from=11&hms_devid=579&online=1717205500&mag_hms=579|drmScheme=clearkey&drmLicense=3cfa8625f650406ebf6a4d1ea737f572:0534e747c70b364aa7210e1bf3191df0",
 "https://mag02.tvx.prd.tv.odido.nl/wh7f454c46tw407556707_-381738111/PLTV/86/224/3221241511/3221241511.mpd?accountinfo=~~V2.0~yVi0dMX4icO5Ka9e92EQfg8812e1c1044f7d357066472e3ee99ef4~2dRB9E-vDtoAbYl169LbcJpxUgWVJtbeU_PlhGfNUflphvljOb5VaEhxruETYG9qcccaf5c5b655bf7504ed7ec5a1dd798f:UTC,|drmScheme=clearkey&drmLicense=4dbea4b5713a4aa1ae3a2544cd522fc7:a8323ea99b2d6200a48e1bc27322d548",
 "https://mag01.tvx.prd.tv.odido.nl/wh7f454c46tw523693457_1808344289/PLTV/86/224/3221241652/3221241652.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7Eu0jaHTa0MTNW18tBSpXw1Ad47f31195be578ee163e34a9e557d481%7E-tEuN4yI47Z49lA_lxVw3r26rEF-eIM-4N-YRBTnBjXeDlL3yoAcCSTfh367bmnJfe93264045ad9787422349ffe59c4e2f%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601013557%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601013557%2C3103_SP1T%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&_=1717205757900&RTS=1717205758&from=11&hms_devid=538&online=1717205758&mag_hms=538|drmScheme=clearkey&drmLicense=b5c04cfb6da84104ba5bbe51cd065b12:d96561be4819d3ed4e5f4f54015baaca",
 "https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw865586829_-819821292/PLTV/86/224/3221241610/3221241610.mpd?accountinfo=~~V2.0~LNS2PBO5tyhp5z1Pe6ObBA6cd7a4ec35c4492167b9376e6dff2932~BZw2dESHw-I1PQCFh9gGxCMvrIIzgMdYAe900qj8l6aoXUX9ahyR6I9EUIu7nDR4f4887615c83ea7a8cee6dd33137c4ebe:UTC,|drmScheme=clearkey&drmLicense=3fb40d85724942f994d86943f48021db:a6da8742502c8a2153067f5f2a70fb02",
 "https://mag01.tvx.prd.tv.odido.nl/wh7f454c46tw1024019879_757686866/PLTV/86/224/3221241521/3221241521.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7EURnD_afuosWHfY5OEqRXOwfa01c8ac56cf4511de39c2c4a3cab278%7EiVxKjbtf2gx_dYFqI-vt5C4Cu3COYDjZaw6C_kO2T2wm30fwo1ctD1gr_e2PrgTh48867c3177f3c34842031623cb2e06c9%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601014418%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601014418%2C3103_S1E2%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&RTS=1717206258&from=14&hms_devid=538&online=1717206258&mag_hms=538&_=1717206265600|drmScheme=clearkey&drmLicense=1a0ffa532aa2498490826e2f6a37f7c9:a8cec27bc7d47909c5b0d8f473b43e8d",
 "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561204/index.mpd|X-Forwarded-For=94.131.13.119&User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=032ba9e7db644873861490a3afc863d8:fd29ed4731ecafba696ac68cbe870008",
 "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561209/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=5fd3f407ea7c465b854db7cd8235b39b:0c2ad3408bb09f698e86e1ca2e26a888",
 "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/560502/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=f48a8131e05f4d6e84de19f086c781a6:fd28f2f966a906f4d4dcfd72ae90094e",
 "https://shortcut-edgeware.helio.lv/__cl/cg:EDW-Production_HTTP/__c/153_HTTP/__op/dash-default/__f/manifest.mpd|drmScheme=clearkey&drmLicense=76e9be4fab3e5816bce280f6ca3f73d5:344103b77cc9bcb1b4b5461b3071639c,7026b3c03cb15e7c90bb5d98d2918eea:66c6f85f004fb9936ed20733e5eae60c,f7839d964c5356be9acc7491cc721860:f84a6ee22df39731fdaa7b9e5c676dd1",
 "https://shortcut-edgeware.helio.lv/__cl/cg:EDW-Production_HTTP/__c/229_HTTP/__op/dash-default/__f/manifest.mpd|drmScheme=clearkey&drmLicense=a55253dc8ada542f9908892a16165207:b3271fd768a7650aa651d4a47e353c4f,f6062d0e8cf65e97a567e7395cb0d5d9:0864c690f302f8ad17a3358d842b0acf,318d2477980651e0aed4ad175955eae9:c238b596496635e74041b7b7730ad95b",
 "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561002/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=8ab2332442854e62b0018eec3ee58484:37fdee8b6eef5c96001e8c6fc47bfc08",
 "https://v4-kun-v13-cdn-02.live.cdn.cgates.lt/live/dash/561504/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=9552bcbabfbd4ac19744422143bfb875:e6daacaced7eba147d2b667441060a4f",
 "https://dash.antik.sk/stream/nvidia_ct_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_joj_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash.antik.sk/stream/nvidia_joj_sport_2/playlist_cbcs.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key",
 "https://dash2.antik.sk/stream/nvidia_rtvs_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_nova_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://bbb.exoadash.com/TVD2709/index.mpd",
 "https://bbb.exoadash.com/TVD2700/index.mpd",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=c3b32b23081b5486ae5176da9c358808:4708b352ee1d50ccdf94af9d2a952ed8",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_starz/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=f788e107fecdf189b157766bc4db084e:7f531e4eed5d07f5ae187c8807b40480",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_live/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=cc667cda2ff49c4500fdf1ad847d4fc0:13a48dc2c1257fd9a119b448de5225f6",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/sport_5_plus/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=b2148b62369126aee4ea1a6bdaea7ede:ddafd3d32662550e624a81b8bfc4ed09",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/one_1/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=3f9bd29c066a700e8b282c4a9dccf8eb:6e3314a39d06af5553a16b8550f0691e",
 "https://d1zqtf09wb8nt5.cloudfront.net/livedash/oil/freetv/live/one_2/live.livx?indexMode&dvr=7200000|drmScheme=clearkey&drmLicense=6f09c99d572d9c6d4d616521ee785460:12893b12e80c3c5dbaf6b4994c8432c0",
 "https://kuk1.modprimus1.cfd/kuk1/usergendx472snx93kdgwqrnd.m3u8|Referer=https://cool-tv.net/",
 "https://kudos111.terranovax1.cfd/kuk2/usergendx0ul2J8tsDx9lgcddwqrnd.m3u8|Referer=https://cool-tv.net/",
 "https://pulse1.zalmora1.cfd/kuk3/usergendxt1v8klq6rnd.m3u8|Referer=https://cool-tv.net/",
 "https://pulse1.zalmora1.cfd/kuk4/usergendlg1ks0t2n.m3u8|Referer=https://cool-tv.net/",
 "https://rohan116.ultronx1.cfd/puk1/usergenrx0cir27aq.m3u8|Referer=https://cool-tv.net/",
 "https://arwen1.panaka1.cfd/puk2/usergenrnd0clv03fyt.m3u8|Referer=https://arwen1.panaka.cfd/000/",
 "https://iron1.jarvisx1.cfd/puk3/usergenrx4t0l8sybkr.m3u8|Referer=https://iron1.jarvisx.cfd/000/",
 "https://galandriel1.thobias11.cfd/puk4/usergendx42x9qrnd.m3u8|Referer=https://cool-tv.net/",
 "https://galandriel1.thobias11.cfd/puk5/usergen0grnd3y8.m3u8|Referer=https://cool-tv.net/",
 "https://otte.cache.aiv-cdn.net/dub-nitro/live/clients/dash/enc/2jbycgm3g3/out/v1/066dd9325648468c9ecdc8b272370931/cenc.mpd|drmScheme=clearkey&drmLicense=84077d18bcf234a42de3745be106a87f:aee3069c062ec8ee6bfdd32985f287ef",
 "http://94.130.32.19:8080/sporttv1/index.m3u8",
 "http://znty.dyndns.org:5010/hls/stv1.m3u8",
 "http://znty.dyndns.org:5010/hls/stv2.m3u8",
 "http://znty.dyndns.org:5010/hls/stv3.m3u8",
 "http://znty.dyndns.org:5010/hls/stv4.m3u8",
 "http://znty.dyndns.org:5010/hls/stv5.m3u8",
 "http://znty.dyndns.org:5010/hls/sportv+.m3u8",
 "http://znty.dyndns.org:5010/hls/eleven1.m3u8",
 "http://znty.dyndns.org:5010/hls/eleven2.m3u8",
 "http://znty.dyndns.org:5010/hls/eleven3.m3u8",
 "http://znty.dyndns.org:5010/hls/eleven4.m3u8",
 "http://znty.dyndns.org:5010/hls/eleven5.m3u8",
 "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs18&isp=5",
 "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs19&isp=5",
 "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs21&isp=5",
 "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs22&isp=5",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd|drmScheme=clearkey&drmLicense=d7f3c8215a944e068b176c9d2a5f3048:93c0a798243d6443864d1a7ff3e42c05",
 "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/hbo.smil/manifest.mpd|drmScheme=clearkey&drmLicense=09ddfe3d63863cafaeb79d0546b098ab:3de0f38dcf014827dfd5bec38743c6a2",
 "https://cdnbal1.indihometv.com/atm/DASH/hbo/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBO)/master.mpd|drmScheme=clearkey&drmLicense=7ad888ee5dd6496a8c2c77a6284ff936:718716c435914901d2551930a256974e",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd|drmScheme=clearkey&drmLicense=3e8c5a917d424f06b2196a5c9e2d8043:516c47ccef00a12421d9805c8c1c6c1d",
 "https://cdnbal1.indihometv.com/atm/DASH/hbohits/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBOH)/master.mpd|drmScheme=clearkey&drmLicense=437a4a8dfb314f81883c7894c99e72bf:e95073f71af10f85067c5d8bc509f667",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd|drmScheme=clearkey&drmLicense=c6e4b9218f534a709d165c3a7e2f8048:87c0e7cf73324aea32dada7b5f33063d",
 "https://cdnbal1.indihometv.com/atm/DASH/hbofamily/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(HBOF)/master.mpd|drmScheme=clearkey&drmLicense=98e8255fae9b41aebb334645a916c82b:3b631ef06c2782808a6d53ff0e24d9e3",
 "https://player.asnger.my.id/bitplayer.html?file=https://unifix.astv-best.workers.dev/HBOF/master.mpd&key=98e8255fae9b41aebb334645a916c82b:3b631ef06c2782808a6d53ff0e24d9e3",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd|drmScheme=clearkey&drmLicense=74d8f5916c234b80a9179e5d3c7a2046:f8d2753ff54579efc01d3373acf21f96",
 "https://cdnbal1.indihometv.com/atm/DASH/hbosignature/manifest.mpd",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd|drmScheme=clearkey&drmLicense=d7a9c5215e364b809f148c2d6a7e3045:c92a3b4a7fe9fab97c130468260b963f",
 "https://cdnbal1.indihometv.com/atm/DASH/cinemax/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Cinemax)/master.mpd|drmScheme=clearkey&drmLicense=b83391c0f7c64142baa326b101c9f3d4:1ea53c247b115d6c3bb37a4d0485a37c",
 "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016cdbfc4a1934bf/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://player.asnger.my.id/dash_player.html?file=https://frmedia.bangme1990.workers.dev/https://frmedia.bangme1990.workers.dev/https://atemecdnbalancer-voe.sysln.id/live/eds/CinemaxHD/mediampd/CinemaxHD.mpd&key=b489136b34aa4166a9c9984f19155d30:2c6de796954779fd6f51584425ac834e",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd|drmScheme=clearkey&drmLicense=c7e5a2199d644b318f702a6c4e5d8139:300778996b5a71594db508982256f365",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/456143d3b12140e1a872b25f067ddb62/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=2b095c9946d242cb9108e6a589a26072:8bc2cdfd0e86f7cfa935ef05978be229",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(AXN)/master.mpd|drmScheme=clearkey&drmLicense=4345340d92d64788bef7d99594cbe643:c67f6e21ebbd520e31d4141b771d3867",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd|drmScheme=clearkey&drmLicense=d9a4f5218c374b069e156f2d7a3c8049:72aa902f471adf15bef2710b6b689ed0",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/010bb28c19b64975b318d3b00f58b18b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=d4126f7fd6134adfbedb3a0daefd7657:920f1adcca60069c887da7f1d225607d",
 "https://cdnbal1.indihometv.com/atm/DASH/ROCK_ACTION/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(RockAction)/master.mpd|drmScheme=clearkey&drmLicense=c64cf911505e42c8aa17869ae51206ba:2f3f5f1c609c1120216d4d72377d1ac2",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd|drmScheme=clearkey&drmLicense=86e5c7921a434f60b9287d3c9e5a6041:fab817af24eab2a73ae89145797cf556",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/4cae4723d4d54a7fb71020bd7939a202/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=a44cd51b688a458d97f534c286e58243:d62302543075463e472e23d7e947f10b",
 "https://cdnbal1.indihometv.com/atm/DASH/rock_entertainment/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(RockEnt)/master.mpd|drmScheme=clearkey&drmLicense=6bbe30dc7d7949849ba0c4f2abb2a3ff:9eb316564523faecf7d5b2fef8081007",
 "https://slive.mana2.my/DramaChannel/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/CitraMuslimHD/mediampd/CitraMuslimHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=f0bdfdef0f564819a2b43345b328f989:9f7555440fb310341ddb00cdbc638cea",
 "https://atemeshield1-voe.sysln.id/live/eds/CitraBioskopHD/mediampd/CitraBioskopHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=94788bc937054090b216dc101e5fa5dc:297c97962ff8d9e99f1da178ea0083ec",
 "https://atemeshield1-voe.sysln.id/live/eds/CitraEntertainmentHD/mediampd/CitraEntertainmentHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=05cb4bbd91e34d858f6921e7196f7795:da3e19311e3a3d147607971a101c8dc3",
 "https://atemeshield1-voe.sysln.id/live/eds/CitraDangdutHD/mediampd/CitraDangdutHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=44a4c73921ea4f5f90eaaaf793d3f7cf:3be319093fec8a409fe0553128089671",
 "https://www.cubmu.com/watch/live-tv/185-movies-news",
 "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c68572841ba301729cc464d33c0b/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/9ec31bcce34848d69d4771270ff23ab9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=be886ebe45024d4b80110269211b3adb:91b1858f34ece95c8377366fb87d99c4",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/e992e986a88346c18a5dcc4fbcdae6b9/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=33333f38930949b1af65b3361ad80d1d:b159847f9af0500738b01e91cf023e30",
 "https:///d84q7nw4qf3j3.cloudfront.net/out/v1/c70975aaa68d47f2a38799e6730a7816/index.mpd|Referer=https://www.visionplus.id/&drmScheme=clearkey&drmLicense=2bfc3e059a9f4176b835a15c9a0c0dac:265c00f7fd825ad3e092b56081953b60",
 "https:///d2xz2v5wuvgur6.cloudfront.net/out/v1/47c895ca72544fcfa4221c499b555a10/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c7b3852d9c84418f942923e41c31e633:ddb99755e0bebd98c92c7eab974bf161",
 "https:///d2tjypxxy769fn.cloudfront.net/out/v1/782400332c96440598260730a864bc6f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=1dc30f49888c4652897d9c998aa2cac1:8ccb6857157c1a01c5a47eb853f51aa2",
 "https:///d3b0v7fggu5zwm.cloudfront.net/out/v1/bde0a6d8d3fd4d77ae5093ad2e6699dc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5a6668f3a5d64338bce13307e5c570be:d0c76237c5ee38e7a420e9c83323023e",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_warnerhd/default1/default/index.mpd|drmScheme=clearkey&drmLicense=c4a8d5319e624f078b156d3c7a5e2049:cee9422b4a40d85589f36f1d76fb144f",
 "https://cdnbal1.indihometv.com/atm/DASH/warner/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(WarnerTV)/master.mpd|drmScheme=clearkey&drmLicense=6f4ea7be45af4275a8d76845fb19dba5:b02208ea61a2cdbf5b09440bc3157f04",
 "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856c3db2cc016cf0b533fe73e3/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/751a0982779f4edd904205eb351e220d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cfbae59795044563b5b9b4927a79a76e:ce57c9490bd772b390d78b9fedaf8d36",
 "https://live-channel4-cdn.visionplus.id/out/v1/45c0752c6b6b4397b80243ac9fed96fd/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0d9539db24004da9ac36ea49a09e255c:30304533b5008ad7f33c25f225506bc0",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/65432a4c12ca4a52abf473a0e41d7c7e/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=a04c73e95eeb411dabcba8c35a5a58e8:3f9195dc468d3372f69c6bec5bfa75bb",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=1f7c9a425d864e30b2198a3c6f7d5041:b392ee3cd42686a8cff3070eef614745",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Dreamworks)/master.mpd|drmScheme=clearkey&drmLicense=e8ce35ed8bc34772abedd63383aa11b7:1d2d76741e825e5c7babf597374b016e",
 "https://atemeshield1-voe.sysln.id/live/eds/DreamWorksHD/mediampd/DreamWorksHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=f08c30b7ee114399b72e77b0c099244b:a33d496875d04510a9b3116ba51ae65d",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/81cb1af2ea4d4842a94f1c83957b4cd2/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=398ef14ec7014ad8ae75414a7efd2a0f:99a6225691aa669f0f22677b4536705e",
 "https://atemeshield1-voe.sysln.id/live/eds/ZeeBioskop/mediampd/ZeeBioskop.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=70d0197a8aca42589cf5df6daa576d86:ebd47832fd7251a09e3cc8eb36790ad5",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeThi)/master.mpd|drmScheme=clearkey&drmLicense=bd7282e920e5437a9b1f01bc6f81795c:99763370f0763b0f7119aab091cc70c8",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeTamil)/master.mpd|drmScheme=clearkey&drmLicense=06e1831ba6f946568bdea62e67ca7317:f02c40d2006e036104f7726116861d7c",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeCinema)/master.mpd|drmScheme=clearkey&drmLicense=22fdfcf5cb304eb6b2ebbecbca9c9d10:b7c4f0ab8bc0bd4deabe73cf75dfa537",
 "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetv/default/manifest.mpd|drmScheme=clearkey&drmLicense=ed068cf84f0640ccbc7c0e395c0a272e:bb722190f2bb446391020411a7d0828b",
 "http://op-group1-swiftservehd-1.dens.tv/h/h18/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://cdnbal1.indihometv.com/atm/DASH/mykids/manifest.mpd",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Celestial)/master.mpd|drmScheme=clearkey&drmLicense=107e13b213a94a6cbb6d02c25653c083:044af5b9e0258e2d39437ee03365fd2d",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/fd25e662b7154c60a94f7c061573ba2d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=de4a383599bb4ec4a24f8c61f2b9a3ba:5166677d7f6797bcf459cf7c8b66dcb9",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(tVNHD)/master.mpd|drmScheme=clearkey&drmLicense=925fe1266db744a3b9524a23a6cc524b:d1266e747e241339a539e54f26890286",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/6dc5412d26ea4e65961c825d866f2a34/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=2e8cbd6f664b4ace966d3edfad94c18e:cff33777777f7e61078ae2ae41ed0636",
 "https://d21dxaer0ypwk1.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-a6m2cy2rylsvo-ssai-prd/54ac8e25_eb5a_4f10_ba20_ffb254f0a16c/hls/playlist.m3u8",
 "https://d2zyqoz1zsj2mq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-i9yul1lyegl6e-ssai-prd/6d07fe2a_003a_4879_acfc_44e3c3c10f03/hls/playlist.m3u8",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(tVnM)/master.mpd|drmScheme=clearkey&drmLicense=52480b6651c243e2b48b04ab3ecf05ec:aa3513df0bc2d949ee44c52204665d50",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/096d5cf064294e7ea3a7f59ee2899669/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=17fb563c784848f09d8a1ea88a2fa989:1d0bd94eab5d5f56a950b784d9345439",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kix_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=7f4a9c312e854d67b0198c6f5a3e7240:141f058ad1a6230e7c6f9d302ce378ef",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/7a50d44c0a154dd29880c3728fb49a56/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=85f74e4d84834605a4b01820091ea627:c2881a45f94ec6ecbec1303f4e3b1fd6",
 "https://cdnbal1.indihometv.com/atm/DASH/kix/manifest.mpd",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/6bdbe6ce7f034807aba5f09bed048b05/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=974d4fb195224f66a2271de806e62018:0e92ec1a28d59da80161c3541c6eb8eb",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Kplus)/master.mpd|drmScheme=clearkey&drmLicense=826e7fd2d6a14060bfea9347d96f8824:176897afb079e0cc76bc912df4cb0b6e",
 "https://cdnbal1.indihometv.com/atm/DASH/kplus/manifest.mpd",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/3c619ecc120b46e999d1eaa627cc544f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=3ffab3471a994535bdf7fc663792f08b:6e82876474df025c39ae804ba738ff17",
 "https://cdnbal1.indihometv.com/atm/DASH/thrill/manifest.mpd",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd|drmScheme=clearkey&drmLicense=b8c3d5906e424f17a9215d8c7a2e6043:02ce48f1b48f7cbdc3e2703a56e8fa31",
 "http://202.150.161.212:5000/live/channel35/playlist.m3u8",
 "https://www.cubmu.com/watch/live-tv/230-bioskop-indonesia",
 "https://cdnjkt913.transvision.co.id:1004/live/master/4/4028c6856fd0d66d0170341bf1000905/manifest.mpd|User-Agent=Mozilla/5.0 (Linux; Android 13; UltraBox Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/136.0.7103.61 Mobile Safari/537.36&Referer=https://www.cubmu.com/&drmScheme=clearkey&drmLicense=584638687655344f724d7330484e5552:34616c6b32476b4372427051716b4656",
 "https://cdnjkt913.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016d0555b83e37a3/manifest.mpd|Referer=https://www.cubmu.com/&drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/cinemaworld.smil/manifest.mpd|drmScheme=clearkey&drmLicense=ee7915564d7439d09bd3556ffccc87a4:b35e12a75a42a6f9184723a90ff42d9c",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b4a7b3289eff493d8700becf2e2a1157:bfbcfcb8137dd565a7f4b5ce7800c1f0",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/333a9658ed6a4424a92e319114fb7111/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=9e9d9ca2bb814de9bfd73d7c19bfe190:e8c178a885d1a1e042ca34ec5ea3b938",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/de93893d01e6446daaf052a7fec694fc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=07af9ce05d8f4960a1b9113e7fdb8e7e:12b66b374d9c804f7311cb6a8d421c8c",
 "https://atemeshield1-voe.sysln.id/live/eds/HITSNowHD/mediampd/HITSNowHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=26bfec0f1cb047d7963f37e1b6401ec0:60e2302b29cb9cabf7e1743fc2f0f059",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h70/wedotv_movie.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h68/wedotv_amor.m3u8?app_type=web&userid=lite&chname=wedotvAmor|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h69/wedotv_big_stories.m3u8?app_type=web&userid=lite&chname=wedotvBig_Stories|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h71/wedo_sport.m3u8?app_type=web&userid=lite&chname=wedoSports|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://agile-ridge-02432.herokuapp.com/https://ucdn.starhubgo.com/bpk-tv/SonyMAX/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=d9d97a893d1c42a3ab865f0ea5f85d87:fe1f21eda73955bf58f01cf5449cb289",
 "https://agile-ridge-02432.herokuapp.com/https://ucdn.starhubgo.com/bpk-tv/SonyEntertainmentTelevision/output/manifest.mpd|X-Forwarded-For=195.114.193.104&drmScheme=clearkey&drmLicense=11638fd3d4294a00a06a96752386c974:1631bf2a7e1c01aa9be0777798cbacbc",
 "https://cors-proxy.wangzhishi.net/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(SonyYay)/master.mpd|drmScheme=clearkey&drmLicense=582e9e382cb0495886afbabdbdb6fbf7:c0f550839b235443724cd007392b6e40",
 "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtv/default/manifest.mpd|drmScheme=clearkey&drmLicense=26df86eeebb04d7fbc45c948f76e81fd:5f3a23f1a73c4c96ababce5fffe7b06b",
 "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andpictures/default/manifest.mpd|drmScheme=clearkey&drmLicense=8dea532cabfe4f71ba20f62310e7949f:7a214a974e4f4d1d9bb66364d5f0cb92",
 "https://watchmojo-1-us.tcl.wurl.tv/playlist.m3u8",
 "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e",
 "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e",
 "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e",
 "https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd|drmScheme=clearkey&drmLicense=40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e",
 "https://ikoh.branck.workers.dev/https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(DuniaSin)/master.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=01a17625701e4734b02aa22c8657bd6f:975a483df422455dbc29a1d83ed6f154",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_1/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_2/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_3/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_4/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_5/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_6/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_7/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_8/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_9/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_10/dash.mpd",
 "https://b27a6dd8a86c3e4ba93fbae22aaaac64.pmqrop.channel-assembly.mediatailor.ap-southeast-1.amazonaws.com/v1/channel/FAST_11/dash.mpd",
 "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8",
 "https://bcovlive-a.akamaihd.net/ba853de442c140b7b3dc020001597c0a/us-east-1/6245817279001/playlist.m3u8",
 "https://5def33c73f084e11a19ca77697d6b413.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_AMCPresents/playlist.m3u8",
 "https://436f59579436473e8168284cac5d725f.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_RushByAMC/playlist.m3u8",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2649",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3054",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3527",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3533",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2152",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3058",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3056",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3053",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3434",
 "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8",
 "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00500-studiocitypictu-mytimefr-xiaomi/playlist.m3u8",
 "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Koreandramas2/default/manifest.mpd|drmScheme=clearkey&drmLicense=ed197e7253c04946903f03bad9afac91:99ebb8683ea74b70a9fda1cbdc2cc1b4",
 "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Shortstv2/default/manifest.mpd|drmScheme=clearkey&drmLicense=b994480f788d41ddbc805862ac469416:78a6a0fc1758483595da7113e58e4467",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=425",
 "https://a28dc5e3f24c4a8da3a67c68be729c2c.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-59-HIYAH-PLEX/mt/plex/59/hls/master/playlist.m3u8",
 "https://nl.utako.moe/neco/index.m3u8",
 "https://nl.utako.moe/wprime/index.m3u8",
 "https://nl.utako.moe/wcinema/index.m3u8",
 "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs20",
 "https://nl.utako.moe/dlife/index.m3u8",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/discovery/default/index.mpd|drmScheme=clearkey&drmLicense=d5a7f8219c364e50b2147f6d3a8c9025:c77d5e56c52c4065c42594422ac85e2c",
 "https://cdn4.skygo.mn/live/disk1/Discovery_Asia/HLSv3-FTA/Discovery_Asia.m3u8",
 "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd|drmScheme=clearkey&drmLicense=4e9a6c317d524f808b163c5a2e7d9048:5079e2288b584f47d4bbf8d149b2a986",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/HGTV/output/manifest.mpd|drmScheme=clearkey&drmLicense=c1ac1cd0128240e18b68f337fe871b59:372c1435914f835639e2595c0670b0ed",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/1ead6af29a8c4434a70db196b8628580/index.mpd|drmScheme=clearkey&drmLicense=0c75465966be494a8b685a3bc1fea5b5:81c825e32de24449c770d1a120606939",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/7e1cd32d1ec24845bf7bf3d9c60704e6/index.mpd|drmScheme=clearkey&drmLicense=83b7c942bf0c4a2d80a299426da2d764:5b1dd642b5a6317e00335eda59dfb07e",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/399aa25b71e84ab19a7d3261703c4a29/index.mpd|drmScheme=clearkey&drmLicense=aec51cf82ef14226a097a4ff91b7b32e:652bcaec397fb789fa5138fd3461333c",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/4e08e6a57a334d0bb1cb2fc80532861c/index.mpd|drmScheme=clearkey&drmLicense=1ffe9e9a5e6648e884d741b536d34e72:86dead7608ebf2d8028416add9b8769b",
 "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/37140e68f8124d45a0dc673d3a34af11/index.mpd|drmScheme=clearkey&drmLicense=561611703c4b4749973a73e7bb1d0af2:f90bd049ac3734d46fe66f89f02f1f0f",
 "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/8c6fa500258e44289312adb342b0f7ad/index.mpd|drmScheme=clearkey&drmLicense=b70a4c3a102b47ec832d11da8a024161:8bd84110abda56e41511c16feaa2de69",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/8da66660000f4c05921b166bb4cee65e/index.mpd|drmScheme=clearkey&drmLicense=5adc6dfdcbcf42638a64858190992fab:c036a7b9963ac34d89bbebe3ed071cc0",
 "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/94adcb14be98408cbda4b7b404e94fb4/index.mpd|drmScheme=clearkey&drmLicense=47c13253f2ed45318e5b6e5d799c5956:38ddb989dfb05091db949ce404de52e5",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/8ca49b4e0bec4bbb84f14c4f18e88697/index.mpd|drmScheme=clearkey&drmLicense=593adcf2ed594c2ba2aeee9539b43f5c:b47e01622b87a37374dae5fb3645e4a8",
 "https://abc-iview-mediapackagestreams-1.akamaized.net/out/v1/72481e65a40b49b59af9f49e29e7b352/index.mpd|drmScheme=clearkey&drmLicense=ceeaf88efed649d898646d151439b6bd:e35e2727d4d8618247c1b2f223ed9cfa",
 "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/f160f706ecde4707ac4003d17d5a17a8/index.mpd|drmScheme=clearkey&drmLicense=ab4a24725b1c47e7ae3c0f17ab020905:214f5979b5a30a0b3cda03085006a77f",
 "https://dash2.antik.sk/stream/hisi_ngc/playlist_cbcs.mpd|drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key",
 "https://dash2.antik.sk/stream/hisi_ngw/playlist_cbcs.mpd|drmScheme=widevine&drmLicense=https://drm.antik.sk/widevine/key",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd|drmScheme=clearkey&drmLicense=3c8e5a927d414b069f236a5c8e1d7049:a9b9198bf7b116b30492aea4dc471122",
 "https://s2129134.cdn.mytvnet.vn/pkg20/live_dzones/ap.smil/manifest.mpd|drmScheme=clearkey&drmLicense=ec6f072c7125377a9bc0ae61598095f4:1d5388e0781415ebcec9914f5ad75875",
 "https://login.bheem.tv/bpk-tv/22052/output/index.mpd|drmScheme=clearkey&drmLicense=8aaf27b53099505a8307b7df2f61b46c:83692149a2e59a8aae8e39ed6a1f6325",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/15500e8f0dc44058ba0431d39a8fed57/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=6c4190749d6f4b51bde2df71715e843b:9dfc9803c0fdbb1cd6df2188a6f29064",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/LoveNatureHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=e2a1e56e9f1e4f1d8fc4b129a4c6162c:a7e50888cdc875f51f23607c3c9a012e",
 "http://livestream.biznetvideo.net/biznet_adventure/smil:adventure.smil/playlist.m3u8",
 "http://livestream.biznetvideo.net/biznet_lifestyle/smil:lifestyle.smil/index.m3u8",
 "http://livestream.biznetvideo.net/biznet_kids/smil:kids.smil/index.m3u8",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/c169ca1dcbe249c5bf233aabc3db4a4f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=7efd32eb4765465c8a19aba6987770c8:733e8d3f4fb8f7ae021168d92f922645",
 "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8",
 "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00426-littledotstudio-realwild-tcl/playlist.m3u8",
 "https://wildearth-plex.amagi.tv/master.m3u8",
 "https://atemeshield1-voe.sysln.id/live/eds/TLCHD/mediampd/TLCHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=abac9e0bf2b448f8871145829c68a7fd:eebd1a86367df6c2c4aad70b7a6165a9",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd|drmScheme=clearkey&drmLicense=f4b7c8219e364a058d295c6f3e7a1042:d10c7f2a37c1079e6b83837423c0d6b2",
 "https://atemeshield1-voe.sysln.id/live/eds/FirstWarriorsHD/mediampd/FirstWarriorsHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=77555ed22f924e4b98620319e1de3739:2876649ccd9840346084c565d25f8f6b",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/FirstLifestyleHD/mediampd/FirstLifestyleHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=c45d2c72ab7e41f7b368a3a09dacfd08:72d5dd7b3d92a23d81317a04ac25271a",
 "https://atemeshield1-voe.sysln.id/live/eds/firsthighlight/mediampd/firsthighlight.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=a885301cc764406fb897bd2b2738e97d:eb3d733397cab652cfe62788ee6939e1",
 "https://d43tg978oium5.cloudfront.net/out/v1/873c24d3946048f68e459250f1d2fd98/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=483c71dd36fd45dd965321e8c568ba42:719598f53c998c618adf76a8f4f17fd1",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/FashionTV/mediampd/FashionTV.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=16ce4fb658cf41678c72cca871770da3:95509b2ad660b196310e93a0388a8a6b",
 "https://ftv1.b-cdn.net/bfdbb576-83f7-11f0-9f89-0200170e3e04_1000028043_HLS/manifest.m3u8",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/a90cb773466446b08595007bab12b920/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=62f0fb29203c45419e2ea683c5c365e6:10b227a6ea7d65628f025e41318b927c",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/8cf72e61626f4361a45c57ce6f2fdad8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=10bba49df37c42e78365a9995ca93f79:1d504b9bf2efa10d4d00058222b5020a",
 "https://d2gr3zenqo3tg4.cloudfront.net/out/v1/77d7eac1b90247ac9aa745bd2eb47fa8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c263b43be6b94fb682b1d701e0aaf847:83491ecbe2968e91ed563ce2c41428dc",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tech_storm/default/index.mpd|drmScheme=clearkey&drmLicense=5675d85ce6754ba6aa8f6acc4660f76f:140bfb365cf143c349f68699238a610c",
 "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856fd0d66d0170342015d30907/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856ea34e35016ef8e9fdf951c1/manifest.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/",
 "https://www.cubmu.com/watch/live-tv/265-dunia-lain",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/4e5b2a283adf462c8b6b55b2ef059fac/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=5709bc59805c4f23b000306efea48438:1772cf06c2f5dd3980a3245cd31fd356",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/7d38a4525dfa42b08a94c22c173061da/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0e7c10b448444c53904de46d1a30f427:d638c2cb75ff93d38b5ec8b6f5098dea",
 "https://cdnjkt913.transvision.co.id:1000/live/master/3/4028c6856c3db2cc016cdc51294b4f8e/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "http://op-group1-swiftservehd-1.dens.tv/h/h221/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "http://op-group1-swiftservehd-1.dens.tv/h/h236/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "http://op-group1-swiftservehd-1.dens.tv/h/h222/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "http://op-group1-swiftservehd-1.dens.tv/h/h244/index.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/FoodNetworkHD/mediampd/FoodNetworkHD.mpd|user-agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=6dc31ac1031242a8b0c37286acb66a37:648286167b494bf9ee122eced0e37de1",
 "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c68582449a2e0182597009c021ef/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c6858119921801816b5359d15e63/manifest.mpd|drmScheme=widevine&drmLicense=http://cubmu.adptv.workers.dev/",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/17c724036c5f4615bd0b8093126b5c44/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=0de1f882d278465abdba73a8b4cb2bda:7061f5e1115d6ef504726c3faa8bf146",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/44a2d1ab71a740babb233cf14832c59d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=9cf20a8618854bb8bf3b7891c6cb5606:7284d5c76c7f913632c715f3d5c5aa8a",
 "http://khano.nng.cloudns.us/live/m3u8/id/1de333734b1b7e0.m3u8|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/f16b53f0d5ed459da208c459049c9bb0/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=86e50e1506af46c780233c0091b67159:549788738d10df77094a0d4efaf0d567",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/744044c3985142399fbd466f9f3fd8fa/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=b2fdc5d5def7460a8dfb78492b66dd4f:a99645e65ce190e9556dda93be172cd4",
 "https://op-flashcon-digdayahd-1.dens.tv/h/h16/index.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 11; SM-A307GN Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/a8f14e34c687494fb1454b88742db085/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c2e6de6943ef47d08c2634a2df4bcece:badf619476b3bf0889ab545e8d3926f6",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9688c51b534d4165bf4b0b328e53b980/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=730bf9b6641f4ca597fd0d2903ffc574:293446fd53697862b165984b860fd7b0",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/980cfe26ff00479c97eb8057a1129c7f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=94f0b3d645c64f0dbe2e0990ec290cdf:0dc311915f9decffaf7dfee30c4d8482",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/099aba2d60b44679915cd56f303b975d/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=d856bf85229c4a42a7b0de45e4c91a31:5633e069ef585f73ccfe2dd6a85a6f48",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/7819c09ece974a7582eed4770bf60e65/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cf8d36bbfa904cb8a1c714dd74217cf2:97c0f4b08a496f8ab05e46f29a71c7c8",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/319544fbde164be4b023d62fcd116d14/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=cf8d36bbfa904cb8a1c714dd74217cf2:97c0f4b08a496f8ab05e46f29a71c7c8",
 "https://atemeshield1-voe.sysln.id/live/eds/SunnahTV/mediampd/SunnahTV.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=fcb8abc387174813b6a73d045a6850ec:f2064430890f44181aa58011ff73fa9c",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/Kairos/mediampd/Kairos.mpd|user-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=4e59e1e60b92407c972178c7959ec340:cdfcef62ac2b749f3e0d95c135647bac",
 "https://d2xx73ro32cip.cloudfront.net/out/v1/a61250017f23459692bf28a6841cf087/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=08e5cf90e8c04a7fa90f5c126768b239:b9406a99b9ea4b07149ecc582faf2613",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/623c771560e443f2920ea5be99016b7e/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=729e39db83984d58a23e16f2c05f915f:0d3871bf01b6d871c9882265fb78e8fa",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/96e20532df53449ab254f765073ec866/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=070756a16fd44081b6c2d64e40346b9e:d5fa9eaa7fd94f93d1b613d1ff0a5f91",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/96e20532df53449ab254f765073ec866/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=070756a16fd44081b6c2d64e40346b9e:d5fa9eaa7fd94f93d1b613d1ff0a5f91",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:tv1/manifest.mpd",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:tv6/manifest.mpd",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:berita/manifest.mpd",
 "https://d2idp3hzkhjpih.cloudfront.net/out/v1/4b85d9c2bf97413eb0c9fd875599b837/index.m3u8",
 "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/29/29.mpd|drmScheme=clearkey&drmLicense=96a14b36335645b391bbbb48c424fec7:e6971b27837a4822832d8215156bb516",
 "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/32/32.mpd|drmScheme=clearkey&drmLicense=4b2bff3e598043cfaf949305e3d153fa:545df84ff4c54af6b5385516e0f65956",
 "http://d84q7nw4qf3j3.cloudfront.net/out/v1/ab3ef0f0e4144c3c8b7e60f1873a3bcc/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=6f309276a94e45be89a8860159456e84:3fe2eec12885264556ca4e29aa6c0c40",
 "http://slive.mana2.my/AniPlus/index.mpd|drmScheme=clearkey&drmLicense=3dd653fc7aa1e3075b7f0233620df68f:8573791fa55bff03a3094ff559fc1407",
 "https://cdnbal1.indihometv.com/atm/DASH/indikids/manifest.mpd",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/703a71abac3844748b1e68166242d4f3/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=340ff241ff754b038f07096e17104cdc:839bdf4f1523661ba61df2dc219878a3",
 "https://tvratu.my.id/vid/index.mpd?id=8237",
 "https://atemecdnbalancer-voe.sysln.id/live/eds/CartoonitoHD/mediampd/CartoonitoHD.mpd|User-Agent=ExoPlayerDemo/2.15.1 (Linux; Android 13) ExoPlayerLib/2.15.1&drmScheme=clearkey&drmLicense=955574ee2b674f0fbbad818fb384c233:51d2893619bdd062fb4c0cdaafefbf27",
 "https://vidx.semar.my.id/biasa2.mpd?id=7052&type=dash",
 "http://opplextv.cyou:8080/nasir6160/nasir/350964",
 "https://www.cubmu.com/watch/live-tv/186-dunia-anak",
 "https://cdnjkt913.transvision.co.id:1000/live/master/2/4028c6856c3db2cc016cdc32eb0c439c/manifest.mpd|referrer=https://www.indihometv.com/&drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/27163af9499b4bcca2da96677b158efe/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=c1d5f77cd96049f78b6b253540b31722:ba8d0801fe81187d35633e1d3b3855d5",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/3fe6d9eb97ed455c942eb8d3d1c2c2e8/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=676b60c2b84b49b6b316207a590203e4:da9878a96062ea105895f310e052fa7b",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/8554b3cb938e44038093df2d65080932/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=780f283e8dd84dc195d93899ea9fcabe:59103ac45e9c5e411651e3fa26a2e6d9",
 "https://d84q7nw4qf3j3.cloudfront.net/out/v1/198f7febb48c4c909d62977d88c195b0/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=8b62ae389f0944d4a55daaad52de1f9d:ba145a1426491316010da87bfd69de05",
 "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856b8d2390016b9c3ee6c21d7c/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/",
 "https://www.cubmu.com/watch/live-tv/249-cartoon-tv",
 "https://cdnjkt913.transvision.co.id:1000/live/master/4/4028c6856c3db2cc016d144f21811dc9/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/",
 "https://www.cubmu.com/watch/live-tv/248-cartoon-tv-premium",
 "https://cdnjkt913.transvision.co.id:1000/live/master/5/4028c6856b8d2390016b9c47b6f01de1/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/",
 "https://www.cubmu.com/watch/live-tv/250-cartoon-tv-classic",
 "https://cdnjkt913.transvision.co.id:1000/live/master/100/4028c685840ff0490184560100c34363/manifest.mpd|drmScheme=widevine&drmLicense=https://cubmu.mediaflow.workers.dev/",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2a5668fb3b9f4e34ab7c02cdc6ef56db/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=736777e5823249849d71a7d41ddc35aa:f831235372e07e24fb70f7336291c549",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9041826689ae4f9c9619576d411fa989/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=clearkey&drmLicense=ec31647c5c3b490bbb5c840ca3e96c9e:a28271a4ba4d085efa1f7738e0f82ea1",
 "https://a77aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=be9caaa813c5305e761c66ac63645901:3d40f2990ec5362ca5be3a3c9bb8f8b4",
 "https://a79aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/ghf7y1plnj/out/v1/0c87bd17ab474015b77c0f3028190f78/cenc.mpd|drmScheme=clearkey&drmLicense=de9b995d2aba32bae1c5dbe38a46f2d9:a2d94fdff16e9c332164a73f8b170bd3",
 "https://a196aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/o7aqpbb6vv/out/v1/f8f6ef738ef24c4f8176d561ffb8a157/cenc.mpd|drmScheme=clearkey&drmLicense=6f0aeae5779f1dcaef23f0bfbc828220:7bcef3cf93de00e3daeb190d15b1ec05",
 "https://a116aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/rwcf8uax9l/out/v1/13ccaaacbe1143e69b7732fced73f0ab/cenc.mpd|drmScheme=clearkey&drmLicense=cc26110bb0d29d0e4452d42602846080:4a2e5782e26a3e2d7dd0431205c14518",
 "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8",
 "https://c.mjh.nz/abc-kids.m3u8",
 "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8",
 "https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8",
 "https://ebsonairios.ebs.co.kr/groundwavetablet500k/tablet500k/playlist.m3u8",
 "https://ebsonairios.ebs.co.kr/ebs2tablet500k/tablet500k/playlist.m3u8",
 "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50",
 "https://stream.ads.ottera.tv/playlist.m3u8?network_id=547",
 "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ee92e72fb286e0007285fec/master.m3u8?HasBahCa.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=bff27170-6307-11eb-b3fa-019cb96f121b&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=d1372261-d71b-427e-b9b7-e0afe4a6974b&userId=&serverSideAds=true",
 "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ff4b9ccf938f8000779eb99/master.m3u8?HasBahCa.m3u8?advertisingId=&appName=web&appVersion=unknown&appStoreUrl=&architecture=&buildVersion=&clientTime=0&deviceDNT=0&deviceId=79573c14-77dd-11eb-a61c-2f38487b60c0&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&sid=c4c4d3a3-dc88-49b4-9fda-30049d73b3f2&userId=&serverSideAds=true",
 "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?deviceId=0&deviceVersion=0&appVersion=0&deviceType=0&deviceMake=0&sid=dd4b&deviceDNT=0&deviceModel=0",
 "https://streamvididi.bonetvkoe.web.id/index.mpd?q=21746&ext=dash&x=1783436482&k=6b8dfd54bbf33bb90a6d6322eaccd8417c38ae3cc112d38d2470c84f2ed84aa1&sc=5184501|drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.drm?id=21746&type=drm",
 "https://stviptv.tvnid.workers.dev/21746.mpd|drmScheme=widevine&drmLicense=https://stviptv.tvnid.workers.dev/21746.drm",
 "https://tvratu.my.id/vid/index.mpd?id=21746&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://tvratu.my.id/vid/index.drm?id=21746&type=drm",
 "https://stream.sports3.win/iptv/live/signal-4610650-40415.m3u8",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://amg17560-fcb-amg17560c1-rakuten-uk-4891.playouts.now.amagi.tv/playlist/amg17560-fcbarcelona-topbarcaenglish-rakutenuk/playlist.m3u8",
 "https://streamx-hd.com/live2.php?stream=evento1",
 "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/f3c7b70e7b7870ee2cf820e948e56fcd/6A586E2B/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad",
 "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/fifa_ppv1/default/index.mpd|drmScheme=clearkey&drmLicense=603e4118f91f453282dc44850376aabd:be92f663ca1a10134a5b371ade386ccc",
 "https://teleamazonasb.cdn.mdstrm.com/live-stream-mp/dfzu2jckcs3he/a5e7a2777ea24b8ca49b326b536f87b2/6a0cd90eb3852427fcded197/manifest.mpd|drmScheme=clearkey&drmLicense=aa78205160ef4b5c972d5e815a8fe6e4:338b545591e45469e71dae3a8fb8dbb0",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d",
 "https://d1zqtf09wb8nt5.cloudfront.net/livehls/oil/freetv/live/makkan/live.livx/playlist.m3u8",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7",
 "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/",
 "https://otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d",
 "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8",
 "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1",
 "https://test.antmedia.io/live/streams/fajer_adaptive.m3u8",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://teleamazonasb.cdn.mdstrm.com/live-stream-mp/dfzu2jckcs3he/a5e7a2777ea24b8ca49b326b536f87b2/6a0cd90eb3852427fcded197/manifest.mpd|drmScheme=clearkey&drmLicense=aa78205160ef4b5c972d5e815a8fe6e4:338b545591e45469e71dae3a8fb8dbb0",
 "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/8b50c10ecf4fec84c30ec54f4b337053/6A5C7ED8/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad",
 "https://kltratai.hbx4.workers.dev/https://i.mjh.nz/.r/sbs-sbst.m3u8|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )",
 "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d",
 "https://d1zqtf09wb8nt5.cloudfront.net/livehls/oil/freetv/live/makkan/live.livx/playlist.m3u8",
 "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7",
 "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/",
 "https://usaprot.kesufuk3.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d",
 "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8",
 "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1",
 "https://test.antmedia.io/live/streams/fajer_adaptive.m3u8",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "http://107.150.60.122/live/cctv5hd.m3u8",
 "https://au-cdn-master.astv-best.workers.dev/tokenized/sbs.m3u8|Referer=https://player.asnger.my.id/",
 "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/8b50c10ecf4fec84c30ec54f4b337053/6A5C7ED8/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d",
 "https://unifix-cdn-my.serv-1001.workers.dev/https://live-aburayhan1113.telewebion.ir/ek/faratar/live/playlist.m3u8|Referer=https://player.asnger.my.id/",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d",
 "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8",
 "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://pildun.cob.web.id/hls3-lo/index.m3u8",
 "http://107.150.60.122/live/cctv5hd.m3u8",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=14eeabf30c14b7fbf3008c03099ce011:17d2ac8dbc5429bd70af3433aa12158d",
 "https://doccozk.blogspot.com/p/clajhhbvppr-plye.html?file=https://tencent-css.byteplaycdn.com/2013f54319e9a95f46ea37d910faab71/6A5D968E/Content/DASH_ENC2/Live/channel(tselwc2)/master.mpd|drmScheme=clearkey&drmLicense=618880fd141330378cf6aff5d48a252c:835e5fc97bfec870d8ac7e3d145e14ad",
 "https://cors-alx.astv-best.workers.dev/https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|Referer=https://player.asnger.my.id/&drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7",
 "https://s2.bufaloweb.com/bufalo9/index.m3u8",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=f6564ec2aee819046328a0e153be574d:ff46a8a1031eb27ef22576a077c98ab7",
 "https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8",
 "https://usaprot.bronx.workers.dev/otte.cache.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/qubxnja5rl/out/v1/4ef0db80aa3341e2babb58314541f1e0/cenc.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=c432184d1ab00475aded5731162d99b7:5f361ae2b35dcb415fe612ea7e85ed9d",
 "https://vs137.vcdn.biz/6aa0d03eb8d337c5a12c8275477af53a_megogo/live/hls/b/700_2490_4000/u_sid/0/o/229009131/rsid/15fbd560-a86a-45ca-8058-baf9f5f61c8e/u_uid/0/u_vod/0/u_device/cms_webandroid/u_devicekey/_site_mobile/lip/45.80.208.174*asn/u_srvc/84416/u_did/web_MjE7M10AtBKsWN3CHzhzNBgiG7LkULPx/type.live/playlist.m3u8",
 "https://agile-ridge-02432.herokuapp.com/https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master_2hr.mpd|drmScheme=clearkey&drmLicense=ce7ab3022e753307997f58afe001bac4:72d631a66e635c60829a0fe7705516c1",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://pildun.cob.web.id/hls3-lo/index.m3u8",
 "http://107.150.60.122/live/cctv5hd.m3u8",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=17938&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760",
 "https://freemiumkltratv.elutuna.workers.dev/index.mpd?q=6685&ext=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://freemiumkltratv.elutuna.workers.dev/license?q=6685",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=17938&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=21afccfca882b6fd029bfbf101b039c4:4178b215436eb40ec733adc233ff1760",
 "https://freemiumkltratv.elutuna.workers.dev/index.mpd?q=6685&ext=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://freemiumkltratv.elutuna.workers.dev/license?q=6685",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=113.play",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews",
 "https://live.fptplay53.net/live/media/vtv6/live247-hls-avc/vtv6.m3u8",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=113.play",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=gtv",
 "https://r-plus.sedotcw3.workers.dev/index.m3u8?id=inews",
 "https://live.fptplay53.net/live/media/vtv6/live247-hls-avc/vtv6.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011",
 "https://hd-stream.lxscore.com/live/default-103563.m3u8|referer=https://lxscore.com/",
 "https://live2.livefeedtextbox.com/live/channel7.m3u8|Referer=https://xl365.textliveupdaterz.com/",
 "https://hd-stream.lxscore.com/live/default-1847275.m3u8|referer=https://lxscore.com/",
 "https://aspaltvpasti.top/Allinone/21872.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/21872.drm",
 "https://iptv.lancartech.co.id/live/bombom/full/11.m3u8",
 "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc4MDA0MjAwNCwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3Nzk0MzcyMDQsIm5iZiI6MTc3OTQzNzIwNCwidHh3bXZlciI6MSwid21wYXQiOiJvQXJ3Q3Y4QiIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQ4fQ.Hr2BN7BgBZYvdEQrnG1wnRnLk1AzBL1FhZTDqjEiqAw/live/tencent-1/main.m3u8",
 "https://etslive-v3-vidio-com-tokenized.akamaized.net/stream/19354/res=720p/file/drm/dash/stream.mpd?hdntl=exp=1779537510~acl=%2fstream%2f19354%2fres%3d720p%2ffile%2fdrm%2fdash%2fstream.mpd!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2faac%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-720p%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-480p%2f*!%2fstream%2f19354%2ffile%2fdrm%2fdash%2f*%2f*-360p%2f*~id=199200209~data=hdntl~hmac=b27d36cf7bbd04aba37551cf7f175e1ba8b80cf3658987f941088de7ab47d51f|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3",
 "https://bosstv.asia/1bostv/TOKEN/19354.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTQ1MDEzNywiZXhwIjoxNzc5NDkzMzM3LCJyeiI6MzUxOTUzfQ.IKsawA2cJoOxTNHk__zwHW1TNXgGhHhFugmB69iSNEM|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3",
 "https://sczhetv.elutuna.workers.dev/1/zhetv.mpd?idx=001|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3",
 "https://sczhetv.elutuna.workers.dev/2/zhetv.mpd?idx=002|drmScheme=clearkey&drmLicense=95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,520a181530afd945b814e3b709f12a53:a98ea7ec85b79edf82e0b2b324301f64,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b",
 "https://sczhetv.elutuna.workers.dev/2/zhetv.mpd?idx=002|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-1&type=kltra",
 "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga2-1&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-1&type=kltra",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU5OV8x&ilang=id|iframe",
 "https://sczhetv.elutuna.workers.dev/1/zhetv.mpd?idx=001|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3",
 "https://bosstv.asia/1bostv/TOKEN/19354.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyMzgzNywiZXhwIjoxNzc5NTY3MDM3LCJyeiI6MjU5MTc1fQ.NEXGuIp7kfddEsEXmIAuwZY3T3wtyx9AFhhQcCGUtE4|drmScheme=clearkey&drmLicense=b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6,1c0033c80c75abfe916080f368f2f35b:8145a32fe0459d0b704bbae731d42729,ebfee30bc79d56b26625c791ba302cc4:0eb8b0f46b58a70523b398706be11508,906d0d9dbd51f20f1c1ec3554070a927:78682f48eba8e1921f95024587629b2a,7a8b52177b1f34f8ba99cdc48b46e716:24b391a266eb4893e65f7b4347701af6,1c0033c80c75abfe916080f368f2f35b:f887a15592c155338a9ae581d14972ede7a99dda2ac64389ad9a06f2c81dab408145a32fe0459d0b704bbae731d42729,df7ccb77d224ce6cbb2a4d0a3a863d94:acd254fae0d633ab051fe2748c1d8203,2cff6a455f311493d88e3c6e75a6029d:cbde61170000fec8f3b29199ed954325,415db37a5af6809ec3dd750094bedd0a:741110fa0a4e26081550ffdc25bd3c14,6a8b65c83036329e7185b9cd8cbdee29:0eb2beb5633f8e35cafab45af3d21de0,cf2bc98934d365f8d433fa300d3fd022:06ee25c43bf72b1467015975968d420e,1af8aa56af16ad7b0bc7347c5f0d1b8c:61a1d2e5bfae14466d995edb1e379d6e,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,ea020e30d8fcb03274fc9cd8fbf5c0b0:4253b03e2312c28c25e865190e558bf3",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1NV8x&ilang=id|iframe",
 "https://sczhetv.elutuna.workers.dev/3/zhetv.mpd?idx=003|drmScheme=clearkey&drmLicense=aa1cbd9b041069ae681f231f33f848e6:e65ec4587e191185f9437c86a922b563,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6",
 "https://sczhetv.elutuna.workers.dev/3/zhetv.mpd?idx=003|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-3&type=kltra",
 "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga2-3&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga2-3&type=kltra",
 "https://bosstv.asia/1bostv/TOKEN/21483.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNDgzMSwiZXhwIjoxNzc5NTY4MDMxLCJyeiI6NTAyODU0fQ.XcDwpueiCMAOhLIBR-hs9jVwAqEqDLNqWHUI2cdA6so|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/21483.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNDgzMSwiZXhwIjoxNzc5NTY4MDMxLCJyeiI6NTAyODU0fQ.XcDwpueiCMAOhLIBR-hs9jVwAqEqDLNqWHUI2cdA6so",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1NF8x&ilang=id|iframe",
 "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc4MDEzMTgzMiwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3Nzk1MjcwMzIsIm5iZiI6MTc3OTUyNzAzMiwidHh3bXZlciI6MSwid21wYXQiOiJvTkdOM3dzPSIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQwfQ.xNIvy4xMgLFrbX5koHvMN005J_3LCmXNvs2kDpwyZQA/live/tencent-1/main.m3u8",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTYwM18x&ilang=id|iframe",
 "https://sczhetv.elutuna.workers.dev/4/zhetv.mpd?idx=004|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=608ec7b4bb8ba4cf422c41807757402e:0167309e77845d8b26c38a213f691e1a,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b",
 "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-1&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-1&type=kltra",
 "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl1|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=608ec7b4bb8ba4cf422c41807757402e:0167309e77845d8b26c38a213f691e1a,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b",
 "https://bosstv.asia/1bostv/TOKEN/19384.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTEzMywiZXhwIjoxNzc5NTY4MzMzLCJyeiI6MTk3NTg2fQ.wVb4AZZyIriBEV5eITgPBd_BCFRNSSaO5Hl-tLuKt-A|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19384.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTEzMywiZXhwIjoxNzc5NTY4MzMzLCJyeiI6MTk3NTg2fQ.wVb4AZZyIriBEV5eITgPBd_BCFRNSSaO5Hl-tLuKt-A",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU1OV8x&ilang=id|iframe",
 "https://sczhetv.elutuna.workers.dev/5/zhetv.mpd?idx=005|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6",
 "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-3&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-3&type=kltra",
 "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl13|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6",
 "https://bosstv.asia/1bostv/TOKEN/19385.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTE5NiwiZXhwIjoxNzc5NTY4Mzk2LCJyeiI6MjI4NDk0fQ.92ingyqPDK5LiVgeu0Tfcf7uP3O5mJFAT8hOjYnfmSs|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19385.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTE5NiwiZXhwIjoxNzc5NTY4Mzk2LCJyeiI6MjI4NDk0fQ.92ingyqPDK5LiVgeu0Tfcf7uP3O5mJFAT8hOjYnfmSs",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTU0N18x&ilang=id|iframe",
 "https://sczhetv.elutuna.workers.dev/6/zhetv.mpd?idx=006|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6",
 "https://vidx.bassandy.workers.dev/PunyaKltratv.mpd?id=liga1-2&type=kltra|drmScheme=widevine&drmLicense=https://vidx.bassandy.workers.dev/PunyaKltratv.drm?id=liga1-2&type=kltra",
 "https://netx.pisionpluss13.workers.dev/PunyaKltratv.mpd?type=dash&id=vidxl12|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,b161cfd41e769de17d4d05fa1bc550ee:e42c45e513b5e4759dce9d6255574b6a,95ce44d5a83e795293e562e4676c692c:56d5e4e92e3b3a482fb83a24c510c1fa,bb336636230208f90b2b7a3b5ee742d8:5821acf3d53ba5e59602d840b03896eb,cf6e7a8de12581fd3712110af6def756:bb4707446432edfd6b57f675e6d46218,3306c3bbb9e2bb33dded2230f5013bdd:d4ccb7c4f85b4d08b79bdc2a5e35d1e6,60b2e5269e9d1bc2fbb29afb5081dc08:1dff5b2331511f2acbf42a9688c60e2b,81dc256adac12db58a502742de75abb4:236057d85c7b92215485a52cee45b8b6",
 "https://bosstv.asia/1bostv/TOKEN/19386.mpd?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTI2MCwiZXhwIjoxNzc5NTY4NDYwLCJyeiI6NDEwODU0fQ.RIaHXcf3RxO3Ff-HzpuZKUinHCmo5w-JalXUTPYLKTQ|drmScheme=widevine&drmLicense=https://bosstv.asia/1bostv/TOKEN/19386.drm?kamu_mau_ngapain_goblok_sengaja_selama_ini_tidak_aku_token_itu_mau_tes_server_dan_lain_lain_eh_gak_taunya_kamu_pakai_bertanda_kamu_tololya_tidak_bisa_buat_script_vidio_non_akun_kasihan_sini_pm_wa_ku_kasih_free_daripada_modal_comotan_terus_nih_wa_ku_639551630010=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVmlld2VyX00zVSIsImlhdCI6MTc3OTUyNTI2MCwiZXhwIjoxNzc5NTY4NDYwLCJyeiI6NDEwODU0fQ.RIaHXcf3RxO3Ff-HzpuZKUinHCmo5w-JalXUTPYLKTQ",
 "https://zac01eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDIyOTY1M18x&ilang=id|iframe",
 "https://vidx.bassandy.workers.dev/PunyaKltra_tv.mpd?id=liga2-2&type=kltra|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=e5b5971e258473c3212b2a66e2bb70eb:d5a085b36437b8216851cb1483ca4abd,f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d",
 "https://netx.pisionpluss13.workers.dev/PunyaKltra_TV.mpd?type=dash&id=vidxl2x|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=e5b5971e258473c3212b2a66e2bb70eb:d5a085b36437b8216851cb1483ca4abd,f6b8e18314b60c5fbf131ff094d0f506:c6c0c99ac927ac2d9728e1fcbe618cf4,122f71256201ba13e0cc26a88ad86ae7:25bbe7943964f5208f29bc8d1c991460,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d,9b62f1b96fbb7da6782061dca7158481:1f1cf255f6aed03a22250bf69b00b20d",
 "https://raw.githubusercontent.com/Tboys88/tboys88.github.io/refs/heads/main/2ligalt1.m3u8|Referer=https://zac01eo.mpipzni2naturally32kistomach.ru/&User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
 "https://tencent-1.vidiostream.com/wmt:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlblNlc3Npb25JZCI6IiIsImV4cCI6MTc3ODgzMTU3MCwiZnJhZ2R1cmF0aW9uIjoyMDAwLCJpYXQiOjE3NzgyMjY3NzAsIm5iZiI6MTc3ODIyNjc3MCwidHh3bXZlciI6MSwid21wYXQiOiJvRUVtQmd3PSIsIndtcGF0Zm10IjoiYmFzZTY0Iiwid21wYXRsZW4iOjQwfQ.tfR-r94oT2yLEiPCj2-Z4D14AQ3b0yYcjqn0-oKrN3A/live/tencent-1/main.m3u8",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|Referer=https://www.visionplus.id/&drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://raw.githubusercontent.com/Tboys88/tboys88.github.io/refs/heads/main/b2.m3u8|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
 "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011",
 "https://tglmp02.akamaized.net/out/v1/3170252e3fb0453085f2f4b0f8401a6b/manifest.mpd|&drmScheme=clearkey&drmLicense=60dc08aae52f4c0b806a8e43f24a12c8:30d5b579966d822b215ec51a91d8a271",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://mega.z5cable.com/bpk-tv/espn_3_hd/default/index.mpd|drmScheme=clearkey&drmLicense=0c39778fe8fb4f9f8574016b3d4ae2ed:232b1f450f2e37f47fdd5b678a8a546d",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://tvku.family/Vis1/index.mpd?id=1011|drmScheme=widevine&drmLicense=https://tvku.family/Vis1/index.drm?id=1011",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://sgclient.duckdns.org/source/tv360.mpd?id=9868|drmScheme=clearkey&drmLicense=3b0f9e1892864641aa17f02b2e7b0b2d:6c06f96a6296d05442466d5b09e58192",
 "https://arwen1.panaka1.cfd/puk2/usergenrnd0clv03fyt.m3u8|Referer=https://arwen1.panaka.cfd/000/",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae",
 "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea",
 "https://ncdn.telewebion.ir/varzesh/live/playlist.m3u8",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/62qdkefv9f/out/v1/f7d5b356e048494a8325563e8916d50b/cenc.mpd|drmScheme=clearkey&drmLicense=fd86dde0ae3e14ff51c8fc8f248a50db:d106ae78b0893da2e4393ece99420baa",
 "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea",
 "https://ncdn.telewebion.ir/tv3/live/playlist.m3u8",
 "https://stream.streamoke.net/live/sd-6Mwe5ZtfDBdC2JZYsf/main_stream.m3u8|Referer=https://stream.livenobarseru.com/",
 "https://stream.yultech.online/hls/live/sd-6Mwe5ZtfDBdC2JZYsf/index.m3u8|Referer=https://stream.livenobarseru.com/",
 "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/32/32.mpd|drmScheme=clearkey&drmLicense=4b2bff3e598043cfaf949305e3d153fa:545df84ff4c54af6b5385516e0f65956",
 "https://ssai-streaming.thairath.co.th/bamm-csai/480p/index.m3u8|Referer=https://www.thairath.co.th/",
 "https://live.happywatch99.com/btv/0c00b89a106bb365ec031b28fa3ae499.sdp/chunks.m3u8",
 "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://live3.egmdispatch.com/live/71422648_dc7b97661fc364ed335c87c248b22332_autoChange.m3u8?auth_key=1781030880-0-0-6f3ffc2f3390ae908fc0572917ed8cc4",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7",
 "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://live4.egmdispatch.com/live/71865704_255b00c8c26817c16445898cafc2ce4e_autoChange.m3u8?auth_key=1781030880-0-0-f392ea225d1c4fce53207288ad2fb207",
 "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwODYzNF8x&ilang=id|iframe",
 "https://live.egmdispatch.com/live/71814446_b6b1c24c1b749793d3f090c24c448883_autoChange.m3u8?auth_key=1781029652-0-0-9a606769f16191a553a0fa3e818bdd09",
 "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwNDAyNV8x&ilang=id|iframe",
 "https://live1.egmdispatch.com/live/71960924_23d921463083fd332992c4eca17d8d60_autoChange.m3u8?auth_key=1781031784-0-0-1cd347368105ddb303e0157838c27d44",
 "https://d2xz2v5wuvgur6.cloudfront.net/out/v1/6f5596513af749c19d0bcdac013dda3c/index.mpd|drmScheme=widevine&drmLicense=https://boti.my.id/saya.suka?id=9999&type=fitnah",
 "https://live4.egmdispatch.com/live/71961326_ca3ee93d19fad8328517c1ee375b194d_autoChange.m3u8?auth_key=1781035076-0-0-e57b2b8c5f6f2510d811bdb9408680d6",
 "https://stream-secure.lrt.lt/plius/stream01/streamPlaylist.m3u8",
 "https://stream-secure.lrt.lt/plius/stream02/streamPlaylist.m3u8",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae",
 "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea",
 "https://live1.egmdispatch.com/live/71527260_c9b22d1d811143d32428f737382a9479_autoChange.m3u8?auth_key=1781038789-0-0-73b7561dc58881e51a941033a1fd5cb8",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://fta3-cdn-flr.visionplus.id/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd|drmScheme=clearkey&drmLicense=911e72adf36946afbdbb4f80782a8394:08aec548a851ba64b7172ae7f05cb91c",
 "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd",
 "https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd",
 "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8",
 "https://imn-live.esite-lab.com/hls/iraqia-sports-1.m3u8",
 "https://zac07eo.mpipzni2naturally32kistomach.ru/id/player.html?mdata=NDQwNDAxOV8x&ilang=id|iframe",
 "https://otte.live.fly.ww.aiv-cdn.net/gru-nitro/live/clients/dash-sd/enc/rkhugudynd/out/v1/f7763e695c3b469594ed89fa163ebf0c/cenc-sd.mpd|drmScheme=clearkey&drmLicense=eaea45512d137def15b209a089cafd14:8d42db746ed0c4df61729b0d68d42bd7",
 "https://fta2-cdn-flr.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd|drmScheme=clearkey&drmLicense=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea",
 "https://ncdn.telewebion.ir/tv3/live/playlist.m3u8",
 "https://dash2.antik.sk/stream/nvidia_sport2/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae",
 "https://fta4-cdn-flr.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd|drmScheme=clearkey&drmLicense=4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://dash2.antik.sk/stream/nvidia_ct_sport/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleCoreMedia/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chromecast/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://cc1.screenistream.xyz:8080/stream/257/index.m3u8?token=T4Nz6WCt2Uwlqma4",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://cc1.screenistream.xyz:8080/stream/236/index.m3u8?token=T4Nz6WCt2Uwlqma4",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd|drmScheme=clearkey&drmLicense=09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae",
 "http://188.225.31.197/bpk-tv/000003038/tve/index.m3u8",
 "https://streaming.cdnx-sportnobar.xyz/live/sd-6MtMdmmDeQtRYY1JEZ.m3u8",
 "https://streaming.cdnx-sportnobar.xyz/live/sd-6MtMdmmDewf9jFa8P7.m3u8",
 "https://a123aivottepl-a.akamaihd.net/gru-nitro/live/clients/dash/enc/m7duvnk2bu/out/v1/d1ad69118b5647309b1eb7213affdb3d/cenc.mpd|drmScheme=clearkey&drmLicense=4bbcff3289d457b4dd5dbdd21221de9a:c4906b9a9f8dda3c0725bddb8c497733",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play",
 "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(80c74968-a2ef-4005-8661-045fe97408a8)/master.mpd|drmScheme=clearkey&drmLicense=4e126297fc7af35c736bdffe98eecaaa:fdb0091cf67d9c596dbfb07cf6f4c8f5",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://digitalotthub.com/tv/toffee-by-maruf/live.php?id=sony_sports_2_hd&e=.m3u8",
 "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea74888c042e1b",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05",
 "https://ratuvidio.adptv.workers.dev/index.mpd?id=6299&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b",
 "https://pnowlive-a.akamaized.net/live/rtlhd/dash/rtlhd.mpd|drmScheme=clearkey&drmLicense=57e48b99f3f6d4f13f5c5afdcca084ca:29379a5e2d3405fad2f5d9cbe92586c3",
 "https://bosstv.asia/1bostv/6299.mpd|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b",
 "https://ratuvidio.adptv.workers.dev/index.mpd?id=6299&type=dash|User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e",
 "https://gangbangbonetv.lampasioagus.workers.dev/index.mpd?id=6299&type=dash|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=27df7de969fbb319605be693e9aa65ed:4d38a401cc9e76fe8660f40362468c4e",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fsu3wl2rwb/out/v1/be61206c04e643349d53fb22301f3b50/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://live.kinxie.com/live/72221154_6f7b6a3ad6e3be83540c44e4585be9b3_autoChange.m3u8?auth_key=1787353255-0-0-c22baa1f3bd4ab9e7ae53518c12587d8",
 "https://hls.live123.fans/live/4558449.m3u8",
 "https://crimson-cloud-807f.kamrukhanchy.workers.dev/1201183/index.json?&e=.m3u8",
 "https://volder.timst.cfd/main/secure/966ede7659f94452fd1151cab2bf4c4714b0dcc09a45e534560dd9c00e90a726/1787343792/usanetwork-usa.m3u8|Referer=https://cdx-08192.website/",
 "https://volder.timst.cfd/main/secure/f9370f7a887e2439ad8a2764847d41f341fa2564e6b882f4abc1b6c41f4d1dc6/1787343857/skysportsmainevent-uk.m3u8|Referer=https://cdx-08192.website/",
 "https://volder.timst.cfd/main/secure/e1c0e0ee86c130a53009acfb4b4f72b39a20c69ce6d6358b25500aafe2f3e261/1787343938/starhubpremier1-sg.m3u8|Referer=https://cdx-08192.website/",
 "https://volder.timst.cfd/main/secure/042414a5e2848aad0577101a8ed144d7ca1c11a307876d2f273dee5854054eed/1787343916/astropremierleague-my.m3u8|Referer=https://cdx-08192.website/",
 "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd|drmScheme=clearkey&drmLicense=cb004fb100bd92f23793562891e3236b:b3e4e74ae2080b137e68bbd0ef8a7e05",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd|drmScheme=clearkey&drmLicense=dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd|drmScheme=clearkey&drmLicense=335dad778109954503dcbb21dc92015f:24bfd75d436cbf73168a2a2dccd40281",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd|drmScheme=clearkey&drmLicense=1a5df53609ebc9857898c490f4724918:77f62980d582ec541280796acf8b2d19",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=124.play",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ihys8nw4wv/out/v1/fde190f369484bc6b6117cc16cd82a9f/cenc.mpd|drmScheme=clearkey&drmLicense=abc5b2883121012850ebda05b528c5ec:e5250924f4b738905f7163a0134587a7",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://video.beeline.tv/live/d/channel317.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=5e1c798b16d24dc8cbfc7819abf77b4d:4ba5d9aeba2239b425d1cf7b45474333",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd|drmScheme=clearkey&drmLicense=0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=122.play",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/x0srg3jjpz/out/v1/f779c49314394d61886d63f58d9d52e4/cenc.mpd|drmScheme=clearkey&drmLicense=4f4c3a9912ea752e88f4497864a1bc8b:278128004fe8c6ffb2cd2a0c154a241a",
 "https://otte.cache.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vwq77hfgzw/out/v1/b858e0b845c64cec953887bd4269e4ea/cenc.mpd|drmScheme=clearkey&drmLicense=1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://otte.live.fly.ww.aiv-cdn.net/PDX/live/clients/dash/enc/5qz8wmdome/out/v1/b9323e853dce427eac214b77bd48a204/cenc.mpd|drmScheme=clearkey&drmLicense=d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://video.beeline.tv/live/d/channel321.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=6cfb55b12aaa9df1626a8adaa4f26329:84486e2e8e5fdee2ef8240019923078c",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/rhf2dwosdt/out/v1/ee550d2a68d846c797e6ce4de2e8b76d/cenc.mpd|drmScheme=clearkey&drmLicense=69a5aa835a061ce64a630d1046727e40:d02feac8a999bd06bf4059bf33411749",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://otte.cache.aiv-cdn.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd|drmScheme=clearkey&drmLicense=7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e",
 "https://sps1.starzplayarabia.com/out/v1/eee188845e9543699fd24e5a9890c6e2/index.mpd|drmScheme=clearkey&drmLicense=b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
 "https://sps2.starzplayarabia.com/out/v1/15e7d1ffb99746dda03f71dbbbc3c08b/index.mpd|drmScheme=clearkey&drmLicense=ee861edcd99093153a763a94b14c2c5a:ab3991f6a7729ba1ea4bcdba0c1ae6c0",
 "https://live1.kinxie.com/live/71960084_83e1b45ed4e971104984948e294a06bf_autoChange.m3u8?auth_key=1787344490-0-0-d9384f7db64d191a304b92ca2d38a406",
 "https://baru.pw/rbtv.m3u8?streamId=775366&matchId=4431321&sportType=1|Referer=https://nadia01eo.tn76degree12ec3out.cfd/&User-Agent=Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36",
 "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://dash2.antik.sk/stream/nvidia_nova_sport1/playlist_cenc.mpd|drmScheme=clearkey&drmLicense=11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
 "https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(62567d5c-295c-4ffd-ac7e-c9749e874884)/master.mpd|drmScheme=clearkey&drmLicense=a81ee4a694fecd6aa8a682e5024b313c:6d15568e1dab59e7202ae12e71505185",
 "https://stream.sports3.win/iptv/live/signal-4550846-42298.m3u8",
 "https://hls.live123.fans/live/4550846.m3u8",
 "https://messi.damitv.st/live-sd/streamed/admin/ppv-marseille-vs-strasbourg/2/playlist.m3u8?tk=okDlCsDsrmCoCsQSA5JMwg&e=1787240856|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/rcl-aux/playlist.m3u8?tk=KSPGqXu_Jzv_P7h5xoXlBA&e=1787240985|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-sd/streamed/admin/ppv-le-mans-vs-brest/2/playlist.m3u8?tk=_rjR_3YfnVr-QJzt1xLxxg&e=1787241235|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/nice-lor/playlist.m3u8?tk=EXeox-ikQZ6SUfScqCbTQA&e=1787241389|Referer=https://damitvsports.com/",
 "https://ott.tv5monde.com/Content/HLS/Live/channel(seasie)/index.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-hls/channel/ligue1/2026-08-22/try-par/playlist.m3u8?tk=n8G6GY04paBsiL_kBK-srQ&e=1787241762|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-sd/streamed/admin/ppv-angers-vs-lille/2/playlist.m3u8?tk=EDN3wo2XBQdXl1VjW7ahlA&e=1787241853|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-sd/streamed/admin/ppv-le-havre-ac-vs-as-monaco/2/playlist.m3u8?tk=wSRqc2-nbyWcm5BPQgcK8w&e=1787241943|Referer=https://damitvsports.com/",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://messi.damitv.st/live-sd/streamed/admin/ppv-paris-saint-germain-vs-stade-rennais/2/playlist.m3u8?tk=SJvm-3xtVNd4Bf6_iZXcAQ&e=1787242069|Referer=https://damitvsports.com/",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-1/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-1/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/NL-ESPN-2/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-2-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://otte.live.fly.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/ssdefyhkkr/out/v1/cf01290cb7f64525bdf861580a016ca8/cenc.mpd|drmScheme=clearkey&drmLicense=0ad4080cdff8c60b1233b22087f0b340:285f129c5eca01dd08a5d5a14ad801c8",
 "https://video.beeline.tv/live/d/channel320.isml/manifest-stb.mpd|drmScheme=clearkey&drmLicense=ce7cf9b28d1a8d874accebc44d7e1fcd:cda18d4d20abd5cc778315abe277feb9",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://new-player.greenvora.net/v4?is_member=false&link=https://enewl.greenvora.net/Portugal-Sport-TV-1-BU/index.jpg?fastoken=784fd036-0599-4081-b39a-4d562abadea0|iframe",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://stream.sports3.win/iptv/live/signal-4599551-42332.m3u8",
 "https://baru.pw/rbtv.m3u8?streamId=777499&matchId=4456684&sportType=1|Referer=https://nadia01eo.tn76degree12ec3out.cfd/&User-Agent=Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36",
 "https://stream.sports3.win/iptv/live/signal-4599553-42382.m3u8",
 "https://hls.live123.fans/live/4599553.m3u8",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vkpoljjpkj/out/v1/502bcf68b3514cd28a220e6f0a43816f/cenc.mpd|drmScheme=clearkey&drmLicense=d1a163914db8ffad2c3e94f979896a0d:9728800a3959aafdd5b0bcfbf3768811",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://stream.sports3.win/iptv/live/signal-4581280-42388.m3u8",
 "https://hls.live123.fans/live/4581280.m3u8",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://d6m3sfa7e58z5.cloudfront.net/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=123.play",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/androstreamlivebs2.m3u8",
 "https://placeit.net/uploads/stage/56263/preview.mp4?13",
 "https://andro.evrenesoglu57.click/checklist/batutest.m3u8",
 "https://stream.sports3.win/iptv/live/signal-4460456-40968.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv10",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/cscevwljkq/out/v1/972185041b244140860b7d56398e9aaf/cenc.mpd|drmScheme=clearkey&drmLicense=385ceb9714b75e0cef61254f80b31002:18dce92a2891fee68d21ede5173230f8",
 "https://stream.sports3.win/iptv/live/signal-4460461-40970.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv8",
 "https://stream.sports3.win/iptv/live/signal-4460463-40971.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv12",
 "https://stream.sports3.win/iptv/live/signal-4460465-40972.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv6",
 "https://stream.sports3.win/iptv/live/signal-4460466-40973.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv2",
 "https://stream.sports3.win/iptv/live/signal-4460468-40974.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv14",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://stream.sports3.win/iptv/live/signal-4460470-40981.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv18",
 "https://stream.sports3.win/iptv/live/signal-4460471-40987.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv20",
 "https://stream.sports3.win/iptv/live/signal-4460472-40988.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv22",
 "https://stream.sports3.win/iptv/live/signal-4460473-40989.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv24",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd|drmScheme=clearkey&drmLicense=5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16",
 "https://hls.live123.fans/live/4460475.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv28",
 "https://hls.live123.fans/live/4460477.m3u8",
 "https://streamx-hd.com/live2.php?stream=appletv30",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/football.html",
 "https://www.fctv33hd.mom/id/football.html",
 "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel61.m3u8",
 "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel62.m3u8",
 "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel63.m3u8",
 "https://tfxm0gr3dgmttgh5nhcj1gwzdrc3pptwzc3jt.100ycdn.com/live1.quickscoreboardz.com/live/channel64.m3u8",
 "https://aspaltvpasti.top/Allinone/18249.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18249.drm",
 "https://aspaltvpasti.top/Allinone/18250.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18250.drm",
 "https://aspaltvpasti.top/Allinone/18252.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/18252.drm",
 "https://aspaltvpasti.top/Allinone/18253.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=clearkey&drmLicense=7abf8c6b6ad702c484b59959c11ab575:33a8a0828e996d4918edb8957798e1d7",
 "https://mewotss.kesufuk3.workers.dev/mwlsmpn01.akamaized.net/out/v1/mwlsmpn01/ll_wc_ch01/ll_wc_ch01_cmaf_dash01/cmafdash1s.mpd|User-Agent=Mozilla/5.0 (Linux; Android 14; RMX3393 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 (Sky, EM150UK, )&drmScheme=clearkey&drmLicense=63bcb2ae029b3af3bab113950aa972dd:49ef2d7ef95fd3328f1ede9eecde6c58",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/badminton.html",
 "https://live2.livefeedtextbox.com/live/channel33.m3u8|Referer=https://xl365.textliveupdaterz.com/",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FgzzPjSr/live.isml/.m3u8",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FLg3lkPK/live.isml/.m3u8",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/FUuxeMHd/live.isml/.m3u8",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/bMzlzue0/live.isml/.m3u8",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/cG2X784e/live.isml/.m3u8",
 "https://livecdn.euw1-0008.jwplive.com/live/sites/fM9jRrkn/media/8tJUf4uc/live.isml/.m3u8",
 "https://live2.livefeedtextbox.com/live/channel33.m3u8|Referer=https://xl365.textliveupdaterz.com/",
 "https://aspaltvpasti.top/Allinone/21811.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/21811.drm",
 "http://136.239.158.18:6610/001/2/ch00000090990000001083/index.m3u8?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BpiZhzOAmsfItUIS2UHXxD0ytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001173&contentid=ch00000000000000001173&videoid=ch00000090990000001083&recommendtype=0&userid=1797679327850&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=RCAJM4IFILAXXX&NeedJITP=1&JITPMediaType=HLS&JITPDRMType=NO",
 "https://cco-streamer1.cdn.3bbtv.com:8443/3bb/live/25/25.mpd|drmScheme=clearkey&drmLicense=ae986b6dd3d84b2bb868c8765c604815:89bf3c85580249d5bac4d3edaec019ec",
 "http://157.15.187.3:25092/hls/50/50.m3u8",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/volleyball.html",
 "https://aspaltvpasti.top/Allinone/20216.mpd|User-Agent=VidioPlayer/6.41.11&drmScheme=widevine&drmLicense=https://aspaltvpasti.top/Allinone/20216.drm",
 "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd|drmScheme=clearkey&drmLicense=8836fb04d62dc64c9f8a39ef8640d5eb:d4f05ce56c5231b7cdf53455bea58621",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/8mxwjnh2te/out/v1/356704796c0c4bed81f67cd3518d0c8a/cenc.mpd|drmScheme=clearkey&drmLicense=a49085f8da5e65af1efff0edac830b1f:4659bc58a85c062e3fe0c039a446fe47",
 "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/kkfdbi2d1c/out/v1/a5b9b32dafd5499688240287ef8c9b90/cenc.mpd|drmScheme=clearkey&drmLicense=308006101c8fd0262c0f529319b9c127:37683aadc75b1450efa82d62c647984d",
 "http://136.239.173.3:6610/001/2/ch00000090990000001151/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqvuCQC%2BfGfSFGYE2TZKWpbytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001321&contentid=ch00000000000000001321&videoid=ch00000090990000001151&recommendtype=0&userid=1148739009053&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=Z6EHYVCYR3XXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO",
 "https://otte.live.fly.ww.aiv-cdn.net/syd-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd|drmScheme=clearkey&drmLicense=294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/fighting.html",
 "https://master3.s5stream.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/puehlftk5j/out/v1/f7f0da1ee112481ca0024e6d4dd97f4a/cenc.mpd|drmScheme=clearkey&drmLicense=f3df7843080ae743bf865dc5fdf64c68:567c863bc12eb74788ea74888c042e1b",
 "https://cdn.strea.ru/index.m3u8",
 "https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/b3b3fkmrbl/out/v1/1084d5c9a97a4c5b9f9554c88f486646/cenc.mpd|drmScheme=clearkey&drmLicense=82dfca238e8c4b430a3269db71965db9:a00b28caf4ac628e77a553d440c0ddca",
 "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/wjeweupwyc/out/v1/8197c8e055c94a868623653ac55c10bf/cenc.mpd|drmScheme=clearkey&drmLicense=e03f302ec4dabcccca82cc9f76731ec9:53ea1027d2bf2893a552cf15bc0366de",
 "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed",
 "https://d2tjypxxy769fn.cloudfront.net/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1&drmScheme=widevine&drmLicense=https://ayo.maling.pl/V/vision/id=120.play",
 "https://aspaltvpasti.top/Allinone/17140.mpd|drmScheme=clearkey&drmLicense=6d576b166f055e97c9371a30835d1d90:bab4a56701471429489ecb6fa02d4ebf",
 "https://next.kesufuk.workers.dev/https://otte.cache.aiv-cdn.net/iad-nitro/live/clients/dash/enc/3j04z3pbit/out/v1/042ee0757ed348bf8c26f75895cae871/cenc.mpd|drmScheme=clearkey&drmLicense=0b59ce06de74ed84f2eda5e81dadba13:48e4ba4ad6c2a60d2bda5d71a0050844",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTV2NEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a3fab992070540f69551d9497a1499ab:6c48e33896b10978099f81ca0b454aff",
 "https://master3.hdtvs2.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/avqlywnuzx/out/v1/aefca6420f944a9482e117f315de535f/cenc.mpd|drmScheme=clearkey&drmLicense=1994b1df7dfd2e8a8d7b9bf3fb900285:22a1444b3da18e139191665b3d652835",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/7janu55dwc/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd|drmScheme=clearkey&drmLicense=e51aa21f2a0fef9aabc120dfb655b52f:a12a987fe725a40b6be95cd84b15f689",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/jkcljgqbx8/out/v1/63bfa701559340f3a2a2cb1fccd24807/cenc.mpd|drmScheme=clearkey&drmLicense=e853333da2c9196ea11374634231bc45:de2e2dbe818d78dfad07d6cd9a4c63d4",
 "https://c9851ec-rbm-hilv-fsly.cdn.redbee.live/L26/6b640fa2/a765d074.isml/dash/.mpd|drmScheme=clearkey&drmLicense=adca25b8779e4168a0cd710f59f61ccf:be5383ed3cd8079f4ffe78ad067f476a",
 "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/duqbirmk0d/out/v1/40f53c7cbc95498db3afd081c377d776/cenc.mpd|drmScheme=clearkey&drmLicense=609d795905904705028ef54653019af7:2c791eb611e57a7d7f203022bc1b9ba3",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/BeINSportsHD/output/manifest.mpd|drmScheme=clearkey&drmLicense=4c4b013320654277a19df8f14b80b6c5:4751e8a9d798c2a1e1c581f179771f48",
 "https://r.e.blueonline.tv/l/tvsmart/live/eds/Eleven_Sport_1/D11/Manifest.mpd|drmScheme=clearkey&drmLicense=69021095220f3c0eae9bc24215fd692b:eb58cfe0458ed0b48f7351fa3393ad59",
 "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd|User-Agent=Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 iPhone (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.91 Mobile Safari/537.36&drmScheme=clearkey&drmLicense=c5e8a3927d414b609f286a3c5e1d7049:7c5edbd3d090bb6de9a9c3685defa959",
 "https://master3.s5stream.top/hls/stream.m3u8|Referer=https://esp32.nontonx.com/",
 "https://d3b0v7fggu5zwm.cloudfront.net/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd|User-Agent=KLTRA-TV/2.0.0 - Velocity (Linux;Android 15) AndroidXMedia3/1.5.1&drmScheme=clearkey&drmLicense=3197f7f5086c4315af2b7a94bc9201cb:17462a74739ae0d9855705ffc2c0e1b5",
 "https://starhub-307.tvsucker.workers.dev/bpk-tv/SPOTVNEW/output/manifest.mpd|drmScheme=clearkey&drmLicense=a9b08ce3328f467dac1c6ff03b4cf358:499e104ca0c44ebc78d601094001cd67",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/motorsport.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/basketball.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/tennis.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/baseball.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/cricket.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/rugby.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/hockey.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/american-football.html",
 "https://theoe7am.gk8bloud123lkitchen.sbs/id/others.html"
],
};

if (typeof module !== 'undefined' && module.exports) module.exports = STREAM_URLS;
if (typeof window !== 'undefined') window.STREAM_URLS = STREAM_URLS;
