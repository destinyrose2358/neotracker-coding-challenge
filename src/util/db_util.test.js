const DBAPIUtil = require("./db_util");
global.fetch = require("jest-fetch-mock");

/*
Im not able to make this test work,
because of issues between fetch and jest.
This method uses json-servers query parameters
and so must fetch through the server for the test to be accurate.

*/

describe("fetchShipments function should fetch shipments", () => {
  test("using page", () => {
    fetch.mockResponse(JSON.stringify({
      meta: {
        status: "success"
      }
    }));
    expect(DBAPIUtil.fetchShipments(1,1,"id","asc","")).not.toEqual(DBAPIUtil.fetchShipments(2,1,"id","asc",""));
  });
  test("using pageLength", async () => {
    const pageLength1 = await DBAPIUtil.fetchShipments(1, 1, "id", "asc", "");
    const pageLength2 = await DBAPIUtil.fetchShipments(1, 2, "id", "asc", "");
    expect(pageLength1.length).toEqual(1);
    expect(pageLength2.length).toEqual(2);
  });
});