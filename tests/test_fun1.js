function getMixinKey(e) {
    var t = [];
    return [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27,
        43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7,
        16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56,
        59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function(r) {
            e.charAt(r) && t.push(e.charAt(r))
        }
    )),
        t.join("").slice(0, 32)
}
function getLocal(e) {
    try {
        return localStorage.getItem(e)
    } catch (t) {
        return null
    }
}
function encWbi(e, t) {
    t || (t = {});
    var r = getWbiKey(t)
        , n = r.imgKey
        , i = r.subKey;
    if (n && i) {
        for (var o = getMixinKey(n + i), a = Math.round(Date.now() / 1e3), s = Object.assign({}, e, {
            wts: a
        }), l = Object.keys(s).sort(), c = [], u = /[!'\(\)*]/g, d = 0; d < l.length; d++) {
            var h = l[d]
                , p = s[h];
            p && "string" == typeof p && (p = p.replace(u, "")),
            null != p && c.push("".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(p)))
        }
        var f = c.join("&");
        return {
            w_rid: md5(f + o),
            wts: a.toString()
        }
    }
    return null
}
getMixinKey(5)