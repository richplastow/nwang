// Generated by CoffeeScript 1.9.2

/*! Nwang 0.0.2 //// MIT Licence //// http://nwang.richplastow.com/ */

(function() {
  var Main, ª, ªA, ªB, ªC, ªE, ªF, ªN, ªO, ªR, ªS, ªU, ªV, ªW, ªX, ªex, ªhas, ªredefine, ªtype, ªuid;

  ªC = 'Nwang';

  ªV = '0.0.2';

  ªA = 'array';

  ªB = 'boolean';

  ªE = 'error';

  ªF = 'function';

  ªN = 'number';

  ªO = 'object';

  ªR = 'regexp';

  ªS = 'string';

  ªU = 'undefined';

  ªX = 'null';

  ªW = this;

  ª = console.log.bind(console);

  ªex = function(x, a, b) {
    var pos;
    if (-1 === (pos = a.indexOf(x))) {
      return x;
    } else {
      return b.charAt(pos);
    }
  };

  ªhas = function(h, n, t, f) {
    if (t == null) {
      t = true;
    }
    if (f == null) {
      f = false;
    }
    if (-1 !== h.indexOf(n)) {
      return t;
    } else {
      return f;
    }
  };

  ªtype = function(x) {
    return {}.toString.call(x).match(/\s([a-z0-9]+)/i)[1].toLowerCase();
  };

  ªuid = function(p) {
    return p + '_' + (Math.random() + '1111111111111111').slice(2, 18);
  };

  ªredefine = function(obj, name, value, kind) {
    switch (kind) {
      case 'constant':
        return Object.defineProperty(obj, name, {
          value: value,
          enumerable: true
        });
      case 'private':
        return Object.defineProperty(obj, name, {
          value: value,
          enumerable: false
        });
    }
  };

  Main = (function() {
    Main.prototype.C = ªC;

    Main.prototype.toString = function() {
      return "[object " + this.C + "]";
    };

    function Main(config) {
      if (config == null) {
        config = {};
      }
      this.xx = null;
    }

    Main.prototype.sf3 = function(x) {
      var tx, u;
      tx = typeof x;
      if (ªN === tx) {
        if (-10000 > x) {
          throw RangeError(this.C + ":sf3()\n  `x` is < -10000");
        }
        if (-1000 > x) {
          return String.fromCharCode(0xAFE8 + Math.round(x / 10));
        }
        if (-100 > x) {
          return String.fromCharCode(0xB36C + Math.round(x));
        }
        if (-10 > x) {
          return String.fromCharCode(0xB6F0 + Math.round(x * 10));
        }
        if (-1 > x) {
          return String.fromCharCode(0xBA74 + Math.round(x * 100));
        }
        if (-0.1 > x) {
          return String.fromCharCode(0xBDF8 + Math.round(x * 1000));
        }
        if (0.1 > x) {
          return String.fromCharCode(0xC17C + Math.round(x * 10000));
        }
        if (1 > x) {
          return String.fromCharCode(0xC500 + Math.round(x * 1000));
        }
        if (10 > x) {
          return String.fromCharCode(0xC884 + Math.round(x * 100));
        }
        if (100 > x) {
          return String.fromCharCode(0xCC08 + Math.round(x * 10));
        }
        if (1000 > x) {
          return String.fromCharCode(0xCF8C + Math.round(x));
        }
        if (10000 >= x) {
          return String.fromCharCode(0xD310 + Math.round(x / 10));
        }
        if (x !== x) {
          throw RangeError(this.C + ":sf3()\n  `x` is not a number");
        }
        throw RangeError(this.C + ":sf3()\n  `x` is > 10000");
      }
      if (ªS === tx) {
        u = x.charCodeAt(0);
        if (0xAC00 > u) {
          throw RangeError(this.C + ":sf3()\n  `x` codepoint " + u + " < " + 0xAC00);
        }
        if (0xAF85 > u) {
          return '' + ((u - 0xAFE8) * 10);
        }
        if (0xB309 > u) {
          return '' + (u - 0xB36C);
        }
        if (0xB68D > u) {
          return ((u - 0xB6F0) * 0.1).toFixed(1);
        }
        if (0xBA11 > u) {
          return ((u - 0xBA74) * 0.01).toFixed(2);
        }
        if (0xBD95 > u) {
          return ((u - 0xBDF8) * 0.001).toFixed(3);
        }
        if (0xC564 > u) {
          return ((u - 0xC17C) * 0.0001).toFixed(4);
        }
        if (0xC8E8 > u) {
          return ((u - 0xC500) * 0.001).toFixed(3);
        }
        if (0xCC6C > u) {
          return ((u - 0xC884) * 0.01).toFixed(2);
        }
        if (0xCFF0 > u) {
          return ((u - 0xCC08) * 0.1).toFixed(1);
        }
        if (0xD374 > u) {
          return '' + (u - 0xCF8C);
        }
        if (0xD6F8 >= u) {
          return '' + ((u - 0xD310) * 10);
        }
        if (u !== u) {
          throw RangeError(this.C + ":sf3()\n  `x` is an empty string");
        }
        throw RangeError(this.C + ":sf3()\n  `x` codepoint " + u + " > " + 0xD6F8);
      }
      throw TypeError(this.C + ":sf3()\n  `x` is " + tx + " not number|string");
    };

    return Main;

  })();

  if (ªF === typeof define && define.amd) {
    define(function() {
      return Main;
    });
  } else if (ªO === typeof module && module && module.exports) {
    module.exports = Main;
  } else {
    this[ªC] = Main;
  }

}).call(this);
