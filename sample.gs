function postMessage() {

  const url = PropertiesService.getScriptProperties().getProperty('SLK_WEBHOOK_URL');
  const channel = PropertiesService.getScriptProperties().getProperty('SLK_CHANNEL');

  const mention = "<!channel>"; // メンションは<>で囲って先頭!
  var body = mention + "\nテスト通知確認です"; // 本文

  const username = "テスト" // 投稿するユーザ表示名 
  const emoji = ":bell:" // ユーザーアイコンに使う絵文字 調べる場合→https://www.webfx.com/tools/emoji-cheat-sheet/

  var data = { 
    "channel" : channel, // 投稿チャネル
    "username" : username,  //表示ユーザー名
    "text" : body,  // 本文
    "icon_emoji" : emoji // 絵文字アイコン
    };
  
    sendToSlack(url,data);

}

// プロパティファイルへの設定メソッド
// 新エディタ（デフォルト）ではGUI操作できないため、コードから実行（以前のエディタを使用→GUI操作も可能）
function setScriptProperty() {
  PropertiesService.getScriptProperties().setProperty('SLK_WEBHOOK_URL', '*******'); // // slackのwebhook管理画面から取得（小黒DM）
  PropertiesService.getScriptProperties().setProperty('SLK_CHANNEL', '*******'); // 投稿先チャネル
}     
