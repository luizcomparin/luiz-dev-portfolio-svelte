<script lang="ts">
	import { onMount } from 'svelte'

	export let value: string

	let textarea: any

	onMount(() => {
		textarea.select()
		document.execCommand('copy')
	})
</script>

<textarea bind:value bind:this={textarea} />
