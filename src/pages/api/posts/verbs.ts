import { prisma } from '../../../lib/db/index';
import { crud, updateAndCreate, getData } from '../../../lib/api/helpers';

/**
 * creates a new user
 *
 * @param user
 * @returns User
 */
const create = async (user: any) => {
  return await updateAndCreate(crud.create, prisma.user, user)();
};

/**
 * gets User by id
 *
 * @param id
 * @returns User
 */

const getUser = async (id: any) => {
  return await getData(crud.findOne, prisma.user)({ where: { id } });
};

/**
 * removes user by id
 *
 * @param id
 */

const remove = async (id: any) => {
  return await updateAndCreate(crud.delete, prisma.user)({ where: { id } });
};

/**
 * updates user by id
 *
 * @param id
 * @param user
 * @returns User
 */
const update = async (id: any, user: any) => {
  return await updateAndCreate(crud.update, prisma.user, user)({ id });
};

/**
 * fetches all users
 *
 * @param skip
 * @param take
 * @returns User[]
 */
const findPosts = async (authorId: any, skip = 0, take = 10) => {
  return await getData(
    crud.findAll,
    prisma.post
  )({ where: { authorId }, include: { author: true } });
};

export { create, getUser, remove, update, findPosts };
