import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdicionarLivro = ({ onAdicionarLivro }) => {
  const [livro, setLivro] = useState({
    titulo: '',
    resumo: '',
    editora: '',
    autor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleAdicionarLivro = () => {
    if (livro.titulo && livro.resumo && livro.editora && livro.autor) {
      onAdicionarLivro(livro);
      setLivro({
        titulo: '',
        resumo: '',
        editora: '',
        autor: '',
      });
    } else {
      alert('Por favor, preencha todos os campos antes de adicionar o livro.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Adicionar Livro</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" name="titulo" value={livro.titulo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea className="form-control" id="resumo" name="resumo" value={livro.resumo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <input type="text" className="form-control" id="editora" name="editora" value={livro.editora} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">Autor</label>
          <input type="text" className="form-control" id="autor" name="autor" value={livro.autor} onChange={handleChange} />
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleAdicionarLivro}>
        Adicionar Livro
      </button>
      <Link to="/catalogo-livros" className="btn btn-secondary ms-2">
        Voltar ao Catálogo de Livros
      </Link>
    </div>
  );
};

export default AdicionarLivro;
