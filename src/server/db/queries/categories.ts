import { Query } from '../index';

const getAll = async () => await Query('SELECT * FROM categories');
const getOne = async (column: string, value: any) => await Query('SELECT * FROM categories WHERE ?? = ?', [column, value]);
// const post = () => Query('', []);
// const put = () => Query('', []);
// const deleter = () => Query('', []);

export default { getAll, getOne };