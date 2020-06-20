import Layout from '../layout/Layout';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/cadastrar',
    children: [
      {
        path: '/cadastrar',
        name: 'Cadastrar',
        component: () => import('../views/cadastro/Cadastrar.vue'),
        children: [{
          path: ':id',
          name: 'perfil',
        }]
      },
      {
        path: '/instituicoes',
        name: 'Instituicoes',
        component: () => import('../views/instituicoes/Instituicoes.vue')
      },
      {
        path: '/doacao',
        name: 'Doacao',
        component: () => import('../views/doacao/Doacao.vue')
      },
  //     {
  //       path: '/apresentacao',
  //       name: 'Apresentacao',
  //       component: () => import('../views/apresentacao.vue')
  //     },
  //     {
  //       path: '/contato',
  //       name: 'Contato',
  //       component: () => import('../views/contato.vue')
  //     }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default routes;