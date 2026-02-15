// MTB Banking Intranet - App JS

document.addEventListener('DOMContentLoaded', function () {

  // ── Theme Toggle ──
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const saved = localStorage.getItem('mtb-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);

    themeBtn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('mtb-theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === 'dark'
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon"></i>';
  }

  // ── Mega Menu Toggle ──
  document.querySelectorAll('[data-mega-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-mega-toggle');
      const menu = document.getElementById(targetId);
      const isOpen = menu && menu.classList.contains('show');

      // Close all menus first
      document.querySelectorAll('.mega-menu').forEach(function (m) { m.classList.remove('show'); });
      document.querySelectorAll('[data-mega-toggle]').forEach(function (b) { b.classList.remove('active'); });

      if (!isOpen && menu) {
        menu.classList.add('show');
        this.classList.add('active');
      }
    });
  });

  // Close mega menus on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mtb-nav') && !e.target.closest('.mega-menu')) {
      document.querySelectorAll('.mega-menu').forEach(function (m) { m.classList.remove('show'); });
      document.querySelectorAll('[data-mega-toggle]').forEach(function (b) { b.classList.remove('active'); });
    }
  });

  // ── Form Validation ──
  var forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity()) {
        var btn = form.querySelector('button[type="submit"]');
        if (btn) {
          var originalText = btn.innerHTML;
          btn.disabled = true;
          btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status"></span> Submitting...';

          setTimeout(function () {
            btn.disabled = false;
            btn.innerHTML = originalText;
            form.classList.remove('was-validated');
            form.reset();
            showToast('Form submitted successfully!', 'success');
          }, 1500);
        }
      }

      form.classList.add('was-validated');
    });
  });

  // ── Toast Notification ──
  window.showToast = function (message, type) {
    var container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '1090';
      document.body.appendChild(container);
    }

    var bgClass = type === 'success' ? 'text-bg-success' : type === 'danger' ? 'text-bg-danger' : 'text-bg-primary';
    var toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center ' + bgClass + ' border-0';
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML =
      '<div class="d-flex">' +
        '<div class="toast-body">' + message + '</div>' +
        '<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>' +
      '</div>';
    container.appendChild(toastEl);

    var toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
    toastEl.addEventListener('hidden.bs.toast', function () { toastEl.remove(); });
  };

  // ── Notification Bell ──
  var bellBtn = document.getElementById('notificationBell');
  var notifPanel = document.getElementById('notificationPanel');
  if (bellBtn && notifPanel) {
    bellBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      notifPanel.classList.toggle('d-none');
    });
    document.addEventListener('click', function (e) {
      if (!notifPanel.contains(e.target) && e.target !== bellBtn) {
        notifPanel.classList.add('d-none');
      }
    });
  }

  // ── Search ──
  var searchInput = document.getElementById('headerSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && this.value.trim()) {
        showToast('Searching for: ' + this.value.trim(), 'primary');
      }
    });
  }
});
