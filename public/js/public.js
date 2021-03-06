/**
 * @Type	: Public File
 * @Brief	: 提供公共函数
 * @Author	: 林晓州
 * @Date	: 2017.07.20
 */



function ol_pad(num, n)
{ 
	num = ""+num
	var temp = num;
	
	for(var i=0;i<(n-num.length);i++)
	{
		temp = "0"+temp
	}	
	return temp
}


function _get_standard_date_string(date)
{
	var str = "";
	var myDate = new Date();
	if(""!=date && undefined!=date && null!=date){myDate = new Date(date);}
	str = str+myDate.getFullYear();   
	str = str+"-"+ol_pad((myDate.getMonth()+1),2);   
	str = str+"-"+ol_pad(myDate.getDate(), 2);   
	return str;
}


function _conv_date(date_str) // 20170721
{
	var str = date_str.substring(0,4)+"-"+date_str.substring(4,6)+"-"+date_str.substring(6,8)
	return str;
}


function _check_date_validity(date)
{
	if("0000/00/00" == date){return 0;}
	if("0000-00-00" == date){return 0;}
		
	var validity = 1;
	
	if(date!=date.match(/\d{4}\/\d{2}\/\d{2}/ig))
	{
		validity = 0;
	}
	
	return validity;
}



function _is_day_plus_1(start, total) // 19:23, 05:34
{
	var min_total = parseInt(start.substring(3,5)) + parseInt(total.substring(3,5));
	var hour_plus = parseInt(min_total / 60);

	var hour_total = parseInt(start.substring(0,2)) + parseInt(total.substring(0,2));
	var day_plus = parseInt((hour_plus + hour_total) / 24);

	return day_plus;
}



