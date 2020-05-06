import * as FetchUtil from "./fetch_util";

describe("startQueryParams function should", () => {
  test("take a url and an object of params and return a formatted url string", () => {
    expect(FetchUtil.startQueryParams("hi", { there: "16" })).toBe("hi?there=16&");
    expect(FetchUtil.startQueryParams("heights", { there: "16", derp: "17" })).toBe("heights?there=16&derp=17&");
  })
});

describe("addQueryParams function should", () => {
  test("take a url and an object of query params and return a formatted url string with these queries added", () => {
    let testURL = "hi?";
    testURL = FetchUtil.addQueryParams(testURL, {green: 1});
    expect(testURL).toBe("hi?green=1&");
    testURL = FetchUtil.addQueryParams(testURL, {red: 4});
    expect(testURL).toBe("hi?green=1&red=4&");
  })
});