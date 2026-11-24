import './style.css';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { AdminPage } from './pages/admin.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/admin': AdminPage,
};

const navItems = [
  { path: '#/', label: 'Home' },
  { path: '#/about', label: 'About' },
  { path: '#/contact', label: 'Contact' },
  { path: '#/admin', label: 'Admin' },
];

function Navbar(currentPath) {
  return `
    <header class="bg-slate-900 text-white shadow">
      <nav class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#/" class="font-bold tracking-wide text-indigo-400">MyWeb4Pages</a>
        <div class="flex items-center gap-2">
          ${navItems
            .map((item) => {
              const routeKey = item.path.slice(1);
              const isActive = currentPath === routeKey;
              return `
                <a
                  href="${item.path}"
                  class="px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }"
                >
                  ${item.label}
                </a>
              `;
            })
            .join('')}
        </div>
      </nav>
    </header>
  `;
}

function render() {
  const path = location.hash.slice(1) || '/';
  const PageComponent = routes[path] || HomePage;
  const app = document.querySelector('#app');

  app.innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-900">
      ${Navbar(path)}
      <main>${PageComponent()}</main>
    </div>
  `;
}

window.addEventListener('hashchange', render);
render();