-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-29 06:27:20
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5_1903`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` decimal(20,2) NOT NULL COMMENT '商品价格',
  `num` int(10) NOT NULL COMMENT '商品库存',
  `pic` text NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(1, 'Galaxy S10+', '6999.00', 55, '[{ "title": "small", "src": "./img/15504714179943326_293X293.jpg" }, { "title": "展示2", "src": "./img/15645884848297330_570X570.jpg" }, { "title": "展示3", "src": "./img/15645884848297330_570X570.jpg" }]', '<h1>\r\n商品详情描述\r\n</h1>'),
(2, 'Galaxy A60', '1499.00', 17, '[{\n    "title": "small",\n    "src": "./img/15628306744615279_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/15649331868456608_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>商品详细信息<h1>\n<div style="color:red;">\n假装有商品描述\n</div>'),
(3, 'Galaxy S9+ 128GB版本', '4999.00', 187, '[{\n    "title": "small",\n    "src": "./img/15210101574116158_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/1563429611919397_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>'),
(4, 'Galaxy A80', '3799.00', 187, '[{\n    "title": "small",\n    "src": "./img/15623069730323459_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/15628974372032334_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>'),
(5, '三星星曜 750XBE-X02', '8499.00', 17, '[{\n    "title": "small",\n    "src": "./img/15608612396211979_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/15608427479113152_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>'),
(6, '三星星曜 750XBE-X03', '9999.00', 18, '[{\n    "title": "small",\n    "src": "./img/15608612396211979_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/15608427479113152_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>'),
(7, '三星星曜Pen 930MBE-K01', '7999.00', 13, '[{\n    "title": "small",\n    "src": "./img/15542943462071119_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/1554294461552176_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>'),
(8, '三星星曜Pen Pro930SBE-K01', '9999.00', 27, '[{\n    "title": "small",\n    "src": "./img/15497751284773365_293X293.jpg"\n}, {\n    "title": "展示2",\n    "src": "./img/15497751881292008_570X570.jpg"\n}, {\n    "title": "展示3",\n    "src": "./img/15645884848297330_570X570.jpg"\n}]', '<h1>\r\n假装有商品详情\r\n</h1>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
