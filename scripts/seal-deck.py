#!/usr/bin/env python3
"""Seal an HTML document behind the Levenhall access-key gate.

Usage:
    python3 scripts/seal-deck.py <input.html> <output-dir> [--key KEY]

Encrypts the input with AES-256-GCM under a PBKDF2-SHA256 key (600k
iterations — the same parameters the /dco/deck/ gate uses) and writes a
self-contained gate page to <output-dir>/index.html. If --key is omitted a
fresh key is generated and printed ONCE; store it in the password manager.
"""

import argparse
import base64
import secrets
import sys
from pathlib import Path

from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITERATIONS = 600_000

GATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Levenhall — Protected Document</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Source+Sans+3:wght@400;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{height:100%}
body{background:#0a1220;color:#fafaf8;font-family:'Source Sans 3',sans-serif;display:flex;align-items:center;justify-content:center;padding:2rem}
.gate{width:100%;max-width:440px;border:1px solid #2a3548;padding:2.6rem 2.4rem}
.route{font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:#5a6478;margin-bottom:2rem}
.route b{color:#c9a961;font-weight:500}
h1{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.7rem;line-height:1.2;margin-bottom:.7rem}
p.sub{color:#8a94a8;font-size:.95rem;line-height:1.6;margin-bottom:1.8rem}
label{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#8a94a8;display:block;margin-bottom:.5rem}
input{width:100%;background:#0e1729;border:1px solid #2a3548;color:#fafaf8;padding:.8rem 1rem;font-family:'JetBrains Mono',monospace;font-size:.9rem;margin-bottom:1rem}
input:focus{outline:none;border-color:#c9a961}
button{width:100%;background:#c9a961;color:#0a1220;border:none;padding:.85rem;font-family:'JetBrains Mono',monospace;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;font-weight:500;cursor:pointer}
button:disabled{opacity:.6;cursor:wait}
.err{display:none;color:#d0314b;font-size:.85rem;margin-top:.9rem}
.err.show{display:block}
.foot{font-family:'JetBrains Mono',monospace;font-size:.55rem;letter-spacing:.08em;line-height:1.8;color:#5a6478;margin-top:1.8rem}
.foot a{color:#8a94a8}
</style>
</head>
<body>
<div class="gate">
  <div class="route">Levenhall / <b>Griffin</b> / Protected</div>
  <h1>This document is sealed.</h1>
  <p class="sub">Enter the access key you were provided to unseal it. Decryption happens entirely in your browser.</p>
  <form id="f">
    <label for="k">Access key</label>
    <input id="k" type="password" autocomplete="current-password" autofocus spellcheck="false">
    <button id="b" type="submit">Unseal Document</button>
    <div class="err" id="e">Incorrect access key.</div>
  </form>
  <div class="foot">Encrypted at rest · AES-256-GCM · Decrypted only in your browser<br>Access requests: <a href="mailto:adam@levenhall.com">adam@levenhall.com</a></div>
</div>
<script>
const BLOB = {salt:"__SALT__", iv:"__IV__", iter:__ITER__, ct:"__CT__"};
const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function unseal(pass){
  const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({name:'PBKDF2', salt:b64(BLOB.salt), iterations:BLOB.iter, hash:'SHA-256'}, km, {name:'AES-GCM', length:256}, false, ['decrypt']);
  const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv:b64(BLOB.iv)}, key, b64(BLOB.ct));
  return new TextDecoder().decode(pt);
}
async function attempt(pass, silent){
  const btn = document.getElementById('b'), err = document.getElementById('e');
  btn.disabled = true; btn.textContent = 'Unsealing…'; err.classList.remove('show');
  try {
    const html = await unseal(pass);
    sessionStorage.setItem('griffin-key2', pass);
    document.open(); document.write(html); document.close();
  } catch (_) {
    btn.disabled = false; btn.textContent = 'Unseal Document';
    if (!silent) { err.classList.add('show'); document.getElementById('k').select(); }
    else { sessionStorage.removeItem('griffin-key2'); }
  }
}
document.getElementById('f').addEventListener('submit', e => { e.preventDefault(); attempt(document.getElementById('k').value, false); });
const saved = sessionStorage.getItem('griffin-key2');
if (saved) attempt(saved, true);
</script>
</body>
</html>
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("input")
    ap.add_argument("outdir")
    ap.add_argument("--key", default=None)
    args = ap.parse_args()

    key = args.key or f"Griffin-{secrets.token_urlsafe(8)}"
    salt = secrets.token_bytes(16)
    iv = secrets.token_bytes(12)
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt,
                     iterations=ITERATIONS)
    aes = AESGCM(kdf.derive(key.encode()))
    ct = aes.encrypt(iv, Path(args.input).read_bytes(), None)

    page = (GATE
            .replace("__SALT__", base64.b64encode(salt).decode())
            .replace("__IV__", base64.b64encode(iv).decode())
            .replace("__ITER__", str(ITERATIONS))
            .replace("__CT__", base64.b64encode(ct).decode()))
    out = Path(args.outdir)
    out.mkdir(parents=True, exist_ok=True)
    (out / "index.html").write_text(page)
    print(f"sealed → {out / 'index.html'}")
    print(f"ACCESS KEY (store it now; it is not saved anywhere): {key}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
