import styles from "./Header.module.scss";
import Button from "~/components/Button";
import Search from "../Search";
import routesConfig from '~/config/routes';
import classNames from "classnames/bind";
import images from "~/assets/images";
import { Link } from "react-router-dom";
import {
  faCircleQuestion,
  faKeyboard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { UploadIcon } from "~/components/Icons";
import { MessengerIcon } from "~/components/Icons";
import { InboxIcon } from "~/components/Icons";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Image from "~/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEllipsisVertical,
  faGear,
  faGlobeAfrica,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "~/components/Popper/Menu";



const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobeAfrica} />,
    title: "Tiếng Việt",
    children: {
      title: "language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Trợ giúp và đánh giá",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Lối tắt bàn phím",
  },
];

function Header() {
  const currentUser = true;

  //Handle logic
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case "language":
        //handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem trang cá nhân",
      to: "/@1412",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/setting",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Trợ giúp và đánh giá",
      to: "/feedback",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Đăng xuất",
      to: "/logout",
      seprate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok"></img></Link>
        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload-video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Messenger" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessengerIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Tải lên</Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/4c8ae7f04df5dbd47b36e8440caf2a71.jpeg?x-expires=168302160&x-signature=sjrsoyqiGQYy%2B%2FDNrUx4YgFARSk%3D"
                alt="Nguyen Son D"
                fallback="https://cdn-icons-png.flaticon.com/512/4138/4138151.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
