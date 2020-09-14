var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="distlib.data";var REMOTE_PACKAGE_BASE="distlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","distlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/distlib","_backport",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:579540,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1308,2560,3773,5024,6154,7408,8565,9412,10728,11802,13018,14470,15773,16395,17321,18660,19853,20948,22337,24103,25854,27727,29550,31402,33218,34942,36761,38532,40327,42162,43948,45776,47542,49327,51044,52801,54369,56226,58074,59797,61604,63392,65206,67060,68456,69596,70777,71459,72765,74298,75763,76930,77315,77993,79339,80698,82360,84026,85406,86723,88140,89559,90460,91907,93288,94637,95613,96830,97637,98710,99485,100754,102047,103311,104651,105683,106783,107891,108897,110243,111517,112859,114176,115213,116252,117307,118398,119670,120767,122004,123139,124338,125298,126478,127638,128883,129920,131097,132318,133662,134522,135330,136528,137931,139138,140283,141433,142866,144003,145023,146043,147250,148452,149501,150834,152044,153047,153927,154876,155783,156888,157850,158942,160192,161304,162427,163770,165202,166412,167554,168701,169777,170933,172097,173314,174549,175680,176742,177683,178769,180054,180917,181865,183039,184418,185522,186549,187674,188623,189746,190655,191947,193050,194100,195003,196029,197069,198173,199180,200323,201904,203711,205570,207413,209243,211137,212726,214597,216310,218175,220050,221643,223384,225263,227029,228654,230319,232154,233703,235337,237056,238798,240494,242389,244082,245522,246554,247353,248627,249811,250794,251617,252341,254087,255778,257037,258405,259809,261079,261976,263478,264731,266136,268192,268507,270001,271331,272443,273628,274719,275845,277047,278237,279365,280402,281723,283110,284299,285472,286767,287781,288986,290217,291337,292377,293577,294701,295813,296992,297939,299275,300485,301448,302568,303771,304967,305955,307133,308351,309553,310798,311870,313088,314299,315546,316774,317981,318932,320180,321277,322482,323542,324649,325939,326895,328274,330053,331872,333765,335587,337454,339297,341002,342750,344489,346376,348262,350073,351894,353719,355515,357350,359189,360721,362361,364168,365843,367695,369549,371342,373134,375024,376853,377940,379226,380169,380939,382313,383822,385229,385870,386510,387067,388858,390079,391857,393423,394721,396144,397548,398777,399818,401358,402684,403727,404974,406295,407580,408830,410111,411250,412439,413495,414586,415809,416803,418139,419141,420145,421180,422279,423282,424008,425034,425948,427266,428314,429708,431224,432993,434843,436681,438477,440351,442033,443914,445579,447445,449210,451049,452842,454647,456420,457987,459714,461402,463023,464763,466384,468216,470052,471615,472733,473644,474780,475720,477137,477604,478389,479912,481574,483038,484324,485791,487204,488244,489526,490993,492387,494096,494875,495767,497019,498210,499551,500464,501663,502880,504119,505391,506413,507817,509169,510214,511348,512182,513752,515071,516109,517255,518664,519721,520946,521977,523196,524187,525325,526468,527556,528574,529776,530879,531916,533130,534237,535487,536666,537825,538922,540254,541282,542224,543308,544618,545603,546706,547693,548508,549761,551030,552055,553173,554311,555516,556550,557646,558703,559760,560712,561766,563001,564302,565558,566797,568093,569344,570662,571881,573171,574361,575665,576961,578250,579462],sizes:[1308,1252,1213,1251,1130,1254,1157,847,1316,1074,1216,1452,1303,622,926,1339,1193,1095,1389,1766,1751,1873,1823,1852,1816,1724,1819,1771,1795,1835,1786,1828,1766,1785,1717,1757,1568,1857,1848,1723,1807,1788,1814,1854,1396,1140,1181,682,1306,1533,1465,1167,385,678,1346,1359,1662,1666,1380,1317,1417,1419,901,1447,1381,1349,976,1217,807,1073,775,1269,1293,1264,1340,1032,1100,1108,1006,1346,1274,1342,1317,1037,1039,1055,1091,1272,1097,1237,1135,1199,960,1180,1160,1245,1037,1177,1221,1344,860,808,1198,1403,1207,1145,1150,1433,1137,1020,1020,1207,1202,1049,1333,1210,1003,880,949,907,1105,962,1092,1250,1112,1123,1343,1432,1210,1142,1147,1076,1156,1164,1217,1235,1131,1062,941,1086,1285,863,948,1174,1379,1104,1027,1125,949,1123,909,1292,1103,1050,903,1026,1040,1104,1007,1143,1581,1807,1859,1843,1830,1894,1589,1871,1713,1865,1875,1593,1741,1879,1766,1625,1665,1835,1549,1634,1719,1742,1696,1895,1693,1440,1032,799,1274,1184,983,823,724,1746,1691,1259,1368,1404,1270,897,1502,1253,1405,2056,315,1494,1330,1112,1185,1091,1126,1202,1190,1128,1037,1321,1387,1189,1173,1295,1014,1205,1231,1120,1040,1200,1124,1112,1179,947,1336,1210,963,1120,1203,1196,988,1178,1218,1202,1245,1072,1218,1211,1247,1228,1207,951,1248,1097,1205,1060,1107,1290,956,1379,1779,1819,1893,1822,1867,1843,1705,1748,1739,1887,1886,1811,1821,1825,1796,1835,1839,1532,1640,1807,1675,1852,1854,1793,1792,1890,1829,1087,1286,943,770,1374,1509,1407,641,640,557,1791,1221,1778,1566,1298,1423,1404,1229,1041,1540,1326,1043,1247,1321,1285,1250,1281,1139,1189,1056,1091,1223,994,1336,1002,1004,1035,1099,1003,726,1026,914,1318,1048,1394,1516,1769,1850,1838,1796,1874,1682,1881,1665,1866,1765,1839,1793,1805,1773,1567,1727,1688,1621,1740,1621,1832,1836,1563,1118,911,1136,940,1417,467,785,1523,1662,1464,1286,1467,1413,1040,1282,1467,1394,1709,779,892,1252,1191,1341,913,1199,1217,1239,1272,1022,1404,1352,1045,1134,834,1570,1319,1038,1146,1409,1057,1225,1031,1219,991,1138,1143,1088,1018,1202,1103,1037,1214,1107,1250,1179,1159,1097,1332,1028,942,1084,1310,985,1103,987,815,1253,1269,1025,1118,1138,1205,1034,1096,1057,1057,952,1054,1235,1301,1256,1239,1296,1251,1318,1219,1290,1190,1304,1296,1289,1212,78],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_distlib.data")}Module["addRunDependency"]("datafile_distlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/distlib-0.2.8-py3.7.egg-info",start:0,end:1161,audio:0},{filename:"/lib/python3.7/site-packages/distlib/index.py",start:1161,end:22234,audio:0},{filename:"/lib/python3.7/site-packages/distlib/manifest.py",start:22234,end:37045,audio:0},{filename:"/lib/python3.7/site-packages/distlib/w64.exe",start:37045,end:136373,audio:0},{filename:"/lib/python3.7/site-packages/distlib/util.py",start:136373,end:196054,audio:0},{filename:"/lib/python3.7/site-packages/distlib/version.py",start:196054,end:219445,audio:0},{filename:"/lib/python3.7/site-packages/distlib/wheel.py",start:219445,end:259325,audio:0},{filename:"/lib/python3.7/site-packages/distlib/scripts.py",start:259325,end:275963,audio:0},{filename:"/lib/python3.7/site-packages/distlib/resources.py",start:275963,end:286729,audio:0},{filename:"/lib/python3.7/site-packages/distlib/metadata.py",start:286729,end:326901,audio:0},{filename:"/lib/python3.7/site-packages/distlib/t32.exe",start:326901,end:419573,audio:0},{filename:"/lib/python3.7/site-packages/distlib/locators.py",start:419573,end:471401,audio:0},{filename:"/lib/python3.7/site-packages/distlib/database.py",start:471401,end:522430,audio:0},{filename:"/lib/python3.7/site-packages/distlib/t64.exe",start:522430,end:624830,audio:0},{filename:"/lib/python3.7/site-packages/distlib/compat.py",start:624830,end:666234,audio:0},{filename:"/lib/python3.7/site-packages/distlib/markers.py",start:666234,end:670621,audio:0},{filename:"/lib/python3.7/site-packages/distlib/__init__.py",start:670621,end:671202,audio:0},{filename:"/lib/python3.7/site-packages/distlib/w32.exe",start:671202,end:760290,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/sysconfig.py",start:760290,end:787254,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/sysconfig.cfg",start:787254,end:789871,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/misc.py",start:789871,end:790842,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/__init__.py",start:790842,end:791116,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/tarfile.py",start:791116,end:883744,audio:0},{filename:"/lib/python3.7/site-packages/distlib/_backport/shutil.py",start:883744,end:909391,audio:0}],remote_package_size:583636,package_uuid:"64c6d39e-4e11-401f-b854-1192089d3402"})})();