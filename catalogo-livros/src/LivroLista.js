import React from 'react';
import { Link } from 'react-router-dom';

const LivroLista = ({ livros, onExcluirLivro }) => {
  const handleExcluirLivro = (livroId) => {
    const novaListaLivros = livros.filter((livro) => livro.id !== livroId);
    onExcluirLivro(novaListaLivros);
  };

  return (
    <div className="container mt-4">
      <h2>Catálogo de Livros</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{livro.editora}</td>
              <td>{livro.autor}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleExcluirLivro(livro.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/adicionar-livro" className="btn btn-primary">
        Adicionar Livro
      </Link>
    </div>
  );
};

export default LivroLista;
