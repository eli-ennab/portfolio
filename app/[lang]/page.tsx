import { Navigation } from './_components/Navigation'

const getLandingPageData = async (lang: any) => {
  const version = process.env.STORYBLOK_DATA_VERSION
  const token = process.env.STORYBLOK_TOKEN
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`
  let request = await fetch(url, { next: { revalidate: 10 } })

  const data = await request.json()

  const { navigation } = data.story.content

  return {
    navigation: navigation[0],
  }
}

export default async function Home({ params: { lang } }: any) {
  const data = await getLandingPageData(lang)
  return (
    <main>
      <Navigation data={data?.navigation} />
      <h2 className="dark:text-red-900">Hello world</h2>
    </main>
  )
}
