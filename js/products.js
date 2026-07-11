/*
  ============================================================
  ArZio প্রোডাক্ট লিস্ট
  ============================================================
  এই ফাইলটাই একমাত্র জায়গা যেখান থেকে প্রোডাক্ট যোগ, এডিট, বা মুছা যায়।
  কোনো PIN বা লগইন লাগবে না — শুধু এই ফাইল এডিট করে GitHub-এ push
  করলেই ওয়েবসাইট অটোমেটিক নতুন লিস্ট দেখাবে।

  নতুন প্রোডাক্ট যোগ করতে: নিচের যেকোনো একটা ব্লক ({ থেকে }, পর্যন্ত)
  কপি করে [ ] bracket-এর ভেতরে পেস্ট করো, তারপর মান বদলে দাও।

  ফিল্ডসমূহ:
    id     -> ইউনিক হতে হবে, স্পেস দেওয়া যাবে না (যেমন "p011")
    name   -> প্রোডাক্টের নাম
    price  -> যেভাবে লিখবে সেভাবেই দেখাবে, যেমন "৳১,২৫০"
    origin -> কোথা থেকে সংগ্রহ করা (ঐচ্ছিক), যেমন "চীন"
    tag    -> ছোট ব্যাজ (ঐচ্ছিক), যেমন "নতুন" বা "বেস্ট সেলার"
    image  -> ছবির লিংক। দুই ভাবে দেওয়া যায়:
              ১) লোকাল ছবি: ছবিটা assets/products/ ফোল্ডারে রেখে
                 path দাও, যেমন "assets/products/my-item.jpg"
              ২) অনলাইন লিংক: কোনো ছবির উপর right-click করে
                 "Copy image address" নিয়ে বসাও।
              খালি "" রাখলে অটো একটা placeholder ছবি দেখাবে।
    desc   -> এক-দুই লাইনের বর্ণনা
  ============================================================
*/

const PRODUCTS = [
  {
    id: "p001",
    name: "রুটি মেকার (স্ট্যান্ডার্ড)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/roti-maker-standard.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p002",
    name: "রুটি মেকার (মাল্টি মেকার — লাইট ইন্ডিকেটরসহ)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/roti-maker-multi.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p003",
    name: "পুশ চপার (DTC, ৭০০ মিলি)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/push-chopper-dtc.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p004",
    name: "পুশ চপার (টিল কালার)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/push-chopper-teal.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p005",
    name: "ভেজি স্লাইসার (১৬ পিস সেট)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/veggie-slicer-16pc.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p006",
    name: "সিলভার ক্রেস্ট ইলেকট্রিক গ্রাইন্ডার",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/silvercrest-grinder.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p007",
    name: "প্রেস্টিজ মিনি মাল্টি কুকার",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/prestige-mini-cooker.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p008",
    name: "নোভা পুশ চপার (১১০০ মিলি)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/nova-push-chopper.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p009",
    name: "পটেটো কাটার (Famous)",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/potato-cutter.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  },
  {
    id: "p010",
    name: "প্রেস্টিজ গ্রাইন্ডিং মেশিন",
    price: "৳___",
    origin: "",
    tag: "",
    image: "assets/products/prestige-grinding-machine.jpg",
    desc: "এখানে বর্ণনা লিখুন।"
  }
];
