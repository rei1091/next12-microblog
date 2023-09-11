import Head from "next/head";
import styles from "./layout.module.css";
import utileStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = 'Rei';
export const siteTitle = "Next.js Blog";

function Layout({ children,home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img src="/images/automobile.png" className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`} />
						<h1 className={utileStyles.heading2Xl}>{name}</h1>
					</>) : (
					<>
						<img src="/images/automobile.png" className={`${utileStyles.borderCircle}`} />
						<h1 className={utileStyles.heading2Xl}>{name}</h1>
					</>
				)}

			</header>
			<main>{children}</main>
			{!home && (
				<div>
					<Link href='/'>
						<button >ホームへ戻る</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Layout;