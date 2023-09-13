import Livro from './modelo/Livro';
import LivroDados from './LivroDados';



const livros = [
  new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3']),
  new Livro(3, 1, 'Livro 3', 'Resumo do Livro 3', ['Autor 4']),
];

export default livros;
