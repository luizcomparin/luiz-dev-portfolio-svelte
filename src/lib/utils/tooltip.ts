interface tooltipOpt {
	text: string
	placement: 'top' | 'bottom' | 'left' | 'right'
}
/**
 * @example
 * <button
	class="lambreta-btn relative w-fit"
	use:tooltip={{
		text: 'Este é um botão',
		placement: 'top',
	}}>Hover me</button>
 */
export function tooltip(node: HTMLElement, options: tooltipOpt) {
	let tooltip: HTMLElement;
	let timer: any

	const { text, placement = 'bottom' } = options;

	function showTooltip() {

		if (tooltip && tooltip.parentNode) {
			clearTimeout(timer);
			tooltip.parentNode.removeChild(tooltip);
		}

		tooltip = document.createElement('div');
		tooltip.textContent = text;
		// tooltip tailwind classes
		tooltip.classList.add('px-4', 'absolute', 'py-2', 'bg-[black]', 'whitespace-nowrap', 'text-lambreta-text', 'z-10', 'text-sm', 'rounded-lg', 'pointer-events-none', 'transition-all', 'opacity-0');
		// tooltip "arrow" tailwind classes
		tooltip.classList.add('after:rotate-45', 'after:rounded-sm', "after:content-['']", "after:bg-[black]", 'after:w-[10px]', 'after:h-[10px]', 'after:absolute');

		if (placement === 'right') tooltip.classList.add('left-[110%]', 'my-auto', 'after:-left-1', 'after:top-0', 'after:bottom-0', 'after:my-auto');
		else if (placement === 'left') tooltip.classList.add('right-[110%]', 'my-auto', 'after:-right-1', 'after:top-0', 'after:bottom-0', 'after:my-auto');
		else if (placement === 'bottom') tooltip.classList.add('top-[120%]', 'mx-auto', 'after:-top-1', 'after:left-0', 'after:right-0', 'after:mx-auto');
		else tooltip.classList.add('bottom-[120%]', 'mx-auto', 'after:-bottom-1', 'after:left-0', 'after:right-0', 'after:mx-auto');

		node.appendChild(tooltip);
		setTimeout(() => {
			tooltip.classList.add('opacity-100');
		}, 10);
	}

	function hideTooltip() {
		tooltip.classList.remove('opacity-100');
		timer = setTimeout(() => {
			if (tooltip && tooltip.parentNode) {
				tooltip.parentNode.removeChild(tooltip);
			}
		}, 150);
	}

	node.addEventListener('mouseover', showTooltip);
	node.addEventListener('mouseout', hideTooltip);

	return {
		destroy() {
			node.removeEventListener('mouseover', showTooltip);
			node.removeEventListener('mouseout', hideTooltip);
			if (tooltip && tooltip.parentNode) {
				tooltip.parentNode.removeChild(tooltip);
			}
		}
	};
}






// // tooltip.js
// export function tooltipDirective(node: HTMLElement, options: any) {
// 	let tooltip: HTMLElement;
// 	let timer: any;

// 	const { text, placement = 'top' } = options;

// 	function showTooltip() {
// 		// clearTimeout(timer);

// 		tooltip = document.createElement('div');
// 		tooltip.classList.add('tooltip');
// 		tooltip.classList.add('absolute', 'top-0', 'mx-auto');
// 		tooltip.textContent = text;
// 		// tooltip.style.position = 'absolute';
// 		tooltip.style.top = `${node.offsetTop - tooltip.offsetHeight}px`;

// 		// if (placement === 'right') {
// 		// 	tooltip.style.left = `${node.offsetLeft + node.offsetWidth}px`;
// 		// } else if (placement === 'left') {
// 		// 	tooltip.style.left = `${node.offsetLeft - tooltip.offsetWidth}px`;
// 		// } else {
// 		// 	tooltip.style.left = `${node.offsetLeft}px`;
// 		// }

// 		node.parentNode!.appendChild(tooltip);
// 	}

// 	function hideTooltip() {
// 		// timer = setTimeout(() => {
// 		if (tooltip && tooltip.parentNode) {
// 			tooltip.parentNode.removeChild(tooltip);
// 		}
// 		// }, 100);
// 	}

// 	node.addEventListener('mouseover', showTooltip);
// 	node.addEventListener('mouseout', hideTooltip);

// 	return {
// 		destroy() {
// 			node.removeEventListener('mouseover', showTooltip);
// 			node.removeEventListener('mouseout', hideTooltip);
// 			// clearTimeout(timer);
// 			if (tooltip && tooltip.parentNode) {
// 				tooltip.parentNode.removeChild(tooltip);
// 			}
// 		}
// 	};
// }
