import './AnimatedLetters.scss';

import React from 'react';

export default function AnimatedLetters(props: any) {
	return (
		<span>
			{props.strArray.map((char: string, i: number) => (
				<span key={char + i} className={`${props.letterClass} _${i + props.idx}`}>
					{char}
				</span>
			))}
		</span>
	);
}
