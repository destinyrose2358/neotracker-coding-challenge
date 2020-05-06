import * as SelectorUtil from "./selector_util";

describe("normalizeBy function should", () => {
  test("be able to normalize data that is an array or object", () => {
    const arrayData = [{id: 3, name: "bob"}, {id: 17, name: "steph"}];
    const idNormalData = {
      3: {
        id: 3,
        name: "bob"
      },
      17: {
        id: 17,
        name: "steph"
      }
    };
    const nameNormalData = {
      bob: {
        id: 3,
        name: "bob"
      },
      steph: {
        id: 17,
        name: "steph"
      }
    };

    expect(SelectorUtil.normalizeBy(arrayData, "id")).toEqual(idNormalData);
    expect(SelectorUtil.normalizeBy(idNormalData, "name")).toEqual(nameNormalData);

  })
});