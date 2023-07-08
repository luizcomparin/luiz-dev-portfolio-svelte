<script lang="ts">
	import './styles.css'
	import Icon from '@iconify/svelte'
	import githubIcon from '@iconify/icons-mdi/github'
	import linkedinIcon from '@iconify/icons-mdi/linkedin'
	import altArrowRightLinear from '@iconify/icons-solar/alt-arrow-right-linear'
	import { page } from '$app/stores'

	// console.log($page.route)

	const navbarItems = [
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

<div class="flex h-screen px-36 py-20 tracking-wider font-light text-slate-200 bg-port-bg">
	<section class="flex w-screend -translate-y-8 h-full items-center">
		<div class="flex flex-col mr-56d mr-44 gap-6">
			<!-- title -->
			<div class="flex flex-col gap-1">
				<h1 class=" font-thin text-6xl tracking-normal whitespace-nowrap font-red-hat">Luiz Comparin</h1>
				<h2 class=" text-slate-200/70">Programador web full-stack</h2>
			</div>
			<!-- links -->
			<div class="flex gap-4 text-2xl text-slate-200/50">
				<!-- github -->
				<a target="_blank" href="https://github.com/luizcomparin"
					><Icon icon={githubIcon} class="transition-all hover:text-slate-200" /></a>
				<!-- linkedin -->
				<a target="_blank" href="https://www.linkedin.com/in/luiz-carlos-comparin/"
					><Icon icon={linkedinIcon} class="transition-all hover:text-slate-200" /></a>
			</div>
		</div>

		<!-- navbar -->
		<div class="flex flex-col gap-4 text text-lgd w-screen max-w-[110px] mr-8">
			{#each navbarItems as item}
				<a
					href={item.href}
					class="group flex flex-col items-centerd w-full gap-1 transition-all dhover:bg-black/10 rounded-lg p-2">
					<div class="flex gap-1 items-center">
						<span class="transition-all mr-auto dhover:ml-2">{item.name}</span>
						<Icon icon={altArrowRightLinear} class="group-hover:mr-0 mr-2 transition-all" />
					</div>
					<div
						class=" h-[1px] w-[18px] group-hover:w-full transition-all bg-white/70 dbg-blue-400/50 dbg-sky-700/100" />
				</a>
			{/each}
		</div>
	</section>

	<slot />
</div>
