import * as bookRepository from '../repository/bookRepository.js';

export const getAllBooks = async () => {
    return await bookRepository.listAllBooks();
};

export const createNewBook = async (bookData) => {
    const { titulo, autor, preco, estoque } = bookData;

    // Validações de regra de negócio
    if (!titulo || !autor) {
        throw new Error('O título e o autor do livro são obrigatórios.');
    }
    if (preco <= 0) {
        throw new Error('O preço do livro deve ser maior que zero.');
    }

    const id = await bookRepository.createBook({ titulo, autor, preco, estoque: estoque || 0 });
    return { id, ...bookData };
};

export default { getAllBooks, createNewBook };