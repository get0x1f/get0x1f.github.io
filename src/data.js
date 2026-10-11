// Весь текст страницы — здесь. Меняешь данные, компоненты трогать не нужно.

export const profile = {
  nick: 'get0x1f',
  role: 'backend developer',
  focus: 'bots · minecraft plugins · design',
  status: 'open to work',
  openToWork: true,
  openToWorkLabel: 'Открыт к новым проектам',
  tagline:
    'Backend-разработчик и дизайнер. Пишу ботов для Discord и Telegram и плагины для Minecraft — от идеи до релиза.',
  about:
    'Люблю безопасность систем и оптимизацию кода, довожу идеи от задумки до рабочего продукта. 5 лет пишу плагины для Minecraft, 3 года — ботов для Discord и Telegram. Сейчас — главный технический администратор на Minecraft-проекте HazeWorld.',
  avatar: './avatar.jpg',
  heroBg: './hero-bg.jpg',
};

export const links = {
  github: 'https://github.com/get0x1f',
  telegram: 'https://t.me/get0x1f',
  telegramHandle: '@get0x1f',
  youtube: 'https://www.youtube.com/@get0x1f',
  discord: 'get0x1f', // ник в Discord: по клику копируется в буфер
};

export const stack = ['Java', 'Kotlin', 'C#', 'C++', 'MySQL', 'MariaDB', 'Gradle', 'Maven'];

export const stats = [
  { value: '3', label: 'проекта' },
  { value: '5', label: 'лет в коде' },
  { value: String(stack.length), label: 'технологий в стеке' },
];

// Пока пусто — секция «Проекты» и пункт меню скрыты.
// featured: true — карточка подсвечивается белым и получает бейдж «ГЛАВНЫЙ»
// image — необязательно: путь к скриншоту в /public, например './projects/bot.png'
// Пример:
// { title: 'HazeBot', description: 'Что делает.', tags: ['Java'], url: 'https://github.com/get0x1f/...', featured: true },
export const projects = [];
