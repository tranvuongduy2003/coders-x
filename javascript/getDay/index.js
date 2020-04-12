var day = new Date();
current_day = day.getDay();
            //var day_name="";
 switch (current_day) {
                case 0:
                    day_name = "chủ nhật";
                    break;
                case 1:
                    day_name = "thứ hai";
                    break;
                case 2:
                    day_name = "thứ ba";
                    break;
                case 3:
                    day_name = "thứ tư";
                    break;
                case 4:
                    day_name = "thứ năm";
                    break;
                case 5:
                    day_name = "thứ sáu";
                    break;
                case 6:
                    day_name = "thứ bảy";
                    break;
            }
console.log(day_name);