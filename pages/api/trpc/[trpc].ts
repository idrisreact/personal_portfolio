import { appRouter } from '../../../src/server/routers/app'
import * as trpcNext from '@trpc/server/adapters/next'
import { createContext } from '../../../src/server/Context'

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
})
