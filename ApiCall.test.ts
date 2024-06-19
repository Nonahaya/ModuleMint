import { Call } from "./ApiCall";
const res1 = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};
describe("ApiCall Function", () => {
  test("Test Get", () => {
    Call("todos/1").then((data) =>expect(data).toStrictEqual(res1));
    
  });
  test("Test Post", () => {
    Call("posts","post",{res:true}).then((data:any) =>expect(data.res).toStrictEqual(true));
    
  });
});
