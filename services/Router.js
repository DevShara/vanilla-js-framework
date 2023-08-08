
const Router = {
    init: () => {
        document.querySelectorAll('.navlink').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const url = e.target.href;
                Router.go(url);
            })
        })
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)
    }
}

export default Router