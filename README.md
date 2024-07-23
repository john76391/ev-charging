## 下載專案
方法一：直接下載ZIP檔

方法二：使用 `git https://github.com/john76391/ev-charging.git`

## 初始化環境
下載完成後於終端機中輸入`npm install`以安裝所需使用的套件

若本機中沒有下載資料庫管理系統，請參考下方的MariaDB安裝步驟以及資料庫初始化

若本機中已有下載RDBMS，無論是MySQL、MariaDB、XAMPP皆可，則請直接新建一個名為**ems**的資料庫並新增使用者，用戶名及密碼如下

:bangbang: **請確保用戶名以及密碼與下方一致，以便程式能夠正確連到資料庫**

```
請手動輸入，避免複製貼上，以保證資料正確性

用戶名：isaac
密碼：GAxo5I
```



## MariaDB安裝步驟
首先到[MariaDB官網](https://mariadb.org/)點擊download

![螢幕擷取畫面 2024-07-22 160803](https://github.com/user-attachments/assets/d0086420-9452-4da3-9159-d8d4921d88e8)

繼續點download

![螢幕擷取畫面 2024-07-22 161243](https://github.com/user-attachments/assets/939a6d06-50ed-48b6-ad34-e080aa9e7de3)

一路next直到輸入密碼畫面，這裡設定自己的密碼，完成後繼續按next直到安裝完成

![螢幕擷取畫面 2024-07-22 161530](https://github.com/user-attachments/assets/09d4067f-0350-4d3e-a418-958b0f1024bc)

待安裝進度條跑完後出現有Finish選項的畫面就代表安裝成功了 :smile:

![螢幕擷取畫面 2024-07-22 161752](https://github.com/user-attachments/assets/a9dbf4bc-be0c-48ab-9430-48a09ced246c)


## 資料庫初始化

安裝完成後可以在桌面找到HeidiSQL，提供了GUI介面方便操作

![螢幕擷取畫面 2024-07-22 162031](https://github.com/user-attachments/assets/f90707f5-8905-45ed-86aa-a40be79d0127)

開啟後點左下角的新增，選擇在根目錄新增工作階段

![螢幕擷取畫面 2024-07-22 162249](https://github.com/user-attachments/assets/8a855698-7d0c-460e-9637-6e58a3666511)

可以幫工作階段命名，這邊我把它取名為EMSLocal

![螢幕擷取畫面 2024-07-22 162521](https://github.com/user-attachments/assets/4d8e7368-9776-4f80-aead-ba037b9d6a44)

接著輸入安裝MariaDB時自己設定的密碼，完成後點開啟

![螢幕擷取畫面 2024-07-22 162434](https://github.com/user-attachments/assets/a422cf04-72f4-491f-8202-3695c9edf581)

開啟後對著EMSLocal按滑鼠右鍵，選擇建立新的資料庫

![螢幕擷取畫面 2024-07-22 162745](https://github.com/user-attachments/assets/57866985-0bcb-4c61-bb51-18333f2b8207)

建立資料庫名稱為ems，排序規則選擇utf8mb4_unicode_ci，完成後按確定

 :bangbang: **注意，這裡的資料庫名稱一定要是ems，以便程式能夠正確連到資料庫**

![螢幕擷取畫面 2024-07-22 163002](https://github.com/user-attachments/assets/54312f1e-6a5b-4dbf-a887-6e2cf8ecc95a)

在上方列表中點擊管理使用者的圖示並點擊加入
![螢幕擷取畫面 2024-07-22 163409](https://github.com/user-attachments/assets/8b21c01c-653e-41cd-9aee-5414970478c1)
![螢幕擷取畫面 2024-07-22 163520](https://github.com/user-attachments/assets/4344ca99-5629-4b08-bde3-cdcc46882301)

新增使用者，用戶名以及密碼如下，並勾選全域權限，完成後按儲存
```
請手動輸入，避免複製貼上，以保證資料正確性

用戶名：isaac
密碼：GAxo5I
```
:bangbang: **請確保用戶名以及密碼與上方一致，以便程式能夠正確連到資料庫**

![螢幕擷取畫面 2024-07-22 164150](https://github.com/user-attachments/assets/0c36b784-cec5-41e8-bed8-dc619f395d80)

## 執行程式碼
於VS Code中開啟專案並在終端機中輸入`npm run dev`

開啟瀏覽器並輸入網址[http://localhost:3000](http://localhost:3000)即可開啟專案

可使用測試的使用者登入，帳號密碼如下

```
帳號：test123
密碼：Test1234
```


