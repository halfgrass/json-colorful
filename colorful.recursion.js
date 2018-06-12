/**
 * author: Baungo
 * github: https://github.com/Baungo
 * date: 2018-06-12
 */

const indent = '    ';

function colorful(obj, space, newLine = false, last = true) {
    let html = '';
    if (isArray(obj)) {
        html += `${newLine ? space : ''}<span class="brace">[</span><br/>`;
        let i = 0;
        obj.forEach(o => {
            html += colorful(o, space + indent, true, i++ === obj.length - 1);
        });
        html += `${space}<span class="brace">]</span><span class="comma">${last ? '' : ','}</span><br/>`;
    } else if (isObject(obj)) {
        html += `${newLine ? space : ''}<span class="brace">{</span><br/>`;
        let i = 0;
        for (let k in obj) {
            if (!obj.hasOwnProperty(k)) return;
            let _indent = isArray(obj[k]) || isObject(obj[k]) ? (space + indent) : '';
            html += `${space}${indent}<span class="key">"${k}"</span><span class="colon">: </span>${colorful(obj[k], _indent, false, i++ === jsonSize(obj) - 1)}`;
        }
        html += `${space}<span class="brace">}</span><span class="comma">${last ? '' : ','}</span><br/>`;
    } else {
        let type = typeof obj;
        if (type === 'string') {
            obj = `"${obj}"`;
        }
        html += `${space}<span class="${type}">${obj}</span><span class="comma">${last ? '' : ','}</span><br/>`;
    }
    return html;
}

function isArray(obj) {
    return obj && typeof obj === 'object' && typeof obj.length === 'number' && !(obj.propertyIsEnumerable('length'));
}

function isObject(obj) {
    return typeof(obj) === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length
}

function jsonSize(obj) {
    let size = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
