import { cache } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { Post } from '@/components/ui/InfinitePosts/InfinitePosts'

export const getInfinitePosts = cache(async (supabase: SupabaseClient) => {
  const { data: posts, error } = await supabase.from('posts').select('*')
  return posts as Post[]
})

export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
})

export const getSubscription = cache(async (supabase: SupabaseClient) => {
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*')
    .maybeSingle()

  return subscription
})
