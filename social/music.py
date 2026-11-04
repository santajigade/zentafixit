"""Original synthesized soundtrack for the daily promo (no samples, copyright free).
usage: music.py N_GUIDES out.wav   (timing matches templates/promo.html: T0=3.0, SEG=4.2, end card 4.0 s)"""
import numpy as np, wave, sys

NG = int(sys.argv[1])
SR, DUR = 44100, 3.0 + NG * 4.2 + 4.0
N = int(SR * DUR)
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(7)
BEAT = 0.5  # 120 BPM

def add(sig, t0, gain=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N: return
    sig = sig[: N - i] * gain
    L[i:i + len(sig)] += sig * (1 - max(pan, 0))
    R[i:i + len(sig)] += sig * (1 + min(pan, 0))

def env(n, a=0.005, d=0.2, sr=SR):
    t = np.arange(n) / sr
    e = np.minimum(t / a, 1.0) * np.exp(-t / d)
    return e

def tone(f, dur, kind="saw", harm=8):
    t = np.arange(int(dur * SR)) / SR
    if kind == "sine": return np.sin(2 * np.pi * f * t)
    s = np.zeros_like(t)
    for k in range(1, harm + 1):
        s += np.sin(2 * np.pi * f * k * t) / k * (1 if kind == "saw" else (k % 2))
    return s * 0.6

def nf(m): return 440 * 2 ** ((m - 69) / 12)

def kick():
    n = int(0.35 * SR); t = np.arange(n) / SR
    f = 50 + 110 * np.exp(-t * 35)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 9)

def hat(d=0.05):
    n = int(0.12 * SR); x = rng.standard_normal(n)
    x = np.diff(np.concatenate([[0], x]))  # brighten
    return x * env(n, 0.001, d) * 0.35

def clap():
    n = int(0.25 * SR); x = rng.standard_normal(n)
    e = np.zeros(n)
    for o in (0, 0.01, 0.02):
        e += env(n, 0.001, 0.012) * 0 + np.roll(env(n, 0.001, 0.015), int(o * SR))
    e += env(n, 0.001, 0.09) * 0.6
    return np.convolve(x, np.ones(6) / 6, "same") * e * 0.4

def whoosh(dur=0.6, up=True):
    n = int(dur * SR); x = rng.standard_normal(n)
    t = np.linspace(0, 1, n)
    shape = np.sin(np.pi * t) ** 2
    # moving one-pole lowpass for sweep
    cut = (0.02 + 0.25 * (t if up else 1 - t))
    y = np.zeros(n); acc = 0.0
    for i in range(n):
        acc += cut[i] * (x[i] - acc); y[i] = acc
    return y * shape * 0.9

def pop(f=900):
    n = int(0.12 * SR); t = np.arange(n) / SR
    fr = f * (1 + 1.5 * np.exp(-t * 60))
    return np.sin(2 * np.pi * np.cumsum(fr) / SR) * env(n, 0.001, 0.03)

def ding(m, d=0.6):
    n = int(d * 1.5 * SR); t = np.arange(n) / SR
    f = nf(m)
    s = np.sin(2 * np.pi * f * t) + 0.4 * np.sin(2 * np.pi * f * 2.01 * t) + 0.2 * np.sin(2 * np.pi * f * 3 * t)
    return s * env(n, 0.002, d) * 0.5

def impact():
    k = kick(); n = int(1.2 * SR)
    x = np.zeros(n); x[:len(k)] += k * 1.2
    noise = rng.standard_normal(n) * env(n, 0.001, 0.35) * 0.25
    noise = np.convolve(noise, np.ones(20) / 20, "same")
    return x + noise


prog = [(48, [60, 64, 67, 72]), (45, [57, 60, 64, 69]), (41, [57, 60, 65, 69]), (43, [55, 59, 62, 67])]
def pad(notes, dur):
    s = sum(tone(nf(m), dur, "saw", 6) for m in notes) / len(notes)
    s = np.convolve(s, np.ones(30) / 30, "same")
    n = len(s); t = np.arange(n) / SR
    return s * np.minimum(t / 0.25, 1) * np.minimum((dur - t) / 0.3, 1).clip(0)
def bass(m, dur):
    n = int(dur * SR); s = tone(nf(m), dur, "sq", 5)
    return np.convolve(s, np.ones(12) / 12, "same") * env(n, 0.005, 0.35)
T0, SEG = 3.0, 4.2
TEND = T0 + NG * SEG
for bar in range(40):
    t0 = bar * 2.0
    if t0 >= TEND: break
    root, ch = prog[bar % 4]
    add(pad(ch, 2.05), t0, 0.15)
    if t0 >= 2.0:
        for b in range(4): add(bass(root, 0.45), t0 + b * BEAT, 0.26)
add(pad([60, 64, 67, 72, 76], DUR - TEND), TEND, 0.2)
add(bass(36, 3.0), TEND, 0.35)
t = 0.5
while t < TEND - 0.3:
    beat = round(t / BEAT)
    if t >= 2.0 or beat % 2 == 0: add(kick(), t, 0.75)
    if t >= 3.0: add(hat(), t + BEAT / 2, 0.45, 0.3)
    if t >= 3.0 and beat % 2 == 1: add(clap(), t, 0.6, -0.1)
    t += BEAT
for x in np.arange(TEND - 1.0, TEND, 0.125): add(clap(), x, 0.2 + 0.3 * (x - TEND + 1.0))
add(whoosh(0.6), 0.0, 0.4)
add(pop(800), 0.65, 0.5); add(impact(), 0.65, 0.4)
add(pop(1100), 1.0, 0.3)
for i in range(NG):
    a = T0 + i * SEG
    add(whoosh(0.5), a - 0.3, 0.5, 0.2)
    add(pop(900 + i * 120), a + 0.35, 0.3)
    add(ding([76, 79, 81, 84, 86, 88][i % 6], 0.35), a + 1.05, 0.3)
add(whoosh(0.6, up=False), TEND - 0.4, 0.5)
add(impact(), TEND + 0.75, 0.85)
for i, m in enumerate([72, 76, 79, 84]): add(ding(m, 0.9), TEND + 0.8 + i * 0.06, 0.25)
# Master: fade, soft clip, normalize
mix = np.stack([L, R], 1)
tt = np.arange(N) / SR
mix *= np.clip((DUR - tt) / 0.6, 0, 1)[:, None] * np.clip(tt / 0.05, 0, 1)[:, None]
mix = np.tanh(mix * 1.3)
mix = mix / np.max(np.abs(mix)) * 0.89
with wave.open(sys.argv[2], "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((mix * 32767).astype("<i2").tobytes())
