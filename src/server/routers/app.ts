import { recipe } from './recipes'
import { z } from 'zod'
import { createRouter } from '../createRouter'
export interface Context {
    // user is nullable
    user?: {
        id: string
    }
}

const post = createRouter()
    .query('hello', {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `I am ${input?.text} `,
            }
        },
    })
    .query('bye', {
        resolve() {
            return {
                bye: 'bye bye ohhh',
            }
        },
    })

export const appRouter = createRouter()
    .merge('test.', post)
    .merge('recipe.', recipe)

export type AppRouter = typeof appRouter
