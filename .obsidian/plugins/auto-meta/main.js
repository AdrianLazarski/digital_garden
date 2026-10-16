const { Plugin } = require('obsidian');

const DEFAULTS = [
  ['created', ''],
  ['tags', '[atom]'],
  ['dojrzalosc', 'Sadzonka 🌱'],
  ['status_epistemiczny', 'Spekulatywny ❓'],
];

module.exports = class AutoMeta extends Plugin {
  async onload() {
    this.addCommand({
      id: 'add-meta',
      name: 'Dodaj metadane',
      hotkeys: [{ modifiers: ['Mod'], key: 's' }],
      editorCallback: (editor) => {
        const lines = editor.getValue().split('\n');
        const hasFm = lines[0] === '---';
        const end = hasFm ? lines.indexOf('---', 1) : -1;
        const yaml = hasFm && end > 0 ? lines.slice(1, end) : [];

        const missing = DEFAULTS
          .filter(([k]) => !yaml.some((l) => l.startsWith(k + ':')))
          .map(([k, v]) => (v ? `${k}: ${v}` : `${k}:`));
        if (!missing.length) return;

        if (hasFm && end > 0) {
          editor.replaceRange(missing.join('\n') + '\n', { line: end, ch: 0 });
        } else {
          editor.replaceRange(`---\n${missing.join('\n')}\n---\n`, { line: 0, ch: 0 });
        }
      },
    });
  }
};