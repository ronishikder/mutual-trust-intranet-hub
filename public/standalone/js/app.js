/* MTB Banking Intranet - App JS */

document.addEventListener('DOMContentLoaded', function () {

  // ===== THEME TOGGLE =====
  var themeToggle = document.getElementById('themeToggle');
  var savedTheme = localStorage.getItem('mtb-theme');

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="bi bi-sun" style="font-size:1.125rem"></i>';
    themeToggle.style.color = 'var(--mtb-yellow)';
  }

  themeToggle.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('mtb-theme', 'light');
      this.innerHTML = '<i class="bi bi-moon" style="font-size:1.125rem"></i>';
      this.style.color = 'var(--muted-fg)';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('mtb-theme', 'dark');
      this.innerHTML = '<i class="bi bi-sun" style="font-size:1.125rem"></i>';
      this.style.color = 'var(--mtb-yellow)';
    }
  });

  // ===== MEGA MENU TOGGLE =====
  var megaButtons = document.querySelectorAll('[data-mega-toggle]');
  var megaCloseButtons = document.querySelectorAll('[data-mega-close]');
  var openMenu = null;

  function closeAllMegas() {
    document.querySelectorAll('.mega-menu').forEach(function (m) { m.classList.remove('show'); });
    megaButtons.forEach(function (b) { b.classList.remove('active'); });
    openMenu = null;
  }

  megaButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.getAttribute('data-mega-toggle');
      var menu = document.getElementById('mega-' + target);
      if (openMenu === target) {
        closeAllMegas();
      } else {
        closeAllMegas();
        menu.classList.add('show');
        this.classList.add('active');
        openMenu = target;
      }
    });
  });

  megaCloseButtons.forEach(function (btn) {
    btn.addEventListener('click', closeAllMegas);
  });

  document.addEventListener('click', function (e) {
    var nav = document.getElementById('mainNav');
    if (openMenu && nav && !nav.contains(e.target)) {
      closeAllMegas();
    }
  });

  // ===== BRANCHES GRID =====
  var branchData = {
    A: ["Abu Torab Bazar","Mirsharai BEPZA","Aganagar","Agrabad"],
    B: ["Babu Bazar","Bagher Bazar","Banani","Baraipara"],
    C: ["CDA Avenue","Chandra","Chawk Moghaltuli","Ctg Medical College"],
    D: ["Dania","Jatrabari","Dagonbhuiyan","Dhanbari"],
    E: ["EPZ Dhaka","Elephant Road"],
    F: ["Faridpur","Feni","Fatulla"],
    G: ["Gazipur","Gulshan","Gopalganj"],
    H: ["Hazaribagh","Hatirpool","Habiganj"],
    I: ["Imamganj","Ishwardi"],
    J: ["Jashore","Joypurhat","Jamuna"],
    K: ["Khulna","Kushtia","Kuril"],
    L: ["Lalbagh","Lalmonirhat"],
    M: ["Mirpur","Mohakhali","Motijheel","Mymensingh"],
    N: ["Narayanganj","Narsingdi","Nawabpur"],
    O: ["Old Dhaka"],
    P: ["Pallabi","Panthapath","Purana Paltan"],
    Q: [], R: ["Rajshahi","Rangpur","Rampura"],
    S: ["Sylhet","Savar","Satkhira"],
    T: ["Tejgaon","Tongi"],
    U: ["Uttara","Uttarkhan"],
    V: [], W: ["Wari"], X: [], Y: [], Z: []
  };

  var branchGrid = document.getElementById('branchGrid');
  if (branchGrid) {
    var letters = Object.keys(branchData);
    var html = '';
    for (var i = 0; i < letters.length; i += 6) {
      html += '<div class="row g-3 mb-3">';
      for (var j = i; j < i + 6 && j < letters.length; j++) {
        var letter = letters[j];
        var items = branchData[letter];
        html += '<div class="col-2">';
        html += '<div class="d-flex align-items-center gap-2 mb-2"><span class="d-flex align-items-center justify-content-center rounded fw-bold text-white" style="width:24px;height:24px;font-size:0.75rem;background:var(--mtb-teal)">' + letter + '</span></div>';
        if (items.length > 0) {
          html += '<ul class="list-unstyled mb-0">';
          items.forEach(function (item) {
            var slug = item.toLowerCase().replace(/\s+/g, '-');
            html += '<li><a href="branch-' + slug + '.html" class="sidebar-link py-1" style="font-size:0.75rem"><span style="color:var(--mtb-teal);font-size:0.5rem">▸</span> ' + item + '</a></li>';
          });
          html += '</ul>';
        } else {
          html += '<p class="mb-0 text-muted fst-italic" style="font-size:0.625rem;padding-left:0.5rem">No branches</p>';
        }
        html += '</div>';
      }
      html += '</div>';
    }
    branchGrid.innerHTML = html;
  }

  // ===== DROPDOWN TOGGLES =====
  function setupDropdown(wrapperId, toggleId, dropdownId) {
    var wrapper = document.getElementById(wrapperId);
    var toggle = document.getElementById(toggleId);
    var dropdown = document.getElementById(dropdownId);
    if (!toggle || !dropdown) return;
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('d-none');
    });
    document.addEventListener('click', function (e) {
      if (wrapper && !wrapper.contains(e.target)) {
        dropdown.classList.add('d-none');
      }
    });
  }

  setupDropdown('mailWrapper', 'mailToggle', 'mailDropdown');
  setupDropdown('notifWrapper', 'notifToggle', 'notifDropdown');

  // ===== CIRCULAR TABS =====
  var circularTabs = document.querySelectorAll('.circular-tab');
  circularTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');
      circularTabs.forEach(function (t) {
        t.classList.remove('active', 'text-white');
        t.style.backgroundColor = 'transparent';
        t.style.color = 'var(--foreground)';
      });
      this.classList.add('active', 'text-white');
      this.style.backgroundColor = 'var(--mtb-red)';
      this.style.color = 'white';
      document.getElementById('circulars-mtb').classList.toggle('d-none', target !== 'mtb');
      document.getElementById('circulars-bb').classList.toggle('d-none', target !== 'bb');
    });
  });

  // ===== TRAINING MONTHS =====
  var monthNames = { Jan: 'January', Feb: 'February', Mar: 'March' };
  var trainingMonths = document.querySelectorAll('.training-month');
  trainingMonths.forEach(function (btn) {
    btn.addEventListener('click', function () {
      trainingMonths.forEach(function (b) {
        b.classList.remove('active', 'text-white');
        b.classList.add('btn-outline-secondary');
        b.style.backgroundColor = '';
      });
      this.classList.add('active', 'text-white');
      this.classList.remove('btn-outline-secondary');
      this.style.backgroundColor = 'var(--mtb-teal)';
      var month = this.getAttribute('data-month');
      document.getElementById('trainingText').textContent = 'No trainings scheduled for ' + (monthNames[month] || month);
    });
  });

  // ===== SEARCH =====
  var headerSearch = document.getElementById('headerSearch');
  if (headerSearch) {
    headerSearch.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var q = this.value.trim();
        if (q) alert('Search: ' + q);
      }
    });
  }

});