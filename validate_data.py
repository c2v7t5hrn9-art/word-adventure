#!/usr/bin/env python3
"""词库结构校验：CI 中运行，数据格式错误时退出码为 1。
用法: python3 validate_data.py"""
import json
import sys

errors = []


def err(msg):
    errors.append(msg)
    print(f"  ✗ {msg}")


with open('data/words-data.js') as f:
    f.readline()  # skip comment
    content = f.read()
    # Remove 'window.WORDS_DATA = ' prefix and trailing ';'
    data = json.loads(content.replace('window.WORDS_DATA = ', '').rstrip().rstrip(';'))

# ---- 顶层结构 ----
for key in ('version', 'doors', 'units'):
    if key not in data:
        err(f"缺少顶层字段: {key}")

doors = data.get('doors', [])
units = data.get('units', [])
if not doors:
    err("doors 为空")
if not units:
    err("units 为空")

# ---- 门（关卡） ----
door_ids = set()
for d in doors:
    if 'id' not in d or 'name' not in d:
        err(f"door 缺少 id/name: {d}")
        continue
    if d['id'] in door_ids:
        err(f"door id 重复: {d['id']}")
    door_ids.add(d['id'])

# ---- 单元与词条 ----
unit_ids = set()
entry_ids = set()
total_entries = 0
for u in units:
    uid = u.get('unitId')
    if not uid:
        err(f"unit 缺少 unitId: {list(u.keys())}")
        continue
    if uid in unit_ids:
        err(f"unitId 重复: {uid}")
    unit_ids.add(uid)
    entries = u.get('entries', [])
    if not entries:
        err(f"{uid}: entries 为空")
    for e in entries:
        total_entries += 1
        eid = e.get('id', '?')
        for field in ('id', 'text', 'meaning', 'door'):
            if not e.get(field):
                err(f"{uid}/{eid}: 缺少字段 {field}")
        if e.get('id') in entry_ids:
            err(f"entry id 重复: {e.get('id')}")
        entry_ids.add(e.get('id'))
        if e.get('door') not in door_ids:
            err(f"{uid}/{eid}: 引用了不存在的门 {e.get('door')}")
        if e.get('type') not in ('word', 'phrase'):
            err(f"{uid}/{eid}: type 必须是 word/phrase，实际为 {e.get('type')!r}")

# ---- 汇总 ----
print(f"version: {data.get('version')}  updated: {data.get('updated')}")
print(f"doors: {len(doors)}  units: {len(units)}  entries: {total_entries}")
for u in units:
    print(f"  {u.get('unitId')}: {len(u.get('entries', []))} entries")

if errors:
    print(f"\n校验失败：共 {len(errors)} 个问题 ✗")
    sys.exit(1)
print("\n校验通过 ✓")
