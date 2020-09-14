var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="patsy.data";var REMOTE_PACKAGE_BASE="patsy.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","patsy-0.5.1-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","patsy",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:501217,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1259,2284,3746,4802,6266,7687,8887,9854,10942,12124,13066,14140,15167,16190,17178,18398,19547,20339,21448,22136,23247,24270,25475,26912,28414,29657,30834,31682,32626,34216,35498,36486,37572,38715,40296,41607,42782,43876,44727,45897,47002,48102,48867,49711,50875,52324,53639,54848,56161,57324,58104,59023,59891,61326,62517,63613,64643,65525,66276,67183,68387,69740,70927,72009,73273,74429,75608,76463,77475,78623,80033,81284,82418,83778,84845,86164,87062,87811,88580,89433,90570,91969,93355,94623,95618,96812,98183,99295,100318,101357,102495,103857,105126,106290,107135,108584,109529,110881,111819,112830,113749,114922,116079,117470,118580,119718,120865,122026,122896,123720,124372,125283,126235,127233,128219,129197,130194,131296,132564,133660,134733,135937,137231,138333,139536,140747,141940,143203,144173,144963,146103,147511,148602,149887,151222,152495,153598,154378,155764,156880,157782,158710,159711,160716,161565,162622,163581,164527,165249,166220,167205,168477,169779,170944,172150,173151,174494,175918,177584,178893,180354,181761,183140,184411,185690,186987,188082,189585,190708,191945,193365,194609,195835,196899,198692,200187,201984,203802,205645,207385,209102,210716,212374,214134,215863,217543,219239,220987,222516,224198,226039,227831,229577,231258,232857,234596,236343,238013,239650,241351,243173,245004,246843,248689,250414,252187,253885,255611,257445,259257,261042,262874,264604,266365,268044,269715,271557,273389,275200,276990,278755,280470,282203,284031,285850,287651,289433,291216,292971,294178,295097,296020,297034,298229,300094,301940,303801,305654,307494,309344,311200,313048,314844,316696,318497,320258,322031,323887,325733,327612,329449,331314,333160,334978,336831,338670,340503,342365,344209,346050,347916,349771,351604,353485,355306,357120,358994,360762,362573,364457,366280,368156,370016,371880,373749,375595,377363,379230,381027,382858,384730,386579,388432,390266,392086,393952,395796,397663,399491,401307,403149,404978,406791,408595,410371,412151,413848,415677,417524,418952,420317,421545,422528,423527,424496,425598,426560,427225,428115,429029,429994,430885,431975,432942,434057,435023,436218,437273,438738,439643,440795,442149,443585,444809,446019,447415,448682,449990,450963,452200,453584,454696,455650,456395,457064,458367,459586,460477,461678,462872,464074,465456,466781,467842,469348,470864,472189,473714,474964,476275,477525,478530,480140,481689,482932,484155,485210,486435,487872,489452,490902,492298,493594,494431,495440,496692,497388,498585,499968,501111],sizes:[1259,1025,1462,1056,1464,1421,1200,967,1088,1182,942,1074,1027,1023,988,1220,1149,792,1109,688,1111,1023,1205,1437,1502,1243,1177,848,944,1590,1282,988,1086,1143,1581,1311,1175,1094,851,1170,1105,1100,765,844,1164,1449,1315,1209,1313,1163,780,919,868,1435,1191,1096,1030,882,751,907,1204,1353,1187,1082,1264,1156,1179,855,1012,1148,1410,1251,1134,1360,1067,1319,898,749,769,853,1137,1399,1386,1268,995,1194,1371,1112,1023,1039,1138,1362,1269,1164,845,1449,945,1352,938,1011,919,1173,1157,1391,1110,1138,1147,1161,870,824,652,911,952,998,986,978,997,1102,1268,1096,1073,1204,1294,1102,1203,1211,1193,1263,970,790,1140,1408,1091,1285,1335,1273,1103,780,1386,1116,902,928,1001,1005,849,1057,959,946,722,971,985,1272,1302,1165,1206,1001,1343,1424,1666,1309,1461,1407,1379,1271,1279,1297,1095,1503,1123,1237,1420,1244,1226,1064,1793,1495,1797,1818,1843,1740,1717,1614,1658,1760,1729,1680,1696,1748,1529,1682,1841,1792,1746,1681,1599,1739,1747,1670,1637,1701,1822,1831,1839,1846,1725,1773,1698,1726,1834,1812,1785,1832,1730,1761,1679,1671,1842,1832,1811,1790,1765,1715,1733,1828,1819,1801,1782,1783,1755,1207,919,923,1014,1195,1865,1846,1861,1853,1840,1850,1856,1848,1796,1852,1801,1761,1773,1856,1846,1879,1837,1865,1846,1818,1853,1839,1833,1862,1844,1841,1866,1855,1833,1881,1821,1814,1874,1768,1811,1884,1823,1876,1860,1864,1869,1846,1768,1867,1797,1831,1872,1849,1853,1834,1820,1866,1844,1867,1828,1816,1842,1829,1813,1804,1776,1780,1697,1829,1847,1428,1365,1228,983,999,969,1102,962,665,890,914,965,891,1090,967,1115,966,1195,1055,1465,905,1152,1354,1436,1224,1210,1396,1267,1308,973,1237,1384,1112,954,745,669,1303,1219,891,1201,1194,1202,1382,1325,1061,1506,1516,1325,1525,1250,1311,1250,1005,1610,1549,1243,1223,1055,1225,1437,1580,1450,1396,1296,837,1009,1252,696,1197,1383,1143,106],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_patsy.data")}Module["addRunDependency"]("datafile_patsy.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/top_level.txt",start:0,end:6,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/PKG-INFO",start:6,end:2253,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/dependency_links.txt",start:2253,end:2254,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/SOURCES.txt",start:2254,end:4508,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/requires.txt",start:4508,end:4523,audio:0},{filename:"/lib/python3.7/site-packages/patsy/state.py",start:4523,end:11391,audio:0},{filename:"/lib/python3.7/site-packages/patsy/constraint.py",start:11391,end:31694,audio:0},{filename:"/lib/python3.7/site-packages/patsy/util.py",start:31694,end:60240,audio:0},{filename:"/lib/python3.7/site-packages/patsy/infix_parser.py",start:60240,end:70052,audio:0},{filename:"/lib/python3.7/site-packages/patsy/desc.py",start:70052,end:92527,audio:0},{filename:"/lib/python3.7/site-packages/patsy/version.py",start:92527,end:93350,audio:0},{filename:"/lib/python3.7/site-packages/patsy/eval.py",start:93350,end:125674,audio:0},{filename:"/lib/python3.7/site-packages/patsy/design_info.py",start:125674,end:176496,audio:0},{filename:"/lib/python3.7/site-packages/patsy/parse_formula.py",start:176496,end:186240,audio:0},{filename:"/lib/python3.7/site-packages/patsy/contrasts.py",start:186240,end:210470,audio:0},{filename:"/lib/python3.7/site-packages/patsy/compat_ordereddict.py",start:210470,end:219640,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_highlevel.py",start:219640,end:248406,audio:0},{filename:"/lib/python3.7/site-packages/patsy/categorical.py",start:248406,end:267482,audio:0},{filename:"/lib/python3.7/site-packages/patsy/redundancy.py",start:267482,end:278140,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_build.py",start:278140,end:309232,audio:0},{filename:"/lib/python3.7/site-packages/patsy/highlevel.py",start:309232,end:323948,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_splines_bs_data.py",start:323948,end:467954,audio:0},{filename:"/lib/python3.7/site-packages/patsy/compat.py",start:467954,end:469943,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_state.py",start:469943,end:477961,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_regressions.py",start:477961,end:478816,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_splines_crs_data.py",start:478816,end:612034,audio:0},{filename:"/lib/python3.7/site-packages/patsy/__init__.py",start:612034,end:615541,audio:0},{filename:"/lib/python3.7/site-packages/patsy/tokens.py",start:615541,end:623751,audio:0},{filename:"/lib/python3.7/site-packages/patsy/build.py",start:623751,end:666624,audio:0},{filename:"/lib/python3.7/site-packages/patsy/mgcv_cubic_splines.py",start:666624,end:711849,audio:0},{filename:"/lib/python3.7/site-packages/patsy/user_util.py",start:711849,end:720989,audio:0},{filename:"/lib/python3.7/site-packages/patsy/missing.py",start:720989,end:732596,audio:0},{filename:"/lib/python3.7/site-packages/patsy/builtins.py",start:732596,end:735754,audio:0},{filename:"/lib/python3.7/site-packages/patsy/splines.py",start:735754,end:753305,audio:0},{filename:"/lib/python3.7/site-packages/patsy/origin.py",start:753305,end:757895,audio:0}],remote_package_size:505313,package_uuid:"4c077f1f-4371-483b-a1c3-2b60cdb84883"})})();