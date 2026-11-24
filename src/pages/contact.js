export function ContactPage() {
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <span class="inline-block text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
        Contact Page
      </span>
      <h1 class="text-3xl font-bold text-slate-900 mt-4">ติดต่อเรา (Contact)</h1>

      <div class="mt-6 space-y-3 text-slate-700">
        <div class="flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <span class="text-sm font-medium text-slate-500">อีเมล</span>
          <a
            href="mailto:panawas1123@gmail.com"
            class="font-semibold text-sky-600 hover:underline"
          >
            panawas1123@gmail.com
          </a>
        </div>
      </div>
    </div>
  `;
}