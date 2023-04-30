# 概要
scrapbox記法をmarkdownに置き換える  
nodejsで作成  
対応しているバージョンは.tool-versionsを参照  
asdfを使っている場合は.tool-versionsに書かれているバージョンが使われる  

# 使い方
初期インストール
`npm i`  

置換したいjsonをtext.jsonとしてプロジェクトルートに配置する  
以下コードを実行すると置換後のjsonがupdatedText.jsonとして出力される  
`./node_modules/.bin/ts-node main.ts`  
