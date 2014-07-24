var d = new Date(); // get today's date

var romanDate = new String(); // start with empty string

var whatMonth = d.getMonth() + 1; // get the month
var whatDay = d.getDate(); // get the day
var whatYear = d.getFullYear(); // get the year
var isLeap = new Date(whatYear, 1, 29).getMonth() == 1; // is it leap year

// day - very complicated

switch(whatDay) { // add day info to expression
	case 1:
		romanDate = romanDate + "kalendis ";	
		break;
	case 2:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem vi nonas ";
				break;
			default:
				romanDate = romanDate + "ante diem iv nonas ";
				break;
		}
		break;
	case 3:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem v nonas ";
				break;
			default:
				romanDate = romanDate + "ante diem iii nonas";
				break;
		}
		break;
	case 4:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem iv nonas ";
				break;
			default:
				romanDate = romanDate + "pridie nonas ";
				break;
		}
		break;
	case 5:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem iii nonas ";
				break;
			default:
				romanDate = romanDate + "nonis ";
				break;
		}
		break;
	case 6:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "pridie nonas ";
				break;
			default:
				romanDate = romanDate + "ante diem viii idus ";
				break;
		}
		break;
	case 7:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "nonis ";
				break;
			default:
				romanDate = romanDate + "ante diem vii idus ";
				break;
		}
		break;
	case 8:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem viii idus ";
				break;
			default:
				romanDate = romanDate + "ante diem vi idus ";
				break;
		}
		break;
	case 9:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem vii idus ";
				break;
			default:
				romanDate = romanDate + "ante diem v idus ";
				break;
		}
		break;
	case 10:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem vi idus ";
				break;
			default:
				romanDate = romanDate + "ante diem iv idus ";
				break;
		}
		break;
	case 11:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem v idus ";
				break;
			default:
				romanDate = romanDate + "ante diem iii idus ";
				break;
		}
		break;
	case 12:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem iv idus ";
				break;
			default:
				romanDate = romanDate + "pridie idus ";
				break;
		}
		break;
	case 13:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "ante diem iii idus ";
				break;
			default:
				romanDate = romanDate + "idibus ";
				break;
		}
		break;
	case 14:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "pridie idus ";
				break;
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xix kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xvi kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xviii kalendas ";
				break;
		}
		break;
	case 15:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
				romanDate = romanDate + "idibus ";
				break;
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xviii kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xv kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xvii kalendas ";
				break;
		}
		break;
	case 16:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xvii kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xiv kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xvi kalendas ";
				break;
		}
		break;
	case 17:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xvi kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xiii kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xv kalendas ";
				break;
		}
		break;
	case 18:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xv kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xii kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xiv kalendas ";
				break;
		}
		break;
	case 19:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xiv kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem xi kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xiii kalendas ";
				break;
		}
		break;
	case 20:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xiii kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem x kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xii kalendas ";
				break;
		}
		break;
	case 21:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xii kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem ix kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem xi kalendas ";
				break;
		}
		break;
	case 22:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem xi kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem viii kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem x kalendas ";
				break;
		}
		break;
	case 23:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem x kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem vii kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem ix kalendas ";
				break;
		}
		break;
	case 24:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem ix kalendas ";
				break;
			case 2:
				romanDate = romanDate + "ante diem vi kalendas ";
				break;
			default:
				romanDate = romanDate + "ante diem viii kalendas ";
				break;
		}
		break;
	case 25:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem viii kalendas ";
				break;
			case 2:
				switch(isLeap) {
					case 1:
						romanDate = romanDate + "ante diem bis vi kalendas ";
						break;
					default:
						romanDate = romanDate + "ante diem v kalendas ";
						break;
				}
				break;
			default:
				romanDate = romanDate + "ante diem vii kalendas ";
				break;
		}
		break;
	case 26:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem vii kalendas ";
				break;
			case 2:
				switch(isLeap) {
					case 1:
						romanDate = romanDate + "ante diem v kalendas ";
						break;
					default:
						romanDate = romanDate + "ante diem iv kalendas ";
						break;
				}
				break;
			default:
				romanDate = romanDate + "ante diem vi kalendas ";
				break;
		}
		break;
	case 27:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem vi kalendas ";
				break;
			case 2:
				switch(isLeap) {
					case 1:
						romanDate = romanDate + "ante diem iv kalendas ";
						break;
					default:
						romanDate = romanDate + "ante diem iii kalendas ";
						break;
				}
				break;
			default:
				romanDate = romanDate + "ante diem v kalendas ";
				break;
		}
		break;
	case 28:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem v kalendas ";
				break;
			case 2:
				switch(isLeap) {
					case 1:
						romanDate = romanDate + "ante diem iii kalendas ";
						break;
					default:
						romanDate = romanDate + "pridie kalendas ";
						break;
				}
				break;
			default:
				romanDate = romanDate + "ante diem iv kalendas ";
				break;
		}
		break;
	case 29:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem iv kalendas ";
				break;
			case 2:
				switch(isLeap) {
					case 1:
						romanDate = romanDate + "pridie kalendas ";
						break;
					default:
						break;
				}
				break;
			default:
				romanDate = romanDate + "ante diem iii kalendas ";
				break;
		}
		break;
	case 30:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "ante diem iii kalendas ";
				break;
			case 2:
				break;
			default:
				romanDate = romanDate + "pridie kalendas ";
				break;
		}
		break;
	case 31:
		switch(whatMonth) {
			case 3:
			case 5:
			case 7:
			case 10:
			case 1:
			case 8:
			case 12:
				romanDate = romanDate + "pridie kalendas ";
				break;
			default:
				break;
		}
		break;
	default:
		break;
}

//month - at least it's not as complicated as the days are

switch(whatMonth) {
	case 1:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "ianuariis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "ianuarias ";
		} else {
			romanDate = romanDate + "februarias ";
		}
		break;
	case 2:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "februariis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "februarias ";
		} else {
			romanDate = romanDate + "martias ";
		}
		break;
	case 3:
		if (whatDay == 1 || whatDay == 7 || whatDay == 15) {
			romanDate = romanDate + "martiis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "martias ";
		} else {
			romanDate = romanDate + "apriles ";
		}
		break;
	case 4:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "aprilibus ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "apriles ";
		} else {
			romanDate = romanDate + "maias ";
		}
		break;
	case 5:
		if (whatDay == 1 || whatDay == 7 || whatDay == 15) {
			romanDate = romanDate + "maiis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "maias ";
		} else {
			romanDate = romanDate + "iunias ";
		}
		break;
	case 6:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "iuniis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "iunias ";
		} else {
			romanDate = romanDate + "iulias ";
		}
		break;
	case 7:
		if (whatDay == 1 || whatDay == 7 || whatDay == 15) {
			romanDate = romanDate + "iuliis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "iulias ";
		} else {
			romanDate = romanDate + "augustas ";
		}
		break;
	case 8:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "augustis ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "augustas ";
		} else {
			romanDate = romanDate + "septembres ";
		}
		break;
	case 9:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "septembribus ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "septembres ";
		} else {
			romanDate = romanDate + "octobres ";
		}
		break;
	case 10:
		if (whatDay == 1 || whatDay == 7 || whatDay == 15) {
			romanDate = romanDate + "octobribus ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "octobres ";
		} else {
			romanDate = romanDate + "novembres ";
		}
		break;
	case 11:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "novembribus ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "novembres ";
		} else {
			romanDate = romanDate + "decembres ";
		}
		break;
	case 12:
		if (whatDay == 1 || whatDay == 5 || whatDay == 13) {
			romanDate = romanDate + "decembribus ";
		} else if (whatDay < 14) {
			romanDate = romanDate + "decembres ";
		} else {
			romanDate = romanDate + "ianuarias ";
		}
		break;
	default:
		break;
}

// year - easy peasy
var theYear = String(whatYear);
if (theYear.length != 4) {
	romanDate = "Year " + theYear + " - Are you the Doctor?";
} else {
	switch(theYear[0]) {
		case "2":
			romanDate = romanDate + "MM";
			switch(theYear[1]) {
				case "1":
					romanDate = romanDate + "C";
					break;
				case "2":
					romanDate = romanDate + "CC";
					break;
				case "3":
					romanDate = romanDate + "CCC";
					break;
				case "4":
					romanDate = romanDate + "CD";
					break;
				case "5":
					romanDate = romanDate + "D";
					break;
				case "6":
					romanDate = romanDate + "DC";
					break;
				case "7":
					romanDate = romanDate + "DCC";
					break;
				case "8":
					romanDate = romanDate + "DCCC";
					break;
				case "9":
					romanDate = romanDate + "CM";
					break;
				default:
					break;
			}
			switch(theYear[2]) {
				case "1":
					romanDate = romanDate + "X";
					break;
				case "2":
					romanDate = romanDate + "XX";
					break;
				case "3":
					romanDate = romanDate + "XXX";
					break;
				case "4":
					romanDate = romanDate + "XL";
					break;
				case "5":
					romanDate = romanDate + "L";
					break;
				case "6":
					romanDate = romanDate + "LX";
					break;
				case "7":
					romanDate = romanDate + "LXX";
					break;
				case "8":
					romanDate = romanDate + "LXXX";
					break;
				case "9":
					romanDate = romanDate + "XC";
					break;
				default:
					break;
			}
			switch(theYear[3]) {
				case "1":
					romanDate = romanDate + "I";
					break;
				case "2":
					romanDate = romanDate + "II";
					break;
				case "3":
					romanDate = romanDate + "III";
					break;
				case "4":
					romanDate = romanDate + "IV";
					break;
				case "5":
					romanDate = romanDate + "V";
					break;
				case "6":
					romanDate = romanDate + "VI";
					break;
				case "7":
					romanDate = romanDate + "VII";
					break;
				case "8":
					romanDate = romanDate + "VIII";
					break;
				case "9":
					romanDate = romanDate + "IX";
					break;
				default:
					break;
			}
			break;
		default:
			romanDate = "Year " + theYear + " - Are you the Doctor?";
			break;
	}
}
romanDate = "<a href='grammar.html#Sect371'>" + romanDate + "</a>";