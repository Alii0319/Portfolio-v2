# Favicon restore point

`favicon-original.svg` is the exact AR monogram favicon used before the profile-photo favicon update.

`favicon-photo-source.png` is the square, identity-preserving source crop used to generate the production favicon files.

To restore the original favicon:

1. Copy `backups/favicon/favicon-original.svg` to `public/favicon.svg`.
2. In `index.html`, replace the PNG favicon link with:
   `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
3. Remove the `apple-touch-icon` link if the photo-based touch icon is no longer wanted.
