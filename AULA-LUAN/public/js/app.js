document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('cadastro');
  
    // Campos do formulário
    const nomeInput = document.getElementById('nome');
    const categoriaSelect = document.getElementById('categoria');
    const aceitoCheckbox = document.getElementById('aceito');
    const arquivoInput = document.getElementById('arquivo');
  
    // Elementos da prévia
    const pNome = document.getElementById('p-nome');
    const pCategoria = document.getElementById('p-categoria');
    const pAceito = document.getElementById('p-aceito');
    const pArquivo = document.getElementById('p-arquivo');
  
    function atualizarPreview() {
      pNome.textContent = nomeInput.value || '—';
      pCategoria.textContent = categoriaSelect.value || '—';
      pAceito.textContent = aceitoCheckbox.checked ? 'sim' : 'não';
      pArquivo.textContent = arquivoInput.files.length > 0 ? arquivoInput.files[0].name : 'nenhum';
    }
  
    // Adiciona listeners para atualizar a prévia
    nomeInput.addEventListener('input', atualizarPreview);
    categoriaSelect.addEventListener('change', atualizarPreview);
    aceitoCheckbox.addEventListener('change', atualizarPreview);
    arquivoInput.addEventListener('change', atualizarPreview);
  
    // Atualiza a prévia inicialmente
    atualizarPreview();
  
    // No submit, monta FormData e mostra no console
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      // Mostrar pares chave/valor do FormData
      console.log([...formData.entries()]);
    });
  });

