--
-- Table structure for table `Comments`
--
CREATE TABLE IF NOT EXISTS `Comments` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(250) NOT NULL,
  `Description` text NOT NULL,
  `PostID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Comments`
--
INSERT INTO `Comments` (`ID`, `Username`, `Description`, `PostID`) VALUES
(2, '@Kozjak', 'Prekrasna slika.', 6),
(3, '@Primošten', 'Bok!', 7),
(4, '@Cetina', ':)', 7) ;
