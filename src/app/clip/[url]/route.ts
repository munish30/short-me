import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"
import randomize from 'randomatic'

export async function GET(request: NextRequest, { params }: {params: Promise<{url: string}>}) {
    const userId = request.nextUrl.searchParams.get('id')
    const {url} = await params;
    const validUrl = completeUrl(url);
    const supabase = await createClient()
     const {data } = await supabase.from('urls').select('*').eq('user_id', userId).eq('url', validUrl);
    if(data && data.length != 0) {
        redirect(`/user/dashboard/${data[0].id}`)
    }
    const id = randomize('Aa0', 8)
    const { error} = await supabase.from('urls').insert([
        {id, url: validUrl, user_id: userId}
    ])
    console.error(error)
    if(!error) redirect(`/user/dashboard/${id}`);
    redirect('/')
}

const completeUrl = (inputUrl: string) => {
    if (!inputUrl) return '';
    
    let url = inputUrl.trim().toLowerCase();
    
    if (/^https?:\/\//i.test(url)) {
        return url;
    }
    
    url = url.replace(/^[\/]+/, '').replace(/^https?:?\/?\/?/, '');
    
    const scheme = 'http://';
    
    if (url.startsWith('www.')) {
        return scheme + url;
    }
   
    if (url.includes('.')) {
        const tld = url.split('.').pop();
        const commonTlds = ['com', 'org', 'net', 'io', 'co', 'gov', 'edu', 'uk', 'de', 'fr'];
        
        if (tld && commonTlds.includes(tld)) {
            return scheme + 'www.' + url;
        }
        return scheme + 'www.' + url;
    }
    
    return scheme + 'www.' + url + '.com';
}