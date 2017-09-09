$(function(){
    data_vn = {
        0 : {
        day: 'Chúa Nhật',
        content: 'Cầu nguyện cho Festival Yêu Hà Nội thành công tốt đẹp và cầu xin Chúa cho qua lễ hội sẽ có thật nhiều người tin nhận và thờ phượng Chúa'
        },
        1 : {
        day: 'Thứ Hai',
        content: 'Cầu nguyện cho các bậc cầm quyền từ Trung Ương và các dân tộc Việt Nam'
        },
        2 : {
        day: 'Thứ Ba',
        content: 'Cầu nguyện cho lãnh đạo thành phố và người dân Hà Nội'
        },
        3 : {
        day: 'Thứ Tư',
        content: 'Cầu nguyện cho Mục sư Tiến sĩ Franklin Graham và Hiệp Hội Truyền Giáo Billy Graham'
        },
        4 : {
        day: 'Thứ Năm',
        content: 'Cầu nguyện cho ban tổ chức Festival Yêu Hà Nội và nguồn tài chính cho lễ hội'
        },
        5 : {
        day: 'Thứ Sáu',
        content: 'Cầu nguyện cho tất cả các Ủy ban hoạt động hiệu quả'
        },
        6 : {
        day: 'Thứ Bảy',
        content: 'Cầu nguyện cho cả cộng đồng Tin Lành hiệp một trong sự cầu thay cho lễ hội'
        }
    };
    var today = new Date().getDay();
    var date = new Date();
    var month = date.getUTCMonth()+1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var calendar = day + '/' + month + '/' + year;
    var notify_content = data_vn[today];
    $('#day').text(notify_content['day']);
    $('#content').text(notify_content['content']);    
});