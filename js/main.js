
$(function () {


    // 出身年月日
    var Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// index => month [0-11]
    $(document).ready(function () {
        var option = '<option value="日">請選擇日</option>';
        var selectedDay = "日";
        for (var i = 1; i <= Days[0]; i++) { //add option days
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $('#ddl_day').append(option);
        $('#ddl_day').val(selectedDay);

        var option = '<option value="月">請選擇月</option>';
        var selectedMon = "月";
        for (var i = 1; i <= 12; i++) {
            option += '<option value="' + i + '">' + i + '</option>';
        }
        $('#ddl_month').append(option);
        $('#ddl_month').val(selectedMon);

        var d = new Date();
        var option = '<option value="年">請選擇年</option>';
        selectedYear = "年";
        for (var i = d.getFullYear() - 110; i <= d.getFullYear(); i++) {// years start i
            ii= i - 1911//民國
            option += '<option value="' + ii + '">' + ii + '</option>';
        }

        $('#ddl_year').append(option);
        $('#ddl_year').val(selectedYear);
    });
    


});
