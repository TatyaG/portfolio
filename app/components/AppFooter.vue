<template>
  <footer class="relative mt-10 bg-[#f28da7] pb-3 pt-5 text-white sm:mt-12 sm:pt-6">
    <svg
      class="absolute bottom-full left-0 h-10 w-full sm:h-12"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 35C70 35 48 5 125 5s61 30 132 30c68 0 48-22 120-22s65 22 133 22c74 0 51-32 130-32s62 28 130 28c70 0 54-20 126-20s64 20 134 20c76 0 49-29 127-29s64 29 132 29c70 0 49-22 121-22s65 22 130 22v29H0Z"
        fill="#f28da7"
      />
    </svg>

    <div class="wrapper">
      <div class="flex gap-3 min-h-12 items-center justify-start sm:flex-row">
          <a
            href="https://t.me/tatyagabrielyan"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-rose-500"
            aria-label="Telegram"
          >
            <Icon class="size-5" name="icon:tg" />
          </a>

          <a
            href="https://github.com/TatyaG"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-rose-500"
            aria-label="GitHub"
          >
            <Icon class="size-5" name="icon:github" />
          </a>

          <a
            href="#"
            class="flex fixed bottom-4 z-10 right-4 h-9 w-9 items-center justify-center rounded-full bg-white text-rose-500 transition-transform hover:-translate-y-1"
            aria-label="Наверх"
          >
            <Icon class="size-5" name="icon:arrow-up" />
          </a>
      </div>
    </div>
  </footer>
</template>
