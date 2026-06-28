import { toast } from "react-hot-toast";

import type { FetchedDataType } from "@/types/api-response.type";

export async function fetchWithToast<T>(
  input: RequestInfo | URL,
  init: RequestInit = {},
  successMessage?: string,
): Promise<FetchedDataType<T>> {
  const response = await fetch(input, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  const result = await response.json();

  if (!response.ok) {
    let message = "Unexpected Error";

    if ("error" in result) {
      message = result.error;

      toast.error(message);

      return { error: message };
    }
  }

  if (successMessage) {
    toast.success(successMessage);
  }

  return { data: result.data };
}
