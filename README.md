# course-nextjs

Мой учебный репозиторий: здесь я проходил курс по Next.js (App Router) и по ходу пробовал всё руками.

Если вдруг вы сюда зашли, ничего полезного для продакшена тут не найдёте. Но история коммитов примерно повторяет порядок тем, так что можно посмотреть, как всё постепенно росло.

## Что было опробованно

**Роутинг и структура приложения**
- `page`, `layout`, `template`: чем они отличаются и как вкладываются друг в друга
- специальные файлы `loading`, `error`, `not-found`
- динамические сегменты, catch-all и optional catch-all
- группы маршрутов, параллельные и перехватывающие роуты

**Навигация**
- `Link`, `useRouter`, `usePathname`, `useSearchParams`

**Кэширование**
- как App Router кэширует данные, revalidation, директива `'use cache'`
- `generateStaticParams` для статической генерации

**Server Actions и формы**
- обычные Server Actions, затем `next-safe-action` + `zod` для валидации
- `useActionState`, `useFormStatus`, `useOptimistic`
- Route Handlers, и почему серьёзный API лучше держать отдельно от Next.js

**База данных**
- PostgreSQL в Docker
- Drizzle ORM: схема, миграции, связи между таблицами

**Всё остальное**
- переменные окружения, cookies, headers, `searchParams` в серверных компонентах
- Proxy (бывший middleware) и настройка CSP в нём
- оптимизация картинок и шрифтов
- Metadata API, `robots`, `sitemap`, `manifest`
- `next.config`, сборка в Docker

## Стек

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Drizzle ORM, PostgreSQL, next-safe-action, zod. Пакетный менеджер: yarn.

## Как запустить

Если всё-таки захочется:

```bash
yarn install

# поднять базу
docker compose up -d postgres

# в .env нужна строка подключения, например:
# DATABASE_URL=postgresql://postgres:123456@localhost:5432/course-nextjs

yarn db:migrate
yarn dev
```

Приложение откроется на http://localhost:3000.

Можно поднять сразу всё через `docker compose up --build`. Тогда Next.js тоже соберётся в контейнере.
