<script>
	import informationVariant from '@iconify/icons-mdi/information-variant'
	import Icon from '@iconify/svelte'
	import openInNew from '@iconify/icons-mdi/open-in-new'
	import angularIcon from '@iconify/icons-mdi/angular'
	import expressIcon from '@iconify/icons-simple-icons/express'
	import svelteIcon from '@iconify/icons-simple-icons/svelte'
	import firebaseIcon from '@iconify/icons-simple-icons/firebase'

	const pages = [
		{
			href: 'https://www.navalhatech.com.br/',
			image_src: '/images/home-page-print.png',
			title: 'Navalha app',
			project_info:
				'Website desenvolvido para servir como landing page e plataforma de confirmação de agendamentos para o aplicativo Navalha.',
			icons: [
				{
					tooltip: 'Angular 15',
					icon_html: angularIcon,
				},
				{
					tooltip: 'Node + Express',
					icon_html: expressIcon,
				},
			],
		},
		{
			href: 'https://www.navalhatech.com.br/',
			image_src: '/images/lambreta-rental-print.png',
			title: 'Lambreta Rental',
			project_info: 'Site em estilo e-commerce para aluguel de filmadoras e equipamentos de filmagem.',
			icons: [
				{
					tooltip: 'SvelteKit',
					icon_html: svelteIcon,
				},
				{
					tooltip: 'Firebase',
					icon_html: firebaseIcon,
				},
			],
		},
	]
</script>

<section class="flex flex-col items-center justify-center mx-auto ml-20 gap-6">
	{#each pages as page}
		<div class="flex relative">
			<a
				href={page.href}
				target="_blank"
				class="relative group rounded-xl bg-port-bg shadow-xl hover:shadow-2xl transition-all z-10">
				<img
					src={page.image_src}
					alt={page.title}
					class="w-[580px] h-[270px] rounded-xl rounded-tr-lg transition-all opacity-90 hover:opacity-100" />
				<div
					class="absolute flex gap-1 items-center bottom-0 transition-all opacity-0 group-hover:opacity-100 text-slate-200/90 text-xs rounded-lg rounded-tl-none rounded-br-none bg-black/40 px-4 py-[2px]">
					{page.href}
					<Icon icon={openInNew} />
				</div>
			</a>
			<!-- info hover -->
			<div class="absolute peer flex top-1 transition-all duration-300 left-[calc(100%-270px)] hover:left-full">
				<!-- info box -->
				<div class="flex flex-col w-[270px] p-4 gap-4 rounded-br-lg bg-black/40">
					<div class="flex flex-col gap-2">
						<p class="">{page.title}</p>
						<p class="text-sm">{page.project_info}</p>
					</div>
					<!-- tech stack -->
					<div class="flex gap-2 text-xl text-slate-200/80">
						{#each page.icons as icon}
							<span data-tooltip={icon.tooltip} class=" hover:text-slate-200">
								<Icon icon={icon.icon_html} />
							</span>
						{/each}
					</div>
				</div>
				<!-- info icon -->
				<div class="bg-black/40 p-2 h-fit rounded-r-lg">
					<div class="info-animation">
						<Icon icon={informationVariant} class="text-xl text-slate-200/80" />
					</div>
				</div>
			</div>
			<!-- esparadrapo -->
			<div
				class="absolute z-30 transition-all duration-300 bg-white/50d w-[36px] h-[130px] top-[40px] left-full peer-hover:left-[calc(100%+270px)]" />
		</div>
	{/each}
</section>

<style>
	/* fazer anim,ação do i girando a cada 2 segundos */

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
		30%,
		100% {
			transform: rotate(0deg);
			/* transform-origin: 50% 50%; */
		}

		5% {
			transform: rotate(-20deg);
		}

		10% {
			transform: rotate(20deg);
		}

		15% {
			transform: rotate(-20deg);
		}

		20% {
			transform: rotate(15deg);
		}

		25% {
			transform: rotate(5deg);
		}
	}
</style>
