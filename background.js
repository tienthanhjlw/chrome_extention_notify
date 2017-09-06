// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/
var data_vn = {
  0 : {
    day: 'Chúa nhật',
    content: 'Cầu nguyện cho Festival Yêu Hà Nội thành công tốt đẹp và cầu xin Chúa cho qua lễ hội sẽ có thật nhiều người tin nhận và thờ phượng Chúa'
  },
  1 : {
    day: 'Thứ hai',
    content: 'Cầu nguyện cho các bậc cầm quyền từ Trung Ương và các dân tộc Việt Nam'
  },
  2 : {
    day: 'Thứ ba',
    content: 'Cầu nguyện cho lãnh đạo thành phố và người dân Hà Nội'
  },
  3 : {
    day: 'Thứ tư',
    content: 'Cầu nguyện cho Mục sư Tiến sĩ Franklin Graham và đoàn truyền giáo BGEA'
  },
  4 : {
    day: 'Thứ năm',
    content: 'Cầu nguyện cho ban tổ chức Festival Yêu Hà Nội và nguồn tài chính cho lễ hội'
  },
  5 : {
    day: 'Thứ sáu',
    content: 'Cầu nguyện cho tất cả các Ủy ban hoạt động hiệu quả'
  },
  6 : {
    day: 'Thứ bảy',
    content: 'Cầu nguyện cho cả cộng đồng Tin Lành hiệp một trong sự cầu thay cho lễ hội'
  }
};

function show() {
  var alarm = new Audio();
  alarm.src = "alarm.wav";
  var time = /(..)(:..)/.exec(new Date());    // The prettyprinted time.
  var today = new Date().getDay();
  var date = new Date();
  var month = date.getUTCMonth()+1;
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var calendar = day + '/' + month + '/' + year;
  var notify_content = data_vn[today];
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  if (time[0] == "9:05") {
    alarm.play();
    reminder(notify_content["day"], calendar);
  }
  if (time[0] == "12:05") {
    alarm.play();
    showContent(notify_content["day"], notify_content["content"], calendar);
  }
}

function reminder(today, calendar) {
  new Notification('Nhắc nhở', {
    icon: '128.png',
    body: 'Hôm nay ' + today + ' ' + calendar + '. Các bạn nhớ cầu nguyện cho dân tộc Việt Nam vào 12:08 - 12:10 nhé!'
  });
}

function showContent(today, content, calendar) {
  new Notification(today + ' ' + calendar, {
    icon: '128.png',
    body: content
  });
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.Notification) {
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { show(); }

  var interval = 0; // The display interval, in minutes.

  setInterval(function() {
    interval++;

    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      show();
      interval = 0;
    }
  }, 60000);
}