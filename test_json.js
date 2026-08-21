const fs = require('fs');
let lines = fs.readFileSync('data/words-data.js', 'utf8').split('\n');
// Skip first line (comment)
let content = lines.slice(1).join('\n');
content = content.replace('window.WORDS_DATA = ', '');
content = content.trim().replace(/;$/, '');
try {
  const data = JSON.parse(content);
  console.log('Valid JSON!');
  console.log('Units:', data.units.length);
  console.log('Doors:', data.doors.length);
  console.log('Entries per unit:');
  data.units.forEach(u => console.log(' ', u.unitId, ':', u.entries.length));
} catch (e) {
  console.error('JSON parse error:', e.message);
}
