import { FiltersType } from "@/types/filters.type";

export type FiltersAction =
  | {
      type: "UPDATE";
      key: keyof FiltersType;
      value: string;
    }
  | {
      type: "REMOVE";
      key: keyof FiltersType;
    }
  | {
      type: "CLEAR";
    };

export function filtersReducer(
  filters: FiltersType,
  action: FiltersAction,
): FiltersType {
  switch (action.type) {
    case "UPDATE": {
      return { ...filters, [action.key]: action.value };
    }

    case "REMOVE": {
      const clone = { ...filters };
      delete clone[action.key];
      return clone;
    }

    case "CLEAR": {
      return {};
    }
  }
}
