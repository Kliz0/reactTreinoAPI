export default {
  items: [
    {
      name: 'Monitor',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      
      },
    },
    {
      title: true,
      name: 'Aplicações',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''   
                // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Lista de Aplicações',
      url: '/base',
      icon: 'icon-puzzle'
    },
    {
      name: 'Encontrar Aplicação',
      url: '/base',
      icon: 'icon-puzzle'
    },
    {title: true,
      name: 'Serviços',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''   
                // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Encontrar Serviço',
      url: '/base',
      icon: 'icon-puzzle'
    }
    
  ]
};
