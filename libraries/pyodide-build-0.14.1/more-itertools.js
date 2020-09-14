var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="more-itertools.data";var REMOTE_PACKAGE_BASE="more-itertools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/more_itertools","tests",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","more_itertools-4.3.0-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:104544,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1353,2591,3840,5177,6309,7620,8625,9936,11340,12520,13738,14866,16283,17657,18686,19988,21273,22619,23752,24951,26258,27508,28475,29750,30933,32180,33395,34719,36001,37370,38493,39815,40846,42098,43430,44694,45843,47087,48148,49529,50694,51973,52925,53841,54836,55813,56839,57666,58870,59992,60967,62147,63251,64332,65428,66487,67522,68421,69377,70313,71189,72254,73304,74183,75061,76023,76873,77643,78601,79477,80180,81182,81962,82784,83846,84870,85685,86570,87422,88151,89161,89959,90920,91730,92475,93389,93912,94227,94541,94871,95182,95467,95783,96102,96442,96783,97081,97983,99053,100397,101548,102628,103861],sizes:[1353,1238,1249,1337,1132,1311,1005,1311,1404,1180,1218,1128,1417,1374,1029,1302,1285,1346,1133,1199,1307,1250,967,1275,1183,1247,1215,1324,1282,1369,1123,1322,1031,1252,1332,1264,1149,1244,1061,1381,1165,1279,952,916,995,977,1026,827,1204,1122,975,1180,1104,1081,1096,1059,1035,899,956,936,876,1065,1050,879,878,962,850,770,958,876,703,1002,780,822,1062,1024,815,885,852,729,1010,798,961,810,745,914,523,315,314,330,311,285,316,319,340,341,298,902,1070,1344,1151,1080,1233,683],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_more-itertools.data")}Module["addRunDependency"]("datafile_more-itertools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/more_itertools/recipes.py",start:0,end:14960,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/__init__.py",start:14960,end:15047,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/more.py",start:15047,end:85067,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_recipes.py",start:85067,end:104904,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/__init__.py",start:104904,end:104904,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools/tests/test_more.py",start:104904,end:175576,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/top_level.txt",start:175576,end:175591,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/PKG-INFO",start:175591,end:211730,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/dependency_links.txt",start:211730,end:211731,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/SOURCES.txt",start:211731,end:212311,audio:0},{filename:"/lib/python3.7/site-packages/more_itertools-4.3.0-py3.7.egg-info/requires.txt",start:212311,end:212329,audio:0}],remote_package_size:108640,package_uuid:"fe49192c-527e-4cbb-8d76-0f5763e4c32b"})})();