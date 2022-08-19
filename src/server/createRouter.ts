import * as trpc from '@trpc/server'
import { Context } from './Context'
export const createRouter = () => {
    return trpc.router<Context>()
}
