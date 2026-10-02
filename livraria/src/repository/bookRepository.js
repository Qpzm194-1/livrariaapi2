import connection from '../database.js';

export const listAllBooks = async () => {
    const [rows] = await connection.query('SELECT * FROM livros');
    return rows;
};

export const createBook = async (book) => {
    const { titulo, autor, preco, estoque } = book;
    const query = 'INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)';
    const [result] = await connection.query(query, [titulo, autor, preco, estoque]);
    return result.insertId;
};

export default { listAllBooks, createBook };