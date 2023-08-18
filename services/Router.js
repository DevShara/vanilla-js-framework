
const Router = {
    init: () => {
        document.querySelectorAll('.navlink').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const url = e.target.getAttribute('href');
                Router.go(url);
            })
        })

        window.addEventListener("popstate", (e) => {
            Router.go(e.state.route, false)
        })

        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        // console.log(`Going to ${route}`)

        if(addToHistory){
            history.pushState({route}, '', route)
        }

        let pageElement = null;
        if(route === '/'){
            console.log('HOME')
            pageElement = document.createElement('menu-page');
            pageElement.textContent = 'Home'
        }else if(route === '/order'){
            console.log('ORDER')
            pageElement = document.createElement('order-page');
            pageElement.textContent = 'Order'
        }else{
            if(route.startsWith("/product")){
                pageElement = document.createElement('details-page');
                pageElement.textContent = 'Details';
                const paramId = route.substring(route.lastIndexOf('-')+1);
                pageElement.dataset.id = paramId; 
            }
        }
        const cache = document.querySelector('main');
        cache.innerHTML = '';
        cache.appendChild(pageElement);
    }
}

export default Router