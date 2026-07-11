/*
  ============================================================
  ArZio PRODUCT LIST
  ============================================================
  This is the ONLY file you need to touch to add, edit, or
  remove products. No PIN, no login — just edit this file and
  push to GitHub. The website reads this list automatically.

  TO ADD A PRODUCT: copy one block below (from { to },),
  paste it inside the [ ] brackets, and change the values.

  FIELDS:
    id     -> must be unique, no spaces (e.g. "p007")
    name   -> product name
    price  -> shown as-is, e.g. "৳1,250"
    origin -> where it's sourced from, e.g. "Germany" (optional)
    tag    -> small badge, e.g. "New" or "Best Seller" (optional)
    image  -> a direct image link (right-click an image online ->
              "copy image address"). Leave as "" for a placeholder.
    desc   -> one or two line description
  ============================================================
*/

const PRODUCTS = [
  {
    id: "p001",
    name: "Cast Iron Skillet 10\"",
    price: "৳1,450",
    origin: "Germany",
    tag: "Best Seller",
    image: "",
    desc: "Pre-seasoned, oven-safe cast iron pan built for years of daily cooking."
  },
  {
    id: "p002",
    name: "Ceramic Knife Set (3pc)",
    price: "৳2,100",
    origin: "Japan",
    tag: "New",
    image: "",
    desc: "Lightweight, rust-proof blades that hold a sharp edge for months."
  },
  {
    id: "p003",
    name: "Stainless Steel Mixing Bowls (5pc)",
    price: "৳980",
    origin: "South Korea",
    tag: "",
    image: "",
    desc: "Nesting bowl set with airtight lids, dishwasher safe."
  }
];
