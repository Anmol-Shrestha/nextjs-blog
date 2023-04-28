import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps(){
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}




export default function Home({allPostsData}) {
  return (
 <>
 
      <Layout home>


          <Head>
            <title>{`${siteTitle}`}</title>
          </Head>
          <section className={utilStyles.headingMd} >
               
            <p>Hi my name is Anmol Sagar Shrestha. <br />
               I am a Front-End Developer.
               My passion is to build immersive and cool websites.
            </p>
             <p>
             This is a new change on 1:30 pm friday. to check if i can make changes
             </p>
            <p>
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
            </p>

          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href={`/post/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
        
          ))}
        </ul>
      </section>
      </Layout>        

 </>
  )
}
