function loadPage(page) {
	fetch('html/' + page)
		.then(response => response.text())
		.then(html => {
			document.getElementById('page-content').innerHTML = html;
		})
		.catch(error => {
			document.getElementById('page-content').innerHTML = '<p>Erro ao carregar a página.</p>';
		});
}

window.onload = () => loadPage('sobre.html');
