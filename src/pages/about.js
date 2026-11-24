export function AboutPage() {
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <span class="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
        About Page
      </span>
      <h1 class="text-3xl font-bold text-slate-900 mt-4">เกี่ยวกับเรา (About)</h1>

      <div class="mt-6 space-y-3 text-slate-700">
        <div class="flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <span class="text-sm font-medium text-slate-500">ชื่อ - นามสกุล</span>
          <span class="font-semibold text-slate-900">นายศักรินทร์ บุษบง</span>
        </div>
        <div class="flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <span class="text-sm font-medium text-slate-500">อายุ</span>
          <span class="font-semibold text-slate-900">19 ปี</span>
        </div>
      </div>
    </div>
  `;
}