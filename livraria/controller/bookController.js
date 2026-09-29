import { Router } from 'express';
import pool from '../src/database.js'; 

const router = Router();

// Listar todos os livros
router.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM livros');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros', details: error.message });
    }
});

// Cadastrar um novo livro
router.post('/books', async (req, res) => {
    try {
        const { titulo, autor, preco, estoque } = req.body;
        const [result] = await pool.query(
            'INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)',
            [titulo, autor, preco, estoque]
        );
        res.status(201).json({ id: result.insertId, titulo, autor, preco, estoque });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar livro', details: error.message });
    }
});

export default router;