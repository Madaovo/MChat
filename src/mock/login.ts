import Mock from "mockjs";

Mock.mock("/api/login", "post", (options: any) => {
  console.debug(options);
  return {
    code: 0,
    success: true,
    msg: "登录成功",
    data: {
      token: Mock.Random.guid(),
    },
  };
});
