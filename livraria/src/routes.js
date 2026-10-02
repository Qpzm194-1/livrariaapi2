import bookController from './controller/bookController.js';

export function addRoutes(api) {
   
    api.get('/books', bookController.getBooks);
    api.post('/books', bookController.postBook);
}