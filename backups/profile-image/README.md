# Profile image restore point

`ali_raza-original.png` is the exact source image preserved before the production WebP optimization.

- Original dimensions: `1086 × 1448`
- Original size: approximately `2.0 MB`
- SHA-256: `beaddab0abf911b77989bda1f194b64f60e460a814e696f67c4281bf9db1385c`
- Production asset: `public/ali_raza.webp` (`720 × 960`)

The backup is outside `public/`, so Vite does not include it in the deployed site.

To restore the original:

1. Copy `backups/profile-image/ali_raza-original.png` to `public/ali_raza.png`.
2. In `src/components/Hero.jsx`, change the image source from `/ali_raza.webp` to `/ali_raza.png`.
3. Change the image dimensions to `width="1086"` and `height="1448"`.
