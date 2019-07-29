<template>
    <div class="footer">
        <router-link to="/" class="footer-item">
            <span class="iconfont icon-index"></span>
            <span class="footer-item-text">主页</span>
        </router-link>
        <router-link to="/friends" class="footer-item">
            <span class="iconfont icon-friends"></span>
            <span class="footer-item-text">好友状态</span>
        </router-link>
        <router-link to="/rank" class="footer-item">
            <span class="iconfont icon-tianjia"></span>   
            <span class="footer-item-text">排行榜</span>
        </router-link>
        <router-link to="/mine" class="footer-item">
            <span class="iconfont icon-setting"></span>        
            <span class="footer-item-text">个人中心</span>    
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        position: absolute;
        left: 0;
        bottom:0;

        width: 100%;
        height: 50px;

        display: flex;
        justify-content: space-around;
        background-color: #fff;
        color: #666;
        border-top: 1px solid #f0f0f0;

        .footer-item {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 16px;
            .footer-item-text {
                font-size: 12px;
            }
        }
    }
</style>

