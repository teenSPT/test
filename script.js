// デフォルト値を定義
const defaultValues = {
    ticker: 'Ticker',
    time: 'Time',
    block: 'Block',
    b2tm: 'Time',
    b2blk: 'Block',
    tfc: 'Time',
    decisiveTime: 'Time',
    decisiveBlock: 'Block',
    c1tm: 'Time',
    c1nc: 'c',
    c2tm: 'Time',
    c2nc: 'c',
    c3tm: 'Time',
    c3nc: 'c',
    broker: 'Broker'
};

// スプレッドデータの定義
const spreadData = {
    'BTC_XM': 9000,
    'ETH_XM': 700,
    'BTC_TITAN': 7500,
    'ETH_TITAN': 900,
    'SOL_XM': 200,
    'SOL_TITAN': 150,
    'JP225_XM': 9,
    'JP225_TITAN': 100,
    'US30_XM': 650,
    'US30_TITAN': 80,
    'XAUUSD_XM': 60,
    'XAUUSD_TITAN': 30,
};

// 各選択肢の初期値
let selectedTicker = defaultValues.ticker;
let selectedTime = defaultValues.time;
let selectedBlock = defaultValues.block;
let selectedB2tm = defaultValues.b2tm;
let selectedB2blk = defaultValues.b2blk;
let selectedTfc = defaultValues.tfc;
let selectedDecisiveTime = defaultValues.decisiveTime;
let selectedDecisiveBlock = defaultValues.decisiveBlock;
let selectedC1tm = defaultValues.c1tm;
let selectedC1nc = defaultValues.c1nc;
let selectedC2tm = defaultValues.c2tm;
let selectedC2nc = defaultValues.c2nc;
let selectedC3tm = defaultValues.c3tm;
let selectedC3nc = defaultValues.c3nc;
let selectedBroker = defaultValues.broker;

// 特殊文字をエスケープする関数
function escapeHTML(str) {
    if (typeof str !== "string") return str;
    return str.replace(/[&<>"']/g, function (match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}

// 各選択肢の更新関数
function updateTicker(value) {
    selectedTicker = value;
}

function updateTicker(value) {
    console.log('Updating Ticker to:', value); // デバッグ用
    selectedTicker = value;
    console.log('Selected Ticker is now:', selectedTicker); // デバッグ用
    executeSelection(); // 表示を更新
}

function updateTime(value) {
    selectedTime = value;
}
function updateBlock(value) {
    selectedBlock = value;
}
function updateB2tm(value) {
    selectedB2tm = value;
}
function updateB2blk(value) {
    selectedB2blk = value;
}
function updateTfc(value) {
    selectedTfc = value;
}
function updateDecisiveTime(value) {
    selectedDecisiveTime = value;
}
function updateDecisiveBlock(value) {
    selectedDecisiveBlock = value;
}
function updateC1tm(value) {
    selectedC1tm = value;
}
function updateC1nc(value) {
    selectedC1nc = value;
}
function updateC2tm(value) {
    selectedC2tm = value;
}
function updateC2nc(value) {
    selectedC2nc = value;
}
function updateC3tm(value) {
    selectedC3tm = value;
}
function updateC3nc(value) {
    selectedC3nc = value;
}
function updateBroker(value) {
    selectedBroker = value;
}

// 選択内容を実行して結果を表示する関数
function executeSelection() {
    const resultDiv = document.getElementById('result');
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    // 結果表示のための情報を構築
    const resultInfo = `
        ${selectedTicker !== defaultValues.ticker ? escapeHTML(selectedTicker) : ''}: 
        ${selectedTime !== defaultValues.time ? escapeHTML(selectedTime) : ''} 
        ${selectedBlock !== defaultValues.block ? escapeHTML(selectedBlock) : ''}   
        ${selectedB2tm !== defaultValues.b2tm ? escapeHTML(selectedB2tm) : ''} 
        ${selectedB2blk !== defaultValues.b2blk ? escapeHTML(selectedB2blk) : ''} / 
        TFC: ${selectedTfc !== defaultValues.tfc ? escapeHTML(selectedTfc) : ''} / 
        決定打: ${selectedDecisiveTime !== defaultValues.decisiveTime ? escapeHTML(selectedDecisiveTime) : ''} 
        ${selectedDecisiveBlock !== defaultValues.decisiveBlock ? escapeHTML(selectedDecisiveBlock) : ''} / 
        ${selectedC1tm !== defaultValues.c1tm ? escapeHTML(selectedC1tm) : ''} 
        ${selectedC1nc !== defaultValues.c1nc ? escapeHTML(selectedC1nc) : ''} / 
        ${selectedC2tm !== defaultValues.c2tm ? escapeHTML(selectedC2tm) : ''} 
        ${selectedC2nc !== defaultValues.c2nc ? escapeHTML(selectedC2nc) : ''} / 
        ${selectedC3tm !== defaultValues.c3tm ? escapeHTML(selectedC3tm) : ''} 
        ${selectedC3nc !== defaultValues.c3nc ? escapeHTML(selectedC3nc) : ''}...

        ${selectedBroker !== defaultValues.broker ? escapeHTML(selectedBroker) : ''} Spread: ${spread}
    `;

    resultDiv.innerText = resultInfo.replace(/\s+/g, ' ').trim();
}

// コピーする関数
function copyInfo() {
    const resultDiv = document.getElementById('result');
    const textToCopy = resultDiv.innerText.trim();

    navigator.clipboard.writeText(textToCopy)
        .then(() => alert('Copy‼'))
        .catch(err => alert('Failed to copy: ' + err));
}

// スプレッドをコピーする関数
function copySpread() {
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    navigator.clipboard.writeText(`${spread}`)
        .then(() => alert(`Spread: ${spread}`))
        .catch(err => alert('Failed to copy: ' + err));
}
