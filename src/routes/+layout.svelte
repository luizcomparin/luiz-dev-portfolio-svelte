<script lang="ts">
	import './styles.css'
	import Icon from '@iconify/svelte'
	import githubIcon from '@iconify/icons-mdi/github'
	import linkedinIcon from '@iconify/icons-mdi/linkedin'
	import altArrowRightLinear from '@iconify/icons-solar/alt-arrow-right-linear'
	import { page } from '$app/stores'
	import { fly, slide } from 'svelte/transition'
	import openInNew from '@iconify/icons-mdi/open-in-new'
	import { onMount } from 'svelte'

	export let data

	let absoluteElementWrapper: HTMLElement
	let relativeElementWrapper: HTMLElement
	$: absoluteWidth = absoluteElementWrapper?.clientWidth
	$: relativeWidth = relativeElementWrapper?.clientWidth

	let lastRoute = data.url
	let currentRoute = data.url
	let homeRoute = '/'
	let headerElem: HTMLElement
	let titleElem: HTMLElement
	let navbarElem: HTMLElement

	onMount(() => {
		page.subscribe(page => {
			currentRoute = page.url.pathname

			if (window.innerWidth >= 1024) {
				// pra cima
				if (lastRoute === '/' && currentRoute !== '/') {
					// let animation = headerElem?.animate([{ translate: `430px` }, { translate: '0px' }], {
					let animation = headerElem?.animate([{ translate: `61%` }, { translate: '0%' }], {
						duration: 400,
						fill: 'forwards',
						easing: 'ease-out',
					})

					setTimeout(() => {
						navbarItems = fullNavbarItems
					}, 399)
				} else if (currentRoute === '/') {
					navbarItems = navbarWithoutHome
				}

				// centraliza
				if (lastRoute !== '/' && currentRoute === '/') {
					let animation = headerElem?.animate([{ translate: `0%` }, { translate: '61%' }], {
						duration: 700,
						fill: 'forwards',
						easing: 'ease-out',
					})

					setTimeout(() => {
						animation.cancel()
					}, 699)
				}

				lastRoute = page.url.pathname
			}

			if (window.innerWidth < 1024) {
				// pra cima
				if (lastRoute === '/' && currentRoute !== '/') {
					// let animation = headerElem?.animate([{ translate: `430px` }, { translate: '0px' }], {
					let headerAnimation = headerElem?.animate(
						[{ transform: 'translateY(250px)' }, { transform: 'translateY(0px)' }],
						{
							duration: 400,
							fill: 'forwards',
							easing: 'ease-out',
						}
					)

					setTimeout(() => {
						headerElem.classList.remove('flex-col')
						titleElem.classList.add('w-full', 'mr-auto')
						titleElem.classList.remove('mb-10')
						navbarElem.classList.remove('translate-x-[-40px]')
						navbarItems = fullNavbarItems
					}, 399)
				} else if (currentRoute === '/') {
					headerElem.classList.add('translate-y-[250px]')

					headerElem.classList.add('flex-col')
					titleElem.classList.remove('w-full', 'mr-auto')
					titleElem.classList.add('mb-10')
					if (window.innerWidth >= 768) navbarElem.classList.add('translate-x-[-40px]')

					navbarItems = navbarWithoutHome
				}

				// centraliza
				if (lastRoute !== '/' && currentRoute === '/') {
					let headerAnimation = headerElem?.animate(
						[{ transform: 'translateY(0px)' }, { transform: 'translateY(250px)' }],
						{
							duration: 700,
							fill: 'forwards',
							easing: 'ease-out',
						}
					)

					setTimeout(() => {
						headerElem.classList.add('flex-col')
						titleElem.classList.remove('w-full', 'mr-auto')
						titleElem.classList.add('mb-10')
					}, 699)
				}

				lastRoute = page.url.pathname
			}
		})
	})

	// let firstPos: DOMRect
	// let lastPos: DOMRect
	// onMount(() => {
	// 	firstPos = headerElem.getBoundingClientRect()
	// 	lastPos = headerElem.getBoundingClientRect()
	// })
	// function slideTitle(dataUrl: string) {
	// 	// console.log('ccccc', $page.url)
	// 	if (!headerElem) return

	// 	if (dataUrl === '/') {
	// 		firstPos = headerElem.getBoundingClientRect()
	// 	} else lastPos = headerElem.getBoundingClientRect()

	// 	console.log('rodou')
	// 	requestAnimationFrame(() => {
	// 		const invert = firstPos.left + lastPos.left

	// 		setTimeout(() => {
	// 			const animation = headerElem.animate([{ translate: `${invert}px` }, { translate: '0px' }], {
	// 				duration: 400,
	// 				fill: 'forwards',
	// 				easing: 'ease-out',
	// 			})
	// 		}, 0)
	// 	})
	// }

	// onMount(() => {
	// 	const handleResize = (event: any) => {
	// 		absoluteElementWrapper = document.getElementById('absoluteWrapper')!
	// 		relativeElementWrapper = document.getElementById('relativeWrapper')!

	// 		updaterelativeWidth()
	// 		console.log('relativeWidth', relativeWidth)
	// 		console.log('absoluteWidth', absoluteWidth)
	// 	}

	// 	window.addEventListener('resize', handleResize)

	// 	return () => {
	// 		// this function is called when the component is destroyed
	// 		window.removeEventListener('resize', handleResize)
	// 	}
	// })

	// function updaterelativeWidth() {
	// 	relativeWidth = absoluteElementWrapper?.offsetWidth
	// }

	// function slide(
	// 	node: Element,
	// 	{ x = 200, delay = 0, duration = 300, easing = cubicIn } = {},
	// 	{ direction = 'both' } = {}
	// ) {
	// 	const origin = {
	// 		in: 'bottom left',
	// 		out: 'bottom right',
	// 		both: 'center center',
	// 	}

	// 	return {
	// 		delay,
	// 		x,
	// 		duration,
	// 		easing,
	// 		// t vai de 0 a 1
	// 		css: (t: any) => `
	// 			transform: translateX(${x}px);
	// 		`,
	// 	}
	// }

	let navbarItems = [
		{
			href: '/',
			name: 'Início',
		},
		{
			href: '/sobre',
			name: 'Sobre',
		},
		{
			href: '/projetos',
			name: 'Projetos',
		},
		{
			href: '/contato',
			name: 'Contato',
		},
	]

	const fullNavbarItems = [
		{
			href: '/',
			name: 'Início',
		},
		{
			href: '/sobre',
			name: 'Sobre',
		},
		{
			href: '/projetos',
			name: 'Projetos',
		},
		{
			href: '/contato',
			name: 'Contato',
		},
	]

	const navbarWithoutHome = [
		{
			href: '/sobre',
			name: 'Sobre',
		},
		{
			href: '/projetos',
			name: 'Projetos',
		},
		{
			href: '/contato',
			name: 'Contato',
		},
	]
</script>

<div
	class="flex relative w-full h-screen lg:justify-center overflow-y-scrolld lg:overflow-hidden tracking-wider font-light text-slate-200 bg-port-bg">
	<!-- <div class="fixed top-0 w-full bg-port-bg dbg-white/20 z-50 h-[124px]" /> -->
	<div
		class="flex flex-col lg:flex-row lg:justify-center w-full lg:max-w-[1650px] h-full lg:h-screen p-4 py-0 lg:py-4">
		<!-- colocar um transition com translate simples aqui que muda se a rota for '/' ou '/alguma-coisa' -->
		<section
			bind:this={headerElem}
			class="flex flex-cold w-fulld items-center jitems-start lg:flex-row sticky top-0 bg-port-bg w-screend py-4 z-50 dmin-w-[75%] lg:min-w-[45%] justify-between lg:h-full mb-8 lg:mb-0 lg:-translate-y-8 lg:items-center">
			<!-- esparadrapo de fundo -->
			<div class="absolute flex md:hidden w-screen h-[124px] top-0 z-40 bg-port-bg" />
			<div bind:this={titleElem} class="flex flex-col w-fulld mr-auto ml-0 z-50 gap-2 lg:gap-1">
				<!-- title -->
				<!-- <div class="flex flex-col gap-1"> -->
				<h1 class=" font-thin text-6xl text-[3.5rem] tracking-normal whitespace-nowrap font-red-hat">
					Luiz Comparin
				</h1>
				<!-- </div> -->
				<!-- subtitle & links -->
				<div
					class="flex lg:flex-col max-w-[345px] justify-betweend dlg:justify-normal gap-8 px-1 lg:px-0 lg:gap-6">
					<h2 class="mr-auto text-slate-200/70">Programador web full-stack</h2>
					<!-- links -->
					<div class="flex gap-4 text-2xl text-slate-200/50">
						<!-- linkedin -->
						<a target="_blank" href="https://www.linkedin.com/in/luiz-carlos-comparin/"
							><Icon icon={linkedinIcon} class="transition-all hover:text-slate-200" /></a>
						<!-- github -->
						<a target="_blank" href="https://github.com/luizcomparin"
							><Icon icon={githubIcon} class="transition-all hover:text-slate-200" /></a>
						<!-- curriculo -->
						<a
							data-tooltip="Currículo"
							target="_blank"
							href="https://docs.google.com/document/d/1SGo5bznVNbYAvXdWRFAjr6bvMsN9NdIJ/edit?usp=sharing&ouid=116223724619846332888&rtpof=true&sd=true"
							><Icon icon={openInNew} class="transition-all hover:text-slate-200" /></a>
					</div>
				</div>
			</div>

			<!-- navbar (desktop) -->
			{#if window.innerWidth >= 768}
				<div
					bind:this={navbarElem}
					class="flex lg:flex-col lg:gap-4 lg:w-screen lg:min-w-[110px] lg:max-w-[110px] lg:mr-16">
					{#each navbarItems as item}
						<a
							href={item.href}
							class="group flex flex-col items-centerd w-full gap-1 transition-all dhover:bg-black/10 rounded-lg p-2
							">
							<div class="flex gap-1 items-center">
								<span class="transition-all mr-auto">{item.name}</span>
								<Icon
									icon={altArrowRightLinear}
									class="group-hover:mr-0  transition-all rotate-90 lg:rotate-0
									{$page.url.pathname === item.href ? 'mr-0' : 'mr-2'}" />
							</div>
							<div
								class=" h-[1px] group-hover:w-full transition-all bg-white/70 dbg-blue-400/50 dbg-sky-700/100
								{$page.url.pathname === item.href ? 'w-full' : 'w-[18px]'}" />
						</a>
					{/each}
				</div>
			{/if}
		</section>

		{#if window.innerWidth >= 1024}
			{#if data.url !== '/'}
				<!-- style="max-width:{absoluteWidth}px;"
				in:slide|local={{ x: 200, duration: 700, delay: 200 }}
				out:slide|local={{ x: 200, duration: 700 }}
			-->
				<div
					in:fly|local={{ x: 400, duration: 700, delay: 200 }}
					out:fly|local={{ x: 400, duration: 700 }}
					bind:this={relativeElementWrapper}
					id="relativeWrapper"
					class="relatived grid w-fitd lg:w-[55%]">
					<!-- make the parent element with the width of the child with javascript -->
					{#key data.url}
						<div
							bind:this={absoluteElementWrapper}
							id="absoluteWrapper"
							class="absoluted lg:overflow-y-hidden [grid-row:1/2] [grid-column:1/2] flex lg:items-center w-full h-full"
							in:fly|local={{ y: 1000, duration: 700, delay: 200 }}
							out:fly|local={{ y: -1000, duration: 700 }}>
							<slot />
						</div>
					{/key}
				</div>
			{/if}
		{/if}

		{#if window.innerWidth < 1024}
			{#if data.url !== '/'}
				<!-- style="max-width:{absoluteWidth}px;"
				in:slide|local={{ x: 200, duration: 700, delay: 200 }}
				out:slide|local={{ x: 200, duration: 700 }}
			-->
				<div
					in:fly|local={{ y: 500, duration: 700, delay: 200 }}
					out:fly|local={{ y: 500, duration: 700 }}
					bind:this={relativeElementWrapper}
					id="relativeWrapper"
					class="relatived grid w-fitd w-fulld mr-autod lg:w-[55%]">
					<!-- make the parent element with the width of the child with javascript -->
					{#key data.url}
						<div
							bind:this={absoluteElementWrapper}
							id="absoluteWrapper"
							class="absoluted lg:overflow-y-hidden [grid-row:1/2] [grid-column:1/2] flex lg:items-center w-full h-full"
							in:fly|local={{ y: 1000, duration: 700, delay: 200 }}
							out:fly|local={{ y: -1000, duration: 700 }}>
							<slot />
						</div>
					{/key}
				</div>
			{/if}
		{/if}
	</div>
	<!-- navbar (mobile) -->
	{#if window.innerWidth < 768}
		<!-- <div class="absolute w-full h-full bg-white/10"> -->
		<div bind:this={navbarElem} class="flex z-50 bg-port-bg fixed justify-around px-4 w-full bottom-0">
			{#each navbarItems as item}
				<a
					href={item.href}
					class="group flex flex-col items-centerd w-full gap-1 transition-all rounded-lg p-2">
					<div class="flex gap-1 items-center">
						<span class="transition-all mr-auto">{item.name}</span>
						<Icon
							icon={altArrowRightLinear}
							class="group-hover:mr-0  transition-all -rotate-90 lg:rotate-0
							{$page.url.pathname === item.href ? 'mr-0' : 'mr-2'}" />
					</div>
					<div
						class=" h-[1px] group-hover:w-full transition-all bg-white/70 dbg-blue-400/50 dbg-sky-700/100
						{$page.url.pathname === item.href ? 'w-full' : 'w-[18px]'}" />
				</a>
			{/each}
		</div>
		<!-- </div> -->
	{/if}
</div>
