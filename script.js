let selectedTicker = 'Ticker';
let selectedTime = 'Time';
let selectedBlock = 'Block';
let selectedB2tm = 'Time';
let selectedB2blk = 'Block';
let selectedTfc = 'Time';
let selectedDecisiveTime = 'Time';
let selectedDecisiveBlock = 'Block';
let selectedC1tm = 'Time';
let selectedC1nc = 'c';
let selectedC2tm = 'Time';
let selectedC2nc = 'c';
let selectedC3tm = 'Time';
let selectedC3nc = 'c';
let selectedBroker = 'Broker';

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

function filterTickers() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const tickerSelect = document.getElementById('ticker');
    const options = Array.from(tickerSelect.options);  // オプションを配列に変換

    // 検索結果に一致するオプションと一致しないオプションを分ける
    const matchedOptions = options.filter(option => option.text.toLowerCase().includes(searchValue));
    const unmatchedOptions = options.filter(option => !option.text.toLowerCase().includes(searchValue));

    // 一致するオプションを最初に、次に一致しないオプションを配置
    const sortedOptions = [...matchedOptions, ...unmatchedOptions];

    // <select>内のオプションを再配置
    tickerSelect.innerHTML = '';  // 現在のオプションをクリア
    sortedOptions.forEach(option => tickerSelect.appendChild(option));  // 新しい順番で追加
}

// `input` イベントで即座にフィルタリング
document.getElementById('search').addEventListener('input', filterTickers);


function updateTicker(value) {
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

function executeSelection() {
    const resultDiv = document.getElementById('result');
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    // 結果表示のための情報を構築
    const resultInfo = `
        ${selectedTicker !== defaultValues.ticker ? selectedTicker : ''}: 
        ${selectedTime !== defaultValues.time ? selectedTime : ''} 
        ${selectedBlock !== defaultValues.block ? selectedBlock : ''}   
        ${selectedB2tm !== defaultValues.b2tm ? selectedB2tm : ''} 
        ${selectedB2blk !== defaultValues.b2blk ? selectedB2blk : ''} 
        / TFC: ${selectedTfc !== defaultValues.tfc ? selectedTfc : ''} 
        / 決定打: ${selectedDecisiveTime !== defaultValues.decisiveTime ? selectedDecisiveTime : ''} 
        ${selectedDecisiveBlock !== defaultValues.decisiveBlock ? selectedDecisiveBlock : ''} 
        ...
        ${selectedC1tm !== defaultValues.c1tm ? selectedC1tm : ''} 
        ${selectedC1nc !== defaultValues.c1nc ? selectedC1nc : ''} 
        / ${selectedC2tm !== defaultValues.c2tm ? selectedC2tm : ''} 
        ${selectedC2nc !== defaultValues.c2nc ? selectedC2nc : ''} 
        / ${selectedC3tm !== defaultValues.c3tm ? selectedC3tm : ''} 
        ${selectedC3nc !== defaultValues.c3nc ? selectedC3nc : ''}...
        ${selectedBroker !== defaultValues.broker ? selectedBroker : ''} Spread: ${spread}
    `.replace(/\s+/g, ' ').trim(); // 不要な空白を除去

    // 結果を表示
    resultDiv.innerText = resultInfo;
}

function copyInfo() {
    const resultDiv = document.getElementById('result');
    const textToCopy = resultDiv.innerText.trim(); // 空白をトリム

    if (textToCopy) { // テキストが空でないことを確認
        const normalizedText = textToCopy
            .replace(/[\u200B-\u200D\uFEFF]/g, '') // ゼロ幅スペースを削除
            .replace(/\r?\n|\r/g, '\n'); // 改行コードを統一

        navigator.clipboard.writeText(normalizedText).then(() => {
            alert('Copy‼');
        }).catch(err => {
            alert('Failed to copy: ' + err);
        });
    } else {
        alert('Nothing to copy!'); // コピーする内容がない場合の警告
    }
}
