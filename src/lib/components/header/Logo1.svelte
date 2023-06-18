<svg height="65" stroke="#15D6D6" stroke-width="2" class="text-line" width="100%"
	><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Iconic Lab</text></svg
>

<style>
	.text-line {
		stroke-dasharray: 500;
		stroke-dashoffset: 500;
		/* animation: dash 5s linear forwards, filling 5s ease-in forwards; */
		animation: dash 10s linear forwards;
		font-size: 60px;
	}

	.text-line text {
		font-family: Helvetica, Arial, sans-serif;
		font-weight: bold;
		font-style: normal;
	}

	@keyframes shine {
		from {
			background-position: 0% center;
		}
		to {
			background-position: -200% center;
		}
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes filling {
		0%,
		90% {
			fill: #15d6d6;
			fill-opacity: 0;
		}
		100% {
			fill: #15d6d6;
			fill-opacity: 1;
		}
	}
</style>
