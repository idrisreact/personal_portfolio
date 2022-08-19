import { createReactQueryHooks } from '@trpc/react'
import type { AppRouter } from '../src/server/routers/app'

export const trpc = createReactQueryHooks<AppRouter>()
