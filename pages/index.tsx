import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import ThemeButton from '../components/ThemeButton';
const Home: NextPage = () => {
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<Head>
				<title>Title</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-screen h-screen dark:bg-neutral-900 bg-white'>
				<ThemeButton
					toggledIcon={<MoonIcon className='w-5 text-sky-300' />}
					untoggledIcon={<SunIcon className='w-5 text-amber-500' />}
				/>
				<Button color='red'>Click me!</Button>
				<Button color='purple'>Click me!</Button>
				<Button color='green'>Click me!</Button>
				<Button color='rose'>Click me!</Button>
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
