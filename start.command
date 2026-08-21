#!/bin/bash
# 单词冒险岛 · 局域网启动器
# 双击本文件（或在终端运行 ./start.command），
# 保持窗口开着，同一 Wi-Fi 的 iPad/手机即可访问。
cd "$(dirname "$0")"
clear
echo "🏝️  单词冒险岛 · 局域网模式"
echo "--------------------------------"
echo "保持本窗口打开，玩的时候别关。"
echo "停止：按 Ctrl + C 或直接关窗。"
echo "--------------------------------"
node server.js --host 0.0.0.0 --port 8641
