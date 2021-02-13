import { Query } from '../index';
import { Book } from '../../../utils/models';

const getAll = async () => await Query('SELECT * FROM books');
const getOne = async (column: string, value: any) => await Query('SELECT * FROM books WHERE ?? = ?', [column, value]);
const post = async (book: Book) => Query('INSERT INTO books SET ?', [book]);
const put = async (book: Book, id: number) => Query('UPDATE books SET ? WHERE id = ?', [book, id]);
const deleter = async (id: number) => Query('DELETE FROM books WHERE id = ?', [id]);

export default { getAll, getOne, post, put, deleter };