import{_ as t,r as n,o as r,c as i,d as h,w as p,b as o,e}from"./app-5cc5893e.js";const d={},c=e('<h1 id="tina-npu开发部署说明" tabindex="-1"><a class="header-anchor" href="#tina-npu开发部署说明" aria-hidden="true">#</a> Tina_NPU开发部署说明</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1 前言</h2><h3 id="_1-1-读者对象" tabindex="-1"><a class="header-anchor" href="#_1-1-读者对象" aria-hidden="true">#</a> 1.1 读者对象</h3><p>本文档（本指南）主要适用于以下人员：</p><p>• 技术支持工程师</p><p>• 软件开发工程师</p><p>• AI 应用案客户</p><h2 id="_2-正文" tabindex="-1"><a class="header-anchor" href="#_2-正文" aria-hidden="true">#</a> 2 正文</h2><h3 id="_2-1-npu-开发简介" tabindex="-1"><a class="header-anchor" href="#_2-1-npu-开发简介" aria-hidden="true">#</a> 2.1 NPU 开发简介</h3><p>• 支持int8/uint8/int16 量化精度，运算性能可达1TOPS.</p><p>• 相较于GPU 作为AI 运算单元的大型芯片方案，功耗不到GPU 所需要的1%.</p><p>• 可直接导入Caffe, TensorFlow, Onnx, TFLite，Keras, Darknet, pyTorch 等模型格式.</p><p>• 提供AI 开发工具：支持模型快速转换、支持开发板端侧转换API、支持TensorFlow, TFLite, Caffe, ONNX, Darknet, pyTorch 等模型.</p><p>• 提供AI 应用开发接口：提供NPU 跨平台API.</p><h3 id="_2-2-开发流程" tabindex="-1"><a class="header-anchor" href="#_2-2-开发流程" aria-hidden="true">#</a> 2.2 开发流程</h3><p>NPU 开发完整的流程如下图所示：</p><p><img src="http://photos.100ask.net/allwinner-docs/v853/AIApplication/image-20221208111346439.png" alt="image-20221208111346439"></p>',17),s=e('<h3 id="_2-3-模型训练" tabindex="-1"><a class="header-anchor" href="#_2-3-模型训练" aria-hidden="true">#</a> 2.3 模型训练</h3><p>在模型训练阶段，用户根据需求和实际情况选择合适的框架（如Caffe、TensorFlow 等）进行训练得到符合需求的模型。也可直接使用已经训练好的模型, 对于基</p><p>于已有的算法模型部署来讲，可以不用经过模型训练阶段.</p><h3 id="_2-4-模型转换" tabindex="-1"><a class="header-anchor" href="#_2-4-模型转换" aria-hidden="true">#</a> 2.4 模型转换</h3><p>此阶段为通过Acuity Toolkit 把模型训练中得到的模型转换为NPU 可用的模型NBG 文件。</p><h3 id="_2-5-程序开发" tabindex="-1"><a class="header-anchor" href="#_2-5-程序开发" aria-hidden="true">#</a> 2.5 程序开发</h3><p>最后阶段为基于VIPLite API 开发程序实现业务逻辑。</p><h3 id="_2-6-acuity-toolkit" tabindex="-1"><a class="header-anchor" href="#_2-6-acuity-toolkit" aria-hidden="true">#</a> 2.6 acuity Toolkit</h3><p>Allwinner 提供acuity toolkit 开发套件进行模型转换、推理运行和性能评估。</p><p>用户通过提供的python 接口可以便捷地完成以下功能：</p><p>1）模型转换：支持Caffe,TensorFlow Lite, Tensorflow, ONNXDarknet NBG 模型导入导出，后续能够在硬件平台上加载使用。</p><p>2）模型推理：能够在PC 上模拟运行模型并获取推理结果，也可以在指定硬件平台上运行模型并获取推理结果。</p><p>3）性能评估：能够在PC 上模拟运行并获取模型总耗时及每一层的耗时信息，也可以通过联机</p><p>调试的方式在指定硬件平台上运行模型，并获取模型在硬件上运行时的总时间和每一层的耗时信息。</p><p>此文档主要介绍模型转换和基于NPU 程序开发，不涉及模型训练的内容。</p>',15);function l(_,u){const a=n("center");return r(),i("div",null,[c,h(a,null,{default:p(()=>[o("图2-1: npu_1.png")]),_:1}),s])}const N=t(d,[["render",l],["__file","01-NPUDevelopmentDeployment.html.vue"]]);export{N as default};
