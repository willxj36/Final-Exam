import { Query } from '../index';
import { Book } from '../../../utils/models';

const getAll = async () => (
    await Query('SELECT b.id, b.title, b.author, b.price, c.name as category, b._created FROM books b JOIN categories c ON c.id = b.categoryid')
);
const getOne = async (column: string, value: any) => (
    await Query('SELECT b.id, b.title, b.author, b.price, c.name as category, b._created FROM books b JOIN categories c ON c.id = b.categoryid WHERE b.?? = ?', [column, value])
);
const post = async (book: Book) => await Query('INSERT INTO books SET ?', [book]);
const put = async (book: Book, id: number) => await Query('UPDATE books SET ? WHERE id = ?', [book, id]);
const deleter = async (id: number) => await Query('DELETE FROM books WHERE id = ?', [id]);

export default { getAll, getOne, post, put, deleter };