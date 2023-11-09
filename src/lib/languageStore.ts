import { writable } from "svelte/store"

export interface LanguageStore {
	language: 'pt-br' | 'en'
}

function createLanguageStore() {

	const { subscribe, update, set } = writable({ language: 'pt' })

	return {
		subscribe,
		set,
		update,
		switchLanguage: () => update(langStore => {
			if (langStore.language === 'pt') {
				langStore.language = 'en'
			} else langStore.language = 'pt'

			return langStore
		})

	}

}

export const languageStore = createLanguageStore()
