<script>
	import {Github, Google, Divider} from '$lib/components/ui'
</script>

<section class="container mx-auto px-4 pb-8 pt-16">
	<h1 class="text-center mb-8 text-4xl">Login</h1>
	<div class="wrapper mx-auto bg-slate-50/5 px-8 py-10 rounded-xl max-w-md shadow-xl">
	<h2 class="text-center mb-8 text-2xl">Welcome back</h2>
		<form class="flex flex-col gap-4" method="POST">
			<Github type="button" onclick={() => console.log('github login')} />
			<Google type="button" onclick={() => console.log('google login')} />
		</form>
		<Divider text="or" py='py-7'/>
		<form action="?/login" method="POST">
			<label class="label mb-4">
				<!-- <div class="input-group flex">
					<input class=" w-[70%] input py-3" type="email" placeholder="mail@domain.com" />

					<button type="submit" class="btn btn-sm variant-filled-primary w-auto">
						Send magic link
					</button>
				</div> -->
				<input
					class="block placeholder:text-center text-center !mb-4 input py-3"
					type="email"
					placeholder="mail@domain.com"
				/>
			</label>
			<button type="submit" class="btn py-3 text-lg variant-filled-primary w-full">
				Send magic link
			</button>
		</form>
	</div>
</section>
