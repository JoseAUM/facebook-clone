export enum crud {
  findAll = 'findMany',
  findOne = 'findFirst',
  create = 'create',
  update = 'update',
  delete = 'delete',
}

export const errorResponse = (response: any) => {
  let error;
  const responseString = response.toString();
  const errors = responseString.match(/Error:/gm);

  if (errors?.length) {
    const argsMissing = responseString.match(/Argument.*is missing/gm);
    if (argsMissing?.length) {
      error = argsMissing;
    } else if (response?.code) {
      switch (response.code) {
        case 'P2025':
          error = response.meta.cause;
          break;
        case 'P2002':
          error = `${response.meta.target} already exists`;
          break;
        case 'P2000':
          error = `The provided value for the column is too long for the column's type. Column: ${response.meta.target}`;
          break;
        default:
          error = response;
          break;
      }
    }
  }
  return error?.length > 0 ? { error } : response;
};

export const updateAndCreate = (method: crud, model: any, data?: any): any => {
  if (data) {
    return async (where?: string) => {
      const insert: any = method === crud.update ? { where, data } : { data };
      try {
        const response: any = await model[method](insert);
        return response;
      } catch (error: any) {
        return error;
      }
    };
  }
};

export const getData = (method: crud, model: any): any => {
  return async (opts: any) => {
    try {
      const total = await model.count();
      const data: any = await model[method]({ ...opts });
      const meta: any = { total };

      if ('skip' in opts) {
        meta.page = opts.take;
      }
      if ('take' in opts) {
        meta.perPage = opts.take;
      }
      return { data, meta };
    } catch (error: any) {
      return error;
    }
  };
};
