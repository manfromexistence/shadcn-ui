import { type ParsedSchema } from '@/utils/schema';

/**
 * Combine multiple object schemas into one
 */
export function combineSchema(schema: ParsedSchema[]): ParsedSchema {
  const result: ParsedSchema = {
    type: undefined,
  };

  function add(s: ParsedSchema): void {
    if (s.type) {
      result.type ??= [];
      if (!Array.isArray(result.type)) {
        result.type = [result.type];
      }

      for (const v of Array.isArray(s.type) ? s.type : [s.type]) {
        if (!result.type.includes(v)) {
          result.type.push(v);
        }
      }
    }

    if (s.properties) {
      result.properties ??= {};
      Object.assign(result.properties, s.properties);
    }

    if (s.additionalProperties === true) {
      result.additionalProperties = true;
    } else if (
      s.additionalProperties &&
      typeof result.additionalProperties !== 'boolean'
    ) {
      result.additionalProperties ??= {};
      Object.assign(result.additionalProperties, s.additionalProperties);
    }

    if (s.required) {
      result.required ??= [];
      result.required.push(...s.required);
    }

    if (s.enum && s.enum.length > 0) {
      result.enum ??= [];
      result.enum.push(...s.enum);
    }

    if (s.allOf) {
      s.allOf.forEach(add);
    }
  }

  schema.forEach(add);

  return result;
}
