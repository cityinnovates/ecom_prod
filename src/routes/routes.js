
import React from 'react'


const HomePageContainer = React.lazy(()=> import('../pages/homepage/HomePageContainer'))
const Tab_details = React.lazy(()=>import('../pages/homepage/Tab_details'))

const configureRoutes = () => {
    const routes = [
      {
        element: HomePageContainer,
        exact: true,
        path: '/',
        title: 'Home-Dashbord page',
        type: 'public',
      },

      {
        element: Tab_details,
        exact: true,
        path: '/tab_detail',
        title: 'tab detail page',
        type: 'public',
      },
   
    ];
  
    return routes;
  };
  
  export default configureRoutes;
  