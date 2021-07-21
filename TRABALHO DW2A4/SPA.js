const home = {
    data: function() {
        return {
            title: 'Página inicial'
        }
    },
    template: '<div class="content">{{ title }}</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const pag1 = {
    data: function () {
        return {
            title: 'Página um'
        }
    },
    template: '<div class="content">primeira página</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const pag2 = {
    data: function () {
        return {
            title: 'Página dois'
        }
    },
    template: '<div class="content">segunda página</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const errorNotFound = {
    data: function () {
        return {
            title: 'Not Found'
        }
    },
    template: '<div class="content not-found">Erro 404</div>',
    mounted() {
        this.$root.title = this.title;
    }
};

const routes = [
    { path: '/', component: home },
    { path: '/pag1', component: pag1 },
    { path: '/pag2', component: pag2 },
    { path: '/*', component: errorNotFound },
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <nav>
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/pag1">página um</router-link></li>
                <li><router-link to="/pag2">página dois</router-link></li>
                <li><router-link to="/page4">página x</router-link></li>
            </ul>
        </nav>
        <main>

                <router-view></router-view>
        </main>
    </div>
    `,
    data: function() {
        return {
            title: '...'
        }
    },
    router
});