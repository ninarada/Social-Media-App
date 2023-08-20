SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Table structure for table `Posts`
--

CREATE TABLE IF NOT EXISTS `Posts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(250) NOT NULL,
  `ImageUrl` varchar(250) NOT NULL,
  `Description` text NOT NULL,
  `Liked` tinyint(1) NOT NULL DEFAULT '0',
  `Likes` int(11) NOT NULL DEFAULT '0',
  `Bookmarked` tinyint(1) NOT NULL DEFAULT '0',
  `Bookmarks` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`ID`, `Username`, `ImageUrl`, `Description`, `Liked`, `Likes`, `Bookmarked`, `Bookmarks`) VALUES
(2, '@Kozjak', 'images/kozjak.jpg', 'Kozjak je planina koja sa sjeverne strane okružuje grad Kaštela. Njegova je južna padina vrlo strma i klisurasta, a sjeverni kameniti obronci postupno prelaze u valovitu visoravan Dalmatinske Zagore.', 0, 0, 0, 0),
(3, '@Cetina', 'images/cetina.jpg', 'Cetina izvire na nadmorskoj visini od 385 m u sjeverozapadnim obroncima Dinare blizu sela Cetina, 7 km sjeverno od Vrlike, a po kojem je rijeka i dobila ime. Izvor Cetine je jezero duboko preko stotinu metara.', 0, 0, 0, 0),
(4, '@Primošten', 'images/primosten.jpg', 'Tijekom turske invazije 1542., otočić na kojemu se nalazi Primošten je bio zaštićen zidovima i kulama i sa pomičnim mostom koji ga je spajao s kopnom. Kad su se Turci povukli, most je zamijenjen nasipom, a naselje je nazvano "Primošten", od riječi "primostiti" (premostiti).', 0, 0, 0, 0),
(5, '@Katedrala', 'images/sibenik.jpg', 'Katedrala Sv. Jakova u Šibeniku najznačajnije je graditeljsko ostvarenje 15. i 16. st. na tlu Hrvatske. Zbog svojih iznimnih vrijednosti katedrala je 2000. godine uvrštena u UNESCO-ov popis svjetskog kulturnog nasljeđa.', 0, 0, 0, 0),
(6, '@Svilaja', 'images/svilaja.jpg', 'Svilaja je planina u Dalmatinskoj Zagori, usporedna s višim sjevernijim lancem Dinara-Troglav. Pruža se smjerom sjeverozapad-jugoistok između Sinjskoga i Petrovog polja u dužini oko 30 km.', 0, 0, 0, 0);

