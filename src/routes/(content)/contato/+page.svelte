<script lang="ts">
	import Icon from '@iconify/svelte'
	import paperPlane from '@iconify/icons-fa/paper-plane'
	import copyIcon from '@iconify/icons-fa/copy'
	import linkedinIcon from '@iconify/icons-mdi/linkedin'
	import CopyClipBoard from '../../../lib/utils/CopyClipboard.svelte'
	import whatsappIcon from '@iconify/icons-mdi/whatsapp'
	import emailOutline from '@iconify/icons-mdi/email-outline'
	import checkIcon from '@iconify/icons-mdi/check'
	import openInNew from '@iconify/icons-mdi/open-in-new'
	import { fly } from 'svelte/transition'
	import { cubicIn } from 'svelte/easing'

	let whatsappCopy: HTMLElement
	let emailCopy: HTMLElement

	function handleWhatsappCopy() {
		const whatsappClipboard = new CopyClipBoard({
			target: document.getElementById('whatsappClipboard')!,
			props: { value: '47992831801' },
		})
		whatsappClipboard.$destroy()

		whatsappCopy.classList.remove('opacity-0')
		whatsappCopy.classList.add('opacity-100')
		setTimeout(() => {
			whatsappCopy.classList.remove('opacity-100')
			whatsappCopy.classList.add('opacity-0')
		}, 1500)
	}

	function handleEmailCopy() {
		const emailClipboard = new CopyClipBoard({
			target: document.getElementById('emailClipboard')!,
			props: { value: 'luizcomparin18@gmail.com' },
		})
		emailClipboard.$destroy()

		emailCopy.classList.remove('opacity-0')
		emailCopy.classList.add('opacity-100')
		setTimeout(() => {
			emailCopy.classList.remove('opacity-100')
			emailCopy.classList.add('opacity-0')
		}, 1500)
	}
</script>

<svelte:head>
	<title>Luiz Comparin - Contato</title>
</svelte:head>

<div id="emailClipboard" />
<div id="whatsappClipboard" />
<section class=" mb-[60px] md:mb-0 overflow-x-hidden w-full flex flex-col lg:-translate-y-8 gap-12">
	<div>
		<h1 class="text-4xl text-[2.25em]">Formas de contato</h1>
	</div>

	<div>
		<h2 class="flex items-center gap-1"><Icon icon={emailOutline} />E-mail</h2>
		<div class="flex w-fit gap-1d items-center">
			<a href="mailto:luizcomparin18@gmail.com" target="_blank" class="pr-2 borderd rounded-l-md hover:underline"
				>luizcomparin18@gmail.com</a>
			<a
				data-tooltip="Enviar e-mail"
				href="mailto:luizcomparin18@gmail.com"
				target="_blank"
				class="py-2 px-2 borderd border-l-0 group">
				<Icon icon={paperPlane} class="transition-all group-hover:scale-125" />
			</a>
			<button
				data-tooltip="Copiar"
				on:click={handleEmailCopy}
				class="relative py-2 px-2 borderd border-l-0 rounded-r-md group">
				<Icon icon={copyIcon} class="transition-all group-hover:scale-125" />
				<div
					bind:this={emailCopy}
					class="absolute w-fit whitespace-nowrap flex items-center gap-1 opacity-0 transition-all pointer-events-none h-fit left-full top-0 bottom-0 my-auto d-translate-x-1 rounded-md px-2 py-1 text-sm bg-black">
					<Icon icon={checkIcon} class="text-xl" />
					E-mail copiado!
				</div>
			</button>
		</div>
	</div>

	<div class="">
		<h2 class="flex items-center gap-1"><Icon icon={whatsappIcon} />Whatsapp</h2>
		<div class="flex w-fit gap-4d items-center">
			<a href="https://wa.me/5547992831801" target="_blank" class="pr-2 hover:underline">(47) 9 9283-1801</a>
			<a
				data-tooltip="Enviar mensagem"
				href="https://wa.me/5547992831801"
				target="_blank"
				class="py-2 px-2 borderd border-l-0 group">
				<Icon icon={paperPlane} class="transition-all group-hover:scale-125" />
			</a>
			<button
				data-tooltip="Copiar"
				on:click={handleWhatsappCopy}
				class="relative py-2 px-2 borderd border-l-0 rounded-r-md group">
				<Icon icon={copyIcon} class="transition-all group-hover:scale-125" />
				<div
					bind:this={whatsappCopy}
					class="absolute w-fit whitespace-nowrap flex items-center gap-1 opacity-0 transition-all pointer-events-none h-fit left-full top-0 bottom-0 my-auto d-translate-x-1 rounded-md px-2 py-1 text-sm bg-black">
					<Icon icon={checkIcon} class="text-xl" />
					Whatsapp copiado!
				</div>
			</button>
		</div>
	</div>

	<div>
		<h2 class="flex items-center gap-1"><Icon icon={linkedinIcon} />LinkedIn</h2>
		<a
			href="https://www.linkedin.com/in/luiz-carlos-comparin/"
			target="_blank"
			class="flex gap-1 items-center hover:underline group">
			<p>Luiz Carlos Comparin</p>
			<Icon icon={openInNew} class="transition-all" />
		</a>
	</div>
</section>

<style>
	h2 {
		@apply text-2xl my-1;
	}
</style>
