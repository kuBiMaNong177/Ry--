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
		  },
		  {
		    path: "/tjgz",
		    name: "TJGZ",
		    component: () => import("@/views/three/tjgz.vue")
		  },
		  {
		    path: "/play",
		    name: "PLAY",
		    component: () => import("@/views/two/play.vue")
		  },
			{
			  path: "/sousuo",
			  name: "SOUSUO",
			  component: () => import("@/views/three/sousuo.vue")
			},
			{
			  path: "/project",
			  name: "PROJECT",
			  component: () => import("@/views/three/project.vue")
			}
      ],
	redirect: '/dynamic'

}

