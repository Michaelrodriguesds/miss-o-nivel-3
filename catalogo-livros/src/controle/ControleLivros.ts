import LivroDados from '../LivroDados';
import Livro from '../modelo/Livro';




class ControleLivros {
  getLivros(): Livro[] {
    return LivroDados;
  }

  adicionarLivro(livro: Livro): void {
    LivroDados.push(livro);
  }

  excluir(codigo: number): void {
    const novosLivros = LivroDados.filter((livro) => livro.codigo !== codigo);
    
    LivroDados.length = 0; 
    LivroDados.push(...novosLivros); 
  }
}

export default ControleLivros;
