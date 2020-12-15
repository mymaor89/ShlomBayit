import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Main from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'
import post1 from './blog-post.1.md'
import post2 from './blog-post.2.md'
import post3 from './blog-post.3.md'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}))

const sections = [
  { title: 'שאלון', url: '#' },
  { title: 'הרצאות', url: '#' },
  { title: 'ספרים', url: '#' },
  { title: 'בלוג', url: '#' },
  { title: 'ייעוץ זוגי', url: '#' }
]

const mainFeaturedPost = {
  title: 'האם יש פתרון קסמים?',
  description:
    'מה ההבדל בין זוגות שחיים יחד באהבה שנים רבות לזוגות שכל הזמן רבים',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'המשך לקרוא…'
}

const featuredPosts = [
  {
    title: '50 טיפים מעשיים שיבטיחו לכם חיי נישואים מאושרים וארוכים',
    date: 'Nov 12',
    description: 'בחרנו רק את הטיפים הטובים ביותר שיבטיחו לכם חיים מאושרים.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  },
  {
    title: 'לשים את המשקעים מאחור',
    date: 'Nov 11',
    description:
      'מעוניים לפתוח דף חדש, כיצד נשאיר את הריבים המכוערים מאחור ונתחיל מחדש',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  }
]

const posts = [post1, post2, post3]

const sidebar = {
  title: 'אודותינו',
  description: 'מטרת האתר לעזור לכם לשקם את הזוגיות שלכם במינימום הוצאות',
  archives: [
    { title: 'מרץ 2020', url: '#' },
    { title: 'פברואר 2020', url: '#' },
    { title: 'ינואר 2020', url: '#' },
    { title: 'נובמבר 1999', url: '#' },
    { title: 'אוקטובר 1999', url: '#' },
    { title: 'ספטמבר 1999', url: '#' },
    { title: 'אוגוסט 1999', url: '#' },
    { title: 'יולי 1999', url: '#' },
    { title: 'יוני 1999', url: '#' },
    { title: 'מאי 1999', url: '#' },
    { title: 'אפריל 1999', url: '#' }
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
}

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="שלום בית" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="שלום בית" description="לא מוותרים בקלות" />
    </React.Fragment>
  )
}
