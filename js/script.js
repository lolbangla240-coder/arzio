/* ============================================================
   ArZio site script
   Reads the PRODUCTS array from js/products.js and renders the
   catalog. No backend, no storage, no PIN — everything lives in
   products.js so this works on GitHub Pages or any static host.
   ============================================================ */
(function(){
  // Change this to your Facebook page/Messenger link any time.
  const FB_LINK = "https://www.facebook.com/share/188EN3N99x/";

  document.getElementById('headerOrderBtn').href = FB_LINK;
  document.getElementById('heroOrderBtn').href = FB_LINK;
  const fbFooter = document.getElementById('fbFooterLink');
  if (fbFooter) fbFooter.href = FB_LINK;

  const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23DECBA0%22/%3E%3C/svg%3E';

  function escapeHtml(str){
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function renderGrid(){
    const grid = document.getElementById('productGrid');
    const list = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];

    if(!list.length){
      grid.innerHTML = '<div class="empty-state">এখনও কোনো পণ্য যোগ করা হয়নি।<br><b>js/products.js</b> ফাইলটি খুলে আপনার প্রথম পণ্য যোগ করুন।</div>';
      return;
    }

    grid.innerHTML = list.map((p, i) => `
      <div class="card">
        <div class="card-img-wrap">
          <img class="card-img" src="${p.image ? escapeHtml(p.image) : PLACEHOLDER_IMG}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'" />
          ${p.tag ? `<div class="card-stamp">${escapeHtml(p.tag)}</div>` : ''}
        </div>
        <div class="perf"></div>
        <div class="card-body">
          <div class="item-no">পণ্য নং ${String(i+1).padStart(3,'0')}</div>
          <h3>${escapeHtml(p.name)}</h3>
          ${p.origin ? `<div class="origin">উৎস — ${escapeHtml(p.origin)}</div>` : ''}
          <p class="desc">${escapeHtml(p.desc || '')}</p>
          <div class="card-foot">
            <span class="price">${escapeHtml(p.price || '')}</span>
            <a class="order-btn" href="${FB_LINK}" target="_blank" rel="noopener">অর্ডার করুন →</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderGrid();
})();
