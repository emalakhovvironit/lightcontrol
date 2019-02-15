import FetchMock from "react-native-fetch-mock";

const fetch = new FetchMock(require("./mocks"), { delay: 0 }).fetch;

export default fetch;
