<template>
    <section id="about" ref="root" :style="{ scrollMarginTop: `calc(${headerStore.height}px + 1rem)` }">
        <div class="wrapper">
            <div class="flex flex-col gap-12">
                <SectionTitle kicker="Обо мне" title="Немного о себе" />

                <div class="grid items-center gap-8 lg:grid-cols-[300px,1fr]">
                    <div v-reveal class="card profile-card flex flex-col gap-6 text-center">
                        <div class="profile-photo-wrap relative mx-auto w-fit">
                            <picture class="relative z-10 block">
                                <source srcset="~/assets/img/photo.webp" type="image/webp" />
                                <img
                                    src="~/assets/img/photo.jpg"
                                    alt="Татевик Габриелян"
                                    class="h-60 w-60 rounded-[46%] object-cover shadow-[0_12px_30px_rgba(219,128,153,0.2)]"
                                />
                            </picture>
                            <span class="absolute -right-5 top-4 z-20 rotate-6 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-900 shadow-sm">
                                привет!
                            </span>
                        </div>
                        <div>
                            <h3 class="font-display text-lg text-slate-900">Татевик Габриелян</h3>
                            <p class="text-sm text-slate-500">Frontend-разработчик</p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-10">
                        <div class="flex flex-col gap-5">
                            <p v-reveal class="text-lg leading-relaxed text-slate-700">
                                Привет! Я — frontend-разработчик. Разрабатываю и поддерживаю клиентскую часть
                                веб-приложений на Nuxt.js и Vue.js: проектирую переиспользуемые UI-компоненты,
                                настраиваю интеграции с REST API и добавляю анимации, которые делают интерфейс живым.
                            </p>
                            <p v-reveal="{ delay: 0.1 }" class="leading-relaxed text-slate-600">
                                Начинала путь с вёрстки и работы с SQL, выросла до полноценной разработки на
                                современном стеке. Люблю аккуратную адаптивную вёрстку по макетам Figma, чистый код
                                и командную работу — от бэкенда и дизайна до код-ревью.
                            </p>
                        </div>


                        <div v-reveal="{ delay: 0.15 }" class="grid gap-4 sm:grid-cols-3">
                            <div v-for="stat in stats" :key="stat.label" class="card flex flex-col gap-1 p-5">
                                <div class="font-display text-3xl font-semibold text-slate-900">
                                    <span class="stat-value" :data-to="stat.value"
                                        :data-decimals="stat.decimals">0</span><span class="text-rose-600">{{
                                            stat.suffix }}</span>
                                </div>
                                <p class="text-sm text-slate-500">{{ stat.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const headerStore = useHeaderStore();

const stats = [
    { value: 3.5, decimals: 1, suffix: '+', label: 'года коммерческого опыта' },
    { value: 3, decimals: 0, suffix: '', label: 'компании в опыте работы' },
    { value: 20, decimals: 0, suffix: '+', label: 'технологий в стеке' },
]

const facts = [
    'Луховицы, Московская область',
    'Удалённо',
    'Готова выполнить тестовое задание',
]

const root = ref<HTMLElement | null>(null);
let ctx: ReturnType<typeof gsap.context> | undefined;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.stat-value').forEach((el) => {
            const target = parseFloat(el.dataset.to ?? '0');
            const decimals = Number(el.dataset.decimals ?? 0);
            const counter = { val: 0 };
            gsap.to(counter, {
                val: target,
                duration: 1.6,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                onUpdate: () => {
                    el.textContent = counter.val.toFixed(decimals).replace('.', ',')
                },
            })
        })
    }, root.value);
})

onBeforeUnmount(() => ctx?.revert());
</script>

<style>
 .profile-photo-wrap::before {
    content: '';
    position: absolute;
    inset: 0.4rem -0.65rem -0.4rem 0.65rem;
    border-radius: 48% 52% 46% 54%;
    background: #fde2e9;
    transform: rotate(-6deg);
  }

  .profile-photo-wrap::after {
    content: '✦';
    position: absolute;
    top: 0.35rem;
    left: -0.75rem;
    color: #e7a9bd;
    font-size: 1.5rem;
    animation: float-gentle 3s ease-in-out infinite;
  }
</style>