# Развёртывание View Transpile на любой ОС

Краткая инструкция по установке и запуску проекта на Windows, macOS и Linux.

---

## Требования

- **Node.js** 18.x или 20.x (рекомендуется LTS)  
  Скачать: https://nodejs.org/
- **npm** (идёт в комплекте с Node.js), версия 9+

Проверка в терминале:

```bash
node -v
npm -v
```

---

## 1. Распаковка архива

### Windows (PowerShell или проводник)

- Либо: правый клик по `view-transpile.zip` → «Извлечь всё».
- Либо в PowerShell:
  ```powershell
  Expand-Archive -Path view-transpile.zip -DestinationPath view-transpile
  cd view-transpile
  ```

### macOS / Linux

```bash
unzip view-transpile.zip
cd view-transpile
```

Если архив в формате `.tar.gz`:

```bash
tar -xzf view-transpile.tar.gz
cd view-transpile
```

---

## 2. Установка зависимостей

В каталоге проекта выполните одну команду (работает на всех ОС):

```bash
npm install
```

При ошибках сети или доступа к реестру можно использовать:

```bash
npm install --prefer-offline --no-audit
```

или временно переключить зеркало (например, для РФ):

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

---

## 3. Режим разработки (локальный запуск)

```bash
npm run dev
```

В терминале появится адрес вида `http://localhost:5173/` (порт может отличаться). Откройте его в браузере (рекомендуется **Chrome** или **Edge** — для выбора каталога нужен File System Access API).

---

## 4. Сборка для продакшена

```bash
npm run build
```

Результат будет в папке **`dist/`**. Её содержимое можно развернуть на любом веб-сервере (Nginx, Apache, IIS, или статический хостинг).

### Примеры раздачи статики

**Nginx** (фрагмент конфига):

```nginx
server {
  listen 80;
  root /путь/к/dist;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

**Apache** — в каталоге с `dist` положите `.htaccess`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Локальный просмотр собранной версии** (без сервера):

```bash
npm run preview
```

Откроется предпросмотр `dist` по адресу типа `http://localhost:4173/`.

---

## 5. Использование приложения

1. В интерфейсе нажмите **«Выбрать каталог»**.
2. Укажите папку, в которой лежат `.js`-файлы форм (DSL).
3. В меню слева отобразятся файлы форм; выберите нужный — форма откроется справа.

**Важно:** выбор папки на диске поддерживается в браузерах с File System Access API (Chrome, Edge). В Firefox/Safari эта функция может быть недоступна или ограничена.

---

## Устранение типичных проблем

| Проблема | Что сделать |
|----------|-------------|
| `npm: command not found` | Установить Node.js с https://nodejs.org и перезапустить терминал. |
| Ошибки при `npm install` | Проверить интернет; выполнить `npm cache clean --force` и снова `npm install`. |
| Порт 5173 занят | Vite выберет другой порт (5174, 5175 …); смотрите вывод в терминале. |
| «Выбрать каталог» не срабатывает | Использовать Chrome/Edge; приложение должно открываться по `http://localhost:...`, не `file://`. |
| После сборки пустая страница | Раздавать `dist` через веб-сервер с поддержкой SPA (см. п. 4). |

---

## Состав архива (без node_modules)

- Исходный код приложения (`src/`, `index.html`, конфиги).
- `package.json` и (при наличии) `package-lock.json` для воспроизводимой установки зависимостей.

Папку `node_modules` в архив не включают — она создаётся командой `npm install` на машине заказчика.
