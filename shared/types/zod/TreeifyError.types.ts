export type ZodTreeifyError = {
  properties: {
    [fieldsName: string]: {
      errors: string[];
    };
  };
};
