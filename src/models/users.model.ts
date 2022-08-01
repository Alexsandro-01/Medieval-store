import { ResultSetHeader } from 'mysql2';
import { InsertUser, User } from '../interfaces/main.interfaces';
import connection from './connection';

async function getById(id: User['id']): Promise<User[]> {
  const sql = `
    SELECT
      *
    FROM
      Trybesmith.Users
    WHERE
      id = ?
  `;

  const [row] = await connection.query(sql, [id]);

  return row as User[];
}

async function create(dataUser: InsertUser): Promise<User> {
  const { username, classe, level, password } = dataUser;
  const sql = `
  INSERT INTO
    Trybesmith.Users (username, classe, level, password)
  VALUES
    (?, ?, ?, ?);
  `;

  const [data] = await connection.query<ResultSetHeader>(sql, [username, classe, level, password]);

  const [newUser] = await getById(data.insertId);

  return newUser as User;
}

export default {
  create,
  getById,
};