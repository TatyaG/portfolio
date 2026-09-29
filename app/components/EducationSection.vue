<template>
    <section id="education" class="scroll-mt-20 py-24">
        <div class="wrapper">
            <div class="flex flex-col gap-12 items-start">
                <SectionTitle kicker="Образование" title="Учёба и курсы" />

                <div class="grid gap-6 md:grid-cols-2">
                    <div v-for="(item, i) in items" :key="item.title" v-reveal="{ delay: i * 0.1 }"
                        class="card relative overflow-hidden flex flex-col gap-5 items-start">
                        <span class="absolute -right-4 -top-6 font-display text-7xl font-bold text-white/[0.04]">
                            {{ item.year }}
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-col gap-3">
                                <p class="kicker">{{ item.type }}</p>
                                <h3 class="font-display text-xl font-semibold text-white">{{ item.title }}</h3>
                            </div>
                            <p class="text-sm text-zinc-400">{{ item.subtitle }}</p>
                        </div>

                        <p class="text-sm leading-relaxed text-zinc-500">{{ item.text }}</p>
                        <span class="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                            {{ item.year }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        year: '2022',
        type: 'Высшее образование',
        title: 'ГСГУ, г.Коломна',
        subtitle: 'Государственный социально-гуманитарный университет',
        text: 'Факультет математики, физики, химии, информатики. Педагогическое образование с двумя профилями подготовки.',
    },
    {
        year: '2023',
        type: 'Повышение квалификации',
        title: 'Skillbox',
        subtitle: 'Курс «Frontend-разработчик»',
        text: 'Современный стек frontend-разработки: вёрстка, JavaScript, работа с библиотеками и инструментами сборки.',
    },
]
</script>
