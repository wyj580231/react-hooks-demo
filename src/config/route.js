export default [
  { path: "/", name: "Home" },
  {
    name: "测试",
    children: [
      { name: "XSS", path: "/test/xss" },
      { name: "事件机制", path: "/test/event" },
      { name: "context", path: "/test/context" },
    ],
  },
  { name: "示例", children: [{ name: "图片懒加载", path: "/demo/lazyImage" }] },
];
