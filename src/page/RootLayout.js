
import Wrapper from "../components/UI/wrapper/Wrapper";

import { Outlet } from "react-router-dom";


const RootLayout = () => {
	return <Wrapper>
		<Outlet/>
	</Wrapper>;
};

export default RootLayout;
