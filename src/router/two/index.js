export default [
  {
    path: "/two",
    name: "two",
    component: () => import("@/views/two")
  },
  {
    path: "/songSheet",
    name: "c",
    component: () => import("@/views/two/songSheet")
  }
];
