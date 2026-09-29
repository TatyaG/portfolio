<template>
    <section id="about" ref="root" class="scroll-mt-20 py-24">
        <div class="wrapper">
            <div class="flex flex-col gap-12">
                <SectionTitle kicker="Обо мне" title="Немного о себе" />

                <div class="grid items-start gap-8 lg:grid-cols-[300px,1fr]">
                    <div v-reveal class="card text-center flex flex-col gap-6">
                        <div
                            class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-3xl font-bold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                            ТГ
                        </div>
                        <div>
                            <h3 class="font-display text-lg text-white">Татевик Габриелян</h3>
                            <p class="text-sm text-zinc-500">Frontend-разработчик</p>
                        </div>


                        <ul class="flex flex-col gap-2.5 text-left text-sm text-zinc-400">
                            <li v-for="fact in facts" :key="fact" class="flex items-start gap-2">
                                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                                {{ fact }}
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col gap-10">
                        <div class="flex flex-col gap-5">
                            <p v-reveal class="text-lg leading-relaxed text-zinc-300">
                                Привет! Я — frontend-разработчик. Разрабатываю и поддерживаю клиентскую часть
                                веб-приложений на Nuxt.js и Vue.js: проектирую переиспользуемые UI-компоненты,
                                настраиваю интеграции с REST API и добавляю анимации, которые делают интерфейс живым.
                            </p>
                            <p v-reveal="{ delay: 0.1 }" class="leading-relaxed text-zinc-400">
                                Начинала путь с вёрстки и работы с SQL, выросла до полноценной разработки на
                                современном стеке. Люблю аккуратную адаптивную вёрстку по макетам Figma, чистый код
                                и командную работу — от бэкенда и дизайна до код-ревью.
                            </p>
                        </div>


                        <div v-reveal="{ delay: 0.15 }" class="grid gap-4 sm:grid-cols-3">
                            <div v-for="stat in stats" :key="stat.label" class="card flex flex-col gap-1 p-5">
                                <div class="font-display text-3xl font-semibold text-white">
                                    <span class="stat-value" :data-to="stat.value"
                                        :data-decimals="stat.decimals">0</span><span class="text-violet-400">{{
                                            stat.suffix }}</span>
                                </div>
                                <p class="text-sm text-zinc-500">{{ stat.label }}</p>
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
