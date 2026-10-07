<template>
    <section id="contacts" class="pb-10 sm:pb-14" :style="{ scrollMarginTop: `calc(${headerStore.height}px + 1rem)` }">
        <div class="wrapper">
            <div class="contact-panel relative overflow-hidden rounded-[2rem] border border-rose-100 bg-[#fff0f1] shadow-[0_20px_60px_rgba(174,93,117,0.1)]">
                <div class="grid md:grid-cols-[0.95fr,1.05fr]">
                    <div class="relative gap-4 z-10 flex flex-col items-start justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
                        <p v-reveal class="kicker">Открыта к проектам</p>
                        <h2 v-reveal class="max-w-md font-display max-md:text-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                            Давайте создадим <span class="text-gradient">что-то красивое</span> вместе!
                        </h2>
                        <p v-reveal="{ delay: 0.1 }" class="max-w-sm leading-relaxed text-slate-600">
                            Открыта к интересным проектам и новым знакомствам. Буду рада обсудить вашу идею.
                        </p>
                        <a href="mailto:Tatya-Gabrielyan@mail.ru" class="btn-primary">
                            Написать мне
                        </a>
                    </div>

                    <div class="relative z-10 flex items-center px-7 pb-8 sm:px-10 sm:pb-10 md:py-10 lg:px-12">
                        <div class="w-full flex flex-col gap-4 rounded-[1.75rem] border border-rose-100 bg-white/75 p-4 shadow-[0_12px_32px_rgba(174,93,117,0.07)] sm:p-6">
                            <div class="flex flex-col gap-1">
                                <p class="text-sm font-semibold text-rose-700">Найдёмся здесь</p>
                                <p class="text-xs text-slate-500">Выберите удобный способ связаться</p>
                            </div>
                            <div class="flex flex-col divide-y divide-rose-100">
                                <a
                                    href="mailto:Tatya-Gabrielyan@mail.ru"
                                    class="contact-link group"
                                >
                                    <span class="contact-icon bg-rose-100 text-rose-600">
                                        <Icon name="icon:email" />
                                    </span>
                                    <span class="min-w-0 flex-1">
                                        <span class="contact-label">Email</span>
                                        <span class="contact-value break-all">Tatya-Gabrielyan@mail.ru</span>
                                    </span>
                                    <span class="contact-arrow">↗</span>
                                </a>

                                <a
                                    href="https://t.me/tatyagabrielyan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="contact-link group"
                                >
                                    <span class="contact-icon bg-rose-100 text-rose-600">
                                        <Icon name="icon:tg" />
                                    </span>
                                    <span class="min-w-0 flex-1">
                                        <span class="contact-label">Telegram</span>
                                        <span class="contact-value">tatyagabrielyan</span>
                                    </span>
                                    <span class="contact-arrow">↗</span>
                                </a>

                                <a
                                    href="https://github.com/TatyaG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="contact-link group"
                                >
                                    <span class="contact-icon bg-rose-100 text-rose-600">
                                        <Icon name="icon:github" />
                                    </span>
                                    <span class="min-w-0 flex-1">
                                        <span class="contact-label">GitHub</span>
                                        <span class="contact-value">github.com/TatyaG</span>
                                    </span>
                                    <span class="contact-arrow">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const headerStore = useHeaderStore();

</script>

<style>
 .contact-link {
    @apply flex min-w-0 items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500;
  }

  .contact-icon {
    @apply flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform;
  }

  .contact-label {
    @apply block text-[0.65rem] uppercase tracking-[0.16em] text-slate-500;
  }

  .contact-value {
    @apply block break-all text-sm font-medium text-slate-800 transition-colors;
  }

  .contact-arrow {
    @apply ml-auto shrink-0 text-rose-400 transition-transform;
  }

  .contact-link:hover .contact-icon,
  .contact-link:focus-visible .contact-icon {
    transform: scale(1.05);
  }

  .contact-link:hover .contact-value {
    @apply text-rose-700;
  }

  .contact-link:hover .contact-arrow,
  .contact-link:focus-visible .contact-arrow {
    transform: translate(0.125rem, -0.125rem);
  }
</style>
