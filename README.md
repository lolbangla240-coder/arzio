# ArZio — Global Home & Kitchen Essentials

A static storefront page. No backend, no database — safe to host on GitHub Pages.

## Folder structure
```
index.html          -> the page itself
css/style.css        -> all styling
js/products.js        -> YOUR PRODUCT LIST — edit this to add/remove items
js/script.js          -> renders products.js onto the page (rarely needs editing)
assets/logo.png       -> your brand logo
```

## Adding / editing / removing a product
Open `js/products.js`. Each product is a block like this:

```js
{
  id: "p004",
  name: "Non-Stick Frying Pan",
  price: "৳890",
  origin: "Turkey",
  tag: "New",
  image: "https://example.com/pan.jpg",
  desc: "Even heat distribution, dishwasher safe."
}
```

- Copy an existing block, paste it inside the `[ ]` list, give it a unique `id`.
- To get an image link: upload the photo anywhere online (Facebook post, Imgur, Google Drive with public sharing, etc.), right-click the image → "Copy image address," and paste that into `image`.
- Leave `image: ""` to show a plain placeholder until you add a real photo.
- Save the file, commit, and push — the live site updates automatically once GitHub Pages rebuilds (usually under a minute).

No PIN, no admin login — editing the file *is* the editing system, and GitHub itself (via your account) is what keeps it protected.

## Changing the Messenger link
Open `js/script.js` and edit the `FB_LINK` value near the top.

## Hosting on GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
3. Your site will be live at `https://yourusername.github.io/repo-name/`.
