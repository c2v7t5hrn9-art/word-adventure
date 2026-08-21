#!/usr/bin/env python3
"""
 bump-version.py — 一键升级 index.html 中所有资源的缓存版本号
 用法: python3 bump-version.py
"""
import re, sys

with open('index.html', 'r') as f:
    content = f.read()

# 找到当前最大版本号
versions = re.findall(r'\?v=(\d+)', content)
current = max(int(v) for v in versions) if versions else 1
new_v = current + 1

# 替换所有 ?v=N 为 ?v=N+1
content = re.sub(r'\?v=\d+', f'?v={new_v}', content)

with open('index.html', 'w') as f:
    f.write(content)

print(f'✅ 所有资源版本号已升级到 v={new_v}')
print('   下次数据更新后，运行: python3 bump-version.py')
