<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-100955415-3"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-100955415-3");
      </script>

      <title>Home | Bobby Sebolao</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/favicon.png" />
      <!-- <link
        id="standardStylesheet"
        rel="stylesheet"
        type="text/css"
        href="/css/minified/home/home.min.css"
      /> -->
      <!--
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
      -->
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Permanent+Marker"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Indie+Flower"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=VT323"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=MedievalSharp&display=swap"
        rel="stylesheet"
      />
      <link
        rel="webmention"
        href="https://webmention.io/www.bobbysebolao.com/webmention"
      />
      <link
        rel="pingback"
        href="https://webmention.io/www.bobbysebolao.com/xmlrpc"
      />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
