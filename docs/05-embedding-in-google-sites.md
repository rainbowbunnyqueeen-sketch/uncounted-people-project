# Step 5 — Embedding Your System Card in Google Sites

Your public system card is a real webpage that anyone with the link can visit.
You can also **embed** it directly inside a Google Sites page so visitors see it
without ever leaving your site.

---

## Before you start

- Your Uncounted People site must be deployed and working on Vercel.
- You need your **share link** from the dashboard
  (e.g. `https://uncounted-people-project.vercel.app/s/abc123`).

---

## Steps

### 1. Copy your share link

1. Sign in to your Uncounted People dashboard.
2. Scroll to **Your Share Link**.
3. Click **Copy** to copy the URL.

### 2. Open your Google Site for editing

1. Go to [sites.google.com](https://sites.google.com).
2. Open your site and click the **pencil (edit)** icon.

### 3. Add an Embed block

1. In the right-hand panel click **Insert**.
2. Scroll down and click **Embed**.
3. Choose the **Embed code** tab (not "By URL").

### 4. Paste the iframe code

Replace `YOUR_SHARE_URL` below with the link you copied in step 1:

```html
<iframe
  src="YOUR_SHARE_URL"
  width="100%"
  height="700"
  style="border: none; border-radius: 16px;"
  loading="lazy">
</iframe>
```

Example with a real link:

```html
<iframe
  src="https://uncounted-people-project.vercel.app/s/abc123ef"
  width="100%"
  height="700"
  style="border: none; border-radius: 16px;"
  loading="lazy">
</iframe>
```

Click **Next**, then **Insert**.

### 5. Resize if needed

- Drag the edges of the embed block to make it taller or shorter.
- If your system has many alters, change `height="700"` to `height="900"` or
  `height="1000"` in the code and re-paste it.

### 6. Publish

Click **Publish** in the top-right corner of Google Sites for the embed to go live.

---

## Keeping it up to date

You do not need to change anything in Google Sites when you update your system
card. The embed always loads the live version — so when you toggle who is
fronting in your dashboard, anyone viewing your Google Site will see the
updated card on their next page load.

---

## Troubleshooting

| Problem | What to try |
|---|---|
| Embed shows blank | Make sure the share URL is correct and the Vercel deployment is live |
| Card looks cut off | Increase the `height` value in the embed code |
| Changes not showing | Ask your viewer to do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) |
| Google Sites shows an error preview | This is sometimes just the editor — click Publish and check the live site |

---

## Privacy reminder

Anyone who can see your Google Site will be able to see your system card through
the embed. If you want to take it down, you can either:

- **Regenerate your link** in the dashboard (the embed will stop working until
  you update it with the new link), or
- **Remove the Embed block** from Google Sites entirely.
