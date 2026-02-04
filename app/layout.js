import { Geist, Geist_Mono } from 'next/font/google';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Workshop',
	description: 'Workshop app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
