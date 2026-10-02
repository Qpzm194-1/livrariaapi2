import bookService from '../service/bookService.js';
export const getBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros', details: error.message });
    }
};
export const postBook = async (req, res) => {
    try {
        const newBook = await bookService.createNewBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar livro', details: error.message });
    }
};
export default { getBooks, postBook };