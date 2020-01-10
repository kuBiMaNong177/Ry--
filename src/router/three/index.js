export default{
  path:'/three',
  name:'three',
  component:()=>import ('@/views/three'),
  children: [
        {
          path: "/dynamic",
          name: "DYNAMAIC",
          component: () => import("@/views/three/dynamic.vue")
        },
		  {
		    path: "/near",
		    name: "NEAR",
		    component: () => import("@/views/three/near.vue")
		  }
      ]

}
