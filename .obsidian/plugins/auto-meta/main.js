const { Plugin, moment } = require('obsidian');

const FMT = 'YYYY-MM-DDTHH:mm';
const CREATED = 'created';
const MODIFIED = 'modified date';

const DEFAULTS = [
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
      editorCallback: (editor, view) => {
        const file = view.file;
        if (!file) return;

        const lines = editor.getValue().split('\n');
        const close = lines[0] === '---' ? lines.indexOf('---', 1) : -1;
        const hasFm = close > 0;
        const oldYaml = hasFm ? lines.slice(1, close) : [];
        const yaml = [...oldYaml];

        // mode: 'missing' = tylko gdy brak pola, 'empty' = też gdy puste, 'always' = zawsze nadpisz
        const set = (key, value, mode) => {
          const i = yaml.findIndex((l) => l.startsWith(key + ':'));
          const line = `${key}: ${value}`;
          if (i === -1) yaml.push(line);
          else if (mode === 'always' || (mode === 'empty' && yaml[i].trim() === key + ':')) yaml[i] = line;
        };

        set(CREATED, moment(file.stat.ctime).format(FMT), 'empty');
        for (const [k, v] of DEFAULTS) set(k, v, 'missing');
        set(MODIFIED, moment().format(FMT), 'always');

        const block = yaml.join('\n');
        if (!hasFm) {
          editor.replaceRange(`---\n${block}\n---\n`, { line: 0, ch: 0 });
        } else if (close === 1) {
          editor.replaceRange(block + '\n', { line: 1, ch: 0 });
        } else if (block !== oldYaml.join('\n')) {
          editor.replaceRange(block, { line: 1, ch: 0 }, { line: close - 1, ch: lines[close - 1].length });
        }
      },
    });
  }
};