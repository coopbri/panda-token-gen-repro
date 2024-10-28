import type { PropsWithChildren } from "react";

import "lib/styles/main.css";

const RootLayout = ({ children }: PropsWithChildren) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
