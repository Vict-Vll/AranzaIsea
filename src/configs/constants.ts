export class Constants {
    public static Routes = {
        home: '',
        works: '/works',
        about: '/about',
        goodies: '/goodies',
        contact: '/contact'
    };
    public static Sidenav = [
        {
            name: 'WORKS',
            url: Constants.Routes.works
        },
        {
            name: 'ABOUT',
            url: Constants.Routes.about
        },
        {
            name: 'GOODIES',
            url: Constants.Routes.goodies
        },
        {
            name: 'CONTACT',
            url: Constants.Routes.contact
        }
    ];
}
