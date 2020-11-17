import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class IndexRoute extends Route {
    async model() {
<<<<<<< HEAD
        let response = await fetch(`/api/rentals.json`);
        let { data } = await response.json();

        return data.map(model => {
            let { id, attributes } = model;
=======
        let response = await fetch('/api/rentals.json');
        let { data }  = await response.json();

        return data.map(model => {
            let { attributes } = model;
>>>>>>> main
            let type;

            if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
                type = 'Comunity';
            } else {
                type = 'Standalone';
            }

<<<<<<< HEAD
            return { id, type, ...attributes };
=======
            return { type, ...attributes };
>>>>>>> main
        });

    }
}