import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Layout/Header.jsx';

const MainLayout = () => {
    return (
        <div className="">
            {/* 상단헤더 */}
            <Header />

            {/* 바디 */}
            <div className="">
                {/* 좌측 Nav */}
                {/* <Sidebar /> */}

                {/* 콘텐츠영역 */}
                <Outlet />

            </div>
        </div>
    );
};

export default MainLayout;