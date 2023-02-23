<script>
	import '../app.css';
</script>

<div class="bg-gradient-to-r from-emerald-500 to-teal-500">
	<div class="max-w-screen-lg mx-auto flex flex-col bg-white">
		<header class="flex flex-col gap-4 text-center bg-white">
			<img src="/images/hero.jpg" alt="Dads camp banner">
			<div>
				<h1 class="text-5xl">Dads Camp</h1>
				<p>... Dads and camping ...</p>
			</div>
		</header>
		<div class="mx-8">
			<slot />
		</div>
		<footer class="m-8">
			
		</footer>
	</div>
</div>
