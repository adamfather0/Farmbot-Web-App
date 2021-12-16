import {
  maybeFindGenericPointerById,
  maybeFindPlantTemplateById,
  maybeFindSavedGardenById,
  maybeFindWeedPointerById,
} from "../selectors_by_id";
import { buildResourceIndex } from "../../__test_support__/resource_index_builder";

describe("maybeFindPlantTemplateById()", () => {
  it("handles missing uuid", () => {
    expect(maybeFindPlantTemplateById(buildResourceIndex([]).index, 1))
      .toEqual(undefined);
  });
});

describe("maybeFindGenericPointerById()", () => {
  it("handles missing uuid", () => {
    expect(maybeFindGenericPointerById(buildResourceIndex([]).index, 1))
      .toEqual(undefined);
  });
});

describe("maybeFindWeedPointerById()", () => {
  it("handles missing uuid", () => {
    expect(maybeFindWeedPointerById(buildResourceIndex([]).index, 1))
      .toEqual(undefined);
  });
});

describe("maybeFindSavedGardenById()", () => {
  it("handles missing uuid", () => {
    expect(maybeFindSavedGardenById(buildResourceIndex([]).index, 1))
      .toEqual(undefined);
  });
});