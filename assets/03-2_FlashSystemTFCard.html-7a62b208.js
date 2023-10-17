import{_ as a,o as s,c as t,e as r}from"./app-5cc5893e.js";const o={},n=r('<h1 id="烧写固件至tf卡" tabindex="-1"><a class="header-anchor" href="#烧写固件至tf卡" aria-hidden="true">#</a> 烧写固件至TF卡</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ol><li>T113开发板主板 x1</li><li>Type-C线 X1</li><li>TF卡读卡器 x1</li><li>8GB以上的 micro TF卡 x1</li><li>win32diskimage工具 : https://gitlab.com/dongshanpi/tools/-/raw/main/win32diskimager-1.0.0-install.exe</li><li>SDcard专用格式化工具：https://gitlab.com/dongshanpi/tools/-/raw/main/SDCardFormatter5.0.1Setup.exe</li><li>TF卡最小系统镜像：https://gitlab.com/dongshanpi/tools/-/raw/main/100ask-t113-pro_sdcard.zip</li></ol><h2 id="运行烧写软件烧写" tabindex="-1"><a class="header-anchor" href="#运行烧写软件烧写" aria-hidden="true">#</a> 运行烧写软件烧写</h2><p>首先需要下载 <strong>win32diskimage SDcard专用格式化</strong> 这两个烧写TF卡的工具，然后获取到TF卡系统镜像文件<strong>100ask-t113-pro_sdcard.zip</strong>，获取到以后，先安装 <strong>win32diskimage SDcard专用格式化</strong> 这两个工具，同时可以解压 一下TF卡系统的镜像文件 <strong>dongshannezhastu-sdcard.zip</strong>，可以得到一个 <strong>100ask-t113-pro_sdcard.img</strong>文件 这个文件就是我们要烧写的镜像。</p><ul><li>使用SD CatFormat格式化TF卡，注意备份卡内数据。参考下图所示，点击刷新找到TF卡，然后点击 Format 在弹出的 对话框 点击 **是(Yes)**等待格式完成即可。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/SDCardFormat_001.png" alt="SDCardFormat_001"></p><ul><li>格式化完成后，使用<strong>Win32diskimage</strong>工具来烧录镜像，参考下属步骤，找到自己的TF卡盘符，然后点击2 箭头 文件夹的符号 找到 刚才解压的 TF卡镜像文件 <strong>dongshannezhastu-sdcard.img</strong> 最后 点击 写入，等待写入完成即可。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/wind32diskimage_001.png" alt="wind32diskimage_001"></p><p>完成以后，就可以弹出TF卡，并将其插到 东山哪吒STU 最小板背面的TF卡槽位置处，此时连接 串口线 并使用 串口工具打开串口设备，按下开发板的 <strong>RESET</strong>复位按键就可以重启进入TF卡系统内了。</p><h2 id="启动系统" tabindex="-1"><a class="header-anchor" href="#启动系统" aria-hidden="true">#</a> 启动系统</h2><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/sdcard-flashsystem_001.png" alt="sdcard-flashsystem_001"></p><p><strong>系统的登录用户名 root 密码为空</strong></p><p><strong>系统的登录用户名 root 密码为空</strong></p><p><strong>系统的登录用户名 root 密码为空</strong></p>',15),i=[n];function e(d,h){return s(),t("div",null,i)}const c=a(o,[["render",e],["__file","03-2_FlashSystemTFCard.html.vue"]]);export{c as default};
