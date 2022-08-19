import Hero from '@components/Hero/Hero'
import { utils } from 'src/styled-components/utils'
import { trpc } from '../utils/trpc'

export default function IndexPage() {
    const hello = trpc.useQuery(['test.hello', { text: 'Jessie Kinganga' }])

    if (!hello.data) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Hero text={hello?.data?.greeting} subText="Software Engineer" />
        </div>
    )
}
