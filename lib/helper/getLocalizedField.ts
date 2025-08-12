export function getLocalizedField<
  T extends Record<string, string | null | undefined>,
  K extends string
>(data: T, field: K, locale: string): string {
  const key = `${field}_${locale}` as keyof T;
  const fallbackKey = `${field}_en` as keyof T;

  return (data[key] as string) ?? (data[fallbackKey] as string) ?? "";
}
