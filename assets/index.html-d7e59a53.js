import{_ as e,o as i,c as t,e as n}from"./app-5cc5893e.js";const l={},a=n(`<h2 id="_2-minigui" tabindex="-1"><a class="header-anchor" href="#_2-minigui" aria-hidden="true">#</a> 2 MiniGUI</h2><h3 id="_2-1-minigui说明" tabindex="-1"><a class="header-anchor" href="#_2-1-minigui说明" aria-hidden="true">#</a> 2.1 MiniGUI说明.</h3><p>目前Tina中移植了MiniGUI3.2的核心库以及其组件，下表列出MiniGUI相关包说明：</p><p><strong>表2-1: MiniGUI相关包说明</strong></p><table><thead><tr><th style="text-align:left;">包名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">cell-phone-ux-demo</td><td style="text-align:left;">MiniGUI手机界面应用</td></tr><tr><td style="text-align:left;">libminigui-gpl</td><td style="text-align:left;">MiniGUI核心库</td></tr><tr><td style="text-align:left;">minigui-res-be</td><td style="text-align:left;">MiniGUI资源库</td></tr><tr><td style="text-align:left;">mg-samples</td><td style="text-align:left;">MiniGUI示例应用</td></tr><tr><td style="text-align:left;">libmdolphin</td><td style="text-align:left;">MiniGUI浏览器核心库</td></tr><tr><td style="text-align:left;">mdolphin-release-home</td><td style="text-align:left;">MiniGUI浏览器应用</td></tr><tr><td style="text-align:left;">mdolphin-release-tv</td><td style="text-align:left;">MiniGUI浏览器应用</td></tr><tr><td style="text-align:left;">mdolphin-samples</td><td style="text-align:left;">MiniGUI浏览器应用</td></tr><tr><td style="text-align:left;">libmg3d</td><td style="text-align:left;">MiniGUI提供3D接口组件</td></tr><tr><td style="text-align:left;">libmgeff</td><td style="text-align:left;">MiniGUI动画框架</td></tr><tr><td style="text-align:left;">libmgi</td><td style="text-align:left;">MiniGUI输入法组件</td></tr><tr><td style="text-align:left;">libmgncs</td><td style="text-align:left;">MiniGUI新控件集</td></tr><tr><td style="text-align:left;">libmgp</td><td style="text-align:left;">MiniGUI提供打印功能组件</td></tr><tr><td style="text-align:left;">libmgplus</td><td style="text-align:left;">对MiniGUI图形绘制接口的增强</td></tr><tr><td style="text-align:left;">libmgutils</td><td style="text-align:left;">MiniGUI提供对话框模板</td></tr></tbody></table><p><strong>表2-2:基于MiniGUI开发的应用</strong></p><table><thead><tr><th style="text-align:left;">包名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">multimedia-test</td><td style="text-align:left;">多媒体测试Demo，包含摄像头预览、拍照、录像、播放音、视频、浏览图片功能</td></tr><tr><td style="text-align:left;">r11-board</td><td style="text-align:left;">智能洗衣机Demo，包含一些界面滑动效果，选择控件等常用功能实现</td></tr><tr><td style="text-align:left;">smart-music-player</td><td style="text-align:left;">智能音乐播放器Demo，包含滑动列表实现，在R328和R329上适配</td></tr></tbody></table><p>下面是multimedia-test应用截图：</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/OpenRemoved_Tina_Linux_Graphics_system_development_Guide-image2.jpg" alt="图2-1: multimedia-test主页截图"></p><p>点击SD卡和U盘图标，可以对SD卡和U盘格式化，在拍照与录制的时候需要正确的格式，不然不能录制。蓝色的SD卡与U盘表示SD卡与U盘正确挂载，灰色的表示没有正确挂载。SD卡与U盘同时挂载的时候，默认使用SD卡，点击相应图标进入相应功能界面。</p><p>下面是r11-board应用截图：</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/OpenRemoved_Tina_Linux_Graphics_system_development_Guide-image3.jpg" alt="图2-2: r11-board主页截图"></p><p>主页三个页面可以左右滑动切换下一个页面，点击不同的洗衣图片进入具体的洗衣功能界面。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/OpenRemoved_Tina_Linux_Graphics_system_development_Guide-image4.jpg" alt="图2-3: r11-board功能页截图"></p><p>点击底部的洗涤、漂洗和脱水可以弹出滑动列表选择不同的参数，点击功能+按钮有旋转动画。</p><p>下面是smart-music-player应用截图：</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/OpenRemoved_Tina_Linux_Graphics_system_development_Guide-image5.jpg" alt="图2-4: smart-music-player截图 1"></p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/Tina-Sdk/OpenRemoved_Tina_Linux_Graphics_system_development_Guide-image6.jpg" alt="图2-5: smart-music-player截图 2"></p><h3 id="_2-2-minigui配置" tabindex="-1"><a class="header-anchor" href="#_2-2-minigui配置" aria-hidden="true">#</a> 2.2 MiniGUI配置.</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source build/envsetup.sh
lunch XXX平台名称
make menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Gui ---&gt;
    Minigui ---&gt;
        &lt;*&gt; libminigui-gpl ---&gt;
            [*] Enabel truetype font support （支持TTF矢量字体）
            [*] Enabel tslib support for MiniGUI （支持触摸屏）
            [ ] Enabel g2d support for MiniGUI （支持G2D硬件加速，需要用sunxifb显示引擎，目前只在R528/D1上支持）
            [ ] Enabel g2drotate support for MiniGUI （支持G2D旋转，需要用sunxifb显示引擎，目前只在R528/D1上支持）
            [ ] Enabel sunxifb support for MiniGUI （显示引擎，类似fbcon，framebuffer长度大于 3时，切换成循环buffer）
            [ ] Enabel sunxifbion support for MiniGUI （显示引擎，通过libuapi申请显示buffer）
            [ ] Enabel coortrans cw support for MiniGUI（UI旋转 90 度）
            [ ] Enabel reduce size for MiniGUI （裁剪一些不需要的模块）
        -*- minigui-res-be
        &lt;*&gt; mg-samples
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MiniGUI有些示例程序需要将MiniGUI的核心库变编译为多进程模式，因此需要进行如下的配 置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Gui ---&gt;
    Minigui ---&gt;
        &lt;*&gt; libminigui-gpl ---&gt;
            Preferred Minigui Run Mode (ths) ---&gt; proc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几点差异化说明：</p><ol><li>目前Tina中集成的是MiniGUI3.2版本，在 64 位与 32 位的机器上都可以正常运行。</li><li>如果使用的不是触摸屏，需要配置鼠标，为了正常的显示鼠标光标，需要修改如下Makefile：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tina/package/minigui/libminigui-gpl/Makefile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把–enable-cursor=no改成yes，表示使用鼠标。</p><p>V853平台MiniGUI配置选项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source build/envsetup.sh
lunch选择v853_perf1-tina
make menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CONFIG_PACKAGE_eyesee-minigui:
eyesee-minigui is a GUILib for eyesee project.
Symbol: PACKAGE_eyesee-minigui [=y]
Type : tristate
Prompt: eyesee-minigui............................. eyesee-minigui for Tina Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码路径为：external/minigui/</p><h3 id="_2-3-minigui使用" tabindex="-1"><a class="header-anchor" href="#_2-3-minigui使用" aria-hidden="true">#</a> 2.3 MiniGUI使用.</h3><p>成功烧写固件后，在小机端使用MiniGUI，需要进行如下几步：</p><ol><li>使用的是触摸屏，需要进行触摸屏校准。</li><li>配置MiniGUI.cfg文件。</li></ol><h4 id="_2-3-1-触摸屏校准" tabindex="-1"><a class="header-anchor" href="#_2-3-1-触摸屏校准" aria-hidden="true">#</a> 2.3.1 触摸屏校准.</h4><p>电容屏不需要校准，如果电容屏触摸不准确，需要把/etc/pointercal文件删除。</p><p>电阻屏首先要确保触摸驱动正常工作，有触摸节点生成，比如说是/dev/input/event1，可以执行 下面的命令，再触摸屏幕看串口有无打印。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /dev/input/event
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在小机端设置如下变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export TSLIB_CALIBFILE=/etc/pointercal
export TSLIB_CONFFILE=/etc/ts.conf
export TSLIB_PLUGINDIR=/usr/lib/ts
export TSLIB_CONSOLEDEVICE=none
export TSLIB_FBDEVICE=/dev/fb
// TSLIB_TSDEVICE根据触摸屏生成的设备节点来配置
export TSLIB_TSDEVICE=/dev/input/event
ts_calibrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意TSLIB_TSDEVICE需要是生成的触摸节点，按照屏幕上的提示点击完成校准，校准完成后/etc/pointerca文件生成，保存这个校准文件，就不用每台产品都校准。</p><h4 id="_2-3-2-minigui-cfg配置" tabindex="-1"><a class="header-anchor" href="#_2-3-2-minigui-cfg配置" aria-hidden="true">#</a> 2.3.2 MiniGUI.cfg配置</h4><p>小机端/usr/local/etc/MiniGUI.cfg文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim usr/local/etc/MiniGUI.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置MiniGUI的ial和gal引擎，其配置文件的使用如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[system]
// GAL engine and default options
gal_engine=fbcon
// defaultmode设置显示的大小
defaultmode=800x480-32bpp

[fbcon]
// defaultmode设置显示的大小
defaultmode=800x480-32bpp

[sunxifb]
defaultmode=800x480-32bpp
// flipbuffer=1代替原来的export MG_DOUBLEBUFFER=1
flipbuffer=1
// cacheflag=1使能fb的cache，使buffer拷贝更快，在R328/R329上fb没有cache功能，需要置为0
cacheflag=1
// rotate是控制旋转的角度，使能G2D旋转后有效，当旋转角度为0与180度时，defaultmode不用改变
// 旋转角度为90与270度时，system和sunxifb的defaultmode要改成480x800-32bpp
rotate=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用触摸屏，注意mdev需配置成生成的触摸节点，输入引擎配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// IAL engine
ial_engine=tslib
mdev=/dev/input/event1
mtype=none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用鼠标，输入引擎配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// IAL engine
ial_engine=console
mdev=/dev/input/mouse0
mtype=IMPS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-minigui优化" tabindex="-1"><a class="header-anchor" href="#_2-4-minigui优化" aria-hidden="true">#</a> 2.4 MiniGUI优化.</h3><h4 id="_2-4-1-double-buffer" tabindex="-1"><a class="header-anchor" href="#_2-4-1-double-buffer" aria-hidden="true">#</a> 2.4.1 Double Buffer</h4><p>双缓冲的目的主要是防止画面撕裂或者闪烁</p><ol><li>修改内核开启双buffer。</li></ol><p>修改文件tina/lichee/linux-3.4/drivers/video/sunxi/disp2/disp/dev_disp.c</p><p>注：V853平台代码路径为：lichee/linux-4.9/drivers/video/fbdev/sunxi/disp2/disp/dev_disp.c</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//fb0，注意赋值为 3 或者更多时，使用sunxifb引擎会切换成循环buffer，在快速滑动下可以提升一些帧率
init_para-&gt;buffer_num[0] = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在MiniGUI程序执行前导入环境变量。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export MG_DOUBLEBUFFER=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意只在使用fbcon引擎的时候需要导入这个环境变量，sunxifb引擎由flipbuffer字段指定。</p><p>执行完 1 、 2 步，MiniGUI内部就会使用双缓冲，解决界面切换时闪烁的问题。</p><ol start="3"><li>还提供了一个函数，可以在应用层控制是否使用双buffer，比如在打开界面前打开双缓冲，打开界面之后停止使用双缓冲。</li></ol><p>开机 framebuffer 是不带 cache 的，运行 minigui 程序的时候，如果执行了 export MG_DOUBLEBUFFER=1或者flipbuffer=1并且cacheflag=1，framebuffer会切换成带cache的，默认换页的时候会刷cache。</p><p>表2-3: DoubleBufferEnable函数说明</p><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">DoubleBufferEnable(FALSE)</td><td style="text-align:left;">framebuffer会切换成不带cache的，因此不用刷cache</td></tr><tr><td style="text-align:left;">DoubleBufferEnable(TRUE)</td><td style="text-align:left;">framebuffer会切换成带cache的，默认换页的时候会刷cache</td></tr></tbody></table><p>DoubleBufferEnable需要在执行export MG_DOUBLEBUFFER=1或者flipbuffer=1之后才能调用，DoubleBufferEnable返回 0 表示调用成功，如果返回-1表示调用失败，可能是关闭cache失败，也可能是mmap framebuffer失败，需要应用层再次调用该接口，不然显示异常或出错。</p><h4 id="_2-4-2-其他" tabindex="-1"><a class="header-anchor" href="#_2-4-2-其他" aria-hidden="true">#</a> 2.4.2 其他</h4><ol><li>键盘换肤，可以参考《MiniGUI更换键盘皮肤》文档。</li><li>输入法更新词库，可以参考《MiniGUI输入法更新词库》文档。</li><li>文字旋转，可以参考《MiniGUI TTF旋转字库制作并竖直显示文字》文档。</li><li>Ubuntu移植MiniGUI，可以参考《Ubuntu 64位移植Minigui3.2》文档。</li><li>视频小窗，可以参考《minigui_per_view视频小视窗播放》文档。</li></ol>`,68),d=[a];function s(r,u){return i(),t("div",null,d)}const m=e(l,[["render",s],["__file","index.html.vue"]]);export{m as default};
