
import Post from '@/components/blog/Post';
import PostBreadCrumps from '@/components/blog/PostBreadCrumps';
import PostHeading from '@/components/blog/PostHeading';
import PostMetaData from '@/components/blog/PostMetaData';
import Container from '@/components/container';
import { Breadcrumb, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { getBlogPosts } from '@/lib/contentful';



export async function generateStaticParams() {
  const posts= await getBlogPosts()
  return posts.map((service, idx) => ({
      id: String(idx + 1),
  }));
}


async function page({params}) {
  const posts = await getBlogPosts();
    const post = posts[params.id - 1];
  return (
    <div className='mt-36 md:mt-24'>
      <Container>
      <PostBreadCrumps/>
      <PostHeading text={post.titlefull}/>
      <PostMetaData date={post.date.toLocaleString()}/>
      <Separator/>
      <Post obj={post.body}/>
    </Container>
    </div>
    
  )
}

export default page
