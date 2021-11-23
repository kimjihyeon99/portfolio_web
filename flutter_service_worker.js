'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "216daa6a8e71e15d9ca6a034f6bf4247",
".git/config": "efc4367487f0cff4b7c0fafc27b8e27e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c54f60e0411da9530d10d485c913f46e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca60a03a6ae24cefb8e68ad1a96648f9",
".git/logs/refs/heads/main": "bcc7e4912abce0f01aa65ba51702dbd3",
".git/logs/refs/remotes/origin/main": "8d9a7679dd5d8c4dd0c563963b47eadb",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/ae7b7a6921e7028568afba460b0c965e83921e": "430747ec27154425873a4bc58ff2b685",
".git/objects/16/b87da478db19fe97953304b432f036268beb9a": "c05cab6ca2ecdb72583b7154acc3c567",
".git/objects/17/846ad624d69ba7b832435241c8a7e0a4c649bf": "8913b3e2911522c7abfe013c43cff3e8",
".git/objects/1b/1b6080eb3da810877a42e5ca8ae47ee0327ea9": "170c530da45e94c7c03b856fd6a4421f",
".git/objects/25/b0f6908183dadf91a08f31aa0090f33192b847": "dc90745bdc16c4ac472f3dadae6c5eff",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/29/1aa44d2d503a81ea5ca59d6137ab86677eb48f": "c7778a1f8a9d616b348eec8ae6fec4a2",
".git/objects/2a/93b243bd25bd72181215c02bf495a7b5722aa3": "81512c0810a66fc29275c68553125b00",
".git/objects/2e/4e366bf14cb4967fe3f8e5fe5ed0a98530030d": "36ed7670f0b7f1d4f18bac78b817aac0",
".git/objects/2e/75632cb70992c816d2f38a672a8e09c9efb8a8": "ad430da87c7fa307a269bd268e3ce631",
".git/objects/2f/7b1300a9d1f75d31cb806d6a0467c6ec4eb6fd": "86fa5806c9140beba8b09a96c188a31e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/46531b0942165a5522a9014926cc0e2c5af506": "0a9b85c5bce5cef11211bb606a99efef",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3f/c194c8496d67e7998ac7589b60f78786d645f4": "19e74901e55afa4a73ebea3ebfef0127",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/12063b07f115e3e6596b1c60b5ab201d29e27b": "288bba68c50c7cac27cc607b71ac034f",
".git/objects/4c/2bb359c5dc7af2098ffa1e86a95bd62b91a9ca": "7987953cd859f18590861bd2b9278428",
".git/objects/4d/7513a82c831172f952385c8f9908fa0cae48a9": "dea3e6423a338dd666ffcd48db31156a",
".git/objects/5a/d4d549de38a223167afee621e131a307289f1b": "cd02f9d6dd586be43ac438f2e2f22b29",
".git/objects/66/2aa8bac597be90ea17bc89b8f37ab20dbbfd87": "b5120686ec1820b6f80faa031f641cb2",
".git/objects/6c/c3f1c15c826c8983bb1c293c6649b421fb95d7": "8694d8d3c04c2bd230e99f4ee60233a8",
".git/objects/74/61d7a71bc6a683a293222b624716df501338bd": "62e99fe0e7a3f8fbd909545198f04ce2",
".git/objects/79/334c3638caf69bc88cec42859b2c8f277f47ce": "b83e785e68f49eaa38a2c3746a774858",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/89774c487968db7712830a1169cee18b128c07": "c99ae47cb27abb1fdc37c94ec6b85664",
".git/objects/85/d6ebbe37f4f063919f8d429b2b987bd78c0edf": "d47b4bb1d014b8e9e220f44d9ae9228f",
".git/objects/86/7815c3c1e5d967c96f274da9ed240e4088d2b2": "af75c4036976662cffcf04a8038629bc",
".git/objects/88/be23129bba53d7f2d9780175d217a0fda1b3f5": "90d7322cb0f8ce3d20be5a14a1bcf47f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/15ee5103c8a897615ef9a5a51bd2c38d6697fa": "ec19750aef29600b38bd6abcc6967ca4",
".git/objects/95/7de9c7854de9de4a28a10c6675a5f2c12dccf3": "58c378ffe11a157e16a8d07d140de462",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/dc8cd267e2d9a1243732fb0225c60db1845e81": "818f2fbf4886f17c7bf916975e7117a7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/91041c82e76fc12704db3a50a82c65be4eb126": "b5494f21d9dddafc3e884ace65db9502",
".git/objects/a5/fa9e4fef4f975b0e0243ec616195e71f792ff7": "a76a78052eec98836313bbf06e5b1f6b",
".git/objects/a6/dba577619e141a6963ced962f75a33cda8cd3d": "abc3ac183186dac4b274aa724b7c5ac4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/c1b04cb2ece5f67b4a9753353f5c497fc84beb": "7d886dfbeba5b5bcca8f52fe75cd7c70",
".git/objects/b0/c2c6b7e464402fec82e364b14a45344dd675fd": "6b21c61ef61a3fd7402fef025655f074",
".git/objects/b2/953c08ec66525d38c852c31a2b4582310dbec3": "666a95747a0dd59fd6260725a350cee8",
".git/objects/b3/329eaa26ab19b3c7e0588bc4bdb0e8e35e5db7": "3e4070e4266eaf93eb7cd548ab0fb7c3",
".git/objects/b3/64cab503b0c6522a0ba37d0647e6f9a300ad62": "bd8420d2088140a0c90c1afddb7f4930",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/9a97021ac44052203dc4a6228032eac23424d1": "3a5a23e5caf32866249f8090624b62f2",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/c2c4381c0b6335118c1ed0f74c9929c914bcda": "80b451f4d9fbb3f8c337d46c4b04c50c",
".git/objects/db/2dd796580fe9f49e785fef6ee2a8267e64995c": "593c621b5c93e5148351bac2c5d73d83",
".git/objects/dc/a9760656711e3a704c4c0a80d472c634aac7a7": "5593a21639b573bda20dfceb34d058da",
".git/objects/e4/d64201508cda15eb5c592195d7b9d30c047cda": "dfac48c7a619f69adb617714f0d150e6",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/31347e2f0fa19bded19e93e458050dbbde3c9e": "6b7729f4c31b176534538a21824946f9",
".git/objects/f7/3c3ee6330b9c004d8f114ed4c75650b727aeff": "a8e7e7dc9ab22994cc272084f128ef12",
".git/objects/fb/68278068431a631a58edf95e08547d6b967883": "7aead8327c590ef0e449b12863e0da01",
".git/objects/fb/9b58583036ca2211d7df29e75f8d60937b074d": "18ea55d117445e5be59a3da4c969de01",
".git/ORIG_HEAD": "7d453aecba15a876c196010287b4fafb",
".git/refs/heads/main": "d3dd6248fcc9b8c826bf7aded3ad0b57",
".git/refs/remotes/origin/main": "d3dd6248fcc9b8c826bf7aded3ad0b57",
"assets/AssetManifest.json": "c8f131151c104f17bf4c177ec7efd03c",
"assets/assets/backimg.jpg": "3cba7cc8c3f80772e1e54bacfee74422",
"assets/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e4a0c7b13055d20717b11d3c3e64b1b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1235db6a6ca1a3eb9b9831188e57ecd0",
"/": "1235db6a6ca1a3eb9b9831188e57ecd0",
"main.dart.js": "2dfc807e51023fc5134ebe7c70c20fdb",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
