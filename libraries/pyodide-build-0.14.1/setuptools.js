var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="setuptools.data";var REMOTE_PACKAGE_BASE="setuptools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","bin",true,true);Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools-40.0.0-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pkg_resources",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","extern",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","command",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","extern",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1019696,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1005,2168,3106,4202,4991,5525,6386,7840,9074,10548,11862,13093,14407,15606,16613,17863,19089,20365,21636,22679,23986,25110,26408,27663,28853,29874,31180,32581,33965,35177,36162,37133,38400,39573,40730,41833,43013,44226,45312,46578,47887,49123,50310,51532,52789,54036,55303,56328,57606,58806,59938,61071,62166,63430,64821,66031,67430,68910,70471,71591,72717,73689,74458,75249,75954,76488,77275,78347,79266,80359,81329,82638,84232,85827,87196,88603,89909,91156,92363,93404,94309,95087,96273,97402,98473,99648,100799,101765,102894,103970,105224,106544,107812,109014,110241,111458,112761,113881,115079,115913,116660,117476,118588,119799,121027,122199,123311,124469,125685,126501,127440,128025,128807,129954,130986,132194,133335,134218,135288,136368,137705,138770,140004,141006,142398,143477,144386,145681,146940,147930,149058,150325,151541,152598,153545,154488,155654,156571,157758,158878,159933,161068,162377,163340,164482,165381,166540,167751,168943,170172,171393,172530,173567,174840,176005,177197,178322,179580,180867,182154,183239,184607,185889,187235,188576,189986,191164,192436,193704,195002,196251,197594,198593,199681,200967,201794,203060,204089,205404,206274,207181,208246,209185,210549,211781,213228,214360,215660,216984,218319,219655,220938,222246,223236,224223,225312,226241,227147,228308,229278,230337,231211,232392,233413,234526,235712,236670,237754,239031,240236,241278,242507,243368,244517,245775,247122,248365,249506,250443,251707,252788,253885,254918,256137,257470,258653,260034,261126,262394,263519,265008,266835,268701,270402,272187,273917,275791,277493,279180,280990,282854,284707,286468,288269,289986,291652,293391,295271,297020,298870,300664,302484,304304,306106,307940,309702,310771,311680,312793,313615,314200,315306,316795,318622,320488,322189,323974,325704,327578,329280,330967,332777,334641,336494,338255,340056,341773,343439,345178,347058,348807,350657,352451,354271,356091,357893,359727,361489,362558,363467,364580,365402,365987,367155,368538,369676,370895,372247,373377,374804,376142,377419,378691,380004,381219,382472,383766,385010,386130,387318,388280,389384,390462,391715,392937,394296,395685,396902,398055,399098,400372,401652,402967,404096,405367,406504,407664,408858,410049,410921,411671,412819,413763,414786,415810,416769,417752,419037,419847,420612,421486,422349,423226,423987,425251,426596,427717,428814,430018,431162,432549,433514,434688,435645,437082,438287,439495,441277,443054,444825,446656,448465,450139,451948,453812,455449,457238,459001,460765,462539,464219,465997,467589,469284,471130,472944,474669,476388,478211,479964,481758,483621,485345,486266,487634,488123,489763,491200,492329,492810,493547,494745,496445,497528,498732,499728,500841,501836,503295,504697,506116,507257,508382,509567,510805,511970,512885,514074,514898,516206,517416,518644,519854,521117,522290,523660,524954,526219,527590,528798,530078,531185,532347,533469,534635,535742,536729,537937,539353,540410,541513,542615,544342,546164,548026,549664,551481,553184,555065,556730,558523,560302,562185,564067,565824,567489,569224,570873,572630,574449,576209,578054,579796,581644,583520,585312,587160,588796,589710,590709,591949,592713,593244,594476,595389,597139,598961,600812,602460,604280,605982,607847,609507,611308,613090,614967,616843,618613,620273,622010,623686,625438,627248,629005,630857,632590,634445,636317,638104,639933,641576,642478,643488,644736,645515,646048,647316,648599,649648,650826,652244,653583,655367,657162,658931,660746,662582,664277,666067,667873,669691,671349,673187,674836,676557,678281,680075,681621,683438,685206,687047,688819,690565,692283,694065,695887,697665,699036,700420,701250,702465,704060,705503,706242,706596,707352,709152,710332,711532,712930,714046,715306,716846,718318,719397,720490,721335,722216,722893,723566,724223,725207,726161,727196,728293,729387,730783,732400,733862,735316,736765,737952,739228,740373,741380,742372,743292,744408,745428,746564,747696,748888,749723,750890,751947,752980,754198,755384,756494,757659,758850,760179,761260,762390,763141,763995,764714,765884,767119,768346,769398,770592,771757,772648,773759,774591,775040,776072,777147,778313,779437,780636,781560,782584,783751,785005,786080,787304,788484,789858,790764,791784,793082,794258,795135,796251,797596,798856,799986,800803,801651,802708,803639,804845,806015,807097,808221,809434,810442,811619,812481,813642,814760,815921,817122,818425,819565,820766,821894,823085,824333,825452,826751,828042,829340,830684,831929,833230,834560,835941,837364,838504,839579,840921,842107,843488,844734,845464,846672,847956,848951,850115,851372,852647,853267,854211,855456,856645,857951,859098,860075,861021,862255,863238,864093,865233,866351,867247,868407,869587,870388,871597,872791,873850,875120,876281,877018,878293,879582,880781,881990,883145,884171,885382,886505,887409,888626,889855,890881,891988,893257,894590,895706,896845,898034,899221,900456,901637,902765,904014,905225,906326,907412,908662,909980,911158,912290,913318,914570,915886,917039,918351,919767,921119,922103,923357,924645,925831,927162,927682,928661,929860,931083,932383,933488,934826,935932,937012,938359,939661,940809,942075,943166,944193,945302,946562,947820,949068,950137,951299,952390,953471,954680,955818,956801,957908,959160,960277,961545,962744,963951,965174,966534,967769,968824,970053,971332,972494,973621,975057,976484,977787,979120,980469,981810,983122,984232,985415,986612,987887,989115,990452,991507,992531,993711,994704,995790,996924,998198,999348,1000532,1001862,1003199,1004452,1005819,1006917,1008137,1009339,1010735,1011618,1012722,1014003,1015173,1016310,1017471,1018685],sizes:[1005,1163,938,1096,789,534,861,1454,1234,1474,1314,1231,1314,1199,1007,1250,1226,1276,1271,1043,1307,1124,1298,1255,1190,1021,1306,1401,1384,1212,985,971,1267,1173,1157,1103,1180,1213,1086,1266,1309,1236,1187,1222,1257,1247,1267,1025,1278,1200,1132,1133,1095,1264,1391,1210,1399,1480,1561,1120,1126,972,769,791,705,534,787,1072,919,1093,970,1309,1594,1595,1369,1407,1306,1247,1207,1041,905,778,1186,1129,1071,1175,1151,966,1129,1076,1254,1320,1268,1202,1227,1217,1303,1120,1198,834,747,816,1112,1211,1228,1172,1112,1158,1216,816,939,585,782,1147,1032,1208,1141,883,1070,1080,1337,1065,1234,1002,1392,1079,909,1295,1259,990,1128,1267,1216,1057,947,943,1166,917,1187,1120,1055,1135,1309,963,1142,899,1159,1211,1192,1229,1221,1137,1037,1273,1165,1192,1125,1258,1287,1287,1085,1368,1282,1346,1341,1410,1178,1272,1268,1298,1249,1343,999,1088,1286,827,1266,1029,1315,870,907,1065,939,1364,1232,1447,1132,1300,1324,1335,1336,1283,1308,990,987,1089,929,906,1161,970,1059,874,1181,1021,1113,1186,958,1084,1277,1205,1042,1229,861,1149,1258,1347,1243,1141,937,1264,1081,1097,1033,1219,1333,1183,1381,1092,1268,1125,1489,1827,1866,1701,1785,1730,1874,1702,1687,1810,1864,1853,1761,1801,1717,1666,1739,1880,1749,1850,1794,1820,1820,1802,1834,1762,1069,909,1113,822,585,1106,1489,1827,1866,1701,1785,1730,1874,1702,1687,1810,1864,1853,1761,1801,1717,1666,1739,1880,1749,1850,1794,1820,1820,1802,1834,1762,1069,909,1113,822,585,1168,1383,1138,1219,1352,1130,1427,1338,1277,1272,1313,1215,1253,1294,1244,1120,1188,962,1104,1078,1253,1222,1359,1389,1217,1153,1043,1274,1280,1315,1129,1271,1137,1160,1194,1191,872,750,1148,944,1023,1024,959,983,1285,810,765,874,863,877,761,1264,1345,1121,1097,1204,1144,1387,965,1174,957,1437,1205,1208,1782,1777,1771,1831,1809,1674,1809,1864,1637,1789,1763,1764,1774,1680,1778,1592,1695,1846,1814,1725,1719,1823,1753,1794,1863,1724,921,1368,489,1640,1437,1129,481,737,1198,1700,1083,1204,996,1113,995,1459,1402,1419,1141,1125,1185,1238,1165,915,1189,824,1308,1210,1228,1210,1263,1173,1370,1294,1265,1371,1208,1280,1107,1162,1122,1166,1107,987,1208,1416,1057,1103,1102,1727,1822,1862,1638,1817,1703,1881,1665,1793,1779,1883,1882,1757,1665,1735,1649,1757,1819,1760,1845,1742,1848,1876,1792,1848,1636,914,999,1240,764,531,1232,913,1750,1822,1851,1648,1820,1702,1865,1660,1801,1782,1877,1876,1770,1660,1737,1676,1752,1810,1757,1852,1733,1855,1872,1787,1829,1643,902,1010,1248,779,533,1268,1283,1049,1178,1418,1339,1784,1795,1769,1815,1836,1695,1790,1806,1818,1658,1838,1649,1721,1724,1794,1546,1817,1768,1841,1772,1746,1718,1782,1822,1778,1371,1384,830,1215,1595,1443,739,354,756,1800,1180,1200,1398,1116,1260,1540,1472,1079,1093,845,881,677,673,657,984,954,1035,1097,1094,1396,1617,1462,1454,1449,1187,1276,1145,1007,992,920,1116,1020,1136,1132,1192,835,1167,1057,1033,1218,1186,1110,1165,1191,1329,1081,1130,751,854,719,1170,1235,1227,1052,1194,1165,891,1111,832,449,1032,1075,1166,1124,1199,924,1024,1167,1254,1075,1224,1180,1374,906,1020,1298,1176,877,1116,1345,1260,1130,817,848,1057,931,1206,1170,1082,1124,1213,1008,1177,862,1161,1118,1161,1201,1303,1140,1201,1128,1191,1248,1119,1299,1291,1298,1344,1245,1301,1330,1381,1423,1140,1075,1342,1186,1381,1246,730,1208,1284,995,1164,1257,1275,620,944,1245,1189,1306,1147,977,946,1234,983,855,1140,1118,896,1160,1180,801,1209,1194,1059,1270,1161,737,1275,1289,1199,1209,1155,1026,1211,1123,904,1217,1229,1026,1107,1269,1333,1116,1139,1189,1187,1235,1181,1128,1249,1211,1101,1086,1250,1318,1178,1132,1028,1252,1316,1153,1312,1416,1352,984,1254,1288,1186,1331,520,979,1199,1223,1300,1105,1338,1106,1080,1347,1302,1148,1266,1091,1027,1109,1260,1258,1248,1069,1162,1091,1081,1209,1138,983,1107,1252,1117,1268,1199,1207,1223,1360,1235,1055,1229,1279,1162,1127,1436,1427,1303,1333,1349,1341,1312,1110,1183,1197,1275,1228,1337,1055,1024,1180,993,1086,1134,1274,1150,1184,1330,1337,1253,1367,1098,1220,1202,1396,883,1104,1281,1170,1137,1161,1214,1011],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_setuptools.data")}Module["addRunDependency"]("datafile_setuptools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/bin/easy_install-3.7",start:0,end:452,audio:0},{filename:"/bin/easy_install",start:452,end:896,audio:0},{filename:"/lib/python3.7/site-packages/easy_install.py",start:896,end:1022,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/top_level.txt",start:1022,end:1060,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/PKG-INFO",start:1060,end:4285,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/entry_points.txt",start:4285,end:7275,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/dependency_links.txt",start:7275,end:7514,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/SOURCES.txt",start:7514,end:14118,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/zip-safe",start:14118,end:14119,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/requires.txt",start:14119,end:14194,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/py31compat.py",start:14194,end:14747,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/__init__.py",start:14747,end:118560,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/six.py",start:118560,end:148658,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/pyparsing.py",start:148658,end:378525,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/__init__.py",start:378525,end:378525,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/appdirs.py",start:378525,end:400899,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/specifiers.py",start:400899,end:428924,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/version.py",start:428924,end:440480,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/requirements.py",start:440480,end:444835,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/utils.py",start:444835,end:445256,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/markers.py",start:445256,end:453504,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__init__.py",start:453504,end:454017,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_structures.py",start:454017,end:455433,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__about__.py",start:455433,end:456153,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_compat.py",start:456153,end:457013,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/extern/__init__.py",start:457013,end:459511,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/pep425tags.py",start:459511,end:470388,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-32.exe",start:470388,end:535924,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui.exe",start:535924,end:601460,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/unicode_utils.py",start:601460,end:602456,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/monkey.py",start:602456,end:607660,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/package_index.py",start:607660,end:647970,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/version.py",start:647970,end:648114,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/wheel.py",start:648114,end:656216,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py31compat.py",start:656216,end:657036,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/ssl_support.py",start:657036,end:665528,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/msvc.py",start:665528,end:706405,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/build_meta.py",start:706405,end:712076,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/sandbox.py",start:712076,end:726352,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dep_util.py",start:726352,end:727287,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/site-patch.py",start:727287,end:729589,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-64.exe",start:729589,end:804341,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py36compat.py",start:804341,end:807232,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dist.py",start:807232,end:849845,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/__init__.py",start:849845,end:855559,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extension.py",start:855559,end:857288,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/config.py",start:857288,end:875309,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glibc.py",start:875309,end:878459,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glob.py",start:878459,end:883666,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script.tmpl",start:883666,end:883804,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-32.exe",start:883804,end:949340,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/lib2to3_ex.py",start:949340,end:951353,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli.exe",start:951353,end:1016889,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/archive_util.py",start:1016889,end:1023481,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/windows_support.py",start:1023481,end:1024199,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/launch.py",start:1024199,end:1024986,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py27compat.py",start:1024986,end:1025522,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-64.exe",start:1025522,end:1100786,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script (dev).tmpl",start:1100786,end:1101004,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py33compat.py",start:1101004,end:1102199,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/namespaces.py",start:1102199,end:1105398,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/depends.py",start:1105398,end:1111235,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/six.py",start:1111235,end:1141333,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/pyparsing.py",start:1141333,end:1371200,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/__init__.py",start:1371200,end:1371200,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/specifiers.py",start:1371200,end:1399225,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/version.py",start:1399225,end:1410781,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/requirements.py",start:1410781,end:1415124,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/utils.py",start:1415124,end:1415545,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/markers.py",start:1415545,end:1423784,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__init__.py",start:1423784,end:1424297,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_structures.py",start:1424297,end:1425713,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__about__.py",start:1425713,end:1426433,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_compat.py",start:1426433,end:1427293,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/setopt.py",start:1427293,end:1432378,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install.py",start:1432378,end:1437061,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_py.py",start:1437061,end:1446657,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload.py",start:1446657,end:1447829,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/dist_info.py",start:1447829,end:1448789,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/alias.py",start:1448789,end:1451215,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/rotate.py",start:1451215,end:1453379,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/test.py",start:1453379,end:1462607,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_egg.py",start:1462607,end:1480794,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/register.py",start:1480794,end:1481064,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/egg_info.py",start:1481064,end:1505864,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/py36compat.py",start:1505864,end:1510850,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/easy_install.py",start:1510850,end:1597901,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_wininst.py",start:1597901,end:1598538,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_ext.py",start:1598538,end:1611435,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_rpm.py",start:1611435,end:1612943,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_scripts.py",start:1612943,end:1615382,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_lib.py",start:1615382,end:1619222,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/__init__.py",start:1619222,end:1619816,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/sdist.py",start:1619816,end:1626527,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/launcher manifest.xml",start:1626527,end:1627155,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload_docs.py",start:1627155,end:1634466,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/saveopts.py",start:1634466,end:1635124,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_clib.py",start:1635124,end:1639608,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_egg_info.py",start:1639608,end:1641811,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/develop.py",start:1641811,end:1649871,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extern/__init__.py",start:1649871,end:1652372,audio:0}],remote_package_size:1023792,package_uuid:"0e11befc-e74e-4e29-b593-1e252d28e618"})})();