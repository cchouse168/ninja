格鬥忍者(Fighting Ninja)

這是一款基於 HTML5 Canvas 與原生 JavaScript 開發的橫向捲軸格鬥遊戲。遊戲採用復古像素風格，並實作了高品質的視覺特效與動態音效，致敬經典動畫中的「火之神神樂」奧義。

📱 立即遊玩 (Scan to Play)

<img src="https://www.google.com/search?q=https://api.qrserver.com/v1/create-qr-code/%3Fsize%3D200x200%26data%3Dhttps://cchouse168.github.io/ninja/" alt="Scan QR Code to Play" title="Scan to Play on Mobile">



✨ 遊戲特色

🔥 華麗視覺特效：

奧義放送：還原動畫中「火之神神樂」的烈焰流動，伴隨多層次鋸齒狀圓弧斬擊與粒子飛濺效果。

新月斬擊：普通攻擊經過優化，呈現銳利且流暢的半月形刀光。

📱 手機/PWA 支援：

支援 PWA (Progressive Web App)，可直接「加入主畫面」變成獨立 App。

人體工學虛擬按鍵：針對觸控螢幕優化，加大按鍵尺寸並調整感應區，操作手感順暢。

🎵 沉浸式音效：

整合 Tone.js 音效庫。

奧義發動時伴隨震撼的懸留和弦 (Suspended Chord) 與燃燒音效。

包含跳躍、揮刀、命中等即時合成音效（無須加載外部 MP3）。

⚔️ 戰鬥機制：

具備攻擊冷卻 (Cooldown) 機制，防止無腦連打。

完整的受傷判定、擊退效果與死亡結算。

敵人 AI 會根據血量與距離自動判斷攻擊策略。

🎮 操作說明

電腦版 (鍵盤)

動作

按鍵

移動

A (左) / D (右) 或 方向鍵 ← / →

跳躍

W 或 方向鍵 ↑

普通斬擊

Space (空白鍵)

🔥 奧義

S 或 方向鍵 ↓ (需集滿能量)

手機版 (觸控)

左側螢幕：虛擬方向鍵 (左/右滑動或點擊)。

右側螢幕：動作按鈕區。

跳：跳躍。

斬：普通攻擊。

奧義：發動火之神神樂 (能量滿時發亮)。

🚀 如何安裝與遊玩

線上遊玩 (GitHub Pages)

本專案已優化為靜態網頁，可直接部署於 GitHub Pages。

將專案 Fork 或 Clone 到您的 GitHub。

進入 Repo 的 Settings > Pages。

將 Source 設定為 main 分支並儲存。

使用手機瀏覽器開啟產生的網址，並選擇「加入主畫面」即可作為 App 遊玩。

本地開發

只需將以下檔案放在同一資料夾中，直接用瀏覽器開啟 index.html 即可：

index.html (主程式)

manifest.json (PWA 設定)

sw.js (離線快取腳本)

icon.png (App 圖示，需為正方形，建議 512x512)

🛠️ 技術棧

Frontend: HTML5, CSS3, Vanilla JavaScript

Rendering: HTML5 Canvas API

Audio: Tone.js (Web Audio API Wrapper)

Deployment: GitHub Pages

📄 版權說明

本專案為個人練習作品，音效與程式碼均為原創或使用開源庫生成。

Created with ❤️ and Burning Heart.
