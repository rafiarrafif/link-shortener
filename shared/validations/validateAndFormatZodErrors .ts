import { treeifyError, ZodSchema } from "zod";
import { ZodTreeifyError } from "../types/zod/TreeifyError.types";

interface FormattedValidationResult {
  error: boolean;
  [fieldname: string]: string[] | boolean;
}

export const validateAndFormatZodErrors = <T>(
  schema: ZodSchema<T>,
  payload: T
): FormattedValidationResult | void => {
  const validationResult = schema.safeParse(payload);
  if (!validationResult.success) {
    const parsedErros = treeifyError(validationResult.error) as ZodTreeifyError;
    let formattedErrors: { [fieldName: string]: string[] } = {};

    for (const fieldName in parsedErros.properties) {
      const fieldErrors = parsedErros.properties[fieldName].errors;
      if (fieldErrors.length > 0) {
        formattedErrors[fieldName] = fieldErrors;
      }
    }

    return {
      error: true,
      ...formattedErrors,
    };
  }
};
