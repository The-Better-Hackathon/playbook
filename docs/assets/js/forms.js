// Renders the fill-in forms (team workbook, challenge brief builder).
// Answers are kept in localStorage and can be exported as Markdown or JSON.
(function () {
  function el(tag, attrs, children) {
    const n = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    });
    (children || []).forEach(c => c && n.appendChild(c));
    return n;
  }

  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; }
  }
  function save(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); return true; } catch (e) { return false; }
  }

  function toMarkdown(schema, data) {
    const out = [];
    const title = (schema.titleField && data[schema.titleField]) || schema.title;
    out.push('# ' + title, '');
    if (schema.intro) out.push('_' + schema.intro + '_', '');
    schema.sections.forEach(sec => {
      const answered = sec.questions.filter(q => (data[q.id] || '').trim());
      if (!answered.length && schema.skipEmpty) return;
      out.push('## ' + sec.title, '');
      sec.questions.forEach(q => {
        if (schema.titleField === q.id) return;
        const v = (data[q.id] || '').trim();
        if (!v && schema.skipEmpty) return;
        out.push('**' + q.label + '**', '', v || '_Not answered yet._', '');
      });
    });
    return out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
  }

  function download(name, text) {
    const blob = new Blob([text], { type: 'text/markdown' });
    const a = el('a', { href: URL.createObjectURL(blob), download: name });
    document.body.appendChild(a); a.click(); a.remove();
  }

  function render(mount, schema) {
    const key = 'playbook:' + schema.id;
    let data = load(key);
    const status = el('span', { class: 'pb-status', text: 'Saved in this browser only.' });
    const bar = el('div', { class: 'pb-progress' }, [el('div')]);
    const fields = [];

    function progress() {
      const total = fields.length;
      const done = fields.filter(f => f.value.trim()).length;
      bar.firstChild.style.width = (total ? (100 * done / total) : 0) + '%';
      status.textContent = done + ' of ' + total + ' answered · saved in this browser only';
    }

    const toolbar = el('div', { class: 'pb-toolbar' }, [
      el('button', { class: 'primary', text: 'Download Markdown', onclick: () => {
        const md = toMarkdown(schema, data);
        const base = ((schema.titleField && data[schema.titleField]) || schema.id).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        download((base || schema.id) + '.md', md);
      } }),
      el('button', { text: 'Copy Markdown', onclick: async () => {
        try { await navigator.clipboard.writeText(toMarkdown(schema, data)); status.textContent = 'Copied to clipboard.'; }
        catch (e) { status.textContent = 'Copy failed. Use Download instead.'; }
      } }),
      el('button', { text: 'Load from file', onclick: () => {
        const inp = el('input', { type: 'file', accept: '.json' });
        inp.addEventListener('change', () => {
          const f = inp.files[0]; if (!f) return;
          f.text().then(t => { try { data = JSON.parse(t); save(key, data); fields.forEach(fl => fl.value = data[fl.dataset.id] || ''); progress(); } catch (e) { status.textContent = 'That file could not be read.'; } });
        });
        inp.click();
      } }),
      el('button', { text: 'Save to file', onclick: () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = el('a', { href: URL.createObjectURL(blob), download: schema.id + '.json' });
        document.body.appendChild(a); a.click(); a.remove();
      } }),
      el('button', { text: 'Clear', onclick: () => {
        if (!confirm('Clear every answer on this page? This cannot be undone.')) return;
        data = {}; save(key, data); fields.forEach(f => f.value = ''); progress();
      } }),
      status,
    ]);

    mount.appendChild(toolbar);
    mount.appendChild(bar);

    schema.sections.forEach((sec, i) => {
      const box = el('div', { class: 'pb-section', 'data-i': String(i % 5) }, [el('h3', { text: sec.title })]);
      if (sec.help) box.appendChild(el('p', { class: 'pb-help', text: sec.help }));
      sec.questions.forEach(q => {
        const input = q.short
          ? el('input', { type: 'text', 'data-id': q.id, placeholder: q.placeholder || '' })
          : el('textarea', { 'data-id': q.id, placeholder: q.placeholder || 'Type your answer here…' });
        input.value = data[q.id] || '';
        input.addEventListener('input', () => {
          data[q.id] = input.value;
          status.textContent = save(key, data) ? 'Saved.' : 'Could not save in this browser. Use Save to file.';
          progress();
        });
        fields.push(input);
        box.appendChild(el('div', { class: 'pb-q' }, [
          el('label', { text: q.label }),
          q.help ? el('div', { class: 'pb-help', text: q.help }) : null,
          input,
        ]));
      });
      mount.appendChild(box);
    });
    progress();
  }

  window.PlaybookForms = { render };
  window.PlaybookSchemas = window.PlaybookSchemas || {};

  function boot() {
    document.querySelectorAll('[data-playbook-form]').forEach(mount => {
      if (mount.dataset.ready) return;
      const schema = window.PlaybookSchemas[mount.dataset.playbookForm];
      if (!schema) return;
      mount.dataset.ready = '1';
      render(mount, schema);
    });
  }
  // With instant navigation, pages load without a full reload, so re-run on every page change.
  if (window.document$) window.document$.subscribe(boot);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
