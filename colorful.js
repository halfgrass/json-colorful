// key, value, number, string, boolean, object[null], colon, comma, brace
function colorful(json) {
  const l_kv = /^(\s*)(".+")(: )(.*[\d"lde]|[\{\[])(,?)$/g; // 键行
  const l_v = /^(\s*)(-?\d\.\d+|-?\d+|".+"|null|undefined|true|false|[\{\}\[\]])(,?)$/g;    // 值行
  const placeholder = 'zodiac shutter minority';

  let str = JSON.stringify(json, null, '    ');
  str = str.replace(/\\"/g, placeholder);
  let lines = str.split('\n');
  lines = lines.map(line => {
    let value;
    if (l_kv.test(line)) {
      line = line.replace(l_kv, `<span class="space">$1</span><span class="key">$2</span><span class="colon">$3</span>__${placeholder}__<span class="comma">$5</span>`);
      value = RegExp.$4;
    } else {
      line = line.replace(l_v, `<span class="space">$1</span>__${placeholder}__<span class="comma">$3</span>`);
      value = RegExp.$2;
    }
    let type = 'brace';
    try {
      type = typeof eval(value);
    } catch (e) {
    }
    return line.replace(`__${placeholder}__`, `<span class="${type}">${value}</span>`);
  });
  return lines.join("\n").replace(new RegExp(`/${placeholder}/g`), "\\");
}
