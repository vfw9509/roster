# VFW Post 9509 Member Roster — app front door

This small site makes the Member Roster installable on phones and computers, the same way as the Volunteer and Turkey Shoot apps. It shows the roster's Apps Script page full-screen. All member data stays in the Google Sheet; nothing is stored on GitHub.

Live at: https://vfw9509.github.io/roster/

## What the app remembers on a device
Only what the person chooses when signing in:
- **Remember my Login ID** (on by default)
- **Keep me signed in on this device (up to 6 hours)** (off by default — only on your own device with a screen lock)

Signing out, or the sign-in expiring, forgets the sign-in right away. The Login ID stays until they untick the box at the next sign-in.

## Setup (one time, on the vfw9509 GitHub account)
1. GitHub: **+ → New repository**. Name: `roster`. **Public**. Tick **Add a README**. **Create repository**.
2. Open https://github.com/vfw9509/roster/upload/main and drag in these files: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (and this README if you like). **Commit changes**.
3. **Settings → Pages** → Branch **main**, **/(root)** → **Save**. In about 2 minutes it's live.
4. Phone: open the link. iPhone Safari: **Share → Add to Home Screen**. Android Chrome: **⋮ → Install app / Add to Home screen**.

`EXEC_URL` in `index.html` is already set to the roster's current deployment. If you ever make a *new* deployment instead of updating the existing one, paste its `/exec` link there and re-upload `index.html`.

The manifest's `"id": "/roster/"` keeps Android from mixing this app up with the other vfw9509.github.io apps. Don't change it.
