const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
    '/',
    'index.html',
    'assets/css/styles.css',
    'assets/js/app.js',
    'assets/icons/UAS_logo_72-ico'
];

const APP_SHELL_INMUTABLE = [
    'https://cdn.jsdelivr.net/npm//boostrap@4.0.0/dist/css/boostrap.min.css',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdn.jsdelivr.net/npm/boostrap@4.0.0/dist/js/boostrap.min.js',
    'assets/fontawesome5/js/solid.min.js',
    'assets/fontawesome5/js/fontawesome.min.js'
];

self.addEventListener("install", evt => {
    console.log("Instalando serviceworker... ");

    const cacheStatic = caches.open(STATIC_CACHE).then(c => c.addAll(APP_SHELL));
    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(c.addAll(APP_SHELL_INMUTABLE));

    evt.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});