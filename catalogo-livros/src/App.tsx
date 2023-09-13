import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import AdicionarLivro from './AdicionarLivro';
import Livro from './modelo/Livro'; 


function App() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const handleAdicionarLivro = (novoLivro: Livro) => {
    setLivros([...livros, novoLivro]);
  };

  const handleExcluirLivro = (novaListaLivros: Livro[]) => {
    setLivros(novaListaLivros);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/catalogo-livros"
          element={<LivroLista livros={livros} onExcluirLivro={handleExcluirLivro} />}
        />
        <Route
          path="/adicionar-livro"
          element={<AdicionarLivro onAdicionarLivro={handleAdicionarLivro} />}
        />
        {/* */}
        <Route path="/" element={<LivroLista livros={livros} onExcluirLivro={handleExcluirLivro} />} />
      </Routes>
    </Router>
  );
}

export default App;
