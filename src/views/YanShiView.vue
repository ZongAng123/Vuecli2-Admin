<template>
  <div class="yashi">
    <div class="toview">
        <div class="leftview">
            <h5>
                首先皮肤要保持洁净、干燥，用磨砂纸将电极贴片需要安放位置（右锁骨下一指处、左侧第五肋骨与左腋前线交点处、两乳头连接中点处）的皮肤角质层擦净。
                用清水清洗干净，并用纸擦干或自然晾干。
                取出电极贴片，将电极贴片贴纸擦拭部位。
                取出导联线，将3根电极导联线扣入心电电极贴片中，将红色电极放置于右锁骨下一指处；将黄色电极放置于两乳头中点处；将黑色电极放置于左第五肋与左腋前线交点处。
                最后将心电导联线另一端插头沿箭头方向正确插入监测设备。开启监测设备便可进行心电监测。
            </h5>
        </div>
        <div class="rightview">
            <EasyPlayer id="EasyPlayer" videoUrl="http://192.168.100.53:8080/live/ch04_1.flv" fluent>
            </EasyPlayer>
        </div>
    </div>
    <div class="hhview">
    <el-image class="image"
    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcrawl.ws.126.net%2Fd2747eedb2b7205c7d157fbdc212ed07.jpg&refer=http%3A%2F%2Fcrawl.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674701006&t=ddc0f65705f621631c51b9483b2665e4" lazy>
    </el-image>
    <el-image class="image"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnewmarket1.tt286.com%3A8080%2Fmfiles%2Fchannels%2F360%2Fimgs%2F2015%2F04%2F04%2F1428089193814%2Ft01776bde356374dfa9.jpg&refer=http%3A%2F%2Fnewmarket1.tt286.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674701028&t=8b74e5202866ff2f99d6b5377311f68a"
        lazy>
    </el-image>
    </div>
  </div>
</template>

<script>
import EasyPlayer from '@easydarwin/easyplayer'

export default {
    data() {
        return {
            
        }
    },
    components: {
        EasyPlayer
    }
}
</script>

<style>
.yashi{
    display: align;
    background-color: white;
    height: 100vh;
}
.toview{
    display: flex;
    background-color: red;
    height: 300px;
    width: 100%;
}
.leftview{
    background-color: rgb(192, 211, 98);
    height: 300px;
    width: 600px;
}
.rightview{
    background-color: rgb(31, 171, 184);
    height: 300px;
    width: 420px;
}
.hhview{
    background-color: rgb(76, 96, 147);
    height: 300px;
    width: 100%;
}
#EasyPlayer {
    height: 300px;
    width: 420px;
    margin: 0 auto;
}
.image{
    height: 300px;
    width: 500px;
}
</style>