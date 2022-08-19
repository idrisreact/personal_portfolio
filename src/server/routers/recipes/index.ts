import { createRouter } from '../../createRouter'

export const recipe = createRouter().query('get', {
    resolve() {
        const data = ['apple', 'banana', 'orange']
        return {
            recipe: data,
        }
    },
})
