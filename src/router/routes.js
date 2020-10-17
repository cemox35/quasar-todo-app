
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') }
    ]
  },


  {
    path: '/register',
    component: () => import('layouts/HeaderFooter.vue'),
    children: [
     {path: '',component: () => import('pages/Register.vue') }
    ]
    
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
