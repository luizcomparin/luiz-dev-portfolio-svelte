<script>
	import informationVariant from '@iconify/icons-mdi/information-variant'
	import Icon from '@iconify/svelte'
	import openInNew from '@iconify/icons-mdi/open-in-new'
	import angularIcon from '@iconify/icons-mdi/angular'
	import expressIcon from '@iconify/icons-simple-icons/express'
	import svelteIcon from '@iconify/icons-simple-icons/svelte'
	import firebaseIcon from '@iconify/icons-simple-icons/firebase'
	import { languageStore } from '$lib/languageStore'
	import nextdotjsIcon from '@iconify/icons-simple-icons/nextdotjs'
	import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
	import googlecloudIcon from '@iconify/icons-simple-icons/googlecloud'
	import css3Icon from '@iconify/icons-simple-icons/css3'
	import html5Icon from '@iconify/icons-simple-icons/html5'

	let pages = [
		{
			href: 'https://navalha.app.br/',
			image_src: '/images/home-page-print.png',
			title: 'Navalha app',
			project_info:
				'Webapp com intuito de servir como landing page e plataforma de confirmação de agendamentos para o aplicativo Navalha.',
			icons: [
				{
					tooltip: 'Angular 15',
					icon_html: angularIcon,
				},
				{
					tooltip: 'Node + Express',
					icon_html: expressIcon,
				},
				{
					tooltip: 'HTML5',
					icon_html: html5Icon,
				},
				{
					tooltip: 'CSS3',
					icon_html: css3Icon,
				},
			],
		},
		{
			href: 'https://lambretafilmesrental.web.app/',
			image_src: '/images/lambreta-rental-print.png',
			title: 'Lambreta Rental',
			project_info: 'Webapp em estilo e-commerce para aluguel de filmadoras e equipamentos de filmagem.',
			icons: [
				{
					tooltip: 'SvelteKit',
					icon_html: svelteIcon,
				},
				{
					tooltip: 'Node + Express',
					icon_html: expressIcon,
				},
				{
					tooltip: 'Next.js + React',
					icon_html: nextdotjsIcon,
				},
				{
					tooltip: 'MongoDB',
					icon_html: mongodbIcon,
				},
				{
					tooltip: 'Firebase',
					icon_html: firebaseIcon,
				},
				{
					tooltip: 'Google Cloud',
					icon_html: googlecloudIcon,
				},
			],
		},
	]

	languageStore.subscribe(store => {
		if (store.language === 'pt') {
			pages[0].project_info =
				'Webapp com intuito de servir como landing page e plataforma de confirmação de agendamentos para o aplicativo Navalha.'
			pages[1].project_info = 'Webapp em estilo e-commerce para aluguel de filmadoras e equipamentos de filmagem.'
		} else {
			pages[0].project_info =
				'Webapp developed to serve as landing page and schedule confirmation platform to the app Navalha.'
			pages[1].project_info = 'E-commerce-like website for renting cameras and professional filming equipment.'
		}
	})
</script>

<svelte:head>
	<title>Luiz Comparin - Projetos</title>
</svelte:head>

<section
	class=" mb-[60px] md:mb-0 flex flex-col overflow-y-scroll h-full lg:mt-32 lg:pb-12 lg:-translate-y-8 w-screen max-w-[900px] gap-6">
	<div>
		<h1 class="text-4xl text-[2.25em] mr-auto">{$languageStore.language === 'pt' ? 'Projetos' : 'Projects'}</h1>
		<h2>
			{$languageStore.language === 'pt'
				? 'Estes são meus projetos reais. Toque o'
				: 'These are my real projects. Touch the'}
			<Icon icon={informationVariant} class="text-xl inline-block" />
			{$languageStore.language === 'pt' ? 'em cada projeto para saber mais.' : 'in each project to know more.'}
		</h2>
	</div>
	{#each pages as page}
		<div class="flex flex-col 2xl:flex-row w-fit relative">
			<a
				href={page.href}
				target="_blank"
				class="relative group rounded-xl w-fitd bg-port-bg shadow-xl hover:shadow-2xl transition-all z-10">
				<img
					src={page.image_src}
					alt={page.title}
					class="max-w-[580px] w-full h-full flex max-h-[270px] object-cover rounded-xl rounded-tr-lg transition-all opacity-90 hover:opacity-100" />
				<div
					class="absolute flex gap-1 w-auto items-center bottom-0 transition-all opacity-0d dgroup-hover:opacity-100 text-slate-200/90 text-xs rounded-lg rounded-tl-none rounded-br-none bg-black/40 px-4 py-[2px]">
					<div class="w-[0px]d overflow-hidden flex group-hover: w-full transition-all">
						{page.href}
					</div>

					<Icon icon={openInNew} />
				</div>
			</a>
			<!-- info hover -->
			<div
				class="2xl:absolute peer ml-2 2xl:ml-0 group flex transition-all duration-300 dtop-full 2xl:top-1 2xl:left-[calc(100%-270px)] 2xl:hover:left-full">
				<!-- info box -->
				<div
					class="flex flex-col transition-all duration-300 w-[0px] max-h-[0px] group-hover:max-h-[180px] 2xl:max-h-[180px] 2xl:w-[270px] overflow-hidden group-hover:w-[270px] group-hover:p-4 2xl:p-4 gap-4 rounded-bl-lg 2xl:rounded-bl-none rounded-br-lg bg-black/40">
					<div class="flex flex-col gap-2">
						<p>{page.title}</p>
						<p class="text-sm">{page.project_info}</p>
					</div>
					<!-- tech stack -->
					<div class="flex relative gap-2 text-xl text-slate-200/80">
						{#each page.icons as icon}
							<span data-tooltip={icon.tooltip} class=" hover:text-slate-200">
								<Icon icon={icon.icon_html} />
							</span>
						{/each}

						<!-- {#if pages[1].title === page.title}
							<span class="absolute text-xs font-semibold bottom-[1.2rem]d left-[4.25rem] text-[crimson]"
								>{$languageStore.language === 'pt' ? 'em desenvolvimento' : 'in development'}</span>
						{/if} -->
					</div>
				</div>
				<!-- info icon -->
				<div
					class="bg-black/40 p-2 h-fit 2xl:rounded-r-lg rounded-b-lg 2xl:rounded-bl-none group-hover:rounded-bl-none">
					<div class="info-animation">
						<Icon icon={informationVariant} class="text-xl text-slate-200/80" />
					</div>
				</div>
			</div>
			<!-- esparadrapo -->
			<div
				class="absolute flex z-30 transition-all duration-300 bg-white/50d h-[36px] w-[calc(100%-45px)] peer-hover:w-1/2 2xl:peer-hover:w-[36px] right-0 bottom-0 group-hover:w-[45px] group-hover:h-[130px] 2xl:h-[130px] 2xl:w-[36px] 2xl:top-[40px] 2xl:left-full 2xl:peer-hover:left-[calc(100%+270px)]" />
		</div>
	{/each}
</section>

<style>
	.info-animation {
		/* animation: myAnim 2s ease 0s 1 normal ; */
		animation-name: info-swing;
		animation-duration: 3.5s;
		animation-timing-function: ease-in-out;
		animation-delay: 2s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-fill-mode: forwards;
	}

	@keyframes info-swing {
		0%,
		/* 40%, */
		100% {
			transform: rotate(0deg);
			scale: 100%;
			/* transform-origin: 50% 50%; */
		}

		5% {
			transform: rotate(-20deg);
			scale: 130%;
		}

		10% {
			transform: rotate(20deg);
		}

		15% {
			transform: rotate(-20deg);
		}

		20% {
			transform: rotate(15deg);
			scale: 130%;
		}

		25% {
			transform: rotate(5deg);
		}

		30% {
			transform: rotate(0deg);
		}
	}
</style>
