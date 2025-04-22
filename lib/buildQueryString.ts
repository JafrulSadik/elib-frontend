export function buildQueryString(searchParams: {
  [key: string]: string | string[] | undefined;
}): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      params.set(key, value.join(","));
    } else if (value !== undefined) {
      params.set(key, value);
    }
  }

  return `?${params.toString()}` || params.toString();
}
