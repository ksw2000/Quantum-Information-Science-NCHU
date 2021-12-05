Online demo: [https://liao2000.github.io/Quantum-Information-Science-NCHU/](https://liao2000.github.io/Quantum-Information-Science-NCHU/)

![](https://i.imgur.com/E0UYnwa.png)

# 程式實作流程

## 一、建立網頁骨架 (index.html, main.css)
使用 Material Design Components 設計
1.	先建立 header 
使用 App bar https://material.io/components/app-bars-top 製作
```htmlembedded
<header class="mdc-top-app-bar mdc-top-app-bar--fixed" id="app-bar">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <span class="mdc-top-app-bar__title">Quantum boolean circuit checker</span>
        </section>
    </div>
</header>
```
2.	使用雙欄排版
```htmlembedded
<main class="mdc-top-app-bar--fixed-adjust routing-content">
    <div class="half-parent">
        <div class="half">...</div>
        <div class="half">...</div>
    </div>
</main>
```
3.	左欄放入 input 介面
    
    > 使用 [Text Fields](https://material.io/components/text-fields)及 [Buttons](https://material.io/components/buttons) 這兩個 Material Design Components 實作
    
4.	右欄使用 `<canvas>` 實現繪圖，按鈕一樣使用 Material Design Components 提供的 Button 實作，而底下的真值表則是用 `<table>` 來實作

## 二、設計程式邏輯 main.js
1.	初始化 material design components
```javascript
const MDCTextField = mdc.textField.MDCTextField;
const MDCRipple = mdc.ripple.MDCRipple;
const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
```
2.	接著設計主要邏輯
    1. 首先先設定常數 low level control 設為 0, high level control 設為 1, wire 設為 2, target (not gate) 設為 3，並抓取電路圖輸出的 DOM 結點
    ```javascript
    const lowCtrl = 0;
    const highCtrl = 1;
    const emptyWire = 2;
    const target = 3;
    const canvas = document.getElementById("circuit-preview");
    ```
    2. 實作函式 calcUnit() 該函式只會計算一排邏輯閘，給定輸入的 bit 比如 [1, 0, 0] 和單一排邏輯閘 [lowCtrl, highCtrl, target] 後回傳輸出，實作的方法是先複製 input 再用一個 for 迴圈尋找 lowCtrl 和 highCtrl 這兩個邏輯閘，並計算是否要觸發 not gate若要觸發 not gate 就再用 for 迴圈尋找 target 將輸出反轉
    3. 3 實作 `clac()`，該函式處理一個輸入bits和多個sequential的邏輯閘，並返回輸出 bits。實作方法只是連續呼叫 calcUnit() 而已
    4. 實作 `translate()`，該函式用來將輸入的字串轉串邏輯閘
    5. 實作 `tableRenderer()` 用來處理真值表渲染，實作上只是將 outputs 填入 html 而已
    6. 實作 `circuitRenderer()` 這裡使用 HTML 來繪製，繪製方法
        1. 繪製水平線
        2. 繪製垂直線
        3. 利用畫圓的方式繪製黑control(黑邊黑底), 白control(黑邊白底), target gate(繪製空心圓圈即垂直黑線)
    7. 實作 `run()`，`run()` 會先對使用者輸入做轉換，即呼叫 `translate()` 。並且檢查是否有嚴重錯誤，如果有嚴重錯誤，會噴錯請使用者再檢查，接著呼叫 `circuitRenderer()` 繪製邏輯閘。然後呼叫 `calc()` 來計算真值表每個row所相對應輸出。最後呼叫 `tableRenderer()` 繪製真值表
3. 綁定 DOM 事件，使按鈕被使用者觸發時會呼叫對應函式
```javascript
const btnRun = document.getElementById("btn-run");
if (btnRun) {
    btnRun.addEventListener('click', () => {
        run();
    });
}

const btnRunExample = document.getElementById("btn-run-example");
if (btnRunExample) {
    btnRunExample.addEventListener('click', () => {
        runExample();
    });
}

const btnSavePhoto = document.getElementById("btn-save-photo");
if (btnSavePhoto) {
    btnSavePhoto.addEventListener('click', () => {
        // reference: https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var a = document.createElement('a');
        a.href = image;
        a.download = 'download.png';
        a.click();
    });
}
```
4. 實作 runExample()，該函式會直接給定預設值並呼叫 run() 來執行，方便使用者快速上手
```javascript
function runExample() {
    document.getElementById("raw-circuit").value = "B W N\nB N E";
    run();
}
```

5. 設定網頁載入先呼叫 runExample()
```javascript
window.onload = () => {
    runExample();
}
```

# 程式執行畫面截圖

![](https://i.imgur.com/0yDOiRZ.png)


## 支援邏輯閘電路儲存

![](https://i.imgur.com/M8s9O3r.png)

## 支援錯誤檢查

![](https://i.imgur.com/GyP9o3k.png)

## 使用自適應網頁設計來支援行動裝置

![](https://i.imgur.com/mslx8Hc.png)