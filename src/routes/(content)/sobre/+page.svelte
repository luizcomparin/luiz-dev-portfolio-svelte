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
	import { languageStore } from '$lib/languageStore'
	import csharpIcon from '@iconify/icons-devicon/csharp'
	import dotnetcoreIcon from '@iconify/icons-devicon/dotnetcore'
	import googleCloud from '@iconify/icons-logos/google-cloud'
	import nodejsIcon from '@iconify/icons-devicon/nodejs'

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

	const sobreMainText = {
		pt: {
			i: `Me chamo Luiz Carlos Comparin, tenho 22 anos, sou um desenvolvedor de software com experiência em desenvolvimento
			de sistemas <span>back-end</span> e <span>front-end (full-stack)</span>, fazendo a criação e manutenção
			 de <span>APIs RESTful</span> usando <span>TypeScript</span> com
			<span>Node.js e Express.js</span> e <span>CSharp/C# .NET Core/MVC</span>,	e aplicações web com <span>JavaScript, Angular, React, SvelteKit, HTML, CSS.</span>`,
			ii: `Sou apaixonado por programação, muito curioso e interessado. Passo a maior parte do meu tempo livre consumindo
			conteúdo voltado à programação, sempre expandindo o meu vocabulário tecnológico e ficando a par com as principais
			tecnologias e boas práticas do mercado.`,
			// ii: `Meu primeiro contato com programação foi durante o ensino médio, onde durante a tarde fazia um curso
			// 	técnico de programação e informática. Lá aprendi lógica de programação com Portugol, Pascal, Delphi
			// 	e banco de dados MySQL.`,
		},
		en: {
			i: `My name is Luiz Carlos Comparin, I'm 22 years old, I'm a software developer with experience in developing <span>back-end</span> and
			<span>front-end</span> systems <span>(full-stack)</span>, creating and maintaining <span>RESTful APIs</span> using <span>TypeScript</span> with <span>Node.js and Express.js</span> and
			<span>CSharp/C# .NET Core/MVC</span>, and web applications with <span>JavaScript, Angular, React, SvelteKit, HTML, CSS.</span>`,
			ii: `I'm passionate about programming, very curious and interested. I spend most of my free time consuming content focused
			 on programming, always expanding my technological vocabulary and staying up to date with the main technologies and best practices on the market.`,
		},
	}

	const sobreText = {
		pt: `<p> Conheci a programação no ensino médio, e tive aulas de lógica e algoritmo com Portugol, Pascal, Delphi e MySQL.
				Após o ensino médio não continuei na programação e fui para a área de vendas, onde aprendi a me
				comunicar com clientes e apresentar produtos.
			</p>`,

		en: `<p> I met software development during high school, where I had lessons of logic and algorithm with Portugol, Pascal, Delphi and MySQL.
				After high school, I left software development and entered the retail area, where I learned to communicate with customers and present products.
			</p>
			<p>`,
	}

	const navalhaAppText = {
		pt: `Fiquei responsável pelo desenvolvimento front-end de um sistema para confirmação de agendamentos
		de barbearias. Atuei na criação de um webapp e landing page para o aplicativo Navalha, utilizando
		<span>Angular 15 e TypeScript</span>. Neste projeto integrei funcionalidades como autorização de login, uso de
		 Cookies, comunicação com APIs, validação e envio de formulários, transformação de dados para apresentação,
		  SEO, entre outras funcionalidades.`,
		en: `I was responsible for creating the front-end for a barbershop app. The project started as a
		simple landing page, but quickly expanded to a schedule confirm system for multiple barbershops. The dev.
		stack was by my choice, and I chose to keep using <span>Angular</span>. In this project, I upgraded by a lot my technical
		skills and got to implement more complex functionalities, such as <span>login authorization with JsonWebToken</span>,
		<span>usage of Cookies</span>, <span>API communication</span>, form validation and intense data manipulation.`,
	}

	const lambretaText = {
		pt: `Realizei o desenvolvimento de três projetos para um estúdio de filmagem: <br/>
		1) um e-commerce voltado a aluguel de equipamentos de filmagem, usando o framework <span>SvelteKit;</span>  <br/>
		2) uma dashboard com controle de estoque para o e-commerce, usando <span>React</span> e <span>Next.js 13;</span>  <br/>
		3) uma <span>API REST back-end</span> que se comunica via requisições HTTP com os dois front-ends,
		usando <span>Node.js</span>, <span>Express.js</span> e <span>MongoDB.</span> <br/>
		Utilizei <span>TypeScript</span> nos três projetos.	Hospedei o e-commerce e a dashboard com <span>Firebase Hosting</span> e a API back-end
		com <span>Google Cloud Functions</span>, e <span>Google Cloud Storage</span> para arquivos. `,
		en: `I developed three projects for a film studio: <br/>
		1) an e-commerce focused on renting filming equipment, using the <span>SvelteKit</span> framework; <br/>
		2) a dashboard with inventory control for e-commerce, using <span>React</span> and <span>Next.js 13</span>; <br/>
		3) a <span>back-end REST API</span> that communicates via HTTP requests with both front-ends,
		using <span>Node.js</span>, <span>Express.js</span> and <span>MongoDB</span>. <br/> I used <span>TypeScript</span> in all three projects.
		I hosted the e-commerce and dashboard with <span>Firebase Hosting</span> and the back-end API
		with <span>Google Cloud Functions</span>, and <span>Google Cloud Storage</span> for files.`,
	}

	let sobreMainTextDisplay = { i: sobreMainText.pt.i, ii: sobreMainText.pt.ii }
	let sobreTextDisplay = ''
	let navalhaAppTextDisplay = ''
	let lambretaTextDisplay = ''

	languageStore.subscribe(lang => {
		if (lang.language === 'pt') {
			sobreMainTextDisplay = sobreMainText.pt
			navalhaAppTextDisplay = navalhaAppText.pt
			sobreTextDisplay = sobreText.pt
			lambretaTextDisplay = lambretaText.pt
		} else {
			sobreMainTextDisplay = sobreMainText.en
			navalhaAppTextDisplay = navalhaAppText.en
			sobreTextDisplay = sobreText.en
			lambretaTextDisplay = lambretaText.en
		}

		setTimeout(() => {
			updateSobreMaxHeight()
			updateExperienciaMaxHeight()
		})
	})
</script>

<svelte:head>
	<title>Luiz Comparin - Sobre</title>
</svelte:head>

<section class=" mb-[60px] md:mb-0 flex flex-col overflow-y-scroll gap-12 drop-shadow-2xl pr-4 lg:max-h-full">
	<h1 class="!mb-0">{$languageStore.language === 'pt' ? 'Principais tecnologias' : 'Main technologies'}</h1>
	<div class="flex flex-col gap-8 px-4 text-4xl">
		<h2 class="!mt-0">Front-end</h2>
		<div class="flex gap-3 flex-wrap drop-shadow-luiz-md">
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
		<div class="flex gap-3 drop-shadow-luiz-md">
			<div data-tooltip="Node.js"><Icon icon={nodedotjsIcon} /></div>
			<div data-tooltip="Express.js"><Icon icon={expressIcon} /></div>
			<div data-tooltip="MongoDB"><Icon icon={mongodbIcon} /></div>
			<div data-tooltip="MySQL"><Icon icon={mysqlIcon} /></div>
			<div data-tooltip="Python"><Icon icon={pythonIcon} /></div>
			<div data-tooltip="Firebase"><Icon icon={firebaseIcon} /></div>
			<div data-tooltip="CSharp/C#"><Icon icon={csharpIcon} /></div>
			<div data-tooltip=".NET Core/MVP"><Icon icon={dotnetcoreIcon} /></div>
		</div>
	</div>

	<div>
		<h1>{$languageStore.language === 'pt' ? 'Sobre Luiz' : 'About Luiz'}</h1>
		<div
			bind:this={sobreFullElement}
			id="sobreFull"
			class="p-wrapper flex flex-col overflow-hidden transition-all duration-300 h-full"
			style="max-height:{sobreMaxHeight}px">
			<div id="sobreMain" class="p-wrapper" bind:this={sobreMainElement}>
				<!-- {@html sobreMainTextDisplay} -->
				<p>
					{@html sobreMainTextDisplay.i}
				</p>
				<p>
					{@html sobreMainTextDisplay.ii}
				</p>
			</div>
			{@html sobreTextDisplay}
		</div>
		<button on:click={handleMostrarMaisSobre} class="flex gap-1 text-sm items-center">
			{$languageStore.language === 'pt'
				? `Mostrar ${mostrarMaisSobre ? 'menos' : 'mais'}`
				: `Show ${mostrarMaisSobre ? 'less' : 'more'}`}
			<Icon
				icon={altArrowDownLineDuotone}
				class="transition-all duration-300 text-base {mostrarMaisSobre ? 'rotate-180' : ''}" />
		</button>
	</div>

	<div>
		<h1>{$languageStore.language === 'pt' ? 'Experiência profissional' : 'Professional experience'}</h1>
		<div
			bind:this={experienciaFullElement}
			id="experienciaFull"
			class="p-wrapper flex flex-col overflow-hidden transition-all duration-300 h-full"
			style="max-height:{experienciaMaxHeight}px">
			<div class="p-wrapper" id="experienciaMain" bind:this={experienciaMainElement}>
				<h2 class="flex flex-row gap-3 items-center">
					Lambreta Filmes Rental
					<!-- <div data-tooltip="em desenvolvimento">
						<div
							class="flex flex-row translate-y-1d gap-[2px] w-[8px]d h-[8px]d rounded-fulld dbg-[crimson]">
							<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
							<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
							<div class="rounded-full flex bg-white w-[4px] h-[4px]" />
						</div>
					</div> -->
					<div class="flex flex-row items-center gap-1 drop-shadow-luiz-md">
						<div data-tooltip="SvelteKit"><Icon icon={svelteIcon} class="text-base" /></div>
						<div data-tooltip="React.js"><Icon icon={reactIcon} class="text-base mx-1" /></div>
						<div data-tooltip="Next.js"><Icon icon={nextjsIcon} class="text-base mx-1" /></div>
						<div data-tooltip="Node.js"><Icon icon={nodejsIcon} class="text-base" /></div>
						<div data-tooltip="Express.js"><Icon icon={expressIcon} class="text-base" /></div>
						<div data-tooltip="MongoDB"><Icon icon={mongodbIcon} class="text-base" /></div>
						<div data-tooltip="Firebase"><Icon icon={firebaseIcon} class="text-base mx-1" /></div>
						<div data-tooltip="Google Cloud"><Icon icon={googleCloud} class="text-base mx-1" /></div>
					</div>
				</h2>
				<p>
					{@html lambretaTextDisplay}
				</p>
				<br />
				<h2 class="flex flex-row gap-3 items-center">
					Navalha App
					<div class="flex flex-row items-center gap-1 drop-shadow-luiz-md">
						<div data-tooltip="Angular 15"><Icon icon={angularIcon} class="text-lg" /></div>
					</div>
				</h2>
				<p>
					{@html navalhaAppTextDisplay}
				</p>
				<br />
			</div>
			<!-- <h2 class="flex flex-row gap-3 items-center">
				Grupo ATOM
				<div class="flex flex-row items-center gap-1">
					<div data-tooltip="Angular&nbsp;14"><Icon icon={angularIcon} class="text-lg" /></div>
				</div>
			</h2>
			<p>
				{@html $languageStore.language === 'pt'
					? `Fui responsável pela criação de algumas páginas utilizando Angular, HTML e CSS. Nessa empresa, pude
				aprender e praticar muito de <span>TypeScript, Angular 14, HTML e CSS</span>.`
					: `I was responsible for the creation of some web pages using Angular, HTML and CSS. In this startup,
				I was able to learn and practice a lot of <span>TypeScript, Angular 14, HTML and CSS</span>.`}
			</p> -->
		</div>
		<!-- <button on:click={handleMostrarMaisExperiencia} class="flex gap-1 text-sm items-center">
			{$languageStore.language === 'pt'
				? `Mostrar ${mostrarMaisSobre ? 'menos' : 'mais'}`
				: `Show ${mostrarMaisSobre ? 'less' : 'more'}`}
			<Icon
				icon={altArrowDownLineDuotone}
				class="transition-all duration-300 text-base {mostrarMaisExperiencia ? 'rotate-180' : ''}" />
		</button> -->
	</div>
</section>

<style>
	h1 {
		@apply mb-4 text-3xl text-[1.875em] font-light;
	}

	h2 {
		@apply text-xl mt-4 font-medium;
	}

	.p-wrapper :global(p) {
		/* @apply my-2 font-extralight; */

		margin-top: 0.5rem /* 8px */;
		margin-bottom: 0.5rem /* 8px */;
		font-weight: 200;
	}

	p :global(span) {
		/* @apply bg-[#ffce2f]/20 rounded-sm px-[2px]; */
		/* text-decoration: underline; */
		/* text-decoration-color: #2f8dff; */
		text-decoration-color: white;
		text-decoration-thickness: 1px;
		text-underline-offset: 2px;
		border-radius: 0.125rem;
		font-weight: 500;
		padding-left: 2px;
		padding-right: 2px;
	}
</style>
