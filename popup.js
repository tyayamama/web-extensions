document.getElementById('retrieveText').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: {tabId: chrome.tabs.TAB_ID_CURRENT},
      function: retrieveText
    });
  });
  
  function retrieveText() {
    // ページ内の特定の文字列を検索する例
    const text = document.body.innerText.match(/特定の文字列/g);
    alert(text ? text.join(', ') : '文字列が見つかりません');
  }
  