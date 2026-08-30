#!/usr/bin/env python3
"""批量生成预合成语音：macOS say(Samantha) → AAC m4a，文件名 = FNV-1a64(规范化文本)。
game.js 的 ttsHash() 必须用完全相同的规范化与哈希算法。"""
import json, re, subprocess, os, sys
from concurrent.futures import ThreadPoolExecutor

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets', 'tts')
os.makedirs(OUT, exist_ok=True)

def norm(t):
    t = re.sub(r'…|\.{3}', ' ', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def fnv1a64(t):
    # 与 JS charCodeAt 一致：按 UTF-16 码元迭代（文本为纯英文，均在 BMP 内）
    h = 0xcbf29ce484222325
    data = t.encode('utf-16-le')
    for i in range(0, len(data), 2):
        h ^= data[i] | (data[i + 1] << 8)
        h = (h * 0x100000001b3) & 0xffffffffffffffff
    return f'{h:016x}'

texts = [norm(t) for t in json.load(open('/tmp/tts_texts.json'))]
seen = {}
for t in texts:
    seen.setdefault(fnv1a64(t), t)
jobs = sorted(seen.items())
print(f'共 {len(jobs)} 个待生成（哈希去重后）')

def gen(job):
    h, t = job
    m4a = os.path.join(OUT, h + '.m4a')
    if os.path.exists(m4a) and os.path.getsize(m4a) > 500:
        return 'skip'
    aiff = os.path.join('/tmp', 'tts_' + h + '.aiff')
    try:
        subprocess.run(['say', '-v', 'Samantha', '-r', '155', '-o', aiff, t],
                       check=True, capture_output=True, timeout=60)
        subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '40000', '-q', '127', aiff, m4a],
                       check=True, capture_output=True, timeout=60)
        return 'ok'
    except Exception as e:
        return f'FAIL {t[:40]}: {e}'
    finally:
        if os.path.exists(aiff):
            os.remove(aiff)

fails = 0
with ThreadPoolExecutor(max_workers=8) as ex:
    for i, r in enumerate(ex.map(gen, jobs)):
        if r.startswith('FAIL'):
            fails += 1
            print(r)
        if (i + 1) % 200 == 0:
            print(f'进度 {i + 1}/{len(jobs)}')

total = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
print(f'完成: {len(jobs) - fails}/{len(jobs)}，总大小 {total / 1024 / 1024:.1f} MB')
sys.exit(1 if fails else 0)
