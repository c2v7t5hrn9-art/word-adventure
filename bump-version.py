#!/usr/bin/env python3
"""
 bump-version.py — 一键升级缓存版本号
 覆盖 index.html 和 sync.js（sync.js 里动态注入 game/minigames/flow 的 ?v= 写死在代码里，
 不一起升会导致 Safari 等浏览器一直用缓存的旧脚本，修复无法生效）
 用法: python3 bump-version.py
"""
import re

FILES = ['index.html', 'sync.js']

def bump(path, new_v=None):
    with open(path, 'r') as f:
        content = f.read()
    versions = re.findall(r'\?v=(\d+)', content)
    current = max(int(v) for v in versions) if versions else 0
    target = new_v if new_v is not None else current + 1
    content = re.sub(r'\?v=\d+', f'?v={target}', content)
    with open(path, 'w') as f:
        f.write(content)
    return current, target

# 先算 index.html 的新版本号，再让 sync.js 对齐到同一版本
cur, new_v = bump('index.html')
_, _ = bump('sync.js', new_v)

print(f'✅ index.html 与 sync.js 资源版本号已升级到 v={new_v}')
print('   下次代码/数据更新后，运行: python3 bump-version.py')
