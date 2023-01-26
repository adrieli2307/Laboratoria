// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function enviar() {
  var contadorResultado = 0;
  var respuestaP1 = document.getElementById("No1");
  if (respuestaP1.checked) {
    contadorResultado++;
  }
  var respuestaP2 = document.getElementById("aa/mm/dd1");
  if (respuestaP2.checked) {
    contadorResultado++;
  }
  var respuestaP3 = document.getElementById("20001");
  if (respuestaP3.checked) {
    contadorResultado++;
  }
  alert("Tu puntaje final es:  " + contadorResultado);
}
function comprobar1() {
  document.getElementById("respuesta1").innerHTML = " La respuesta correcta es :NO";
  document.getElementById("Si1").disabled = true;
  document.getElementById("No1").disabled = true;
  document.getElementById("Nose1").disabled = true;
}
function comprobar2() {
  document.getElementById("respuesta2").innerHTML = " La respuesta correcta es :aa/mm/dd";
  document.getElementById("dd/mm/aa1").disabled = true;
  document.getElementById("aa/mm/dd1").disabled = true;
  document.getElementById("mm/aa/dd1").disabled = true;
}
function comprobar3() {
  document.getElementById("respuesta3").innerHTML = " La respuesta correcta es :2000";
  document.getElementById("30001").disabled = true;
  document.getElementById("20001").disabled = true;
  document.getElementById("40001").disabled = true;
}
function seleccionoRespuesta() {
  alert("¿Estas seguro de escoger esta respuesta?");
}
function mostrarpregunta2() {
  document.getElementById("pregunta2").style.display = "block";
  document.getElementById("pregunta1").style.display = "none";
}
function mostrarpregunta3() {
  document.getElementById("pregunta3").style.display = "block";
  document.getElementById("pregunta2").style.display = "none";
}
function contartiempo() {
  var timer = 5;
  var intervalo = setInterval(function () {
    timer--;
    if (timer <= 0) {
      clearInterval(intervalo);
      enviar();
      location.reload();
    }
    document.getElementById("t-restante").innerHTML = "Tiempo: ".concat(timer, " segundos");
  }, 1000);
}
function juegaAhora() {
  var nombre = prompt("Ingresa tu nombre");
  if (nombre == "") {
    alert(" Debes ingrsar tu nombre");
    return;
  }

  //Mostrar nombre
  document.getElementById("mensaje_saludo").innerHTML = "Bienvenido " + nombre + " vamos a jugar";
  document.getElementById("myButton").style.display = "none";
  document.getElementById("boddy").style.backgroundColor = "#FFEBEE";
  document.getElementById("Imagen1").style.display = "none";

  // Mostrar form
  contartiempo();
  document.getElementById("triviaDivertida").style.display = "block";
  document.getElementById("pregunta1").style.display = "block";
  //document.getElementById("pregunta2").style.display = "block";
  //document.getElementById("pregunta3").style.display = "block";//
  document.getElementById("mensaje_saludo").style.display = "block";
  document.getElementById("mensaje_bienvenida").style.display = "none";
  document.getElementById("boddy").style.backgroundImage = "url(https://31.media.tumblr.com/f66561ade3154a5abd42e0ccc27b3991/tumblr_nqzg9dCNKP1ua6afwo1_400.gif)";
}
var botonSiguiente = document.getElementById("sig1");
botonSiguiente.addEventListener("click", mostrarpregunta2);
var botonSiguiente = document.getElementById("sig2");
botonSiguiente.addEventListener("click", mostrarpregunta3);
var botonJugar = document.getElementById("myButton");
botonJugar.addEventListener("click", juegaAhora);
var botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", enviar);
var opcionEcuador = document.getElementById("No1");
opcionEcuador.addEventListener("click", seleccionoRespuesta);
var opcionChile = document.getElementById("Si1");
opcionChile.addEventListener("click", seleccionoRespuesta);
var opcionParaguay = document.getElementById("Nose1");
opcionParaguay.addEventListener("click", seleccionoRespuesta);
var opcionPeso = document.getElementById("dd/mm/aa1");
opcionPeso.addEventListener("click", seleccionoRespuesta);
var opcionSucre = document.getElementById("aa/mm/dd1");
opcionSucre.addEventListener("click", seleccionoRespuesta);
var opcionBolivar = document.getElementById("mm/aa/dd1");
opcionBolivar.addEventListener("click", seleccionoRespuesta);
var opcionArroz = document.getElementById("30001");
opcionArroz.addEventListener("click", seleccionoRespuesta);
var opcionSushi = document.getElementById("20001");
opcionSushi.addEventListener("click", seleccionoRespuesta);
var opcionOnigiri = document.getElementById("40001");
opcionOnigiri.addEventListener("click", seleccionoRespuesta);
var opcionComprobar = document.getElementById("comprobar1");
opcionComprobar.addEventListener("click", comprobar1);
var opcionComprobar2 = document.getElementById("comprobar2");
opcionComprobar2.addEventListener("click", comprobar2);
var opcionComprobar3 = document.getElementById("comprobar3");
opcionComprobar3.addEventListener("click", comprobar3);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36305" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map