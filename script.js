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

// 特殊文字をエスケープする関数
function escapeHTML(str) {
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

// 選択された値を管理する変数
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

// 各更新関数
function updateTicker(value) {
    console.log('Tickerが更新されました:', value);
    selectedTicker = value;
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

// 選択内容を表示する関数
function executeSelection() {
    const resultDiv = document.getElementById('result');
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    const resultInfo = `
        ${selectedTicker !== defaultValues.ticker ? escapeHTML(selectedTicker) : ''}: 
        ${selectedTime !== defaultValues.time ? selectedTime : ''} 
        ${selectedBlock !== defaultValues.block ? selectedBlock : ''}   
        ${selectedB2tm !== defaultValues.b2tm ? selectedB2tm : ''} 
        ${selectedB2blk !== defaultValues.b2blk ? selectedB2blk : ''} / 
        TFC: ${selectedTfc !== defaultValues.tfc ? selectedTfc : ''} / 
        決定打: ${selectedDecisiveTime !== defaultValues.decisiveTime ? selectedDecisiveTime : ''} 
        ${selectedDecisiveBlock !== defaultValues.decisiveBlock ? selectedDecisiveBlock : ''} / 
        ${selectedC1tm !== defaultValues.c1tm ? selectedC1tm : ''} 
        ${selectedC1nc !== defaultValues.c1nc ? selectedC1nc : ''} / 
        ${selectedC2tm !== defaultValues.c2tm ? selectedC2tm : ''} 
        ${selectedC2nc !== defaultValues.c2nc ? selectedC2nc : ''} / 
        ${selectedC3tm !== defaultValues.c3tm ? selectedC3tm : ''} 
        ${selectedC3nc !== defaultValues.c3nc ? selectedC3nc : ''}...
        ${selectedBroker !== defaultValues.broker ? selectedBroker : ''} Spread: ${spread}
    `.replace(/\s+/g, ' ').trim();

    resultDiv.innerText = resultInfo;
}

// コピー機能
function copyInfo() {
    const resultDiv = document.getElementById('result');
    const textToCopy = resultDiv.innerText.trim();

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Copy‼'))
            .catch(err => alert('Failed to copy: ' + err));
    } else {
        alert('Nothing to copy!');
    }
}

function copySpread() {
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    navigator.clipboard.writeText(`${spread}`)
        .then(() => alert(`Spread: ${spread}`))
        .catch(err => alert('Failed to copy: ' + err));
}
