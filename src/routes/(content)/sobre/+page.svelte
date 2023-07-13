<script lang="ts">
	import altArrowDownLineDuotone from '@iconify/icons-solar/alt-arrow-down-line-duotone'
	import Icon from '@iconify/svelte'
	import { onDestroy, onMount } from 'svelte'
	import mongodbIcon from '@iconify/icons-devicon/mongodb'
	import svelteIcon from '@iconify/icons-devicon/svelte'
	import angularIcon from '@iconify/icons-logos/angular-icon'
	import expressIcon from '@iconify/icons-devicon/express'
	import firebaseIcon from '@iconify/icons-logos/firebase'
	import reactIcon from '@iconify/icons-devicon/react'
	import html5Icon from '@iconify/icons-devicon/html5'
	import css3Icon from '@iconify/icons-devicon/css3'
	import nodedotjsIcon from '@iconify/icons-devicon/nodejs'
	import javascriptIcon from '@iconify/icons-devicon/javascript'
	import typescriptIcon from '@iconify/icons-devicon/typescript'
	import mysqlIcon from '@iconify/icons-devicon/mysql'
	import pythonIcon from '@iconify/icons-devicon/python'
	import nextjsIcon from '@iconify/icons-logos/nextjs-icon'
	import { fly } from 'svelte/transition'
	import { cubicIn } from 'svelte/easing'

	let idade = 22

	let mostrarMaisSobre = false

	let mostrarMaisExperiencia = false

	let sobreFullElement: HTMLElement | null
	let sobreMainElement: HTMLElement | null
	let experienciaFullElement: HTMLElement | null
	let experienciaMainElement: HTMLElement | null

	$: sobreMaxHeight = sobreMainElement?.clientHeight
	$: experienciaMaxHeight = experienciaMainElement?.clientHeight

	onMount(() => {
		const handleResize = (event: any) => {
			updateSobreMaxHeight()
			updateExperienciaMaxHeight()
		}
		window.addEventListener('resize', handleResize)

		return () => {
			// this function is called when the component is destroyed
			window.removeEventListener('resize', handleResize)
		}
	})

	function handleMostrarMaisSobre() {
		mostrarMaisSobre = !mostrarMaisSobre
		updateSobreMaxHeight()
	}
	function handleMostrarMaisExperiencia() {
		mostrarMaisExperiencia = !mostrarMaisExperiencia
		updateExperienciaMaxHeight()
	}

	function updateSobreMaxHeight() {
		if (mostrarMaisSobre) {
			sobreMaxHeight = sobreFullElement!.scrollHeight
		} else sobreMaxHeight = sobreMainElement?.clientHeight
	}

	function updateExperienciaMaxHeight() {
		if (mostrarMaisExperiencia) {
			experienciaMaxHeight = experienciaFullElement!.scrollHeight
		} else experienciaMaxHeight = experienciaMainElement?.clientHeight
	}
</script>

<svelte:head>
	<title>Luiz Comparin - Sobre</title>
</svelte:head>

<section class=" mb-[60px] md:mb-0 flex flex-col overflow-y-scroll gap-12 drop-shadow-2xl pr-4 lg:max-h-full">
	<h1 class="!mb-0">Tecnologias proficientes</h1>
	<div class="flex flex-col gap-8 px-4 text-4xl">
		<h2 class="!mt-0">Front-end</h2>
		<div class="flex gap-3 flex-wrap">
			<div data-tooltip="Angular 2+"><Icon icon={angularIcon} /></div>
			<div data-tooltip="SvelteKit"><Icon icon={svelteIcon} /></div>
			<div data-tooltip="React"><Icon icon={reactIcon} /></div>
			<div data-tooltip="Next.js"><Icon icon={nextjsIcon} /></div>
			<div data-tooltip="TypeScript"><Icon icon={typescriptIcon} /></div>
			<div data-tooltip="JavaScript"><Icon icon={javascriptIcon} /></div>
			<div data-tooltip="HTML 5"><Icon icon={html5Icon} /></div>
			<div data-tooltip="CSS 3"><Icon icon={css3Icon} /></div>
		</div>
		<h2>Back-end</h2>
		<div class="flex gap-3">
			<div data-tooltip="Node.js"><Icon icon={nodedotjsIcon} /></div>
			<div data-tooltip="Express.js"><Icon icon={expressIcon} /></div>
			<div data-tooltip="MongoDB"><Icon icon={mongodbIcon} /></div>
			<div data-tooltip="MySQL"><Icon icon={mysqlIcon} /></div>
			<div data-tooltip="Python"><Icon icon={pythonIcon} /></div>
			<div data-tooltip="Firebase"><Icon icon={firebaseIcon} /></div>
		</div>
	</div>

	<div>
		<h1>Sobre Luiz</h1>
		<div
			bind:this={sobreFullElement}
			id="sobreFull"
			class="flex flex-col overflow-hidden transition-all duration-300 h-full"
			style="max-height:{sobreMaxHeight}px">
			<div id="sobreMain" bind:this={sobreMainElement}>
				<p>
					Foi-me dado o nome de Luiz Carlos Comparin, vivo há {idade} anos, e programando profissionalmente desde
					agosto de 2022. Perfeccionista, gosto de deixar tudo funcionando em perfeita ordem e almejo excelência
					em meus projetos.
				</p>
				<p>
					Meu primeiro contato com programação foi durante o ensino médio, onde durante a tarde fazia um curso
					técnico de programação e informática. Lá aprendi lógica de programação com Portugol, Pascal, Delphi
					e banco de dados MySQL.
				</p>
			</div>
			<p>
				Após o ensino médio, não continuei na programação e fui para a área de vendas, onde aprendi a me
				comunicar e apresentar produtos.
			</p>
			<p>
				Em 2022, numa grande oportunidade, fui chamado para ajudar no desenvolvimento de um website para uma
				startup fintech de negociação FOREX e criptomoedas, chamada "Grupo ATOM", onde percebi definitivamente
				que minha paixão era trabalhar com desenvolvimento de sistemas.
			</p>
			<p>
				Infelizmente, ainda em 2022, a empresa veio a quebrar com a queda das criptomoedas, e me vi
				desempregado, mas com muito tempo livre e disposição para me dedicar integralmente à programação.
			</p>
		</div>
		<button on:click={handleMostrarMaisSobre} class="flex gap-1 text-sm items-center">
			Mostrar {mostrarMaisSobre ? 'menos' : 'mais'}
			<Icon
				icon={altArrowDownLineDuotone}
				class="transition-all duration-300 text-base {mostrarMaisSobre ? 'rotate-180' : ''}" />
		</button>
	</div>

	<div>
		<h1>Experiência profissional</h1>
		<div
			bind:this={experienciaFullElement}
			id="experienciaFull"
			class="flex flex-col overflow-hidden transition-all duration-300 h-full"
			style="max-height:{experienciaMaxHeight}px">
			<div id="experienciaMain" bind:this={experienciaMainElement}>
				<h2 class="flex flex-row gap-3 items-center">
					Grupo ATOM
					<div class="flex flex-row items-center gap-1">
						<div data-tooltip="Angular&nbsp;14"><Icon icon={angularIcon} class="text-lg" /></div>
					</div>
				</h2>
				<p>
					Fui responsável pela criação de algumas páginas utilizando Angular, HTML e CSS. Nessa empresa, pude
					aprender e praticar muito de <span>TypeScript, Angular 14, HTML e CSS</span>.
				</p>
				<h2 class="flex flex-row gap-3 items-center">
					Navalha App
					<div class="flex flex-row items-center gap-1">
						<div data-tooltip="Angular 15"><Icon icon={angularIcon} class="text-lg" /></div>
					</div>
				</h2>
			</div>

			<p>
				Fiquei inteiramente responsável pela criação do front-end para um aplicativo de barbearias. O projeto
				iniciou-se como uma landing page, mas logo se expandiu para um sistema de confirmação de agendamentos
				para barbearias. Pude escolher a stack de desenvolvimento, e optei por continuar usando <span
					>Angular</span
				>. Nesse projeto, aprimorei ainda mais minhas habilidades e passei a integrar funcionalidades mais
				complexas, como <span>autorização de login com JsonWebToken</span>, uso de
				<span>Cookies</span>, <span>comunicação com APIs</span>, validação de formulários e manipulação intensa
				de dados.
			</p>

			<h2 class="flex flex-row gap-3 items-center">
				Lambreta Filmes Rental
				<div data-tooltip="em desenvolvimento">
					<div class="flex flex-row translate-y-1d gap-[2px] w-[8px]d h-[8px]d rounded-fulld dbg-[crimson]">
						<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
						<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
						<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
					</div>
				</div>
				<div class="flex flex-row items-center gap-1">
					<div data-tooltip="SvelteKit"><Icon icon={svelteIcon} class="text-base" /></div>

					<div data-tooltip="MongoDB"><Icon icon={mongodbIcon} class="text-base" /></div>
				</div>
			</h2>
			<p>
				Estou criando do zero este e-commerce para aluguel de câmeras, filmadoras e equipamentos de filmagem.
				Escolhi o framework <span>SvelteKit</span> para desenvolvê-lo, pois é um 'meta-framework'. Assim como
				Next.js e Nuxt.js, ele permite a integração do front-end e back-end no mesmo repositório monolito, de
				forma extremamente otimizada. Para banco de dados optei por usar MongoDB, devido a sua praticidade.
				Neste projeto eu <span>estou desenvolvendo a aplicação inteira, front-end e back-end</span>, e planejo
				hospedá-lo utilizando Firebase. Também estou me aprofundando em <span>SEO</span>, para deixar o site
				visível no Google.
			</p>
		</div>
		<button on:click={handleMostrarMaisExperiencia} class="flex gap-1 text-sm items-center">
			Mostrar {mostrarMaisExperiencia ? 'menos' : 'mais'}
			<Icon
				icon={altArrowDownLineDuotone}
				class="transition-all duration-300 text-base {mostrarMaisExperiencia ? 'rotate-180' : ''}" />
		</button>
	</div>
</section>

<style>
	h1 {
		@apply mb-4 text-3xl text-[1.875em] font-light;
	}

	h2 {
		@apply text-xl mt-4 font-medium;
	}

	p {
		@apply my-2 font-extralight;
	}

	span {
		/* @apply bg-[#ffce2f]/20 rounded-sm px-[2px]; */
		text-decoration: underline;
		text-decoration-color: #2f8dff;
		text-decoration-color: white;
		text-decoration-thickness: 1px;
		text-underline-offset: 2px;
		border-radius: 0.125rem;
		padding-left: 2px;
		padding-right: 2px;
	}
</style>
