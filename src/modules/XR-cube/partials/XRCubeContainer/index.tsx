import { Canvas } from '@react-three/fiber';
import { XRCube } from './XRCube';
import { ARButton, XR } from '@react-three/xr';

import { useEffect } from 'react';

export const XRCubeContainer = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && window.WebXRPolyfill) {
			const polyfill = new window.WebXRPolyfill();
			// Используйте здесь polyfill и связанный с ним код XR
		}
	}, []);

	return (
		<>
			<ARButton />
			<script src="/js/webxr-polyfill.module.js"></script>

			<Canvas>
				<XR>
					<XRCube />
				</XR>
			</Canvas>
		</>
	);
};
