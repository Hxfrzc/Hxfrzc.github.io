var now = new Date();
var startDate = new Date("12/15/2025 00:00:00");

function createtime() {
    // 更新时间
    now.setTime(now.getTime() + 1000);

    // 计算时间差
    var totalMinutes = Math.floor((now - startDate) / 60000);
    var r = Math.floor(totalMinutes / 1440);        // 天数
    var s = Math.floor((totalMinutes % 1440) / 60);  // 小时数
    var l = Math.floor(totalMinutes % 60);          // 分钟数
    var b = Math.round((now - startDate) / 1000) % 60; // 秒数

    // 格式化时间
    s = String(s).padStart(2, "0");
    l = String(l).padStart(2, "0");
    b = String(b).padStart(2, "0");
    
    // 动态生成页面内容
    let content = `
        <div style="font-size:13px;font-weight:bold">
            本博客已存在了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
            <i id="heartbeat" class='fas fa-heartbeat'></i>
        </div>`;

    // 更新页面上的元素
    var workboardElement = document.getElementById("workboard");
    if (workboardElement) {
        workboardElement.innerHTML = content;
    }
}

// 每秒更新一次
setInterval(createtime, 1000);
