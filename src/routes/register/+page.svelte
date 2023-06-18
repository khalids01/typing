<script>
	import { Github, Google, Divider } from '$lib/components/ui';
</script>

<section class="container mx-auto px-4 pb-8 pt-16">
	<h1 class="text-center mb-8 text-4xl">Register</h1>
	<div class="wrapper mx-auto bg-slate-50/5 px-8 py-10 rounded-xl max-w-md shadow-xl">
		<h2 class="text-center mb-8 text-2xl">Create a new account</h2>
		<form class="flex flex-col gap-4" method="POST">
			<Github type="button" onclick={() => console.log('github login')} />
			<Google type="button" onclick={() => console.log('google login')} />
		</form>
		<Divider text="or" py="py-7" />
		<form action="?/login" method="POST">
			<label class="label mb-4">
				<input
					class="block !mb-4 placeholder:text-center text-center input py-3"
					type="text"
					placeholder="Your name"
				/>
			</label>
			<label class="label mb-4">
				<input
					class="block !mb-4 placeholder:text-center text-center input py-3"
					type="email"
					placeholder="your.email@domain.com"
				/>
			</label>
			<button type="submit" class="btn py-3 text-lg variant-filled-primary w-full">
				Register
			</button>
		</form>
	</div>
</section>
