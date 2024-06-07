// 'use client'
import { Header } from '../components/header'
import { BottomNav } from '../components/bottom-nav'
import { createClient } from '@/libs/supabase/server'
import { getInfinitePosts, getSubscription } from '@/libs/supabase/queries'
import { InfinitePosts } from '@/components/ui/InfinitePosts/InfinitePosts'

const HomePage = async () => {
  const supabase = createClient()
  const [posts, subscription] = await Promise.all([getInfinitePosts(supabase), getSubscription(supabase)])
  console.log(posts);
  
  return (
    <>
      <Header />
      <main className='mt-[74px]'>
        <InfinitePosts posts={posts} subscription={subscription} />
      </main>
      <BottomNav />
    </>
  )
}

export default HomePage
