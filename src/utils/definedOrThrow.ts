/**
 * Check if the argument is defined (truthy value)
 * If argument is falsy, it throws an error
 *
 * @param value
 * @param label
 */
const definedOrThrow = (value: string, label?: string): string => {
  if (!value) {
    throw new Error(
      `Required variable is not defined: ${label || "no label provided"}`
    );
  }

  return value;
};

export default definedOrThrow;
