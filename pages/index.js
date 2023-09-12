import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout,{ siteTitle } from '../components/Layout';
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post';
import Head from 'next/head';

//ssgの場合
export async function getStaticProps() {
	const allPostsData =
		getPostsData()
			.sort((a,b) => {
				return (a.date < b.date ? 1 : -1)
			});

	return {
		props: {
			allPostsData,
		},
	};
}

//ssrの場合
// export async function getServerSideProps(context){
// 	return{
// 		process:{
// 	コンポーネントに渡すためのprops
// 		},
// 	};
// }

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyle.headingMd}>
				<p>私は、エンジニアになるために基礎と英語の勉強中です</p>
			</section>

			<section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
				<h2>📝見習いエンジニアのブログ</h2>
				<div className={styles.grid}>
					{allPostsData.map(({ id,title,date,thumbnail }) => (
						<article key={id}>
							<Link href={`/posts/${id}`}>
								<img src={`${thumbnail}`}
									className={styles.thumbnailImage}
								/>
							</Link>
							<Link href={`/posts/${id}`} className={utilStyle.boldText}>
								{title}
							</Link>
							<br />
							<small className={utilStyle.lightText}>
								{date}
							</small>
						</article>
					))}
				</div>
			</section>
		</Layout >
	);
}
