import { NextRequest, NextResponse } from 'next/server';

const PYTHON_API = process.env.PYTHON_API_URL ?? 'http://127.0.0.1:5000';

const VALUE_TO_LEVEL: Record<number, string> = {
  0:   'Tidak',
  0.4: 'Mungkin',
  0.6: 'Kemungkinan Besar',
  0.8: 'Hampir Pasti',
  1:   'Pasti',
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const rawAnswers: Record<string, number> = body.gejala ?? {};

  // G01 → G1, G10 → G10; convert numeric CF value to level string
  const gejala: Record<string, string> = {};
  for (const [code, value] of Object.entries(rawAnswers)) {
    const normalized = code.replace(/^G0*(\d+)$/, 'G$1');
    gejala[normalized] = VALUE_TO_LEVEL[value] ?? 'Tidak';
  }

  let res: Response;
  try {
    res = await fetch(`${PYTHON_API}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gejala }),
    });
  } catch {
    return NextResponse.json(
      { error: 'Tidak dapat terhubung ke server analisis. Pastikan server Python berjalan.' },
      { status: 503 }
    );
  }

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
